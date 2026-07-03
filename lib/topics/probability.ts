import type { Topic } from "../types";

const topic: Topic = {
  id: "probability",
  title: "Probability & Sets",
  subject: "Maths",
  icon: "🎲",
  intro:
    "Probability is the mathematics of uncertainty — and it is famously bad for intuition. In this topic you will learn to count outcomes properly with sample spaces, organise overlapping information with Venn diagrams and set notation, chain events with tree diagrams, and handle conditional and 'at least one' problems with the complement trick. It ends with the 4MA1 classic: turning a probability statement into a quadratic equation.",
  guide: [
    {
      heading: "Probability basics & the scale",
      body:
        "Every probability is a number between 0 (impossible) and 1 (certain). For **equally likely outcomes**,\n\nP(event) = (number of favourable outcomes) / (total number of outcomes).\n\nSo for a fair die, P(prime) = 3/6 = 1/2, because 2, 3 and 5 are the primes.\n\nEvents are **mutually exclusive** if they cannot happen at the same time — a single die roll cannot be both a 2 and a 5. For mutually exclusive events, P(A or B) = P(A) + P(B). If a set of mutually exclusive events covers every possibility (it is **exhaustive**), the probabilities add to exactly 1.\n\nThe **complement** of A, written A′, is 'not A'. Since A and A′ are mutually exclusive and exhaustive,\n\nP(A′) = 1 − P(A).\n\nIn this topic, prefer **exact fractions** over rounded decimals: 91/216 is a full-marks answer; 0.42 is not.",
      discovery: {
        problem:
          "A weather app says there is a 40% chance of rain on Saturday and a 40% chance of rain on Sunday. Priya says: 'So there's an 80% chance of rain this weekend.' Is she right?",
        idea:
          "No — you may only ADD probabilities when the events are mutually exclusive, and 'rain Saturday' and 'rain Sunday' can both happen. (Push her logic further: three such days would give 120%, which is impossible.) Deciding when events can overlap is the whole game in probability — it is why we need sample spaces, Venn diagrams and trees.",
      },
      whyItWorks:
        "Why do mutually exclusive probabilities add? Think in counts. If 12 of 60 raffle tickets win a mug and 9 different tickets win a pen, then 12 + 9 = 21 tickets win something, so P(mug or pen) = 21/60 = 12/60 + 9/60. The addition works precisely because no ticket is counted twice. If some tickets won both, adding would double-count them — that is what the Venn diagram section fixes.",
      strategies: [
        "list systematically — write out the outcomes before counting",
        "consider extremes — a probability outside 0 to 1 means a mistake",
        "check the total — mutually exclusive, exhaustive probabilities must sum to 1",
      ],
      keyPoints: [
        "0 ≤ P(event) ≤ 1, and probabilities of all possible outcomes sum to 1.",
        "P(event) = favourable/total only works when outcomes are EQUALLY LIKELY.",
        "Mutually exclusive: cannot both happen, so P(A or B) = P(A) + P(B).",
        "P(A′) = 1 − P(A) — the complement is often the fastest route.",
        "Give exact fractions unless the question asks for a decimal.",
      ],
    },
    {
      heading: "Relative frequency & expected outcomes",
      body:
        "When outcomes are not equally likely — a biased die, a drawing pin, a striker's penalty record — we **estimate** probability from an experiment:\n\nrelative frequency = (number of times the event happens) / (total number of trials).\n\nThe estimate gets more reliable as the number of trials grows. Given several experiments, trust the one with the **most trials** (or pool all the results).\n\nTurning a probability into a prediction works the other way:\n\nexpected frequency = probability × number of trials.\n\nSo if P(seed germinates) = 0.85, then in 400 seeds you expect 0.85 × 400 = 340 to germinate. 'Expected' means the long-run average — the actual count will vary around it.",
      discovery: {
        problem:
          "A drawing pin can land 'point up' or 'point down'. Amir says each must have probability 1/2 because there are two outcomes. How could you prove him wrong without any theory at all?",
        idea:
          "Toss it 400 times. If it lands point up 176 times, the relative frequency 176/400 = 0.44 is your best estimate — no symmetry argument exists for a lopsided object. 'Two outcomes' does not mean 'equally likely outcomes'; equal likelihood must be earned by symmetry (a fair coin) or measured by experiment.",
      },
      whyItWorks:
        "Why trust more trials? Each extra trial gives the estimate less room to be swayed by a fluke. Ten coin flips quite often give 7 heads (relative frequency 0.7), but a thousand flips almost never give 700 heads. In the long run relative frequency settles towards the true probability — this is the reason casinos, insurers and pollsters can rely on probability at all.",
      strategies: [
        "consider extremes — would the conclusion survive 10 trials? 10,000 trials?",
        "pool the data — combining all trials gives the best single estimate",
      ],
      keyPoints: [
        "Relative frequency = frequency ÷ number of trials; it estimates probability.",
        "More trials → a more reliable estimate. Trust (or pool) the biggest sample.",
        "Expected frequency = probability × number of trials.",
        "The expected count is a long-run average, not a guarantee.",
      ],
      thinkDeeper:
        "A fair coin flipped 1000 times: is exactly 500 heads likely? Surprisingly, no — P(exactly 500) is only about 2.5%. What IS likely is a relative frequency close to 0.5, say between 0.47 and 0.53. Probability controls proportions in the long run, not exact counts.",
    },
    {
      heading: "Sample space diagrams",
      body:
        "A **sample space** is the list of all possible outcomes. When an experiment has two parts — two dice, a coin and a spinner — a grid (sample space diagram) shows every combination exactly once.\n\nFor two fair dice there are 6 × 6 = 36 equally likely outcomes. Filling the grid with the **sums** reveals the pattern: sum 2 appears once (1,1), sum 7 appears six times ((1,6), (2,5), (3,4), (4,3), (5,2), (6,1)), sum 12 once. So\n\n- P(sum = 7) = 6/36 = 1/6 — the most likely sum\n- P(sum = 9) = 4/36 = 1/9\n- P(double) = 6/36 = 1/6\n\nThe crucial discipline: outcomes like (2,5) and (5,2) are **different outcomes**. Treating them as one is the classic sample-space error.",
      discovery: {
        problem:
          "Grace and Tom roll two dice and add. Grace wins on a sum of 7, Tom wins on a sum of 10, and they roll again on anything else. Tom reasons: 'Both are just one number out of the eleven possible sums (2 to 12), so the game is fair.' Do you agree?",
        idea:
          "The eleven sums are NOT equally likely. Draw the 6 × 6 grid: sum 7 can be made six ways, sum 10 only three ways ((4,6), (5,5), (6,4)). Grace is twice as likely to win each round. The grid converts a misleading list of sums into 36 genuinely equally likely outcomes — always count at the level where outcomes are equally likely.",
      },
      whyItWorks:
        "Why 36 equally likely outcomes? The first die lands each of 6 ways; for EACH of those the second die lands 6 ways, giving 6 × 6 = 36 combinations, and the dice do not influence each other, so no combination is favoured. Any question about two dice — sums, differences, products, doubles — is now a counting exercise on the grid.",
      strategies: [
        "draw a diagram — a grid guarantees nothing is missed or double-counted",
        "list systematically — order pairs (first die, second die) so (2,5) ≠ (5,2)",
        "find a pattern — equal sums lie on diagonals of the grid",
      ],
      keyPoints: [
        "Two-part experiments: outcomes = (ways for part 1) × (ways for part 2).",
        "Two dice: 36 equally likely outcomes; 7 is the most likely sum at 6/36.",
        "(2,5) and (5,2) are different outcomes — count both.",
        "Count favourable grid cells, then divide by the total number of cells.",
      ],
    },
    {
      heading: "Venn diagrams & set notation",
      body:
        "4MA1 expects fluent set language. With universal set ℰ (everything under discussion):\n\n- **A ∪ B** — the union: in A or B or both\n- **A ∩ B** — the intersection: in both A and B\n- **A′** — the complement: not in A\n- **x ∈ A** — x is an element (member) of A\n- **B ⊆ A** — B is a subset of A: every element of B is in A\n- **n(A)** — the number of elements in A\n\nA two-set Venn diagram has four regions: A only (A ∩ B′), the overlap (A ∩ B), B only (A′ ∩ B), and outside both ((A ∪ B)′). **Always fill in the overlap first**, then work outwards, and give the outside region a value so the regions total n(ℰ).\n\nCounting the union without double-counting the overlap:\n\nn(A ∪ B) = n(A) + n(B) − n(A ∩ B).\n\nProbabilities come straight off the diagram: P(region) = (number in region) / n(ℰ). Three-set diagrams work the same way — start from the centre (A ∩ B ∩ C) and peel outwards.",
      discovery: {
        problem:
          "In a class of 30, a survey finds 18 students like pizza and 16 like curry. Kofi says the survey must be wrong, because 18 + 16 = 34 is more than 30. Must it be wrong?",
        idea:
          "Not at all — some students like both, and they were counted twice. In fact the overlap must contain AT LEAST 34 − 30 = 4 students. Two overlapping circles turn this double-counting problem into a picture: put x in the overlap, and every question becomes easy arithmetic. This is exactly the correction n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
      },
      whyItWorks:
        "Why subtract n(A ∩ B) once? Adding n(A) + n(B) counts 'A only' once, 'B only' once, but the overlap twice — once as members of A and once as members of B. Subtracting n(A ∩ B) removes exactly the extra count, leaving every element counted once. That is the inclusion-exclusion principle in its simplest form.",
      strategies: [
        "draw a diagram — sketch the Venn diagram before touching the numbers",
        "work from the middle out — fill the deepest overlap first",
        "introduce a variable — put x in an unknown overlap and form an equation",
      ],
      keyPoints: [
        "∪ = or (union), ∩ = and (intersection), A′ = not A, ℰ = universal set.",
        "n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
        "Fill the overlap first; make all regions total n(ℰ), including the outside.",
        "P(region) = number in region ÷ n(ℰ).",
        "'A but not B' is A ∩ B′; 'neither' is (A ∪ B)′ = A′ ∩ B′.",
      ],
      thinkDeeper:
        "Shade (A ∪ B)′ and then shade A′ ∩ B′ on separate diagrams — you get the same region. Likewise (A ∩ B)′ = A′ ∪ B′. These are De Morgan's laws: complementing swaps ∪ and ∩. Examiners love asking for the same region written two different ways.",
      diagrams: [
        {
          id: "pro-diag-01",
          title: "The four regions of a two-set Venn diagram",
          svg: `<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two overlapping circles A and B inside a rectangle labelled universal set, with the four regions labelled A intersect B complement, A intersect B, A complement intersect B, and outside both A union B complement"><rect x="12" y="12" width="616" height="316" fill="none" stroke="#64748b" stroke-width="2"/><text x="26" y="40" font-size="20" fill="#64748b">&#8496;</text><circle cx="250" cy="175" r="115" fill="#2563eb" fill-opacity="0.12" stroke="#2563eb" stroke-width="3"/><circle cx="400" cy="175" r="115" fill="#dc2626" fill-opacity="0.12" stroke="#dc2626" stroke-width="3"/><text x="170" y="70" font-size="22" fill="#2563eb" font-weight="bold">A</text><text x="465" y="70" font-size="22" fill="#dc2626" font-weight="bold">B</text><text x="175" y="170" font-size="16" fill="#2563eb" text-anchor="middle">A only</text><text x="175" y="192" font-size="15" fill="#2563eb" text-anchor="middle">A &#8745; B&#8242;</text><text x="325" y="170" font-size="16" fill="#16a34a" text-anchor="middle">both</text><text x="325" y="192" font-size="15" fill="#16a34a" text-anchor="middle">A &#8745; B</text><text x="475" y="170" font-size="16" fill="#dc2626" text-anchor="middle">B only</text><text x="475" y="192" font-size="15" fill="#dc2626" text-anchor="middle">A&#8242; &#8745; B</text><text x="325" y="315" font-size="15" fill="#64748b" text-anchor="middle">neither: (A &#8746; B)&#8242; = A&#8242; &#8745; B&#8242;</text></svg>`,
          caption:
            "Fill the overlap A ∩ B first, then A only and B only, and finally the region outside both circles, so all four regions total n(ℰ).",
        },
      ],
    },
    {
      heading: "Tree diagrams",
      body:
        "A tree diagram organises a multi-stage experiment: one set of branches per stage, probabilities on the branches, and the probabilities out of any point summing to 1.\n\nThe two rules:\n\n- **Multiply along a path** to get the probability of that sequence of results.\n- **Add between paths** that satisfy the same event.\n\nFor **independent events** (a coin then a die; two spins of a spinner) the second-stage probabilities are the same on every branch: P(A and B) = P(A) × P(B).\n\nFor **without replacement** problems the second pick depends on the first: both the numerator and the total change. From a bag of 5 red and 3 blue counters, P(red then red) = 5/8 × 4/7 = 5/14 — one red gone, so 4 reds remain out of 7 counters. Writing the new denominators is where the marks (and the mistakes) live.",
      discovery: {
        problem:
          "A bag holds 5 red and 3 blue counters. You take two counters, one after the other, without putting the first back. Is P(second counter is red) smaller than, equal to, or bigger than 5/8?",
        idea:
          "Astonishingly, it is exactly 5/8. Check with the tree: P(2nd red) = P(RR) + P(BR) = 5/8 × 4/7 + 3/8 × 5/7 = 20/56 + 15/56 = 35/56 = 5/8. With no information about the first pick, the second pick is just 'a random counter', so symmetry gives 5/8. Trees make the calculation routine — and occasionally reveal something beautiful.",
      },
      whyItWorks:
        "Why multiply along branches? P(red then red) asks: of all the times the experiment runs, in what fraction do both picks come up red? The first pick is red 5/8 of the time; OF THOSE times, the second is red 4/7 of the time. A fraction of a fraction is a product: 4/7 of 5/8 is 5/8 × 4/7. Adding between paths is just the mutually exclusive addition rule — different complete paths can never both happen.",
      strategies: [
        "draw a diagram — a tree forces every case to be considered",
        "check each branch point — probabilities leaving any point sum to 1",
        "exploit symmetry — sometimes an answer like P(2nd red) = P(1st red) drops out",
      ],
      keyPoints: [
        "Multiply along a path; add the paths that match the event.",
        "Independent events: second-stage probabilities are identical on every branch.",
        "Without replacement: reduce the total by 1, and reduce the count of whatever was removed.",
        "Probabilities on branches from a single point always sum to 1.",
      ],
      diagrams: [
        {
          id: "pro-diag-02",
          title: "Tree diagram: two counters without replacement (5 red, 3 blue)",
          svg: `<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree diagram for picking two counters without replacement from five red and three blue. First branches red five eighths and blue three eighths. After red: red four sevenths, blue three sevenths. After blue: red five sevenths, blue two sevenths. Path products shown at the ends."><line x1="60" y1="165" x2="215" y2="80" stroke="#64748b" stroke-width="2"/><line x1="60" y1="165" x2="215" y2="250" stroke="#64748b" stroke-width="2"/><line x1="215" y1="80" x2="380" y2="40" stroke="#64748b" stroke-width="2"/><line x1="215" y1="80" x2="380" y2="120" stroke="#64748b" stroke-width="2"/><line x1="215" y1="250" x2="380" y2="210" stroke="#64748b" stroke-width="2"/><line x1="215" y1="250" x2="380" y2="290" stroke="#64748b" stroke-width="2"/><text x="120" y="105" font-size="15" fill="#dc2626">5/8</text><text x="120" y="230" font-size="15" fill="#2563eb">3/8</text><text x="285" y="48" font-size="15" fill="#dc2626">4/7</text><text x="285" y="112" font-size="15" fill="#2563eb">3/7</text><text x="285" y="218" font-size="15" fill="#dc2626">5/7</text><text x="285" y="282" font-size="15" fill="#2563eb">2/7</text><text x="222" y="76" font-size="16" fill="#dc2626" font-weight="bold">R</text><text x="222" y="262" font-size="16" fill="#2563eb" font-weight="bold">B</text><text x="390" y="46" font-size="15" fill="#dc2626">RR: 5/8 &#215; 4/7 = 20/56</text><text x="390" y="126" font-size="15" fill="#64748b">RB: 5/8 &#215; 3/7 = 15/56</text><text x="390" y="216" font-size="15" fill="#64748b">BR: 3/8 &#215; 5/7 = 15/56</text><text x="390" y="296" font-size="15" fill="#2563eb">BB: 3/8 &#215; 2/7 = 6/56</text><text x="30" y="150" font-size="14" fill="#64748b">1st pick</text><text x="200" y="24" font-size="14" fill="#64748b">2nd pick</text></svg>`,
          caption:
            "Without replacement, the denominators drop from 8 to 7 and the count of the removed colour drops by 1. The four path products sum to 56/56 = 1 — a built-in check.",
        },
      ],
    },
    {
      heading: "Conditional probability & the 'at least one' trick",
      body:
        "**Conditional probability** P(A given B), written P(A|B), is the probability of A when you already know B happened. The key move: **shrink the universe to B**.\n\nP(A|B) = P(A ∩ B) / P(B) = n(A ∩ B) / n(B).\n\nFrom a two-way table or Venn diagram: the denominator is the total of the KNOWN group, not the whole population. From a tree: divide the probability of the path(s) where both happen by the probability of all paths where the condition happens.\n\n**'At least one'** questions look long — at least one six could mean one, two, three or four sixes. The complement is short:\n\nP(at least one) = 1 − P(none).\n\n'None' is a single path (fail, fail, fail, ...), so its probability is one multiplication. Example: P(at least one six in four rolls) = 1 − (5/6)^4 = 1 − 625/1296 = 671/1296 ≈ 0.518.",
      discovery: {
        problem:
          "You roll a fair die four times. Is it more likely than not that you see at least one six? Try to answer by listing the ways it could happen: exactly one six, exactly two sixes... (Warning: it gets ugly. Then find the shortcut.)",
        idea:
          "The direct route drowns in cases. But 'at least one six' fails only in ONE way: no sixes at all, with probability (5/6)^4 = 625/1296. So P(at least one six) = 1 − 625/1296 = 671/1296 ≈ 51.8% — more likely than not, which surprises most people. One subtraction replaced a dozen cases: whenever you read 'at least one', immediately think 1 − P(none).",
      },
      whyItWorks:
        "Why does P(A|B) = n(A ∩ B)/n(B)? Once B is known, the outcomes outside B are impossible, so B becomes the new universal set. Within it, the favourable outcomes are those in both A and B. Try it small: 3 coins have 8 outcomes; given 'at least one head' (7 outcomes), P(all heads) = 1/7, not 1/8 — the known condition threw away TTT and rescaled everything else.",
      strategies: [
        "consider the complement — 'at least one' means 1 − P(none)",
        "shrink the universe — condition on B by making n(B) the denominator",
        "list systematically — with few outcomes, listing beats formulas",
      ],
      keyPoints: [
        "P(A|B) = P(A ∩ B)/P(B): restrict attention to the group you know about.",
        "From tables and Venn diagrams: numerator = overlap, denominator = the known group's total.",
        "P(at least one) = 1 − P(none); P(none) is a single multiplied path.",
        "In general P(A|B) ≠ P(B|A) — read the condition carefully.",
      ],
      thinkDeeper:
        "The intuition-breaker: among just 5 friends, what is the chance at least two were born on the same DAY OF THE WEEK? Complement: P(all different) = 7/7 × 6/7 × 5/7 × 4/7 × 3/7 = 360/2401 ≈ 0.15, so P(a shared day) ≈ 85%. The same idea shows that in a class of 23 people, a shared birthday is more likely than not. Coincidences are cheap — because 'at least one match' has so many chances to occur.",
    },
    {
      heading: "Equations from probability: the counters problems",
      body:
        "The grade 8–9 showpiece: a probability statement about an unknown number of counters becomes an **equation** — usually a quadratic.\n\nThe recipe:\n\n- **Introduce a variable**: let n be the total (or x the unknown count).\n- Write each pick's probability **in terms of n**, remembering without replacement reduces both numbers: 6/n, then 5/(n − 1).\n- Multiply along the tree path and set the product equal to the given probability.\n- Clear the fractions, rearrange to a quadratic, and solve.\n- **Reject impossible roots**: counts must be positive whole numbers (and large enough for the picks made).\n\nExample: n sweets, 6 orange. P(both picks orange) = 1/3 gives 6/n × 5/(n − 1) = 1/3, so 90 = n(n − 1), so n² − n − 90 = 0, so (n − 10)(n + 9) = 0. Reject n = −9; there are 10 sweets. The algebra is ordinary — the skill is the set-up.",
      discovery: {
        problem:
          "The 2015 exam question that went viral: 'There are n sweets in a bag. 6 are orange, the rest are yellow. Hannah takes two sweets at random and eats them. The probability she eats two orange sweets is 1/3. Show that n² − n − 90 = 0.' Students protested online that probability had 'turned into algebra'. Can you make the connection?",
        idea:
          "The tree does it in two branches: P(orange, orange) = 6/n × 5/(n − 1) = 1/3. Cross-multiplying: 90 = n(n − 1), i.e. n² − n − 90 = 0. The question is not two topics jammed together — the probability statement IS the equation; algebra is just the language it is written in.",
      },
      whyItWorks:
        "Why must one root be rejected? The equation only remembers the algebra, not the story. n counts sweets, so it must be a positive integer, at least as large as the number of sweets removed, and at least the number of orange sweets. Any root failing those checks was introduced by the algebra, not the situation. Occasionally BOTH roots are valid — then the answer is genuinely 'either', and saying so earns the final mark.",
      strategies: [
        "introduce a variable — name the unknown total before writing any probability",
        "draw a diagram — a two-branch tree keeps numerators and denominators honest",
        "work backwards — 'show that' questions tell you the target quadratic; aim your algebra at it",
        "consider extremes — check roots against the physical constraints of the problem",
      ],
      keyPoints: [
        "Without replacement from n items: denominators n then n − 1.",
        "Set the path product equal to the given probability, then clear fractions.",
        "Expect a quadratic; solve by factorising or the formula.",
        "Test every root in the context — reject negative or too-small values, and check whether both roots might work.",
      ],
      thinkDeeper:
        "In the 'show that' format you are given the quadratic — so you can verify your set-up by expanding backwards from n² − n − 90 = 0 to n(n − 1) = 90 and asking: what probability statement would produce 'product of two consecutive numbers = 90 × (something)'? Reverse-engineering the printed answer is a legitimate and powerful exam strategy.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "P(event) for equally likely outcomes",
        back: "Number of favourable outcomes ÷ total number of outcomes. Only valid when outcomes are equally likely.",
      },
      {
        front: "P(A′) — the complement",
        back: "P(A′) = 1 − P(A). 'Not A' takes whatever probability A leaves behind.",
      },
      {
        front: "Mutually exclusive events",
        back: "Events that cannot happen together. Then P(A or B) = P(A) + P(B), and an exhaustive set of them has probabilities summing to 1.",
      },
      {
        front: "Independent events",
        back: "One happening does not change the other's probability. P(A and B) = P(A) × P(B).",
      },
      {
        front: "A ∪ B",
        back: "The union: everything in A or in B or in both. n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
      },
      {
        front: "A ∩ B",
        back: "The intersection: everything in both A and B — the overlap of the Venn diagram.",
      },
      {
        front: "ℰ, A′, n(A)",
        back: "ℰ is the universal set (everything considered); A′ is everything in ℰ not in A; n(A) is the number of elements in A.",
      },
      {
        front: "x ∈ A and B ⊆ A",
        back: "x ∈ A: x is an element of A. B ⊆ A: B is a subset of A — every element of B is also in A.",
      },
      {
        front: "Relative frequency",
        back: "Frequency of the event ÷ number of trials. It estimates probability, and improves with more trials.",
      },
      {
        front: "Expected frequency",
        back: "Probability × number of trials. A long-run average, not a guarantee.",
      },
      {
        front: "Tree diagram rules",
        back: "Multiply along a path; add between paths. Branches from any single point sum to 1.",
      },
      {
        front: "Without replacement",
        back: "The second pick's fractions change: total drops by 1, and the count of whatever was removed drops by 1.",
      },
      {
        front: "P(at least one ...)",
        back: "1 − P(none). 'None' is a single path, so it needs only one multiplication.",
      },
      {
        front: "Conditional probability P(A|B)",
        back: "P(A ∩ B) ÷ P(B), or n(A ∩ B) ÷ n(B). Shrink the universe to the group you know about.",
      },
    ],
    keyFacts: [
      "All probabilities lie between 0 (impossible) and 1 (certain).",
      "The probabilities of mutually exclusive, exhaustive outcomes sum to 1.",
      "Two fair dice give 36 equally likely outcomes; the most likely sum is 7, with probability 6/36 = 1/6.",
      "n(A ∪ B) = n(A) + n(B) − n(A ∩ B) — subtract the overlap to undo double-counting.",
      "(A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′ (De Morgan's laws).",
      "Independent events multiply: P(A and B) = P(A) × P(B).",
      "'At least one' = 1 − P(none) — the complement trick.",
      "In a Venn or table conditional, the denominator is the size of the known group, not of ℰ.",
      "Without-replacement counter problems with an unknown total usually lead to a quadratic in n.",
      "The relative-frequency estimate from the largest number of trials is the most reliable.",
    ],
    formulaSheet: [
      {
        name: "Basic probability",
        formula: "P(A) = favourable outcomes / total outcomes",
        note: "Equally likely outcomes only.",
      },
      {
        name: "Complement",
        formula: "P(A′) = 1 − P(A)",
      },
      {
        name: "Addition (mutually exclusive)",
        formula: "P(A or B) = P(A) + P(B)",
        note: "Only when A and B cannot both happen.",
      },
      {
        name: "Multiplication (independent)",
        formula: "P(A and B) = P(A) × P(B)",
      },
      {
        name: "Union count",
        formula: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
      },
      {
        name: "Conditional probability",
        formula: "P(A|B) = P(A ∩ B) / P(B)",
        note: "Equivalently n(A ∩ B)/n(B) from a table or Venn diagram.",
      },
      {
        name: "At least one",
        formula: "P(at least one) = 1 − P(none)",
      },
      {
        name: "Expected frequency",
        formula: "expected frequency = probability × number of trials",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "pro-quiz-mcq-01",
        question:
          "A fair eight-sided spinner has sections numbered 1 to 8. What is the probability it lands on a prime number?",
        options: ["1/2", "3/8", "5/8", "1/4"],
        answerIndex: 0,
        explanation:
          "The primes from 1 to 8 are 2, 3, 5 and 7 — four of the eight equally likely sections, so P = 4/8 = 1/2. Choosing 3/8 usually means forgetting 2 is prime or wrongly including 1 while dropping two primes; 1 is not a prime number.",
        guideRef: "Probability basics & the scale",
        difficulty: "warmup",
      },
      {
        id: "pro-quiz-mcq-02",
        question:
          "A spinner can only land on A, B or C, and these are mutually exclusive. P(A) = 0.3 and P(B) = 0.45. What is P(C)?",
        options: ["0.25", "0.75", "0.35", "0.15"],
        answerIndex: 0,
        explanation:
          "The three outcomes cover everything, so the probabilities sum to 1: P(C) = 1 − 0.3 − 0.45 = 0.25. Choosing 0.75 subtracts only P(A); 0.35 comes from mis-adding 0.3 + 0.45 as 0.65 incorrectly.",
        guideRef: "Probability basics & the scale",
        difficulty: "warmup",
      },
      {
        id: "pro-quiz-mcq-03",
        question:
          "A biased coin is flipped 150 times and lands heads 84 times. What is the best estimate of the probability of heads?",
        options: ["0.56", "0.44", "0.5", "0.84"],
        answerIndex: 0,
        explanation:
          "Relative frequency = 84/150 = 0.56. The coin is biased, so 0.5 is not justified; 0.44 is the estimate for tails; 0.84 forgets to divide by the number of trials.",
        guideRef: "Relative frequency & expected outcomes",
        difficulty: "warmup",
      },
      {
        id: "pro-quiz-mcq-04",
        question:
          "The probability that a biased spinner lands on red is 2/5. The spinner is spun 240 times. How many times would you expect it to land on red?",
        options: ["96", "48", "120", "100"],
        answerIndex: 0,
        explanation:
          "Expected frequency = probability × trials = 2/5 × 240 = 96. Choosing 48 uses 1/5; 120 uses 1/2; 100 is a rounded guess with no calculation.",
        guideRef: "Relative frequency & expected outcomes",
        difficulty: "core",
        hints: [
          "You have a probability and a number of trials — which formula links them?",
          "Expected frequency = probability × number of trials.",
          "Find 2/5 of 240: divide by 5, then multiply by 2.",
        ],
        strategy: "use expected frequency = p × n",
      },
      {
        id: "pro-quiz-mcq-05",
        question: "Two fair six-sided dice are rolled and the scores are added. What is P(sum = 9)?",
        options: ["1/9", "1/12", "1/6", "5/36"],
        answerIndex: 0,
        explanation:
          "The 36-cell grid has four cells summing to 9: (3,6), (4,5), (5,4), (6,3), so P = 4/36 = 1/9. Choosing 1/12 counts only three ways (missing that (4,5) and (5,4) are different); 1/6 is the probability of a sum of 7; 5/36 is the count for a sum of 8.",
        guideRef: "Sample space diagrams",
        difficulty: "core",
        hints: [
          "How many equally likely outcomes are there for two dice?",
          "List the ordered pairs whose sum is 9 — remember (4,5) and (5,4) are different outcomes.",
          "Count the favourable pairs out of 36 and simplify the fraction.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "pro-quiz-mcq-06",
        question:
          "In a group of 40 people, n(A) = 22, n(B) = 17 and n(A ∩ B) = 9, where A and B are sets of people. How many people are in neither A nor B?",
        options: ["10", "1", "13", "9"],
        answerIndex: 0,
        explanation:
          "n(A ∪ B) = 22 + 17 − 9 = 30, so the outside region holds 40 − 30 = 10. Choosing 1 comes from 40 − (22 + 17), forgetting to remove the double-counted overlap; 13 is A only (22 − 9); 9 is the overlap itself.",
        guideRef: "Venn diagrams & set notation",
        difficulty: "core",
        hints: [
          "People in the overlap have been counted in both n(A) and n(B).",
          "Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
          "Subtract n(A ∪ B) from the total of 40.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "pro-quiz-mcq-07",
        question: "Which region of a two-set Venn diagram does A′ ∩ B describe?",
        options: [
          "The part of B outside A",
          "The part of A outside B",
          "Everything outside both A and B",
          "The overlap of A and B",
        ],
        answerIndex: 0,
        explanation:
          "A′ ∩ B means 'not in A, AND in B' — that is B with the overlap removed, i.e. B only. 'The part of A outside B' is A ∩ B′; 'outside both' is A′ ∩ B′; the overlap is A ∩ B.",
        guideRef: "Venn diagrams & set notation",
        difficulty: "core",
        hints: [
          "Translate symbol by symbol: A′ means 'not in A', ∩ means 'and'.",
          "So the region must be inside B but outside A.",
          "Shade B, then erase the part that overlaps A.",
        ],
        strategy: "translate the notation into words",
      },
      {
        id: "pro-quiz-mcq-08",
        question:
          "P(rain on Saturday) = 0.6 and P(rain on Sunday) = 0.3, independently. What is the probability it rains on exactly one of the two days?",
        options: ["0.54", "0.9", "0.18", "0.72"],
        answerIndex: 0,
        explanation:
          "Exactly one means (rain, dry) or (dry, rain): 0.6 × 0.7 + 0.4 × 0.3 = 0.42 + 0.12 = 0.54. Choosing 0.9 wrongly adds the two probabilities; 0.18 is P(both days); 0.72 is P(at least one day).",
        guideRef: "Tree diagrams",
        difficulty: "core",
        hints: [
          "Sketch a two-stage tree: Saturday then Sunday.",
          "'Exactly one' is satisfied by two different paths — which two?",
          "Multiply along each of those paths, then add the two results.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "pro-quiz-mcq-09",
        question:
          "A bag contains 5 red and 3 blue counters. Two counters are taken at random without replacement. What is P(both blue)?",
        options: ["3/28", "9/64", "3/8", "1/4"],
        answerIndex: 0,
        explanation:
          "P(blue then blue) = 3/8 × 2/7 = 6/56 = 3/28. Choosing 9/64 is 3/8 × 3/8, ignoring that the first blue is not replaced; 3/8 is just the first pick; 1/4 rounds the wrong way with no valid method.",
        guideRef: "Tree diagrams",
        difficulty: "core",
        hints: [
          "After the first blue counter is removed, what is left in the bag?",
          "The second fraction has a smaller numerator AND a smaller denominator.",
          "Multiply the two branch probabilities: first pick 3/8, second pick out of 7 counters.",
        ],
        strategy: "track the changing bag",
      },
      {
        id: "pro-quiz-mcq-10",
        question: "A fair die is rolled three times. What is the probability of at least one six?",
        options: ["91/216", "125/216", "1/2", "15/216"],
        answerIndex: 0,
        explanation:
          "P(at least one six) = 1 − P(no sixes) = 1 − (5/6)³ = 1 − 125/216 = 91/216. Choosing 125/216 stops at P(none); 1/2 wrongly adds 1/6 three times; 15/216 mishandles the case count. The complement turns many cases into one subtraction.",
        guideRef: "Conditional probability & the 'at least one' trick",
        difficulty: "challenge",
        hints: [
          "Listing 'exactly one six', 'exactly two sixes'... is painful. Is there a shortcut?",
          "'At least one six' fails in only one way. What is it?",
          "Compute P(no six in three rolls) = (5/6)³, then subtract from 1.",
        ],
        strategy: "consider the complement",
      },
    ],
    qa: [
      {
        id: "pro-quiz-qa-01",
        question:
          "A bag contains only red, blue and green counters. A counter is taken at random. P(red) = 0.35 and P(blue) = 0.4.\n\n(a) Find P(green).\n\n(b) The bag contains 60 counters in total. Work out the number of green counters.",
        modelAnswer:
          "(a) The three colours are mutually exclusive and cover all counters, so the probabilities sum to 1.\nP(green) = 1 − 0.35 − 0.4 = 0.25.\n\n(b) Number of green counters = 0.25 × 60 = 15.",
        markScheme: ["15", "0.25", "sum to 1", "1 - 0.35 - 0.4"],
        commonError:
          "Adding 0.35 + 0.4 = 0.75 and stopping — the question asks for the leftover probability, 1 − 0.75, not the total so far.",
        guideRef: "Probability basics & the scale",
        difficulty: "warmup",
      },
      {
        id: "pro-quiz-qa-02",
        question:
          "Two fair four-sided dice, each numbered 1 to 4, are rolled and the two scores are multiplied together. By drawing or imagining a sample space diagram, find the probability that the product is at least 8. Give your answer as a fraction in its simplest form.",
        modelAnswer:
          "The grid of products has 4 × 4 = 16 equally likely outcomes:\nRow 1: 1, 2, 3, 4; Row 2: 2, 4, 6, 8; Row 3: 3, 6, 9, 12; Row 4: 4, 8, 12, 16.\nProducts of at least 8: (2,4) = 8, (4,2) = 8, (3,3) = 9, (3,4) = 12, (4,3) = 12, (4,4) = 16 — that is 6 outcomes.\nP(product ≥ 8) = 6/16 = 3/8.",
        markScheme: ["3/8", "16", "sample space", "6 outcomes"],
        commonError:
          "Counting (2,4) but not (4,2) — the ordered pairs are different outcomes, and missing one gives the wrong count of 5.",
        guideRef: "Sample space diagrams",
        difficulty: "core",
        hints: [
          "How many equally likely outcomes are there for two four-sided dice?",
          "Fill in a 4 × 4 grid of products.",
          "Circle every cell showing 8 or more — remember (2,4) and (4,2) are separate cells.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "pro-quiz-qa-03",
        question:
          "There are 50 students in a year group. 28 study French, 21 study Spanish and 8 study both languages. A student is picked at random.\n\n(a) Find the probability that the student studies neither language.\n\n(b) Find the probability that the student studies French but not Spanish.",
        modelAnswer:
          "Draw a Venn diagram, filling in the overlap first: both = 8, so French only = 28 − 8 = 20 and Spanish only = 21 − 8 = 13.\nStudying at least one language: 20 + 8 + 13 = 41, so neither = 50 − 41 = 9.\n\n(a) P(neither) = 9/50.\n\n(b) French but not Spanish is the 'French only' region: P(F ∩ S′) = 20/50 = 2/5.",
        markScheme: ["2/5", "9/50", "20", "overlap", "Venn"],
        commonError:
          "Using 28/50 for 'French but not Spanish' — the 28 includes the 8 who also study Spanish, so the overlap must be subtracted first.",
        guideRef: "Venn diagrams & set notation",
        difficulty: "core",
        hints: [
          "Sketch two overlapping circles and fill in the overlap first.",
          "French ONLY is 28 minus the overlap.",
          "The four regions (French only, both, Spanish only, neither) must total 50.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "pro-quiz-qa-04",
        question:
          "A jar contains 4 red sweets and 6 green sweets. Two sweets are taken at random without replacement. Find the probability that the two sweets are different colours.",
        modelAnswer:
          "P(red then green) = 4/10 × 6/9 = 24/90.\nP(green then red) = 6/10 × 4/9 = 24/90.\nP(different colours) = 24/90 + 24/90 = 48/90 = 8/15.",
        markScheme: ["8/15", "24/90", "without replacement", "add", "48/90"],
        commonError:
          "Finding only one order (red then green) and forgetting the green-then-red path, which halves the answer to 4/15.",
        guideRef: "Tree diagrams",
        difficulty: "core",
        hints: [
          "Draw the tree: the second pick is from only 9 sweets.",
          "'Different colours' happens on two separate paths.",
          "If direct counting feels long, try 1 − P(same colour) instead.",
        ],
        strategy: "draw a diagram",
        solutions: [
          {
            label: "Direct method (two paths)",
            steps: [
              "Draw a two-stage tree; second-pick denominators are 9.",
              "P(RG) = 4/10 × 6/9 = 24/90 and P(GR) = 6/10 × 4/9 = 24/90.",
              "These paths are mutually exclusive, so add: 48/90 = 8/15.",
            ],
          },
          {
            label: "Complement method (the elegant one)",
            steps: [
              "The opposite of 'different colours' is 'same colour'.",
              "P(RR) = 4/10 × 3/9 = 12/90 and P(GG) = 6/10 × 5/9 = 30/90, so P(same) = 42/90 = 7/15.",
              "P(different) = 1 − 7/15 = 8/15. One subtraction replaces tracking mixed paths — this scales beautifully to harder problems.",
            ],
          },
        ],
      },
      {
        id: "pro-quiz-qa-05",
        question:
          "The 80 students in Year 11 were asked how they travel to school.\n\n- Boys: 15 walk, 21 take the bus (36 boys in total)\n- Girls: 25 walk, 19 take the bus (44 girls in total)\n\nA student who walks to school is picked at random. Find the probability that this student is a girl.",
        modelAnswer:
          "The condition 'walks to school' shrinks the universe to the walkers: 15 + 25 = 40 students.\nOf these, 25 are girls.\nP(girl | walks) = 25/40 = 5/8.",
        markScheme: ["5/8", "25/40", "40 walkers", "conditional"],
        commonError:
          "Using 80 as the denominator (giving 25/80) — the question tells you the student walks, so only the 40 walkers are possible.",
        guideRef: "Conditional probability & the 'at least one' trick",
        difficulty: "core",
        hints: [
          "What do you already KNOW about the chosen student?",
          "Restrict attention to walkers only — how many are there?",
          "Divide the number of girls who walk by the total number of walkers.",
        ],
        strategy: "shrink the universe",
      },
      {
        id: "pro-quiz-qa-06",
        question:
          "A bag contains n counters. 4 of the counters are red and the rest are yellow. Two counters are taken at random without replacement. The probability that both counters are red is 1/11.\n\n(a) Show that n² − n − 132 = 0.\n\n(b) Find the number of counters in the bag.",
        modelAnswer:
          "(a) P(first red) = 4/n. Without replacement, P(second red) = 3/(n − 1).\nSo 4/n × 3/(n − 1) = 1/11, giving 12/(n(n − 1)) = 1/11.\nCross-multiplying: 132 = n(n − 1), so n² − n = 132, i.e. n² − n − 132 = 0 (as required).\n\n(b) Factorising: (n − 12)(n + 11) = 0, so n = 12 or n = −11.\nA number of counters must be positive, so n = 12. The bag contains 12 counters.",
        markScheme: ["12", "4/n", "3/(n-1)", "132", "factorise", "reject -11"],
        commonError:
          "Writing the second pick as 4/(n − 1) — one RED counter has gone, so only 3 reds remain among the n − 1 counters.",
        guideRef: "Equations from probability: the counters problems",
        difficulty: "challenge",
        hints: [
          "Write P(first counter red) in terms of n.",
          "After one red is removed, how many reds are left, and how many counters in total?",
          "Set 4/n × 3/(n − 1) equal to 1/11 and cross-multiply.",
          "Solve the quadratic and reject any root that cannot count counters.",
        ],
        strategy: "introduce a variable",
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "pro-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "pro-mcq-p1-q01",
            question: "A fair six-sided die is rolled once. What is the probability of rolling a number less than 5?",
            options: ["2/3", "5/6", "1/2", "4/5"],
            answerIndex: 0,
            explanation:
              "The favourable outcomes are 1, 2, 3, 4 — four of six — so P = 4/6 = 2/3. Choosing 5/6 wrongly includes 5 itself ('less than 5' excludes 5); 4/5 divides by the wrong total.",
            guideRef: "Probability basics & the scale",
            difficulty: "warmup",
          },
          {
            id: "pro-mcq-p1-q02",
            question:
              "A four-sided spinner lands on 1, 2, 3 or 4. P(1) = 0.1, P(2) = 0.3, P(3) = x and P(4) = 2x. Find x.",
            options: ["0.2", "0.3", "0.6", "0.15"],
            answerIndex: 0,
            explanation:
              "The probabilities sum to 1: 0.1 + 0.3 + x + 2x = 1, so 3x = 0.6 and x = 0.2. Choosing 0.6 stops at 3x; 0.3 splits the remaining 0.6 in half, forgetting P(4) is twice P(3); 0.15 divides 0.6 by 4.",
            guideRef: "Probability basics & the scale",
            difficulty: "warmup",
          },
          {
            id: "pro-mcq-p1-q03",
            question:
              "A drawing pin is dropped 400 times and lands point up 176 times. What is the best estimate of P(point up)?",
            options: ["0.44", "0.5", "0.56", "0.44 × 400"],
            answerIndex: 0,
            explanation:
              "Relative frequency = 176/400 = 0.44. There is no symmetry argument for a drawing pin, so 0.5 is not justified; 0.56 is P(point down); the last option is a count, not a probability.",
            guideRef: "Relative frequency & expected outcomes",
            difficulty: "core",
            hints: [
              "Probability from an experiment is a relative frequency.",
              "Divide the number of successes by the number of trials.",
              "176 ÷ 400 — simplify by dividing top and bottom by 8.",
            ],
            strategy: "use relative frequency",
          },
          {
            id: "pro-mcq-p1-q04",
            question: "Two fair six-sided dice are rolled. What is the probability that both dice show the same number?",
            options: ["1/6", "1/36", "1/12", "6/12"],
            answerIndex: 0,
            explanation:
              "There are 6 doubles — (1,1) up to (6,6) — out of 36 outcomes, so P = 6/36 = 1/6. Choosing 1/36 counts only one specific double; 1/12 halves the correct answer without reason.",
            guideRef: "Sample space diagrams",
            difficulty: "core",
            hints: [
              "How many outcomes are there in total for two dice?",
              "List the doubles: (1,1), (2,2), ...",
              "Divide the number of doubles by 36.",
            ],
            strategy: "list systematically",
          },
          {
            id: "pro-mcq-p1-q05",
            question:
              "ℰ = {1, 2, 3, ..., 12}, A = {odd numbers} and B = {multiples of 3}. Which set is A ∩ B?",
            options: ["{3, 9}", "{3, 6, 9, 12}", "{1, 3, 5, 7, 9, 11}", "{1, 3, 5, 6, 7, 9, 11, 12}"],
            answerIndex: 0,
            explanation:
              "A ∩ B needs numbers that are BOTH odd AND multiples of 3: from {3, 6, 9, 12}, only 3 and 9 are odd. The second option is all of B; the third is all of A; the fourth is the union A ∪ B.",
            guideRef: "Venn diagrams & set notation",
            difficulty: "core",
            hints: [
              "∩ means 'and' — elements must pass both tests.",
              "List B = {3, 6, 9, 12}, then keep only the odd ones.",
              "Check: is 6 odd? Is 12 odd?",
            ],
            strategy: "translate the notation into words",
          },
          {
            id: "pro-mcq-p1-q06",
            question: "A and B are independent events with P(A) = 1/4 and P(B) = 2/5. What is P(A ∩ B)?",
            options: ["1/10", "13/20", "3/20", "2/9"],
            answerIndex: 0,
            explanation:
              "Independent events multiply: P(A ∩ B) = 1/4 × 2/5 = 2/20 = 1/10. Choosing 13/20 adds the probabilities (that estimates a union, not an intersection); 2/9 adds numerators and denominators, which is never valid.",
            guideRef: "Tree diagrams",
            difficulty: "core",
            hints: [
              "What does independence let you do with the two probabilities?",
              "∩ means both happen.",
              "Multiply the fractions and simplify.",
            ],
            strategy: "multiply independent probabilities",
          },
          {
            id: "pro-mcq-p1-q07",
            question:
              "From a large experiment, P(a component is faulty) is estimated as 0.35. In a batch of 500 components, how many faulty ones should be expected?",
            options: ["175", "150", "325", "35"],
            answerIndex: 0,
            explanation:
              "Expected frequency = 0.35 × 500 = 175. Choosing 325 counts the NON-faulty components (0.65 × 500); 35 treats 0.35 as a raw count scaled by 100.",
            guideRef: "Relative frequency & expected outcomes",
            difficulty: "core",
            hints: [
              "Expected frequency = probability × number of trials.",
              "Find 0.35 × 500.",
              "0.35 × 500 = 35 × 5.",
            ],
            strategy: "use expected frequency = p × n",
          },
          {
            id: "pro-mcq-p1-q08",
            question:
              "Two fair dice are rolled. Given that the sum of the two dice is 8, what is the probability that at least one die shows a 6?",
            options: ["2/5", "5/36", "1/3", "2/36"],
            answerIndex: 0,
            explanation:
              "The condition shrinks the universe to sums of 8: (2,6), (3,5), (4,4), (5,3), (6,2) — five outcomes. Of these, two contain a six. P = 2/5. Choosing 5/36 or 2/36 keeps the old universe of 36; 1/3 miscounts the sum-8 outcomes as six by double-counting (4,4).",
            guideRef: "Conditional probability & the 'at least one' trick",
            difficulty: "challenge",
            hints: [
              "'Given that' means some outcomes are no longer possible.",
              "List every ordered pair with sum 8 — be careful: (4,4) appears once, not twice.",
              "Count how many of those pairs include a 6, and divide by the number of pairs listed.",
            ],
            strategy: "shrink the universe",
          },
        ],
      },
      {
        id: "pro-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "pro-mcq-p2-q01",
            question:
              "Cards numbered 1 to 20 are shuffled and one is drawn at random. What is the probability that it shows a multiple of 4?",
            options: ["1/4", "1/5", "4/20 × 4", "1/2"],
            answerIndex: 0,
            explanation:
              "Multiples of 4 up to 20: 4, 8, 12, 16, 20 — five of twenty cards, so P = 5/20 = 1/4. Choosing 1/5 misses 20 from the list (counting only four multiples).",
            guideRef: "Probability basics & the scale",
            difficulty: "warmup",
          },
          {
            id: "pro-mcq-p2-q02",
            question: "The probability that Leah passes her driving test is 0.85. What is the probability she does NOT pass?",
            options: ["0.15", "0.85", "0.25", "1.85"],
            answerIndex: 0,
            explanation:
              "P(not pass) = 1 − 0.85 = 0.15 by the complement rule. A probability of 1.85 is impossible — probabilities never exceed 1.",
            guideRef: "Probability basics & the scale",
            difficulty: "warmup",
          },
          {
            id: "pro-mcq-p2-q03",
            question: "Which statement correctly describes x ∈ A ∩ B′?",
            options: [
              "x is in A and not in B",
              "x is in B and not in A",
              "x is in neither A nor B",
              "x is in both A and B",
            ],
            answerIndex: 0,
            explanation:
              "∈ means 'is an element of', ∩ means 'and', B′ means 'not in B'. So x is in A AND not in B. The other options describe A′ ∩ B, A′ ∩ B′ and A ∩ B respectively.",
            guideRef: "Venn diagrams & set notation",
            difficulty: "core",
            hints: [
              "Read the symbols one at a time: ∈, then ∩, then ′.",
              "B′ is the complement of B.",
              "Combine: inside A, outside B.",
            ],
            strategy: "translate the notation into words",
          },
          {
            id: "pro-mcq-p2-q04",
            question: "n(A) = 30, n(B) = 24 and n(A ∪ B) = 42. Find n(A ∩ B).",
            options: ["12", "18", "6", "54"],
            answerIndex: 0,
            explanation:
              "Rearranging n(A ∪ B) = n(A) + n(B) − n(A ∩ B): n(A ∩ B) = 30 + 24 − 42 = 12. Choosing 54 stops at 30 + 24; 18 and 6 subtract the wrong pairs (42 − 24 and 30 − 24).",
            guideRef: "Venn diagrams & set notation",
            difficulty: "core",
            hints: [
              "Write down the union formula.",
              "Substitute the three known values.",
              "Solve for the one unknown, n(A ∩ B).",
            ],
            strategy: "work backwards",
          },
          {
            id: "pro-mcq-p2-q05",
            question:
              "Bag 1 contains 3 red and 2 blue counters. Bag 2 contains 1 red and 4 blue counters. One counter is taken at random from each bag. What is P(both red)?",
            options: ["3/25", "4/10", "3/10", "4/25"],
            answerIndex: 0,
            explanation:
              "The picks are independent (different bags): P = 3/5 × 1/5 = 3/25. Choosing 4/10 adds numerators and denominators; 3/10 muddles the totals; 4/25 uses the wrong red count for Bag 2.",
            guideRef: "Tree diagrams",
            difficulty: "core",
            hints: [
              "Find P(red) for each bag separately.",
              "The bags do not affect each other — what rule applies?",
              "Multiply 3/5 by 1/5.",
            ],
            strategy: "multiply independent probabilities",
          },
          {
            id: "pro-mcq-p2-q06",
            question:
              "A box holds 7 milk and 3 dark chocolates. Ben eats two chocolates chosen at random. What is P(both are milk)?",
            options: ["7/15", "49/100", "21/50", "42/100"],
            answerIndex: 0,
            explanation:
              "Without replacement: 7/10 × 6/9 = 42/90 = 7/15. Choosing 49/100 is 7/10 × 7/10, wrongly treating the picks as independent; the others are decimal near-misses of that same slip.",
            guideRef: "Tree diagrams",
            difficulty: "core",
            hints: [
              "Once the first milk chocolate is eaten, it is gone.",
              "The second pick is from 9 chocolates, of which 6 are milk.",
              "Multiply 7/10 × 6/9 and simplify.",
            ],
            strategy: "track the changing bag",
          },
          {
            id: "pro-mcq-p2-q07",
            question:
              "In a Venn diagram of 20 people, 8 are in A only, 4 are in both A and B, 6 are in B only and 2 are in neither. A person in B is chosen at random. What is the probability they are also in A?",
            options: ["2/5", "1/5", "4/12", "4/18"],
            answerIndex: 0,
            explanation:
              "The condition 'in B' restricts us to 4 + 6 = 10 people; 4 of these are also in A, so P = 4/10 = 2/5. Choosing 1/5 uses the whole population of 20 as denominator; 4/12 and 4/18 use invented group sizes.",
            guideRef: "Conditional probability & the 'at least one' trick",
            difficulty: "core",
            hints: [
              "What is the total membership of B, including the overlap?",
              "The denominator is n(B), not 20.",
              "P = n(A ∩ B) ÷ n(B).",
            ],
            strategy: "shrink the universe",
          },
          {
            id: "pro-mcq-p2-q08",
            question:
              "Each of three seeds germinates with probability 2/3, independently. What is the probability that at least one seed germinates?",
            options: ["26/27", "8/27", "2/3", "19/27"],
            answerIndex: 0,
            explanation:
              "P(at least one) = 1 − P(none) = 1 − (1/3)³ = 1 − 1/27 = 26/27. Choosing 8/27 is P(all three germinate); 2/3 ignores the extra chances; 19/27 subtracts 8/27 instead of 1/27.",
            guideRef: "Conditional probability & the 'at least one' trick",
            difficulty: "challenge",
            hints: [
              "'At least one' has many cases directly — flip it around.",
              "What is the probability a single seed FAILS to germinate?",
              "Cube the failure probability, then subtract from 1.",
            ],
            strategy: "consider the complement",
          },
        ],
      },
      {
        id: "pro-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "pro-mcq-p3-q01",
            question:
              "Four students estimate the probability that a biased coin lands heads by flipping it. Ali does 20 flips, Bea 50, Cam 200 and Dev 1000. Whose estimate is likely to be the most reliable?",
            options: ["Dev's", "Ali's", "Bea's", "They are all equally reliable"],
            answerIndex: 0,
            explanation:
              "Relative frequency becomes more reliable as the number of trials increases, so Dev's 1000 flips give the best estimate. Small samples are easily swayed by flukes, so the estimates are not equally reliable.",
            guideRef: "Relative frequency & expected outcomes",
            difficulty: "warmup",
          },
          {
            id: "pro-mcq-p3-q02",
            question: "A = {factors of 18}. What is n(A)?",
            options: ["6", "5", "4", "9"],
            answerIndex: 0,
            explanation:
              "The factors of 18 are 1, 2, 3, 6, 9 and 18, so n(A) = 6. Choosing 5 usually means forgetting 1 or 18; 4 misses both; 9 confuses 'factors' with a factor itself.",
            guideRef: "Venn diagrams & set notation",
            difficulty: "warmup",
          },
          {
            id: "pro-mcq-p3-q03",
            question:
              "A fair three-sided spinner (1, 2, 3) is spun and a fair six-sided die is rolled. The two scores are added. What is P(total = 4)?",
            options: ["1/6", "1/9", "1/18", "2/9"],
            answerIndex: 0,
            explanation:
              "There are 3 × 6 = 18 equally likely outcomes. Totals of 4: (1,3), (2,2), (3,1) — three outcomes — so P = 3/18 = 1/6. Choosing 1/18 counts only one pair; 1/9 counts two.",
            guideRef: "Sample space diagrams",
            difficulty: "core",
            hints: [
              "How many combined outcomes are there for spinner and die?",
              "List the (spinner, die) pairs summing to 4.",
              "Divide the count of pairs by 18.",
            ],
            strategy: "list systematically",
          },
          {
            id: "pro-mcq-p3-q04",
            question:
              "A bag contains red, blue and green counters only. P(red) = x, P(blue) = 2x and P(green) = 0.4. What is P(blue)?",
            options: ["0.4", "0.2", "0.6", "0.3"],
            answerIndex: 0,
            explanation:
              "x + 2x + 0.4 = 1, so 3x = 0.6 and x = 0.2, giving P(blue) = 2x = 0.4. Choosing 0.2 stops at x (that is P(red)); 0.6 stops at 3x; 0.3 halves 0.6 incorrectly.",
            guideRef: "Probability basics & the scale",
            difficulty: "core",
            hints: [
              "The three probabilities are mutually exclusive and exhaustive.",
              "Form the equation x + 2x + 0.4 = 1.",
              "Solve for x, then answer the question actually asked: P(blue) = 2x.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "pro-mcq-p3-q05",
            question:
              "In a three-set Venn diagram with sets A, B and C, which expression describes the region inside both A and B but outside C?",
            options: ["A ∩ B ∩ C′", "A ∩ B ∩ C", "A ∪ B ∪ C′", "(A ∩ B)′ ∩ C"],
            answerIndex: 0,
            explanation:
              "Inside A AND inside B AND outside C translates directly to A ∩ B ∩ C′. A ∩ B ∩ C is the very centre; the union option covers nearly everything; the last option is the complement of the overlap intersected with C — a different region entirely.",
            guideRef: "Venn diagrams & set notation",
            difficulty: "core",
            hints: [
              "Translate word by word: 'inside both A and B' first.",
              "'Outside C' is the complement C′.",
              "Join all three conditions with ∩ because they must ALL hold.",
            ],
            strategy: "translate the notation into words",
          },
          {
            id: "pro-mcq-p3-q06",
            question:
              "A drawer contains 5 white socks and 4 black socks. Two socks are taken at random without replacement. What is P(both black)?",
            options: ["1/6", "16/81", "4/9", "2/9"],
            answerIndex: 0,
            explanation:
              "P(black then black) = 4/9 × 3/8 = 12/72 = 1/6. Choosing 16/81 is 4/9 × 4/9, ignoring the missing sock; 4/9 is only the first pick; 2/9 mixes up the fractions.",
            guideRef: "Tree diagrams",
            difficulty: "core",
            hints: [
              "How many socks are in the drawer to start with?",
              "After one black sock is out, count blacks and count the total again.",
              "Multiply the two branch probabilities.",
            ],
            strategy: "track the changing bag",
          },
          {
            id: "pro-mcq-p3-q07",
            question:
              "Of 50 people surveyed, 30 are adults and 20 are children. 18 of the adults and 8 of the children own a dog. Given that a person chosen at random is an adult, what is the probability they own a dog?",
            options: ["3/5", "18/50", "26/50", "18/26"],
            answerIndex: 0,
            explanation:
              "The condition restricts us to the 30 adults, of whom 18 own a dog: P = 18/30 = 3/5. Choosing 18/50 uses the whole survey as denominator; 18/26 wrongly conditions on dog-owners instead (that would answer a different question).",
            guideRef: "Conditional probability & the 'at least one' trick",
            difficulty: "core",
            hints: [
              "Which group does 'given that... is an adult' restrict you to?",
              "The denominator is the number of adults.",
              "Simplify 18/30.",
            ],
            strategy: "shrink the universe",
          },
          {
            id: "pro-mcq-p3-q08",
            question:
              "Two different numbers are picked at random from {1, 2, 3, 4, 5}. What is the probability that their sum is even?",
            options: ["2/5", "1/2", "3/5", "3/10"],
            answerIndex: 0,
            explanation:
              "A sum is even only when both numbers are odd or both are even. Both odd: choose 2 from {1, 3, 5} — 3 ways. Both even: choose 2 from {2, 4} — 1 way. Total pairs: 10. P = 4/10 = 2/5. Choosing 1/2 assumes even and odd sums are equally likely — but the set has more odd numbers, so mixed (odd) sums dominate; 3/5 is P(sum odd).",
            guideRef: "Sample space diagrams",
            difficulty: "challenge",
            hints: [
              "When is the sum of two numbers even? Think parity.",
              "Count pairs of odds and pairs of evens separately: the set has three odds and two evens.",
              "How many unordered pairs are there in total from five numbers?",
            ],
            strategy: "exploit symmetry",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "pro-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "pro-qa-p1-q01",
            question:
              "A spinner can land on A, B, C or D. P(A) = 0.15, P(B) = 0.2 and P(C) = 0.3.\n\n(a) Find P(D).\n\n(b) The spinner is spun 200 times. How many times would you expect it to land on D?",
            modelAnswer:
              "(a) The four outcomes are mutually exclusive and exhaustive, so P(D) = 1 − 0.15 − 0.2 − 0.3 = 0.35.\n\n(b) Expected frequency = 0.35 × 200 = 70 times.",
            markScheme: ["70", "0.35", "sum to 1", "0.35 x 200"],
            commonError:
              "In (b), giving 0.35 as the final answer — the question asks for a NUMBER of spins, so the probability must be multiplied by 200.",
            guideRef: "Relative frequency & expected outcomes",
            difficulty: "warmup",
          },
          {
            id: "pro-qa-p1-q02",
            question:
              "Two fair six-sided dice are rolled and their scores are added.\n\n(a) Find the probability that the sum is 7.\n\n(b) Find the probability that the dice show a double AND the sum is greater than 6.",
            modelAnswer:
              "There are 36 equally likely outcomes.\n\n(a) Sums of 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — six outcomes. P = 6/36 = 1/6.\n\n(b) Doubles with sum greater than 6: (4,4) sum 8, (5,5) sum 10, (6,6) sum 12 — three outcomes. P = 3/36 = 1/12.",
            markScheme: ["1/12", "1/6", "36", "(4,4)", "sample space"],
            commonError:
              "In (b), including (3,3) — its sum is exactly 6, and 'greater than 6' excludes 6.",
            guideRef: "Sample space diagrams",
            difficulty: "core",
            hints: [
              "Draw (or imagine) the 6 × 6 grid of outcomes.",
              "For (a), the sums of 7 form a full diagonal of the grid.",
              "For (b), first list all six doubles, then keep only those whose sum beats 6.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "pro-qa-p1-q03",
            question:
              "A sports club has 80 members. 35 members swim, 42 members run, and 18 members do neither. Find the probability that a randomly chosen member swims but does not run.",
            modelAnswer:
              "Members doing at least one activity: 80 − 18 = 62, so n(S ∪ R) = 62.\nUsing n(S ∪ R) = n(S) + n(R) − n(S ∩ R): 62 = 35 + 42 − n(S ∩ R), so n(S ∩ R) = 15.\nSwim only = 35 − 15 = 20.\nP(swims but does not run) = 20/80 = 1/4.",
            markScheme: ["1/4", "15", "20", "62", "union"],
            commonError:
              "Answering 35/80 — the 35 swimmers include those who also run; the overlap of 15 must be found and removed first.",
            guideRef: "Venn diagrams & set notation",
            difficulty: "core",
            hints: [
              "How many members do at least one activity?",
              "35 + 42 exceeds that number — what does the excess tell you?",
              "Find the overlap, then subtract it from 35 to get 'swim only'.",
            ],
            strategy: "draw a diagram",
            solutions: [
              {
                label: "Formula method (inclusion-exclusion)",
                steps: [
                  "n(S ∪ R) = 80 − 18 = 62.",
                  "62 = 35 + 42 − n(S ∩ R) gives n(S ∩ R) = 15.",
                  "Swim only = 35 − 15 = 20, so P = 20/80 = 1/4.",
                ],
              },
              {
                label: "Venn diagram with a variable (the elegant one)",
                steps: [
                  "Let x = the overlap. The regions are 35 − x (swim only), x, 42 − x (run only) and 18 (neither).",
                  "Total: (35 − x) + x + (42 − x) + 18 = 80, so 95 − x = 80 and x = 15.",
                  "Read off swim only = 20 directly from the diagram: P = 20/80 = 1/4. The picture makes every later part of such a question instant.",
                ],
              },
            ],
          },
          {
            id: "pro-qa-p1-q04",
            question:
              "ℰ = {1, 2, 3, ..., 16}, A = {square numbers} and B = {even numbers}.\n\n(a) List the elements of A ∩ B′.\n\n(b) Find n(A ∪ B).\n\n(c) A number is chosen at random from ℰ. Find P(the number is in A ∪ B).",
            modelAnswer:
              "A = {1, 4, 9, 16} and B = {2, 4, 6, 8, 10, 12, 14, 16}.\n\n(a) A ∩ B′ is the odd square numbers: {1, 9}.\n\n(b) A ∩ B = {4, 16}, so n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 4 + 8 − 2 = 10.\n\n(c) P = n(A ∪ B)/n(ℰ) = 10/16 = 5/8.",
            markScheme: ["5/8", "{1, 9}", "10", "4 + 8 - 2", "union"],
            commonError:
              "In (b), writing 4 + 8 = 12 — the numbers 4 and 16 belong to both sets and must not be counted twice.",
            guideRef: "Venn diagrams & set notation",
            difficulty: "core",
            hints: [
              "First list A and B in full — there are only four squares up to 16.",
              "A ∩ B′ keeps members of A that are NOT even.",
              "For the union, use n(A) + n(B) − n(A ∩ B).",
            ],
            strategy: "list systematically",
          },
          {
            id: "pro-qa-p1-q05",
            question:
              "Ravi takes a theory test and a practical test. P(passes theory) = 0.9 and P(passes practical) = 0.7. The results are independent.\n\n(a) Find the probability he passes both tests.\n\n(b) Find the probability he passes exactly one of the two tests.",
            modelAnswer:
              "(a) Independent, so P(both) = 0.9 × 0.7 = 0.63.\n\n(b) Exactly one pass: (theory pass, practical fail) or (theory fail, practical pass).\nP = 0.9 × 0.3 + 0.1 × 0.7 = 0.27 + 0.07 = 0.34.",
            markScheme: ["0.34", "0.63", "0.27", "0.07", "independent"],
            commonError:
              "For (b), computing 1 − 0.63 = 0.37 — that is P(NOT both), which wrongly includes failing both tests (0.03).",
            guideRef: "Tree diagrams",
            difficulty: "core",
            hints: [
              "Draw a tree: theory first, then practical.",
              "Fill in the fail probabilities: 0.1 and 0.3.",
              "'Exactly one' is two specific paths — multiply along each, then add.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "pro-qa-p1-q06",
            question:
              "A bag contains 6 red and 4 blue counters. Two counters are taken at random without replacement. Given that the two counters are different colours, find the probability that the FIRST counter taken was red.",
            modelAnswer:
              "P(red then blue) = 6/10 × 4/9 = 24/90.\nP(blue then red) = 4/10 × 6/9 = 24/90.\nSo P(different colours) = 48/90.\nP(first red | different colours) = P(red then blue) ÷ P(different) = (24/90) ÷ (48/90) = 24/48 = 1/2.\n(Elegant check: the two mixed orders have identical probabilities by symmetry, so given a mixed pair, each order is equally likely — the answer must be 1/2.)",
            markScheme: ["1/2", "24/90", "48/90", "conditional", "divide"],
            commonError:
              "Answering 6/10 — the given condition changes the universe: only the mixed-colour outcomes remain, and the conditional formula must be used.",
            guideRef: "Conditional probability & the 'at least one' trick",
            difficulty: "challenge",
            hints: [
              "Find the probability of each 'different colours' path separately.",
              "The condition restricts you to those two paths only.",
              "Divide the red-first path by the total of both paths.",
              "Before calculating, guess: is either order more likely than the other?",
            ],
            strategy: "exploit symmetry",
          },
        ],
      },
      {
        id: "pro-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "pro-qa-p2-q01",
            question:
              "Maya spins a five-sided spinner 200 times. It lands on the number 3 a total of 46 times.\n\n(a) Work out the relative frequency of landing on 3.\n\n(b) Maya says the spinner is biased against 3 because the relative frequency is below 1/5. Make one criticism of her conclusion.",
            modelAnswer:
              "(a) Relative frequency = 46/200 = 0.23.\n\n(b) 0.23 is very close to the fair value of 0.2, and random variation in only 200 spins can easily produce such a difference — so the result is consistent with a fair spinner. (More spins would give a more reliable estimate.)",
            markScheme: ["0.23", "46/200", "close to 0.2", "more trials", "random variation"],
            commonError:
              "Treating any deviation from the theoretical value as proof of bias — small samples wobble; a relative frequency near 0.2 does not establish bias.",
            guideRef: "Relative frequency & expected outcomes",
            difficulty: "warmup",
          },
          {
            id: "pro-qa-p2-q02",
            question:
              "At a fair, a game costs £1 to play. The probability of winning is 1/8, and each winner receives a £5 prize. The game is played 400 times in a day. Work out how much profit the organiser should expect to make.",
            modelAnswer:
              "Income: 400 × £1 = £400.\nExpected number of winners: 1/8 × 400 = 50.\nExpected payout: 50 × £5 = £250.\nExpected profit = £400 − £250 = £150.",
            markScheme: ["150", "50 winners", "250", "400"],
            commonError:
              "Forgetting the income side and answering −£250, or computing the payout with £5 × 400 as if everyone won.",
            guideRef: "Relative frequency & expected outcomes",
            difficulty: "core",
            hints: [
              "Work out the total money taken in first.",
              "How many of the 400 games should be wins, on average?",
              "Profit = income − expected payout.",
            ],
            strategy: "break into stages",
          },
          {
            id: "pro-qa-p2-q03",
            question:
              "40 students were asked whether they do Music (M), Drama (D) or Sport (S). 4 students do all three. 10 do Music and Drama, 9 do Music and Sport, and 7 do Drama and Sport. 25 do Music, 20 do Drama and 16 do Sport.\n\n(a) Draw a Venn diagram to show this information.\n\n(b) Find the probability that a randomly chosen student does exactly two of the three activities.\n\n(c) Given that a student does Music, find the probability that they also do Sport.",
            modelAnswer:
              "(a) Work from the centre out. Centre (all three) = 4.\nM ∩ D only = 10 − 4 = 6; M ∩ S only = 9 − 4 = 5; D ∩ S only = 7 − 4 = 3.\nM only = 25 − 6 − 5 − 4 = 10; D only = 20 − 6 − 3 − 4 = 7; S only = 16 − 5 − 3 − 4 = 4.\nTotal placed: 10 + 7 + 4 + 6 + 5 + 3 + 4 = 39, so 'none of the three' = 40 − 39 = 1.\n\n(b) Exactly two: 6 + 5 + 3 = 14 students. P = 14/40 = 7/20.\n\n(c) Restrict to the 25 Music students. Music and Sport: n(M ∩ S) = 9 (the 5 plus the 4 in the centre). P = 9/25.",
            markScheme: ["9/25", "7/20", "centre", "6, 5, 3", "1 outside"],
            commonError:
              "Writing 10, 9 and 7 straight into the 'exactly two' regions — those given values INCLUDE the 4 students in the centre, which must be subtracted first.",
            guideRef: "Venn diagrams & set notation",
            difficulty: "core",
            hints: [
              "Always start a three-set Venn diagram from the very centre.",
              "'10 do Music and Drama' includes those who also do Sport.",
              "After the overlaps, use the single-set totals to find the 'only' regions.",
              "In (c) the denominator is 25, not 40.",
            ],
            strategy: "work from the middle out",
          },
          {
            id: "pro-qa-p2-q04",
            question:
              "120 passengers are booked on flights to Paris or Rome.\n\n- Adults: 40 to Paris, 30 to Rome (70 adults)\n- Children: 15 to Paris, 35 to Rome (50 children)\n\nA passenger flying to Rome is chosen at random. Find the probability that this passenger is a child.",
            modelAnswer:
              "Passengers flying to Rome: 30 + 35 = 65.\nChildren flying to Rome: 35.\nP(child | Rome) = 35/65 = 7/13.",
            markScheme: ["7/13", "35/65", "65", "conditional"],
            commonError:
              "Using 120 or 50 as the denominator — the condition 'flying to Rome' fixes the denominator at 65, the number of Rome passengers.",
            guideRef: "Conditional probability & the 'at least one' trick",
            difficulty: "core",
            hints: [
              "What do you already know about the chosen passenger?",
              "Count everyone flying to Rome.",
              "Divide the child Rome-flyers by the total Rome-flyers.",
            ],
            strategy: "shrink the universe",
          },
          {
            id: "pro-qa-p2-q05",
            question:
              "A pencil case contains 7 blue pens and 5 red pens. Zara takes two pens at random without replacement. Find the probability that she takes at least one blue pen.",
            modelAnswer:
              "Use the complement: the only way to get NO blue pen is red then red.\nP(RR) = 5/12 × 4/11 = 20/132 = 5/33.\nP(at least one blue) = 1 − 5/33 = 28/33.",
            markScheme: ["28/33", "5/33", "20/132", "complement", "1 -"],
            commonError:
              "Computing 1 − (5/12 × 5/12) — the second red pick must use the reduced counts 4/11 because the first pen is not replaced.",
            guideRef: "Conditional probability & the 'at least one' trick",
            difficulty: "core",
            hints: [
              "'At least one blue' covers several outcomes — which single outcome does it exclude?",
              "Find P(red then red) with without-replacement fractions.",
              "Subtract from 1.",
            ],
            strategy: "consider the complement",
            solutions: [
              {
                label: "Complement method (the elegant one)",
                steps: [
                  "'At least one blue' fails only for red-red.",
                  "P(RR) = 5/12 × 4/11 = 20/132 = 5/33.",
                  "P(at least one blue) = 1 − 5/33 = 28/33 — two lines of working.",
                ],
              },
              {
                label: "Direct method (three paths)",
                steps: [
                  "The favourable paths are BB, BR and RB.",
                  "P(BB) = 7/12 × 6/11 = 42/132; P(BR) = 7/12 × 5/11 = 35/132; P(RB) = 5/12 × 7/11 = 35/132.",
                  "Add: (42 + 35 + 35)/132 = 112/132 = 28/33. Same answer, three times the work — which is exactly why the complement trick matters.",
                ],
              },
            ],
          },
          {
            id: "pro-qa-p2-q06",
            question:
              "There are n sweets in a bag. 6 of the sweets are orange and the rest are yellow. Two sweets are taken at random and eaten. The probability that both sweets are orange is 1/3.\n\n(a) Show that n² − n − 90 = 0.\n\n(b) Hence find the number of yellow sweets in the bag.",
            modelAnswer:
              "(a) P(first orange) = 6/n; without replacement, P(second orange) = 5/(n − 1).\nSo 6/n × 5/(n − 1) = 1/3, i.e. 30/(n(n − 1)) = 1/3.\nCross-multiplying: 90 = n(n − 1) = n² − n, so n² − n − 90 = 0 (as required).\n\n(b) Factorising: (n − 10)(n + 9) = 0, so n = 10 or n = −9. Reject n = −9 (a count cannot be negative), so n = 10.\nYellow sweets = 10 − 6 = 4.",
            markScheme: ["4", "10", "6/n", "5/(n-1)", "90", "reject -9"],
            commonError:
              "Answering n = 10 to part (b) — the question asks for the number of YELLOW sweets, which needs the final subtraction 10 − 6 = 4.",
            guideRef: "Equations from probability: the counters problems",
            difficulty: "challenge",
            hints: [
              "Write both picks' probabilities in terms of n before anything else.",
              "One orange sweet is eaten before the second pick — adjust both numbers.",
              "Set the product equal to 1/3 and cross-multiply carefully.",
              "After solving, re-read the question: what quantity is actually asked for?",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
      {
        id: "pro-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "pro-qa-p3-q01",
            question:
              "ℰ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {prime numbers} and B = {even numbers}.\n\n(a) List the elements of A ∩ B.\n\n(b) A number is chosen at random from ℰ. Find the probability that it is in A ∪ B.",
            modelAnswer:
              "A = {2, 3, 5, 7} and B = {2, 4, 6, 8, 10}.\n\n(a) The only even prime is 2, so A ∩ B = {2}.\n\n(b) n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 4 + 5 − 1 = 8. P = 8/10 = 4/5.",
            markScheme: ["4/5", "{2}", "8", "4 + 5 - 1"],
            commonError:
              "Including 1 in the primes — 1 is not a prime number — or counting 2 twice in the union.",
            guideRef: "Venn diagrams & set notation",
            difficulty: "warmup",
          },
          {
            id: "pro-qa-p3-q02",
            question:
              "Three fair coins are flipped. By listing the sample space, find the probability of getting exactly two heads.",
            modelAnswer:
              "The 8 equally likely outcomes are: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.\nExactly two heads: HHT, HTH, THH — three outcomes.\nP(exactly two heads) = 3/8.",
            markScheme: ["3/8", "8 outcomes", "HHT", "list"],
            commonError:
              "Reasoning 'the number of heads is 0, 1, 2 or 3, so P = 1/4' — those four counts are not equally likely; only the 8 ordered outcomes are.",
            guideRef: "Sample space diagrams",
            difficulty: "core",
            hints: [
              "How many outcomes does one coin have? Two coins? Three coins?",
              "List all outcomes systematically, e.g. in alphabetical order.",
              "Count the outcomes with exactly two H's — not three.",
            ],
            strategy: "list systematically",
          },
          {
            id: "pro-qa-p3-q03",
            question:
              "Each seed of a certain plant germinates with probability 4/5, independently of the others. Amara plants three seeds. Find the probability that at least one seed FAILS to germinate.",
            modelAnswer:
              "Use the complement: 'at least one fails' is the opposite of 'all three germinate'.\nP(all germinate) = (4/5)³ = 64/125.\nP(at least one fails) = 1 − 64/125 = 61/125.",
            markScheme: ["61/125", "64/125", "complement", "(4/5)^3"],
            commonError:
              "Computing 1 − (1/5)³ = 124/125 — that is P(at least one germinates); read carefully which event is being complemented.",
            guideRef: "Conditional probability & the 'at least one' trick",
            difficulty: "core",
            hints: [
              "'At least one fails' — what is the exact opposite event?",
              "The opposite is that ALL THREE germinate.",
              "Cube 4/5, then subtract the result from 1.",
            ],
            strategy: "consider the complement",
          },
          {
            id: "pro-qa-p3-q04",
            question:
              "60 people were asked whether they drink coffee (C) or tea (T). 22 drink coffee only, 14 drink both, 17 drink tea only and 7 drink neither.\n\n(a) Find the probability that a randomly chosen person drinks tea.\n\n(b) Given that a person drinks coffee, find the probability that they also drink tea.",
            modelAnswer:
              "(a) Tea drinkers: 14 + 17 = 31. P(tea) = 31/60.\n\n(b) Coffee drinkers: 22 + 14 = 36. Of these, 14 also drink tea.\nP(tea | coffee) = 14/36 = 7/18.",
            markScheme: ["7/18", "31/60", "14/36", "36 coffee"],
            commonError:
              "In (b), using 60 as the denominator (14/60) — the condition 'drinks coffee' restricts the universe to the 36 coffee drinkers.",
            guideRef: "Conditional probability & the 'at least one' trick",
            difficulty: "core",
            hints: [
              "Sketch the Venn diagram from the four given region values.",
              "For (a), tea includes BOTH the 'tea only' and the 'both' regions.",
              "For (b), the denominator is the total number of coffee drinkers.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "pro-qa-p3-q05",
            question:
              "The probability that it rains on a given morning is 0.3. If it rains, the probability that Jo's bus is late is 0.6. If it does not rain, the probability that the bus is late is 0.15.\n\n(a) Find the probability that the bus is late.\n\n(b) Given that the bus is late, find the probability that it was raining. Give your answer as a fraction.",
            modelAnswer:
              "(a) Two paths lead to 'late':\nP(rain and late) = 0.3 × 0.6 = 0.18.\nP(no rain and late) = 0.7 × 0.15 = 0.105.\nP(late) = 0.18 + 0.105 = 0.285.\n\n(b) P(rain | late) = P(rain and late) ÷ P(late) = 0.18/0.285 = 180/285 = 12/19.",
            markScheme: ["12/19", "0.285", "0.18", "0.105", "conditional"],
            commonError:
              "In (b), answering 0.6 — that is P(late | rain), the reverse conditional. The tree gives P(rain and late), which must be divided by P(late).",
            guideRef: "Conditional probability & the 'at least one' trick",
            difficulty: "core",
            hints: [
              "Draw a tree: rain/no rain, then late/on time on each branch.",
              "For (a), add the two paths that end in 'late'.",
              "For (b), the universe shrinks to 'late': divide the rainy-late path by your answer to (a).",
              "Clear the decimals by writing 0.18/0.285 as 180/285.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "pro-qa-p3-q06",
            question:
              "A bag contains x black counters and 6 white counters. Two counters are taken at random without replacement. The probability that the two counters are different colours is 1/2.\n\n(a) Show that x² − 13x + 30 = 0.\n\n(b) Find the two possible numbers of black counters in the bag, and verify that both work.",
            modelAnswer:
              "(a) The bag holds x + 6 counters. P(black then white) = x/(x + 6) × 6/(x + 5) and P(white then black) = 6/(x + 6) × x/(x + 5).\nSo P(different) = 12x/((x + 6)(x + 5)) = 1/2.\nCross-multiplying: 24x = (x + 6)(x + 5) = x² + 11x + 30.\nSo x² + 11x + 30 − 24x = 0, i.e. x² − 13x + 30 = 0 (as required).\n\n(b) Factorising: (x − 3)(x − 10) = 0, so x = 3 or x = 10. Both are positive integers, so both are possible.\nCheck x = 3: P(different) = 2 × 3/9 × 6/8 = 36/72 = 1/2. ✓\nCheck x = 10: P(different) = 2 × 10/16 × 6/15 = 120/240 = 1/2. ✓\nThe bag contains 3 or 10 black counters.",
            markScheme: ["3 or 10", "x = 3", "x = 10", "12x", "(x+6)(x+5)", "both valid"],
            commonError:
              "Automatically 'rejecting' one root — here BOTH roots are physically valid, and the final mark is for recognising that. Also common: forgetting the factor of 2 for the two orders (black-white and white-black).",
            guideRef: "Equations from probability: the counters problems",
            difficulty: "challenge",
            hints: [
              "How many counters are in the bag in total, in terms of x?",
              "'Different colours' happens in two orders — include both paths.",
              "Set 12x/((x + 6)(x + 5)) = 1/2 and cross-multiply.",
              "Solve the quadratic, then test EACH root back in the original story.",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
    ],
  },
};

export default topic;
