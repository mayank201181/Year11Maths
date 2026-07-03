"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import type { MCQ, Paper, QA, Topic } from "@/lib/types";
import { getTopic } from "@/lib/topics";
import { getExtras } from "@/lib/extras";
import { useStore } from "@/lib/store";
import GuideView from "./GuideView";
import PaperRunner from "./PaperRunner";
import ChallengeMode from "./ChallengeMode";
import { EXPLORABLES_ALL, DEFAULT_WIDGETS } from "./Explorables";

const TABS = [
  { id: "guide", label: "📖 Guide" },
  { id: "interactive", label: "🎛 Interactive" },
  { id: "learn", label: "⚡ Learn Smart" },
  { id: "quiz", label: "✏️ Quiz" },
  { id: "papers", label: "📝 Papers" },
  { id: "challenge", label: "⏱ Challenge" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function Flashcards({ topic }: { topic: Topic }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cards = topic.learn.flashcards;
  if (cards.length === 0) return <p className="text-slate-500">Flashcards coming soon.</p>;
  const card = cards[index % cards.length];
  return (
    <div className="space-y-4">
      <button
        onClick={() => setFlipped((f) => !f)}
        className="card w-full min-h-44 p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition"
      >
        <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-2">
          {flipped ? "Answer" : "Card"} {(index % cards.length) + 1} / {cards.length} — tap to flip
        </p>
        <p className={`text-lg ${flipped ? "text-indigo-700 font-semibold" : "text-slate-800"}`}>
          {flipped ? card.back : card.front}
        </p>
      </button>
      <div className="flex justify-center gap-3">
        <button
          className="btn btn-ghost"
          onClick={() => {
            setIndex((i) => (i - 1 + cards.length) % cards.length);
            setFlipped(false);
          }}
        >
          ← Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setIndex((i) => (i + 1) % cards.length);
            setFlipped(false);
          }}
        >
          Next card →
        </button>
      </div>
    </div>
  );
}

function LearnTab({ topic }: { topic: Topic }) {
  return (
    <div className="space-y-6">
      <Flashcards topic={topic} />
      {topic.learn.keyFacts.length > 0 && (
        <div className="card p-5">
          <h2 className="text-lg font-bold text-slate-900 mb-3">🔑 Key facts to memorise</h2>
          <ul className="space-y-2">
            {topic.learn.keyFacts.map((f, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-700">
                <span className="text-indigo-500 font-bold shrink-0">{i + 1}.</span> {f}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function InteractiveTab({ topic }: { topic: Topic }) {
  const extras = getExtras(topic.id);
  const keys = extras?.interactives?.length ? extras.interactives : DEFAULT_WIDGETS[topic.id] ?? [];
  const widgets = keys.map((k) => ({ key: k, ex: EXPLORABLES_ALL[k] })).filter((w) => w.ex);
  if (widgets.length === 0)
    return <p className="text-slate-500">Interactive widgets for this topic are on their way!</p>;
  return (
    <div className="space-y-6">
      {widgets.map(({ key, ex }) => (
        <div key={key} className="card p-5">
          <h2 className="text-lg font-bold text-slate-900">{ex.title}</h2>
          <p className="text-sm text-slate-500 mb-4">{ex.description}</p>
          <ex.Component />
        </div>
      ))}
    </div>
  );
}

function PapersTab({ topic, onOpen }: { topic: Topic; onOpen: (p: Paper<MCQ> | Paper<QA>, kind: "mcq" | "qa") => void }) {
  const { progress } = useStore();
  const render = (papers: (Paper<MCQ> | Paper<QA>)[], kind: "mcq" | "qa") =>
    papers.map((p) => {
      const inFlight = !!progress.papers[p.id];
      const starsEarned = progress.awarded[p.id];
      return (
        <button
          key={p.id}
          onClick={() => onOpen(p, kind)}
          className="card w-full p-4 flex items-center gap-3 hover:border-indigo-300 hover:shadow-md transition text-left"
        >
          <span className="text-2xl">{kind === "mcq" ? "🔤" : "✍️"}</span>
          <div className="flex-1">
            <p className="font-semibold text-slate-800">{p.title}</p>
            <p className="text-xs text-slate-400">
              {p.questions.length} questions
              {inFlight && " · ▶ in progress — resume"}
              {starsEarned !== undefined && !inFlight && ` · best ${starsEarned} ⭐`}
            </p>
          </div>
          <span className="text-slate-300">→</span>
        </button>
      );
    });
  return (
    <div className="space-y-3">
      {render(topic.questionBank.mcqPapers, "mcq")}
      {render(topic.questionBank.qaPapers, "qa")}
      {topic.questionBank.mcqPapers.length === 0 && topic.questionBank.qaPapers.length === 0 && (
        <p className="text-slate-500">Practice papers for this topic are being written — check back soon!</p>
      )}
    </div>
  );
}

function TopicViewInner({ topicId }: { topicId: string }) {
  const topic = getTopic(topicId);
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlTab = searchParams.get("tab") as TabId | null;
  const [tab, setTab] = useState<TabId>(urlTab && TABS.some((t) => t.id === urlTab) ? urlTab : "guide");
  const [openPaper, setOpenPaper] = useState<{ paper: Paper<MCQ> | Paper<QA>; kind: "mcq" | "qa" } | null>(null);

  useEffect(() => {
    if (urlTab && TABS.some((t) => t.id === urlTab)) setTab(urlTab);
  }, [urlTab]);

  const quizPaper = useMemo<Paper<MCQ> | null>(
    () =>
      topic && topic.quiz.mcq.length > 0
        ? { id: `${topic.id}-quiz-mcq`, title: `${topic.title} — Quick Quiz (Multiple Choice)`, questions: topic.quiz.mcq }
        : null,
    [topic]
  );
  const quizQaPaper = useMemo<Paper<QA> | null>(
    () =>
      topic && topic.quiz.qa.length > 0
        ? { id: `${topic.id}-quiz-qa`, title: `${topic.title} — Quick Quiz (Written)`, questions: topic.quiz.qa }
        : null,
    [topic]
  );

  if (!topic) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500">Topic not found.</p>
        <Link href="/" className="btn btn-primary mt-4">
          Back to topics
        </Link>
      </div>
    );
  }

  const selectTab = (t: TabId) => {
    setTab(t);
    setOpenPaper(null);
    router.replace(`/topic/${topic.id}?tab=${t}`, { scroll: false });
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-1">
        <Link href="/" className="text-slate-400 hover:text-slate-600 text-sm no-print">
          ← Topics
        </Link>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{topic.icon}</span>
        <h1 className="text-2xl font-bold text-slate-900">{topic.title}</h1>
      </div>

      <div className="flex gap-1.5 overflow-x-auto pb-2 mb-5 no-print">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => selectTab(t.id)}
            className={`shrink-0 px-3.5 py-2 rounded-xl text-sm font-semibold transition ${
              tab === t.id ? "bg-indigo-600 text-white shadow" : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "guide" && <GuideView topic={topic} />}
      {tab === "interactive" && <InteractiveTab topic={topic} />}
      {tab === "learn" && <LearnTab topic={topic} />}
      {tab === "quiz" && (
        <div className="space-y-6">
          {quizPaper ? (
            <PaperRunner
              paper={quizPaper}
              topicId={topic.id}
              topicTitle={topic.title}
              kind="quiz"
              backHref={`/topic/${topic.id}`}
            />
          ) : (
            <p className="text-slate-500">Quiz coming soon!</p>
          )}
          {quizQaPaper && (
            <details className="card p-4">
              <summary className="cursor-pointer font-semibold text-slate-700">
                ✍️ Written quick quiz ({quizQaPaper.questions.length} questions)
              </summary>
              <div className="mt-4">
                <PaperRunner
                  paper={quizQaPaper}
                  topicId={topic.id}
                  topicTitle={topic.title}
                  kind="quiz"
                  backHref={`/topic/${topic.id}`}
                />
              </div>
            </details>
          )}
        </div>
      )}
      {tab === "papers" &&
        (openPaper ? (
          <div>
            <button onClick={() => setOpenPaper(null)} className="text-sm text-slate-400 hover:text-slate-600 mb-3 no-print">
              ← All papers
            </button>
            <PaperRunner
              paper={openPaper.paper}
              topicId={topic.id}
              topicTitle={topic.title}
              kind="paper"
              backHref={`/topic/${topic.id}`}
            />
          </div>
        ) : (
          <PapersTab topic={topic} onOpen={(paper, kind) => setOpenPaper({ paper, kind })} />
        ))}
      {tab === "challenge" && <ChallengeMode topic={topic} />}
    </div>
  );
}

export default function TopicView({ topicId }: { topicId: string }) {
  return (
    <Suspense fallback={<div className="text-slate-400 py-10 text-center">Loading…</div>}>
      <TopicViewInner topicId={topicId} />
    </Suspense>
  );
}
