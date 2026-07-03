"use client";

import { useEffect, useRef, useState } from "react";
import type { Topic } from "@/lib/types";
import { getExtras } from "@/lib/extras";
import { useStore } from "@/lib/store";
import { MarkdownLite, renderInline } from "@/lib/markdown";
import AskAI from "./AskAI";

function DiscoveryCard({ problem, idea }: { problem: string; idea: string }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4 my-3">
      <p className="text-xs font-bold uppercase tracking-wide text-amber-600 mb-1.5">🧩 Try this first</p>
      <div className="text-slate-800 text-sm leading-relaxed">
        <MarkdownLite text={problem} />
      </div>
      {revealed ? (
        <div className="mt-3 pt-3 border-t border-amber-200 text-sm text-slate-700">
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-600 mb-1.5">💡 The big idea</p>
          <MarkdownLite text={idea} />
        </div>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          className="mt-3 text-sm font-semibold text-amber-700 hover:text-amber-900"
        >
          I&apos;ve had a go — reveal the idea →
        </button>
      )}
    </div>
  );
}

export default function GuideView({ topic }: { topic: Topic }) {
  const { progress, markGuideRead } = useStore();
  const extras = getExtras(topic.id);
  const read = !!progress.guidesRead[topic.id];
  const [speaking, setSpeaking] = useState(false);
  const speechSupported = useRef(false);

  useEffect(() => {
    speechSupported.current = typeof window !== "undefined" && "speechSynthesis" in window;
    return () => {
      if (speechSupported.current) window.speechSynthesis.cancel();
    };
  }, []);

  const readAloud = () => {
    if (!speechSupported.current) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = [
      topic.title,
      topic.intro,
      ...topic.guide.flatMap((s) => [s.heading, s.body.replace(/\*\*/g, "").replace(/^- /gm, "")]),
    ].join(". ");
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-GB";
    utter.rate = 0.95;
    utter.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(utter);
    setSpeaking(true);
  };

  return (
    <div className="space-y-5">
      {extras?.hook && (
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-5">
          <p className="font-medium leading-relaxed">{extras.hook}</p>
        </div>
      )}

      <div className="flex items-center gap-2 flex-wrap">
        <button onClick={readAloud} className="btn btn-ghost text-sm">
          {speaking ? "⏹ Stop reading" : "🔊 Read aloud"}
        </button>
        <AskAI compact context={`Topic: ${topic.title} (Edexcel IGCSE Higher). ${topic.intro}`} />
      </div>

      <p className="text-slate-700 leading-relaxed">{topic.intro}</p>

      {topic.guide.map((section, i) => (
        <section key={i} className="card p-5">
          <h2 className="text-lg font-bold text-slate-900 mb-2">{section.heading}</h2>
          {section.discovery && <DiscoveryCard problem={section.discovery.problem} idea={section.discovery.idea} />}
          <MarkdownLite text={section.body} />
          {section.diagrams?.map((d) => (
            <figure key={d.id} className="my-3">
              <div className="diagram" dangerouslySetInnerHTML={{ __html: d.svg }} />
              {d.caption && <figcaption className="text-center text-xs text-slate-500 mt-1">{d.caption}</figcaption>}
            </figure>
          ))}
          {section.whyItWorks && (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3.5 mt-3 text-sm text-slate-700">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-600 mb-1">🔍 Why does this work?</p>
              <MarkdownLite text={section.whyItWorks} />
            </div>
          )}
          {section.keyPoints && section.keyPoints.length > 0 && (
            <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-3.5 mt-3">
              <p className="text-xs font-bold uppercase tracking-wide text-indigo-600 mb-1.5">📌 Key points</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                {section.keyPoints.map((k, ki) => (
                  <li key={ki}>{renderInline(k)}</li>
                ))}
              </ul>
            </div>
          )}
          {section.strategies && section.strategies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {section.strategies.map((s, si) => (
                <span key={si} className="text-xs font-medium bg-violet-100 text-violet-700 rounded-full px-2.5 py-1">
                  🧠 {s}
                </span>
              ))}
            </div>
          )}
          {section.thinkDeeper && (
            <details className="mt-3 rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-sm text-slate-700">
              <summary className="cursor-pointer font-semibold text-slate-600">🤔 Think deeper…</summary>
              <div className="mt-2">
                <MarkdownLite text={section.thinkDeeper} />
              </div>
            </details>
          )}
        </section>
      ))}

      {extras?.didYouKnow && extras.didYouKnow.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-3">
          {extras.didYouKnow.map((fact, i) => (
            <div key={i} className="card p-4 text-sm text-slate-700">
              <p className="text-xs font-bold uppercase tracking-wide text-cyan-600 mb-1">✨ Did you know?</p>
              {fact}
            </div>
          ))}
        </div>
      )}

      {extras?.experiments && extras.experiments.length > 0 && (
        <div className="space-y-3">
          {extras.experiments.map((ex, i) => (
            <div key={i} className="card p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-orange-600 mb-1">🏠 Try this at home</p>
              <h3 className="font-semibold text-slate-800 mb-1.5">{ex.title}</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-700">
                {ex.steps.map((s, si) => (
                  <li key={si}>{s}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      {topic.learn.formulaSheet && topic.learn.formulaSheet.length > 0 && (
        <div className="card p-5">
          <h2 className="text-lg font-bold text-slate-900 mb-3">📋 Formula sheet</h2>
          <div className="divide-y divide-slate-100">
            {topic.learn.formulaSheet.map((f, i) => (
              <div key={i} className="py-2 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-sm font-medium text-slate-500 sm:w-56 shrink-0">{f.name}</span>
                <span className="font-mono text-sm text-slate-900">{f.formula}</span>
                {f.note && <span className="text-xs text-slate-400">{f.note}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center py-3">
        {read ? (
          <p className="text-emerald-600 font-semibold">✓ Guide read — nice work! (+2 ⭐)</p>
        ) : (
          <button onClick={() => markGuideRead(topic.id)} className="btn btn-primary">
            ✓ I&apos;ve read this guide (+2 ⭐)
          </button>
        )}
      </div>
    </div>
  );
}
