"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Profile, ProgressDoc } from "@/lib/profileTypes";
import { TOPICS } from "@/lib/topics";
import { rankFor } from "@/lib/ranks";
import { todayStr } from "@/lib/store";

interface Learner {
  profile: Profile;
  progress: ProgressDoc;
}

function fmtMins(seconds: number): string {
  const m = Math.round(seconds / 60);
  if (m < 60) return `${m} min`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

function WeekChart({ progress }: { progress: ProgressDoc }) {
  const days = useMemo(() => {
    const out: { label: string; date: string; seconds: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 24 * 3600 * 1000);
      const date = todayStr(d);
      out.push({
        label: d.toLocaleDateString("en-GB", { weekday: "short" }),
        date,
        seconds: progress.analytics.perDay[date]?.seconds ?? 0,
      });
    }
    return out;
  }, [progress]);
  const max = Math.max(...days.map((d) => d.seconds), 60);
  return (
    <div className="flex items-end gap-2 h-24">
      {days.map((d) => (
        <div key={d.date} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full rounded-t-md bg-indigo-400 min-h-0.5"
            style={{ height: `${Math.max(2, (d.seconds / max) * 80)}px` }}
            title={fmtMins(d.seconds)}
          />
          <span className="text-[10px] text-slate-400">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function LearnerCard({ learner }: { learner: Learner }) {
  const { profile, progress } = learner;
  const rank = rankFor(progress.stars);
  const totals = Object.values(progress.analytics.perTopic).reduce(
    (acc, t) => ({ answered: acc.answered + t.answered, correct: acc.correct + t.correct }),
    { answered: 0, correct: 0 }
  );
  const acc = totals.answered > 0 ? Math.round((totals.correct / totals.answered) * 100) : null;
  const recentLog = [...progress.analytics.log].reverse().slice(0, 8);

  return (
    <div className="card p-5 space-y-5">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-3xl">{profile.avatar}</span>
        <div>
          <h2 className="font-bold text-slate-900">{profile.name}</h2>
          <p className="text-xs text-slate-500">
            {rank.emoji} {rank.name} · ⭐ {progress.stars} · 🔥 {progress.streak.current} day streak (best{" "}
            {progress.streak.best})
          </p>
        </div>
        <div className="ml-auto text-right text-sm">
          <p className="font-semibold text-slate-700">{fmtMins(progress.analytics.totalSeconds)} total</p>
          <p className="text-xs text-slate-400">
            {progress.analytics.sessions} sessions{acc !== null && ` · ${acc}% accuracy`}
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">This week</p>
        <WeekChart progress={progress} />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">By topic</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-400">
                <th className="py-1 pr-2 font-medium">Topic</th>
                <th className="py-1 px-2 font-medium">Guide</th>
                <th className="py-1 px-2 font-medium">Answered</th>
                <th className="py-1 px-2 font-medium">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {TOPICS.map((t) => {
                const tp = progress.analytics.perTopic[t.id];
                const a = tp && tp.answered > 0 ? Math.round((tp.correct / tp.answered) * 100) : null;
                return (
                  <tr key={t.id} className="border-t border-slate-100">
                    <td className="py-1.5 pr-2 text-slate-700">
                      {t.icon} {t.title}
                    </td>
                    <td className="py-1.5 px-2">{progress.guidesRead[t.id] ? "✅" : "—"}</td>
                    <td className="py-1.5 px-2 text-slate-500">{tp?.answered ?? 0}</td>
                    <td className={`py-1.5 px-2 font-medium ${a === null ? "text-slate-300" : a >= 70 ? "text-emerald-600" : a >= 50 ? "text-amber-600" : "text-rose-600"}`}>
                      {a === null ? "—" : `${a}%`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {recentLog.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">Recent activity</p>
          <ul className="space-y-1 text-sm text-slate-600">
            {recentLog.map((e, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-xs text-slate-400 shrink-0 w-24">
                  {new Date(e.t).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}{" "}
                  {new Date(e.t).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                </span>
                <span>
                  {e.label}
                  {e.stars ? ` (+${e.stars} ⭐)` : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ParentPage() {
  const [pin, setPin] = useState("");
  const [learners, setLearners] = useState<Learner[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const unlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/parent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) setError(data?.error ?? "Could not unlock.");
      else setLearners(data.learners);
    } catch {
      setError("You seem to be offline.");
    }
    setBusy(false);
  };

  if (!learners) {
    return (
      <main className="max-w-sm mx-auto pt-16">
        <div className="card p-8 text-center">
          <div className="text-4xl mb-2">👨‍👩‍👧</div>
          <h1 className="text-xl font-bold text-slate-900">Parent dashboard</h1>
          <p className="text-sm text-slate-500 mt-1 mb-5">Enter your parent PIN to see progress reports.</p>
          <form onSubmit={unlock} className="space-y-3">
            <input
              className="input text-center text-xl tracking-[0.4em] font-mono"
              inputMode="numeric"
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="••••"
              autoFocus
            />
            {error && <p className="text-sm text-red-600 bg-red-50 rounded-lg p-2">{error}</p>}
            <button className="btn btn-primary w-full" disabled={busy || pin.length < 4}>
              {busy ? "Checking…" : "Unlock"}
            </button>
          </form>
          <Link href="/" className="inline-block text-sm text-slate-400 hover:text-slate-600 mt-4">
            ← Back to the app
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">👨‍👩‍👧 Parent dashboard</h1>
        <Link href="/" className="text-sm text-slate-400 hover:text-slate-600">
          ← Back to the app
        </Link>
      </div>
      {learners.length === 0 && <p className="text-slate-500">No learner profiles yet.</p>}
      {learners.map((l) => (
        <LearnerCard key={l.profile.id} learner={l} />
      ))}
    </main>
  );
}
