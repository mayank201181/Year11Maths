import type { TopicExtras } from "../types";

const extras: TopicExtras = {
  topicId: "algebra",
  hook:
    "Every 'think of a number' magic trick, every video-game damage formula and every spreadsheet that runs a business is algebra: rules written once with letters so they work for every number at the same time. Learn to expand and factorise and you can build tricks of your own — and see straight through everyone else's.",
  didYouKnow: [
    "The word 'algebra' comes from 'al-jabr' in the title of a 9th-century book by the Persian mathematician al-Khwarizmi — roughly meaning 'the reunion of broken parts'. His name also gave us the word 'algorithm'.",
    "For centuries algebra was written entirely in words, with no symbols at all. The equals sign = was only invented in 1557 by the Welsh mathematician Robert Recorde, who chose two parallel lines 'because no two things can be more equal'.",
    "The difference of two squares gives ninja mental arithmetic: 49 × 51 = (50 − 1)(50 + 1) = 50² − 1² = 2499, instantly.",
    "Video games use algebraic formulas constantly — a typical damage calculation like damage = a × (attack² ÷ (attack + defence)) is evaluated millions of times per second.",
  ],
  experiments: [
    {
      title: "Build a mind-reading number trick",
      steps: [
        "Ask a friend to think of a number, then: double it, add 10, halve the result, and subtract the number they first thought of.",
        "Announce that their answer is 5 — it always is.",
        "Expose the machinery with algebra: calling the number n, the steps give 2n, then 2n + 10, then n + 5, then n + 5 − n = 5. The n cancels, so their choice never mattered.",
        "Now design your own trick that always ends on 7, and test it on someone. Write the algebra first, then the instructions.",
      ],
    },
    {
      title: "The 49 × 51 lightning-multiplication duel",
      steps: [
        "Challenge a friend with a calculator to a race: they type, you use algebra.",
        "Your weapon is (a − b)(a + b) = a² − b²: for 49 × 51 compute 50² − 1 = 2499 in your head.",
        "Practise on 29 × 31, 45 × 55, 98 × 102, 195 × 205.",
        "Then try squaring near a round number with (a + b)² = a² + 2ab + b²: e.g. 52² = 2500 + 200 + 4 = 2704.",
        "With practice you will genuinely beat the calculator's typing time.",
      ],
    },
  ],
  interactives: ["expand-visualiser"],
};

export default extras;
