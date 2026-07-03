import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "sequences",
  hook:
    "Spotify's shuffle, the spiral of a sunflower head and the way a rumour spreads through a school all follow patterns you can capture with a formula. Sequences are how mathematicians predict the future from a handful of terms — and how you can too.",
  didYouKnow: [
    "The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, ...) appears in Indian scholarship centuries before Fibonacci: Sanskrit poetry experts used it to count rhythm patterns of long and short syllables.",
    "Sunflower heads typically pack their seeds in 34 and 55 spirals — consecutive Fibonacci numbers — because the related golden angle of about 137.5° packs seeds with the least wasted space.",
    "As a schoolboy, Carl Friedrich Gauss reputedly summed 1 + 2 + ... + 100 in seconds by pairing terms: 50 pairs each totalling 101 gives 5050 — the idea behind the arithmetic series formula.",
    "The ratio of consecutive Fibonacci numbers (55 ÷ 34, 89 ÷ 55, ...) gets ever closer to the golden ratio φ = (1 + √5) ÷ 2, roughly 1.618 — a number that also fixes the proportions of a regular pentagon.",
  ],
  experiments: [
    {
      title: "Beat your friend with Gauss's trick",
      steps: [
        "Challenge a friend: who can add all the whole numbers from 1 to 200 first? They get a calculator; you get a pen.",
        "Use pairing: 1 + 200 = 201, 2 + 199 = 201, ... giving 100 pairs, so the total is 100 × 201 = 20 100.",
        "Reveal the general formula: the sum from 1 to n is n(n + 1) ÷ 2. Check it for n = 10 by hand.",
        "Level up: use the same pairing idea to sum the even numbers 2 + 4 + ... + 100 before your friend can type it.",
      ],
    },
    {
      title: "Fibonacci hunt in the kitchen and garden",
      steps: [
        "Find a pineapple, pine cone or sunflower head (a photo zoomed in works too).",
        "Count the spirals winding one way, then the spirals winding the other way — mark your starting point with a sticker or pen dot.",
        "Check your two counts against the Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55: they are almost always consecutive Fibonacci numbers (8 and 13 for pine cones and pineapples, 34 and 55 for sunflowers).",
        "Now count the petals on a few different flowers — lilies (3), buttercups (5) and daisies (often 34 or 55) tend to hit Fibonacci numbers as well.",
      ],
    },
  ],
  interactives: ["sequence-machine"],
};

export default extras;
