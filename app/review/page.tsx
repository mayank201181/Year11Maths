"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { QUESTION_INDEX, getTopic } from "@/lib/topics";
import type { MCQ, QA } from "@/lib/types";
import { gradeAnswer } from "@/lib/grade";
import { useStore } from "@/lib/store";

function isMCQ(q: MCQ | QA): q is MCQ {
  return (q as MCQ).options !== undefined;
}

export default function ReviewPage() {
  const { dueReviewIds, progress, recordResult, awardStars } = useStore();
  // Snapshot the queue when the page opens so items don't vanish mid-session.
  const [queue] = useState<string[]>(() => dueReviewIds.slice(0, 20));
  const [pos, setPos] = useState(0);
  const [answer, setAnswer] = useState<number | string | null>(null);
  const [checked, setChecked] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [doneCount, setDoneCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const entries = useMemo(
    () => queue.map((qid) => QUESTION_INDEX[qid]).filter(Boolean),
    [queue]
  );

  if (entries.length === 0) {
    return (
      <main className="text-center py-20">
        <div className="text-5xl mb-3">🌈</div>
        <h1 className="text-xl font-bold text-slate-900">Nothing due for review!</h1>
        <p className="text-slate-500 mt-2 text-sm">
          Questions you get wrong come back here on a smart schedule (1, 3, 7, 16, 35 days) until you own them.
        </p>
        <Link href="/" className="btn btn-primary mt-5">
          Back to topics
        </Link>
      </main>
    );
  }

  if (pos >= entries.length) {
    return (
      <main className="text-center py-20">
        <div className="text-5xl mb-3">🎉</div>
        <h1 className="text-xl font-bold text-slate-900">
          Review done — {correctCount}/{doneCount} right!
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          Correct answers move up the memory ladder; misses come back tomorrow.
        </p>
        <Link href="/" className="btn btn-primary mt-5">
          Back to topics
        </Link>
      </main>
    );
  }

  const entry = entries[pos];
  const q = entry.q;
  const topic = getTopic(entry.topicId);
  const srsItem = progress.srs[q.id];

  const check = () => {
    let correct: boolean;
    if (isMCQ(q)) {
      correct = answer === q.answerIndex;
    } else {
      correct = gradeAnswer(String(answer ?? ""), q.markScheme).result === "correct";
    }
    recordResult(q.id, entry.topicId, correct);
    setChecked(true);
    setLastCorrect(correct);
    setDoneCount((d) => d + 1);
    if (correct) setCorrectCount((c) => c + 1);
  };

  const next = () => {
    if (pos + 1 >= entries.length && correctCount > 0) {
      awardStars(
        `review-${Date.now()}`,
        Math.min(Math.ceil(correctCount / 2), 5),
        `Review session: ${correctCount}/${doneCount}`,
        "review"
      );
    }
    setPos((p) => p + 1);
    setAnswer(null);
    setChecked(false);
  };

  return (
    <main className="max-w-xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-slate-800">🧠 Review · {pos + 1}/{entries.length}</h1>
        <span className="text-xs text-slate-400">
          {topic?.icon} {topic?.title ?? "Mock exam"}
          {srsItem && srsItem.lapses > 1 && ` · missed ${srsItem.lapses}×`}
        </span>
      </div>

      <div className="card p-5">
        <p className="font-medium text-slate-900 whitespace-pre-wrap">{q.question}</p>

        {isMCQ(q) ? (
          <div className="space-y-2 mt-4">
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                disabled={checked}
                onClick={() => setAnswer(oi)}
                className={`w-full text-left rounded-xl border-2 p-3 text-sm transition ${
                  checked && oi === q.answerIndex
                    ? "border-emerald-500 bg-emerald-50"
                    : checked && answer === oi
                    ? "border-rose-400 bg-rose-50"
                    : answer === oi
                    ? "border-indigo-500 bg-indigo-50"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="font-bold text-slate-400 mr-2">{String.fromCharCode(65 + oi)}</span>
                {opt}
              </button>
            ))}
          </div>
        ) : (
          <textarea
            className="input mt-4 min-h-24 font-mono text-sm"
            placeholder="Type your answer…"
            value={String(answer ?? "")}
            disabled={checked}
            onChange={(e) => setAnswer(e.target.value)}
          />
        )}

        {!checked ? (
          <button onClick={check} disabled={answer === null || answer === ""} className="btn btn-primary mt-4">
            Check
          </button>
        ) : (
          <div className="mt-4 space-y-3">
            <div
              className={`rounded-xl p-4 text-sm border ${
                lastCorrect ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200"
              }`}
            >
              <p className="font-bold mb-1">{lastCorrect ? "✓ Got it — moving up the ladder!" : "✗ Not yet — it'll come back tomorrow."}</p>
              <p className="text-slate-700 whitespace-pre-wrap">
                {isMCQ(q) ? q.explanation : (q as QA).modelAnswer}
              </p>
            </div>
            <div className="flex items-center justify-between">
              {entry.topicId !== "exam" && (
                <Link href={`/topic/${entry.topicId}?tab=guide`} className="text-sm text-indigo-600 font-semibold hover:underline">
                  📖 Re-read the guide
                </Link>
              )}
              <button onClick={next} className="btn btn-primary ml-auto">
                {pos + 1 >= entries.length ? "Finish" : "Next →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
