"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { AccountPublic, ActivityKind, PaperSave, Profile, ProgressDoc } from "./profileTypes";
import { SRS_LADDER_DAYS, emptyProgress } from "./profileTypes";

export type StoreStatus = "loading" | "anon" | "no-profile" | "ready";

const DAY_MS = 24 * 3600 * 1000;
const ACTIVE_PROFILE_KEY = "y11m-active-profile";

export function todayStr(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function localKey(profileId: string): string {
  return `y11m-progress-${profileId}`;
}

function loadLocal(profileId: string): ProgressDoc | null {
  try {
    const raw = localStorage.getItem(localKey(profileId));
    if (!raw) return null;
    const doc = JSON.parse(raw) as ProgressDoc;
    return doc.version === 1 ? doc : null;
  } catch {
    return null;
  }
}

interface StoreValue {
  status: StoreStatus;
  account: AccountPublic | null;
  profile: Profile | null;
  progress: ProgressDoc;
  syncState: "idle" | "saving" | "offline";
  signup: (familyName: string, password: string, pin: string) => Promise<string | null>;
  login: (familyName: string, password: string) => Promise<string | null>;
  logout: () => Promise<void>;
  addProfile: (name: string, avatar: string) => Promise<string | null>;
  editProfile: (id: string, name: string, avatar: string) => Promise<string | null>;
  removeProfile: (id: string) => Promise<string | null>;
  selectProfile: (id: string) => Promise<void>;
  deselectProfile: () => void;
  recordResult: (qid: string, topicId: string, correct: boolean) => void;
  markGuideRead: (topicId: string) => void;
  awardStars: (paperId: string, stars: number, label: string, kind: ActivityKind, topicId?: string) => void;
  recordChallenge: (topicId: string, score: number) => void;
  savePaper: (paperId: string, save: PaperSave) => void;
  clearPaper: (paperId: string) => void;
  setGoalMinutes: (minutes: number) => void;
  dueReviewIds: string[];
}

const StoreContext = createContext<StoreValue | null>(null);

async function api<T>(path: string, init?: RequestInit): Promise<{ ok: boolean; data: T | null; error?: string }> {
  try {
    const res = await fetch(path, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      ...init,
    });
    const data = (await res.json().catch(() => null)) as (T & { error?: string }) | null;
    if (!res.ok) return { ok: false, data: null, error: data?.error ?? "Request failed" };
    return { ok: true, data };
  } catch {
    return { ok: false, data: null, error: "You seem to be offline." };
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<StoreStatus>("loading");
  const [account, setAccount] = useState<AccountPublic | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [progress, setProgress] = useState<ProgressDoc>(emptyProgress());
  const [syncState, setSyncState] = useState<"idle" | "saving" | "offline">("idle");

  const progressRef = useRef(progress);
  progressRef.current = progress;
  const profileRef = useRef(profile);
  profileRef.current = profile;
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pushToServer = useCallback(async () => {
    const p = profileRef.current;
    if (!p) return;
    setSyncState("saving");
    const res = await api("/api/progress", {
      method: "POST",
      body: JSON.stringify({ profileId: p.id, progress: progressRef.current }),
    });
    setSyncState(res.ok ? "idle" : "offline");
  }, []);

  const scheduleSync = useCallback(() => {
    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(pushToServer, 1500);
  }, [pushToServer]);

  /** Apply a mutation to progress, persist locally, and schedule a cloud sync. */
  const mutate = useCallback(
    (fn: (draft: ProgressDoc) => void) => {
      const p = profileRef.current;
      if (!p) return;
      const draft: ProgressDoc = JSON.parse(JSON.stringify(progressRef.current));
      fn(draft);
      draft.updatedAt = Date.now();
      setProgress(draft);
      progressRef.current = draft;
      try {
        localStorage.setItem(localKey(p.id), JSON.stringify(draft));
      } catch {
        // storage full/blocked — cloud sync still covers us
      }
      scheduleSync();
    },
    [scheduleSync]
  );

  const touchStreakAndDay = useCallback((draft: ProgressDoc) => {
    const today = todayStr();
    if (draft.streak.lastDay !== today) {
      const yesterday = todayStr(new Date(Date.now() - DAY_MS));
      draft.streak.current = draft.streak.lastDay === yesterday ? draft.streak.current + 1 : 1;
      draft.streak.best = Math.max(draft.streak.best, draft.streak.current);
      draft.streak.lastDay = today;
    }
    if (!draft.analytics.perDay[today]) draft.analytics.perDay[today] = { seconds: 0, answered: 0, correct: 0 };
    return draft.analytics.perDay[today];
  }, []);

  // ---- boot: who is logged in? ----
  useEffect(() => {
    (async () => {
      const res = await api<{ account: AccountPublic }>("/api/auth/me");
      if (!res.ok || !res.data?.account) {
        setStatus("anon");
        return;
      }
      setAccount(res.data.account);
      const savedId = localStorage.getItem(ACTIVE_PROFILE_KEY);
      const saved = res.data.account.profiles.find((p) => p.id === savedId);
      if (saved) {
        await activateProfile(saved);
      } else {
        setStatus("no-profile");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activateProfile = useCallback(async (p: Profile) => {
    setProfile(p);
    profileRef.current = p;
    localStorage.setItem(ACTIVE_PROFILE_KEY, p.id);
    const local = loadLocal(p.id);
    if (local) {
      setProgress(local);
      progressRef.current = local;
    } else {
      const fresh = emptyProgress();
      setProgress(fresh);
      progressRef.current = fresh;
    }
    setStatus("ready");
    // Pull the cloud copy; keep whichever is newer.
    const res = await api<{ progress: ProgressDoc }>(`/api/progress?profileId=${encodeURIComponent(p.id)}`);
    if (res.ok && res.data?.progress) {
      const server = res.data.progress;
      const current = progressRef.current;
      if (server.updatedAt > current.updatedAt) {
        setProgress(server);
        progressRef.current = server;
        try {
          localStorage.setItem(localKey(p.id), JSON.stringify(server));
        } catch {}
      } else if (current.updatedAt > server.updatedAt) {
        void pushToServer();
      }
    }
    // Count a session.
    setTimeout(() => {
      mutateRef.current?.((draft) => {
        draft.analytics.sessions += 1;
      });
    }, 0);
  }, [pushToServer]);

  const mutateRef = useRef<typeof mutate | null>(null);
  mutateRef.current = mutate;

  // ---- heartbeat: time on task while the tab is visible ----
  useEffect(() => {
    if (status !== "ready") return;
    const HEARTBEAT_S = 20;
    const tick = () => {
      if (document.visibilityState !== "visible") return;
      mutate((draft) => {
        const day = touchStreakAndDay(draft);
        day.seconds += HEARTBEAT_S;
        draft.analytics.totalSeconds += HEARTBEAT_S;
      });
    };
    const id = setInterval(tick, HEARTBEAT_S * 1000);
    return () => clearInterval(id);
  }, [status, mutate, touchStreakAndDay]);

  // Flush pending sync when leaving.
  useEffect(() => {
    const flush = () => {
      const p = profileRef.current;
      if (!p) return;
      try {
        navigator.sendBeacon(
          "/api/progress",
          new Blob([JSON.stringify({ profileId: p.id, progress: progressRef.current })], {
            type: "application/json",
          })
        );
      } catch {}
    };
    window.addEventListener("pagehide", flush);
    return () => window.removeEventListener("pagehide", flush);
  }, []);

  // ---- auth actions ----
  const signup = useCallback(async (familyName: string, password: string, pin: string) => {
    const res = await api<{ account: AccountPublic }>("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ familyName, password, pin }),
    });
    if (!res.ok || !res.data) return res.error ?? "Sign-up failed.";
    setAccount(res.data.account);
    setStatus("no-profile");
    return null;
  }, []);

  const login = useCallback(async (familyName: string, password: string) => {
    const res = await api<{ account: AccountPublic }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ familyName, password }),
    });
    if (!res.ok || !res.data) return res.error ?? "Login failed.";
    setAccount(res.data.account);
    setStatus("no-profile");
    return null;
  }, []);

  const logout = useCallback(async () => {
    await api("/api/auth/logout", { method: "POST" });
    localStorage.removeItem(ACTIVE_PROFILE_KEY);
    setAccount(null);
    setProfile(null);
    setProgress(emptyProgress());
    setStatus("anon");
  }, []);

  // ---- profile actions ----
  const addProfile = useCallback(async (name: string, avatar: string) => {
    const res = await api<{ account: AccountPublic; profile: Profile }>("/api/profiles", {
      method: "POST",
      body: JSON.stringify({ name, avatar }),
    });
    if (!res.ok || !res.data) return res.error ?? "Could not add profile.";
    setAccount(res.data.account);
    return null;
  }, []);

  const editProfile = useCallback(async (id: string, name: string, avatar: string) => {
    const res = await api<{ account: AccountPublic }>("/api/profiles", {
      method: "PATCH",
      body: JSON.stringify({ id, name, avatar }),
    });
    if (!res.ok || !res.data) return res.error ?? "Could not update profile.";
    setAccount(res.data.account);
    if (profileRef.current?.id === id) {
      const updated = res.data.account.profiles.find((p) => p.id === id);
      if (updated) setProfile(updated);
    }
    return null;
  }, []);

  const removeProfile = useCallback(async (id: string) => {
    const res = await api<{ account: AccountPublic }>("/api/profiles", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    if (!res.ok || !res.data) return res.error ?? "Could not delete profile.";
    setAccount(res.data.account);
    localStorage.removeItem(localKey(id));
    if (profileRef.current?.id === id) {
      setProfile(null);
      localStorage.removeItem(ACTIVE_PROFILE_KEY);
      setStatus("no-profile");
    }
    return null;
  }, []);

  const selectProfile = useCallback(
    async (id: string) => {
      const p = account?.profiles.find((x) => x.id === id);
      if (p) await activateProfile(p);
    },
    [account, activateProfile]
  );

  const deselectProfile = useCallback(() => {
    setProfile(null);
    localStorage.removeItem(ACTIVE_PROFILE_KEY);
    setStatus("no-profile");
  }, []);

  // ---- learning actions ----
  const recordResult = useCallback(
    (qid: string, topicId: string, correct: boolean) => {
      mutate((draft) => {
        const stat = draft.attempts[qid] ?? { correct: 0, wrong: 0, lastCorrect: false, at: 0 };
        if (correct) stat.correct += 1;
        else stat.wrong += 1;
        stat.lastCorrect = correct;
        stat.at = Date.now();
        draft.attempts[qid] = stat;

        const day = touchStreakAndDay(draft);
        day.answered += 1;
        if (correct) day.correct += 1;
        const pt = draft.analytics.perTopic[topicId] ?? { answered: 0, correct: 0 };
        pt.answered += 1;
        if (correct) pt.correct += 1;
        draft.analytics.perTopic[topicId] = pt;

        // Spaced repetition
        const item = draft.srs[qid];
        if (!correct) {
          draft.srs[qid] = {
            qid,
            topicId,
            step: 0,
            due: Date.now(), // due immediately; ladder starts advancing on first correct review
            lapses: (item?.lapses ?? 0) + 1,
          };
        } else if (item) {
          const nextStep = item.step + 1;
          if (nextStep >= SRS_LADDER_DAYS.length) {
            delete draft.srs[qid]; // graduated
          } else {
            item.step = nextStep;
            item.due = Date.now() + SRS_LADDER_DAYS[nextStep] * DAY_MS;
          }
        }
      });
    },
    [mutate, touchStreakAndDay]
  );

  const markGuideRead = useCallback(
    (topicId: string) => {
      mutate((draft) => {
        if (!draft.guidesRead[topicId]) {
          draft.guidesRead[topicId] = true;
          draft.stars += 2;
          touchStreakAndDay(draft);
          draft.analytics.log.push({ t: Date.now(), kind: "guide", topicId, label: "Read the guide", stars: 2 });
          if (draft.analytics.log.length > 200) draft.analytics.log.splice(0, draft.analytics.log.length - 200);
        }
      });
    },
    [mutate, touchStreakAndDay]
  );

  const awardStars = useCallback(
    (paperId: string, stars: number, label: string, kind: ActivityKind, topicId?: string) => {
      mutate((draft) => {
        const prev = draft.awarded[paperId] ?? 0;
        const gain = Math.max(0, stars - prev);
        draft.awarded[paperId] = Math.max(prev, stars);
        draft.stars += gain;
        touchStreakAndDay(draft);
        draft.analytics.log.push({ t: Date.now(), kind, topicId, label, stars: gain });
        if (draft.analytics.log.length > 200) draft.analytics.log.splice(0, draft.analytics.log.length - 200);
      });
    },
    [mutate, touchStreakAndDay]
  );

  const recordChallenge = useCallback(
    (topicId: string, score: number) => {
      mutate((draft) => {
        const prev = draft.challengeBest[topicId] ?? 0;
        if (score > prev) draft.challengeBest[topicId] = score;
        touchStreakAndDay(draft);
        draft.analytics.log.push({ t: Date.now(), kind: "challenge", topicId, label: `Challenge score ${score}` });
        if (draft.analytics.log.length > 200) draft.analytics.log.splice(0, draft.analytics.log.length - 200);
      });
    },
    [mutate, touchStreakAndDay]
  );

  const savePaper = useCallback(
    (paperId: string, save: PaperSave) => {
      mutate((draft) => {
        draft.papers[paperId] = save;
      });
    },
    [mutate]
  );

  const clearPaper = useCallback(
    (paperId: string) => {
      mutate((draft) => {
        delete draft.papers[paperId];
      });
    },
    [mutate]
  );

  const setGoalMinutes = useCallback(
    (minutes: number) => {
      mutate((draft) => {
        draft.goalMinutes = Math.min(Math.max(minutes, 5), 180);
      });
    },
    [mutate]
  );

  const dueReviewIds = useMemo(() => {
    const now = Date.now();
    return Object.values(progress.srs)
      .filter((item) => item.due <= now)
      .sort((a, b) => a.due - b.due)
      .map((item) => item.qid);
  }, [progress.srs]);

  const value: StoreValue = {
    status,
    account,
    profile,
    progress,
    syncState,
    signup,
    login,
    logout,
    addProfile,
    editProfile,
    removeProfile,
    selectProfile,
    deselectProfile,
    recordResult,
    markGuideRead,
    awardStars,
    recordChallenge,
    savePaper,
    clearPaper,
    setGoalMinutes,
    dueReviewIds,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
