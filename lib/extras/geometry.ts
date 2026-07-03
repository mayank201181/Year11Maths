import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "geometry",
  hook:
    "GPS finds your phone by intersecting circles (well, spheres) from satellites 20,000 km up — pure geometry, updated every second. And every 3D game you play is millions of triangles being rotated, reflected and enlarged sixty times a second.",
  didYouKnow: [
    "Euclid's Elements, written around 300 BC, was the standard geometry textbook for over 2,000 years — longer than any other textbook in history.",
    "Eratosthenes measured the circumference of the Earth in about 240 BC using shadows in two Egyptian cities and angle facts about parallel lines — and got within a few percent of the modern value.",
    "The angle in a semicircle is always 90°, a fact credited to Thales around 600 BC, making it one of the oldest theorems with a named discoverer.",
    "Bees build hexagonal honeycomb because, of all shapes that tile a flat surface, the regular hexagon encloses the most area for the least wall — mathematicians only fully proved this 'honeycomb conjecture' in 1999.",
  ],
  experiments: [
    {
      title: "Prove the angle in a semicircle with a dinner plate",
      steps: [
        "Draw round a dinner plate to get a large circle, then fold the paper in half through the centre to find a diameter.",
        "Mark the two ends of the diameter, A and B, and pick any point P on the circle's edge.",
        "Draw lines PA and PB and measure angle APB with a protractor.",
        "Repeat for three more positions of P, including ones close to A.",
        "Compare your results — every angle should be 90°, no matter where P sits on the circle.",
      ],
    },
    {
      title: "Tile hunt: spot the transformations",
      steps: [
        "Photograph a tiled floor, brick wall or wallpaper pattern around your home or school.",
        "Pick one tile or motif and find a copy of it that is a translation of the original — describe the move as a vector.",
        "Now hunt for a reflection: find the motif flipped, and sketch where the mirror line must be.",
        "Finally look for a rotation and estimate the angle and centre.",
        "Challenge a friend to find a transformation you missed.",
      ],
    },
  ],
  interactives: ["circle-theorem-explorer"],
};

export default extras;
