export interface Rank {
  name: string;
  minStars: number;
  emoji: string;
}

export const RANKS: Rank[] = [
  { name: "Counter", minStars: 0, emoji: "🔢" },
  { name: "Calculator", minStars: 25, emoji: "🧮" },
  { name: "Equation Explorer", minStars: 60, emoji: "🧭" },
  { name: "Graph Guru", minStars: 110, emoji: "📈" },
  { name: "Theorem Tamer", minStars: 180, emoji: "📐" },
  { name: "Algebra Ace", minStars: 270, emoji: "🎯" },
  { name: "Calculus Captain", minStars: 380, emoji: "🎢" },
  { name: "Proof Master", minStars: 520, emoji: "🏅" },
  { name: "Maths Legend", minStars: 700, emoji: "👑" },
];

export function rankFor(stars: number): Rank {
  let r = RANKS[0];
  for (const rank of RANKS) if (stars >= rank.minStars) r = rank;
  return r;
}

export function nextRank(stars: number): Rank | undefined {
  return RANKS.find((r) => r.minStars > stars);
}
