import type { Topic } from "../types";

const topic: Topic = {
  id: "indices-surds",
  title: "Indices & Surds",
  subject: "Maths",
  icon: "🚀",
  intro:
    "Indices let you tame enormous and tiny numbers with a few neat laws, and surds let you keep answers perfectly exact instead of settling for a rounded decimal. Together they are the language of exact arithmetic — and a favourite hunting ground for Edexcel's non-calculator questions. In this topic you'll discover where the index laws come from (rather than memorising them), learn why x^0 has no choice but to equal 1, and master the Higher-tier staples: fractional indices like 8^(2/3), solving equations by matching bases, simplifying √48 into 4√3, and rationalising denominators with the elegant conjugate trick.",
  guide: [
    {
      heading: "The three laws of indices",
      body:
        "An index (plural **indices**) counts repeated multiplication: 2^5 means 2 × 2 × 2 × 2 × 2. Once you see indices as *counting factors*, the three laws almost write themselves.\n\n- **Multiplying** powers of the same base: a^m × a^n = a^(m+n) — the factor counts add.\n- **Dividing** powers of the same base: a^m ÷ a^n = a^(m−n) — factors cancel, so the counts subtract.\n- **Power of a power**: (a^m)^n = a^(mn) — n copies of m factors is m × n factors.\n\nThe laws only work when the **bases match**. 2^3 × 5^2 cannot be combined into a single power. With algebraic terms, deal with the numbers and each letter separately: (3x²)³ = 3³ × (x²)³ = 27x^6.",
      discovery: {
        problem:
          "Without a calculator, which is bigger: 2^10 × 2^5, or (2^5)^3? Don't compute either number — write each one as a row of 2s multiplied together and simply count how many 2s appear.",
        idea:
          "2^10 × 2^5 is a row of 10 twos next to a row of 5 twos: 15 twos in total, so 2^15. (2^5)^3 is three rows of 5 twos: 15 twos again! They are equal — and the counting you just did IS the proof of the index laws: multiplying powers adds the indices, and a power of a power multiplies them.",
      },
      whyItWorks:
        "a^m × a^n = (a × a × … m times) × (a × a × … n times) = a multiplied m + n times = a^(m+n). For division, a^m ÷ a^n cancels n of the factors from the top, leaving m − n of them. For (a^m)^n, you have n bracketed groups each containing m factors of a, which is mn factors altogether. Every index law is just careful counting.",
      strategies: ["count the factors", "try small cases", "find a pattern"],
      keyPoints: [
        "a^m × a^n = a^(m+n): multiplying powers of the same base adds the indices.",
        "a^m ÷ a^n = a^(m−n): dividing subtracts the indices.",
        "(a^m)^n = a^(mn): a power of a power multiplies the indices.",
        "The laws need the SAME base — 2^3 × 5^2 cannot be combined.",
        "With coefficients, treat number and letter separately: (2x^4)^3 = 8x^12.",
      ],
    },
    {
      heading: "Zero and negative indices",
      body:
        "What could 2^0 or 2^(−3) possibly mean? You can't multiply 'zero copies' or 'minus three copies' of 2 together. Instead of inventing a meaning, we let the pattern decide.\n\n- **Zero index**: a^0 = 1 for any non-zero a. Even (−17)^0 = 1 and (2/3)^0 = 1.\n- **Negative index**: a^(−n) = 1/a^n. A negative index means 'reciprocal', NOT 'negative answer': 2^(−3) = 1/8, not −8.\n- **Negative index on a fraction**: flip it first. (2/3)^(−2) = (3/2)² = 9/4.\n\nThese definitions aren't arbitrary — they are the only choices that keep the three index laws working.",
      discovery: {
        problem:
          "Continue this pattern downwards: 2^4 = 16, 2^3 = 8, 2^2 = 4, 2^1 = 2, 2^0 = ?, 2^(−1) = ?, 2^(−2) = ? Look at what happens to the answer each time the index drops by 1.",
        idea:
          "Each step down divides the answer by 2. So the pattern forces 2^0 = 2 ÷ 2 = 1, then 2^(−1) = 1/2, then 2^(−2) = 1/4. Zero and negative indices aren't a new invention — they're the unique continuation of the dividing pattern. In general a^0 = 1 and a^(−n) = 1/a^n.",
      },
      whyItWorks:
        "The division law demands it. a^3 ÷ a^3 must equal a^(3−3) = a^0 by the law, but any non-zero number divided by itself is 1, so a^0 = 1 has no choice. Likewise a^2 ÷ a^5 = a^(−3) by the law, but cancelling directly gives 1/a^3 — so a^(−3) must mean 1/a^3. The definitions are forced on us by consistency.",
      strategies: ["find a pattern", "work backwards", "look for invariants"],
      keyPoints: [
        "a^0 = 1 for every non-zero a — forced by the pattern of dividing powers.",
        "a^(−n) = 1/a^n: negative index means reciprocal, never a negative answer.",
        "(a/b)^(−n) = (b/a)^n: flip the fraction, then apply the positive power.",
        "5^(−2) = 1/25 and (1/4)^(−1) = 4 — practise until these are instant.",
      ],
      thinkDeeper:
        "What about 0^0? Two patterns collide: 0^3 = 0, 0^2 = 0, 0^1 = 0 suggests 0^0 = 0, while 3^0 = 1, 2^0 = 1, 1^0 = 1 suggests 0^0 = 1. Because the two perfectly good patterns disagree, mathematicians usually leave 0^0 undefined (though in counting problems it's convenient to call it 1). The rule a^0 = 1 genuinely needs a ≠ 0.",
    },
    {
      heading: "Fractional indices",
      body:
        "A fractional index means a **root**: a^(1/n) is the n-th root of a, so 25^(1/2) = √25 = 5 and 8^(1/3) = ∛8 = 2.\n\nFor a general fraction m/n, split it into root and power:\n\n- a^(m/n) = (n-th root of a)^m — **root first, then power**, because the root shrinks the number and keeps the arithmetic friendly.\n- 8^(2/3): cube root of 8 is 2, then 2² = 4.\n- 27^(−4/3): the minus sign means reciprocal, so this is 1/27^(4/3). Cube root of 27 is 3, then 3^4 = 81, so the answer is 1/81.\n\nGolden order for nasty indices like (25/16)^(−3/2): deal with the **minus** (flip), then the **root** (denominator of the fraction), then the **power** (numerator).",
      discovery: {
        problem:
          "9^(1/2) looks like nonsense — how can you multiply 'half a copy' of 9? But suppose it does mean *something*, and the index laws still hold. What must (9^(1/2))² equal? And what familiar number does that make 9^(1/2)?",
        idea:
          "By the power-of-a-power law, (9^(1/2))² = 9^(1/2 × 2) = 9^1 = 9. So 9^(1/2) is a number which squares to 9 — it must be √9 = 3. Fractional indices are roots, and again the laws forced the definition on us.",
      },
      whyItWorks:
        "(a^(1/n))^n = a^(n/n) = a^1 = a, so a^(1/n) is exactly the number whose n-th power is a — the n-th root. Then a^(m/n) = (a^(1/n))^m by the same law. Root-first and power-first give the same answer, but 27^(2/3) as (∛27)² = 3² = 9 is far kinder than √(27²) = ∛729.",
      strategies: ["root first, then power", "work backwards", "try small cases"],
      keyPoints: [
        "a^(1/2) = √a, a^(1/3) = cube root of a, a^(1/n) = n-th root of a.",
        "a^(m/n): take the n-th root first, then raise to the power m.",
        "8^(2/3) = (∛8)² = 2² = 4; 16^(3/4) = (fourth root 2)³ = 8.",
        "Combine with negatives: 27^(−4/3) = 1/(∛27)^4 = 1/81.",
        "Order of attack: minus (flip) → root → power.",
      ],
    },
    {
      heading: "Solving index equations",
      body:
        "An **index equation** has the unknown in the power, like 2^x = 32 or 4^x = 8^(x−1). Without logarithms (not on this course), the key move is to **match the bases**: write both sides as powers of the same number, then equate the indices.\n\n- 2^x = 32 = 2^5, so x = 5.\n- 2^(x+1) = 1/16 = 2^(−4), so x + 1 = −4, giving x = −5.\n- 4^x = 8^(x−1): both 4 and 8 are powers of 2. Rewrite: (2²)^x = (2³)^(x−1), so 2^(2x) = 2^(3x−3). Equate indices: 2x = 3x − 3, so x = 3.\n\nWhy is equating indices allowed? Because powers of 2 are strictly increasing — each power of 2 is hit exactly once, so equal powers means equal indices.",
      discovery: {
        problem:
          "Solve 2^x = 32 in your head — easy. Now try 4^x = 8^(x−1). The bases are different, so you can't compare indices… yet. What number are BOTH 4 and 8 powers of?",
        idea:
          "Both are powers of 2: 4 = 2² and 8 = 2³. Rewriting everything in base 2 turns the scary equation into 2^(2x) = 2^(3x−3), and now the indices must match: 2x = 3x − 3, so x = 3. 'Match the bases' converts an index equation into ordinary linear algebra.",
      },
      whyItWorks:
        "The function 2^x never repeats a value (it strictly increases), so 2^p = 2^q forces p = q. That's the licence to drop the bases and compare indices. The same holds for any base bigger than 1, and for bases between 0 and 1.",
      strategies: ["match the bases", "work backwards", "introduce a variable"],
      keyPoints: [
        "Write both sides as powers of the SAME base, usually the smallest prime (2, 3 or 5).",
        "Spot the family: 4, 8, 16, 32 are all powers of 2; 9, 27, 81 are powers of 3.",
        "Fractions go negative: 1/16 = 2^(−4); 1/27 = 3^(−3).",
        "Once bases match, equate the indices and solve the resulting linear equation.",
      ],
    },
    {
      heading: "Surds and simplifying roots",
      body:
        "A **surd** is a root that is irrational — it cannot be written exactly as a fraction or a terminating decimal. √2, √7 and √48 are surds; √9 = 3 and √25 = 5 are not. Keeping surds in your answer keeps it **exact**.\n\nThe two multiplication rules:\n\n- √a × √b = √(ab)\n- √(a/b) = √a / √b\n\nTo **simplify** a surd, hunt for the largest square factor: √48 = √(16 × 3) = √16 × √3 = **4√3**. Like surds then collect just like like terms: 4√3 + 3√3 = 7√3.\n\n**Warning**: there is no addition rule. √9 + √16 = 3 + 4 = 7, but √(9 + 16) = √25 = 5. Roots do NOT split over + or −.",
      diagrams: [
        {
          id: "ind-diag-01",
          title: "The diagonal of a unit square is √2",
          svg: `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A unit square with sides labelled 1 and its diagonal labelled root 2"><rect x="70" y="40" width="160" height="160" fill="none" stroke="#2563eb" stroke-width="3"/><line x1="70" y1="200" x2="230" y2="40" stroke="#dc2626" stroke-width="3"/><path d="M 70 180 L 90 180 L 90 200" fill="none" stroke="#64748b" stroke-width="2"/><text x="150" y="228" font-size="18" fill="#2563eb" text-anchor="middle">1</text><text x="48" y="126" font-size="18" fill="#2563eb" text-anchor="middle">1</text><text x="168" y="112" font-size="18" fill="#dc2626">√2</text><text x="150" y="252" font-size="15" fill="#64748b" text-anchor="middle">1² + 1² = 2, so the diagonal is √2</text></svg>`,
          caption:
            "Pythagoras on a 1 × 1 square: the diagonal has length √(1² + 1²) = √2 — a length you can draw exactly but never write exactly as a decimal.",
        },
      ],
      discovery: {
        problem:
          "Your calculator says √2 ≈ 1.414213562. Square that decimal by hand (or on the calculator) — you get 1.999999999…, not 2. Could some longer decimal ever square to exactly 2?",
        idea:
          "No terminating decimal can — and in fact no fraction can either: √2 is irrational. That's exactly why we keep the symbol √2 in our answers. Writing 4√3 instead of 6.93 isn't laziness; it's the only way to be perfectly exact.",
      },
      whyItWorks:
        "Why is √a × √b = √(ab)? Square the left side: (√a × √b)² = (√a)² × (√b)² = ab. So √a × √b is a non-negative number whose square is ab — which is precisely the definition of √(ab). To simplify √48, factor out the biggest square: 48 = 16 × 3, so √48 = √16 × √3 = 4√3.",
      strategies: ["hunt for square factors", "draw a diagram", "try small cases"],
      keyPoints: [
        "A surd is an irrational root: √2, √7, 4√3. Surds keep answers exact.",
        "√a × √b = √(ab), and √(a/b) = √a/√b.",
        "Simplify by extracting the largest square factor: √48 = 4√3, √200 = 10√2.",
        "Collect like surds only: 5√2 − 2√2 = 3√2, but √2 + √3 will not combine.",
        "Never split roots over + or −: √(9 + 16) is 5, not 3 + 4.",
      ],
      thinkDeeper:
        "The classic proof that √2 is irrational (worth knowing at Higher tier): suppose √2 = p/q as a fraction in lowest terms. Squaring gives p² = 2q², so p² is even, which forces p to be even (odd × odd is odd). Write p = 2k: then 4k² = 2q², so q² = 2k², making q even too. But now p and q are both even — contradicting 'lowest terms'. The assumption collapses, so no such fraction exists: √2 is irrational. This proof, over 2,000 years old, reputedly scandalised the Pythagoreans.",
    },
    {
      heading: "Expanding brackets with surds",
      body:
        "Expand brackets containing surds exactly as in algebra — FOIL or the grid method — treating √2, √3, … like letters, except that a surd times itself simplifies: √3 × √3 = 3.\n\n- (2 + √5)(3 + √5) = 6 + 2√5 + 3√5 + 5 = 11 + 5√5.\n- (5 − √3)² = 25 − 5√3 − 5√3 + 3 = 28 − 10√3. (Don't forget the middle terms — (a − b)² is never a² − b²!)\n\nThe star of the show is the **conjugate pair**: (a + √b)(a − √b) = a² − b. The surd terms cancel and the answer is a whole number. This is the difference of two squares wearing a surd costume.",
      discovery: {
        problem:
          "Multiply out (1 + √2)(1 − √2). Expand carefully, all four terms. Something remarkable happens — where did the surd go?",
        idea:
          "1 − √2 + √2 − 2 = −1. The two cross terms −√2 and +√2 annihilate each other, and √2 × √2 collapses to plain 2. An irrational number times an irrational number gave the integer −1! Pairs like (1 + √2) and (1 − √2) are called conjugates, and their product a² − b is always rational. This 'collapse' is the engine behind rationalising denominators.",
      },
      whyItWorks:
        "(a + √b)(a − √b) = a² − a√b + a√b − (√b)² = a² − b. It's the difference of two squares identity (x + y)(x − y) = x² − y² with y = √b, and squaring √b wipes out the root. Symmetry does the work: the two middle terms are exact opposites, so they must cancel.",
      strategies: ["exploit symmetry", "spot the identity", "look for invariants"],
      keyPoints: [
        "Expand with FOIL or a grid; remember √b × √b = b.",
        "(a + √b)(a − √b) = a² − b — the conjugate product is always rational.",
        "(a + √b)² = a² + b + 2a√b — never forget the cross term 2a√b.",
        "Simplify surd products as you go: √2 × √8 = √16 = 4.",
      ],
      thinkDeeper:
        "Look at (√5 + 2)² + (√5 − 2)² = (9 + 4√5) + (9 − 4√5) = 18. Swapping √5 for −√5 swaps the two brackets, so the sum cannot contain any √5 terms — symmetry guarantees a rational answer before you expand anything. Spotting an invariant like this can save a whole page of working in a challenge problem.",
    },
    {
      heading: "Rationalising the denominator and exact geometry",
      body:
        "Examiners want fractions with a **rational denominator** — no surds downstairs. Two standard fixes:\n\n- **Single surd**: multiply top and bottom by that surd. 6/√3 = (6 × √3)/(√3 × √3) = 6√3/3 = 2√3.\n- **Two-term denominator** (Higher staple): multiply top and bottom by the **conjugate**. For 5/(2 + √3), use (2 − √3): the denominator becomes (2 + √3)(2 − √3) = 4 − 3 = 1, so the fraction is 5(2 − √3) = 10 − 5√3.\n\nBoth moves multiply by 1 in disguise, so the value never changes — only the appearance.\n\n**Exact geometry**: when a question says 'give an exact answer' or 'in the form a + b√3', stay in surds throughout. A square of area 45 cm² has side √45 = 3√5 cm exactly. A square with diagonal d has area d²/2 — no calculator required.",
      diagrams: [
        {
          id: "ind-diag-02",
          title: "Exact area of a square from its diagonal",
          svg: `<svg viewBox="0 0 360 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square with side s and diagonal 10 centimetres, showing s squared plus s squared equals 100"><rect x="80" y="40" width="160" height="160" fill="none" stroke="#2563eb" stroke-width="3"/><line x1="80" y1="200" x2="240" y2="40" stroke="#dc2626" stroke-width="3"/><path d="M 80 180 L 100 180 L 100 200" fill="none" stroke="#64748b" stroke-width="2"/><text x="160" y="228" font-size="18" fill="#2563eb" text-anchor="middle">s</text><text x="58" y="126" font-size="18" fill="#2563eb" text-anchor="middle">s</text><text x="176" y="110" font-size="18" fill="#dc2626">10 cm</text><text x="180" y="256" font-size="15" fill="#64748b" text-anchor="middle">s² + s² = 10², so area = s² = 50 cm² exactly</text></svg>`,
          caption:
            "Pythagoras gives s² + s² = 100, so 2s² = 100. But s² IS the area of the square — 50 cm², exact, and we never even needed to find s = 5√2.",
        },
      ],
      discovery: {
        problem:
          "A square has a diagonal of exactly 10 cm. Find its area without a calculator and without any rounding. (Hint: do you actually need the side length?)",
        idea:
          "Pythagoras: s² + s² = 10², so 2s² = 100 and s² = 50. The area is 50 cm² — exact — and s² was the area all along, so the surd side s = 5√2 never had to appear. Working exactly often means working *smarter*: keep expressions whole and only extract roots when the question demands them.",
      },
      whyItWorks:
        "Multiplying a fraction by √3/√3, or by (2 − √3)/(2 − √3), is multiplying by 1, so the value is unchanged. The single surd works because √a × √a = a; the conjugate works because (a + √b)(a − √b) = a² − b kills the root. We simply choose the disguise of 1 that rationalises the denominator.",
      strategies: ["multiply by 1 in disguise", "use the conjugate", "draw a diagram", "work backwards"],
      keyPoints: [
        "Single surd below: multiply top and bottom by it. k/√a = k√a/a.",
        "Two terms below: multiply top and bottom by the conjugate (swap the sign of the surd).",
        "Always simplify afterwards: 14/(3 + √2) = 14(3 − √2)/7 = 6 − 2√2.",
        "'Exact answer' means keep surds and fractions — never round to a decimal.",
        "Square with diagonal d: area = d²/2. Right triangles with surd legs often have rational areas.",
      ],
    },
  ],
  learn: {
    flashcards: [
      { front: "a^m × a^n = ?", back: "a^(m+n) — multiplying powers of the same base adds the indices." },
      { front: "a^m ÷ a^n = ?", back: "a^(m−n) — dividing powers of the same base subtracts the indices." },
      { front: "(a^m)^n = ?", back: "a^(mn) — a power of a power multiplies the indices." },
      { front: "a^0 = ?", back: "1, for any non-zero a. Forced by the pattern: each drop of 1 in the index divides by a." },
      { front: "a^(−n) means…", back: "1/a^n — the reciprocal. Negative index never means a negative answer: 2^(−3) = 1/8." },
      { front: "(2/3)^(−2) = ?", back: "Flip then square: (3/2)² = 9/4." },
      { front: "a^(m/n) means…", back: "n-th root first, then power m: a^(m/n) = (n-th root of a)^m. E.g. 8^(2/3) = 2² = 4." },
      { front: "27^(−4/3) = ?", back: "Flip, cube root, then fourth power: 1/(3^4) = 1/81." },
      { front: "What is a surd?", back: "An irrational root such as √2 or 4√3 — it cannot be written exactly as a fraction or terminating decimal." },
      { front: "Simplify √48.", back: "√48 = √(16 × 3) = 4√3. Extract the largest square factor." },
      { front: "(a + √b)(a − √b) = ?", back: "a² − b. The conjugate pair — the surd terms cancel, leaving a rational number." },
      { front: "Rationalise 6/√3.", back: "Multiply top and bottom by √3: 6√3/3 = 2√3." },
      { front: "Rationalise 5/(2 + √3).", back: "Multiply top and bottom by the conjugate (2 − √3): denominator = 4 − 3 = 1, answer 10 − 5√3." },
      { front: "How do you solve 4^x = 8^(x−1)?", back: "Match the bases: 4 = 2², 8 = 2³, so 2^(2x) = 2^(3x−3). Equate indices: 2x = 3x − 3, x = 3." },
    ],
    keyFacts: [
      "The index laws — add, subtract, multiply the indices — are just careful counting of factors.",
      "a^0 = 1 for every non-zero a; 0^0 is left undefined.",
      "A negative index means reciprocal: 10^(−2) = 0.01, never −100.",
      "For a^(m/n), take the root (n) first, then the power (m): 16^(3/4) = 2³ = 8.",
      "To solve index equations, write both sides as powers of the same base and equate indices.",
      "Simplify surds by extracting the largest square factor: √200 = 10√2.",
      "√a × √b = √(ab), but roots never split over + or −.",
      "Conjugates collapse: (1 + √2)(1 − √2) = 1 − 2 = −1, a rational number.",
      "Rationalising multiplies by 1 in disguise, so the value of the fraction is unchanged.",
      "√2 is irrational — the even/odd contradiction proof is over 2,000 years old.",
    ],
    formulaSheet: [
      { name: "Multiplication law", formula: "a^m × a^n = a^(m+n)", note: "Same base only." },
      { name: "Division law", formula: "a^m ÷ a^n = a^(m−n)", note: "Same base only." },
      { name: "Power of a power", formula: "(a^m)^n = a^(mn)" },
      { name: "Zero index", formula: "a^0 = 1", note: "For a ≠ 0." },
      { name: "Negative index", formula: "a^(−n) = 1/a^n", note: "(a/b)^(−n) = (b/a)^n." },
      { name: "Fractional index", formula: "a^(m/n) = (n-th root of a)^m", note: "Root first, then power." },
      { name: "Multiplying surds", formula: "√a × √b = √(ab)", note: "Also √(a/b) = √a/√b." },
      { name: "Conjugate product", formula: "(a + √b)(a − √b) = a² − b", note: "Difference of two squares — the surds cancel." },
      { name: "Rationalising (single surd)", formula: "k/√a = k√a/a", note: "Multiply top and bottom by √a." },
      { name: "Square from its diagonal", formula: "area = d²/2", note: "From s² + s² = d²." },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "ind-quiz-mcq-01",
        question: "Simplify x^5 × x^3.",
        options: ["x^15", "x^8", "x^2", "2x^8"],
        answerIndex: 1,
        explanation:
          "Multiplying powers of the same base adds the indices: x^5 × x^3 = x^(5+3) = x^8. x^15 multiplies the indices (that's the power-of-a-power law), x^2 subtracts them (that's division), and 2x^8 invents a coefficient from nowhere.",
        guideRef: "The three laws of indices",
        difficulty: "warmup",
      },
      {
        id: "ind-quiz-mcq-02",
        question: "What is the value of 5^0?",
        options: ["0", "5", "1", "undefined"],
        answerIndex: 2,
        explanation:
          "Any non-zero number to the power 0 is 1 — follow the pattern 5³ = 125, 5² = 25, 5¹ = 5: each step divides by 5, so 5^0 = 1. It is not 0 (the pattern never reaches 0) and only 0^0 is undefined.",
        guideRef: "Zero and negative indices",
        difficulty: "warmup",
      },
      {
        id: "ind-quiz-mcq-03",
        question: "Simplify (3x²)³.",
        options: ["9x^6", "27x^5", "27x^6", "3x^6"],
        answerIndex: 2,
        explanation:
          "Cube BOTH parts: 3³ = 27 and (x²)³ = x^6, giving 27x^6. 9x^6 only squares the 3, 27x^5 adds the indices instead of multiplying, and 3x^6 forgets to cube the coefficient at all.",
        guideRef: "The three laws of indices",
        difficulty: "core",
        hints: [
          "The cube applies to everything inside the bracket — the 3 as well as the x².",
          "Deal with the number and the letter separately: 3³ and (x²)³.",
          "For (x²)³, multiply the indices: 2 × 3.",
        ],
        strategy: "count the factors",
      },
      {
        id: "ind-quiz-mcq-04",
        question: "Evaluate 2^(−3).",
        options: ["−8", "1/8", "−1/8", "1/6"],
        answerIndex: 1,
        explanation:
          "A negative index means reciprocal: 2^(−3) = 1/2³ = 1/8. It never makes the answer negative, so −8 and −1/8 are the classic traps; 1/6 comes from doing 1/(2 × 3) instead of 1/2³.",
        guideRef: "Zero and negative indices",
        difficulty: "core",
        hints: [
          "A negative index does not mean a negative number.",
          "a^(−n) = 1/a^n — take the reciprocal of the positive power.",
          "Work out 2³ first, then flip it.",
        ],
        strategy: "work backwards",
      },
      {
        id: "ind-quiz-mcq-05",
        question: "Evaluate 16^(3/4).",
        options: ["12", "2", "8", "64"],
        answerIndex: 2,
        explanation:
          "Root first, then power: the fourth root of 16 is 2, and 2³ = 8. Answer 12 multiplies 16 by 3/4, answer 2 stops after the root, and 64 comes from cubing 4 (a square root taken instead of a fourth root).",
        guideRef: "Fractional indices",
        difficulty: "core",
        hints: [
          "The denominator of the fraction tells you which root to take.",
          "Take the fourth root of 16 first — what number to the power 4 gives 16?",
          "Then raise that root to the power 3.",
        ],
        strategy: "root first, then power",
      },
      {
        id: "ind-quiz-mcq-06",
        question: "Simplify √72 fully.",
        options: ["6√2", "36√2", "6√3", "3√2"],
        answerIndex: 0,
        explanation:
          "72 = 36 × 2, so √72 = √36 × √2 = 6√2. Choosing 36√2 pulls out 36 instead of its root; 6√3 would be √108; 3√2 is √18 — checking by squaring your answer catches all of these.",
        guideRef: "Surds and simplifying roots",
        difficulty: "core",
        hints: [
          "Look for the largest square number that divides 72.",
          "72 = 36 × 2.",
          "√(36 × 2) = √36 × √2 — now evaluate √36.",
        ],
        strategy: "hunt for square factors",
      },
      {
        id: "ind-quiz-mcq-07",
        question: "Work out √5 × √20.",
        options: ["2√5", "5", "100", "10"],
        answerIndex: 3,
        explanation:
          "√5 × √20 = √(5 × 20) = √100 = 10. Answer 100 forgets to take the final square root; 5 is √25; 2√5 is √20 alone, simplified. Multiplying the numbers under one root is the whole trick.",
        guideRef: "Surds and simplifying roots",
        difficulty: "core",
        hints: [
          "Use √a × √b = √(ab).",
          "Multiply 5 by 20 under a single root.",
          "√100 is not a surd at all — evaluate it.",
        ],
        strategy: "hunt for square factors",
      },
      {
        id: "ind-quiz-mcq-08",
        question: "Solve 3^x = 81.",
        options: ["x = 4", "x = 3", "x = 27", "x = 5"],
        answerIndex: 0,
        explanation:
          "81 = 3 × 3 × 3 × 3 = 3^4, so x = 4. Choosing x = 3 stops at 27 = 3³; x = 27 confuses 81 ÷ 3 with the index; x = 5 overshoots to 243.",
        guideRef: "Solving index equations",
        difficulty: "core",
        hints: [
          "Write 81 as a power of 3.",
          "Keep multiplying: 3, 9, 27, … how many steps to 81?",
          "Once both sides are powers of 3, equate the indices.",
        ],
        strategy: "match the bases",
      },
      {
        id: "ind-quiz-mcq-09",
        question: "Rationalise the denominator of 6/√3.",
        options: ["6√3", "2√3", "3√2", "2"],
        answerIndex: 1,
        explanation:
          "Multiply top and bottom by √3: 6/√3 = 6√3/3 = 2√3. Answer 6√3 forgets to divide by the new denominator 3; 2 drops the surd entirely; 3√2 muddles which number stays under the root.",
        guideRef: "Rationalising the denominator and exact geometry",
        difficulty: "core",
        hints: [
          "Multiply the top AND the bottom by √3.",
          "√3 × √3 = 3, so the denominator becomes rational.",
          "You get 6√3/3 — now simplify the fraction 6/3.",
        ],
        strategy: "multiply by 1 in disguise",
      },
      {
        id: "ind-quiz-mcq-10",
        question: "Work out the exact value of (√8 + √2)².",
        options: ["10", "18", "42", "20"],
        answerIndex: 1,
        explanation:
          "Simplify first: √8 = 2√2, so √8 + √2 = 3√2, and (3√2)² = 9 × 2 = 18. Answer 10 squares each term separately (8 + 2) and forgets the cross term 2√16 = 8; 42 misreads 2√16 as 2 × 16 = 32; 20 simply doubles 8 + 2. Simplifying to like surds before squaring is the elegant route.",
        guideRef: "Expanding brackets with surds",
        difficulty: "challenge",
        hints: [
          "Can √8 be written as a multiple of √2?",
          "√8 = √(4 × 2) = 2√2, so the bracket is a single like-surd sum.",
          "Collect: 2√2 + √2 = 3√2. Now square that.",
          "Remember (3√2)² squares BOTH the 3 and the √2.",
        ],
        strategy: "hunt for square factors",
      },
    ],
    qa: [
      {
        id: "ind-quiz-qa-01",
        question: "Evaluate 27^(2/3).",
        modelAnswer:
          "The denominator 3 means cube root, the numerator 2 means square. Cube root of 27 = 3. Then 3² = 9. So 27^(2/3) = 9.",
        markScheme: ["9", "cube root", "3", "square"],
        commonError:
          "Multiplying 27 by 2/3 to get 18 — a fractional index is a root-and-power instruction, not a multiplication.",
        guideRef: "Fractional indices",
        difficulty: "warmup",
      },
      {
        id: "ind-quiz-qa-02",
        question: "Simplify fully (2a³b)^4 ÷ (4a²b³).",
        modelAnswer:
          "First expand the bracket: (2a³b)^4 = 2^4 × a^12 × b^4 = 16a^12b^4. Now divide: 16 ÷ 4 = 4, a^12 ÷ a² = a^10, b^4 ÷ b³ = b. So the answer is 4a^10b.",
        markScheme: ["4a^10b", "16a^12b^4", "subtract indices", "divide"],
        commonError:
          "Raising only the letters to the power 4 and leaving the coefficient as 2 — the 4th power applies to the 2 as well, giving 16.",
        guideRef: "The three laws of indices",
        difficulty: "core",
        hints: [
          "Deal with the bracket first: everything inside gets raised to the power 4.",
          "(2a³b)^4 = 2^4 × (a³)^4 × b^4.",
          "Then divide coefficient by coefficient and subtract the indices letter by letter.",
        ],
        strategy: "count the factors",
      },
      {
        id: "ind-quiz-qa-03",
        question: "Solve 2^(x+1) = 1/16.",
        modelAnswer:
          "Write 1/16 as a power of 2: 16 = 2^4, so 1/16 = 2^(−4). Then 2^(x+1) = 2^(−4), so x + 1 = −4, giving x = −5.",
        markScheme: ["x = -5", "2^-4", "match", "equate indices"],
        commonError:
          "Writing 1/16 as 2^4 and getting x = 3 — the fraction means the index is negative: 1/16 = 2^(−4).",
        guideRef: "Solving index equations",
        difficulty: "core",
        hints: [
          "Get both sides as powers of 2.",
          "16 = 2^4 — so what index gives 1/16?",
          "A reciprocal means a negative index. Now equate the indices.",
        ],
        strategy: "match the bases",
      },
      {
        id: "ind-quiz-qa-04",
        question: "Simplify √48 + √27, giving your answer in the form k√3.",
        modelAnswer:
          "√48 = √(16 × 3) = 4√3 and √27 = √(9 × 3) = 3√3. These are like surds, so they collect: 4√3 + 3√3 = 7√3.",
        markScheme: ["7√3", "4√3", "3√3", "like surds"],
        commonError:
          "Adding under the roots to get √75 — roots never split or combine over +. Simplify each surd first, then collect like surds.",
        guideRef: "Surds and simplifying roots",
        difficulty: "core",
        hints: [
          "Simplify each surd separately before trying to add.",
          "48 = 16 × 3 and 27 = 9 × 3.",
          "Both become multiples of √3 — collect them like terms.",
        ],
        strategy: "hunt for square factors",
      },
      {
        id: "ind-quiz-qa-05",
        question: "Rationalise the denominator of 5/(2 + √3). Simplify your answer fully.",
        modelAnswer:
          "Multiply top and bottom by the conjugate (2 − √3): 5(2 − √3) / ((2 + √3)(2 − √3)) = (10 − 5√3)/(4 − 3) = (10 − 5√3)/1 = 10 − 5√3.",
        markScheme: ["10 - 5√3", "conjugate", "2 - √3", "4 - 3"],
        commonError:
          "Multiplying by √3/√3 as if the denominator were a single surd — with a two-term denominator you must use the conjugate, or the surd survives.",
        guideRef: "Rationalising the denominator and exact geometry",
        difficulty: "core",
        hints: [
          "A two-term denominator needs the conjugate, not just √3.",
          "The conjugate of 2 + √3 is 2 − √3.",
          "(2 + √3)(2 − √3) = 2² − 3 — work out the new denominator first.",
        ],
        strategy: "use the conjugate",
      },
      {
        id: "ind-quiz-qa-06",
        question:
          "A rectangle has area 12 cm² and width (3 − √3) cm. Find its length, giving your answer in the form a + b√3 where a and b are integers.",
        modelAnswer:
          "Length = area ÷ width = 12/(3 − √3). Multiply top and bottom by the conjugate (3 + √3): 12(3 + √3)/((3 − √3)(3 + √3)) = 12(3 + √3)/(9 − 3) = 12(3 + √3)/6 = 2(3 + √3) = 6 + 2√3. Length = (6 + 2√3) cm. Check: (3 − √3)(6 + 2√3) = 18 + 6√3 − 6√3 − 6 = 12 ✓.",
        markScheme: ["6 + 2√3", "conjugate", "9 - 3", "12/(3 - √3)"],
        commonError:
          "Multiplying by the conjugate on the bottom but forgetting to multiply the top by it too — you must multiply by (3 + √3)/(3 + √3), a disguise of 1.",
        guideRef: "Rationalising the denominator and exact geometry",
        difficulty: "challenge",
        hints: [
          "Length = area ÷ width. Write it as a fraction first.",
          "The denominator 3 − √3 has two terms — which conjugate rationalises it?",
          "(3 − √3)(3 + √3) = 9 − 3. Simplify the resulting fraction fully.",
          "Finish by checking: does width × your length really give 12?",
        ],
        strategy: "use the conjugate",
        solutions: [
          {
            label: "Rationalising method",
            steps: [
              "Length = 12/(3 − √3).",
              "Multiply top and bottom by the conjugate: 12(3 + √3)/((3 − √3)(3 + √3)).",
              "Denominator collapses: 9 − 3 = 6.",
              "Length = 12(3 + √3)/6 = 2(3 + √3) = 6 + 2√3 cm.",
            ],
          },
          {
            label: "Introduce-a-variable method (elegant)",
            steps: [
              "Let the length be a + b√3 and use width × length = area.",
              "(3 − √3)(a + b√3) = 3a + 3b√3 − a√3 − 3b = (3a − 3b) + (3b − a)√3.",
              "The area 12 has no surd part, so 3b − a = 0 (giving a = 3b) and 3a − 3b = 12.",
              "Substitute: 9b − 3b = 12, so b = 2 and a = 6. Length = 6 + 2√3 cm — the surd part vanishing did all the work.",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "ind-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "ind-mcq-p1-q01",
            question: "Simplify y^7 ÷ y^3.",
            options: ["y^10", "y^21", "y^4", "y^(7/3)"],
            answerIndex: 2,
            explanation:
              "Dividing powers of the same base subtracts the indices: y^(7−3) = y^4. y^10 adds them (that's multiplication), y^21 multiplies them (power of a power), and y^(7/3) wrongly divides the indices themselves.",
            guideRef: "The three laws of indices",
            difficulty: "warmup",
          },
          {
            id: "ind-mcq-p1-q02",
            question: "What is the value of (−3)^0?",
            options: ["−1", "1", "0", "−3"],
            answerIndex: 1,
            explanation:
              "ANY non-zero number to the power 0 equals 1, including negative numbers: (−3)^0 = 1. The rule comes from the dividing pattern, and the base being negative changes nothing.",
            guideRef: "Zero and negative indices",
            difficulty: "warmup",
          },
          {
            id: "ind-mcq-p1-q03",
            question: "Simplify (x^4)^5 ÷ x^6.",
            options: ["x^14", "x^3", "x^26", "x^9"],
            answerIndex: 0,
            explanation:
              "(x^4)^5 = x^20 (multiply the indices), then x^20 ÷ x^6 = x^14 (subtract). x^3 comes from adding 4 + 5 first; x^26 adds the 6 instead of subtracting; x^9 stops at 4 + 5 and ignores the division.",
            guideRef: "The three laws of indices",
            difficulty: "core",
            hints: [
              "Handle the bracket first.",
              "(x^4)^5 multiplies the indices: 4 × 5.",
              "Then dividing by x^6 subtracts 6 from that index.",
            ],
            strategy: "count the factors",
          },
          {
            id: "ind-mcq-p1-q04",
            question: "Evaluate (2/3)^(−2).",
            options: ["4/9", "9/4", "−4/9", "−9/4"],
            answerIndex: 1,
            explanation:
              "A negative index on a fraction flips it first: (2/3)^(−2) = (3/2)² = 9/4. 4/9 forgets to flip, and both negative options fall for the myth that a negative index makes the answer negative.",
            guideRef: "Zero and negative indices",
            difficulty: "core",
            hints: [
              "Deal with the minus sign first — what does a negative index do?",
              "It takes the reciprocal: flip 2/3 to 3/2.",
              "Now square the flipped fraction.",
            ],
            strategy: "work backwards",
          },
          {
            id: "ind-mcq-p1-q05",
            question: "Simplify √50 − √8.",
            options: ["√42", "7√2", "3√2", "3"],
            answerIndex: 2,
            explanation:
              "√50 = 5√2 and √8 = 2√2, so the difference is 3√2. √42 wrongly subtracts under the roots (roots never split over −); 7√2 adds instead of subtracting; 3 drops the surd.",
            guideRef: "Surds and simplifying roots",
            difficulty: "core",
            hints: [
              "You cannot subtract under the root signs — simplify each surd first.",
              "50 = 25 × 2 and 8 = 4 × 2.",
              "Both are multiples of √2, so subtract them like terms.",
            ],
            strategy: "hunt for square factors",
          },
          {
            id: "ind-mcq-p1-q06",
            question: "Solve 5^(2x) = 125.",
            options: ["x = 3", "x = 3/2", "x = 2/3", "x = 25"],
            answerIndex: 1,
            explanation:
              "125 = 5³, so 5^(2x) = 5³ gives 2x = 3 and x = 3/2. x = 3 solves 5^x = 125 but ignores the 2; x = 2/3 flips the final fraction; x = 25 confuses base and index.",
            guideRef: "Solving index equations",
            difficulty: "core",
            hints: [
              "Write 125 as a power of 5.",
              "125 = 5 × 5 × 5.",
              "Equate the indices: 2x = 3, then solve for x.",
            ],
            strategy: "match the bases",
          },
          {
            id: "ind-mcq-p1-q07",
            question: "Rationalise the denominator of 10/√5.",
            options: ["10√5", "2√5", "5√2", "2"],
            answerIndex: 1,
            explanation:
              "Multiply top and bottom by √5: 10√5/5 = 2√5. 10√5 forgets to divide by the new denominator 5; 2 loses the surd; 5√2 swaps which number sits under the root.",
            guideRef: "Rationalising the denominator and exact geometry",
            difficulty: "core",
            hints: [
              "Multiply numerator and denominator by √5.",
              "√5 × √5 = 5.",
              "Simplify the fraction 10/5 at the end.",
            ],
            strategy: "multiply by 1 in disguise",
          },
          {
            id: "ind-mcq-p1-q08",
            question: "Given that 2^a = 5, what is the value of 2^(a+3)?",
            options: ["15", "40", "125", "8"],
            answerIndex: 1,
            explanation:
              "2^(a+3) = 2^a × 2³ = 5 × 8 = 40 by the multiplication law — no need to find a itself. Answer 15 adds 5 + 10 as if indices adding meant values adding; 125 computes 5³ as if the 3 were a power of 5; 8 ignores 2^a entirely. The insight: adding 3 to the index multiplies the value by 2³.",
            guideRef: "Solving index equations",
            difficulty: "challenge",
            hints: [
              "You are not expected to find a — it isn't a whole number.",
              "Split 2^(a+3) using the multiplication law.",
              "2^(a+3) = 2^a × 2^3. You know both pieces.",
            ],
            strategy: "look for invariants",
          },
        ],
      },
      {
        id: "ind-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "ind-mcq-p2-q01",
            question: "Write 1/x³ as a power of x.",
            options: ["x^(1/3)", "x^(−3)", "−x³", "x^(−1/3)"],
            answerIndex: 1,
            explanation:
              "The reciprocal of x³ is x^(−3) — a negative index means 'one over'. x^(1/3) is the cube root, −x³ is a negative quantity (not a reciprocal), and x^(−1/3) is one over the cube root.",
            guideRef: "Zero and negative indices",
            difficulty: "warmup",
          },
          {
            id: "ind-mcq-p2-q02",
            question: "Which of these numbers is a surd?",
            options: ["√7", "√9", "√16", "√25"],
            answerIndex: 0,
            explanation:
              "√9 = 3, √16 = 4 and √25 = 5 are whole numbers, so they are rational — not surds. √7 has no exact fraction or terminating decimal form: it is irrational, which is exactly what makes it a surd.",
            guideRef: "Surds and simplifying roots",
            difficulty: "warmup",
          },
          {
            id: "ind-mcq-p2-q03",
            question: "Evaluate 8^(2/3).",
            options: ["16/3", "2", "4", "12"],
            answerIndex: 2,
            explanation:
              "Cube root first: ∛8 = 2, then square: 2² = 4. 16/3 multiplies 8 by 2/3 (a fractional index is never a multiplication); 2 stops after the root; 12 muddles 8 × 3/2.",
            guideRef: "Fractional indices",
            difficulty: "core",
            hints: [
              "The 3 underneath means cube root; the 2 on top means square.",
              "Take the cube root of 8 first.",
              "Then square the result.",
            ],
            strategy: "root first, then power",
          },
          {
            id: "ind-mcq-p2-q04",
            question: "Simplify 3√5 × 2√10.",
            options: ["6√15", "30√2", "5√2", "60"],
            answerIndex: 1,
            explanation:
              "Multiply coefficients and surds separately: 3 × 2 = 6 and √5 × √10 = √50 = 5√2, so the product is 6 × 5√2 = 30√2. 6√15 adds under the root instead of multiplying; 60 treats √50 as 10; 5√2 loses the coefficient 6.",
            guideRef: "Expanding brackets with surds",
            difficulty: "core",
            hints: [
              "Multiply the whole numbers together and the surds together.",
              "√5 × √10 = √50 — can that be simplified?",
              "50 = 25 × 2, so extract the 25.",
            ],
            strategy: "hunt for square factors",
          },
          {
            id: "ind-mcq-p2-q05",
            question: "Evaluate 27^(−4/3).",
            options: ["−81", "81", "1/81", "−1/81"],
            answerIndex: 2,
            explanation:
              "The minus flips: 27^(−4/3) = 1/27^(4/3). Cube root of 27 is 3, then 3^4 = 81, so the value is 1/81. The negative options fall for 'negative index = negative answer'; 81 forgets the reciprocal.",
            guideRef: "Fractional indices",
            difficulty: "core",
            hints: [
              "Handle the pieces in order: minus, then root, then power.",
              "The minus means reciprocal: 1/27^(4/3).",
              "∛27 = 3, then raise 3 to the power 4.",
            ],
            strategy: "root first, then power",
          },
          {
            id: "ind-mcq-p2-q06",
            question: "Solve 9^x = 27.",
            options: ["x = 3", "x = 3/2", "x = 2/3", "x = 2"],
            answerIndex: 1,
            explanation:
              "Match bases: 9 = 3² and 27 = 3³, so 3^(2x) = 3³, giving 2x = 3 and x = 3/2. Check: 9^(3/2) = (√9)³ = 27 ✓. x = 3 solves 3^x = 27; x = 2/3 inverts the fraction; x = 2 gives 81.",
            guideRef: "Solving index equations",
            difficulty: "core",
            hints: [
              "9 and 27 are both powers of the same prime.",
              "Write 9 = 3² and 27 = 3³.",
              "Then 3^(2x) = 3^3 — equate the indices.",
            ],
            strategy: "match the bases",
          },
          {
            id: "ind-mcq-p2-q07",
            question: "Expand and simplify (3 + √2)(3 − √2).",
            options: ["11", "7", "9", "7 − 6√2"],
            answerIndex: 1,
            explanation:
              "This is a conjugate pair: (3 + √2)(3 − √2) = 3² − (√2)² = 9 − 2 = 7. The surd terms +3√2 and −3√2 cancel. 11 adds 9 + 2; 9 ignores the √2 entirely; 7 − 6√2 keeps cross terms that actually cancel.",
            guideRef: "Expanding brackets with surds",
            difficulty: "core",
            hints: [
              "Expand all four terms — watch what happens to the two middle ones.",
              "+3√2 and −3√2 are exact opposites.",
              "You're left with 3² − (√2)². Remember (√2)² = 2.",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "ind-mcq-p2-q08",
            question: "Given that √12 + √75 = √k, find the value of k.",
            options: ["87", "147", "21", "63"],
            answerIndex: 1,
            explanation:
              "√12 = 2√3 and √75 = 5√3, so the sum is 7√3 = √(49 × 3) = √147, giving k = 147. 87 wrongly adds 12 + 75 under the root; 21 computes 7 × 3 without squaring the 7; 63 mixes up 9 × 7. The final step — pushing the 7 back inside as 7² = 49 — is the one most people miss.",
            guideRef: "Surds and simplifying roots",
            difficulty: "challenge",
            hints: [
              "You can't add under the roots — simplify each surd first.",
              "√12 = 2√3 and √75 = 5√3. Collect them.",
              "Now write 7√3 as a single square root: the 7 goes back inside as 7².",
              "√(49 × 3) = √k.",
            ],
            strategy: "hunt for square factors",
          },
        ],
      },
      {
        id: "ind-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "ind-mcq-p3-q01",
            question: "Simplify (x³)^4.",
            options: ["x^7", "x^12", "x^81", "4x³"],
            answerIndex: 1,
            explanation:
              "A power of a power multiplies the indices: x^(3×4) = x^12. x^7 adds them (that's the multiplication law), x^81 computes 3^4 in the index, and 4x³ multiplies the coefficient instead.",
            guideRef: "The three laws of indices",
            difficulty: "warmup",
          },
          {
            id: "ind-mcq-p3-q02",
            question: "A grain of pollen has mass 10^(−2) milligrams. Write this as a decimal number of milligrams.",
            options: ["−100", "0.01", "0.1", "−20"],
            answerIndex: 1,
            explanation:
              "10^(−2) = 1/10² = 1/100 = 0.01 mg. The negative index means reciprocal, not negative: −100 and −20 are impossible masses, and 0.1 is 10^(−1).",
            guideRef: "Zero and negative indices",
            difficulty: "warmup",
          },
          {
            id: "ind-mcq-p3-q03",
            question: "Simplify √48 fully.",
            options: ["16√3", "6√2", "4√3", "24"],
            answerIndex: 2,
            explanation:
              "48 = 16 × 3, so √48 = √16 × √3 = 4√3. 16√3 pulls out 16 instead of √16; 6√2 is √72, a different number; 24 is just 48 ÷ 2, not a square root.",
            guideRef: "Surds and simplifying roots",
            difficulty: "core",
            hints: [
              "Find the largest square number dividing 48.",
              "48 = 16 × 3.",
              "Take √16 outside the root.",
            ],
            strategy: "hunt for square factors",
          },
          {
            id: "ind-mcq-p3-q04",
            question: "Simplify (5x²y³)² ÷ (5x³y^4).",
            options: ["5xy²", "25xy²", "5x^7y^10", "xy²"],
            answerIndex: 0,
            explanation:
              "(5x²y³)² = 25x^4y^6. Dividing: 25 ÷ 5 = 5, x^4 ÷ x³ = x, y^6 ÷ y^4 = y², so 5xy². 25xy² forgets to divide the coefficients; 5x^7y^10 adds indices instead of subtracting; xy² drops the coefficient.",
            guideRef: "The three laws of indices",
            difficulty: "core",
            hints: [
              "Square the whole bracket first, coefficient included.",
              "(5x²y³)² = 25x^4y^6.",
              "Now divide: coefficients divide, indices subtract.",
            ],
            strategy: "count the factors",
          },
          {
            id: "ind-mcq-p3-q05",
            question: "Which of these is the largest number?",
            options: ["4^18", "8^13", "2^40", "16^9"],
            answerIndex: 2,
            explanation:
              "Convert everything to base 2: 4^18 = 2^36, 8^13 = 2^39, 2^40 stays, 16^9 = 2^36. Comparing indices, 2^40 wins. Matching bases turns an impossible comparison into a one-line one.",
            guideRef: "Solving index equations",
            difficulty: "core",
            hints: [
              "These numbers are far too big to compute — compare, don't calculate.",
              "4, 8 and 16 are all powers of 2.",
              "Rewrite each option as 2 to a single power, then compare the indices.",
            ],
            strategy: "match the bases",
          },
          {
            id: "ind-mcq-p3-q06",
            question: "Rationalise the denominator of 4/(√5 − 1).",
            options: ["√5 + 1", "4√5 + 4", "√5 − 1", "(√5 + 1)/6"],
            answerIndex: 0,
            explanation:
              "Multiply top and bottom by the conjugate (√5 + 1): denominator = 5 − 1 = 4, numerator = 4(√5 + 1), and the 4s cancel to leave √5 + 1. 4√5 + 4 forgets the denominator; √5 − 1 forgets the sign swap; the /6 option miscalculates 5 − 1.",
            guideRef: "Rationalising the denominator and exact geometry",
            difficulty: "core",
            hints: [
              "Two terms in the denominator — use the conjugate.",
              "The conjugate of √5 − 1 is √5 + 1.",
              "(√5 − 1)(√5 + 1) = 5 − 1. Then look for cancellation with the numerator.",
            ],
            strategy: "use the conjugate",
          },
          {
            id: "ind-mcq-p3-q07",
            question: "A square has area 45 cm². What is the exact length of one side?",
            options: ["9√5 cm", "3√5 cm", "5√3 cm", "22.5 cm"],
            answerIndex: 1,
            explanation:
              "Side = √45 = √(9 × 5) = 3√5 cm. 9√5 pulls out 9 instead of √9; 5√3 is √75, the wrong number; 22.5 halves the area, which is not how squares work.",
            guideRef: "Rationalising the denominator and exact geometry",
            difficulty: "core",
            hints: [
              "Side length is the square root of the area.",
              "Simplify √45 by finding a square factor.",
              "45 = 9 × 5.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "ind-mcq-p3-q08",
            question: "Simplify (√3 + 1)/(√3 − 1).",
            options: ["4 + 2√3", "2 − √3", "2 + √3", "1"],
            answerIndex: 2,
            explanation:
              "Multiply top and bottom by (√3 + 1): numerator = (√3 + 1)² = 3 + 2√3 + 1 = 4 + 2√3; denominator = 3 − 1 = 2. So the value is (4 + 2√3)/2 = 2 + √3. Choosing 4 + 2√3 forgets the ÷2; 2 − √3 has a sign slip; 1 wrongly cancels the brackets as if they were equal.",
            guideRef: "Rationalising the denominator and exact geometry",
            difficulty: "challenge",
            hints: [
              "Rationalise: multiply top and bottom by the conjugate of the denominator.",
              "The numerator becomes (√3 + 1)² — expand it carefully with the cross term.",
              "The denominator becomes 3 − 1.",
              "Divide every term of the numerator by that denominator.",
            ],
            strategy: "use the conjugate",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "ind-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "ind-qa-p1-q01",
            question: "Write down the value of 5^(−2), giving your answer as a fraction.",
            modelAnswer: "A negative index means reciprocal: 5^(−2) = 1/5² = 1/25.",
            markScheme: ["1/25", "reciprocal", "5² = 25"],
            commonError: "Writing −25 or −1/25 — the negative index takes a reciprocal; it never makes the value negative.",
            guideRef: "Zero and negative indices",
            difficulty: "warmup",
          },
          {
            id: "ind-qa-p1-q02",
            question: "Simplify fully (2x³)^4 ÷ (4x^5).",
            modelAnswer:
              "(2x³)^4 = 2^4 × x^12 = 16x^12. Then 16x^12 ÷ 4x^5 = (16 ÷ 4) × x^(12−5) = 4x^7.",
            markScheme: ["4x^7", "16x^12", "subtract indices"],
            commonError:
              "Leaving the coefficient as 2 (or making it 8) — the power 4 applies to the 2 as well, so it becomes 2^4 = 16 before you divide.",
            guideRef: "The three laws of indices",
            difficulty: "core",
            hints: [
              "Raise everything in the bracket to the power 4 first.",
              "(2x³)^4 = 2^4 × (x³)^4.",
              "Then divide the coefficients and subtract the indices.",
            ],
            strategy: "count the factors",
          },
          {
            id: "ind-qa-p1-q03",
            question: "Solve 2^(3x−1) = 32.",
            modelAnswer:
              "32 = 2^5, so 2^(3x−1) = 2^5. Equate the indices: 3x − 1 = 5, so 3x = 6 and x = 2.",
            markScheme: ["x = 2", "2^5", "3x - 1 = 5", "equate indices"],
            commonError:
              "Dividing 32 by 2 to 'remove the base' and solving 3x − 1 = 16 — you must express 32 as a power of 2 and compare indices instead.",
            guideRef: "Solving index equations",
            difficulty: "core",
            hints: [
              "Write 32 as a power of 2.",
              "2, 4, 8, 16, 32 — count the doublings.",
              "With both sides as powers of 2, set the indices equal and solve the linear equation.",
            ],
            strategy: "match the bases",
          },
          {
            id: "ind-qa-p1-q04",
            question: "Express √200 − √32 in the form k√2, where k is an integer.",
            modelAnswer:
              "√200 = √(100 × 2) = 10√2 and √32 = √(16 × 2) = 4√2. So √200 − √32 = 10√2 − 4√2 = 6√2 (k = 6).",
            markScheme: ["6√2", "10√2", "4√2", "like surds"],
            commonError:
              "Subtracting under the roots to get √168 — the root of a difference is not the difference of the roots. Simplify each surd first.",
            guideRef: "Surds and simplifying roots",
            difficulty: "core",
            hints: [
              "Simplify each square root separately.",
              "200 = 100 × 2 and 32 = 16 × 2.",
              "Both simplify to multiples of √2 — now subtract the coefficients.",
            ],
            strategy: "hunt for square factors",
          },
          {
            id: "ind-qa-p1-q05",
            question: "Show that (5 − √3)² can be written as 28 − 10√3.",
            modelAnswer:
              "(5 − √3)² = (5 − √3)(5 − √3) = 25 − 5√3 − 5√3 + (√3)² = 25 − 10√3 + 3 = 28 − 10√3, as required.",
            markScheme: ["28 - 10√3", "25", "-10√3", "(√3)² = 3", "expand"],
            commonError:
              "Squaring term by term to get 25 + 3 = 28 with no surd part — (a − b)² always has the middle term −2ab, here −10√3.",
            guideRef: "Expanding brackets with surds",
            difficulty: "core",
            hints: [
              "Write the square as two identical brackets and expand all four products.",
              "The two cross terms are each −5√3.",
              "(√3)² is just 3 — then collect the rational parts.",
            ],
            strategy: "spot the identity",
          },
          {
            id: "ind-qa-p1-q06",
            question: "Given that 4^x × 8^(x+1) = 32, find the value of x.",
            modelAnswer:
              "Write everything in base 2: 4^x = 2^(2x), 8^(x+1) = 2^(3x+3), 32 = 2^5. The left side becomes 2^(2x) × 2^(3x+3) = 2^(5x+3). So 5x + 3 = 5, giving 5x = 2 and x = 2/5.",
            markScheme: ["x = 2/5", "2^(2x)", "2^(3x+3)", "5x + 3 = 5"],
            commonError:
              "Multiplying the bases to get 32^(…) — you can only combine powers by adding indices when the bases already match, so convert 4 and 8 to base 2 first.",
            guideRef: "Solving index equations",
            difficulty: "challenge",
            hints: [
              "Three different numbers — 4, 8, 32 — but they share one prime base.",
              "Rewrite each as a power of 2: 4 = 2², 8 = 2³, 32 = 2^5.",
              "Add the indices on the left: 2x + (3x + 3).",
              "Set that equal to 5 and solve — don't be alarmed by a fractional answer.",
            ],
            strategy: "match the bases",
          },
        ],
      },
      {
        id: "ind-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "ind-qa-p2-q01",
            question: "Simplify √63.",
            modelAnswer: "63 = 9 × 7, so √63 = √9 × √7 = 3√7.",
            markScheme: ["3√7", "9 × 7", "square factor"],
            commonError: "Stopping at √63 because 63 isn't square — look for square factors of 63, not squareness of 63 itself.",
            guideRef: "Surds and simplifying roots",
            difficulty: "warmup",
          },
          {
            id: "ind-qa-p2-q02",
            question: "Evaluate 64^(−2/3), giving your answer as a fraction.",
            modelAnswer:
              "The minus flips: 64^(−2/3) = 1/64^(2/3). Cube root of 64 is 4, then 4² = 16. So 64^(−2/3) = 1/16.",
            markScheme: ["1/16", "cube root", "4", "reciprocal"],
            commonError:
              "Answering −16 — the minus sign in the index means reciprocal (1 over), never a negative value.",
            guideRef: "Fractional indices",
            difficulty: "core",
            hints: [
              "Take the pieces in order: minus, root, power.",
              "The minus makes it 1/64^(2/3).",
              "∛64 = 4, then square it.",
            ],
            strategy: "root first, then power",
          },
          {
            id: "ind-qa-p2-q03",
            question: "Solve 4^x = 8^(x−1).",
            modelAnswer:
              "Write both sides in base 2: 4^x = (2²)^x = 2^(2x) and 8^(x−1) = (2³)^(x−1) = 2^(3x−3). Equate indices: 2x = 3x − 3, so x = 3. Check: 4³ = 64 and 8² = 64 ✓.",
            markScheme: ["x = 3", "2^(2x)", "2^(3x-3)", "equate indices"],
            commonError:
              "Setting x = x − 1 because 'the powers are equal' — the bases 4 and 8 are different, so you must convert to a common base before comparing indices.",
            guideRef: "Solving index equations",
            difficulty: "core",
            hints: [
              "4 and 8 are both powers of which prime?",
              "Rewrite: 4 = 2², 8 = 2³, then apply power-of-a-power.",
              "Equate the two indices of 2 and solve the linear equation.",
            ],
            strategy: "match the bases",
            solutions: [
              {
                label: "Base 2 method (standard)",
                steps: [
                  "4 = 2² and 8 = 2³, so the equation is (2²)^x = (2³)^(x−1).",
                  "Power of a power: 2^(2x) = 2^(3x−3).",
                  "Powers of 2 are equal only when the indices are equal: 2x = 3x − 3.",
                  "Solve: x = 3. Check: 4³ = 64 = 8².",
                ],
              },
              {
                label: "Base 4 method (elegant twist)",
                steps: [
                  "Notice 8 = 4^(3/2), because 4^(3/2) = (√4)³ = 2³ = 8.",
                  "So 8^(x−1) = 4^((3/2)(x−1)) and the equation reads 4^x = 4^((3/2)(x−1)).",
                  "Equate indices: x = (3/2)(x − 1), so 2x = 3x − 3.",
                  "Again x = 3 — matching to either base works; choose whichever makes the arithmetic cleanest.",
                ],
              },
            ],
          },
          {
            id: "ind-qa-p2-q04",
            question: "Expand and simplify (2 + 3√5)(4 − √5).",
            modelAnswer:
              "FOIL: 2 × 4 = 8; 2 × (−√5) = −2√5; 3√5 × 4 = 12√5; 3√5 × (−√5) = −3 × 5 = −15. Collect: (8 − 15) + (−2 + 12)√5 = −7 + 10√5, i.e. 10√5 − 7.",
            markScheme: ["10√5 - 7", "-15", "12√5", "-2√5"],
            commonError:
              "Treating 3√5 × √5 as 3√25 = 15 but forgetting the minus sign, or leaving it as a surd — √5 × √5 collapses to exactly 5.",
            guideRef: "Expanding brackets with surds",
            difficulty: "core",
            hints: [
              "Expand all four products — First, Outer, Inner, Last.",
              "3√5 × (−√5) = −3 × (√5 × √5).",
              "√5 × √5 = 5. Now collect rational parts and √5 parts separately.",
            ],
            strategy: "spot the identity",
          },
          {
            id: "ind-qa-p2-q05",
            question: "Rationalise the denominator of 14/(3 + √2). Simplify your answer fully.",
            modelAnswer:
              "Multiply top and bottom by the conjugate (3 − √2): 14(3 − √2)/((3 + √2)(3 − √2)) = 14(3 − √2)/(9 − 2) = 14(3 − √2)/7 = 2(3 − √2) = 6 − 2√2.",
            markScheme: ["6 - 2√2", "conjugate", "9 - 2 = 7", "3 - √2"],
            commonError:
              "Leaving the answer as 14(3 − √2)/7 — the examiner expects the 14/7 cancelled and the bracket expanded: 6 − 2√2.",
            guideRef: "Rationalising the denominator and exact geometry",
            difficulty: "core",
            hints: [
              "Use the conjugate of the denominator: 3 − √2.",
              "(3 + √2)(3 − √2) = 9 − 2.",
              "Cancel 14 with the new denominator before expanding.",
            ],
            strategy: "use the conjugate",
          },
          {
            id: "ind-qa-p2-q06",
            question:
              "A right-angled triangle has perpendicular sides of length √12 cm and √27 cm. Show that its area is a whole number of cm², and state that area.",
            modelAnswer:
              "Area = (1/2) × √12 × √27 = (1/2) × √(12 × 27) = (1/2) × √324 = (1/2) × 18 = 9. (Alternatively: √12 = 2√3 and √27 = 3√3, so the product is 2√3 × 3√3 = 6 × 3 = 18, and half of 18 is 9.) The area is exactly 9 cm² — a whole number, even though both sides are surds.",
            markScheme: ["9", "√324 = 18", "2√3", "3√3", "half base times height"],
            commonError:
              "Rounding √12 ≈ 3.46 and √27 ≈ 5.20 and getting area ≈ 8.99 cm² — decimals lose the exactness; multiply the surds and the answer comes out perfectly whole.",
            guideRef: "Rationalising the denominator and exact geometry",
            difficulty: "challenge",
            hints: [
              "Write the area formula before touching any numbers.",
              "Use √a × √b = √(ab) — multiply 12 by 27 under one root.",
              "Is 324 a perfect square?",
              "Alternatively simplify each surd first: both are multiples of √3.",
            ],
            strategy: "draw a diagram",
          },
        ],
      },
      {
        id: "ind-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "ind-qa-p3-q01",
            question: "Write 8√2 in the form √k, where k is an integer.",
            modelAnswer: "Push the 8 back inside the root as 8² = 64: 8√2 = √64 × √2 = √128. So k = 128.",
            markScheme: ["128", "64", "8² inside"],
            commonError: "Writing √16 because 8 × 2 = 16 — the 8 must be squared before it goes under the root.",
            guideRef: "Surds and simplifying roots",
            difficulty: "warmup",
          },
          {
            id: "ind-qa-p3-q02",
            question: "Evaluate (25/16)^(−3/2), giving your answer as a fraction.",
            modelAnswer:
              "Minus flips the fraction: (16/25)^(3/2). Square root first: √(16/25) = 4/5. Then cube: (4/5)³ = 64/125.",
            markScheme: ["64/125", "flip", "4/5", "cube"],
            commonError:
              "Cubing before rooting and drowning in 4096/15625 — root first keeps the numbers tiny, and forgetting to flip gives 125/64.",
            guideRef: "Fractional indices",
            difficulty: "core",
            hints: [
              "Order of attack: minus (flip), then root, then power.",
              "After flipping you have (16/25)^(3/2).",
              "√16 = 4 and √25 = 5 — root top and bottom separately, then cube.",
            ],
            strategy: "root first, then power",
          },
          {
            id: "ind-qa-p3-q03",
            question: "Simplify (x^(1/2) × x^(3/4))^4, giving your answer as a single power of x.",
            modelAnswer:
              "Inside the bracket, add the indices: 1/2 + 3/4 = 5/4, so the bracket is x^(5/4). Then the power of a power multiplies: (x^(5/4))^4 = x^(5/4 × 4) = x^5.",
            markScheme: ["x^5", "5/4", "add indices", "multiply indices"],
            commonError:
              "Multiplying 1/2 × 3/4 inside the bracket — multiplying powers ADDS the indices; only the outer power of a power multiplies them.",
            guideRef: "Fractional indices",
            difficulty: "core",
            hints: [
              "Work inside the bracket first.",
              "x^(1/2) × x^(3/4): same base, so add the fractional indices with a common denominator.",
              "Then apply the outer power 4 by multiplying the index.",
            ],
            strategy: "count the factors",
          },
          {
            id: "ind-qa-p3-q04",
            question: "The diagonal of a square is exactly 10 cm. Find the exact area of the square.",
            modelAnswer:
              "Let the side be s. Pythagoras: s² + s² = 10², so 2s² = 100 and s² = 50. The area of the square is s², so the area is exactly 50 cm². (No rounding needed — we never even had to find s = 5√2.)",
            markScheme: ["50", "s² + s² = 100", "Pythagoras", "2s² = 100"],
            commonError:
              "Finding s = √50 ≈ 7.07 and squaring the rounded decimal to get 49.98 cm² — keep s² exact; it IS the area.",
            guideRef: "Rationalising the denominator and exact geometry",
            difficulty: "core",
            hints: [
              "Draw the square with its diagonal — you get a right-angled triangle.",
              "Apply Pythagoras with both shorter sides equal to s.",
              "You need the area, which is s² — do you ever need s itself?",
            ],
            strategy: "draw a diagram",
            solutions: [
              {
                label: "Pythagoras method (elegant)",
                steps: [
                  "The diagonal splits the square into right-angled triangles with legs s and s.",
                  "s² + s² = 10², so 2s² = 100.",
                  "s² = 50 — and s² is exactly the area. Done: 50 cm², no surds required.",
                ],
              },
              {
                label: "Half-diagonals method (picture)",
                steps: [
                  "The two diagonals of a square are equal (both 10 cm) and cut it into 4 triangles.",
                  "A square is a special kite/rhombus, whose area is half the product of its diagonals.",
                  "Area = (1/2) × 10 × 10 = 50 cm² — same answer from pure geometry.",
                ],
              },
            ],
          },
          {
            id: "ind-qa-p3-q05",
            question: "Simplify (7 + √7)/√7, giving your answer in the form a + √b.",
            modelAnswer:
              "Multiply top and bottom by √7: ((7 + √7) × √7)/7 = (7√7 + 7)/7 = √7 + 1. (Or split the fraction: 7/√7 + √7/√7 = √7 + 1.) Answer: 1 + √7.",
            markScheme: ["1 + √7", "7√7 + 7", "split the fraction", "√7/√7 = 1"],
            commonError:
              "Cancelling the 7 against the √7 to claim 7/√7 = 1 (giving 1 + 1 = 2) — in fact 7/√7 = √7, because 7 = √7 × √7 and one factor cancels.",
            guideRef: "Rationalising the denominator and exact geometry",
            difficulty: "core",
            hints: [
              "Either rationalise, or split the fraction into two pieces over √7.",
              "√7/√7 = 1 — that's one term done.",
              "For 7/√7, write 7 as √7 × √7 and cancel.",
            ],
            strategy: "multiply by 1 in disguise",
          },
          {
            id: "ind-qa-p3-q06",
            question:
              "Given that (a + √3)² = 19 + b√3, where a and b are positive integers, find the values of a and b.",
            modelAnswer:
              "Expand: (a + √3)² = a² + 2a√3 + 3 = (a² + 3) + 2a√3. Compare with 19 + b√3. Rational parts: a² + 3 = 19, so a² = 16 and a = 4 (positive). Surd parts: b = 2a = 8. So a = 4, b = 8. Check: (4 + √3)² = 16 + 8√3 + 3 = 19 + 8√3 ✓.",
            markScheme: ["a = 4", "b = 8", "a² + 3 = 19", "compare coefficients"],
            commonError:
              "Expanding (a + √3)² as a² + 3 with no middle term — the cross term 2a√3 is exactly what produces the b√3 part, so without it the problem is unsolvable.",
            guideRef: "Expanding brackets with surds",
            difficulty: "challenge",
            hints: [
              "Expand the left side fully — keep the cross term.",
              "Sort the expansion into 'rational part' + 'multiple of √3'.",
              "Two exact expressions are equal only if rational parts match AND √3 coefficients match — that gives two equations.",
              "Solve a² + 3 = 19 first, remembering a must be positive.",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
    ],
  },
};

export default topic;
