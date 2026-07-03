import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "equations",
  hook:
    "When a basketball leaves a player's hands, its flight path is a quadratic — and solving quadratic equations tells you exactly where it lands. Angry Birds, penalty kicks, water from a fountain: the same curve, the same equations, everywhere something is thrown.",
  didYouKnow: [
    "Babylonian clay tablets from around 1800 BC show scribes solving quadratic problems — essentially completing the square — more than 3000 years before modern algebraic notation existed.",
    "In 1535, Italian mathematicians held public equation-solving duels for money and reputation. Niccolo Tartaglia won a famous contest on cubic equations, then Gerolamo Cardano published the secret method, sparking one of the great feuds in maths history.",
    "There are formulas like the quadratic formula for cubic (x³) and quartic (x⁴) equations, but in the 1820s Abel and Galois proved that no such general formula can exist for degree five or higher. Galois wrote up his ideas before dying in a duel at 20.",
    "The 'catenary' shape of a hanging phone-charger cable looks like a parabola but is not one — yet the cables of a suspension bridge, loaded by the flat deck, do hang in a true parabola.",
  ],
  experiments: [
    {
      title: "Film a real quadratic",
      steps: [
        "Get a friend to throw a ball gently across your phone camera's view while you film in slow motion against a plain wall.",
        "Scrub through the video and pause at 5 or 6 moments, noting the ball's position each time (screen ruler or sticky notes on the wall help).",
        "Sketch the points on paper — you should see a parabola, the graph of a quadratic.",
        "Find the vertex (highest point) and check the symmetry: the ball takes equal times to rise to the top and to fall back level with its start.",
      ],
      safety: "Throw softly and keep clear of windows and anything breakable.",
    },
    {
      title: "The consecutive-numbers puzzle race",
      steps: [
        "Pose this to a friend: two consecutive whole numbers multiply to give 552. What are they?",
        "Let them hunt by trial and error while you set up the equation n(n + 1) = 552, i.e. n² + n − 552 = 0.",
        "Factorise: (n − 23)(n + 24) = 0, so n = 23 and the numbers are 23 and 24.",
        "Sneaky shortcut to notice: 552 is close to n², so n is close to √552, roughly 23.5 — the two numbers straddle the square root.",
        "Swap roles with a new product, e.g. 1332 (which is 36 × 37), and race again.",
      ],
    },
  ],
  interactives: ["quadratic-explorer"],
};

export default extras;
