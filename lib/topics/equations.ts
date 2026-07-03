import type { Topic } from "../types";

const topic: Topic = {
  id: "equations",
  title: "Equations & Inequalities",
  subject: "Maths",
  icon: "🎯",
  intro:
    "Equations are the engine room of IGCSE Higher maths: almost every topic eventually asks you to set something equal to something else and find the unknown. In this topic you will solve linear equations with confidence, crack quadratics three different ways, tackle simultaneous equations (including the famous line-meets-circle question), and handle inequalities without falling into the classic sign-flip trap.",

  guide: [
    {
      heading: "The balance idea: solving linear equations",
      body:
        "Picture an old-fashioned balance scale. On the left pan sit 3 identical mystery boxes and a 5 g weight; on the right pan sits a 20 g weight. The scale balances. Whatever you do to one pan, you must do to the other, or the balance breaks.\n\nAn equation is exactly this: 3x + 5 = 20. Subtract 5 from **both** sides (take a 5 g weight off each pan): 3x = 15. Divide **both** sides by 3: x = 5.\n\nThe same idea handles every linear equation:\n\n- **Brackets**: expand first. 4(2x − 3) = 10x − 7 becomes 8x − 12 = 10x − 7.\n- **Unknowns on both sides**: collect the x terms on the side where the coefficient stays positive. From 8x − 12 = 10x − 7, subtract 8x: −12 = 2x − 7, so 2x = −5 and x = −5/2.\n- **Fractions**: multiply every term by the lowest common multiple of the denominators to clear them in one move. For (x + 3)/4 = (2x − 1)/5, multiply both sides by 20: 5(x + 3) = 4(2x − 1).\n\nAlways finish by substituting your answer back in — ten seconds of checking catches most slips.",
      discovery: {
        problem:
          "A balance scale holds 3 identical mystery boxes plus a 5 g weight on the left, and a 20 g weight on the right. It balances perfectly. Without any algebra, can you work out the mass of one box? What moves are you allowed to make without upsetting the balance?",
        idea:
          "You can remove the same mass from both pans (take 5 g off each side, leaving 3 boxes balancing 15 g) and you can split both pans into equal thirds (one box balances 5 g). Those two moves — do the same thing to both sides, then undo multiplication — are the entire method for solving linear equations.",
      },
      whyItWorks:
        "If two quantities are equal, they stay equal when you apply the same operation to both. That is all 'solving' is: a chain of equality-preserving moves that ends with x alone on one side. Each move is reversible (adding 5 undoes subtracting 5), which is why you can always check by substituting back — running the chain in reverse must land you on a true statement.",
      strategies: ["work backwards", "look for invariants", "try small cases"],
      keyPoints: [
        "Do the same operation to both sides — the equality is the invariant you must protect.",
        "Expand brackets first, then clear fractions by multiplying every term by the LCM of the denominators.",
        "With unknowns on both sides, collect x terms where the coefficient stays positive to avoid sign errors.",
        "A linear equation has exactly one solution; always check it by substitution.",
      ],
    },
    {
      heading: "Forming equations from words and shapes",
      body:
        "Exam questions rarely hand you the equation — they hand you a story or a diagram and expect you to build it. The recipe:\n\n- **Introduce a variable**: choose a letter for the quantity you know least about, and write down what it means, with units ('let w = the width in cm').\n- **Express everything else** in terms of that letter ('the length is w + 3').\n- **Find the sentence that becomes the equation** — a total, a perimeter, an angle sum, 'the same as', 'twice as much'.\n- Solve, then **answer the actual question** — often the question asks for the area or the largest angle, not for x itself.\n\nGeometry is a rich source: angles in a triangle sum to 180°, angles on a straight line sum to 180°, opposite sides of a rectangle are equal. For example, a triangle with angles x, 2x + 10 and 3x − 40 gives x + (2x + 10) + (3x − 40) = 180, so 6x − 30 = 180 and x = 35.",
      discovery: {
        problem:
          "A rectangle's length is 3 cm more than its width, and its perimeter is 54 cm. Can you find its area — without writing any algebra? Now try the same puzzle where the length is 3 cm more than the width and the AREA is 54 cm². Which version is harder, and why?",
        idea:
          "The perimeter version can be done by arithmetic (half the perimeter is 27, split 27 into two numbers differing by 3). The area version resists guessing — you need x(x + 3) = 54, a quadratic. Introducing a variable turns both puzzles into routine algebra, and it scales to problems where guesswork fails completely.",
      },
      strategies: ["introduce a variable", "draw a diagram", "work backwards"],
      whyItWorks:
        "Naming the unknown converts an English sentence into an algebraic one, word by word: 'is' becomes =, '3 more than' becomes + 3, 'twice' becomes 2×. Once every fact in the story is written in one common language, the solving machinery from the previous section takes over.",
      keyPoints: [
        "Define your variable in writing, with units — it earns a mark and prevents muddles.",
        "One sentence in the story always carries the '=' sign: a total, a perimeter, or an 'is the same as'.",
        "Check your solution makes sense in context: lengths and ages cannot be negative.",
        "Re-read the question at the end — it often asks for a derived quantity, not x itself.",
      ],
    },
    {
      heading: "Quadratic equations: factorising",
      body:
        "A quadratic equation contains an x² term: ax² + bx + c = 0. Unlike a linear equation it can have two solutions, one, or none.\n\nThe factorising method rests on the **zero product principle**: if two numbers multiply to give 0, at least one of them must be 0. So if we can write the quadratic as (x − 3)(x − 7) = 0, then x − 3 = 0 or x − 7 = 0, giving x = 3 or x = 7.\n\nTo factorise x² + bx + c, hunt for two numbers that **multiply to c and add to b**. For x² − 5x − 14: the numbers are −7 and +2, so it factorises as (x − 7)(x + 2), giving x = 7 or x = −2.\n\nTwo essentials:\n\n- **Rearrange to = 0 first.** To solve x² = 5x + 24, write x² − 5x − 24 = 0, then factorise: (x − 8)(x + 3) = 0.\n- **Never divide both sides by x.** For x² = 7x, dividing by x throws away the solution x = 0. Instead factorise: x(x − 7) = 0, so x = 0 or x = 7.\n\nEquations with **algebraic fractions** often hide a quadratic. To solve 12/(x + 1) = x, multiply both sides by (x + 1): 12 = x(x + 1) = x² + x, so x² + x − 12 = 0 and (x + 4)(x − 3) = 0. Always check the solutions do not make any original denominator zero.",
      discovery: {
        problem:
          "Two numbers have a sum of 10 and a product of 21. Find them by trial. Now try sum 10, product 20. Now sum 10, product 26. What goes wrong — and can you invent a method that works every time instead of guessing?",
        idea:
          "Calling one number x makes the other 10 − x, and the product condition x(10 − x) = 21 rearranges to x² − 10x + 21 = 0 — a quadratic. Trial finds 3 and 7 for product 21, but for product 20 the answers are 5 ± √5, which no amount of guessing will hit, and for product 26 no real numbers work at all. Quadratic equations are the machine that answers all three questions honestly, including 'no solution'.",
      },
      whyItWorks:
        "Expanding (x + p)(x + q) gives x² + (p + q)x + pq: the x-coefficient is the SUM of p and q, and the constant is their PRODUCT. Factorising simply runs this expansion backwards, which is why you hunt for two numbers with the right sum and product. Then the zero product principle converts one quadratic equation into two easy linear ones.",
      strategies: ["work backwards", "find a pattern", "try small cases"],
      keyPoints: [
        "Rearrange to ax² + bx + c = 0 before factorising — the zero product principle needs a zero.",
        "For x² + bx + c, find two numbers with product c and sum b.",
        "If ax² + bx = 0 has no constant term, factorise out x; never divide by x or you lose x = 0.",
        "Fraction equations: multiply every term by each denominator, then expect a quadratic.",
        "A quadratic can have two, one or zero real solutions.",
      ],
      thinkDeeper:
        "The 'sum 10, product 26' puzzle has no real answer, but mathematicians refused to accept that. Allowing √(−1) gives the answers 5 + i and 5 − i — the birth of complex numbers, which now underpin electronics and quantum physics. A puzzle about two numbers led to a whole new number system.",
    },
    {
      heading: "Completing the square",
      body:
        "Some quadratics refuse to factorise nicely. Completing the square rewrites x² + bx + c in the form (x + p)² + q, which can ALWAYS be solved — and reveals the graph's turning point for free.\n\nThe move: x² + bx = (x + b/2)² − (b/2)². Halve the x-coefficient, square it, subtract it off.\n\nExample: x² + 6x − 2 = (x + 3)² − 9 − 2 = (x + 3)² − 11.\n\nTo **solve** x² − 8x + 5 = 0: write (x − 4)² − 11 = 0, so (x − 4)² = 11, x − 4 = ±√11, and x = 4 ± √11. Never forget the ±: squares have two square roots.\n\nTo **read off the minimum point** of y = a(x + p)² + q: the squared bracket is never negative, and it is smallest (zero) exactly when x = −p. So the minimum point is (−p, q). For y = (x − 4)² + 3 the minimum is (4, 3). If a is negative the parabola is upside down and (−p, q) is a maximum.\n\nWhen the x² coefficient is not 1, factor it out of the x-terms first: 2x² + 12x + 5 = 2(x² + 6x) + 5 = 2[(x + 3)² − 9] + 5 = 2(x + 3)² − 13.",
      whyItWorks:
        "Draw a square of side x and glue a b × x rectangle onto it: total area x² + bx. Slice the rectangle in half and move one half below the square. You almost form a bigger square of side x + b/2 — except a tiny (b/2) × (b/2) corner is missing. So x² + bx = (x + b/2)² − (b/2)². The algebra is literally 'completing' a geometric square; the name is not a metaphor.",
      strategies: ["draw a diagram", "exploit symmetry", "look for invariants"],
      keyPoints: [
        "x² + bx + c = (x + b/2)² − (b/2)² + c: halve the coefficient of x, square it, subtract.",
        "Solving from completed square form: isolate the bracket, square root BOTH sides with ±.",
        "y = a(x + p)² + q has turning point (−p, q): minimum if a > 0, maximum if a < 0.",
        "If a ≠ 1, factor a out of the x² and x terms before completing the square.",
      ],
      thinkDeeper:
        "The completed square form exposes the parabola's mirror symmetry: y = (x + p)² + q takes equal values at x = −p + t and x = −p − t for every t. That is why the two roots of any quadratic sit symmetrically either side of the line x = −b/2a — a fact you can use to sanity-check any pair of solutions.",
    },
    {
      heading: "The quadratic formula",
      body:
        "For ax² + bx + c = 0, the solutions are\n\nx = (−b ± √(b² − 4ac)) / (2a)\n\nThis is the universal tool: it works on every quadratic, factorisable or not. Use it when the question says 'give your answers correct to 2 decimal places' — that phrasing is code for 'this will not factorise'.\n\nExample: solve 2x² + 5x − 1 = 0 to 2 d.p. Here a = 2, b = 5, c = −1, so b² − 4ac = 25 + 8 = 33 and x = (−5 ± √33)/4, giving x ≈ 0.19 or x ≈ −2.69.\n\nFor **exact** answers, leave the surd in and simplify: 3x² = 4x + 2 rearranges to 3x² − 4x − 2 = 0, so x = (4 ± √40)/6 = (4 ± 2√10)/6 = (2 ± √10)/3.\n\nCareful moves that save marks:\n\n- Rearrange to = 0 and write down a, b, c **with their signs** before substituting.\n- Bracket negatives: if b = −7 then b² = (−7)² = 49.\n- The whole of −b ± √(...) is divided by 2a — draw the fraction bar full width.",
      whyItWorks:
        "The formula is just completing the square performed once, in general, on ax² + bx + c = 0. Divide by a, complete the square on x² + (b/a)x, tidy up, and square-root both sides: out pops x = (−b ± √(b² − 4ac))/(2a). It is not a magic incantation — it is a receipt for work you already know how to do.",
      strategies: ["work backwards", "consider extremes"],
      keyPoints: [
        "x = (−b ± √(b² − 4ac)) / (2a) — it appears on the 4MA1 formulae sheet, but knowing it cold saves time and prevents copying errors.",
        "The discriminant b² − 4ac counts the real roots: positive → 2, zero → 1 (repeated), negative → 0.",
        "'To 2 decimal places' signals the formula; 'exact' or 'in surd form' means simplify the surd, not a decimal.",
        "Substitute with signs: for 2x² + 5x − 1 = 0, c = −1, so −4ac = +8.",
      ],
      thinkDeeper:
        "Why does b² − 4ac decide everything? Under the square root, a positive number gives two different roots, zero gives the single repeated root x = −b/2a, and a negative number gives no real roots at all — the parabola never touches the x-axis. Examiners love hiding this: 'find k so that x² + kx + 9 = 0 has exactly one solution' is really the equation k² − 36 = 0 in disguise.",
    },
    {
      heading: "Simultaneous equations",
      body:
        "Two equations, two unknowns, one pair of values satisfying both.\n\n**Two linear equations — elimination.** Match the size of one variable's coefficients, then add or subtract to kill it. For 2x + y = 7 and x − y = 2: the y-coefficients are already +1 and −1, so ADD the equations: 3x = 9, x = 3, then y = 1. Remember 'SSS: Same Signs Subtract' (and different signs add).\n\n**Two linear equations — substitution.** If one equation gives a variable directly (y = 2x + 1), substitute that expression into the other.\n\n**One linear, one quadratic — always substitute.** This is the Higher-tier staple, especially a line meeting the circle x² + y² = r². Solve the linear equation for one variable, substitute into the quadratic, and solve the resulting quadratic. Each x pairs with exactly one y — find it from the LINEAR equation.\n\nExample: y = 2x − 3 meets x² + y² = 18. Substitute: x² + (2x − 3)² = 18, so 5x² − 12x − 9 = 0, which factorises as (5x + 3)(x − 3) = 0. So x = 3 (giving y = 3) or x = −3/5 (giving y = −21/5). Two solutions = the line crosses the circle at two points.\n\nGeometrically, solving simultaneously finds where graphs intersect: two crossing points (two solutions), a tangent touch (one repeated solution), or a miss (no real solutions).",
      discovery: {
        problem:
          "At a market stall, 2 teas and 1 bun cost £7, and a tea costs £2 more than a bun. Without writing any algebra, work out the price of each. Then ask yourself: what single clever move did you make?",
        idea:
          "Most people replace 'a tea' with 'a bun + £2' in the first fact: 2 buns + £4 + 1 bun = £7, so a bun is £1 and a tea £3. That move IS substitution — using one relationship to eliminate a variable from another. Elimination and substitution are just organised versions of the tricks you use naturally at a market stall.",
      },
      whyItWorks:
        "Adding equal things to equal things keeps equality: if L1 = R1 and L2 = R2 then L1 + L2 = R1 + R2. Elimination engineers the coefficients so that this legal addition wipes out one variable. Substitution works because the linear equation is a promise about y that must hold at any shared solution — so you may replace y wherever it appears in the other equation.",
      strategies: ["introduce a variable", "exploit symmetry", "draw a diagram"],
      keyPoints: [
        "Elimination: match one variable's coefficients; same signs subtract, different signs add.",
        "Line + curve: rearrange the LINEAR equation, substitute into the quadratic — never the other way round.",
        "Pair each x with its y using the linear equation, and present answers as matched pairs.",
        "Solutions are intersection points of the graphs; a tangent gives one repeated solution.",
        "Check both original equations with your pair — one check is not enough.",
      ],
      diagrams: [
        {
          id: "equ-diag-01",
          title: "A line meeting the circle x² + y² = r²",
          svg: "<svg viewBox=\"0 0 320 320\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"A circle centred at the origin with a straight line crossing it at two marked intersection points\"><line x1=\"20\" y1=\"160\" x2=\"300\" y2=\"160\" stroke=\"#64748b\" stroke-width=\"1.5\"/><line x1=\"160\" y1=\"20\" x2=\"160\" y2=\"300\" stroke=\"#64748b\" stroke-width=\"1.5\"/><circle cx=\"160\" cy=\"160\" r=\"100\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"3\"/><line x1=\"40\" y1=\"280\" x2=\"280\" y2=\"40\" stroke=\"#16a34a\" stroke-width=\"3\"/><circle cx=\"89\" cy=\"231\" r=\"7\" fill=\"#dc2626\"/><circle cx=\"231\" cy=\"89\" r=\"7\" fill=\"#dc2626\"/><text x=\"238\" y=\"80\" font-size=\"15\" fill=\"#dc2626\">solution 1</text><text x=\"20\" y=\"252\" font-size=\"15\" fill=\"#dc2626\">solution 2</text><text x=\"186\" y=\"265\" font-size=\"15\" fill=\"#2563eb\">x² + y² = r²</text><text x=\"236\" y=\"34\" font-size=\"15\" fill=\"#16a34a\">line</text></svg>",
          caption:
            "Solving a linear equation simultaneously with a circle finds the crossing points — usually two, one if the line is a tangent, none if it misses.",
        },
      ],
    },
    {
      heading: "Inequalities and the number line",
      body:
        "An inequality is solved exactly like an equation, with **one extra rule**: multiplying or dividing both sides by a NEGATIVE number flips the inequality sign.\n\nExample: solve 5 − 2x > 11. Subtract 5: −2x > 6. Divide by −2 and flip: x < −3. (Alternative that avoids flipping: add 2x to both sides to get 5 > 11 + 2x, then −6 > 2x, so −3 > x — the same answer.)\n\n**Number line representation**: an open circle ○ means the endpoint is NOT included (< or >); a filled circle ● means it IS included (≤ or ≥). Shade the line between endpoints, or draw an arrow off to infinity.\n\n**Double inequalities**: solve −5 < 2x + 1 ≤ 7 by doing the same thing to all THREE parts: subtract 1 (−6 < 2x ≤ 6), divide by 2 (−3 < x ≤ 3).\n\n**Integer solutions**: exam questions often ask for the integers satisfying an inequality. For −3 < x ≤ 3 the integers are −2, −1, 0, 1, 2, 3 — check each endpoint carefully: −3 is excluded (strict <) but 3 is included (≤).",
      discovery: {
        problem:
          "Start with the true statement 4 > 2. Add 3 to both sides. Subtract 10 from both sides. Multiply both sides by 5. Now multiply both sides by −1. Which operations kept the statement true — and what exactly broke?",
        idea:
          "Adding, subtracting and multiplying by a positive all preserve order: the chain runs 4 > 2, then 7 > 5, then −3 > −5 (still true — check it on a number line!), then −15 > −25 (also true). But the final move, multiplying by −1, gives 15 > 25, which is FALSE. Negation reflects the whole number line about 0, reversing every order relationship — that is why the sign must flip: 15 < 25 restores the truth.",
      },
      whyItWorks:
        "Multiplying by a negative number reflects the number line about zero: bigger numbers land further LEFT. A reflection reverses order, so the inequality symbol must reverse with it. Testing a small case makes it vivid: 4 > 2, but −4 < −2. Any time you are unsure, test one concrete number from your answer region in the original inequality.",
      strategies: ["try small cases", "consider extremes", "draw a diagram"],
      keyPoints: [
        "Flip the inequality sign when multiplying or dividing both sides by a negative number — and only then.",
        "Open circle ○ for < or >; filled circle ● for ≤ or ≥ on a number line.",
        "Solve double inequalities by operating on all three parts at once.",
        "When listing integer solutions, test both endpoints against strict vs inclusive symbols.",
      ],
      thinkDeeper:
        "Why is there no flip for adding a negative? Adding shifts the whole line without turning it around, so order survives. Only reflections (negative multipliers) reverse order. And what about multiplying by x itself, when you do not know x's sign? That is why 1/x < 2 is dangerous to 'multiply through' — you would need separate cases for x > 0 and x < 0. Safer: sketch or test regions.",
      diagrams: [
        {
          id: "equ-diag-02",
          title: "Representing −2 ≤ x < 3 on a number line",
          svg: "<svg viewBox=\"0 0 640 120\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Number line from minus 4 to 4 showing a filled circle at minus 2, an open circle at 3, and a solid bar between them\"><line x1=\"30\" y1=\"60\" x2=\"610\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"2\"/><g stroke=\"#64748b\" stroke-width=\"2\"><line x1=\"40\" y1=\"52\" x2=\"40\" y2=\"68\"/><line x1=\"110\" y1=\"52\" x2=\"110\" y2=\"68\"/><line x1=\"180\" y1=\"52\" x2=\"180\" y2=\"68\"/><line x1=\"250\" y1=\"52\" x2=\"250\" y2=\"68\"/><line x1=\"320\" y1=\"52\" x2=\"320\" y2=\"68\"/><line x1=\"390\" y1=\"52\" x2=\"390\" y2=\"68\"/><line x1=\"460\" y1=\"52\" x2=\"460\" y2=\"68\"/><line x1=\"530\" y1=\"52\" x2=\"530\" y2=\"68\"/><line x1=\"600\" y1=\"52\" x2=\"600\" y2=\"68\"/></g><g font-size=\"15\" fill=\"#64748b\" text-anchor=\"middle\"><text x=\"40\" y=\"92\">-4</text><text x=\"110\" y=\"92\">-3</text><text x=\"180\" y=\"92\">-2</text><text x=\"250\" y=\"92\">-1</text><text x=\"320\" y=\"92\">0</text><text x=\"390\" y=\"92\">1</text><text x=\"460\" y=\"92\">2</text><text x=\"530\" y=\"92\">3</text><text x=\"600\" y=\"92\">4</text></g><line x1=\"180\" y1=\"36\" x2=\"530\" y2=\"36\" stroke=\"#2563eb\" stroke-width=\"5\"/><circle cx=\"180\" cy=\"36\" r=\"8\" fill=\"#2563eb\"/><circle cx=\"530\" cy=\"36\" r=\"8\" fill=\"#ffffff\" stroke=\"#2563eb\" stroke-width=\"3\"/><text x=\"330\" y=\"26\" font-size=\"15\" fill=\"#2563eb\" text-anchor=\"middle\">-2 ≤ x &lt; 3</text></svg>",
          caption:
            "Filled circle at −2 (included, because ≤); open circle at 3 (excluded, because <). The integers satisfying it are −2, −1, 0, 1, 2.",
        },
      ],
    },
  ],

  learn: {
    flashcards: [
      {
        front: "The quadratic formula for ax² + bx + c = 0",
        back: "x = (−b ± √(b² − 4ac)) / (2a). The whole of −b ± √(...) is divided by 2a.",
      },
      {
        front: "Zero product principle",
        back: "If A × B = 0 then A = 0 or B = 0. This is why quadratics must be rearranged to = 0 before factorising.",
      },
      {
        front: "Factorising x² + bx + c",
        back: "Find two numbers with PRODUCT c and SUM b; then x² + bx + c = (x + p)(x + q).",
      },
      {
        front: "Completing the square on x² + bx",
        back: "x² + bx = (x + b/2)² − (b/2)². Halve the x-coefficient, square it, subtract it.",
      },
      {
        front: "Turning point of y = a(x + p)² + q",
        back: "(−p, q). Minimum if a > 0, maximum if a < 0.",
      },
      {
        front: "What does the discriminant b² − 4ac tell you?",
        back: "b² − 4ac > 0: two real roots. = 0: one repeated root. < 0: no real roots.",
      },
      {
        front: "When does an inequality sign flip?",
        back: "Only when you multiply or divide both sides by a NEGATIVE number. Adding or subtracting never flips it.",
      },
      {
        front: "Elimination rule of thumb",
        back: "Match one variable's coefficients, then: Same Signs Subtract, different signs add.",
      },
      {
        front: "Solving a line with a circle x² + y² = r²",
        back: "Rearrange the LINEAR equation (e.g. y = mx + c), substitute into the circle equation, solve the quadratic in x, then find each y from the linear equation.",
      },
      {
        front: "Clearing fractions from an equation",
        back: "Multiply EVERY term (both sides) by the LCM of the denominators. With algebraic denominators, expect a quadratic and check no answer makes a denominator zero.",
      },
      {
        front: "Number line circles: open vs filled",
        back: "Open circle ○ for strict < or >; filled circle ● for ≤ or ≥.",
      },
      {
        front: "Never divide an equation by x. Why?",
        back: "You may be dividing by zero and you lose the solution x = 0. Factorise instead: x² = 7x becomes x(x − 7) = 0, so x = 0 or x = 7.",
      },
    ],
    keyFacts: [
      "A linear equation has exactly one solution; a quadratic can have two, one, or no real solutions.",
      "Whatever you do to one side of an equation, you must do to the other — equality is the invariant.",
      "To solve a quadratic you MUST rearrange it to equal zero first.",
      "'Give answers to 2 decimal places' is exam code for 'use the quadratic formula'.",
      "The minimum of y = (x + p)² + q is q, occurring at x = −p.",
      "Multiplying or dividing an inequality by a negative flips the sign: from 4 > 2 you get −4 < −2.",
      "Simultaneous solutions are the intersection points of the two graphs.",
      "A line meets a circle at two points, one point (a tangent), or not at all — matching two, one, or zero solutions.",
      "Always substitute answers back into the ORIGINAL equations to check, and reject any value that makes a denominator zero.",
    ],
    formulaSheet: [
      {
        name: "Quadratic formula",
        formula: "x = (−b ± √(b² − 4ac)) / (2a)",
        note: "For ax² + bx + c = 0. Write a, b, c with their signs before substituting.",
      },
      {
        name: "Completed square form",
        formula: "x² + bx + c = (x + b/2)² − (b/2)² + c",
        note: "Halve the x-coefficient, square it, subtract it, then add c.",
      },
      {
        name: "Discriminant",
        formula: "D = b² − 4ac",
        note: "D > 0: two real roots; D = 0: one repeated root; D < 0: no real roots.",
      },
      {
        name: "Turning point from completed square",
        formula: "y = a(x + p)² + q has turning point (−p, q)",
        note: "Minimum when a > 0, maximum when a < 0.",
      },
      {
        name: "Circle centred at the origin",
        formula: "x² + y² = r²",
        note: "Radius r. Solve with a line by substituting the linear equation in.",
      },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "equ-quiz-mcq-01",
        question: "Solve 3(x − 2) = 15.",
        options: ["x = 7", "x = 3", "x = 17/3", "x = 5"],
        answerIndex: 0,
        explanation:
          "Divide both sides by 3 first: x − 2 = 5, so x = 7. (Or expand: 3x − 6 = 15, 3x = 21.) x = 17/3 comes from wrongly expanding as 3x − 2; x = 5 comes from dividing by 3 but forgetting to add the 2 back.",
        guideRef: "The balance idea: solving linear equations",
        difficulty: "warmup",
      },
      {
        id: "equ-quiz-mcq-02",
        question: "Solve 5x − 3 = 2x + 12.",
        options: ["x = 5", "x = 3", "x = 9/7", "x = 15/7"],
        answerIndex: 0,
        explanation:
          "Subtract 2x: 3x − 3 = 12. Add 3: 3x = 15, so x = 5. The distractors 9/7 and 15/7 come from ADDING 2x to give 7x instead of subtracting it. Check: 5(5) − 3 = 22 and 2(5) + 12 = 22. ✓",
        guideRef: "The balance idea: solving linear equations",
        difficulty: "warmup",
      },
      {
        id: "equ-quiz-mcq-03",
        question: "Solve (x + 3)/4 = (2x − 1)/5.",
        options: ["x = 19/3", "x = 11/3", "x = 19/13", "x = 4"],
        answerIndex: 0,
        explanation:
          "Cross-multiply (i.e. multiply both sides by 20): 5(x + 3) = 4(2x − 1), so 5x + 15 = 8x − 4. Then 19 = 3x and x = 19/3. Choosing 11/3 comes from the sign slip 8x + 4; 19/13 from adding 8x instead of subtracting 5x.",
        guideRef: "The balance idea: solving linear equations",
        difficulty: "core",
        hints: [
          "Fractions on both sides — what single move clears both denominators at once?",
          "Multiply both sides by 20: you get 5(x + 3) = 4(2x − 1).",
          "Expand both brackets carefully (watch −4 on the right), then collect the x terms on the side with more of them.",
        ],
        strategy: "look for invariants",
      },
      {
        id: "equ-quiz-mcq-04",
        question: "Solve x² − 5x − 14 = 0.",
        options: [
          "x = 7 or x = −2",
          "x = −7 or x = 2",
          "x = 7 or x = 2",
          "x = −7 or x = −2",
        ],
        answerIndex: 0,
        explanation:
          "Find two numbers with product −14 and sum −5: they are −7 and +2. So (x − 7)(x + 2) = 0, giving x = 7 or x = −2. The other options mix up signs — check by expanding: (x − 7)(x + 2) = x² − 5x − 14. ✓",
        guideRef: "Quadratic equations: factorising",
        difficulty: "core",
        hints: [
          "You need two numbers that multiply to −14 and add to −5.",
          "The product is negative, so the two numbers have opposite signs, and the bigger one (in size) is negative.",
          "Try 7 and 2: which one takes the minus sign so they add to −5? Then use the zero product principle.",
        ],
        strategy: "work backwards",
      },
      {
        id: "equ-quiz-mcq-05",
        question: "Write x² + 6x − 2 in completed square form.",
        options: [
          "(x + 3)² − 11",
          "(x + 3)² + 7",
          "(x + 3)² − 2",
          "(x + 6)² − 38",
        ],
        answerIndex: 0,
        explanation:
          "Halve 6 to get 3: x² + 6x = (x + 3)² − 9. Then subtract 2: (x + 3)² − 9 − 2 = (x + 3)² − 11. Option (x + 3)² + 7 wrongly ADDS the 9; (x + 3)² − 2 forgets to subtract it; (x + 6)² fails to halve the coefficient.",
        guideRef: "Completing the square",
        difficulty: "core",
        hints: [
          "Halve the coefficient of x to find the number inside the bracket.",
          "(x + 3)² expands to x² + 6x + 9 — that is 9 more than you want.",
          "Correct for the extra 9, then deal with the −2 as well.",
        ],
        strategy: "work backwards",
      },
      {
        id: "equ-quiz-mcq-06",
        question: "What is the minimum point of the curve y = (x − 4)² + 3?",
        options: ["(4, 3)", "(−4, 3)", "(4, −3)", "(3, 4)"],
        answerIndex: 0,
        explanation:
          "The square (x − 4)² is never negative and equals 0 exactly when x = 4; there y = 3. So the minimum point is (4, 3). Choosing (−4, 3) applies the sign flip the wrong way: the bracket is (x − 4), so it vanishes at x = +4.",
        guideRef: "Completing the square",
        difficulty: "warmup",
      },
      {
        id: "equ-quiz-mcq-07",
        question: "Solve the simultaneous equations 2x + y = 7 and x − y = 2.",
        options: [
          "x = 3, y = 1",
          "x = 1, y = 3",
          "x = 3, y = −1",
          "x = 2, y = 3",
        ],
        answerIndex: 0,
        explanation:
          "The y terms have opposite signs, so ADD the equations: 3x = 9, x = 3. Then from x − y = 2, y = 1. Check both: 2(3) + 1 = 7 ✓ and 3 − 1 = 2 ✓. Option (3, −1) fails the first equation; (1, 3) and (2, 3) fail the second.",
        guideRef: "Simultaneous equations",
        difficulty: "core",
        hints: [
          "Look at the y coefficients: +1 and −1. Do you add or subtract?",
          "Different signs add: adding the equations makes y vanish.",
          "Once you have x, substitute into the simpler equation x − y = 2 to find y.",
        ],
        strategy: "exploit symmetry",
      },
      {
        id: "equ-quiz-mcq-08",
        question: "Solve the inequality 5 − 2x > 11.",
        options: ["x < −3", "x > −3", "x < 3", "x > 3"],
        answerIndex: 0,
        explanation:
          "Subtract 5: −2x > 6. Dividing by −2 flips the sign: x < −3. Test x = −4: 5 − 2(−4) = 13 > 11 ✓. Option x > −3 forgets the flip; x < 3 and x > 3 come from sign slips with the 6.",
        guideRef: "Inequalities and the number line",
        difficulty: "core",
        hints: [
          "Get the x term alone first by subtracting 5 from both sides.",
          "You now need to divide by −2. What special rule applies?",
          "Dividing by a negative flips the inequality. Check your answer by testing one value in the ORIGINAL inequality.",
        ],
        strategy: "try small cases",
      },
      {
        id: "equ-quiz-mcq-09",
        question: "How many integers n satisfy −3 < 2n ≤ 6?",
        options: ["5", "4", "6", "3"],
        answerIndex: 0,
        explanation:
          "Divide all three parts by 2: −1.5 < n ≤ 3. The integers are −1, 0, 1, 2, 3 — five of them. Answering 4 usually means missing 0 or wrongly excluding 3 (it IS included because of ≤); answering 6 means wrongly including −2 (but −2 < −1.5 fails).",
        guideRef: "Inequalities and the number line",
        difficulty: "core",
        hints: [
          "First make the middle just n by dividing everything by 2.",
          "You get −1.5 < n ≤ 3. Which whole numbers live strictly above −1.5?",
          "List them one by one and check the endpoints: is 3 allowed? Is −2?",
        ],
        strategy: "consider extremes",
      },
      {
        id: "equ-quiz-mcq-10",
        question:
          "The line y = x + 1 meets the circle x² + y² = 25 at two points. One of those points is:",
        options: ["(3, 4)", "(4, 3)", "(3, −4)", "(−3, 4)"],
        answerIndex: 0,
        explanation:
          "Substitute y = x + 1 into the circle: x² + (x + 1)² = 25, so 2x² + 2x − 24 = 0, i.e. x² + x − 12 = 0, giving (x + 4)(x − 3) = 0, x = 3 or x = −4. With x = 3, y = 4: the point (3, 4). The trap options (4, 3), (3, −4) and (−3, 4) all lie ON the circle (their squares sum to 25) but fail y = x + 1.",
        guideRef: "Simultaneous equations",
        difficulty: "challenge",
        hints: [
          "A point on BOTH graphs must satisfy both equations — being on the circle alone is not enough.",
          "Substitute y = x + 1 into x² + y² = 25 and expand carefully.",
          "You should reach x² + x − 12 = 0. Factorise, then find y from the LINE equation.",
        ],
        strategy: "introduce a variable",
      },
    ],
    qa: [
      {
        id: "equ-quiz-qa-01",
        question: "Solve 4(2x − 3) = 10x − 7.",
        modelAnswer:
          "Expand the bracket: 8x − 12 = 10x − 7.\nSubtract 8x from both sides: −12 = 2x − 7.\nAdd 7 to both sides: −5 = 2x.\nDivide by 2: x = −5/2 (i.e. x = −2.5).\nCheck: 4(2 × −2.5 − 3) = 4(−8) = −32 and 10(−2.5) − 7 = −32. ✓",
        markScheme: ["x = -5/2", "-2.5", "8x - 12", "collect terms", "expand"],
        commonError:
          "Expanding 4(2x − 3) as 8x − 3 (only multiplying the first term). Every term inside the bracket gets multiplied by 4.",
        guideRef: "The balance idea: solving linear equations",
        difficulty: "warmup",
      },
      {
        id: "equ-quiz-qa-02",
        question:
          "The length of a rectangle is 3 cm more than its width. Its perimeter is 54 cm. Find the area of the rectangle.",
        modelAnswer:
          "Let w = the width in cm. Then the length is w + 3.\nPerimeter: 2(w + w + 3) = 54, so 2(2w + 3) = 54.\nDivide by 2: 2w + 3 = 27, so 2w = 24 and w = 12.\nWidth = 12 cm, length = 15 cm.\nArea = 12 × 15 = 180 cm².",
        markScheme: ["180", "cm²", "w + 3", "2w + 3 = 27", "width 12", "length 15"],
        commonError:
          "Stopping at w = 12 — the question asks for the AREA, not the width. Always re-read the last line of the question.",
        guideRef: "Forming equations from words and shapes",
        difficulty: "core",
        hints: [
          "Introduce a variable: let the width be w cm. What is the length in terms of w?",
          "Write the perimeter of the rectangle in terms of w and set it equal to 54.",
          "Solve 2(2w + 3) = 54 for w — and remember the question asks for the area at the end.",
        ],
        strategy: "introduce a variable",
      },
      {
        id: "equ-quiz-qa-03",
        question: "Solve x² = 5x + 24.",
        modelAnswer:
          "Rearrange to zero: x² − 5x − 24 = 0.\nFind two numbers with product −24 and sum −5: −8 and +3.\nFactorise: (x − 8)(x + 3) = 0.\nBy the zero product principle, x = 8 or x = −3.\nCheck x = 8: 64 = 40 + 24 ✓. Check x = −3: 9 = −15 + 24 ✓.",
        markScheme: ["x = 8", "x = -3", "x² - 5x - 24 = 0", "factorise", "(x - 8)(x + 3)"],
        commonError:
          "Trying to factorise x² = 5x + 24 without first rearranging to = 0. The zero product principle only works when one side is zero.",
        guideRef: "Quadratic equations: factorising",
        difficulty: "core",
        hints: [
          "Everything to one side first — a quadratic must equal zero before you factorise.",
          "You need two numbers multiplying to −24 and adding to −5.",
          "One of the pair 8 and 3 takes a minus sign. Which way round makes the sum −5?",
        ],
        strategy: "work backwards",
      },
      {
        id: "equ-quiz-qa-04",
        question:
          "Solve x² − 8x + 12 = 0 (a) by factorising, (b) by completing the square. Check the two methods agree.",
        modelAnswer:
          "(a) Factorising: two numbers with product +12 and sum −8 are −2 and −6, so (x − 2)(x − 6) = 0, giving x = 2 or x = 6.\n(b) Completing the square: x² − 8x + 12 = (x − 4)² − 16 + 12 = (x − 4)² − 4. Setting this to zero: (x − 4)² = 4, so x − 4 = ±2, giving x = 6 or x = 2.\nBoth methods give x = 2 and x = 6. ✓",
        markScheme: ["x = 2", "x = 6", "(x - 2)(x - 6)", "(x - 4)² - 4", "±2"],
        commonError:
          "Writing x − 4 = 2 only, forgetting the negative square root. Squares have TWO square roots, so (x − 4)² = 4 gives x − 4 = ±2.",
        guideRef: "Completing the square",
        difficulty: "core",
        hints: [
          "For (a): what two numbers multiply to +12 and add to −8? Both must be negative.",
          "For (b): halve −8 to get the bracket (x − 4), then adjust the constant.",
          "(x − 4)² = 4 has two solutions — do not lose the negative root.",
        ],
        strategy: "exploit symmetry",
        solutions: [
          {
            label: "Factorising (the elegant route here)",
            steps: [
              "Product +12 and sum −8 means both numbers are negative: −2 and −6.",
              "x² − 8x + 12 = (x − 2)(x − 6) = 0.",
              "Zero product principle: x = 2 or x = 6.",
              "Because the coefficients factorise so cleanly, this route takes three lines — spot-the-factors first is the elegant move whenever the numbers are kind.",
            ],
          },
          {
            label: "Completing the square",
            steps: [
              "Halve the x-coefficient: x² − 8x = (x − 4)² − 16.",
              "So the equation becomes (x − 4)² − 16 + 12 = 0, i.e. (x − 4)² = 4.",
              "Square root both sides WITH ±: x − 4 = ±2.",
              "x = 4 + 2 = 6 or x = 4 − 2 = 2 — the same pair, and as a bonus this form shows the roots sit symmetrically about x = 4.",
            ],
          },
        ],
      },
      {
        id: "equ-quiz-qa-05",
        question:
          "Solve 3x² + 7x − 5 = 0, giving your answers correct to 2 decimal places.",
        modelAnswer:
          "The instruction '2 decimal places' signals the quadratic formula. Here a = 3, b = 7, c = −5.\nDiscriminant: b² − 4ac = 49 − 4(3)(−5) = 49 + 60 = 109.\nx = (−7 ± √109) / 6.\n√109 ≈ 10.4403.\nx = (−7 + 10.4403)/6 ≈ 0.57 or x = (−7 − 10.4403)/6 ≈ −2.91 (both to 2 d.p.).",
        markScheme: ["0.57", "-2.91", "109", "quadratic formula", "√109"],
        commonError:
          "Computing b² − 4ac as 49 − 60 = −11 by mishandling c = −5. The two minus signs multiply to give PLUS 60, so the discriminant is 109.",
        guideRef: "The quadratic formula",
        difficulty: "core",
        hints: [
          "'Correct to 2 decimal places' is code for a particular method — which one?",
          "Write down a = 3, b = 7, c = −5 with their signs before substituting.",
          "Careful with −4ac: it is −4 × 3 × (−5) = +60. Keep full calculator accuracy until the final rounding.",
        ],
        strategy: "work backwards",
      },
      {
        id: "equ-quiz-qa-06",
        question:
          "Solve the simultaneous equations y = 2x − 3 and x² + y² = 18. Give exact answers.",
        modelAnswer:
          "Substitute the linear equation into the circle: x² + (2x − 3)² = 18.\nExpand: x² + 4x² − 12x + 9 = 18, so 5x² − 12x − 9 = 0.\nFactorise: (5x + 3)(x − 3) = 0, so x = 3 or x = −3/5.\nFind each y from the LINE: x = 3 gives y = 2(3) − 3 = 3; x = −3/5 gives y = −6/5 − 3 = −21/5.\nSolutions: (x, y) = (3, 3) and (x, y) = (−3/5, −21/5).\nCheck: 3² + 3² = 18 ✓ and 9/25 + 441/25 = 450/25 = 18 ✓.",
        markScheme: [
          "x = 3, y = 3",
          "x = -3/5, y = -21/5",
          "5x² - 12x - 9 = 0",
          "substitute",
          "(5x + 3)(x - 3)",
        ],
        commonError:
          "Finding the two x-values and then pairing them with the wrong y-values (or finding y from the circle, which gives ± ambiguity). Always compute each y from the LINEAR equation using its matching x.",
        guideRef: "Simultaneous equations",
        difficulty: "challenge",
        hints: [
          "One equation is linear and one is quadratic — which one gets substituted into which?",
          "Replace y with (2x − 3) in the circle equation and expand (2x − 3)² carefully: it has three terms.",
          "You should reach 5x² − 12x − 9 = 0. It factorises — look for factors of 5 × (−9).",
          "Each x pairs with exactly one y, found from y = 2x − 3.",
        ],
        strategy: "introduce a variable",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "equ-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "equ-mcq-p1-q01",
            question: "Solve x/3 + 2 = 7.",
            options: ["x = 15", "x = 27", "x = 5/3", "x = 3"],
            answerIndex: 0,
            explanation:
              "Subtract 2: x/3 = 5. Multiply by 3: x = 15. Answering 27 comes from adding 2 before multiplying (multiplying the 7 by 3 first without subtracting); 5/3 comes from dividing instead of multiplying.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "warmup",
          },
          {
            id: "equ-mcq-p1-q02",
            question: "Solve 7 − x = 4x + 2.",
            options: ["x = 1", "x = −1", "x = 5/3", "x = 3"],
            answerIndex: 0,
            explanation:
              "Add x to both sides: 7 = 5x + 2. Subtract 2: 5 = 5x, so x = 1. Check: 7 − 1 = 6 and 4(1) + 2 = 6 ✓. The distractor 5/3 comes from collecting the x terms as 3x instead of 5x.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "warmup",
          },
          {
            id: "equ-mcq-p1-q03",
            question: "Solve 2(3x + 1) − 3(x − 4) = 26.",
            options: ["x = 4", "x = 12", "x = 20/3", "x = 6"],
            answerIndex: 0,
            explanation:
              "Expand carefully: 6x + 2 − 3x + 12 = 26 (note −3 × −4 = +12). So 3x + 14 = 26, 3x = 12, x = 4. Answering 12 comes from the classic slip −3(x − 4) = −3x − 12; answering 20/3 from expanding the second bracket as −3x + 4.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "core",
            hints: [
              "Expand both brackets before doing anything else.",
              "Watch the second bracket: −3 multiplied by −4 gives what sign?",
              "You should reach 3x + 14 = 26. Finish from there.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "equ-mcq-p1-q04",
            question: "Solve x² + 3x − 28 = 0.",
            options: [
              "x = −7 or x = 4",
              "x = 7 or x = −4",
              "x = 7 or x = 4",
              "x = −7 or x = −4",
            ],
            answerIndex: 0,
            explanation:
              "Two numbers with product −28 and sum +3: +7 and −4. So (x + 7)(x − 4) = 0, giving x = −7 or x = 4. Note the solutions are the NEGATIVES of the numbers in the brackets — a frequent mix-up that produces the option 'x = 7 or x = −4'.",
            guideRef: "Quadratic equations: factorising",
            difficulty: "core",
            hints: [
              "Find two numbers with product −28 and sum +3.",
              "Opposite signs (product is negative), and the larger one is positive (sum is positive).",
              "From (x + 7)(x − 4) = 0, each bracket equals zero — solve each little equation.",
            ],
            strategy: "work backwards",
          },
          {
            id: "equ-mcq-p1-q05",
            question: "Which of these equals x² − 10x + 7?",
            options: [
              "(x − 5)² − 18",
              "(x − 5)² + 32",
              "(x − 10)² − 93",
              "(x − 5)² − 7",
            ],
            answerIndex: 0,
            explanation:
              "x² − 10x = (x − 5)² − 25, so x² − 10x + 7 = (x − 5)² − 25 + 7 = (x − 5)² − 18. Option (x − 5)² + 32 wrongly ADDS 25; (x − 10)² fails to halve −10; (x − 5)² − 7 forgets the −25 correction entirely.",
            guideRef: "Completing the square",
            difficulty: "core",
            hints: [
              "Halve the −10 to find the bracket.",
              "(x − 5)² expands to x² − 10x + 25, which is 25 too big.",
              "Subtract the extra 25, then combine with the +7.",
            ],
            strategy: "work backwards",
          },
          {
            id: "equ-mcq-p1-q06",
            question: "Solve the simultaneous equations 3x + 2y = 12 and x − 2y = 4.",
            options: [
              "x = 4, y = 0",
              "x = 2, y = 3",
              "x = 4, y = 4",
              "x = 0, y = 4",
            ],
            answerIndex: 0,
            explanation:
              "The y terms are +2y and −2y: different signs, so ADD: 4x = 16, x = 4. Then 4 − 2y = 4 gives y = 0. Check: 3(4) + 0 = 12 ✓. The trap (2, 3) satisfies the first equation only — always check both.",
            guideRef: "Simultaneous equations",
            difficulty: "core",
            hints: [
              "Look at the y coefficients: +2 and −2. Add or subtract?",
              "Different signs add — the y terms cancel immediately.",
              "Do not panic if a variable turns out to be 0; substitute x = 4 back to see it.",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "equ-mcq-p1-q07",
            question: "Solve the inequality 3(x − 2) ≤ 5x + 4.",
            options: ["x ≥ −5", "x ≤ −5", "x ≥ −1", "x ≤ 5"],
            answerIndex: 0,
            explanation:
              "Expand: 3x − 6 ≤ 5x + 4. Subtract 3x: −6 ≤ 2x + 4. Subtract 4: −10 ≤ 2x, so x ≥ −5. Dividing by POSITIVE 2 does not flip the sign; x ≤ −5 flips it unnecessarily. Test x = 0: −6 ≤ 4 ✓, consistent with x ≥ −5.",
            guideRef: "Inequalities and the number line",
            difficulty: "core",
            hints: [
              "Expand the bracket, then collect x terms on the side with the bigger coefficient to keep it positive.",
              "Moving the 3x to the right gives −10 ≤ 2x. No negative division needed.",
              "Test a value such as x = 0 in the original to confirm which way the answer points.",
            ],
            strategy: "try small cases",
          },
          {
            id: "equ-mcq-p1-q08",
            question:
              "For which positive value of k does the equation x² + kx + 9 = 0 have exactly one solution?",
            options: ["k = 6", "k = 3", "k = 9", "k = 81"],
            answerIndex: 0,
            explanation:
              "Exactly one (repeated) solution means the discriminant is zero: k² − 4(1)(9) = 0, so k² = 36 and k = 6 (taking the positive value). Then x² + 6x + 9 = (x + 3)² — a perfect square touching the x-axis once. k = 3 halves instead of square-rooting; k = 9 and k = 81 confuse c with the discriminant.",
            guideRef: "The quadratic formula",
            difficulty: "challenge",
            hints: [
              "How many solutions a quadratic has is controlled by one particular expression — which?",
              "One repeated solution means b² − 4ac = 0.",
              "Here b = k, a = 1, c = 9. Set up k² − 36 = 0 and take the positive root.",
            ],
            strategy: "consider extremes",
          },
        ],
      },
      {
        id: "equ-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "equ-mcq-p2-q01",
            question: "Solve 5(x + 2) = 35.",
            options: ["x = 5", "x = 33/5", "x = 7", "x = 9"],
            answerIndex: 0,
            explanation:
              "Divide both sides by 5: x + 2 = 7, so x = 5. Answering 33/5 comes from expanding as 5x + 2 = 35; answering 7 stops after dividing without subtracting the 2.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "warmup",
          },
          {
            id: "equ-mcq-p2-q02",
            question: "x² = 49 and x < 0. What is x?",
            options: ["x = −7", "x = 7", "x = −24.5", "x = −√7"],
            answerIndex: 0,
            explanation:
              "49 has two square roots, 7 and −7; the condition x < 0 picks x = −7. Answering −24.5 halves 49 instead of square-rooting it, and −√7 square-roots the wrong thing.",
            guideRef: "Completing the square",
            difficulty: "warmup",
          },
          {
            id: "equ-mcq-p2-q03",
            question: "Solve (2x − 1)/3 + (x + 2)/2 = 4.",
            options: ["x = 20/7", "x = 32/7", "x = 1", "x = 3"],
            answerIndex: 0,
            explanation:
              "Multiply every term by 6: 2(2x − 1) + 3(x + 2) = 24, so 4x − 2 + 3x + 6 = 24, giving 7x + 4 = 24 and x = 20/7. Answering 1 comes from dropping the multipliers 2 and 3; 32/7 from a sign slip on the +6.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "core",
            hints: [
              "The denominators are 3 and 2 — what is the smallest number that clears both?",
              "Multiply EVERY term by 6, including the 4 on the right.",
              "You should reach 7x + 4 = 24. Solve from there.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "equ-mcq-p2-q04",
            question: "Solve 2x² − 7x + 3 = 0.",
            options: [
              "x = 1/2 or x = 3",
              "x = −1/2 or x = −3",
              "x = 1/2 or x = −3",
              "x = 2 or x = 3",
            ],
            answerIndex: 0,
            explanation:
              "Factorise: (2x − 1)(x − 3) = 0 (check: 2x² − 6x − x + 3 = 2x² − 7x + 3 ✓). So x = 1/2 or x = 3. The all-negative option comes from misreading the signs; x = 2 or 3 forgets the coefficient 2 halves one root.",
            guideRef: "Quadratic equations: factorising",
            difficulty: "core",
            hints: [
              "With a leading 2, try brackets of the form (2x + a)(x + b).",
              "You need a × b = +3 and the cross terms to total −7x, so both signs are negative.",
              "From (2x − 1)(x − 3) = 0, remember 2x − 1 = 0 gives a FRACTION for x.",
            ],
            strategy: "work backwards",
          },
          {
            id: "equ-mcq-p2-q05",
            question:
              "Using the quadratic formula, the exact solutions of x² + 4x − 1 = 0 are:",
            options: [
              "x = −2 ± √5",
              "x = 2 ± √5",
              "x = −4 ± √5",
              "x = −2 ± √3",
            ],
            answerIndex: 0,
            explanation:
              "a = 1, b = 4, c = −1: discriminant is 16 + 4 = 20, so x = (−4 ± √20)/2 = (−4 ± 2√5)/2 = −2 ± √5. Options with +2 drop the minus on b; √3 comes from miscalculating the discriminant as 16 − 4 = 12.",
            guideRef: "The quadratic formula",
            difficulty: "core",
            hints: [
              "Write out a, b, c with signs: c is −1, so −4ac is positive.",
              "√20 simplifies — pull out the largest square factor.",
              "Divide BOTH terms of the numerator by 2, not just one.",
            ],
            strategy: "work backwards",
          },
          {
            id: "equ-mcq-p2-q06",
            question: "Solve the simultaneous equations y = 2x + 1 and 3x + 2y = 16.",
            options: [
              "x = 2, y = 5",
              "x = 5, y = 2",
              "x = 1, y = 3",
              "x = 2, y = 4",
            ],
            answerIndex: 0,
            explanation:
              "Substitute y = 2x + 1 into the second: 3x + 2(2x + 1) = 16, so 7x + 2 = 16, x = 2 and y = 2(2) + 1 = 5. Check: 3(2) + 2(5) = 16 ✓. The pair (2, 4) forgets the +1 when finding y; (5, 2) swaps the values.",
            guideRef: "Simultaneous equations",
            difficulty: "core",
            hints: [
              "One equation already gives y in terms of x — perfect for substitution.",
              "Replace y with (2x + 1) in 3x + 2y = 16, brackets and all.",
              "After finding x, use y = 2x + 1 (the easier equation) to get y.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "equ-mcq-p2-q07",
            question: "Solve −5 < 2x + 1 ≤ 7.",
            options: [
              "−3 < x ≤ 3",
              "−3 ≤ x < 3",
              "−2 < x ≤ 4",
              "−6 < x ≤ 6",
            ],
            answerIndex: 0,
            explanation:
              "Do the same to all three parts. Subtract 1: −6 < 2x ≤ 6. Divide by 2: −3 < x ≤ 3. The strict < stays with −3 and the ≤ stays with 3; swapping them gives the second option. Forgetting to halve gives −6 < x ≤ 6.",
            guideRef: "Inequalities and the number line",
            difficulty: "core",
            hints: [
              "Treat it as a three-part sandwich: whatever you do, do to all three parts.",
              "Subtract 1 everywhere first, then divide everywhere by 2.",
              "The symbols do not change type: < stays <, ≤ stays ≤ (dividing by a POSITIVE never flips).",
            ],
            strategy: "look for invariants",
          },
          {
            id: "equ-mcq-p2-q08",
            question:
              "p and q are the two solutions of x² − 6x + 2 = 0. What is the value of p + q + pq?",
            options: ["8", "4", "6 + 2√7", "11"],
            answerIndex: 0,
            explanation:
              "Completing the square gives (x − 3)² = 7, so the roots are p = 3 + √7 and q = 3 − √7. Then p + q = 6 and pq = (3 + √7)(3 − √7) = 9 − 7 = 2, so p + q + pq = 8. Elegant shortcut: for x² + bx + c = 0 the roots always sum to −b and multiply to c, so the answer is 6 + 2 without ever finding the roots. Option '6 + 2√7' multiplies the surds incorrectly.",
            guideRef: "Completing the square",
            difficulty: "challenge",
            hints: [
              "You could find the roots exactly by completing the square — they will involve √7.",
              "The roots are 3 ± √7. Adding them kills the surds; what happens when you multiply them?",
              "(3 + √7)(3 − √7) is a difference of two squares.",
              "Deeper pattern: expand (x − p)(x − q) and compare with x² − 6x + 2 — the sum and product of the roots are sitting in the coefficients.",
            ],
            strategy: "exploit symmetry",
          },
        ],
      },
      {
        id: "equ-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "equ-mcq-p3-q01",
            question: "Solve 9 = 3(2x − 5).",
            options: ["x = 4", "x = 7/3", "x = −1", "x = 6"],
            answerIndex: 0,
            explanation:
              "Divide both sides by 3: 3 = 2x − 5, so 2x = 8 and x = 4. Answering 7/3 comes from expanding as 6x − 5; answering −1 from mis-signing the 5 as 3 = 2x + 5.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "warmup",
          },
          {
            id: "equ-mcq-p3-q02",
            question: "Solve 2x + 9 = 3.",
            options: ["x = −3", "x = 3", "x = 6", "x = −6"],
            answerIndex: 0,
            explanation:
              "Subtract 9: 2x = −6, so x = −3. A negative answer is perfectly fine — check: 2(−3) + 9 = 3 ✓. Answering 6 adds 9 instead of subtracting; −6 forgets to divide by 2.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "warmup",
          },
          {
            id: "equ-mcq-p3-q03",
            question:
              "I think of a number, double it and add 7. The result is the same as 25 minus my number. What was my number?",
            options: ["6", "9", "18", "32/3"],
            answerIndex: 0,
            explanation:
              "Let the number be n: 2n + 7 = 25 − n. Add n: 3n + 7 = 25, so 3n = 18 and n = 6. Check: double 6 add 7 is 19, and 25 − 6 = 19 ✓. Answering 9 solves 2n + 7 = 25, ignoring the 'minus my number'.",
            guideRef: "Forming equations from words and shapes",
            difficulty: "core",
            hints: [
              "Introduce a variable: call the number n and translate the sentence word by word.",
              "'The result is the same as' is your equals sign: 2n + 7 = 25 − n.",
              "Collect the n terms on the left by adding n to both sides.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "equ-mcq-p3-q04",
            question: "Solve x² = 7x.",
            options: [
              "x = 0 or x = 7",
              "x = 7 only",
              "x = 0 only",
              "x = ±√7",
            ],
            answerIndex: 0,
            explanation:
              "Rearrange and factorise: x² − 7x = 0, so x(x − 7) = 0, giving x = 0 or x = 7. Dividing both sides by x — which produces 'x = 7 only' — silently assumes x ≠ 0 and throws away a valid solution. ±√7 confuses this with x² = 7.",
            guideRef: "Quadratic equations: factorising",
            difficulty: "core",
            hints: [
              "Tempted to divide both sides by x? What value of x would that move quietly forbid?",
              "Bring everything to one side and look for a common factor.",
              "x(x − 7) = 0: the zero product principle gives TWO solutions.",
            ],
            strategy: "consider extremes",
          },
          {
            id: "equ-mcq-p3-q05",
            question:
              "The curve y = x² + 8x + 3 is written in the form y = (x + p)² + q. What is its minimum value of y?",
            options: ["−13", "3", "−16", "13"],
            answerIndex: 0,
            explanation:
              "x² + 8x + 3 = (x + 4)² − 16 + 3 = (x + 4)² − 13. The squared bracket is at least 0, so the minimum value of y is −13 (at x = −4). Answering −16 forgets to add back the 3; answering 3 ignores the −16 correction.",
            guideRef: "Completing the square",
            difficulty: "core",
            hints: [
              "Complete the square: halve the 8 to build the bracket.",
              "(x + 4)² = x² + 8x + 16, so you must subtract 16 before adding the 3.",
              "In (x + 4)² − 13, how small can the bracket possibly be?",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "equ-mcq-p3-q06",
            question: "Solve the simultaneous equations 3x + 4y = 10 and 5x − 2y = 8.",
            options: [
              "x = 2, y = 1",
              "x = 1, y = 2",
              "x = 2, y = −1",
              "x = −2, y = 1",
            ],
            answerIndex: 0,
            explanation:
              "Double the second equation: 10x − 4y = 16. The y terms are now +4y and −4y, so add: 13x = 26, x = 2. Then 3(2) + 4y = 10 gives y = 1. Check the second: 5(2) − 2(1) = 8 ✓. Option (2, −1) fails it: 10 + 2 = 12 ≠ 8.",
            guideRef: "Simultaneous equations",
            difficulty: "core",
            hints: [
              "Neither variable matches yet — multiply ONE equation to make a pair of coefficients match.",
              "Doubling 5x − 2y = 8 makes the y coefficients 4 and −4.",
              "Different signs add. Then substitute back and CHECK in the equation you did not use.",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "equ-mcq-p3-q07",
            question: "What is the largest integer n satisfying 4n − 3 < 18?",
            options: ["5", "6", "4", "21"],
            answerIndex: 0,
            explanation:
              "Add 3: 4n < 21, so n < 21/4 = 5.25. The largest integer below 5.25 is 5, and indeed 4(5) − 3 = 17 < 18 ✓. Answering 6 rounds 5.25 up, but 4(6) − 3 = 21, which is not less than 18; answering 4 satisfies the inequality but is not the largest such integer.",
            guideRef: "Inequalities and the number line",
            difficulty: "core",
            hints: [
              "Solve the inequality first, leaving n on its own.",
              "n < 5.25 — but n must be a whole number.",
              "Test your candidate in the original: does 4n − 3 stay below 18?",
            ],
            strategy: "consider extremes",
          },
          {
            id: "equ-mcq-p3-q08",
            question: "Solve 3/(x − 1) + 2/(x + 1) = 2.",
            options: [
              "x = −1/2 or x = 3",
              "x = 1/2 or x = −3",
              "x = 3 only",
              "x = −1 or x = 3",
            ],
            answerIndex: 0,
            explanation:
              "Multiply through by (x − 1)(x + 1): 3(x + 1) + 2(x − 1) = 2(x² − 1), so 5x + 1 = 2x² − 2, giving 2x² − 5x − 3 = 0, which factorises as (2x + 1)(x − 3) = 0: x = −1/2 or x = 3. Check x = −1/2: 3/(−3/2) + 2/(1/2) = −2 + 4 = 2 ✓. Option 'x = −1 or 3' is a trap: x = −1 makes a denominator zero and could never be a solution anyway.",
            guideRef: "Quadratic equations: factorising",
            difficulty: "challenge",
            hints: [
              "Clear the fractions: multiply every term by (x − 1)(x + 1).",
              "(x − 1)(x + 1) is a difference of two squares — the right-hand side becomes 2(x² − 1).",
              "Collect everything into a quadratic equal to zero: you should get 2x² − 5x − 3 = 0.",
              "Factorise with a (2x ± ?) bracket, and check neither solution makes an original denominator zero.",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "equ-qa-paper-1",
        title: "Practice Paper 1 (Written Answers)",
        questions: [
          {
            id: "equ-qa-p1-q01",
            question: "Solve 5(2x − 1) = 3x + 16.",
            modelAnswer:
              "Expand: 10x − 5 = 3x + 16.\nSubtract 3x: 7x − 5 = 16.\nAdd 5: 7x = 21.\nDivide by 7: x = 3.\nCheck: 5(2 × 3 − 1) = 5 × 5 = 25 and 3(3) + 16 = 25 ✓.",
            markScheme: ["x = 3", "10x - 5", "7x = 21", "expand"],
            commonError:
              "Expanding 5(2x − 1) as 10x − 1: the 5 must multiply BOTH terms in the bracket.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "warmup",
          },
          {
            id: "equ-qa-p1-q02",
            question: "Solve (4x + 1)/3 − (x − 2)/2 = 3.",
            modelAnswer:
              "Multiply every term by 6 (the LCM of 3 and 2):\n2(4x + 1) − 3(x − 2) = 18.\nExpand: 8x + 2 − 3x + 6 = 18 (note −3 × −2 = +6).\nSimplify: 5x + 8 = 18, so 5x = 10 and x = 2.\nCheck: (9)/3 − (0)/2 = 3 ✓.",
            markScheme: ["x = 2", "multiply by 6", "2(4x + 1) - 3(x - 2)", "5x + 8 = 18"],
            commonError:
              "Expanding −3(x − 2) as −3x − 6. The minus times minus gives +6, and this single sign controls the whole answer.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "core",
            hints: [
              "Clear both fractions in one move — what do you multiply every term by?",
              "Keep the subtraction sign with the whole second fraction: it becomes −3(x − 2).",
              "Expand with care over signs; you should reach 5x + 8 = 18.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "equ-qa-p1-q03",
            question:
              "The angles of a triangle are x°, (2x + 10)° and (3x − 40)°. Work out the size of the largest angle.",
            modelAnswer:
              "Angles in a triangle sum to 180°:\nx + (2x + 10) + (3x − 40) = 180.\n6x − 30 = 180, so 6x = 210 and x = 35.\nThe angles are 35°, 2(35) + 10 = 80° and 3(35) − 40 = 65°.\nCheck: 35 + 80 + 65 = 180 ✓.\nThe largest angle is 80°.",
            markScheme: ["80", "6x - 30 = 180", "x = 35", "angle sum", "180"],
            commonError:
              "Stopping at x = 35 and giving that as the answer. The question asks for the largest ANGLE, which is 2x + 10 = 80°, not x itself.",
            guideRef: "Forming equations from words and shapes",
            difficulty: "core",
            hints: [
              "What do the three angles of any triangle add up to?",
              "Add the three expressions and set the total equal to 180.",
              "After finding x, work out all three angles — then pick the largest.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "equ-qa-p1-q04",
            question: "Solve x² + 2x − 35 = 0.",
            modelAnswer:
              "Find two numbers with product −35 and sum +2: +7 and −5.\nFactorise: (x + 7)(x − 5) = 0.\nZero product principle: x + 7 = 0 or x − 5 = 0.\nSo x = −7 or x = 5.\nCheck x = 5: 25 + 10 − 35 = 0 ✓.",
            markScheme: ["x = -7", "x = 5", "(x + 7)(x - 5)", "factorise"],
            commonError:
              "Reading the solutions straight off the brackets as +7 and −5. Each bracket is set to ZERO, so the solutions are the negatives: −7 and +5.",
            guideRef: "Quadratic equations: factorising",
            difficulty: "core",
            hints: [
              "Two numbers, product −35, sum +2.",
              "Try the factor pair 7 and 5 — which one is negative?",
              "Set each bracket equal to zero; the answers are NOT the same as the numbers in the brackets.",
            ],
            strategy: "work backwards",
          },
          {
            id: "equ-qa-p1-q05",
            question:
              "Solve 2x² + 5x − 1 = 0, giving your answers correct to 2 decimal places.",
            modelAnswer:
              "This does not factorise, so use the quadratic formula with a = 2, b = 5, c = −1.\nDiscriminant: b² − 4ac = 25 − 4(2)(−1) = 25 + 8 = 33.\nx = (−5 ± √33)/4.\n√33 ≈ 5.7446.\nx = (−5 + 5.7446)/4 ≈ 0.19 or x = (−5 − 5.7446)/4 ≈ −2.69 (2 d.p.).",
            markScheme: ["0.19", "-2.69", "33", "quadratic formula", "√33"],
            commonError:
              "Rounding √33 to 5.7 too early, which makes the final answers drift. Keep full calculator accuracy and round only at the very end.",
            guideRef: "The quadratic formula",
            difficulty: "core",
            hints: [
              "The '2 decimal places' instruction tells you which method to use.",
              "State a, b and c with their signs: c = −1 makes −4ac positive.",
              "Work out b² − 4ac first as its own step, then substitute into the formula.",
            ],
            strategy: "work backwards",
          },
          {
            id: "equ-qa-p1-q06",
            question:
              "The sum of the squares of two consecutive positive integers is 365. Find the two integers.",
            modelAnswer:
              "Let the smaller integer be n; the next is n + 1.\nn² + (n + 1)² = 365.\nExpand: n² + n² + 2n + 1 = 365, so 2n² + 2n − 364 = 0.\nDivide by 2: n² + n − 182 = 0.\nFactorise: 182 = 13 × 14, so (n + 14)(n − 13) = 0, giving n = 13 (rejecting n = −14 as the integers are positive).\nThe integers are 13 and 14. Check: 169 + 196 = 365 ✓.",
            markScheme: ["13", "14", "n² + (n + 1)² = 365", "n² + n - 182 = 0", "(n + 14)(n - 13)"],
            commonError:
              "Expanding (n + 1)² as n² + 1, losing the middle term 2n. Squaring a bracket always produces three terms.",
            guideRef: "Forming equations from words and shapes",
            difficulty: "challenge",
            hints: [
              "Introduce a variable for the smaller integer; write the next integer in terms of it.",
              "Translate 'sum of the squares is 365' into an equation and expand (n + 1)² fully.",
              "Simplify to n² + n − 182 = 0. To factorise 182, note that consecutive-ish factors work well: try numbers near √182 ≈ 13.5.",
              "One root is negative — why can you reject it?",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
      {
        id: "equ-qa-paper-2",
        title: "Practice Paper 2 (Written Answers)",
        questions: [
          {
            id: "equ-qa-p2-q01",
            question: "Solve 7 − 3x = 2x − 8.",
            modelAnswer:
              "Add 3x to both sides: 7 = 5x − 8.\nAdd 8: 15 = 5x.\nDivide by 5: x = 3.\nCheck: 7 − 9 = −2 and 6 − 8 = −2 ✓.",
            markScheme: ["x = 3", "5x", "15 = 5x", "collect terms"],
            commonError:
              "Collecting −3x and 2x as −5x or as −x on the wrong side. Adding 3x to BOTH sides keeps everything positive: 7 = 5x − 8.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "warmup",
          },
          {
            id: "equ-qa-p2-q02",
            question:
              "Solve the inequality 4(x + 3) > 7x − 3, and write down the largest integer that satisfies it.",
            modelAnswer:
              "Expand: 4x + 12 > 7x − 3.\nSubtract 4x: 12 > 3x − 3.\nAdd 3: 15 > 3x.\nDivide by 3: 5 > x, i.e. x < 5.\nOn a number line: open circle at 5, arrow pointing left.\nThe largest integer satisfying x < 5 is 4 (5 itself is excluded by the strict inequality).",
            markScheme: ["x < 5", "4", "4x + 12", "15 > 3x", "open circle"],
            commonError:
              "Giving 5 as the largest integer. The inequality is strict (x < 5), so 5 is NOT included — the answer is 4.",
            guideRef: "Inequalities and the number line",
            difficulty: "core",
            hints: [
              "Expand the bracket, then collect x terms on the RIGHT so the coefficient stays positive — no sign flip needed.",
              "You should reach 15 > 3x.",
              "x < 5: is 5 itself allowed? Look at the inequality symbol.",
            ],
            strategy: "consider extremes",
          },
          {
            id: "equ-qa-p2-q03",
            question:
              "(a) Write x² − 8x + 5 in the form (x − p)² + q. (b) Hence solve x² − 8x + 5 = 0, giving your answers in exact surd form.",
            modelAnswer:
              "(a) x² − 8x + 5 = (x − 4)² − 16 + 5 = (x − 4)² − 11. So p = 4, q = −11.\n(b) (x − 4)² − 11 = 0, so (x − 4)² = 11.\nSquare root both sides: x − 4 = ±√11.\nx = 4 + √11 or x = 4 − √11.",
            markScheme: ["4 ± √11", "(x - 4)² - 11", "x - 4 = ±√11", "p = 4", "q = -11"],
            commonError:
              "Writing x − 4 = √11 without the ±, losing one of the two solutions. Every positive number has two square roots.",
            guideRef: "Completing the square",
            difficulty: "core",
            hints: [
              "Halve the −8 to build the bracket, then correct the constant.",
              "'Hence' means use part (a): set (x − 4)² − 11 equal to zero.",
              "Isolate the squared bracket, then square root both sides — with both signs.",
            ],
            strategy: "work backwards",
          },
          {
            id: "equ-qa-p2-q04",
            question:
              "Solve the simultaneous equations 2x + 3y = 12 and 3x − y = 7. Show your method clearly.",
            modelAnswer:
              "Elimination: multiply the second equation by 3: 9x − 3y = 21.\nThe y terms are +3y and −3y, so add: 11x = 33, x = 3.\nSubstitute into 3x − y = 7: 9 − y = 7, so y = 2.\nCheck both: 2(3) + 3(2) = 12 ✓ and 3(3) − 2 = 7 ✓.\nSolution: x = 3, y = 2.",
            markScheme: ["x = 3", "y = 2", "11x = 33", "eliminate", "substitute"],
            commonError:
              "Multiplying only PART of an equation (e.g. writing 9x − y = 21). When you scale an equation, every single term gets multiplied.",
            guideRef: "Simultaneous equations",
            difficulty: "core",
            hints: [
              "Can you make the y coefficients match by multiplying one equation?",
              "Tripling the second equation gives −3y, ready to cancel with +3y.",
              "Different signs add. Then find y from the easier original equation, and check in BOTH.",
            ],
            strategy: "exploit symmetry",
            solutions: [
              {
                label: "Elimination",
                steps: [
                  "Multiply 3x − y = 7 by 3 to get 9x − 3y = 21, matching the 3y in the first equation.",
                  "Signs on y differ (+3y and −3y), so ADD: (2x + 3y) + (9x − 3y) = 12 + 21 gives 11x = 33.",
                  "x = 3; substitute into 3x − y = 7 to get 9 − y = 7, so y = 2.",
                  "Check in the unused equation: 2(3) + 3(2) = 12 ✓.",
                ],
              },
              {
                label: "Substitution (the elegant route here)",
                steps: [
                  "The second equation rearranges in one step: y = 3x − 7 — this easy rearrangement is what makes substitution slick for this pair.",
                  "Substitute into the first: 2x + 3(3x − 7) = 12.",
                  "Expand: 2x + 9x − 21 = 12, so 11x = 33 and x = 3.",
                  "Then y = 3(3) − 7 = 2. Same answer, and no scaling of equations needed.",
                ],
              },
            ],
          },
          {
            id: "equ-qa-p2-q05",
            question: "Solve 12/(x + 1) = x.",
            modelAnswer:
              "Multiply both sides by (x + 1): 12 = x(x + 1).\nExpand: 12 = x² + x, so x² + x − 12 = 0.\nFactorise: (x + 4)(x − 3) = 0.\nSo x = −4 or x = 3.\nNeither value makes x + 1 zero, so both are valid.\nCheck x = 3: 12/4 = 3 ✓. Check x = −4: 12/(−3) = −4 ✓.",
            markScheme: ["x = 3", "x = -4", "x² + x - 12 = 0", "(x + 4)(x - 3)", "multiply by x + 1"],
            commonError:
              "Multiplying only the 12 by (x + 1), or 'cancelling' to get 12 = x + 1. The whole of each side must be multiplied, turning the equation into a quadratic.",
            guideRef: "Quadratic equations: factorising",
            difficulty: "core",
            hints: [
              "Get rid of the fraction: multiply both sides by (x + 1).",
              "You get 12 = x(x + 1) — expand and bring everything to one side.",
              "Factorise x² + x − 12 = 0: product −12, sum +1.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "equ-qa-p2-q06",
            question:
              "The line y = x − 2 intersects the circle x² + y² = 10 at two points A and B. Find the coordinates of A and B.",
            modelAnswer:
              "Substitute y = x − 2 into the circle equation:\nx² + (x − 2)² = 10.\nExpand: x² + x² − 4x + 4 = 10, so 2x² − 4x − 6 = 0.\nDivide by 2: x² − 2x − 3 = 0.\nFactorise: (x − 3)(x + 1) = 0, so x = 3 or x = −1.\nFrom the line: x = 3 gives y = 1; x = −1 gives y = −3.\nA and B are (3, 1) and (−1, −3).\nCheck: 9 + 1 = 10 ✓ and 1 + 9 = 10 ✓.",
            markScheme: ["(3, 1)", "(-1, -3)", "x² - 2x - 3 = 0", "substitute", "(x - 3)(x + 1)"],
            commonError:
              "Expanding (x − 2)² as x² − 4 or x² + 4, losing the −4x middle term. Write it out as (x − 2)(x − 2) and expand fully.",
            guideRef: "Simultaneous equations",
            difficulty: "challenge",
            hints: [
              "Substitute the linear expression for y into the circle equation.",
              "(x − 2)² has three terms when expanded — do not skip the middle one.",
              "Divide your quadratic through by 2 before factorising to make life easier.",
              "Pair each x with its y USING THE LINE, and present the answers as coordinates.",
            ],
            strategy: "draw a diagram",
          },
        ],
      },
      {
        id: "equ-qa-paper-3",
        title: "Practice Paper 3 (Written Answers)",
        questions: [
          {
            id: "equ-qa-p3-q01",
            question: "Solve 3(x + 4) = 2(x + 9).",
            modelAnswer:
              "Expand both sides: 3x + 12 = 2x + 18.\nSubtract 2x: x + 12 = 18.\nSubtract 12: x = 6.\nCheck: 3(10) = 30 and 2(15) = 30 ✓.",
            markScheme: ["x = 6", "3x + 12", "2x + 18", "expand"],
            commonError:
              "Only multiplying the x terms: writing 3x + 4 = 2x + 9 (which gives x = 5). Both terms in each bracket must be multiplied.",
            guideRef: "The balance idea: solving linear equations",
            difficulty: "warmup",
          },
          {
            id: "equ-qa-p3-q02",
            question:
              "n is an integer such that −4 ≤ 3n + 2 < 14. Find all the possible values of n.",
            modelAnswer:
              "Work on all three parts at once.\nSubtract 2: −6 ≤ 3n < 12.\nDivide by 3: −2 ≤ n < 4.\nn is an integer, so n = −2, −1, 0, 1, 2, 3.\n(−2 is included because of ≤; 4 is excluded because of <.)",
            markScheme: ["-2, -1, 0, 1, 2, 3", "-2 ≤ n < 4", "subtract 2", "divide by 3"],
            commonError:
              "Including n = 4 in the list. The right-hand inequality is strict (< 14 leads to n < 4), so 4 is excluded — but −2 IS included.",
            guideRef: "Inequalities and the number line",
            difficulty: "core",
            hints: [
              "It is a three-part inequality: do each operation to all three parts.",
              "Undo the +2 first, then the ×3.",
              "From −2 ≤ n < 4, list the integers — and check each endpoint against its own symbol.",
            ],
            strategy: "consider extremes",
          },
          {
            id: "equ-qa-p3-q03",
            question:
              "Maya is three times as old as her brother Tom. In 6 years' time, Maya will be exactly twice as old as Tom. How old is Tom now?",
            modelAnswer:
              "Let Tom's age now be t years; then Maya is 3t.\nIn 6 years: Tom is t + 6 and Maya is 3t + 6.\n'Twice as old': 3t + 6 = 2(t + 6).\nExpand: 3t + 6 = 2t + 12, so t = 6.\nTom is 6 now (and Maya is 18). Check: in 6 years they are 12 and 24, and 24 = 2 × 12 ✓.",
            markScheme: ["6", "3t + 6 = 2(t + 6)", "t = 6", "let t"],
            commonError:
              "Writing the future condition as 3t = 2(t + 6), forgetting that Maya ALSO ages 6 years. Both people move 6 years into the future.",
            guideRef: "Forming equations from words and shapes",
            difficulty: "core",
            hints: [
              "Introduce a variable for Tom's age NOW, and write Maya's current age in terms of it.",
              "Write both of their ages in 6 years' time — both get 6 years older.",
              "'Maya will be twice as old as Tom' gives the equation. Solve it and sanity-check with real ages.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "equ-qa-p3-q04",
            question:
              "Solve 3x² = 4x + 2, giving your answers in exact simplified surd form.",
            modelAnswer:
              "Rearrange to zero: 3x² − 4x − 2 = 0, so a = 3, b = −4, c = −2.\nDiscriminant: b² − 4ac = 16 − 4(3)(−2) = 16 + 24 = 40.\nx = (4 ± √40)/6.\nSimplify the surd: √40 = √4 × √10 = 2√10.\nx = (4 ± 2√10)/6 = (2 ± √10)/3.",
            markScheme: ["(2 ± √10)/3", "40", "2√10", "3x² - 4x - 2 = 0", "quadratic formula"],
            commonError:
              "Cancelling (4 ± 2√10)/6 by dividing only the 4 and the 6, giving (2 ± 2√10)/3. Every term in the numerator must be divided by the common factor 2.",
            guideRef: "The quadratic formula",
            difficulty: "core",
            hints: [
              "Rearrange to = 0 first and read off a, b, c with their signs.",
              "b = −4, so −b = +4 and b² = 16; c = −2 makes −4ac positive.",
              "√40 simplifies — find the largest square factor of 40.",
              "Divide EVERY term in the numerator by 2 when cancelling with the 6.",
            ],
            strategy: "work backwards",
          },
          {
            id: "equ-qa-p3-q05",
            question: "Solve (x + 3)/x = x − 1.",
            modelAnswer:
              "Multiply both sides by x: x + 3 = x(x − 1).\nExpand: x + 3 = x² − x.\nRearrange to zero: x² − 2x − 3 = 0.\nFactorise: (x − 3)(x + 1) = 0, so x = 3 or x = −1.\nNeither value makes the denominator x equal to zero, so both are valid.\nCheck x = 3: 6/3 = 2 and 3 − 1 = 2 ✓. Check x = −1: 2/(−1) = −2 and −1 − 1 = −2 ✓.",
            markScheme: ["x = 3", "x = -1", "x² - 2x - 3 = 0", "(x - 3)(x + 1)", "multiply by x"],
            commonError:
              "Moving the x term across as x + 3 = x² + x (sign slip), which leads to the wrong quadratic. Collect terms carefully: x + x = 2x on the left, giving x² − 2x − 3 = 0.",
            guideRef: "Quadratic equations: factorising",
            difficulty: "core",
            hints: [
              "Clear the fraction by multiplying both sides by x.",
              "Expand x(x − 1) and bring everything to one side.",
              "You should reach x² − 2x − 3 = 0: product −3, sum −2.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "equ-qa-p3-q06",
            question:
              "Solve the simultaneous equations x + y = 7 and x² + y² = 29.",
            modelAnswer:
              "Substitute y = 7 − x into the second equation:\nx² + (7 − x)² = 29.\nExpand: x² + 49 − 14x + x² = 29, so 2x² − 14x + 20 = 0.\nDivide by 2: x² − 7x + 10 = 0.\nFactorise: (x − 2)(x − 5) = 0, so x = 2 or x = 5.\nFrom x + y = 7: x = 2 gives y = 5; x = 5 gives y = 2.\nSolutions: (x, y) = (2, 5) or (5, 2).\nCheck: 4 + 25 = 29 ✓.\n(Elegant alternative: (x + y)² = 49 = x² + y² + 2xy = 29 + 2xy, so xy = 10. Two numbers with sum 7 and product 10 are 2 and 5.)",
            markScheme: ["(2, 5)", "(5, 2)", "x² - 7x + 10 = 0", "substitute", "xy = 10"],
            commonError:
              "Giving only one of the two solution pairs. The symmetry of the equations means both (2, 5) and (5, 2) work — a full answer states both pairings.",
            guideRef: "Simultaneous equations",
            difficulty: "challenge",
            hints: [
              "One equation is linear: rearrange it to y = 7 − x and substitute.",
              "Expand (7 − x)² fully — three terms — and collect into a quadratic.",
              "There is also a slicker route: square the first equation and compare with the second. What does that tell you about xy?",
              "Sum 7 and product 10 — that is exactly the sum-and-product puzzle from the guide.",
            ],
            strategy: "exploit symmetry",
          },
        ],
      },
    ],
  },
};

export default topic;
