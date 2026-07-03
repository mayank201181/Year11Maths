// Instant self-assessment of typed written answers against a keyword mark scheme.
// Deliberately generous: it looks for the final answer (with numeric tolerance and
// simple equivalent forms) plus method keywords.

export type GradeResult = "correct" | "partial" | "needs-work";

export interface GradeDetail {
  result: GradeResult;
  matched: string[];
  missed: string[];
  score: number; // 0..1
}

function normalise(s: string): string {
  return s
    .toLowerCase()
    .replace(/−/g, "-")
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/√/g, "sqrt")
    .replace(/π/g, "pi")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3")
    .replace(/[£$,]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Pull every number (incl. decimals, negatives, simple fractions) out of a string. */
function numbersIn(s: string): number[] {
  const out: number[] = [];
  const frac = /(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/g;
  let m: RegExpExecArray | null;
  const seen = new Set<number>();
  while ((m = frac.exec(s))) {
    const v = parseFloat(m[1]) / parseFloat(m[2]);
    if (isFinite(v)) {
      out.push(v);
      seen.add(frac.lastIndex);
    }
  }
  const plain = /-?\d+(?:\.\d+)?/g;
  while ((m = plain.exec(s))) {
    out.push(parseFloat(m[0]));
  }
  return out;
}

function numericMatch(entry: string, answer: string): boolean {
  const entryNums = numbersIn(entry);
  if (entryNums.length === 0) return false;
  const ansNums = numbersIn(answer);
  if (ansNums.length === 0) return false;
  // Every number in the mark-scheme entry must appear in the answer (with tolerance).
  return entryNums.every((en) =>
    ansNums.some((an) => {
      const tol = Math.max(Math.abs(en) * 0.005, 0.005);
      return Math.abs(an - en) <= tol;
    })
  );
}

function keywordMatch(entry: string, answer: string): boolean {
  if (entry.length === 0) return false;
  if (answer.includes(entry)) return true;
  // Allow all words of a short phrase to appear anywhere (any order).
  const words = entry.split(" ").filter((w) => w.length > 1);
  if (words.length >= 2 && words.length <= 4) {
    return words.every((w) => answer.includes(w));
  }
  return false;
}

export function gradeAnswer(answerRaw: string, markScheme: string[]): GradeDetail {
  const answer = normalise(answerRaw);
  const matched: string[] = [];
  const missed: string[] = [];
  markScheme.forEach((raw, i) => {
    const entry = normalise(raw);
    const hit =
      keywordMatch(entry, answer) ||
      numericMatch(entry, answer) ||
      // the first entry is the final answer — also try stripped of "x =" style prefixes
      (i === 0 && keywordMatch(entry.replace(/^[a-z]\s*=\s*/, ""), answer));
    if (hit) matched.push(raw);
    else missed.push(raw);
  });
  // Weight the final answer (entry 0) heavily.
  const finalHit = markScheme.length > 0 && matched.includes(markScheme[0]);
  const methodTotal = Math.max(markScheme.length - 1, 0);
  const methodHits = matched.filter((e) => e !== markScheme[0]).length;
  const score =
    markScheme.length === 0
      ? 0
      : (finalHit ? 0.6 : 0) + (methodTotal === 0 ? (finalHit ? 0.4 : 0) : (methodHits / methodTotal) * 0.4);
  const result: GradeResult = score >= 0.6 ? "correct" : score >= 0.25 ? "partial" : "needs-work";
  return { result, matched, missed, score };
}
