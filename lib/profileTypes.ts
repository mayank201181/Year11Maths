// Account / profile / progress types shared by client store and server API.

export interface Profile {
  id: string;
  name: string;
  avatar: string; // emoji
  createdAt: number;
}

export interface AccountPublic {
  id: string;
  familyName: string;
  profiles: Profile[];
}

export interface SrsItem {
  qid: string;
  topicId: string;
  /** Index into the SRS ladder [1,3,7,16,35] days. */
  step: number;
  /** Epoch ms when this item is next due. */
  due: number;
  lapses: number;
}

export type ActivityKind = "quiz" | "paper" | "guide" | "review" | "challenge" | "exam";

export interface ActivityEvent {
  t: number;
  kind: ActivityKind;
  topicId?: string;
  label: string;
  stars?: number;
}

export interface DayStat {
  seconds: number;
  answered: number;
  correct: number;
}

export interface Analytics {
  totalSeconds: number;
  sessions: number;
  perDay: Record<string, DayStat>; // key: YYYY-MM-DD
  perTopic: Record<string, { answered: number; correct: number }>;
  log: ActivityEvent[]; // most recent last, capped
}

export interface AttemptStat {
  correct: number;
  wrong: number;
  lastCorrect: boolean;
  at: number;
}

export interface PaperSave {
  answers: Record<string, number | string>;
  checked: Record<string, boolean>;
  hintsUsed: Record<string, number>;
  startedAt: number;
  updatedAt: number;
}

export interface ProgressDoc {
  version: 1;
  stars: number;
  /** paperId -> stars already awarded for it (prevents double-award). */
  awarded: Record<string, number>;
  attempts: Record<string, AttemptStat>; // by question id
  guidesRead: Record<string, boolean>; // topicId -> read
  srs: Record<string, SrsItem>; // by question id
  challengeBest: Record<string, number>; // topicId -> best score
  streak: { current: number; best: number; lastDay: string };
  goalMinutes: number;
  papers: Record<string, PaperSave>; // in-flight paper state (autosave/resume)
  analytics: Analytics;
  updatedAt: number;
}

export function emptyProgress(): ProgressDoc {
  return {
    version: 1,
    stars: 0,
    awarded: {},
    attempts: {},
    guidesRead: {},
    srs: {},
    challengeBest: {},
    streak: { current: 0, best: 0, lastDay: "" },
    goalMinutes: 20,
    papers: {},
    analytics: { totalSeconds: 0, sessions: 0, perDay: {}, perTopic: {}, log: [] },
    updatedAt: 0,
  };
}

export const SRS_LADDER_DAYS = [1, 3, 7, 16, 35];
