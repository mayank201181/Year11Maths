"use client";

import Link from "next/link";
import { useMemo } from "react";
import { TOPICS } from "@/lib/topics";
import { useStore, todayStr } from "@/lib/store";
import { rankFor, nextRank } from "@/lib/ranks";

export default function HomePage() {
  const { profile, progress, dueReviewIds, setGoalMinutes } = useStore();
  const rank = rankFor(progress.stars);
  const next = nextRank(progress.stars);

  const today = progress.analytics.perDay[todayStr()];
  const minsToday = Math.floor((today?.seconds ?? 0) / 60);
  const goalPct = Math.min(100, Math.round((minsToday / progress.goalMinutes) * 100));

  const topicProgress = useMemo(() => {
    const map: Record<string, { answered: number; correct: number }> = {};
    for (const t of TOPICS) {
      map[t.id] = progress.analytics.perTopic[t.id] ?? { answered: 0, correct: 0 };
    }
    return map;
  }, [progress.analytics.perTopic]);

  return (
    <main className="space-y-8">
      {/* Dashboard strip */}
      <section className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div>
            <p className="text-indigo-200 text-sm">Welcome back,</p>
            <h1 className="text-2xl font-bold">
              {profile?.avatar} {profile?.name}
            </h1>
            <p className="text-sm text-indigo-100 mt-1">
              {rank.emoji} {rank.name}
              {next && (
                <span className="text-indigo-200"> · {next.minStars - progress.stars} ⭐ to {next.name}</span>
              )}
            </p>
          </div>
          <div className="flex gap-6 ml-auto text-center">
            <div>
              <p className="text-2xl font-bold">⭐ {progress.stars}</p>
              <p className="text-xs text-indigo-200">stars</p>
            </div>
            <div>
              <p className="text-2xl font-bold">🔥 {progress.streak.current}</p>
              <p className="text-xs text-indigo-200">day streak</p>
            </div>
            <div>
              <p className="text-2xl font-bold">📚 {dueReviewIds.length}</p>
              <p className="text-xs text-indigo-200">to review</p>
            </div>
          </div>
        </div>
        {/* Daily goal */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-sm mb-1.5">
            <span className="text-indigo-100">
              Today&apos;s goal: {minsToday}/{progress.goalMinutes} min
            </span>
            <span className="flex gap-1">
              {[10, 20, 30, 45].map((g) => (
                <button
                  key={g}
                  onClick={() => setGoalMinutes(g)}
                  className={`text-xs rounded-full px-2 py-0.5 ${
                    progress.goalMinutes === g ? "bg-white text-indigo-700 font-bold" : "bg-white/20 hover:bg-white/30"
                  }`}
                >
                  {g}m
                </button>
              ))}
            </span>
          </div>
          <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${goalPct >= 100 ? "bg-emerald-300" : "bg-amber-300"}`}
              style={{ width: `${goalPct}%` }}
            />
          </div>
          {goalPct >= 100 && <p className="text-xs text-emerald-200 mt-1">Goal smashed today! 🎉</p>}
        </div>
      </section>

      {dueReviewIds.length > 0 && (
        <Link
          href="/review"
          className="card p-4 flex items-center gap-3 hover:border-rose-300 hover:shadow-md transition"
        >
          <span className="text-3xl">🧠</span>
          <div className="flex-1">
            <p className="font-semibold text-slate-800">{dueReviewIds.length} questions due for review</p>
            <p className="text-xs text-slate-400">Spaced repetition locks them into long-term memory.</p>
          </div>
          <span className="btn btn-primary text-sm no-print">Review now</span>
        </Link>
      )}

      {/* Topic grid */}
      <section>
        <h2 className="text-lg font-bold text-slate-900 mb-3">Topics · Edexcel IGCSE Higher</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TOPICS.map((t) => {
            const tp = topicProgress[t.id];
            const acc = tp.answered > 0 ? Math.round((tp.correct / tp.answered) * 100) : null;
            const guideRead = !!progress.guidesRead[t.id];
            return (
              <Link
                key={t.id}
                href={`/topic/${t.id}`}
                className="card p-4 hover:border-indigo-300 hover:shadow-md transition group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{t.icon}</span>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800 leading-tight">{t.title}</p>
                    <p className="text-xs text-slate-400 mt-1.5">
                      {guideRead ? "📖 read" : "📖 unread"}
                      {acc !== null && <> · {acc}% accuracy · {tp.answered} answered</>}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Mock exams shortcut */}
      <Link
        href="/exams"
        className="card p-5 flex items-center gap-4 hover:border-indigo-300 hover:shadow-md transition"
      >
        <span className="text-4xl">🏆</span>
        <div className="flex-1">
          <p className="font-bold text-slate-800">Mock Exams</p>
          <p className="text-sm text-slate-500">Two full cross-topic exams, just like the real thing.</p>
        </div>
        <span className="text-slate-300 text-xl">→</span>
      </Link>
    </main>
  );
}
