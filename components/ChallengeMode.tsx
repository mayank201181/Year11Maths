"use client";

import { useEffect, useMemo, useState } from "react";
import type { MCQ, Topic } from "@/lib/types";
import { useStore } from "@/lib/store";

const CHALLENGE_SECONDS = 300;
const QUESTION_COUNT = 6;

function pickQuestions(topic: Topic): MCQ[] {
  const all = [...topic.quiz.mcq, ...topic.questionBank.mcqPapers.flatMap((p) => p.questions)];
  const challenge = all.filter((q) => q.difficulty === "challenge");
  const core = all.filter((q) => q.difficulty === "core" || !q.difficulty);
  const pool = [...challenge, ...core];
  // Shuffle (challenge first so they're favoured), then take N.
  const shuffled = pool
    .map((q) => ({ q, r: Math.random() + (q.difficulty === "challenge" ? -0.3 : 0) }))
    .sort((a, b) => a.r - b.r)
    .map((x) => x.q);
  const seen = new Set<string>();
  const out: MCQ[] = [];
  for (const q of shuffled) {
    if (!seen.has(q.id)) {
      seen.add(q.id);
      out.push(q);
    }
    if (out.length === QUESTION_COUNT) break;
  }
  return out;
}

export default function ChallengeMode({ topic }: { topic: Topic }) {
  const { progress, recordResult, recordChallenge, awardStars } = useStore();
  const [state, setState] = useState<"idle" | "running" | "done">("idle");
  const [questions, setQuestions] = useState<MCQ[]>([]);
  const [current, setCurrent] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(CHALLENGE_SECONDS);
  const [feedback, setFeedback] = useState<{ correct: boolean; text: string } | null>(null);
  const [finalScore, setFinalScore] = useState(0);

  const best = progress.challengeBest[topic.id] ?? 0;

  useEffect(() => {
    if (state !== "running") return;
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(id);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [state]);

  const finish = useMemo(
    () => (finalCorrect: number, secondsLeft: number) => {
      const score = finalCorrect * 100 + secondsLeft;
      setFinalScore(score);
      recordChallenge(topic.id, score);
      if (finalCorrect > 0) {
        awardStars(
          `${topic.id}-challenge-${score}`,
          Math.min(finalCorrect, 5),
          `Challenge: ${finalCorrect}/${QUESTION_COUNT} in time`,
          "challenge",
          topic.id
        );
      }
      setState("done");
    },
    [topic.id, recordChallenge, awardStars]
  );

  useEffect(() => {
    if (state === "running" && timeLeft === 0) finish(correctCount, 0);
  }, [timeLeft, state, correctCount, finish]);

  const start = () => {
    setQuestions(pickQuestions(topic));
    setCurrent(0);
    setCorrectCount(0);
    setTimeLeft(CHALLENGE_SECONDS);
    setFeedback(null);
    setState("running");
  };

  const answer = (oi: number) => {
    if (feedback) return;
    const q = questions[current];
    const correct = oi === q.answerIndex;
    recordResult(q.id, topic.id, correct);
    const newCorrect = correctCount + (correct ? 1 : 0);
    setCorrectCount(newCorrect);
    setFeedback({ correct, text: q.explanation });
    setTimeout(() => {
      setFeedback(null);
      if (current + 1 >= questions.length) {
        finish(newCorrect, timeLeft);
      } else {
        setCurrent((c) => c + 1);
      }
    }, correct ? 900 : 2600);
  };

  if (state === "idle") {
    return (
      <div className="card p-8 text-center max-w-lg mx-auto">
        <div className="text-5xl mb-3">⏱</div>
        <h2 className="text-xl font-bold text-slate-900">Challenge mode</h2>
        <p className="text-slate-500 mt-2 text-sm">
          {QUESTION_COUNT} tough questions · {CHALLENGE_SECONDS / 60} minutes. Score 100 per correct answer plus
          leftover seconds. {best > 0 && <>Your best: <b>{best}</b>.</>}
        </p>
        <button onClick={start} className="btn btn-primary mt-5">
          Start challenge 🚀
        </button>
      </div>
    );
  }

  if (state === "done") {
    const newBest = finalScore >= best && finalScore > 0;
    return (
      <div className="card p-8 text-center max-w-lg mx-auto">
        <div className="text-5xl mb-3">{newBest ? "🏆" : "⏱"}</div>
        <h2 className="text-xl font-bold text-slate-900">
          {correctCount}/{questions.length} — score {finalScore}
        </h2>
        <p className="text-slate-500 mt-2 text-sm">
          {newBest ? "New personal best — brilliant!" : `Best so far: ${Math.max(best, finalScore)}.`}
        </p>
        <button onClick={start} className="btn btn-primary mt-5">
          Go again 🔁
        </button>
      </div>
    );
  }

  const q = questions[current];
  const mins = Math.floor(timeLeft / 60);
  const secs = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-bold text-slate-700">
          Q{current + 1}/{questions.length} · ✓ {correctCount}
        </span>
        <span className={`font-mono font-bold text-lg ${timeLeft < 30 ? "text-rose-600 animate-pulse" : "text-slate-700"}`}>
          {mins}:{secs}
        </span>
      </div>
      <div className="card p-5">
        <p className="font-medium text-slate-900 whitespace-pre-wrap">{q.question}</p>
        <div className="space-y-2 mt-4">
          {q.options.map((opt, oi) => (
            <button
              key={oi}
              onClick={() => answer(oi)}
              disabled={!!feedback}
              className={`w-full text-left rounded-xl border-2 p-3 text-sm transition ${
                feedback && oi === q.answerIndex
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-slate-200 hover:border-indigo-300 bg-white"
              }`}
            >
              <span className="font-bold text-slate-400 mr-2">{String.fromCharCode(65 + oi)}</span>
              {opt}
            </button>
          ))}
        </div>
        {feedback && (
          <p className={`mt-3 text-sm rounded-xl p-3 ${feedback.correct ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800"}`}>
            {feedback.correct ? "✓ Correct!" : `✗ ${feedback.text}`}
          </p>
        )}
      </div>
    </div>
  );
}
