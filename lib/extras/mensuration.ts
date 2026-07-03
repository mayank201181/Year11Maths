import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "mensuration",
  hook:
    "Why do drinks companies obsess over can shapes? Because a can's dimensions decide how much aluminium it costs to hold 330 ml — surface area versus volume is a multi-billion-pound problem. The same trade-off explains why elephants have huge ears and why chips cook faster than whole potatoes.",
  didYouKnow: [
    "Archimedes was so proud of proving that a sphere has exactly 2/3 the volume of the cylinder that fits around it, he asked for the diagram to be carved on his tomb.",
    "π has been calculated to over 100 trillion digits, but NASA only ever uses about 15 decimal places — enough to steer spacecraft across the solar system to within centimetres.",
    "A pizza of radius z and thickness a has volume pi × z × z × a — literally 'pizza' — because a pizza is just a very short cylinder.",
    "Because volume scales with the cube of length, a person shrunk to 1/10 height would have 1/1000 of their volume but 1/100 of their skin area — they would lose heat so fast they could not survive outdoors.",
  ],
  experiments: [
    {
      title: "Kitchen volume showdown",
      steps: [
        "Find a cylindrical mug and measure its inside radius r and height h with a ruler.",
        "Predict its capacity in ml using V = πr²h (1 cm³ = 1 ml) and write the prediction down.",
        "Fill the mug with water, then pour it into a measuring jug and compare with your prediction.",
        "Repeat with a cereal bowl, treating it as half a sphere: V = (2/3)πr³.",
        "Work out your percentage error for each — under 10% is genuinely good measuring.",
      ],
    },
    {
      title: "The one-cut sector cone",
      steps: [
        "Cut a circle of radius 12 cm from paper, then cut out a sector and curl the rest into a cone, taping the edges.",
        "Measure the base radius and height of your cone, and calculate its volume with V = (1/3)πr²h.",
        "Make a second cone from an identical circle but remove a much bigger sector.",
        "Compare the two volumes — which sector angle gives the bigger cone, and can you find the angle that beats both?",
      ],
      safety: "Take care with scissors when cutting the sectors.",
    },
  ],
  interactives: ["sector-explorer"],
};

export default extras;
