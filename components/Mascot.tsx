"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useStore, todayStr } from "@/lib/store";
import { TOPICS } from "@/lib/topics";

export default function Mascot() {
  const { progress, dueReviewIds, profile } = useStore();
  const [dismissed, setDismissed] = useState(false);

  const nudge = useMemo(() => {
    const today = progress.analytics.perDay[todayStr()];
    const minsToday = Math.floor((today?.seconds ?? 0) / 60);
    if (dueReviewIds.length >= 3)
      return {
        text: `You have ${dueReviewIds.length} questions ready for review — beating them now locks them into memory!`,
        href: "/review",
        cta: "Start review",
      };
    if (minsToday === 0)
      return {
        text: `Hi ${profile?.name ?? "there"}! A quick topic a day keeps exam stress away. Pick one to start today's streak.`,
        href: "/",
        cta: "Pick a topic",
      };
    if (minsToday < progress.goalMinutes)
      return {
        text: `${minsToday} of ${progress.goalMinutes} minutes done today — keep it rolling! 🔥`,
        href: null,
        cta: null,
      };
    const unread = TOPICS.filter((t) => !progress.guidesRead[t.id]);
    if (unread.length > 0)
      return {
        text: `Goal smashed! Feeling brave? The ${unread[0].title} guide is waiting.`,
        href: `/topic/${unread[0].id}`,
        cta: "Open guide",
      };
    return { text: "Goal smashed and every guide read. You're in great shape — try a mock exam!", href: "/exams", cta: "Mock exams" };
  }, [progress, dueReviewIds, profile]);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-30 max-w-xs card p-3.5 flex gap-3 items-start shadow-lg no-print">
      <span className="text-3xl shrink-0" role="img" aria-label="Professor Pi the owl">
        🦉
      </span>
      <div className="text-sm text-slate-700">
        <p>{nudge.text}</p>
        {nudge.href && (
          <Link href={nudge.href} className="inline-block mt-1.5 text-indigo-600 font-semibold hover:underline">
            {nudge.cta} →
          </Link>
        )}
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="text-slate-300 hover:text-slate-500 shrink-0 -mt-1"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
