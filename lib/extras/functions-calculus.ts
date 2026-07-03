import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "functions-calculus",
  hook:
    "Every rollercoaster you have ever ridden was designed with derivatives: engineers use dy/dx to control exactly how fast the track's steepness changes, because your stomach feels the rate of change, not the height. The same maths decides how a game character accelerates and how quickly a phone battery percentage drops.",
  didYouKnow: [
    "Newton and Leibniz invented calculus independently in the 1600s, then spent years in one of the most bitter priority disputes in the history of science.",
    "The word 'calculus' is Latin for 'small pebble' — Romans did arithmetic by moving pebbles on counting boards.",
    "Usain Bolt's top speed in his 9.58 s world record was about 12.3 m/s — found by taking the gradient of his distance-time graph, which is exactly what differentiation does.",
    "Self-driving cars differentiate constantly: position gives velocity, velocity gives acceleration, and the software uses all three many times per second to brake smoothly.",
  ],
  experiments: [
    {
      title: "Find your own speed curve",
      steps: [
        "Mark out 30 m in a park or corridor with markers every 5 m.",
        "Sprint the 30 m while a friend films you with a phone held still, side-on.",
        "Use the video timestamps to record the time you pass each marker.",
        "Plot distance (y) against time (x) and draw a smooth curve through the points.",
        "Draw tangents at two different points and work out their gradients — that is your actual speed early versus late in the sprint.",
      ],
      safety: "Sprint only in an open space with a clear run-off area, wearing proper footwear.",
    },
    {
      title: "The maximum box challenge",
      steps: [
        "Take a square piece of paper 20 cm by 20 cm and plan to cut equal squares of side x from each corner to fold an open box.",
        "Write the volume as V = x(20 − 2x)², then predict which x gives the biggest box before testing.",
        "Make three boxes with x = 2 cm, x = 3.3 cm and x = 5 cm, and fill each with rice or lentils to compare capacity.",
        "Differentiate V, set dV/dx = 0, and check the winner matches the calculus prediction (x = 10/3 cm).",
      ],
    },
  ],
  interactives: ["derivative-explorer"],
};

export default extras;
