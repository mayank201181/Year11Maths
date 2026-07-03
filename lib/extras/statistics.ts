import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "statistics",
  hook:
    "Netflix recommendations, Spotify Wrapped, football expected-goals stats and AI chatbots all run on the same engine: finding patterns in data. Statistics is also your defence kit — it is how you tell when a headline, advert or influencer graph is quietly lying to you.",
  didYouKnow: [
    "Florence Nightingale used her 'rose diagrams' in the 1850s to prove most Crimean War deaths came from poor hospital hygiene, not wounds — her charts changed government policy and helped make her the first female Fellow of the Royal Statistical Society.",
    "In 1936 the Literary Digest polled 2.4 million people and still called the US election wrong, while George Gallup got it right with about 50,000 — a biased sample loses to a small fair one.",
    "Anscombe's quartet is a famous set of four data sets with identical means, variances and correlation, yet wildly different scatter graphs — proof that you should always plot your data.",
    "The word 'statistics' comes from the Latin for 'state': the subject began as the arithmetic governments used to count people and taxes.",
  ],
  experiments: [
    {
      title: "Reaction-time data factory",
      steps: [
        "A friend holds a 30 cm ruler vertically; you hover your thumb and finger at the 0 mark, and they drop it without warning.",
        "Catch it and record the distance in cm; repeat 20 times each.",
        "Convert each catch to a reaction time if you like, or just work with distances: find the median, quartiles and interquartile range for each person.",
        "Draw two box plots on the same scale and decide who is faster and who is more consistent.",
        "Test a claim: does listening to music, or using your weaker hand, shift the median?",
      ],
    },
    {
      title: "Estimate the mean word length of a novel",
      steps: [
        "Pick any book and choose 5 pages using a random method (dice rolls or a random number generator), not your favourites.",
        "On each page, record the lengths of the first 20 words into a grouped frequency table (1-3, 4-6, 7-9, 10+ letters).",
        "Use midpoints to estimate the mean word length from your 100-word sample.",
        "Compare your estimate with a friend's sample from the same book — how close are two random samples, and why is sampling fairer than choosing pages you like?",
      ],
    },
  ],
  interactives: ["histogram-builder"],
};

export default extras;
