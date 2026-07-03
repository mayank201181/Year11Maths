import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "indices-surds",
  hook:
    "Fold a piece of paper 42 times and it would be thick enough to reach the Moon — that is the absurd power of indices. And surds like √2 caused an actual scandal in ancient Greece: exact numbers that refuse to be written as fractions.",
  didYouKnow: [
    "Legend has it that Hippasus, a follower of Pythagoras, was drowned at sea for proving that √2 cannot be written as a fraction — the discovery of irrational numbers shattered the Pythagoreans' belief that whole-number ratios ruled the universe.",
    "Paper roughly doubles in thickness with each fold, so n folds give a thickness of 2ⁿ sheets. The world record for folding a single sheet is 12 folds, achieved by American student Britney Gallivan in 2002 — she also derived a formula for the paper length needed.",
    "Musical pitch is built on indices: each octave doubles a note's frequency, and each of the 12 semitones in between multiplies it by 2^(1/12), an irrational number, roughly 1.0595.",
    "A4 paper has sides in the ratio √2 : 1. That is the only ratio with the property that cutting the sheet in half across the middle produces two smaller sheets with exactly the same proportions (A5).",
  ],
  experiments: [
    {
      title: "Prove the paper-folding limit",
      steps: [
        "Take a sheet of A4 paper and fold it in half as many times as you can — predict your maximum first.",
        "After each fold, record how many layers you have: 2, 4, 8, ... i.e. 2ⁿ.",
        "Most people stop at 6 or 7 folds. At 7 folds you are trying to bend 2⁷ = 128 layers at once.",
        "Calculate how thick 42 folds would be, taking one sheet as 0.1 mm: work out 2⁴² × 0.1 mm and convert to km.",
        "Compare with the Earth-Moon distance of about 384 400 km.",
      ],
    },
    {
      title: "Hunt the √2 in your notebook",
      steps: [
        "Measure the long and short sides of a sheet of A4 paper in millimetres.",
        "Divide long by short on your calculator and compare the answer with √2 = 1.41421...",
        "Fold the sheet in half (short edge to short edge) to make A5 and repeat the measurement — the ratio should be the same.",
        "Try the same test on a random book or phone screen: most are NOT in the ratio √2, which is why photocopying them to a different size crops or distorts them, while A-series paper scales perfectly.",
      ],
    },
  ],
  interactives: ["indices-explorer"],
};

export default extras;
