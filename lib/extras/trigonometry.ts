import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "trigonometry",
  hook:
    "Every song on your phone is stored as a sum of sine waves — trigonometry is literally what music sounds like when you write it down. The same sin and cos also aim football free kicks, steer aircraft and make game characters walk at any angle you push the joystick.",
  didYouKnow: [
    "Trigonometry began as astronomy: Hipparchus built the first known trig table around 140 BC to predict the positions of the Sun and Moon.",
    "The word 'sine' comes from a translation chain gone wrong — an Arabic term 'jiba' was misread as 'jayb' (meaning bay or fold) and translated into Latin as 'sinus'.",
    "Your phone's audio uses the fact that any repeating sound can be broken into pure sine waves (Fourier's idea, 1807) — it is how MP3 compression and noise-cancelling headphones work.",
    "The 1802 Great Trigonometrical Survey of India measured the height of Everest as 8,840 m using theodolites from over 100 miles away — within about 0.1% of today's accepted value, decades before anyone climbed it.",
  ],
  experiments: [
    {
      title: "Measure a building with a clinometer app",
      steps: [
        "Install a free clinometer app (or use the level tool in a phone's measure app).",
        "Stand a measured distance from a tall building or tree — pace out or tape 20 m and call it d.",
        "Sight the top of the object along the phone's edge and read the angle of elevation, a.",
        "Calculate the height as d × tan(a), then add the height of your eyes above the ground.",
        "Cross-check by repeating from a different distance — a real surveyor's trick to catch errors.",
      ],
      safety: "Keep your eyes on your surroundings, not just the screen, and stay away from roads while sighting.",
    },
    {
      title: "Draw a sine wave with a swinging bottle",
      steps: [
        "Poke a small hole in the cap of a plastic bottle, fill it with sand or salt, and hang it upside down from a broom handle between two chairs.",
        "Lay a long strip of dark paper or card underneath.",
        "Set the bottle swinging gently in a straight line while a friend pulls the paper steadily at right angles to the swing.",
        "Look at the trail of sand: the swing traces out a sine curve, with the paper speed setting its wavelength.",
        "Pull the paper faster and compare — the amplitude stays the same but the wave stretches, exactly like changing b in sin(bx).",
      ],
      safety: "Do this outdoors or over a dust sheet, and sweep up sand promptly so nobody slips.",
    },
  ],
  interactives: ["trig-explorer"],
};

export default extras;
