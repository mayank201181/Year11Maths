import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "vectors",
  hook:
    "Push a joystick diagonally and your game character moves by a vector — every movement, bullet path and camera pan in a video game is vector addition running thousands of times a second. Pilots use the same maths to cancel out crosswinds, and so does your maps app when it plots a route.",
  didYouKnow: [
    "The arrow notation and the word 'vector' (Latin for 'carrier') were popularised in the 1840s by William Rowan Hamilton, who famously scratched his breakthrough quaternion equation into a Dublin bridge.",
    "An aeroplane flying at 200 mph into a 200 mph headwind has a resultant ground velocity of zero — it genuinely hovers over the same spot on the map.",
    "Modern AI models represent words as vectors with hundreds of components, and the vector for 'king' minus 'man' plus 'woman' lands close to the vector for 'queen'.",
    "Formula 1 teams track every car as a position vector updated hundreds of times per second, letting them predict overtakes before they happen.",
  ],
  experiments: [
    {
      title: "Vector treasure hunt",
      steps: [
        "In a garden, park or hall, agree with a friend which directions count as the x direction (east) and y direction (north).",
        "Hide a small 'treasure' and write directions to it as a chain of vectors from a start cone, e.g. (4, 1) then (−2, 3) then (1, −2), where one unit is one pace.",
        "Swap instructions and follow each other's vector chains pace by pace.",
        "Before walking, each of you should add the vectors to predict the single resultant, e.g. (3, 2), and check whether walking it directly lands on the same spot.",
        "Rematch with a rule that one vector must be a scalar multiple of another, like 2(1, −1).",
      ],
    },
    {
      title: "Tug-of-war resultants",
      steps: [
        "Tie three pieces of string to a single keyring and lay it on a table over a sheet of paper.",
        "Two people pull two strings gently in different fixed directions while a third pulls until the ring sits perfectly still; tape or mark all three string directions.",
        "Draw the three force directions from the ring's position and estimate the pulls as arrow lengths.",
        "Check that the third arrow is (roughly) the exact opposite of the sum of the other two — the resultant of all three is the zero vector.",
      ],
      safety: "Pull gently and steadily — this is about balance, not strength.",
    },
  ],
  interactives: ["vector-playground"],
};

export default extras;
