// Core content types for the Year 11 Maths Lab (Edexcel IGCSE Higher, 4MA1).
// Audited exam content (Topic files) must only use these types.

export type Difficulty = "warmup" | "core" | "challenge";

export interface Diagram {
  id: string;
  title: string;
  /** Inline SVG markup. Must include viewBox, xmlns, role="img", aria-label.
   *  Authored inside template strings, so it must contain no backticks or `${`. */
  svg: string;
  caption?: string;
}

export interface Discovery {
  /** An intriguing problem posed BEFORE the method is taught. */
  problem: string;
  /** The idea/insight it motivates, revealed after the learner tries. */
  idea: string;
}

export interface GuideSection {
  heading: string;
  /** Markdown-lite: blank-line paragraphs, "- " bullets, **bold**, plain-text maths. */
  body: string;
  diagrams?: Diagram[];
  keyPoints?: string[];
  thinkDeeper?: string;
  discovery?: Discovery;
  strategies?: string[];
  whyItWorks?: string;
}

export interface MCQ {
  id: string; // globally unique, e.g. "num-mcq-b1-q03"
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  guideRef?: string; // heading of the guide section that teaches this
  difficulty?: Difficulty;
  /** Hint ladder: gentle nudge -> bigger hint -> key step. Revealed one at a time. */
  hints?: string[];
  strategy?: string;
}

export interface WorkedSolution {
  label: string; // e.g. "Algebraic method", "Picture method"
  steps: string[];
}

export interface QA {
  id: string; // globally unique
  question: string;
  modelAnswer: string;
  /** Keyword/number mark points used for instant self-assessment. */
  markScheme: string[];
  commonError?: string;
  guideRef?: string;
  difficulty?: Difficulty;
  hints?: string[];
  strategy?: string;
  solutions?: WorkedSolution[];
}

export interface Paper<T> {
  id: string; // globally unique, e.g. "num-mcq-paper-1"
  title: string;
  questions: T[];
}

export interface FormulaEntry {
  name: string;
  formula: string;
  note?: string;
}

export interface LearnSmart {
  flashcards: { front: string; back: string }[];
  keyFacts: string[];
  formulaSheet?: FormulaEntry[];
}

export interface Topic {
  id: string;
  title: string;
  subject: string; // "Maths"
  icon: string; // emoji
  intro: string;
  guide: GuideSection[];
  learn: LearnSmart;
  quiz: { mcq: MCQ[]; qa: QA[] };
  questionBank: { mcqPapers: Paper<MCQ>[]; qaPapers: Paper<QA>[] };
}

export interface ComprehensiveExam {
  mcqPapers: Paper<MCQ>[];
  qaPapers: Paper<QA>[];
}

// ---- Engagement extras (kept separate from audited content) ----

export interface Experiment {
  title: string;
  steps: string[];
  safety?: string;
}

export interface TopicExtras {
  topicId: string;
  hook?: string;
  didYouKnow?: string[];
  experiments?: Experiment[];
  bonusDiagrams?: Diagram[];
  /** Keys into the explorables registry; rendered on the Interactive tab. */
  interactives?: string[];
}

export interface IndexedQuestion {
  topicId: string;
  paperId: string;
  kind: "mcq" | "qa";
  q: MCQ | QA;
}
