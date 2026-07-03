import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "ratio",
  hook:
    "A '50% extra free' offer, a footballer's goals-per-game record, and the interest quietly growing on a savings account are all the same idea wearing different clothes: ratio and percentage. Get fluent with them and shops, banks and stats can never bamboozle you again.",
  didYouKnow: [
    "Compound interest is so powerful that money doubling takes roughly 72 ÷ (interest rate) years — the famous 'Rule of 72'. At 6% per year, savings double in about 12 years.",
    "The per-cent symbol % evolved from Italian merchants' shorthand for 'per cento' (per hundred) in the 15th century — early versions looked like 'p 100' before morphing into the two circles and a slash.",
    "TV and phone screens are described by an aspect ratio: most are 16:9, so a '55 inch' TV is 55 inches only across the diagonal.",
    "Map scales are ratios too: on a 1:25 000 Ordnance Survey map, 4 cm on paper represents exactly 1 km of real countryside.",
  ],
  experiments: [
    {
      title: "Supermarket price-per-unit showdown",
      steps: [
        "Next time you are in a supermarket (or on its website), pick a product sold in two sizes, e.g. 200 g and 500 g jars of the same coffee.",
        "Work out the price per 100 g for each size as a mental estimate before checking the shelf-edge label.",
        "Find one product where the bigger pack is actually worse value per unit — they exist, and shops rely on people not checking.",
        "Now check a 'special offer': is '3 for £5' really cheaper per unit than the single price? Calculate the percentage saving, if any.",
      ],
    },
    {
      title: "The doubling-money challenge",
      steps: [
        "Imagine £100 in an account earning 10% compound interest per year. Predict, without calculating, how many years until it doubles.",
        "On a calculator press 100, then multiply by 1.1 repeatedly, counting the presses, until the display passes 200.",
        "Compare your count with the Rule of 72 prediction: 72 ÷ 10 = 7.2 years.",
        "Repeat with 4% (multiply by 1.04) and check that 72 ÷ 4 = 18 is close to what the calculator says.",
        "Try it in reverse for inflation: multiplying by 0.97 each year, how long until £100 of spending power falls below £50?",
      ],
    },
  ],
  interactives: ["percentage-machine"],
};

export default extras;
