import type { Topic } from "../types";

const topic: Topic = {
  id: "algebra",
  title: "Algebraic Expressions",
  subject: "Maths",
  icon: "🧮",
  intro:
    "Algebra is the grammar of mathematics: once you can simplify, expand, factorise and rearrange with confidence, every other topic — graphs, equations, sequences, proof — gets easier. In this topic you will learn to see structure in expressions (not just push symbols around), master the index laws, handle algebraic fractions like numeric ones, and finish with algebraic proof, where a few lines of algebra let you make a statement about every integer that will ever exist.",

  guide: [
    {
      heading: "Collecting like terms and simplifying",
      body:
        "An expression is a collection of **terms** joined by + and - signs. Terms are **like** when they have exactly the same letters with the same powers: 3x² and -5x² are like terms; 3x² and 3x are not.\n\nTo simplify, collect like terms by adding their coefficients:\n\n- 4a + 7b - a + 2b = 3a + 9b\n- 5x² + 3x - 2x² + x = 3x² + 4x\n\nWhen multiplying terms, multiply the numbers and combine the letters: 4a²b × 3ab³ = 12a³b⁴. When dividing, divide the numbers and subtract powers of matching letters: 12x⁵y² ÷ 4x²y = 3x³y.\n\nA sign belongs to the term that follows it. In 7x - 3y - 2x + y, the terms are 7x, -3y, -2x and +y, so the answer is 5x - 2y.",
      keyPoints: [
        "Like terms have identical letters with identical powers; only like terms can be collected.",
        "Each sign travels with the term after it: in 6x - 4y + x the terms are 6x, -4y, +x.",
        "x means 1x and -x means -1x — the invisible coefficient is 1.",
        "Multiplying terms: multiply coefficients, add powers of each matching letter.",
      ],
      strategies: [
        "Underline like terms in matching styles before collecting — a form of 'draw a diagram' for expressions.",
        "Try small cases: substitute x = 2, y = 3 into your answer and the original to check they agree.",
      ],
      whyItWorks:
        "Collecting like terms is just the distributive law read backwards: 4a + 3a = (4 + 3)a = 7a, because a is a common factor. That is why 4a + 3b cannot be collected — there is no common factor to pull out.",
    },
    {
      heading: "Index laws with algebra",
      body:
        "The three core index laws:\n\n- **Multiply**: xᵃ × xᵇ = x^(a+b), e.g. x³ × x⁵ = x⁸\n- **Divide**: xᵃ ÷ xᵇ = x^(a-b), e.g. m⁵ ÷ m² = m³\n- **Power of a power**: (xᵃ)ᵇ = x^(ab), e.g. (x³)⁴ = x¹²\n\nWith coefficients, deal with the numbers and letters separately: (2x³)⁴ = 2⁴ × x¹² = 16x¹². The power outside a bracket applies to **everything** inside it.\n\nRemember also x⁰ = 1 (for x ≠ 0), x⁻ⁿ = 1/xⁿ, and x^(1/2) = √x. These let you write expressions like 1/x³ as x⁻³, which matters for differentiation later.",
      discovery: {
        problem:
          "Without any rules, write x³ × x⁵ out in full as x's multiplied together. Now do x⁷ ÷ x⁴ the same way. What do you notice about the answers' powers?",
        idea:
          "x³ × x⁵ is (x·x·x)(x·x·x·x·x) = x⁸ — the powers ADD. In x⁷ ÷ x⁴, four x's cancel from top and bottom leaving x³ — the powers SUBTRACT. The index laws are not decrees: they are just counting the x's.",
      },
      keyPoints: [
        "Multiplying powers of the same base: add the indices. Dividing: subtract.",
        "Power of a power: multiply the indices — (x³)⁴ = x¹², not x⁷.",
        "An outside power hits everything in the bracket: (3x²y³)² = 9x⁴y⁶.",
        "x⁰ = 1 and x⁻ⁿ = 1/xⁿ.",
      ],
      strategies: [
        "Try small cases: if a law feels doubtful, test it with x = 2 and small powers.",
        "Find a pattern: write powers out in full once — after that the law is obvious, not memorised.",
      ],
      whyItWorks:
        "Every index law follows from counting factors. (x³)⁴ means x³ used 4 times: (x·x·x)(x·x·x)(x·x·x)(x·x·x) — that is 3 × 4 = 12 x's, so the indices multiply. The x⁰ = 1 rule keeps the division law consistent: x³ ÷ x³ must equal both x⁰ and 1.",
      thinkDeeper:
        "Why must x^(1/2) mean √x? By the multiply law, x^(1/2) × x^(1/2) = x¹ = x. So x^(1/2) is a number that multiplies by itself to give x — that is exactly the square root. Fractional indices are forced on us by the laws, not invented separately.",
    },
    {
      heading: "Expanding brackets",
      body:
        "**Single brackets**: multiply every term inside by the term outside. 2x(3x - 4y) = 6x² - 8xy. Watch signs: -3(x - 4) = -3x + 12.\n\n**Double brackets**: every term in the first bracket multiplies every term in the second — four products for (x + 3)(x - 5):\n\n- x·x + x·(-5) + 3·x + 3·(-5) = x² - 5x + 3x - 15 = x² - 2x - 15\n\n**Special expansions** worth knowing by heart:\n\n- (a + b)² = a² + 2ab + b²\n- (a - b)² = a² - 2ab + b²\n- (a + b)(a - b) = a² - b²\n\n**Triple brackets**: expand two brackets first, then multiply the result by the third. For (x + 2)(x + 3)(x - 1): first (x + 2)(x + 3) = x² + 5x + 6, then (x² + 5x + 6)(x - 1) = x³ + 4x² + x - 6.",
      discovery: {
        problem:
          "Most students guess that (a + b)² = a² + b². Test it: let a = 3 and b = 4. Is (3 + 4)² the same as 3² + 4²? Now draw a square with side a + b, split each side into a piece of length a and a piece of length b. What regions do you see inside?",
        idea:
          "(3 + 4)² = 49 but 3² + 4² = 25 — they differ by 24, which is 2 × 3 × 4. The big square contains an a² square, a b² square AND two a-by-b rectangles: (a + b)² = a² + 2ab + b². The 2ab is the pair of rectangles that the wrong formula forgets.",
      },
      diagrams: [
        {
          id: "alg-diag-01",
          title: "Why (a + b)² = a² + 2ab + b²",
          svg: `<svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square of side a plus b divided into four regions: a large square of area a squared, two rectangles each of area a b, and a small square of area b squared"><rect x="60" y="60" width="300" height="300" fill="none" stroke="#64748b" stroke-width="2"/><rect x="60" y="60" width="200" height="200" fill="#2563eb" fill-opacity="0.18" stroke="#2563eb" stroke-width="2"/><rect x="260" y="60" width="100" height="200" fill="#16a34a" fill-opacity="0.18" stroke="#16a34a" stroke-width="2"/><rect x="60" y="260" width="200" height="100" fill="#16a34a" fill-opacity="0.18" stroke="#16a34a" stroke-width="2"/><rect x="260" y="260" width="100" height="100" fill="#dc2626" fill-opacity="0.18" stroke="#dc2626" stroke-width="2"/><text x="160" y="166" font-size="24" fill="#2563eb" text-anchor="middle" font-family="sans-serif">a&#178;</text><text x="310" y="166" font-size="22" fill="#16a34a" text-anchor="middle" font-family="sans-serif">ab</text><text x="160" y="316" font-size="22" fill="#16a34a" text-anchor="middle" font-family="sans-serif">ab</text><text x="310" y="316" font-size="22" fill="#dc2626" text-anchor="middle" font-family="sans-serif">b&#178;</text><text x="160" y="44" font-size="18" fill="#64748b" text-anchor="middle" font-family="sans-serif">a</text><text x="310" y="44" font-size="18" fill="#64748b" text-anchor="middle" font-family="sans-serif">b</text><text x="40" y="166" font-size="18" fill="#64748b" text-anchor="middle" font-family="sans-serif">a</text><text x="40" y="316" font-size="18" fill="#64748b" text-anchor="middle" font-family="sans-serif">b</text><text x="210" y="398" font-size="18" fill="#64748b" text-anchor="middle" font-family="sans-serif">(a + b)&#178; = a&#178; + 2ab + b&#178;</text></svg>`,
          caption:
            "The square of side (a + b) splits into a², two ab rectangles and b² — the two green rectangles are the 2ab that the tempting-but-wrong formula a² + b² leaves out.",
        },
      ],
      keyPoints: [
        "Double brackets: four products (each term times each term), then collect the middle pair.",
        "(a + b)² = a² + 2ab + b² — never a² + b². The 2ab term is two real rectangles of area.",
        "(a + b)(a - b) = a² - b²: the middle terms cancel.",
        "Triple brackets: expand two, tidy up, then multiply by the third. Expect 4 terms in a cubic answer.",
      ],
      strategies: [
        "Draw a diagram: an area grid makes every product visible and catches missed terms.",
        "Check with a small case: substitute x = 1 into the question and your expansion — the values must match.",
      ],
      whyItWorks:
        "Expanding is the distributive law applied twice. (x + 3)(x - 5) treats (x + 3) as a single object: (x + 3)(x - 5) = (x + 3)·x + (x + 3)·(-5) = x² + 3x - 5x - 15. The grid method is exactly this, drawn as areas.",
      thinkDeeper:
        "Expand (a + b)³ by multiplying (a + b)² by (a + b). You get a³ + 3a²b + 3ab² + b³ — coefficients 1, 3, 3, 1. Now expand (a + b)⁴. The coefficient patterns 1 2 1, then 1 3 3 1, then 1 4 6 4 1 are the rows of Pascal's triangle: each coefficient counts the number of ways to choose b's from the brackets.",
    },
    {
      heading: "Factorising",
      body:
        "Factorising is expanding in reverse: writing an expression as a product. Always take out the **highest common factor first**.\n\n- 6x²y - 9xy² = 3xy(2x - 3y)\n\n**Quadratics x² + bx + c**: find two numbers that multiply to c and add to b. For x² - 9x + 20: the numbers -4 and -5 work, so it factorises as (x - 4)(x - 5).\n\n**Quadratics ax² + bx + c** (a ≠ 1): find two numbers multiplying to ac and adding to b, then split the middle term and factorise in pairs. For 2x² + 7x + 3: ac = 6, and 6 + 1 = 7, so 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).\n\n**Difference of two squares**: a² - b² = (a - b)(a + b). So 4x² - 25 = (2x - 5)(2x + 5). There is no factorisation of a² + b² over the reals.\n\n'Factorise **fully**' means keep going: 2x³ - 18x = 2x(x² - 9) = 2x(x - 3)(x + 3).",
      discovery: {
        problem:
          "Work out 99 × 101 in your head — no column multiplication allowed. Then try 98 × 102. What structure are you secretly using?",
        idea:
          "99 × 101 = (100 - 1)(100 + 1) = 100² - 1² = 9999, and 98 × 102 = 100² - 4 = 9996. You used the difference of two squares backwards: a² - b² = (a - b)(a + b). Factorising is not just an algebra chore — it is a mental-arithmetic superpower.",
      },
      keyPoints: [
        "Common factor first, always — it makes any remaining quadratic easier.",
        "x² + bx + c: two numbers with product c, sum b. Signs of the numbers come from the signs of c and b.",
        "ax² + bx + c: two numbers with product ac and sum b; split the middle term and factorise in pairs.",
        "Spot a² - b² instantly: two squares separated by a minus sign, e.g. 4x² - 25 or x⁴ - 1.",
        "Check every factorisation by expanding it back.",
      ],
      strategies: [
        "Work backwards: factorising is 'un-expanding', so verify by expanding.",
        "Consider extremes of sign: if c is negative the two numbers have opposite signs; if c is positive they share the sign of b.",
      ],
      whyItWorks:
        "Expanding (x + p)(x + q) gives x² + (p + q)x + pq: the middle coefficient is the SUM of p and q and the constant is their PRODUCT. Factorising x² + bx + c just runs this identity in reverse, which is why we hunt for two numbers with sum b and product c.",
      thinkDeeper:
        "x⁴ - 1 factorises as (x² - 1)(x² + 1) = (x - 1)(x + 1)(x² + 1) — the difference of two squares can apply twice. Why does x² + 1 refuse to factorise with real numbers? Because x² + 1 ≥ 1 for every real x, so it has no real roots — a quadratic with no roots has no linear factors.",
    },
    {
      heading: "Algebraic fractions",
      body:
        "Algebraic fractions obey exactly the same rules as numeric ones. The golden rule: **factorise everything first**, then cancel whole factors (never individual terms).\n\n- (x² - 25)/(x² + 7x + 10) = (x - 5)(x + 5)/((x + 5)(x + 2)) = (x - 5)/(x + 2)\n\n**Multiply**: factorise, cancel across, multiply what is left.\n\n**Divide**: flip the second fraction and multiply — (A/B) ÷ (C/D) = (A/B) × (D/C).\n\n**Add and subtract**: build a common denominator, exactly as with 1/3 + 1/4:\n\n- 3/(x + 2) + 2/(x - 1) = (3(x - 1) + 2(x + 2))/((x + 2)(x - 1)) = (5x + 1)/((x + 2)(x - 1))\n\nWhen subtracting, bracket the whole second numerator before expanding — the minus sign must hit every term.",
      discovery: {
        problem:
          "A student 'simplifies' (x² + 5)/(x + 5) by crossing out the 5s to get x²/x = x. Test their claim with x = 1. What went wrong?",
        idea:
          "With x = 1 the original is 6/6 = 1 but their answer is 1 — looks fine! Try x = 2: original is 9/7, theirs is 2. The crossing-out is illegal because 5 is a TERM (added), not a FACTOR (multiplied). Only common factors of the whole top and whole bottom may be cancelled — which is why we factorise first.",
      },
      keyPoints: [
        "Factorise numerator and denominator completely before cancelling anything.",
        "Cancel only whole factors — never terms joined by + or -.",
        "To divide, multiply by the reciprocal of the second fraction.",
        "For + and -, use a common denominator; bracket subtracted numerators.",
      ],
      strategies: [
        "Try small cases: substitute a number to expose an illegal cancellation instantly.",
        "Work backwards: after simplifying, multiply out to check you recover the original.",
      ],
      whyItWorks:
        "Cancelling works because (kA)/(kB) = (k/k) × (A/B) = A/B — you are dividing top and bottom by the same non-zero factor. A term like the 5 in x² + 5 is glued in by addition, so there is no common factor to divide by; that is why terms cannot be crossed out.",
    },
    {
      heading: "Rearranging formulae",
      body:
        "To change the subject of a formula, undo the operations around the new subject one layer at a time, doing the same thing to both sides.\n\n- w = √(x + 5): square both sides, w² = x + 5, so x = w² - 5.\n- T = 2π√(L/g): divide by 2π, square, multiply by g: L = gT²/(4π²).\n\n**Subject appearing twice** — the four-step routine:\n\n- **Clear fractions** (multiply out any denominators)\n- **Expand** any brackets\n- **Gather** every term containing the new subject on one side, everything else on the other\n- **Factorise** the subject out, then divide\n\nExample: make x the subject of y = (2x + 3)/(x - 4).\n\ny(x - 4) = 2x + 3, so yx - 4y = 2x + 3, so yx - 2x = 4y + 3, so x(y - 2) = 4y + 3, giving x = (4y + 3)/(y - 2).",
      keyPoints: [
        "Undo operations in reverse order, like unwrapping layers: what was done last is undone first.",
        "Square roots are removed by squaring the WHOLE side, and vice versa.",
        "Subject twice: clear fractions, expand, gather subject terms on one side, factorise the subject out.",
        "If the subject is still in two places at the end, you are not finished.",
      ],
      strategies: [
        "Work backwards: list the operations built onto the subject, then undo them in reverse.",
        "Look for invariants: whatever you do must keep both sides equal — do it to the whole of each side.",
      ],
      whyItWorks:
        "The factorising step works because the distributive law lets us pack two subject-terms into one: yx - 2x = (y - 2)x. Once the subject appears exactly once, a single division frees it. Without factorising, no sequence of one-step inverses can merge the two copies of x.",
    },
    {
      heading: "Algebraic proof",
      body:
        "A demonstration with examples shows a claim is true sometimes; a **proof** shows it is true always. Algebra is the tool, because a letter n stands for every integer at once.\n\nStandard representations (learn these):\n\n- consecutive integers: n, n + 1, n + 2\n- an even number: 2n; an odd number: 2n + 1\n- consecutive even numbers: 2n, 2n + 2; consecutive odd numbers: 2n + 1, 2n + 3\n- a multiple of 3: 3n\n\nTo prove 'the sum of three consecutive integers is a multiple of 3': n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1), which is 3 times an integer. Done — for every choice of n that will ever be made.\n\nThe finishing move matters: to show something is a multiple of k, **factorise k out** and say the other factor is an integer. To show something is even, write it as 2 × (integer); to show it is odd, write it as 2 × (integer) + 1.",
      discovery: {
        problem:
          "Pick any three consecutive numbers and add them. Try 4 + 5 + 6, then 20 + 21 + 22, then three of your own. What do you notice about every answer? Now: does checking five examples PROVE it always happens?",
        idea:
          "Every sum is a multiple of 3 (in fact, 3 times the middle number: 15 = 3 × 5, 63 = 3 × 21). Examples suggest, but only algebra proves: writing the numbers as n, n + 1, n + 2 gives sum 3(n + 1) — a multiple of 3 for every integer n, including the infinitely many you did not test.",
      },
      keyPoints: [
        "Examples are evidence, not proof. One letter n covers infinitely many cases.",
        "Even = 2n, odd = 2n + 1. Two DIFFERENT odd numbers need different letters: 2m + 1 and 2n + 1.",
        "To prove 'multiple of k': expand, simplify, then factorise k out explicitly.",
        "End with a sentence: 'this is 3 × (an integer), so it is a multiple of 3'.",
      ],
      strategies: [
        "Introduce a variable: translate 'any odd number' into 2n + 1 before doing anything else.",
        "Exploit symmetry: calling three consecutive integers m - 1, m, m + 1 often makes sums collapse instantly.",
        "Try small cases first to discover WHAT to prove, then use algebra to prove it.",
      ],
      whyItWorks:
        "A statement about 'any integer' has infinitely many cases, so no amount of checking finishes the job. Algebra works because the manipulation n + (n + 1) + (n + 2) = 3(n + 1) is valid whatever number n is — one calculation stands in for infinitely many.",
      thinkDeeper:
        "Consecutive integers n and n + 1 always contain one even number, so n(n + 1) is always even. That single fact powers many proofs: for example (2n + 1)² - 1 = 4n² + 4n = 4n(n + 1), which is 4 × (even) — so the square of any odd number is 1 more than a multiple of 8. Chains of small facts build big theorems.",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "When are two terms 'like terms'?",
        back: "When they have exactly the same letters raised to exactly the same powers, e.g. 3x²y and -7x²y. Only like terms can be collected.",
      },
      {
        front: "Index law for xᵃ × xᵇ and xᵃ ÷ xᵇ",
        back: "Multiply: add the indices, x^(a+b). Divide: subtract the indices, x^(a-b). Same base only.",
      },
      {
        front: "Index law for (xᵃ)ᵇ",
        back: "Multiply the indices: x^(ab). E.g. (x³)⁴ = x¹². With a coefficient the power hits it too: (2x³)⁴ = 16x¹².",
      },
      {
        front: "Expand (a + b)²",
        back: "a² + 2ab + b². NOT a² + b² — the area picture shows two extra ab rectangles.",
      },
      {
        front: "Expand (a + b)(a - b)",
        back: "a² - b² (difference of two squares). The +ab and -ab middle terms cancel.",
      },
      {
        front: "How do you factorise x² + bx + c?",
        back: "Find two numbers with product c and sum b; they go straight into (x + …)(x + …). E.g. x² - 9x + 20 = (x - 4)(x - 5).",
      },
      {
        front: "How do you factorise ax² + bx + c (a ≠ 1)?",
        back: "Find two numbers with product ac and sum b, split the middle term, factorise in pairs. E.g. 2x² + 7x + 3 = (2x + 1)(x + 3).",
      },
      {
        front: "Factorise a² - b², and what does 'factorise fully' mean?",
        back: "a² - b² = (a - b)(a + b). 'Fully' means keep going: take common factors first and factorise every factorisable piece, e.g. 2x³ - 18x = 2x(x - 3)(x + 3).",
      },
      {
        front: "Rule for cancelling in algebraic fractions",
        back: "Factorise top and bottom completely, then cancel whole FACTORS only. Never cross out terms joined by + or -.",
      },
      {
        front: "How do you divide one algebraic fraction by another?",
        back: "Flip the second fraction and multiply: (A/B) ÷ (C/D) = (A/B) × (D/C). Factorise and cancel before multiplying.",
      },
      {
        front: "The 4-step routine when the subject appears twice",
        back: "1 Clear fractions. 2 Expand brackets. 3 Gather all subject terms on one side. 4 Factorise the subject out and divide.",
      },
      {
        front: "Algebraic forms for even, odd and consecutive numbers",
        back: "Even: 2n. Odd: 2n + 1. Consecutive integers: n, n + 1, n + 2. Consecutive odds: 2n + 1, 2n + 3. Two unrelated odds: 2m + 1 and 2n + 1.",
      },
      {
        front: "How do you finish a proof that an expression is a multiple of 3?",
        back: "Factorise the 3 out: show the expression equals 3 × (an integer), e.g. 3n + 3 = 3(n + 1), then say so in words.",
      },
    ],
    keyFacts: [
      "Only like terms (same letters, same powers) can be collected.",
      "Index laws: x^a × x^b = x^(a+b); x^a ÷ x^b = x^(a-b); (x^a)^b = x^(ab); x⁰ = 1; x⁻ⁿ = 1/xⁿ.",
      "(a + b)² = a² + 2ab + b² and (a - b)² = a² - 2ab + b² — the middle term is doubled.",
      "a² - b² = (a - b)(a + b); a² + b² does not factorise with real numbers.",
      "Always take out the highest common factor before any other factorising.",
      "In algebraic fractions, cancel whole factors only — factorise first.",
      "Subtracting fractions: bracket the whole second numerator so the minus reaches every term.",
      "Subject appearing twice: gather, then FACTORISE the subject out — that is the step that merges the copies.",
      "Proof: n(n + 1), the product of consecutive integers, is always even — a workhorse fact.",
      "Examples never prove a statement about all integers; algebra with a general n does.",
    ],
    formulaSheet: [
      {
        name: "Index laws",
        formula: "x^a × x^b = x^(a+b);  x^a ÷ x^b = x^(a-b);  (x^a)^b = x^(ab)",
        note: "Same base throughout. Also x⁰ = 1 and x⁻ⁿ = 1/xⁿ.",
      },
      {
        name: "Square of a sum / difference",
        formula: "(a + b)² = a² + 2ab + b²;  (a - b)² = a² - 2ab + b²",
        note: "Never forget the 2ab middle term.",
      },
      {
        name: "Difference of two squares",
        formula: "a² - b² = (a - b)(a + b)",
        note: "Works both ways: factorising, and fast arithmetic like 99 × 101 = 100² - 1.",
      },
      {
        name: "Factorising x² + bx + c",
        formula: "x² + bx + c = (x + p)(x + q) where p + q = b and pq = c",
      },
      {
        name: "Proof representations",
        formula: "even = 2n;  odd = 2n + 1;  consecutive = n, n + 1, n + 2;  multiple of 3 = 3n",
        note: "Use different letters (m, n) for numbers that need not be related.",
      },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "alg-quiz-mcq-01",
        question: "Simplify 3a + 5b - a + 2b.",
        options: ["2a + 7b", "4a + 7b", "2a + 3b", "9ab"],
        answerIndex: 0,
        explanation:
          "Collect like terms: 3a - a = 2a and 5b + 2b = 7b, giving 2a + 7b. Choosing 4a + 7b ignores the minus sign on a; 9ab wrongly merges unlike terms.",
        guideRef: "Collecting like terms and simplifying",
        difficulty: "warmup",
      },
      {
        id: "alg-quiz-mcq-02",
        question: "Simplify 4x² × 3x⁵.",
        options: ["12x⁷", "7x⁷", "12x¹⁰", "7x¹⁰"],
        answerIndex: 0,
        explanation:
          "Multiply the coefficients (4 × 3 = 12) and ADD the indices (2 + 5 = 7): 12x⁷. Adding the coefficients gives the wrong 7; multiplying the indices gives the wrong x¹⁰.",
        guideRef: "Index laws with algebra",
        difficulty: "warmup",
      },
      {
        id: "alg-quiz-mcq-03",
        question: "Expand and simplify (x + 3)(x - 5).",
        options: ["x² - 2x - 15", "x² + 2x - 15", "x² - 15", "x² - 8x - 15"],
        answerIndex: 0,
        explanation:
          "Four products: x² - 5x + 3x - 15 = x² - 2x - 15. The middle terms are -5x + 3x = -2x, not +2x; forgetting them entirely gives the wrong x² - 15.",
        guideRef: "Expanding brackets",
        difficulty: "core",
        hints: [
          "Every term in the first bracket multiplies every term in the second — expect four products.",
          "The four products are x·x, x·(-5), 3·x and 3·(-5).",
          "Combine the two middle terms: -5x + 3x.",
        ],
        strategy: "Use a grid to organise the four products",
      },
      {
        id: "alg-quiz-mcq-04",
        question: "Factorise x² - 9x + 20.",
        options: ["(x - 4)(x - 5)", "(x + 4)(x + 5)", "(x - 4)(x + 5)", "(x - 2)(x - 10)"],
        answerIndex: 0,
        explanation:
          "We need two numbers with product +20 and sum -9: they are -4 and -5, so (x - 4)(x - 5). The pair -2 and -10 has product 20 but sum -12, so (x - 2)(x - 10) fails; the + sign versions give +9x.",
        guideRef: "Factorising",
        difficulty: "core",
        hints: [
          "Look for two numbers whose product is +20 and whose sum is -9.",
          "The product is positive but the sum negative — both numbers must be negative.",
          "Check the negative factor pairs of 20: which pair adds to -9?",
        ],
        strategy: "Work backwards from the expansion identity",
      },
      {
        id: "alg-quiz-mcq-05",
        question: "Factorise fully 6x²y - 9xy².",
        options: ["3xy(2x - 3y)", "3(2x²y - 3xy²)", "xy(6x - 9y)", "3xy(2x - 3)"],
        answerIndex: 0,
        explanation:
          "The highest common factor of 6x²y and 9xy² is 3xy, leaving 3xy(2x - 3y). The other options take out only part of the HCF (or drop the y), so they are not FULLY factorised — expand 3xy(2x - 3) and you get 6x²y - 9xy, not 6x²y - 9xy².",
        guideRef: "Factorising",
        difficulty: "core",
        hints: [
          "Find the highest common factor of the numbers AND of each letter.",
          "Both terms contain 3, at least one x and at least one y.",
          "Divide each term by 3xy to see what stays inside the bracket.",
        ],
        strategy: "Common factor first",
      },
      {
        id: "alg-quiz-mcq-06",
        question: "Simplify (2x³)⁴.",
        options: ["16x¹²", "8x¹²", "16x⁷", "2x¹²"],
        answerIndex: 0,
        explanation:
          "The outside power hits everything: 2⁴ × (x³)⁴ = 16x¹². Forgetting to raise the 2 gives 2x¹² or 8x¹² (2³); adding indices instead of multiplying gives x⁷.",
        guideRef: "Index laws with algebra",
        difficulty: "core",
        hints: [
          "The power of 4 applies to the 2 as well as the x³.",
          "Deal with the number and the letter separately: 2⁴ and (x³)⁴.",
          "Power of a power: multiply the indices.",
        ],
        strategy: "Apply the outside power to every factor",
      },
      {
        id: "alg-quiz-mcq-07",
        question: "Simplify fully (x² - 25)/(x² + 7x + 10).",
        options: ["(x - 5)/(x + 2)", "(x + 5)/(x + 2)", "-25/(7x + 10)", "(x - 5)/(x + 5)"],
        answerIndex: 0,
        explanation:
          "Factorise: x² - 25 = (x - 5)(x + 5) and x² + 7x + 10 = (x + 5)(x + 2). The (x + 5) factors cancel, leaving (x - 5)/(x + 2). Crossing out the x² terms (giving -25/(7x + 10)) is the classic illegal term-cancel.",
        guideRef: "Algebraic fractions",
        difficulty: "core",
        hints: [
          "Factorise the top and the bottom before cancelling anything.",
          "The numerator is a difference of two squares.",
          "For the denominator, find two numbers with product 10 and sum 7.",
        ],
        strategy: "Factorise first, then cancel whole factors",
      },
      {
        id: "alg-quiz-mcq-08",
        question: "Make x the subject of y = (3x + 2)/(x - 1).",
        options: [
          "x = (y + 2)/(y - 3)",
          "x = (y - 2)/(y + 3)",
          "x = (y + 2)/(3 - y)",
          "x = (y - 1)/(3x + 2)",
        ],
        answerIndex: 0,
        explanation:
          "Multiply up: y(x - 1) = 3x + 2, so yx - y = 3x + 2. Gather x terms: yx - 3x = y + 2, factorise: x(y - 3) = y + 2, so x = (y + 2)/(y - 3). Sign slips in the gathering step produce the other options — and any 'answer' still containing x cannot be a subject.",
        guideRef: "Rearranging formulae",
        difficulty: "core",
        hints: [
          "Start by multiplying both sides by (x - 1) to clear the fraction.",
          "Expand, then move every term containing x to one side and everything else to the other.",
          "Factorise x out of the two x-terms, then divide.",
        ],
        strategy: "Clear, expand, gather, factorise",
      },
      {
        id: "alg-quiz-mcq-09",
        question: "Factorise 2x² + 7x + 3.",
        options: ["(2x + 1)(x + 3)", "(2x + 3)(x + 1)", "(2x - 1)(x - 3)", "(x + 1)(x + 6)"],
        answerIndex: 0,
        explanation:
          "ac = 6 and b = 7, so split 7x as 6x + x: 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3). Check by expanding: 2x² + 6x + x + 3 ✓. (2x + 3)(x + 1) expands to 2x² + 5x + 3 — the wrong middle term.",
        guideRef: "Factorising",
        difficulty: "core",
        hints: [
          "Find two numbers with product ac = 2 × 3 = 6 and sum 7.",
          "Split the middle term 7x using those two numbers, then factorise in pairs.",
          "Alternatively, expand each option and compare middle terms.",
        ],
        strategy: "Split the middle term (or test options by expanding)",
      },
      {
        id: "alg-quiz-mcq-10",
        question: "n is a positive integer. Which expression is odd for EVERY value of n?",
        options: ["n² + n + 1", "n² + n", "2n + 2", "3n"],
        answerIndex: 0,
        explanation:
          "n² + n = n(n + 1) is a product of consecutive integers, so it is always even; adding 1 makes n² + n + 1 always odd. n² + n itself is always even, 2n + 2 is always even, and 3n alternates (odd for n = 1, even for n = 2).",
        guideRef: "Algebraic proof",
        difficulty: "challenge",
        hints: [
          "Test each expression with n = 1 and n = 2 to eliminate options quickly.",
          "Factorise n² + n. What kind of numbers are n and n + 1?",
          "A product of two consecutive integers always includes one even number.",
        ],
        strategy: "Odd/even argument via consecutive integers",
      },
    ],
    qa: [
      {
        id: "alg-quiz-qa-01",
        question: "Expand and simplify 3(2x - 1) - 2(x - 4).",
        modelAnswer:
          "3(2x - 1) = 6x - 3 and -2(x - 4) = -2x + 8.\nSo 3(2x - 1) - 2(x - 4) = 6x - 3 - 2x + 8 = 4x + 5.",
        markScheme: ["4x + 5", "6x - 3", "-2x + 8", "collect like terms"],
        commonError:
          "Writing -2(x - 4) as -2x - 8: the -2 must multiply the -4 as well, giving +8.",
        guideRef: "Collecting like terms and simplifying",
        difficulty: "warmup",
      },
      {
        id: "alg-quiz-qa-02",
        question: "Expand and simplify (2x - 3)(x + 4).",
        modelAnswer:
          "Four products: 2x·x + 2x·4 + (-3)·x + (-3)·4 = 2x² + 8x - 3x - 12.\nCollect the middle terms: 2x² + 5x - 12.",
        markScheme: ["2x² + 5x - 12", "2x²", "8x - 3x", "four products"],
        commonError:
          "Only multiplying the first terms and last terms (2x² - 12) and forgetting the two middle products 8x and -3x.",
        guideRef: "Expanding brackets",
        difficulty: "core",
        hints: [
          "Each of the two terms in the first bracket multiplies each of the two in the second.",
          "Write all four products before simplifying.",
          "Combine +8x and -3x.",
        ],
        strategy: "Grid method",
      },
      {
        id: "alg-quiz-qa-03",
        question: "Factorise fully 3x² - 12.",
        modelAnswer:
          "Common factor first: 3x² - 12 = 3(x² - 4).\nx² - 4 is a difference of two squares: x² - 4 = (x - 2)(x + 2).\nSo 3x² - 12 = 3(x - 2)(x + 2).",
        markScheme: ["3(x - 2)(x + 2)", "3(x² - 4)", "difference of two squares", "common factor"],
        commonError:
          "Stopping at 3(x² - 4). The word 'fully' signals that x² - 4 must also be factorised, as a difference of two squares.",
        guideRef: "Factorising",
        difficulty: "core",
        hints: [
          "Is there a common numerical factor in both terms?",
          "After taking out 3, look at what is left inside the bracket.",
          "x² - 4 is x² - 2² — which special pattern is that?",
        ],
        strategy: "Common factor first, then look for special patterns",
      },
      {
        id: "alg-quiz-qa-04",
        question: "Write x/3 + (x + 2)/4 as a single fraction in its simplest form.",
        modelAnswer:
          "The common denominator of 3 and 4 is 12.\nx/3 = 4x/12 and (x + 2)/4 = 3(x + 2)/12 = (3x + 6)/12.\nSo x/3 + (x + 2)/4 = (4x + 3x + 6)/12 = (7x + 6)/12.",
        markScheme: ["(7x + 6)/12", "common denominator", "12", "4x + 3x + 6"],
        commonError:
          "Adding tops and bottoms separately to get (2x + 2)/7 — fractions need a common denominator, exactly as 1/3 + 1/4 ≠ 2/7.",
        guideRef: "Algebraic fractions",
        difficulty: "core",
        hints: [
          "What is the lowest common denominator of 3 and 4?",
          "Rewrite each fraction with denominator 12 by multiplying top and bottom.",
          "Expand 3(x + 2) before adding the numerators.",
        ],
        strategy: "Common denominator, then combine numerators",
      },
      {
        id: "alg-quiz-qa-05",
        question: "Make q the subject of p = (2q + 3)/(q - 1).",
        modelAnswer:
          "Multiply both sides by (q - 1): p(q - 1) = 2q + 3.\nExpand: pq - p = 2q + 3.\nGather q terms on the left: pq - 2q = p + 3.\nFactorise: q(p - 2) = p + 3.\nDivide: q = (p + 3)/(p - 2).",
        markScheme: ["q = (p + 3)/(p - 2)", "p(q - 1)", "factorise", "pq - 2q"],
        commonError:
          "Trying to move terms one at a time without factorising: because q appears twice, you must gather both q-terms and take q out as a common factor.",
        guideRef: "Rearranging formulae",
        difficulty: "core",
        hints: [
          "Clear the fraction first: multiply both sides by (q - 1).",
          "Put every term containing q on one side, everything else on the other.",
          "Take q out as a common factor, then divide by the bracket.",
        ],
        strategy: "Clear, expand, gather, factorise",
      },
      {
        id: "alg-quiz-qa-06",
        question:
          "Prove that the sum of the squares of any two consecutive odd numbers is 2 more than a multiple of 8.",
        modelAnswer:
          "Let the consecutive odd numbers be 2n + 1 and 2n + 3, where n is an integer.\n(2n + 1)² + (2n + 3)² = 4n² + 4n + 1 + 4n² + 12n + 9 = 8n² + 16n + 10.\nFactorise 8 from the first part: 8n² + 16n + 10 = 8(n² + 2n + 1) + 2.\nSince n² + 2n + 1 is an integer, the sum is 8 × (an integer) + 2, i.e. 2 more than a multiple of 8. ∎",
        markScheme: ["8(n² + 2n + 1) + 2", "2n + 1", "2n + 3", "8n² + 16n + 10", "multiple of 8"],
        commonError:
          "Using 2n + 1 and 2n + 2 as 'consecutive odd numbers' — 2n + 2 is even. Consecutive odd numbers differ by 2, so use 2n + 1 and 2n + 3.",
        guideRef: "Algebraic proof",
        difficulty: "challenge",
        hints: [
          "Write down algebraic forms for two consecutive odd numbers using one letter n.",
          "Square both, expand carefully, and collect like terms.",
          "You want the answer in the form 8 × (something) + 2 — factorise 8 out of as much as possible.",
        ],
        strategy: "Introduce a variable, then factorise out the 8",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "alg-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "alg-mcq-p1-q01",
            question: "Simplify 5p × 3q.",
            options: ["15pq", "8pq", "15p + q", "8(p + q)"],
            answerIndex: 0,
            explanation:
              "Multiply the numbers (5 × 3 = 15) and write the letters together: 15pq. Adding the coefficients (8pq) confuses multiplying with adding.",
            guideRef: "Collecting like terms and simplifying",
            difficulty: "warmup",
          },
          {
            id: "alg-mcq-p1-q02",
            question: "Simplify x⁸ ÷ x².",
            options: ["x⁶", "x⁴", "x¹⁰", "1/x⁴"],
            answerIndex: 0,
            explanation:
              "Dividing powers of the same base: subtract the indices, 8 - 2 = 6, so x⁶. Dividing the indices gives the wrong x⁴; adding them gives x¹⁰.",
            guideRef: "Index laws with algebra",
            difficulty: "warmup",
          },
          {
            id: "alg-mcq-p1-q03",
            question: "Expand 2x(3x - 4y).",
            options: ["6x² - 8xy", "6x² - 4y", "6x - 8xy", "6x² + 8xy"],
            answerIndex: 0,
            explanation:
              "2x multiplies BOTH terms: 2x × 3x = 6x² and 2x × (-4y) = -8xy, so 6x² - 8xy. Forgetting to multiply the second term by 2x gives 6x² - 4y.",
            guideRef: "Expanding brackets",
            difficulty: "core",
            hints: [
              "The 2x outside must multiply every term inside the bracket.",
              "2x × 3x needs both the numbers and the x's multiplied.",
              "Keep the minus sign with the 4y term.",
            ],
            strategy: "Distribute to every term",
          },
          {
            id: "alg-mcq-p1-q04",
            question: "Simplify (3x²y³)².",
            options: ["9x⁴y⁶", "3x⁴y⁶", "9x⁴y⁵", "6x⁴y⁶"],
            answerIndex: 0,
            explanation:
              "Square every factor: 3² = 9, (x²)² = x⁴, (y³)² = y⁶, giving 9x⁴y⁶. Leaving the 3 unsquared gives 3x⁴y⁶; doubling it gives 6x⁴y⁶; adding indices on y gives y⁵.",
            guideRef: "Index laws with algebra",
            difficulty: "core",
            hints: [
              "The square applies to the 3, the x² and the y³ separately.",
              "Power of a power: multiply the indices.",
              "Do not forget to square the coefficient 3.",
            ],
            strategy: "Apply the outside power to every factor",
          },
          {
            id: "alg-mcq-p1-q05",
            question: "Expand and simplify (x + 7)(x - 7).",
            options: ["x² - 49", "x² + 49", "x² - 14x - 49", "x² - 14x + 49"],
            answerIndex: 0,
            explanation:
              "This is (a + b)(a - b) = a² - b²: the middle terms -7x and +7x cancel, leaving x² - 49. Option x² - 14x + 49 is the expansion of (x - 7)², a different expression.",
            guideRef: "Expanding brackets",
            difficulty: "core",
            hints: [
              "Write out all four products and watch what happens to the x terms.",
              "-7x + 7x makes a very convenient sum.",
              "This is the difference of two squares pattern.",
            ],
            strategy: "Spot the special pattern",
          },
          {
            id: "alg-mcq-p1-q06",
            question: "Factorise x² + 3x - 28.",
            options: ["(x + 7)(x - 4)", "(x - 7)(x + 4)", "(x + 14)(x - 2)", "(x + 7)(x + 4)"],
            answerIndex: 0,
            explanation:
              "Two numbers with product -28 and sum +3: they are +7 and -4, so (x + 7)(x - 4). Swapping the signs gives sum -3; the pair 14 and -2 has sum +12; the pair +7, +4 has product +28, not -28.",
            guideRef: "Factorising",
            difficulty: "core",
            hints: [
              "You need product -28 and sum +3.",
              "A negative product means one number is positive and one negative.",
              "The bigger of the pair (ignoring sign) must be the positive one, since the sum is positive.",
            ],
            strategy: "Sign analysis before number hunting",
          },
          {
            id: "alg-mcq-p1-q07",
            question: "Which of these is the full factorisation of 4x² - 25?",
            options: ["(2x - 5)(2x + 5)", "(4x - 5)(x + 5)", "(2x - 5)²", "4(x - 5)(x + 5)"],
            answerIndex: 0,
            explanation:
              "4x² - 25 = (2x)² - 5², a difference of two squares, so it equals (2x - 5)(2x + 5). Check the others by expanding: (2x - 5)² = 4x² - 20x + 25, (4x - 5)(x + 5) = 4x² + 15x - 25, and 4(x - 5)(x + 5) = 4x² - 100.",
            guideRef: "Factorising",
            difficulty: "core",
            hints: [
              "Both 4x² and 25 are perfect squares.",
              "Write 4x² - 25 in the form (something)² - (something)².",
              "Apply a² - b² = (a - b)(a + b) with a = 2x, b = 5.",
            ],
            strategy: "Recognise the difference of two squares",
          },
          {
            id: "alg-mcq-p1-q08",
            question: "x is a positive number with x + 1/x = 5. What is the value of x² + 1/x²?",
            options: ["23", "25", "27", "24"],
            answerIndex: 0,
            explanation:
              "Square the given equation: (x + 1/x)² = x² + 2·x·(1/x) + 1/x² = x² + 2 + 1/x² = 25. Subtract 2: x² + 1/x² = 23. Choosing 25 forgets the cross term 2; there is no need to find x itself.",
            guideRef: "Expanding brackets",
            difficulty: "challenge",
            hints: [
              "Do not try to solve for x — work with the whole expression.",
              "What happens if you square both sides of x + 1/x = 5?",
              "Use (a + b)² = a² + 2ab + b², and notice that x × 1/x = 1.",
            ],
            strategy: "Square the expression — exploit the structure, not the value",
          },
        ],
      },
      {
        id: "alg-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "alg-mcq-p2-q01",
            question: "Simplify 7x - 3y - 2x + y.",
            options: ["5x - 2y", "5x - 4y", "9x - 2y", "5x + 2y"],
            answerIndex: 0,
            explanation:
              "7x - 2x = 5x and -3y + y = -2y, so 5x - 2y. Treating +y as -y gives -4y; ignoring the minus on 2x gives 9x.",
            guideRef: "Collecting like terms and simplifying",
            difficulty: "warmup",
          },
          {
            id: "alg-mcq-p2-q02",
            question: "Simplify t × t × t.",
            options: ["t³", "3t", "t + 3", "3t³"],
            answerIndex: 0,
            explanation:
              "Three copies of t multiplied together is t³. 3t means t + t + t (three copies ADDED) — the classic mix-up.",
            guideRef: "Index laws with algebra",
            difficulty: "warmup",
          },
          {
            id: "alg-mcq-p2-q03",
            question: "Expand (x - 3)².",
            options: ["x² - 6x + 9", "x² + 9", "x² - 9", "x² - 6x - 9"],
            answerIndex: 0,
            explanation:
              "(x - 3)² = (x - 3)(x - 3) = x² - 3x - 3x + 9 = x² - 6x + 9. x² + 9 forgets the middle term; x² - 9 is (x - 3)(x + 3); and (-3)² = +9, not -9.",
            guideRef: "Expanding brackets",
            difficulty: "core",
            hints: [
              "Write (x - 3)² as (x - 3)(x - 3) and expand fully.",
              "There are two middle terms — do not lose them.",
              "(-3) × (-3) is positive.",
            ],
            strategy: "Never square term-by-term",
          },
          {
            id: "alg-mcq-p2-q04",
            question: "Simplify 12x⁵y² ÷ 4x²y.",
            options: ["3x³y", "3x³y²", "8x³y", "3x²y"],
            answerIndex: 0,
            explanation:
              "Divide coefficients: 12 ÷ 4 = 3. Subtract indices: x⁵⁻² = x³ and y²⁻¹ = y¹. Result: 3x³y. Forgetting to divide the y's gives 3x³y²; subtracting coefficients gives 8x³y.",
            guideRef: "Index laws with algebra",
            difficulty: "core",
            hints: [
              "Handle the numbers, the x's and the y's separately.",
              "Dividing powers: subtract the indices.",
              "y means y¹, so y² ÷ y = y.",
            ],
            strategy: "Split into number part and letter parts",
          },
          {
            id: "alg-mcq-p2-q05",
            question: "Factorise 3x² + 10x - 8.",
            options: ["(3x - 2)(x + 4)", "(3x + 2)(x - 4)", "(3x - 4)(x + 2)", "(3x + 8)(x - 1)"],
            answerIndex: 0,
            explanation:
              "ac = -24 and b = 10; the numbers +12 and -2 work. Split: 3x² + 12x - 2x - 8 = 3x(x + 4) - 2(x + 4) = (3x - 2)(x + 4). Check: 3x² + 12x - 2x - 8 = 3x² + 10x - 8 ✓. (3x + 2)(x - 4) gives -10x; (3x - 4)(x + 2) gives +2x.",
            guideRef: "Factorising",
            difficulty: "core",
            hints: [
              "Find two numbers with product ac = 3 × (-8) = -24 and sum +10.",
              "Try +12 and -2.",
              "Split the middle term and factorise the two halves in pairs — or expand each option.",
            ],
            strategy: "Split the middle term",
          },
          {
            id: "alg-mcq-p2-q06",
            question: "Simplify fully (x² + 5x)/(x² - 25).",
            options: ["x/(x - 5)", "x/(x + 5)", "(x + 5)/(x - 5)", "1/(x - 5)"],
            answerIndex: 0,
            explanation:
              "Factorise: x² + 5x = x(x + 5) and x² - 25 = (x + 5)(x - 5). Cancel the common factor (x + 5): x/(x - 5). Cancelling the wrong bracket gives x/(x + 5); crossing out terms rather than factors leads to the other traps.",
            guideRef: "Algebraic fractions",
            difficulty: "core",
            hints: [
              "Factorise the numerator — there is a common factor of x.",
              "The denominator is a difference of two squares.",
              "Cancel the bracket that appears in BOTH top and bottom.",
            ],
            strategy: "Factorise first, then cancel whole factors",
          },
          {
            id: "alg-mcq-p2-q07",
            question: "Make r the subject of A = πr², where r is positive.",
            options: ["r = √(A/π)", "r = A/(2π)", "r = (√A)/π", "r = √A - π"],
            answerIndex: 0,
            explanation:
              "Divide both sides by π: r² = A/π, then square-root: r = √(A/π). The square root must be taken of the WHOLE side, so (√A)/π is wrong; A/(2π) confuses squaring with doubling.",
            guideRef: "Rearranging formulae",
            difficulty: "core",
            hints: [
              "Undo the operations on r in reverse order.",
              "First remove the π by dividing, then deal with the square.",
              "The square root applies to everything on that side.",
            ],
            strategy: "Work backwards through the operations",
          },
          {
            id: "alg-mcq-p2-q08",
            question: "n is a positive integer. Simplify fully (2^(n+3) - 2^(n+1))/2^n.",
            options: ["6", "2³", "4", "2^(n+2)"],
            answerIndex: 0,
            explanation:
              "Split the fraction: 2^(n+3)/2^n - 2^(n+1)/2^n = 2³ - 2¹ = 8 - 2 = 6. (Or factorise the top as 2^n(2³ - 2) = 6 × 2^n and cancel.) Checking n = 1: (16 - 4)/2 = 6 ✓. The answer 2³ = 8 forgets to subtract the 2.",
            guideRef: "Index laws with algebra",
            difficulty: "challenge",
            hints: [
              "Try a small case first: put n = 1 and evaluate the whole thing.",
              "Divide each term on top by 2^n separately, subtracting indices.",
              "Alternatively factorise 2^n out of the numerator first.",
            ],
            strategy: "Try small cases, then confirm with the index laws",
          },
        ],
      },
      {
        id: "alg-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "alg-mcq-p3-q01",
            question: "Expand 5(2a + 3).",
            options: ["10a + 15", "10a + 3", "7a + 8", "10a + 8"],
            answerIndex: 0,
            explanation:
              "The 5 multiplies both terms: 5 × 2a = 10a and 5 × 3 = 15. Forgetting the second multiplication gives 10a + 3.",
            guideRef: "Expanding brackets",
            difficulty: "warmup",
          },
          {
            id: "alg-mcq-p3-q02",
            question: "Simplify m⁵ × m⁻².",
            options: ["m³", "m⁻¹⁰", "m⁷", "1/m³"],
            answerIndex: 0,
            explanation:
              "Add the indices: 5 + (-2) = 3, so m³. Multiplying the indices gives -10; ignoring the minus gives m⁷.",
            guideRef: "Index laws with algebra",
            difficulty: "warmup",
          },
          {
            id: "alg-mcq-p3-q03",
            question: "Expand and simplify (x + 2)(x + 3)(x - 1).",
            options: [
              "x³ + 4x² + x - 6",
              "x³ + 4x² - x - 6",
              "x³ + 6x² + x - 6",
              "x³ + 4x² + x + 6",
            ],
            answerIndex: 0,
            explanation:
              "First (x + 2)(x + 3) = x² + 5x + 6. Then (x² + 5x + 6)(x - 1) = x³ - x² + 5x² - 5x + 6x - 6 = x³ + 4x² + x - 6. Check with x = 1: (3)(4)(0) = 0, and 1 + 4 + 1 - 6 = 0 ✓ — the other options give non-zero values at x = 1.",
            guideRef: "Expanding brackets",
            difficulty: "core",
            hints: [
              "Expand two of the brackets first and tidy up.",
              "Multiply the resulting quadratic by the third bracket, term by term — six products.",
              "Sanity-check by substituting x = 1 into the original and your answer.",
            ],
            strategy: "Two at a time, then check with a small case",
          },
          {
            id: "alg-mcq-p3-q04",
            question: "Write (x + 1)/3 + (x - 2)/4 as a single fraction.",
            options: ["(7x - 2)/12", "(7x + 2)/12", "(2x - 1)/7", "(7x - 5)/12"],
            answerIndex: 0,
            explanation:
              "Over 12: 4(x + 1)/12 + 3(x - 2)/12 = (4x + 4 + 3x - 6)/12 = (7x - 2)/12. Adding tops and bottoms directly gives the wrong (2x - 1)/7; sign slips on 3(x - 2) give the other traps.",
            guideRef: "Algebraic fractions",
            difficulty: "core",
            hints: [
              "The common denominator of 3 and 4 is 12.",
              "Multiply each numerator by the right factor: 4 and 3 respectively.",
              "Expand both numerators before combining: 4x + 4 and 3x - 6.",
            ],
            strategy: "Common denominator, then combine numerators",
          },
          {
            id: "alg-mcq-p3-q05",
            question: "Factorise fully 2x³ - 18x.",
            options: [
              "2x(x - 3)(x + 3)",
              "2x(x² - 9)",
              "2(x³ - 9x)",
              "x(2x - 6)(x + 3)",
            ],
            answerIndex: 0,
            explanation:
              "Common factor 2x first: 2x(x² - 9). Then x² - 9 = (x - 3)(x + 3), so the FULL factorisation is 2x(x - 3)(x + 3). Options 2x(x² - 9) and 2(x³ - 9x) stop too early; x(2x - 6)(x + 3) hides a factor of 2 inside a bracket.",
            guideRef: "Factorising",
            difficulty: "core",
            hints: [
              "Both terms share a number AND a letter — take the whole common factor out.",
              "Look at what remains in the bracket: is it a special pattern?",
              "'Fully' means no factor can be broken down further.",
            ],
            strategy: "Common factor first, then difference of two squares",
          },
          {
            id: "alg-mcq-p3-q06",
            question: "Make x the subject of w = √(x + 5).",
            options: ["x = w² - 5", "x = w² + 5", "x = √w - 5", "x = (w - 5)²"],
            answerIndex: 0,
            explanation:
              "Square both sides: w² = x + 5, then subtract 5: x = w² - 5. Squaring after moving the 5, as in (w - 5)², undoes the operations in the wrong order.",
            guideRef: "Rearranging formulae",
            difficulty: "core",
            hints: [
              "What operation removes a square root?",
              "Square the WHOLE of each side first.",
              "Then isolate x with one more step.",
            ],
            strategy: "Undo the outermost operation first",
          },
          {
            id: "alg-mcq-p3-q07",
            question: "Simplify fully ((x + 3)/4) × (8/(x² - 9)).",
            options: ["2/(x - 3)", "2/(x + 3)", "2(x + 3)/(x - 3)", "8(x + 3)/(4x² - 36)"],
            answerIndex: 0,
            explanation:
              "Factorise x² - 9 = (x - 3)(x + 3). The product is 8(x + 3)/(4(x - 3)(x + 3)); cancel (x + 3) and the 8/4 = 2 to get 2/(x - 3). Cancelling the wrong bracket gives 2/(x + 3); the last option is unsimplified.",
            guideRef: "Algebraic fractions",
            difficulty: "core",
            hints: [
              "Factorise x² - 9 before multiplying anything.",
              "Multiply the numerators and the denominators, keeping everything factorised.",
              "Cancel the common bracket and simplify 8/4.",
            ],
            strategy: "Factorise before multiplying",
          },
          {
            id: "alg-mcq-p3-q08",
            question: "n is an integer. Which expression is a multiple of 4 for EVERY value of n?",
            options: ["(2n + 1)² - 1", "n² + n", "4n + 2", "n² + 4"],
            answerIndex: 0,
            explanation:
              "(2n + 1)² - 1 = 4n² + 4n = 4n(n + 1) = 4 × (an integer), so it is always a multiple of 4 (in fact of 8, since n(n + 1) is even). n² + n fails at n = 1 (gives 2), 4n + 2 is never a multiple of 4, and n² + 4 fails at n = 1 (gives 5).",
            guideRef: "Algebraic proof",
            difficulty: "challenge",
            hints: [
              "Try n = 1 in every option to eliminate quickly.",
              "Expand (2n + 1)² - 1 and see what the +1 and -1 do.",
              "Factorise the survivors — can you pull a 4 out?",
            ],
            strategy: "Try small cases, then prove the survivor by factorising",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "alg-qa-paper-1",
        title: "Written Paper 1",
        questions: [
          {
            id: "alg-qa-p1-q01",
            question: "Expand and simplify 5(x + 2) - 3(x - 1).",
            modelAnswer:
              "5(x + 2) = 5x + 10 and -3(x - 1) = -3x + 3.\nSo 5(x + 2) - 3(x - 1) = 5x + 10 - 3x + 3 = 2x + 13.",
            markScheme: ["2x + 13", "5x + 10", "-3x + 3", "expand"],
            commonError:
              "Writing -3(x - 1) as -3x - 3: the -3 must multiply the -1 too, giving +3.",
            guideRef: "Collecting like terms and simplifying",
            difficulty: "warmup",
          },
          {
            id: "alg-qa-p1-q02",
            question: "Expand and simplify (3x - 2)(2x + 5).",
            modelAnswer:
              "Four products: 3x·2x + 3x·5 + (-2)·2x + (-2)·5 = 6x² + 15x - 4x - 10.\nCollect the middle terms: 6x² + 11x - 10.",
            markScheme: ["6x² + 11x - 10", "6x²", "15x - 4x", "-10"],
            commonError:
              "Muddling the middle products: 15x and -4x come from 'outers' and 'inners' — a grid keeps them straight.",
            guideRef: "Expanding brackets",
            difficulty: "core",
            hints: [
              "Each term of the first bracket multiplies each term of the second — four products.",
              "Be careful with the signs on the products involving -2.",
              "Collect 15x - 4x.",
            ],
            strategy: "Grid method",
          },
          {
            id: "alg-qa-p1-q03",
            question: "Factorise fully 4x² - 36.",
            modelAnswer:
              "Common factor first: 4x² - 36 = 4(x² - 9).\nx² - 9 is a difference of two squares: (x - 3)(x + 3).\nSo 4x² - 36 = 4(x - 3)(x + 3).",
            markScheme: ["4(x - 3)(x + 3)", "4(x² - 9)", "difference of two squares", "common factor"],
            commonError:
              "Writing (2x - 6)(2x + 6). It expands correctly, but it is not FULLY factorised — each bracket still contains a factor of 2. Take the numeric factor out first.",
            guideRef: "Factorising",
            difficulty: "core",
            hints: [
              "Take out the common numerical factor before anything else.",
              "What pattern is x² - 9?",
              "Fully factorised means no bracket has a common factor left inside it.",
            ],
            strategy: "Common factor first",
          },
          {
            id: "alg-qa-p1-q04",
            question: "Without a calculator, work out 8.7² - 1.3². You must show your working.",
            modelAnswer:
              "Use the difference of two squares: a² - b² = (a - b)(a + b).\n8.7² - 1.3² = (8.7 - 1.3)(8.7 + 1.3) = 7.4 × 10 = 74.",
            markScheme: ["74", "difference of two squares", "7.4", "10"],
            commonError:
              "Grinding out 8.7² = 75.69 and 1.69 by long multiplication — it works but wastes time and invites slips. The factorised route needs no hard arithmetic.",
            guideRef: "Factorising",
            difficulty: "core",
            hints: [
              "Squaring these decimals directly is slow — is there an identity for a² - b²?",
              "Factorise the expression before evaluating anything.",
              "One of the two brackets becomes a very friendly number.",
            ],
            strategy: "Recognise structure before calculating",
            solutions: [
              {
                label: "Difference of two squares (elegant)",
                steps: [
                  "Recognise the form a² - b² with a = 8.7, b = 1.3.",
                  "Factorise: 8.7² - 1.3² = (8.7 - 1.3)(8.7 + 1.3).",
                  "Evaluate the brackets: 7.4 × 10.",
                  "Answer: 74 — no long multiplication needed.",
                ],
              },
              {
                label: "Direct calculation",
                steps: [
                  "8.7² = 8.7 × 8.7 = 75.69 (e.g. 87 × 87 = 7569, then place the decimal).",
                  "1.3² = 1.69.",
                  "Subtract: 75.69 - 1.69 = 74.",
                  "Same answer, but with far more arithmetic — the factorised method is the elegant one.",
                ],
              },
            ],
          },
          {
            id: "alg-qa-p1-q05",
            question: "Simplify fully (2x² + 5x - 3)/(x² - 9).",
            modelAnswer:
              "Factorise the numerator: 2x² + 5x - 3 = (2x - 1)(x + 3) (check: 2x² + 6x - x - 3 ✓).\nFactorise the denominator: x² - 9 = (x - 3)(x + 3).\nCancel the common factor (x + 3): the answer is (2x - 1)/(x - 3).",
            markScheme: ["(2x - 1)/(x - 3)", "(2x - 1)(x + 3)", "(x - 3)(x + 3)", "cancel"],
            commonError:
              "Cancelling the x² terms or the 3s individually. Only whole brackets common to top and bottom may be cancelled — factorise first.",
            guideRef: "Algebraic fractions",
            difficulty: "core",
            hints: [
              "Factorise top and bottom separately before any cancelling.",
              "For the top: two numbers with product 2 × (-3) = -6 and sum +5.",
              "The bottom is a difference of two squares.",
            ],
            strategy: "Factorise first, then cancel whole factors",
          },
          {
            id: "alg-qa-p1-q06",
            question: "Prove that (n + 3)² - (n - 3)² is a multiple of 12 for every integer n.",
            modelAnswer:
              "Using the difference of two squares with a = n + 3, b = n - 3:\n(n + 3)² - (n - 3)² = ((n + 3) - (n - 3))((n + 3) + (n - 3)) = (6)(2n) = 12n.\nSince n is an integer, 12n is 12 × (an integer), so the expression is always a multiple of 12. ∎",
            markScheme: ["12n", "difference of two squares", "6", "2n", "multiple of 12"],
            commonError:
              "Sign slips when expanding (n - 3)²: it is n² - 6n + 9, and subtracting the whole bracket needs -(n² - 6n + 9) = -n² + 6n - 9.",
            guideRef: "Algebraic proof",
            difficulty: "challenge",
            hints: [
              "You could expand both squares — but is there a faster identity for a² - b²?",
              "Let a = n + 3 and b = n - 3 and use a² - b² = (a - b)(a + b).",
              "Simplify (a - b) and (a + b) separately; the 12 should appear by itself.",
            ],
            strategy: "Exploit structure: difference of two squares",
            solutions: [
              {
                label: "Difference of two squares (elegant)",
                steps: [
                  "Set a = n + 3, b = n - 3, so the expression is a² - b² = (a - b)(a + b).",
                  "a - b = (n + 3) - (n - 3) = 6 and a + b = (n + 3) + (n - 3) = 2n.",
                  "So the expression equals 6 × 2n = 12n.",
                  "12n is 12 × (an integer), so it is always a multiple of 12. ∎",
                ],
              },
              {
                label: "Expand and simplify",
                steps: [
                  "(n + 3)² = n² + 6n + 9 and (n - 3)² = n² - 6n + 9.",
                  "Subtract: (n² + 6n + 9) - (n² - 6n + 9) = 12n.",
                  "12n = 12 × n with n an integer, so the expression is a multiple of 12. ∎",
                  "Both methods agree; the factorised one avoids any expansion at all.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "alg-qa-paper-2",
        title: "Written Paper 2",
        questions: [
          {
            id: "alg-qa-p2-q01",
            question: "Simplify 4a²b × 3ab³.",
            modelAnswer:
              "Multiply the coefficients: 4 × 3 = 12.\nAdd the indices of matching letters: a² × a = a³ and b × b³ = b⁴.\nAnswer: 12a³b⁴.",
            markScheme: ["12a³b⁴", "12", "add indices", "a³"],
            commonError:
              "Multiplying the indices instead of adding them, giving a² × a = a² instead of a³ (remember a = a¹).",
            guideRef: "Collecting like terms and simplifying",
            difficulty: "warmup",
          },
          {
            id: "alg-qa-p2-q02",
            question: "Factorise x² - 5x - 24.",
            modelAnswer:
              "Look for two numbers with product -24 and sum -5: they are -8 and +3.\nSo x² - 5x - 24 = (x - 8)(x + 3).\nCheck: x² + 3x - 8x - 24 = x² - 5x - 24 ✓.",
            markScheme: ["(x - 8)(x + 3)", "-8", "+3", "product -24"],
            commonError:
              "Choosing -6 and +4 or +8 and -3: always check the SUM as well as the product — +8 and -3 give +5x, not -5x.",
            guideRef: "Factorising",
            difficulty: "core",
            hints: [
              "Two numbers with product -24 and sum -5.",
              "Opposite signs (product negative); the negative number is the larger in size (sum negative).",
              "Run through factor pairs of 24: 1×24, 2×12, 3×8, 4×6.",
            ],
            strategy: "Sign analysis before number hunting",
          },
          {
            id: "alg-qa-p2-q03",
            question: "Write 3/(x + 2) + 2/(x - 1) as a single fraction in its simplest form.",
            modelAnswer:
              "Common denominator (x + 2)(x - 1):\n3/(x + 2) + 2/(x - 1) = (3(x - 1) + 2(x + 2))/((x + 2)(x - 1)).\nNumerator: 3x - 3 + 2x + 4 = 5x + 1.\nAnswer: (5x + 1)/((x + 2)(x - 1)).",
            markScheme: ["(5x + 1)/((x + 2)(x - 1))", "common denominator", "3(x - 1)", "2(x + 2)"],
            commonError:
              "Adding numerators and denominators separately to get 5/(2x + 1) — algebraic fractions need a common denominator just like numeric ones.",
            guideRef: "Algebraic fractions",
            difficulty: "core",
            hints: [
              "The common denominator is the product of the two denominators.",
              "Multiply each numerator by the OTHER fraction's denominator.",
              "Expand and collect the numerator; leave the denominator factorised.",
            ],
            strategy: "Common denominator, keep the bottom factorised",
          },
          {
            id: "alg-qa-p2-q04",
            question: "Make x the subject of y = (2x + 3)/(x - 4).",
            modelAnswer:
              "Multiply both sides by (x - 4): y(x - 4) = 2x + 3.\nExpand: yx - 4y = 2x + 3.\nGather x terms: yx - 2x = 4y + 3.\nFactorise: x(y - 2) = 4y + 3.\nDivide: x = (4y + 3)/(y - 2).",
            markScheme: ["x = (4y + 3)/(y - 2)", "y(x - 4)", "factorise", "yx - 2x"],
            commonError:
              "Stopping at yx - 4y = 2x + 3 and dividing by y: because x appears on both sides, you must gather the x-terms and factorise x out before dividing.",
            guideRef: "Rearranging formulae",
            difficulty: "core",
            hints: [
              "Clear the fraction by multiplying both sides by (x - 4).",
              "Move every x-term to one side and every other term to the other side.",
              "Take out x as a common factor, then divide by the bracket.",
            ],
            strategy: "Clear, expand, gather, factorise",
          },
          {
            id: "alg-qa-p2-q05",
            question: "Simplify fully ((x² - 4)/(x² + 3x)) ÷ ((x + 2)/x).",
            modelAnswer:
              "Flip and multiply: ((x² - 4)/(x² + 3x)) × (x/(x + 2)).\nFactorise: x² - 4 = (x - 2)(x + 2) and x² + 3x = x(x + 3).\nSo we have ((x - 2)(x + 2)/(x(x + 3))) × (x/(x + 2)).\nCancel (x + 2) and x: the answer is (x - 2)/(x + 3).",
            markScheme: ["(x - 2)/(x + 3)", "reciprocal", "(x - 2)(x + 2)", "x(x + 3)"],
            commonError:
              "Flipping the FIRST fraction instead of the second, or trying to cancel before factorising. Only the divisor is inverted.",
            guideRef: "Algebraic fractions",
            difficulty: "core",
            hints: [
              "Dividing by a fraction is multiplying by its reciprocal.",
              "Factorise every quadratic before you cancel anything.",
              "Two different common factors cancel — one bracket and one single letter.",
            ],
            strategy: "Flip, factorise, cancel",
          },
          {
            id: "alg-qa-p2-q06",
            question:
              "Prove that the difference between the squares of any two odd numbers is a multiple of 8.",
            modelAnswer:
              "Let the odd numbers be 2m + 1 and 2n + 1, where m and n are integers (different letters, since the numbers need not be related).\n(2m + 1)² - (2n + 1)² = 4m² + 4m + 1 - (4n² + 4n + 1) = 4m² + 4m - 4n² - 4n = 4m(m + 1) - 4n(n + 1).\nm(m + 1) and n(n + 1) are each a product of consecutive integers, so each is even: write m(m + 1) = 2j and n(n + 1) = 2k for integers j, k.\nThen the difference is 8j - 8k = 8(j - k), a multiple of 8. ∎",
            markScheme: ["8(j - k)", "2m + 1", "2n + 1", "consecutive", "even", "multiple of 8"],
            commonError:
              "Using 2n + 1 and 2n + 3 for 'any two odd numbers' — that only covers CONSECUTIVE odd numbers. Unrelated odd numbers need two independent letters.",
            guideRef: "Algebraic proof",
            difficulty: "challenge",
            hints: [
              "Two arbitrary odd numbers need two different letters: 2m + 1 and 2n + 1.",
              "Expand both squares and subtract; a factor of 4 appears at once.",
              "You need a factor of 8, not just 4 — factorise 4m² + 4m as 4m(m + 1) and think about the parity of m(m + 1).",
            ],
            strategy: "Introduce variables, then use the evenness of n(n + 1)",
          },
        ],
      },
      {
        id: "alg-qa-paper-3",
        title: "Written Paper 3",
        questions: [
          {
            id: "alg-qa-p3-q01",
            question: "Expand and simplify (x + 4)².",
            modelAnswer:
              "(x + 4)² = (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16.",
            markScheme: ["x² + 8x + 16", "8x", "middle term", "16"],
            commonError:
              "Writing x² + 16: squaring term-by-term loses the middle term 8x. The area picture shows two 4-by-x rectangles that must be counted.",
            guideRef: "Expanding brackets",
            difficulty: "warmup",
          },
          {
            id: "alg-qa-p3-q02",
            question: "Factorise 6x² + 7x - 3.",
            modelAnswer:
              "ac = 6 × (-3) = -18 and b = 7. The numbers +9 and -2 have product -18 and sum +7.\nSplit the middle term: 6x² + 9x - 2x - 3 = 3x(2x + 3) - 1(2x + 3) = (3x - 1)(2x + 3).\nCheck: 6x² + 9x - 2x - 3 = 6x² + 7x - 3 ✓.",
            markScheme: ["(3x - 1)(2x + 3)", "ac = -18", "9x - 2x", "split"],
            commonError:
              "Guessing bracket pairs at random. With a = 6 there are many candidates — the ac-split method finds the right pair systematically.",
            guideRef: "Factorising",
            difficulty: "core",
            hints: [
              "Compute ac and list factor pairs of -18.",
              "You need a pair summing to +7: consider 9 and -2.",
              "Split 7x as 9x - 2x, then factorise the two halves in pairs.",
            ],
            strategy: "Split the middle term",
          },
          {
            id: "alg-qa-p3-q03",
            question: "Prove that the sum of any three consecutive integers is a multiple of 3.",
            modelAnswer:
              "Let the integers be n, n + 1 and n + 2, where n is an integer.\nSum = n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1).\nSince n + 1 is an integer, the sum is 3 × (an integer), so it is always a multiple of 3. ∎",
            markScheme: ["3(n + 1)", "n + 1", "n + 2", "3n + 3", "multiple of 3"],
            commonError:
              "Giving numerical examples (e.g. 4 + 5 + 6 = 15) as 'proof'. Examples illustrate; only the algebra with a general n proves the claim for every integer.",
            guideRef: "Algebraic proof",
            difficulty: "core",
            hints: [
              "Represent three consecutive integers using a single letter.",
              "Add the three expressions and simplify.",
              "To finish, factorise the 3 out and say the other factor is an integer.",
            ],
            strategy: "Introduce a variable; exploit symmetry",
            solutions: [
              {
                label: "Standard algebraic method",
                steps: [
                  "Let the integers be n, n + 1, n + 2 for an integer n.",
                  "Sum = n + (n + 1) + (n + 2) = 3n + 3.",
                  "Factorise: 3n + 3 = 3(n + 1), and n + 1 is an integer.",
                  "So the sum is a multiple of 3. ∎",
                ],
              },
              {
                label: "Symmetry method (elegant)",
                steps: [
                  "Call the MIDDLE integer m, so the three numbers are m - 1, m, m + 1.",
                  "Sum = (m - 1) + m + (m + 1) = 3m — the -1 and +1 cancel instantly.",
                  "3m is visibly 3 × (an integer). ∎",
                  "Centering on the middle number kills the arithmetic before it starts — the elegant choice of variable does the work.",
                ],
              },
            ],
          },
          {
            id: "alg-qa-p3-q04",
            question: "Write (x + 2)/3 - (x - 1)/5 as a single fraction in its simplest form.",
            modelAnswer:
              "Common denominator 15: (5(x + 2) - 3(x - 1))/15.\nNumerator: 5x + 10 - 3x + 3 = 2x + 13.\nAnswer: (2x + 13)/15.",
            markScheme: ["(2x + 13)/15", "common denominator", "15", "5(x + 2) - 3(x - 1)"],
            commonError:
              "Writing the numerator as 5x + 10 - 3x - 3: the subtraction applies to the whole of 3(x - 1), so -3 × (-1) = +3. Bracket the second numerator before expanding.",
            guideRef: "Algebraic fractions",
            difficulty: "core",
            hints: [
              "The common denominator of 3 and 5 is 15.",
              "Write the whole calculation as one fraction with brackets around each numerator product.",
              "Take special care expanding -3(x - 1).",
            ],
            strategy: "Bracket subtracted numerators",
          },
          {
            id: "alg-qa-p3-q05",
            question: "Make L the subject of T = 2π√(L/g).",
            modelAnswer:
              "Divide both sides by 2π: T/(2π) = √(L/g).\nSquare both sides: T²/(4π²) = L/g.\nMultiply by g: L = gT²/(4π²).",
            markScheme: ["L = gT²/(4π²)", "square both sides", "T/(2π)", "4π²"],
            commonError:
              "Squaring before isolating the root, so the 2π is not squared: (2π)² = 4π², not 2π². Isolate the square root FIRST, then square the whole of each side.",
            guideRef: "Rearranging formulae",
            difficulty: "core",
            hints: [
              "Get the square root by itself on one side before squaring.",
              "When you square T/(2π), both the T and the 2π get squared.",
              "Finish by multiplying both sides by g.",
            ],
            strategy: "Isolate the root, then square everything",
          },
          {
            id: "alg-qa-p3-q06",
            question:
              "Prove that the sum of the squares of any three consecutive integers is never a multiple of 3.",
            modelAnswer:
              "Use symmetry: let the integers be n - 1, n and n + 1.\n(n - 1)² + n² + (n + 1)² = (n² - 2n + 1) + n² + (n² + 2n + 1) = 3n² + 2.\n3n² is a multiple of 3, so the sum is (a multiple of 3) + 2 — it leaves remainder 2 when divided by 3, so it can never be a multiple of 3. ∎",
            markScheme: ["3n² + 2", "n - 1", "n + 1", "remainder 2", "never"],
            commonError:
              "Testing a few examples (e.g. 1² + 2² + 3² = 14) and concluding 'never'. Examples cannot prove a 'never' statement — the algebra must show EVERY case leaves remainder 2.",
            guideRef: "Algebraic proof",
            difficulty: "challenge",
            hints: [
              "Choosing the symmetric labels n - 1, n, n + 1 makes the odd-power terms cancel.",
              "Expand the three squares and collect — the n terms should vanish.",
              "You should reach 3 × (something) + 2. Why can that never be a multiple of 3?",
            ],
            strategy: "Exploit symmetry, then argue with remainders",
          },
        ],
      },
    ],
  },
};

export default topic;
