# Content authoring spec — Year 11 Maths Lab (Edexcel IGCSE Higher, 4MA1)

You are authoring ONE topic file: `lib/topics/<topicId>.ts`. It must compile under
`strict` TypeScript against the types in `lib/types.ts` (read that file first — match it exactly).

## File shape

```ts
import type { Topic } from "../types";

const topic: Topic = {
  id: "<topicId>",
  title: "<Title>",
  subject: "Maths",
  icon: "<emoji>",
  intro: "...",
  guide: [...],
  learn: {...},
  quiz: { mcq: [...], qa: [...] },
  questionBank: { mcqPapers: [...], qaPapers: [...] },
};

export default topic;
```

## Curriculum

Edexcel **International GCSE (9-1) Mathematics A (4MA1), Higher tier** only. Do not include
content that is not on the 4MA1 Higher specification, and do not omit 4MA1-specific staples
(e.g. set notation, arithmetic series where relevant). Target a strong Year 11 student aiming
for grades 7–9, with warm-up material accessible to a grade 5 student.

## AoPS pedagogy (mandatory)

- **guide**: 5–7 sections. Most sections have a `discovery` (an intriguing problem posed
  before the method, plus the `idea` it motivates), a `whyItWorks` (derivation/insight — derive,
  don't decree), `strategies` (named moves: "work backwards", "try small cases", "draw a diagram",
  "introduce a variable", "exploit symmetry", "consider extremes", "find a pattern",
  "look for invariants"), and 3–5 `keyPoints`. `thinkDeeper` on at least 2 sections.
- **Difficulty tiers**: every question has `difficulty`. Spread per paper roughly
  25% warmup / 55% core / 20% challenge. The topic overall must contain **≥3 genuine
  challenge problems** — competition-flavoured (clever counting, extremal cases, invariants,
  elegant algebra), genuinely stretching, not just "more digits".
- **Hint ladders**: every core and challenge question has `hints`: 3–4 rungs, ordered
  gentle nudge → bigger hint → key step. Never give the answer in a hint.
- **Multiple methods**: at least 2 QA questions include `solutions` with two genuinely
  different worked methods (e.g. algebraic vs visual), labelled, with the elegant one noted.
- `strategy` tag on all challenge questions and most core questions.
- `commonError` on most QA questions — real misconceptions, specific.

## Volume (deep mode)

- `quiz.mcq`: **10** MCQs; `quiz.qa`: **6** written questions (the quick quiz).
- `questionBank.mcqPapers`: **3 papers × 8 MCQs** (titled e.g. "Practice Paper 1 (Multiple Choice)").
- `questionBank.qaPapers`: **3 papers × 6 written questions**.
- `learn`: 10–14 flashcards, 8–10 keyFacts, `formulaSheet` wherever the topic has formulas.

## IDs (globally unique — collisions break the app)

Use your assigned prefix for EVERY id in the file:
- quiz MCQs: `<pfx>-quiz-mcq-01` … ; quiz QA: `<pfx>-quiz-qa-01` …
- bank papers: `<pfx>-mcq-paper-1` … ; bank questions: `<pfx>-mcq-p1-q01`, `<pfx>-qa-p2-q03` …
- diagrams: `<pfx>-diag-01` …

## House style — maths as plain text (NO LaTeX)

- Unicode where clean: x², x³, √, √(2x+1), π, °, ≤, ≥, ≠, ±, ×, ÷, ⅓ (only simple ones), θ.
- Higher powers / general exponents with caret: x^4, 2^n, 10^-3.
- Fractions inline as a/b; bracket where ambiguous: (x+1)/(x-2). Mixed numbers "3 1/2" avoided — use improper fractions or decimals.
- Vectors as column pairs written "(3, -2)" with the word "vector", or a = 3i… NO — use column notation described in words: "the column vector (3 over -2)" is clumsy; write vectors as (3, -2) and say "column vector".
- Money in £, measurements metric. UK/IGCSE conventions (e.g. "indices" not "exponents").
- `body` markdown-lite only: blank-line paragraphs, `- ` bullets, `**bold**`. No headings, no tables, no links, no LaTeX.

## Mark schemes (they drive automatic grading)

`markScheme` entries are matched as keywords/numbers against the learner's typed answer:
- Entry 1 must be the **final answer** in its simplest canonical form (e.g. "42", "x = 3.5", "3/8").
- Then 2–4 short method tokens (single words or 2–3 word phrases likely to appear in a good
  answer, e.g. "factorise", "common denominator", "gradient").
- Numeric answers: give the exact value; if a decimal, to the precision the question asks.
- Keep each entry short and matchable — no full sentences.

## SVG diagrams

1–3 per topic, only where a picture genuinely teaches (circle theorems, graphs, vectors, etc).
Must include `viewBox`, `xmlns="http://www.w3.org/2000/svg"`, `role="img"`, `aria-label`.
Max width ~640. Use currentColor or these colours: #2563eb (blue), #dc2626 (red), #16a34a (green),
#f59e0b (amber), #64748b (grey). Text ≥14px. **No backticks and no `${` anywhere inside any string**
(strings are authored in template literals).

## Quality bar

- Every `answerIndex` verified by working the problem fully before writing the explanation.
- Every `explanation` must agree with the keyed answer and explain WHY, briefly noting why
  tempting wrong options fail.
- Distractors must be *plausible* (classic slips: sign errors, squaring instead of doubling, etc).
- `modelAnswer` shows full method to final answer, as an examiner's model response.
- No duplicated questions; vary contexts (money, geometry, science-flavoured, pure).
- British English. Age-appropriate, warm, encouraging tone; no condescension.
