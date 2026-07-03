import type { IndexedQuestion, Topic } from "../types";
import number from "./number";
import ratio from "./ratio";
import indicesSurds from "./indices-surds";
import algebra from "./algebra";
import equations from "./equations";
import sequences from "./sequences";
import graphs from "./graphs";
import functionsCalculus from "./functions-calculus";
import geometry from "./geometry";
import trigonometry from "./trigonometry";
import mensuration from "./mensuration";
import vectors from "./vectors";
import probability from "./probability";
import statistics from "./statistics";
import { EXAMS } from "../exam";

export const TOPICS: Topic[] = [
  number,
  ratio,
  indicesSurds,
  algebra,
  equations,
  sequences,
  graphs,
  functionsCalculus,
  geometry,
  trigonometry,
  mensuration,
  vectors,
  probability,
  statistics,
];

export function getTopic(id: string): Topic | undefined {
  return TOPICS.find((t) => t.id === id);
}

/** Global index of every question by id — powers review, SRS and challenge mode. */
export const QUESTION_INDEX: Record<string, IndexedQuestion> = (() => {
  const idx: Record<string, IndexedQuestion> = {};
  const add = (entry: IndexedQuestion) => {
    idx[entry.q.id] = entry;
  };
  for (const t of TOPICS) {
    for (const q of t.quiz.mcq) add({ topicId: t.id, paperId: `${t.id}-quiz`, kind: "mcq", q });
    for (const q of t.quiz.qa) add({ topicId: t.id, paperId: `${t.id}-quiz`, kind: "qa", q });
    for (const p of t.questionBank.mcqPapers)
      for (const q of p.questions) add({ topicId: t.id, paperId: p.id, kind: "mcq", q });
    for (const p of t.questionBank.qaPapers)
      for (const q of p.questions) add({ topicId: t.id, paperId: p.id, kind: "qa", q });
  }
  for (const exam of EXAMS) {
    for (const p of exam.mcqPapers)
      for (const q of p.questions) add({ topicId: "exam", paperId: p.id, kind: "mcq", q });
    for (const p of exam.qaPapers)
      for (const q of p.questions) add({ topicId: "exam", paperId: p.id, kind: "qa", q });
  }
  return idx;
})();
