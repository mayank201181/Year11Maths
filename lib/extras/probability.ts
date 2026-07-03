import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "probability",
  hook:
    "Casinos are buildings paid for by tiny probability edges: roulette pays as if there were 36 numbers, but the wheel has 37 — that missing 1/37 earns the house millions. Understanding probability is how you spot when the odds are quietly stacked against you, from loot boxes to lottery adverts.",
  didYouKnow: [
    "Probability theory was born in 1654 when gambler Antoine Gombaud asked Pascal and Fermat how to split the pot in an unfinished dice game — their letters founded the whole subject.",
    "In a class of just 23 people, the probability that two share a birthday is over 50% — most people guess you would need 180 or more.",
    "The odds of winning the UK National Lottery jackpot are about 1 in 45 million: you are far more likely to be struck by lightning in your lifetime.",
    "In 1913 at Monte Carlo, roulette landed on black 26 times in a row; gamblers lost fortunes betting red was 'due' — each spin was still 18/37 for red, and the fallacy now bears the casino's name.",
  ],
  experiments: [
    {
      title: "Beat the gambler's fallacy with 100 coin flips",
      steps: [
        "Flip a coin 100 times, recording H or T in a long row.",
        "Before you start, predict the longest run of identical results you will see.",
        "Count the actual longest run — with 100 flips a run of 6 or 7 is completely normal, which surprises almost everyone.",
        "Now write down a fake 'random' sequence of 100 flips by hand and compare: humans avoid long runs, so a friend can often spot which sequence is the real one.",
      ],
    },
    {
      title: "Two dice: is 7 really king?",
      steps: [
        "Roll two dice 72 times with a friend and tally the total each time.",
        "Before rolling, use a sample space diagram to predict the expected frequency of each total from 2 to 12 (7 should appear about 12 times, since 6/36 × 72 = 12).",
        "Draw a bar chart of your tallies next to the predicted shape.",
        "Discuss where the experiment strays from theory, then combine your results with another pair — does doubling the trials bring the shape closer to the prediction?",
      ],
    },
  ],
  interactives: ["probability-spinner"],
};

export default extras;
