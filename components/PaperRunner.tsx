"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { MCQ, QA, Paper } from "@/lib/types";
import type { ActivityKind, PaperSave } from "@/lib/profileTypes";
import { gradeAnswer, type GradeResult } from "@/lib/grade";
import { useStore } from "@/lib/store";
import AskAI from "./AskAI";

type AnyQ = MCQ | QA;

function isMCQ(q: AnyQ): q is MCQ {
  return (q as MCQ).options !== undefined;
}

const DIFF_STYLES: Record<string, string> = {
  warmup: "bg-emerald-100 text-emerald-700",
  core: "bg-sky-100 text-sky-700",
  challenge: "bg-rose-100 text-rose-700",
};
const DIFF_LABELS: Record<string, string> = {
  warmup: "Warm-up",
  core: "Core",
  challenge: "Challenge ★",
};

interface Props {
  paper: Paper<MCQ> | Paper<QA>;
  topicId: string;
  topicTitle: string;
  kind: ActivityKind;
  backHref: string;
}

export default function PaperRunner({ paper, topicId, topicTitle, kind, backHref }: Props) {
  const { progress, recordResult, awardStars, savePaper, clearPaper } = useStore();
  const questions = paper.questions as AnyQ[];

  const saved = progress.papers[paper.id];
  const [answers, setAnswers] = useState<Record<string, number | string>>(saved?.answers ?? {});
  const [checked, setChecked] = useState<Record<string, boolean>>(saved?.checked ?? {});
  const [selfGrade, setSelfGrade] = useState<Record<string, GradeResult>>({});
  const [hintsUsed, setHintsUsed] = useState<Record<string, number>>(saved?.hintsUsed ?? {});
  const [current, setCurrent] = useState(() => {
    const firstUnchecked = questions.findIndex((q) => !(saved?.checked ?? {})[q.id]);
    return firstUnchecked === -1 ? 0 : firstUnchecked;
  });
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const total = questions.length;
  const checkedCount = questions.filter((x) => checked[x.id]).length;

  // Autosave on every change.
  useEffect(() => {
    if (finished) return;
    if (Object.keys(answers).length === 0 && Object.keys(checked).length === 0) return;
    const save: PaperSave = {
      answers,
      checked,
      hintsUsed,
      startedAt: saved?.startedAt ?? Date.now(),
      updatedAt: Date.now(),
    };
    savePaper(paper.id, save);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, checked, hintsUsed]);

  const results = useMemo(() => {
    const out: Record<string, boolean> = {};
    for (const question of questions) {
      if (!checked[question.id]) continue;
      if (isMCQ(question)) {
        out[question.id] = answers[question.id] === question.answerIndex;
      } else {
        const grade = selfGrade[question.id] ?? gradeAnswer(String(answers[question.id] ?? ""), question.markScheme).result;
        out[question.id] = grade === "correct";
      }
    }
    return out;
  }, [questions, checked, answers, selfGrade]);

  const check = (question: AnyQ) => {
    if (checked[question.id]) return;
    let correct: boolean;
    if (isMCQ(question)) {
      correct = answers[question.id] === question.answerIndex;
    } else {
      const grade = gradeAnswer(String(answers[question.id] ?? ""), question.markScheme);
      setSelfGrade((s) => ({ ...s, [question.id]: grade.result }));
      correct = grade.result === "correct";
    }
    setChecked((c) => ({ ...c, [question.id]: true }));
    recordResult(question.id, topicId, correct);
  };

  const finish = () => {
    const correctCount = questions.filter((x) => results[x.id]).length;
    const partialCount = questions.filter(
      (x) => !isMCQ(x) && checked[x.id] && !results[x.id] && (selfGrade[x.id] ?? "needs-work") === "partial"
    ).length;
    const noHintCorrect = questions.filter((x) => results[x.id] && (hintsUsed[x.id] ?? 0) === 0).length;
    const stars = Math.round(correctCount + partialCount * 0.5 + noHintCorrect * 0.5);
    awardStars(paper.id, stars, `${paper.title} — ${correctCount}/${total}`, kind, topicId === "exam" ? undefined : topicId);
    clearPaper(paper.id);
    setFinished(true);
  };

  if (finished) {
    const correctCount = questions.filter((x) => results[x.id]).length;
    const pct = Math.round((correctCount / total) * 100);
    return (
      <div className="card p-8 text-center max-w-lg mx-auto">
        <div className="text-5xl mb-3">{pct >= 80 ? "🏆" : pct >= 60 ? "🎉" : pct >= 40 ? "💪" : "🌱"}</div>
        <h2 className="text-2xl font-bold text-slate-900">
          {correctCount}/{total} correct
        </h2>
        <p className="text-slate-500 mt-2">
          {pct >= 80
            ? "Outstanding — that's top-grade work!"
            : pct >= 60
            ? "Great effort — review the ones you missed and they'll stick."
            : "Every mistake you review now is a mark gained in the real exam. Missed questions are queued for review."}
        </p>
        <div className="flex justify-center gap-3 mt-6">
          <Link href={backHref} className="btn btn-primary">
            Back to {topicTitle}
          </Link>
          <Link href="/review" className="btn btn-ghost">
            Review missed
          </Link>
        </div>
      </div>
    );
  }

  if (!q) {
    return <p className="text-slate-500">This paper has no questions yet — check back soon!</p>;
  }

  const isChecked = !!checked[q.id];
  const hints = q.hints ?? [];
  const shownHints = hintsUsed[q.id] ?? 0;
  const answer = answers[q.id];
  const grade = selfGrade[q.id];

  return (
    <div className="space-y-4">
      {/* Navigator */}
      <div className="flex items-center gap-2 flex-wrap no-print">
        {questions.map((question, i) => (
          <button
            key={question.id}
            onClick={() => setCurrent(i)}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
              i === current
                ? "bg-indigo-600 text-white"
                : checked[question.id]
                ? results[question.id]
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-rose-100 text-rose-700"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <span className="text-xs text-slate-400 ml-auto">
          {checkedCount}/{total} answered · autosaved
        </span>
      </div>

      <div className="card p-5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs font-bold text-slate-400">Q{current + 1}</span>
          {q.difficulty && (
            <span className={`text-xs font-semibold rounded-full px-2.5 py-0.5 ${DIFF_STYLES[q.difficulty]}`}>
              {DIFF_LABELS[q.difficulty]}
            </span>
          )}
          {q.strategy && (
            <span className="text-xs font-medium bg-violet-100 text-violet-700 rounded-full px-2.5 py-0.5">
              🧠 {q.strategy}
            </span>
          )}
        </div>

        <p className="text-slate-900 leading-relaxed whitespace-pre-wrap font-medium">{q.question}</p>

        {/* Answer area */}
        {isMCQ(q) ? (
          <div className="space-y-2 mt-4">
            {q.options.map((opt, oi) => {
              const selected = answer === oi;
              const showState = isChecked && (oi === q.answerIndex || selected);
              return (
                <button
                  key={oi}
                  disabled={isChecked}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                  className={`w-full text-left rounded-xl border-2 p-3 text-sm transition ${
                    showState && oi === q.answerIndex
                      ? "border-emerald-500 bg-emerald-50"
                      : showState && selected
                      ? "border-rose-400 bg-rose-50"
                      : selected
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  } ${isChecked ? "cursor-default" : "cursor-pointer"}`}
                >
                  <span className="font-bold text-slate-400 mr-2">{String.fromCharCode(65 + oi)}</span>
                  {opt}
                </button>
              );
            })}
          </div>
        ) : (
          <textarea
            className="input mt-4 min-h-28 font-mono text-sm"
            placeholder="Work it out on paper first, then type your answer and key steps here…"
            value={String(answer ?? "")}
            disabled={isChecked}
            onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
          />
        )}

        {/* Hint ladder */}
        {!isChecked && hints.length > 0 && (
          <div className="mt-4 space-y-2">
            {hints.slice(0, shownHints).map((h, hi) => (
              <div key={hi} className="text-sm bg-amber-50 border border-amber-200 rounded-xl p-3 text-slate-700">
                <span className="font-semibold text-amber-600">Hint {hi + 1}:</span> {h}
              </div>
            ))}
            {shownHints < hints.length && (
              <button
                onClick={() => setHintsUsed((h) => ({ ...h, [q.id]: shownHints + 1 }))}
                className="text-sm font-semibold text-amber-600 hover:text-amber-800"
              >
                🪜 {shownHints === 0 ? "Stuck? Get a hint" : "Another hint"} ({hints.length - shownHints} left — fewer
                hints, more stars!)
              </button>
            )}
          </div>
        )}

        {/* Check / feedback */}
        {!isChecked ? (
          <button
            onClick={() => check(q)}
            disabled={answer === undefined || answer === ""}
            className="btn btn-primary mt-5"
          >
            Check answer
          </button>
        ) : (
          <div className="mt-5 space-y-3">
            {isMCQ(q) ? (
              <div
                className={`rounded-xl p-4 text-sm ${
                  results[q.id] ? "bg-emerald-50 border border-emerald-200" : "bg-rose-50 border border-rose-200"
                }`}
              >
                <p className="font-bold mb-1">
                  {results[q.id] ? "✓ Correct — great thinking!" : `✗ Not quite — the answer is ${String.fromCharCode(65 + q.answerIndex)}.`}
                </p>
                <p className="text-slate-700 whitespace-pre-wrap">{q.explanation}</p>
              </div>
            ) : (
              <>
                <div
                  className={`rounded-xl p-4 text-sm border ${
                    grade === "correct"
                      ? "bg-emerald-50 border-emerald-200"
                      : grade === "partial"
                      ? "bg-amber-50 border-amber-200"
                      : "bg-rose-50 border-rose-200"
                  }`}
                >
                  <p className="font-bold">
                    {grade === "correct"
                      ? "✓ Looks right — well done!"
                      : grade === "partial"
                      ? "◐ Partly there — compare with the model answer below."
                      : "✗ Needs work — study the model answer, then it goes in your review queue."}
                  </p>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1.5">Model answer</p>
                  <p className="text-slate-800 whitespace-pre-wrap">{(q as QA).modelAnswer}</p>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mt-3 mb-1">Mark points</p>
                  <ul className="list-disc pl-5 text-slate-600 space-y-0.5">
                    {(q as QA).markScheme.map((m, mi) => (
                      <li key={mi}>{m}</li>
                    ))}
                  </ul>
                  {(q as QA).commonError && (
                    <p className="mt-2.5 text-rose-600">
                      <span className="font-semibold">⚠️ Watch out:</span> {(q as QA).commonError}
                    </p>
                  )}
                </div>
                {(q as QA).solutions && (
                  <details className="rounded-xl bg-violet-50 border border-violet-200 p-4 text-sm">
                    <summary className="cursor-pointer font-semibold text-violet-700">
                      ✨ See {(q as QA).solutions!.length > 1 ? "two different methods" : "the full worked method"}
                    </summary>
                    <div className="mt-3 space-y-4">
                      {(q as QA).solutions!.map((sol, si) => (
                        <div key={si}>
                          <p className="font-semibold text-slate-800 mb-1">{sol.label}</p>
                          <ol className="list-decimal pl-5 space-y-1 text-slate-700">
                            {sol.steps.map((step, sti) => (
                              <li key={sti}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </>
            )}
            <div className="flex items-center gap-2 flex-wrap">
              {q.guideRef && (
                <Link href={`${backHref}?tab=guide`} className="text-sm text-indigo-600 font-semibold hover:underline">
                  📖 Re-read: {q.guideRef}
                </Link>
              )}
              <AskAI
                compact
                context={`Topic: ${topicTitle}. The student just answered this question: "${q.question}" ${
                  results[q.id] ? "correctly" : "incorrectly"
                }.`}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between no-print">
        <button
          className="btn btn-ghost"
          disabled={current === 0}
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
        >
          ← Previous
        </button>
        {checkedCount === total ? (
          <button className="btn btn-primary" onClick={finish}>
            Finish paper 🏁
          </button>
        ) : (
          <button
            className="btn btn-ghost"
            disabled={current === total - 1}
            onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
