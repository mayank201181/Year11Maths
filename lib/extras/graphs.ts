import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "graphs",
  hook:
    "Your phone's fitness app, a Formula 1 telemetry screen and a Fortnite storm circle timer are all graphs: pictures of how one thing changes with another. Learn to read gradients and intercepts and you can extract the story hidden in any curve — speed, cost, growth, anything.",
  didYouKnow: [
    "The x-y coordinate system is named after René Descartes ('Cartesian'). A popular legend says he dreamt up coordinates while watching a fly walk across his ceiling, realising he could pin down its position with two numbers.",
    "On a distance-time graph the gradient IS the speed — this is exactly how average-speed cameras catch drivers: two timestamped positions give the gradient of the straight line between them.",
    "Florence Nightingale used pioneering statistical diagrams in the 1850s to prove that far more soldiers died of preventable disease than of battle wounds, persuading Parliament to reform army hospitals. She became one of the first female Fellows of the Royal Statistical Society.",
    "GPS traces, heart-rate monitors and stock tickers all draw graphs against time in real time — your phone is plotting coordinates many times per second.",
  ],
  experiments: [
    {
      title: "Graph your own walk",
      steps: [
        "Mark a straight 10 m course, e.g. along a corridor or garden, with objects every 2 m.",
        "Have a friend with a phone stopwatch call out the time as you pass each marker; record the five (time, distance) pairs.",
        "Walk it three ways: steady slow, steady fast, and 'walk-stop-walk'. Plot distance against time for each on one set of axes.",
        "Compare the graphs: steeper line = faster walk, and the 'stop' shows up as a horizontal section. Estimate your speed from each gradient in m/s.",
      ],
    },
    {
      title: "Straight-line phone tariff detective",
      steps: [
        "Invent (or find online) two phone deals, e.g. Deal A: £10 per month plus 5p per extra GB unit, Deal B: £4 per month plus 20p per unit.",
        "Write each as an equation of the form y = mx + c, where x is units used and y is total cost.",
        "Plot both lines on the same axes for x from 0 to 60.",
        "The crossing point is where the deals cost the same — solve 10 + 0.05x = 4 + 0.2x to check it algebraically (x = 40).",
        "Decide the rule: light users should pick the low-c deal, heavy users the low-m deal.",
      ],
    },
  ],
  interactives: ["function-grapher"],
};

export default extras;
