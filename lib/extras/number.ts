import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "number",
  hook:
    "Every photo on your phone, every song you stream and every message you send is, underneath, just enormous numbers being crunched at billions of operations per second. Standard form is how scientists and engineers keep those monster numbers — and the unbelievably tiny ones — small enough to actually think about.",
  didYouKnow: [
    "A modern smartphone chip performs over 10¹² (a trillion) operations per second — written out, that is 1 000 000 000 000, which is exactly why engineers prefer standard form.",
    "The observable universe is about 8.8 × 10²⁶ m across, while a hydrogen atom is about 1 × 10⁻¹⁰ m — a difference of roughly 37 orders of magnitude.",
    "The word 'googol' (1 × 10¹⁰⁰) was coined in 1920 by nine-year-old Milton Sirotta, nephew of mathematician Edward Kasner. Google's name is a deliberate misspelling of it.",
    "Avogadro's number, about 6.02 × 10²³, means a single glass of water contains more molecules than there are glasses of water in all the oceans on Earth.",
  ],
  experiments: [
    {
      title: "The rice-on-a-chessboard estimate",
      steps: [
        "Legend says an inventor asked for 1 grain of rice on square 1 of a chessboard, 2 on square 2, 4 on square 3 — doubling each time for all 64 squares.",
        "Before calculating, write down your gut estimate of the total number of grains.",
        "On your phone calculator, work out 2⁶³ (the grains on just the final square) — you should get about 9.2 × 10¹⁸.",
        "A grain of rice weighs about 0.02 g, i.e. 2 × 10⁻⁵ kg. Multiply to estimate the mass of that final square in kilograms using standard form.",
        "Compare with world annual rice production (about 5 × 10¹¹ kg) — how many years' worth is it?",
      ],
    },
    {
      title: "Powers-of-ten scavenger hunt",
      steps: [
        "With a friend, each write down five real quantities: e.g. the distance to the Moon, the width of a hair, your phone's storage in bytes, the UK population, the mass of an ant.",
        "Without looking anything up, each convert your list into standard form estimates (a × 10ⁿ with 1 ≤ a < 10).",
        "Swap lists and check each other's answers online — score a point for every estimate within one power of ten.",
        "Discuss the misses: being wrong by one power of ten means being 10 times out. Whoever scores more points wins.",
      ],
    },
  ],
  interactives: ["standard-form"],
};

export default extras;
