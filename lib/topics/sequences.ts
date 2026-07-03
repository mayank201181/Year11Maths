import type { Topic } from "../types";

const topic: Topic = {
  id: "sequences",
  title: "Sequences",
  subject: "Maths",
  icon: "🔁",
  intro:
    "Sequences are where algebra meets pattern-spotting. In this topic you will learn to describe patterns two different ways, capture arithmetic and quadratic sequences with an nth term formula, decide whether a number like 2026 ever appears in a sequence, and add up long lists of numbers in seconds using the trick a ten-year-old Gauss discovered. Arithmetic series (the Sn formula) is a 4MA1 Higher favourite — expect it on your paper.",
  guide: [
    {
      heading: "Two ways to describe a sequence",
      body:
        "A **sequence** is an ordered list of numbers. Each number is a **term**, and its place in the list is its **position** (n = 1, 2, 3, ...).\n\nThere are two ways to describe a sequence:\n\n- A **term-to-term rule** tells you how to get from one term to the next. For 5, 8, 11, 14, ... the rule is \"start at 5 and add 3\".\n- A **position-to-term rule** (the **nth term**) tells you how to jump straight to any term from its position. The same sequence has nth term 3n + 2, so the 100th term is 3 × 100 + 2 = 302 — no counting required.\n\nA term-to-term rule is easy to spot but slow to use: to find the 100th term you would need 99 additions. The nth term is the power tool.\n\nNot every sequence is built by adding a constant. Watch out for other families: the square numbers 1, 4, 9, 16, ... (nth term n²), the cube numbers 1, 8, 27, 64, ... (nth term n³), and Fibonacci-style sequences where each term is the sum of the two before it (2, 3, 5, 8, 13, ...).",
      discovery: {
        problem:
          "The sequence 7, 11, 15, 19, ... continues forever. Your friend starts adding 4 over and over to find the 1000th term. Can you find it before they reach the 20th term?",
        idea:
          "Every term is \"7 plus some number of 4s\". The 1000th term has had 4 added 999 times: 7 + 999 × 4 = 4003. A position-to-term formula (the nth term, here 4n + 3) turns a thousand steps into one calculation. That is why examiners — and mathematicians — prefer it.",
      },
      strategies: ["find a pattern", "try small cases"],
      keyPoints: [
        "A term-to-term rule links each term to the next (e.g. \"add 3\"); you must also state the first term.",
        "A position-to-term rule (nth term) gives any term directly from its position n.",
        "n is always a positive whole number: n = 1, 2, 3, ...",
        "Know the classics by sight: squares 1, 4, 9, 16, ...; cubes 1, 8, 27, ...; powers of 2: 2, 4, 8, 16, ...; Fibonacci-type sequences.",
      ],
    },
    {
      heading: "The nth term of an arithmetic sequence",
      body:
        "An **arithmetic sequence** goes up (or down) by the same amount each time. That fixed amount is the **common difference**, d. The first term is called a.\n\nTo find the nth term of an arithmetic sequence:\n\n- Find the common difference d. The nth term starts \"dn\".\n- Work out what to add or subtract so the formula gives the correct first term.\n\nFor 5, 12, 19, 26, ...: d = 7, so the nth term begins 7n. When n = 1, 7n = 7, but the first term is 5, so we subtract 2. The nth term is **7n − 2**. Always check with the second term: 7 × 2 − 2 = 12. Correct.\n\nDecreasing sequences have negative d. For 20, 17, 14, 11, ...: d = −3, so the nth term is −3n + something. When n = 1 we need 20, so the nth term is 23 − 3n.",
      discovery: {
        problem:
          "The sequence 4, 9, 14, 19, ... goes up in 5s — yet its nth term is NOT 5n. Why not, and how would you fix it?",
        idea:
          "5n generates 5, 10, 15, 20, ... — the right spacing but the wrong starting point. Our sequence sits exactly 1 below it, so the nth term is 5n − 1. Every arithmetic sequence is a \"times table, shifted\": d tells you which times table, and comparing with the first term tells you the shift.",
      },
      whyItWorks:
        "Start at a and take n − 1 steps of size d to reach the nth term: nth term = a + (n − 1)d. Expanding gives dn + (a − d), which is exactly the recipe \"multiply n by d, then adjust\". For 5, 12, 19, ...: a = 5, d = 7, so a − d = −2 and the nth term is 7n − 2 — the same answer the shortcut gives, now with a reason.",
      strategies: ["find a pattern", "introduce a variable", "work backwards"],
      keyPoints: [
        "nth term of an arithmetic sequence: a + (n − 1)d, which simplifies to dn + (a − d).",
        "The coefficient of n is always the common difference d.",
        "Decreasing sequences have negative d, e.g. 23 − 3n.",
        "Always verify your formula against at least two terms of the sequence.",
      ],
      thinkDeeper:
        "Plot the terms of an arithmetic sequence as points (n, term) and they lie on a straight line with gradient d. The nth term dn + (a − d) is just y = mx + c wearing a disguise — which is why arithmetic sequences are sometimes called linear sequences. What kind of sequence would give points lying on a parabola?",
    },
    {
      heading: "Is 2026 in the sequence?",
      body:
        "A classic exam task: \"Is 2026 a term of the sequence with nth term 4n + 2? Justify your answer.\"\n\nThe method is always the same:\n\n- Set the nth term equal to the target number.\n- Solve for n.\n- If n is a **positive whole number**, the number is in the sequence (and you know which term it is). If n is a fraction, a decimal or negative, it is not.\n\nHere: 4n + 2 = 2026 gives 4n = 2024, so n = 506. A positive integer — so yes, 2026 is the 506th term.\n\nCompare: is 2026 a term of 7n + 4? Then 7n = 2022, and 2022 ÷ 7 = 288.86..., not a whole number. So no. A full-marks justification shows the working: the 288th term is 2020 and the 289th term is 2027, so 2026 falls in the gap between consecutive terms.",
      discovery: {
        problem:
          "Without solving any equation, can you explain why 2026 can never appear in the sequence 3, 8, 13, 18, 23, ...?",
        idea:
          "Every term ends in a 3 or an 8 — the sequence cycles through those final digits forever. 2026 ends in 6, so it has no chance. Structure (here, last digits, or remainders after dividing by 5) can settle membership questions instantly. The equation method proves it formally: 5n − 2 = 2026 gives n = 405.6, not a whole number.",
      },
      strategies: ["work backwards", "look for invariants"],
      keyPoints: [
        "To test membership, solve nth term = target and check whether n is a positive integer.",
        "State the conclusion clearly: \"n = 506, which is a positive whole number, so 2026 is the 506th term.\"",
        "If n is not a whole number, strengthen your answer by naming the two consecutive terms the target falls between.",
        "For quadratic sequences, the same idea works — solve the quadratic and check for a positive integer root.",
      ],
      thinkDeeper:
        "The terms of 4n + 2 are exactly the numbers that leave remainder 2 when divided by 4. Membership questions are secretly questions about remainders (modular arithmetic). Can two arithmetic sequences, say 4n + 2 and 6n + 1, ever share a term? Check the parity of each sequence's terms before you hunt.",
    },
    {
      heading: "Patterns and matchsticks",
      body:
        "Exam papers love growing patterns: matchsticks, tiles, dots, chairs around tables. These are sequences in picture form, and the question is really \"find and use the nth term\".\n\nThe routine:\n\n- Count the objects in the first few patterns to get the sequence.\n- Find the nth term as usual.\n- Answer the actual question — which is often \"how many matchsticks in pattern 25?\" (substitute n = 25) or \"which pattern uses 100 matchsticks?\" (solve nth term = 100).\n\nEven better, read the formula straight off the picture. In the row-of-squares pattern below, each new square costs 3 extra matchsticks (the fourth side is shared), and the very first square needs one extra to close it off: n squares need 3n + 1 matchsticks. When a formula comes from the structure of the picture, you can trust it for every pattern, not just the ones you counted.",
      diagrams: [
        {
          id: "seq-diag-01",
          title: "Matchstick squares",
          svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three matchstick patterns: pattern 1 is one square made of 4 matches, pattern 2 is two squares in a row made of 7 matches, pattern 3 is three squares in a row made of 10 matches"><g stroke="#2563eb" stroke-width="4" stroke-linecap="round"><line x1="40" y1="50" x2="80" y2="50"/><line x1="40" y1="90" x2="80" y2="90"/><line x1="40" y1="50" x2="40" y2="90"/><line x1="80" y1="50" x2="80" y2="90"/><line x1="180" y1="50" x2="260" y2="50"/><line x1="180" y1="90" x2="260" y2="90"/><line x1="180" y1="50" x2="180" y2="90"/><line x1="220" y1="50" x2="220" y2="90"/><line x1="260" y1="50" x2="260" y2="90"/><line x1="360" y1="50" x2="480" y2="50"/><line x1="360" y1="90" x2="480" y2="90"/><line x1="360" y1="50" x2="360" y2="90"/><line x1="400" y1="50" x2="400" y2="90"/><line x1="440" y1="50" x2="440" y2="90"/><line x1="480" y1="50" x2="480" y2="90"/></g><g fill="#64748b" font-size="15" font-family="sans-serif" text-anchor="middle"><text x="60" y="125">Pattern 1</text><text x="220" y="125">Pattern 2</text><text x="420" y="125">Pattern 3</text></g><g fill="#dc2626" font-size="15" font-family="sans-serif" text-anchor="middle"><text x="60" y="150">4 matches</text><text x="220" y="150">7 matches</text><text x="420" y="150">10 matches</text></g><text x="320" y="180" fill="#16a34a" font-size="16" font-family="sans-serif" text-anchor="middle">4, 7, 10, ... so pattern n needs 3n + 1 matches</text></svg>',
          caption:
            "Each extra square shares a side, so it only costs 3 new matches: pattern n needs 3n + 1 matchsticks.",
        },
      ],
      discovery: {
        problem:
          "A row of n squares is built from matchsticks as in the diagram. Without counting pattern by pattern, explain from the picture why the formula must be 3n + 1.",
        idea:
          "Imagine building the row square by square. Every square needs a top, a bottom and a right-hand side — 3 matches — because it borrows its left side from its neighbour. Only the very first square needs one extra match for its left edge. So n squares cost 3n + 1. The picture proves the formula.",
      },
      strategies: ["draw a diagram", "try small cases", "find a pattern"],
      keyPoints: [
        "Turn the picture into a number sequence, then find the nth term.",
        "\"How many in pattern k?\" means substitute n = k; \"which pattern has 100?\" means solve nth term = 100.",
        "Shared edges are why the difference is smaller than a full shape's worth of matchsticks.",
        "If solving gives a non-integer n, no pattern uses exactly that many — say so, with the working.",
      ],
    },
    {
      heading: "Quadratic sequences and second differences",
      body:
        "When the first differences are not constant, take differences of the differences. If these **second differences** are constant, the sequence is **quadratic**: its nth term has the form an² + bn + c.\n\nThe golden fact: **the coefficient of n² is half the second difference**.\n\nWorked example — find the nth term of 5, 12, 23, 38, 57, ...\n\n- First differences: 7, 11, 15, 19. Second differences: 4, 4, 4 — constant, so quadratic.\n- Coefficient of n²: 4 ÷ 2 = 2. Start with 2n².\n- Subtract 2n² (i.e. 2, 8, 18, 32, 50) from the sequence: 3, 4, 5, 6, 7. That leftover is the linear sequence n + 2.\n- nth term = 2n² + n + 2. Check n = 2: 8 + 2 + 2 = 12. Correct.\n\nThe leftover after subtracting an² is always an arithmetic (or constant) sequence, which you already know how to handle.",
      discovery: {
        problem:
          "The sequence 2, 8, 18, 32, 50, ... has first differences 6, 10, 14, 18 — never the same. Is there still hidden regularity? Difference the differences and see what you find.",
        idea:
          "The second differences are constant: 4, 4, 4. Halving gives 2 — and indeed the sequence is exactly 2n² (2 × 1, 2 × 4, 2 × 9, ...). Constant second differences are the fingerprint of a quadratic, just as constant first differences are the fingerprint of a linear sequence.",
      },
      whyItWorks:
        "Why half the second difference? Compute the differences of n² itself: 1, 4, 9, 16, 25 has first differences 3, 5, 7, 9 and second differences 2, 2, 2. So n² contributes second difference 2, which means an² contributes second difference 2a. The bn + c part is linear, so it adds nothing to the second differences. Hence second difference = 2a, giving a = (second difference) ÷ 2.",
      strategies: ["find a pattern", "try small cases", "work backwards"],
      keyPoints: [
        "Constant second differences mean a quadratic nth term an² + bn + c.",
        "a = half the second difference.",
        "Subtract an² from the sequence; find the nth term of the (linear) leftover; add the pieces.",
        "Always check your formula on at least two terms — a wrong sign shows up instantly.",
      ],
      thinkDeeper:
        "The pattern continues: cubic sequences have constant THIRD differences, and the coefficient of n³ is the third difference divided by 6 (that is 3 factorial). Can you verify this for the cubes 1, 8, 27, 64, 125?",
    },
    {
      heading: "Adding it all up: the story of young Gauss",
      body:
        "An **arithmetic series** is what you get when you add the terms of an arithmetic sequence. The sum of the first n terms is written **Sn**, and the formula is on the 4MA1 formula sheet:\n\n**Sn = n/2 × (2a + (n − 1)d)**\n\nwhere a is the first term and d is the common difference. An equivalent, often quicker form uses the last term l:\n\n**Sn = n/2 × (a + l)** — \"number of terms times the average of the first and last\".\n\nWorked example: find the sum of the first 20 terms of 3 + 8 + 13 + ...\n\n- a = 3, d = 5, n = 20.\n- S20 = 20/2 × (2 × 3 + 19 × 5) = 10 × (6 + 95) = 10 × 101 = 1010.\n\nExam questions run this in every direction: given the sum, find n (expect a quadratic to solve); given Sn and n, find a or d; or apply it in context — theatre rows, savings plans, stacked logs.",
      discovery: {
        problem:
          "Legend says a schoolmaster set 9-year-old Carl Gauss the tedious task of adding every whole number from 1 to 100. Gauss wrote the answer within seconds. Before reading on — can you find a shortcut? Try pairing numbers from opposite ends of the list.",
        idea:
          "Pair 1 with 100, 2 with 99, 3 with 98, ... Every pair sums to 101, and there are 50 pairs, so the total is 50 × 101 = 5050. Gauss's pairing works for ANY arithmetic series, because equal steps up from one end match equal steps down from the other — and that single idea is where the Sn formula comes from.",
      },
      whyItWorks:
        "Write the sum twice, the second time reversed:\n\nSn = a + (a + d) + ... + (a + (n−1)d)\n\nSn = (a + (n−1)d) + ... + (a + d) + a\n\nAdd the two lines column by column. Every column sums to the same thing, 2a + (n−1)d, and there are n columns, so 2Sn = n(2a + (n−1)d). Divide by 2: Sn = n/2 (2a + (n−1)d). Since the last term is l = a + (n−1)d, this is also Sn = n/2 (a + l). Gauss's pairing, made algebra.",
      strategies: ["exploit symmetry", "work backwards", "introduce a variable"],
      keyPoints: [
        "Sn = n/2 (2a + (n − 1)d) — sum of the first n terms of an arithmetic series.",
        "Equivalent form: Sn = n/2 (a + l), where l is the last term.",
        "Special case: 1 + 2 + 3 + ... + n = n(n + 1)/2.",
        "\"Sum equals ...\" questions often lead to a quadratic in n; reject any negative or non-integer root.",
        "In context questions, translate carefully: \"in week n\" is the nth TERM; \"total after n weeks\" is Sn.",
      ],
      thinkDeeper:
        "If you are told Sn as a formula, you can recover the terms: the nth term equals Sn − S(n−1), the jump in the running total. Try it with Sn = n² + 4n: what are the first term and the common difference of the underlying sequence?",
    },
    {
      heading: "Sequences in disguise",
      body:
        "The best problems hide a familiar sequence inside an unfamiliar costume. Two disguises worth knowing:\n\n**Odd numbers hide the squares.** 1 = 1, 1 + 3 = 4, 1 + 3 + 5 = 9, 1 + 3 + 5 + 7 = 16, ... The sum of the first n odd numbers is exactly n². The picture below shows why: each new odd number is an L-shaped border that grows a square into the next square.\n\n**Even numbers hide the triangle numbers, doubled.** 2 + 4 + 6 + ... + 2n = 2(1 + 2 + ... + n) = n(n + 1).\n\nWhen a challenge problem asks for a sum, ask yourself: is this a known sequence in disguise? Recognising 1 + 3 + 5 + ... + 149 as \"the first 75 odd numbers\" turns a long calculation into 75² = 5625.",
      diagrams: [
        {
          id: "seq-diag-02",
          title: "Sums of odd numbers make squares",
          svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 4 by 4 grid of small squares coloured in L-shaped layers of sizes 1, 3, 5 and 7, showing that 1 plus 3 plus 5 plus 7 equals 16, which is 4 squared"><g stroke="#ffffff" stroke-width="2"><rect x="40" y="30" width="40" height="40" fill="#2563eb"/><rect x="80" y="30" width="40" height="40" fill="#16a34a"/><rect x="80" y="70" width="40" height="40" fill="#16a34a"/><rect x="40" y="70" width="40" height="40" fill="#16a34a"/><rect x="120" y="30" width="40" height="40" fill="#f59e0b"/><rect x="120" y="70" width="40" height="40" fill="#f59e0b"/><rect x="120" y="110" width="40" height="40" fill="#f59e0b"/><rect x="80" y="110" width="40" height="40" fill="#f59e0b"/><rect x="40" y="110" width="40" height="40" fill="#f59e0b"/><rect x="160" y="30" width="40" height="40" fill="#dc2626"/><rect x="160" y="70" width="40" height="40" fill="#dc2626"/><rect x="160" y="110" width="40" height="40" fill="#dc2626"/><rect x="160" y="150" width="40" height="40" fill="#dc2626"/><rect x="120" y="150" width="40" height="40" fill="#dc2626"/><rect x="80" y="150" width="40" height="40" fill="#dc2626"/><rect x="40" y="150" width="40" height="40" fill="#dc2626"/></g><g font-size="16" font-family="sans-serif"><text x="260" y="55" fill="#2563eb">1 blue square</text><text x="260" y="85" fill="#16a34a">+ 3 green</text><text x="260" y="115" fill="#f59e0b">+ 5 amber</text><text x="260" y="145" fill="#dc2626">+ 7 red</text><text x="260" y="185" fill="#64748b">= 16 = 4 x 4. Each odd number is an L-shaped border.</text></g></svg>',
          caption:
            "1 + 3 + 5 + 7 = 4². Each odd number wraps an L-shaped border around the previous square, growing it to the next square.",
        },
      ],
      discovery: {
        problem:
          "Work out 1, 1 + 3, 1 + 3 + 5, 1 + 3 + 5 + 7. Recognise the answers? Now predict 1 + 3 + 5 + ... + 99 without adding.",
        idea:
          "The running totals are 1, 4, 9, 16 — perfect squares. Since 99 is the 50th odd number, the sum is 50² = 2500. You can prove it with Sn (a = 1, d = 2 gives Sn = n/2 × 2n = n²) or see it in the picture: odd numbers are the L-shaped layers of a growing square.",
      },
      strategies: ["find a pattern", "draw a diagram", "try small cases", "exploit symmetry"],
      keyPoints: [
        "Sum of the first n odd numbers = n². (The kth odd number is 2k − 1.)",
        "Sum of the first n even numbers = n(n + 1).",
        "Triangle numbers 1, 3, 6, 10, ... have nth term n(n + 1)/2 — they are the running totals of 1 + 2 + 3 + ...",
        "Before grinding through a long sum, check whether it is a known result in disguise.",
      ],
      thinkDeeper:
        "The picture proof generalises: the difference between consecutive squares (n + 1)² − n² = 2n + 1 is always odd, which is exactly why the L-shaped borders are the odd numbers. Can you find a similar picture showing that two copies of a triangle number make a rectangle, proving 1 + 2 + ... + n = n(n + 1)/2?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the difference between a term-to-term rule and a position-to-term rule?",
        back: "Term-to-term links each term to the next (e.g. \"add 3\", starting at 5). Position-to-term (the nth term) gives any term straight from its position, e.g. 3n + 2.",
      },
      {
        front: "nth term of an arithmetic sequence with first term a and common difference d?",
        back: "a + (n − 1)d, which expands to dn + (a − d). The coefficient of n is always d.",
      },
      {
        front: "Quick recipe: nth term of 5, 12, 19, 26, ...?",
        back: "d = 7, so start with 7n. 7 × 1 = 7 but the first term is 5, so subtract 2: nth term = 7n − 2.",
      },
      {
        front: "How do you decide whether 2026 is a term of the sequence 4n + 2?",
        back: "Solve 4n + 2 = 2026: n = 506. n is a positive whole number, so yes — 2026 is the 506th term. A non-integer n would mean no.",
      },
      {
        front: "How do you recognise a quadratic sequence?",
        back: "Its second differences (differences of the differences) are constant.",
      },
      {
        front: "In a quadratic sequence, how is the coefficient of n² found?",
        back: "It is half the (constant) second difference. Then subtract an² and find the nth term of the linear leftover.",
      },
      {
        front: "Sum of the first n terms of an arithmetic series?",
        back: "Sn = n/2 (2a + (n − 1)d), or equivalently Sn = n/2 (a + l) where l is the last term.",
      },
      {
        front: "What is 1 + 2 + 3 + ... + n?",
        back: "n(n + 1)/2. Gauss's pairing: pair first with last — each pair sums to n + 1 and there are n/2 pairs.",
      },
      {
        front: "Sum of the first n odd numbers?",
        back: "n². For example 1 + 3 + 5 + 7 = 16 = 4². Picture: each odd number is an L-shaped border growing a square.",
      },
      {
        front: "Sum of the first n even numbers?",
        back: "2 + 4 + ... + 2n = n(n + 1) — double the triangle number.",
      },
      {
        front: "How does Gauss's pairing prove the Sn formula?",
        back: "Write the series forwards and backwards and add: every column sums to 2a + (n − 1)d and there are n columns, so 2Sn = n(2a + (n − 1)d).",
      },
      {
        front: "Given a formula for Sn, how do you recover the nth term?",
        back: "nth term = Sn − S(n−1): each term is the jump in the running total. The first term is S1.",
      },
      {
        front: "In a matchstick pattern, why is the common difference less than one whole shape's matchsticks?",
        back: "Neighbouring shapes share edges, so each new shape only needs the unshared matchsticks. Read the nth term from the structure of the picture.",
      },
      {
        front: "What does a non-integer answer for n tell you?",
        back: "Positions must be positive whole numbers, so the target value is not a term (or no pattern uses exactly that many pieces). Say so explicitly for the mark.",
      },
    ],
    keyFacts: [
      "nth term of an arithmetic sequence: a + (n − 1)d = dn + (a − d).",
      "The coefficient of n in a linear nth term is the common difference d.",
      "A number is in a sequence only if solving nth term = number gives a positive integer n.",
      "Quadratic sequences have constant second differences; coefficient of n² = half the second difference.",
      "Arithmetic series: Sn = n/2 (2a + (n − 1)d) = n/2 (a + l).",
      "1 + 2 + 3 + ... + n = n(n + 1)/2 (Gauss's pairing).",
      "Sum of the first n odd numbers = n²; sum of the first n even numbers = n(n + 1).",
      "nth term = Sn − S(n−1); in particular the first term is S1.",
      "Triangle numbers: 1, 3, 6, 10, ... with nth term n(n + 1)/2.",
    ],
    formulaSheet: [
      {
        name: "nth term (arithmetic)",
        formula: "a + (n − 1)d",
        note: "a = first term, d = common difference. Expands to dn + (a − d).",
      },
      {
        name: "Sum of an arithmetic series",
        formula: "Sn = n/2 (2a + (n − 1)d)",
        note: "On the 4MA1 formula sheet — but know how to use it fluently.",
      },
      {
        name: "Sum using the last term",
        formula: "Sn = n/2 (a + l)",
        note: "l = last term. \"Number of terms × average of first and last.\"",
      },
      {
        name: "Sum of 1 to n",
        formula: "1 + 2 + ... + n = n(n + 1)/2",
        note: "Special case of Sn with a = 1, d = 1.",
      },
      {
        name: "Sum of first n odd numbers",
        formula: "1 + 3 + 5 + ... + (2n − 1) = n²",
        note: "Each odd number is an L-shaped border of a growing square.",
      },
      {
        name: "Quadratic sequence coefficient",
        formula: "a = (second difference) ÷ 2",
        note: "For nth term an² + bn + c.",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "seq-quiz-mcq-01",
        question: "What is the term-to-term rule of the sequence 5, 8, 11, 14, ...?",
        options: ["Add 3", "Add 5", "Multiply by 1.6", "Add 4"],
        answerIndex: 0,
        explanation:
          "Each term is 3 more than the one before (8 − 5 = 11 − 8 = 3), so the rule is \"add 3\". \"Add 5\" confuses the first term with the difference, and \"multiply by 1.6\" only works for the first step (5 × 1.6 = 8), not the rest.",
        guideRef: "Two ways to describe a sequence",
        difficulty: "warmup",
      },
      {
        id: "seq-quiz-mcq-02",
        question: "A sequence has nth term 4n − 1. What is its 10th term?",
        options: ["39", "41", "40", "36"],
        answerIndex: 0,
        explanation:
          "Substitute n = 10: 4 × 10 − 1 = 39. Choosing 41 comes from adding 1 instead of subtracting; 40 forgets the −1 entirely.",
        guideRef: "Two ways to describe a sequence",
        difficulty: "warmup",
      },
      {
        id: "seq-quiz-mcq-03",
        question: "What is the nth term of the sequence 7, 11, 15, 19, ...?",
        options: ["4n + 3", "4n + 7", "3n + 4", "n + 4"],
        answerIndex: 0,
        explanation:
          "The common difference is 4, so the nth term starts 4n. When n = 1, 4n = 4 but the first term is 7, so add 3: nth term = 4n + 3. Check n = 2: 8 + 3 = 11. Correct. 4n + 7 wrongly adds the first term instead of adjusting, and 3n + 4 swaps the roles of the difference and the adjustment.",
        guideRef: "The nth term of an arithmetic sequence",
        difficulty: "core",
        hints: [
          "How much does the sequence go up by each time?",
          "The coefficient of n is the common difference, so the formula starts 4n.",
          "4 × 1 = 4, but the first term is 7 — what must you add?",
        ],
        strategy: "find a pattern",
      },
      {
        id: "seq-quiz-mcq-04",
        question: "Which of these numbers is a term of the sequence with nth term 3n + 2?",
        options: ["92", "93", "94", "96"],
        answerIndex: 0,
        explanation:
          "Solve 3n + 2 = 92: 3n = 90, so n = 30, a positive whole number — 92 is the 30th term. For 93, 94 and 96 you get 3n = 91, 92 and 94, none of which is a multiple of 3, so n is not a whole number.",
        guideRef: "Is 2026 in the sequence?",
        difficulty: "core",
        hints: [
          "Set 3n + 2 equal to each option in turn.",
          "Subtract 2 first — then you need the result to be a multiple of 3.",
          "Which option gives a whole-number value of n?",
        ],
        strategy: "work backwards",
      },
      {
        id: "seq-quiz-mcq-05",
        question:
          "A matchstick pattern uses 5, 9, 13, ... matchsticks in patterns 1, 2, 3, ... How many matchsticks are in pattern 20?",
        options: ["81", "80", "85", "100"],
        answerIndex: 0,
        explanation:
          "The difference is 4 and the first term is 5, so the nth term is 4n + 1. Pattern 20 uses 4 × 20 + 1 = 81 matchsticks. 80 forgets the +1; 100 wrongly uses 5n (multiplying the first term instead of the difference).",
        guideRef: "Patterns and matchsticks",
        difficulty: "core",
        hints: [
          "First find the nth term of 5, 9, 13, ...",
          "The difference is 4, so the formula is 4n plus an adjustment.",
          "Substitute n = 20 into 4n + 1.",
        ],
        strategy: "find a pattern",
      },
      {
        id: "seq-quiz-mcq-06",
        question: "What is the nth term of the quadratic sequence 2, 8, 18, 32, ...?",
        options: ["2n²", "n² + 1", "n² + n", "4n − 2"],
        answerIndex: 0,
        explanation:
          "First differences are 6, 10, 14; second differences are constant at 4, so the n² coefficient is 4 ÷ 2 = 2. Testing 2n²: 2, 8, 18, 32 — an exact match. n² + 1 gives 2 for n = 1 but then 5, not 8; 4n − 2 is linear and cannot have growing differences.",
        guideRef: "Quadratic sequences and second differences",
        difficulty: "core",
        hints: [
          "Work out the first differences — are they constant?",
          "Now difference the differences. What do you notice?",
          "Halve the second difference to get the coefficient of n², then test.",
        ],
        strategy: "find a pattern",
      },
      {
        id: "seq-quiz-mcq-07",
        question:
          "A quadratic sequence has constant second difference 6. What is the coefficient of n² in its nth term?",
        options: ["3", "6", "12", "2"],
        answerIndex: 0,
        explanation:
          "The coefficient of n² is always HALF the second difference: 6 ÷ 2 = 3. Choosing 6 forgets to halve; 12 doubles instead of halving.",
        guideRef: "Quadratic sequences and second differences",
        difficulty: "core",
        hints: [
          "There is a fixed relationship between the second difference and the n² coefficient.",
          "Try it on n² itself: 1, 4, 9, 16 has second difference 2.",
          "So an² has second difference 2a — solve 2a = 6.",
        ],
        strategy: "try small cases",
      },
      {
        id: "seq-quiz-mcq-08",
        question:
          "An arithmetic series has first term 3 and common difference 5. What is the sum of its first 20 terms?",
        options: ["1010", "1060", "2020", "505"],
        answerIndex: 0,
        explanation:
          "S20 = 20/2 × (2 × 3 + 19 × 5) = 10 × (6 + 95) = 10 × 101 = 1010. The slip 1060 comes from using 20d instead of (n − 1)d = 19d; 2020 forgets to halve n; 505 halves twice.",
        guideRef: "Adding it all up: the story of young Gauss",
        difficulty: "core",
        hints: [
          "Use Sn = n/2 (2a + (n − 1)d).",
          "Here a = 3, d = 5, n = 20 — be careful: it is (n − 1)d, not nd.",
          "Compute 10 × (6 + 95).",
        ],
        strategy: "introduce a variable",
      },
      {
        id: "seq-quiz-mcq-09",
        question: "What is 1 + 3 + 5 + ... + 99, the sum of all the odd numbers from 1 to 99?",
        options: ["2500", "2450", "5000", "2550"],
        answerIndex: 0,
        explanation:
          "99 = 2 × 50 − 1 is the 50th odd number, and the sum of the first n odd numbers is n², so the total is 50² = 2500. You can confirm with Sn: 50/2 × (1 + 99) = 25 × 100 = 2500. The distractor 5000 counts 100 terms instead of 50; 2450 is 49 × 50, a pairing slip.",
        guideRef: "Sequences in disguise",
        difficulty: "challenge",
        hints: [
          "How many odd numbers are there from 1 to 99?",
          "Try small cases: 1 = 1, 1 + 3 = 4, 1 + 3 + 5 = 9. Recognise these totals?",
          "The sum of the first n odd numbers is n² — and 99 is the 50th odd number.",
        ],
        strategy: "find a pattern",
      },
      {
        id: "seq-quiz-mcq-10",
        question:
          "The sum of the first n terms of an arithmetic series is Sn = n² + 4n. What is the 5th term of the series?",
        options: ["13", "45", "11", "9"],
        answerIndex: 0,
        explanation:
          "The 5th term is the jump in the running total: S5 − S4 = (25 + 20) − (16 + 16) = 45 − 32 = 13. Choosing 45 gives the SUM of the first five terms, not the 5th term; 11 is the 4th term (S4 − S3 = 32 − 21).",
        guideRef: "Adding it all up: the story of young Gauss",
        difficulty: "challenge",
        hints: [
          "Sn is a running total, not a term.",
          "How does the running total change when you add the 5th term?",
          "5th term = S5 − S4. Work out both sums.",
        ],
        strategy: "work backwards",
      },
    ],
    qa: [
      {
        id: "seq-quiz-qa-01",
        question:
          "Here is a sequence: 2, 9, 16, 23, ...\n(a) Write down the term-to-term rule.\n(b) Write down the next two terms.",
        modelAnswer:
          "(a) Each term is 7 more than the previous term, so the rule is: start at 2 and add 7.\n(b) 23 + 7 = 30 and 30 + 7 = 37. The next two terms are 30 and 37.",
        markScheme: ["add 7", "30", "37", "common difference"],
        commonError:
          "Stating only \"add 7\" without the starting term — a term-to-term rule needs the first term to define the sequence. Also watch for arithmetic slips: 23 + 7 is 30, not 31.",
        guideRef: "Two ways to describe a sequence",
        difficulty: "warmup",
      },
      {
        id: "seq-quiz-qa-02",
        question:
          "The first four terms of an arithmetic sequence are 5, 12, 19, 26.\n(a) Find an expression, in terms of n, for the nth term.\n(b) Find the 50th term.",
        modelAnswer:
          "(a) The common difference is 7, so the nth term begins 7n. When n = 1 this gives 7, but the first term is 5, so subtract 2. nth term = 7n − 2. Check: n = 2 gives 14 − 2 = 12. Correct.\n(b) 50th term = 7 × 50 − 2 = 350 − 2 = 348.",
        markScheme: ["7n - 2", "348", "common difference 7", "substitute"],
        commonError:
          "Writing n + 7 or 5n + 7 for the nth term. The coefficient of n must be the common difference, and the adjustment is found by checking n = 1, not by copying the first term.",
        guideRef: "The nth term of an arithmetic sequence",
        difficulty: "core",
        hints: [
          "Find how much the sequence increases by each time.",
          "The nth term starts 7n. What does 7n give when n = 1, and what do you need?",
          "Adjust so n = 1 gives 5, then substitute n = 50.",
        ],
        strategy: "find a pattern",
      },
      {
        id: "seq-quiz-qa-03",
        question:
          "A sequence has nth term 6n + 5. Show that 200 is not a term of this sequence.",
        modelAnswer:
          "Set 6n + 5 = 200. Then 6n = 195, so n = 195/6 = 32.5. Since n must be a positive whole number and 32.5 is not, 200 is not a term of the sequence. (Indeed the 32nd term is 197 and the 33rd term is 203, so 200 falls between consecutive terms.)",
        markScheme: ["32.5", "not a whole number", "6n = 195", "197", "203"],
        commonError:
          "Stopping at \"n = 32.5\" without the conclusion. The mark scheme wants the statement that n is not a positive integer, SO 200 is not in the sequence.",
        guideRef: "Is 2026 in the sequence?",
        difficulty: "core",
        hints: [
          "Suppose 200 IS a term — what equation would that give?",
          "Solve 6n + 5 = 200 for n.",
          "What kind of number must n be for 200 to be a term? Is it?",
        ],
        strategy: "work backwards",
      },
      {
        id: "seq-quiz-qa-04",
        question:
          "Find an expression, in terms of n, for the nth term of the quadratic sequence 3, 8, 15, 24, 35, ...",
        modelAnswer:
          "First differences: 5, 7, 9, 11. Second differences: 2, 2, 2 — constant, so the sequence is quadratic and the coefficient of n² is 2 ÷ 2 = 1. Subtract n² (1, 4, 9, 16, 25) from the sequence: 2, 4, 6, 8, 10, which is 2n. So the nth term is n² + 2n. Check: n = 3 gives 9 + 6 = 15. Correct. (Equivalently n(n + 2).)",
        markScheme: ["n^2 + 2n", "second difference", "2n", "n(n + 2)"],
        commonError:
          "Forgetting to subtract the n² values before finding the linear part — comparing with the original sequence instead of the leftover gives the wrong bn + c.",
        guideRef: "Quadratic sequences and second differences",
        difficulty: "core",
        hints: [
          "Find the first differences, then the second differences.",
          "Halve the second difference to get the n² coefficient.",
          "Subtract 1, 4, 9, 16, 25 from the sequence and find the nth term of what is left.",
        ],
        strategy: "find a pattern",
      },
      {
        id: "seq-quiz-qa-05",
        question:
          "An arithmetic series has first term 7 and common difference 4. Calculate the sum of its first 30 terms.",
        modelAnswer:
          "Using Sn = n/2 (2a + (n − 1)d) with a = 7, d = 4, n = 30:\nS30 = 30/2 × (2 × 7 + 29 × 4) = 15 × (14 + 116) = 15 × 130 = 1950.",
        markScheme: ["1950", "15", "29 x 4", "2a + (n - 1)d"],
        commonError:
          "Using 30 × 4 instead of (30 − 1) × 4 = 116 inside the bracket, which gives 1980. The formula uses (n − 1)d because the first term has had no differences added.",
        guideRef: "Adding it all up: the story of young Gauss",
        difficulty: "core",
        hints: [
          "Write down the Sn formula and identify a, d and n.",
          "Careful: the bracket contains (n − 1)d, so 29 × 4, not 30 × 4.",
          "Evaluate 15 × (14 + 116).",
        ],
        strategy: "introduce a variable",
      },
      {
        id: "seq-quiz-qa-06",
        question:
          "The sum of the first n even numbers, 2 + 4 + 6 + ... + 2n, is 420. Find the value of n.",
        modelAnswer:
          "The sum of the first n even numbers is 2 + 4 + ... + 2n = n(n + 1). So n(n + 1) = 420, i.e. n² + n − 420 = 0, which factorises as (n − 20)(n + 21) = 0. Since n must be positive, n = 20. Check: 20 × 21 = 420. Correct.",
        markScheme: ["20", "n(n + 1) = 420", "factorise", "positive root"],
        commonError:
          "Solving n² = 420 by ignoring the +n term, or accepting the negative root n = −21. Positions and term counts must be positive integers.",
        guideRef: "Sequences in disguise",
        difficulty: "challenge",
        hints: [
          "This is an arithmetic series: what are a, d, and the number of terms?",
          "Show the sum simplifies to n(n + 1) — either by Sn or by factoring out 2.",
          "Solve n(n + 1) = 420: look for consecutive whole numbers multiplying to 420.",
        ],
        strategy: "introduce a variable",
        solutions: [
          {
            label: "Formula method (Sn)",
            steps: [
              "The series 2 + 4 + ... + 2n is arithmetic with a = 2, d = 2 and n terms.",
              "Sn = n/2 (2a + (n − 1)d) = n/2 (4 + 2(n − 1)) = n/2 (2n + 2) = n(n + 1).",
              "So n(n + 1) = 420, giving n² + n − 420 = 0.",
              "Factorise: (n − 20)(n + 21) = 0, and since n > 0, n = 20.",
            ],
          },
          {
            label: "Factor-out-2 method (the elegant one)",
            steps: [
              "2 + 4 + 6 + ... + 2n = 2(1 + 2 + 3 + ... + n) — every even number is twice a counting number.",
              "By Gauss's result, 1 + 2 + ... + n = n(n + 1)/2, so the sum is 2 × n(n + 1)/2 = n(n + 1).",
              "n(n + 1) = 420 asks for consecutive integers with product 420; since 20 × 21 = 420, n = 20.",
              "No quadratic formula needed — recognising the disguised triangle-number sum does all the work.",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "seq-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "seq-mcq-p1-q01",
            question: "A sequence has nth term n² + 3. What is its first term?",
            options: ["4", "3", "1", "5"],
            answerIndex: 0,
            explanation:
              "Substitute n = 1: 1² + 3 = 4. Choosing 3 ignores the n² part; 1 ignores the +3.",
            guideRef: "Two ways to describe a sequence",
            difficulty: "warmup",
          },
          {
            id: "seq-mcq-p1-q02",
            question:
              "A sequence starts at 3 and has term-to-term rule \"multiply by 2, then subtract 1\". What is its third term?",
            options: ["9", "11", "8", "5"],
            answerIndex: 0,
            explanation:
              "Term 1 is 3. Term 2: 2 × 3 − 1 = 5. Term 3: 2 × 5 − 1 = 9. Choosing 5 stops one step early; 11 applies \"multiply by 2, add 1\".",
            guideRef: "Two ways to describe a sequence",
            difficulty: "warmup",
          },
          {
            id: "seq-mcq-p1-q03",
            question: "What is the nth term of the decreasing sequence 20, 17, 14, 11, ...?",
            options: ["23 − 3n", "20 − 3n", "3n + 17", "17 − 3n"],
            answerIndex: 0,
            explanation:
              "The common difference is −3, so the nth term is −3n + c. When n = 1 we need 20, so c = 23: nth term = 23 − 3n. Check n = 2: 23 − 6 = 17. Correct. 20 − 3n is the classic slip of bolting the first term onto −3n; it gives 17 when n = 1.",
            guideRef: "The nth term of an arithmetic sequence",
            difficulty: "core",
            hints: [
              "The sequence decreases by 3 each time — what does that make the coefficient of n?",
              "The formula is −3n + c. Use the first term to find c.",
              "Check your candidate with n = 1 AND n = 2.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "seq-mcq-p1-q04",
            question: "A sequence has nth term 4n − 3. Which term of the sequence is equal to 197?",
            options: ["The 50th term", "The 49th term", "The 51st term", "The 200th term"],
            answerIndex: 0,
            explanation:
              "Solve 4n − 3 = 197: 4n = 200, so n = 50. The 49th term is 193 and the 51st is 201 — checking neighbours is a quick way to confirm.",
            guideRef: "Is 2026 in the sequence?",
            difficulty: "core",
            hints: [
              "Set the nth term formula equal to 197.",
              "Add 3 to both sides before dividing.",
              "n = 200 ÷ 4.",
            ],
            strategy: "work backwards",
          },
          {
            id: "seq-mcq-p1-q05",
            question:
              "A dot pattern has 5n + 2 dots in pattern n. Which pattern is made of exactly 52 dots?",
            options: ["Pattern 10", "Pattern 11", "Pattern 9", "Pattern 12"],
            answerIndex: 0,
            explanation:
              "Solve 5n + 2 = 52: 5n = 50, so n = 10. Choosing 11 comes from adding 2 instead of subtracting when rearranging (5n = 54 is wrong).",
            guideRef: "Patterns and matchsticks",
            difficulty: "core",
            hints: [
              "You know the total; work backwards to the pattern number.",
              "Subtract 2 from 52 first.",
              "Divide by 5.",
            ],
            strategy: "work backwards",
          },
          {
            id: "seq-mcq-p1-q06",
            question: "What is the nth term of the quadratic sequence 4, 7, 12, 19, 28, ...?",
            options: ["n² + 3", "n² + 2n + 1", "3n + 1", "n² + n + 2"],
            answerIndex: 0,
            explanation:
              "First differences 3, 5, 7, 9; second difference 2, so the n² coefficient is 1. Subtracting n² from the sequence leaves 3, 3, 3, 3, 3, so the nth term is n² + 3. Check n = 4: 16 + 3 = 19. Correct. n² + 2n + 1 gives 4 at n = 1 but 9 at n = 2, and 3n + 1 is linear so its differences could never grow.",
            guideRef: "Quadratic sequences and second differences",
            difficulty: "core",
            hints: [
              "Check the second differences to confirm the sequence is quadratic.",
              "Half of the second difference gives the n² coefficient.",
              "Subtract 1, 4, 9, 16, 25 from the terms — what is left over?",
            ],
            strategy: "find a pattern",
          },
          {
            id: "seq-mcq-p1-q07",
            question: "What is the sum of the first 15 terms of the arithmetic series 2 + 5 + 8 + ...?",
            options: ["345", "350", "330", "690"],
            answerIndex: 0,
            explanation:
              "a = 2, d = 3, n = 15: S15 = 15/2 × (4 + 14 × 3) = 7.5 × 46 = 345. The distractor 690 forgets to halve n; 330 comes from Sn = n/2 (a + l) with the last term wrongly taken as 14 × 3 = 42 instead of 2 + 42 = 44.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "core",
            hints: [
              "Identify a, d and n, then use Sn = n/2 (2a + (n − 1)d).",
              "The bracket is 2 × 2 + 14 × 3.",
              "Multiply 46 by 7.5.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "seq-mcq-p1-q08",
            question:
              "How many terms of the arithmetic series 5 + 9 + 13 + ... are needed for the sum to first exceed 1000?",
            options: ["22", "21", "23", "20"],
            answerIndex: 0,
            explanation:
              "Sn = n/2 (10 + 4(n − 1)) = n/2 (4n + 6) = 2n² + 3n. For n = 21: 2 × 441 + 63 = 945, still below 1000. For n = 22: 2 × 484 + 66 = 1034, which exceeds 1000. So 22 terms are needed. Choosing 21 stops at the last sum BELOW 1000 — read \"first exceeds\" carefully.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "challenge",
            hints: [
              "Write Sn in terms of n and simplify — it becomes a quadratic in n.",
              "Sn = 2n² + 3n. You need the smallest n with 2n² + 3n > 1000.",
              "Try n around 20: compute S21 and S22 and compare with 1000.",
            ],
            strategy: "consider extremes",
          },
        ],
      },
      {
        id: "seq-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "seq-mcq-p2-q01",
            question: "What is the next term of the sequence 1, 4, 9, 16, 25, ...?",
            options: ["36", "34", "30", "32"],
            answerIndex: 0,
            explanation:
              "These are the square numbers (nth term n²), so the next term is 6² = 36. Adding a fixed amount fails: the gaps grow by 2 each time (3, 5, 7, 9, then 11).",
            guideRef: "Two ways to describe a sequence",
            difficulty: "warmup",
          },
          {
            id: "seq-mcq-p2-q02",
            question: "What is the common difference of the arithmetic sequence 11, 7, 3, −1, ...?",
            options: ["−4", "4", "−3", "7"],
            answerIndex: 0,
            explanation:
              "Each term is 4 LESS than the one before: 7 − 11 = −4. The common difference of a decreasing sequence is negative; answering 4 loses the sign.",
            guideRef: "The nth term of an arithmetic sequence",
            difficulty: "warmup",
          },
          {
            id: "seq-mcq-p2-q03",
            question: "A sequence has nth term 5n + 1. Which of these numbers is NOT a term of the sequence?",
            options: ["45", "36", "51", "61"],
            answerIndex: 0,
            explanation:
              "Terms of 5n + 1 always end in 6 or 1 (6, 11, 16, 21, ...). 45 ends in 5: solving 5n + 1 = 45 gives n = 8.8, not a whole number. The others work: 36 = 5 × 7 + 1, 51 = 5 × 10 + 1, 61 = 5 × 12 + 1.",
            guideRef: "Is 2026 in the sequence?",
            difficulty: "core",
            hints: [
              "Write out the first few terms — what do their last digits do?",
              "Every term is 1 more than a multiple of 5.",
              "Subtract 1 from each option: which result is not a multiple of 5?",
            ],
            strategy: "look for invariants",
          },
          {
            id: "seq-mcq-p2-q04",
            question:
              "Hexagonal tiles are joined in a row. One tile has perimeter 6; each extra tile adds 4 to the perimeter, giving perimeters 6, 10, 14, ... What is the perimeter of a row of 15 tiles?",
            options: ["62", "60", "64", "90"],
            answerIndex: 0,
            explanation:
              "The nth term is 4n + 2 (difference 4; 4 × 1 + 2 = 6 checks). For n = 15: 4 × 15 + 2 = 62. The distractor 90 uses 6n, forgetting that joined edges disappear from the perimeter.",
            guideRef: "Patterns and matchsticks",
            difficulty: "core",
            hints: [
              "Find the nth term of 6, 10, 14, ... first.",
              "Difference 4, so the formula is 4n plus an adjustment; check it gives 6 at n = 1.",
              "Substitute n = 15 into 4n + 2.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "seq-mcq-p2-q05",
            question: "What is the nth term of the quadratic sequence 6, 12, 20, 30, ...?",
            options: ["n² + 3n + 2", "n² + 5", "6n", "n² + 2n + 3"],
            answerIndex: 0,
            explanation:
              "First differences 6, 8, 10; second difference 2, so the n² coefficient is 1. Subtracting n² leaves 5, 8, 11, 14, which is 3n + 2. So the nth term is n² + 3n + 2 = (n + 1)(n + 2). Check n = 3: 9 + 9 + 2 = 20. Correct. n² + 5 matches the first term only; 6n matches the first two terms then fails (18 ≠ 20).",
            guideRef: "Quadratic sequences and second differences",
            difficulty: "core",
            hints: [
              "Constant second differences confirm a quadratic — find them.",
              "Subtract 1, 4, 9, 16 from the terms.",
              "Find the nth term of the linear leftover 5, 8, 11, 14 and add it to n².",
            ],
            strategy: "find a pattern",
          },
          {
            id: "seq-mcq-p2-q06",
            question:
              "An arithmetic series has first term 8, and the sum of its first 10 terms is 305. What is the common difference?",
            options: ["5", "4.5", "6", "45"],
            answerIndex: 0,
            explanation:
              "S10 = 10/2 (2 × 8 + 9d) = 5(16 + 9d) = 305, so 16 + 9d = 61, giving 9d = 45 and d = 5. The distractor 45 stops after finding 9d; 4.5 divides 45 by 10 instead of 9.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "core",
            hints: [
              "Substitute everything you know into Sn = n/2 (2a + (n − 1)d).",
              "You get 5(16 + 9d) = 305 — divide both sides by 5 first.",
              "Solve 16 + 9d = 61.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "seq-mcq-p2-q07",
            question: "What is the sum of all the whole numbers from 1 to 60?",
            options: ["1830", "1800", "3660", "1860"],
            answerIndex: 0,
            explanation:
              "1 + 2 + ... + n = n(n + 1)/2, so the sum is 60 × 61 ÷ 2 = 1830. Gauss's pairing agrees: 30 pairs each summing to 61. The distractor 3660 forgets to halve; 1800 uses 60² ÷ 2.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "core",
            hints: [
              "Pair 1 with 60, 2 with 59, ... What does each pair total?",
              "How many pairs are there?",
              "30 pairs of 61 — or use n(n + 1)/2 directly.",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "seq-mcq-p2-q08",
            question: "The year 2026 appears in exactly one of these sequences. Which one?",
            options: [
              "nth term 4n + 2",
              "nth term 4n",
              "nth term 5n + 3",
              "nth term 10n + 4",
            ],
            answerIndex: 0,
            explanation:
              "4n + 2 = 2026 gives n = 506, a positive integer, so 2026 is its 506th term. For the others: 4n = 2026 gives n = 506.5; 5n + 3 = 2026 gives 5n = 2023, not a multiple of 5; 10n + 4 = 2026 gives 10n = 2022, not a multiple of 10. Quick checks with last digits and divisibility beat brute force here.",
            guideRef: "Is 2026 in the sequence?",
            difficulty: "challenge",
            hints: [
              "For each option, set the nth term equal to 2026 and rearrange.",
              "You only need divisibility checks: is 2024 a multiple of 4? Is 2023 a multiple of 5?",
              "2024 ÷ 4 = 506 exactly — what does that tell you?",
            ],
            strategy: "look for invariants",
          },
        ],
      },
      {
        id: "seq-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "seq-mcq-p3-q01",
            question: "A sequence has nth term 100 − 7n. What is its 4th term?",
            options: ["72", "73", "65", "93"],
            answerIndex: 0,
            explanation:
              "Substitute n = 4: 100 − 28 = 72. The distractor 93 substitutes n = 1; 65 substitutes n = 5.",
            guideRef: "Two ways to describe a sequence",
            difficulty: "warmup",
          },
          {
            id: "seq-mcq-p3-q02",
            question:
              "In a Fibonacci-type sequence each term is the sum of the two before it. The sequence starts 2, 3, 5, 8, ... What is the next term?",
            options: ["13", "11", "12", "16"],
            answerIndex: 0,
            explanation:
              "The next term is 5 + 8 = 13. The rule is not \"add 3\" (that only fits one step) — always test a term-to-term rule on every given step.",
            guideRef: "Two ways to describe a sequence",
            difficulty: "warmup",
          },
          {
            id: "seq-mcq-p3-q03",
            question: "What is the nth term of the sequence 1/2, 2/3, 3/4, 4/5, ...?",
            options: ["n/(n + 1)", "(n + 1)/n", "n/2n", "1/(n + 1)"],
            answerIndex: 0,
            explanation:
              "Treat the numerators and denominators as separate sequences: numerators are 1, 2, 3, 4 (that is n) and denominators are 2, 3, 4, 5 (that is n + 1). So the nth term is n/(n + 1). (n + 1)/n has the fraction upside down.",
            guideRef: "Two ways to describe a sequence",
            difficulty: "core",
            hints: [
              "Look at the numerators on their own. Now the denominators.",
              "Numerators: 1, 2, 3, 4, ... Denominators: 2, 3, 4, 5, ...",
              "Write each part in terms of n and stack them as a fraction.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "seq-mcq-p3-q04",
            question:
              "An arithmetic sequence has 3rd term 11 and 7th term 27. What is its first term?",
            options: ["3", "4", "7", "−1"],
            answerIndex: 0,
            explanation:
              "From the 3rd to the 7th term is 4 steps, covering 27 − 11 = 16, so d = 4. Stepping back from the 3rd term: a = 11 − 2 × 4 = 3. Check: 3, 7, 11, 15, 19, 23, 27 — the 7th term is 27. The distractor 4 is the common difference, not the first term.",
            guideRef: "The nth term of an arithmetic sequence",
            difficulty: "core",
            hints: [
              "How many common differences fit between the 3rd and 7th terms?",
              "4 steps cover 16, so each step is 4.",
              "Walk back two steps from 11 to reach the first term.",
            ],
            strategy: "work backwards",
          },
          {
            id: "seq-mcq-p3-q05",
            question: "What is the nth term of the quadratic sequence 5, 12, 23, 38, ...?",
            options: ["2n² + n + 2", "2n² + 3", "4n² + 1", "2n² − n + 4"],
            answerIndex: 0,
            explanation:
              "First differences 7, 11, 15; second difference 4, so the n² coefficient is 2. Subtracting 2n² (2, 8, 18, 32) leaves 3, 4, 5, 6, which is n + 2. So the nth term is 2n² + n + 2. Check n = 2: 8 + 2 + 2 = 12. Correct. All three distractors give 5 at n = 1 but fail at n = 2 — never check only the first term.",
            guideRef: "Quadratic sequences and second differences",
            difficulty: "core",
            hints: [
              "Find the second difference and halve it.",
              "Subtract 2n² from each term of the sequence.",
              "The leftover 3, 4, 5, 6 is linear — find its nth term and add.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "seq-mcq-p3-q06",
            question:
              "A theatre has 20 seats in row 1, and each row has 2 more seats than the row in front. How many seats are there in total in the first 15 rows?",
            options: ["510", "520", "480", "1020"],
            answerIndex: 0,
            explanation:
              "This is an arithmetic series with a = 20, d = 2, n = 15: S15 = 15/2 × (40 + 14 × 2) = 7.5 × 68 = 510. The distractor 1020 forgets to halve; 480 uses row 15's seat count (48) times 10.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "core",
            hints: [
              "\"Total seats\" means a SUM of an arithmetic series.",
              "a = 20, d = 2, n = 15 — plug into Sn.",
              "Evaluate 7.5 × (40 + 28).",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "seq-mcq-p3-q07",
            question: "What is 1 + 3 + 5 + ... + 199, the sum of the first 100 odd numbers?",
            options: ["10000", "9801", "20000", "10100"],
            answerIndex: 0,
            explanation:
              "The sum of the first n odd numbers is n², and 199 = 2 × 100 − 1 is the 100th odd number, so the sum is 100² = 10000. The distractor 9801 is 99²; 10100 is the even-number sum 100 × 101.",
            guideRef: "Sequences in disguise",
            difficulty: "core",
            hints: [
              "Which position does 199 hold among the odd numbers?",
              "The kth odd number is 2k − 1.",
              "Use the sum-of-odd-numbers result with n = 100.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "seq-mcq-p3-q08",
            question:
              "The sum of the first n terms of an arithmetic series is Sn = 3n² + 2n. What is the common difference of the series?",
            options: ["6", "3", "5", "2"],
            answerIndex: 0,
            explanation:
              "The first term is S1 = 3 + 2 = 5. The second term is S2 − S1 = (12 + 4) − 5 = 11. So d = 11 − 5 = 6. (In general, when Sn = An² + Bn the common difference is 2A.) The distractor 3 reads off the n² coefficient without doubling; 5 is the first term.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "challenge",
            hints: [
              "You can extract terms from Sn: the first term is S1.",
              "The second term is S2 − S1.",
              "The common difference is the gap between those two terms.",
            ],
            strategy: "work backwards",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "seq-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "seq-qa-p1-q01",
            question:
              "Here is a sequence: 4, 11, 18, 25, ...\n(a) Write down the term-to-term rule.\n(b) Find the 10th term of the sequence.",
            modelAnswer:
              "(a) Each term is 7 more than the previous one: start at 4 and add 7.\n(b) The nth term is 7n − 3 (difference 7; 7 × 1 − 3 = 4 checks). So the 10th term is 7 × 10 − 3 = 67. (Alternatively, continue the sequence: the 10th term is 4 + 9 × 7 = 67.)",
            markScheme: ["add 7", "67", "7n - 3", "common difference"],
            commonError:
              "Computing the 10th term as 4 + 10 × 7 = 74 — by the 10th term only NINE differences have been added.",
            guideRef: "Two ways to describe a sequence",
            difficulty: "warmup",
          },
          {
            id: "seq-qa-p1-q02",
            question:
              "A pattern of squares is made from matchsticks. Pattern 1 uses 4 matchsticks, pattern 2 uses 7 and pattern 3 uses 10 (each new square shares a side with the previous one).\n(a) Find an expression for the number of matchsticks in pattern n.\n(b) How many matchsticks are needed for pattern 25?\n(c) Which pattern uses exactly 100 matchsticks?",
            modelAnswer:
              "(a) The counts 4, 7, 10 go up by 3 each time, so the nth term is 3n + something; 3 × 1 + 1 = 4 checks, so pattern n uses 3n + 1 matchsticks. (From the picture: each square costs 3 matchsticks plus 1 extra to close the first square.)\n(b) Pattern 25: 3 × 25 + 1 = 76 matchsticks.\n(c) Solve 3n + 1 = 100: 3n = 99, so n = 33. Pattern 33.",
            markScheme: ["3n + 1", "76", "33", "common difference 3"],
            commonError:
              "In (c), forgetting to check that n is a whole number — here it is, but the check is what earns the reasoning mark when it is not.",
            guideRef: "Patterns and matchsticks",
            difficulty: "core",
            hints: [
              "Write the matchstick counts as a sequence and find the difference.",
              "The nth term is 3n plus an adjustment — check it against pattern 1.",
              "For (c), set your expression equal to 100 and solve.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "seq-qa-p1-q03",
            question:
              "The nth term of a sequence is 5n − 3.\n(a) Show that 137 is a term of the sequence, and state which term it is.\n(b) Explain why 200 is not a term of the sequence.",
            modelAnswer:
              "(a) Solve 5n − 3 = 137: 5n = 140, so n = 28, a positive whole number. So 137 is the 28th term.\n(b) Solve 5n − 3 = 200: 5n = 203. But 203 is not a multiple of 5 (n = 40.6), so there is no whole-number position giving 200 — it is not a term. (The 40th term is 197 and the 41st is 202, so 200 falls between consecutive terms.)",
            markScheme: ["28", "n = 40.6", "not a whole number", "5n = 203"],
            commonError:
              "Only computing terms near 200 (\"197, 202, so no\") without solving the equation — fine as support, but the examiner wants n = 40.6 with the statement that n must be a positive integer.",
            guideRef: "Is 2026 in the sequence?",
            difficulty: "core",
            hints: [
              "Membership questions start the same way every time: nth term = target.",
              "Solve 5n − 3 = 137 and interpret the value of n you get.",
              "For 200, what does 5n equal? Is that a multiple of 5?",
            ],
            strategy: "work backwards",
          },
          {
            id: "seq-qa-p1-q04",
            question:
              "The first five terms of a quadratic sequence are 7, 13, 23, 37, 55.\n(a) Find an expression, in terms of n, for the nth term.\n(b) Hence find the 20th term.",
            modelAnswer:
              "(a) First differences: 6, 10, 14, 18. Second differences: 4, 4, 4 — constant, so the n² coefficient is 4 ÷ 2 = 2. Subtract 2n² (2, 8, 18, 32, 50) from the sequence: 5, 5, 5, 5, 5. So the nth term is 2n² + 5. Check n = 3: 18 + 5 = 23. Correct.\n(b) 20th term = 2 × 20² + 5 = 800 + 5 = 805.",
            markScheme: ["2n^2 + 5", "805", "second difference 4", "subtract 2n^2"],
            commonError:
              "Using the second difference itself (4) as the n² coefficient instead of halving it — the check at n = 2 (16 + 5 vs 4 × 4 + something) catches this instantly.",
            guideRef: "Quadratic sequences and second differences",
            difficulty: "core",
            hints: [
              "Compute first differences, then second differences.",
              "Halve the second difference for the n² coefficient.",
              "Subtract 2, 8, 18, 32, 50 from the terms — the leftover here is constant.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "seq-qa-p1-q05",
            question:
              "An arithmetic series begins 100 + 97 + 94 + ... Calculate the sum of its first 40 terms.",
            modelAnswer:
              "a = 100, d = −3, n = 40.\nS40 = 40/2 × (2 × 100 + 39 × (−3)) = 20 × (200 − 117) = 20 × 83 = 1660.",
            markScheme: ["1660", "d = -3", "200 - 117", "20 x 83"],
            commonError:
              "Dropping the minus sign on d and computing 20 × (200 + 117) = 6340. A decreasing series must have negative d throughout the calculation.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "core",
            hints: [
              "The series decreases — what is d, including its sign?",
              "Substitute a = 100, d = −3, n = 40 into Sn.",
              "The bracket is 200 + 39 × (−3).",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "seq-qa-p1-q06",
            question:
              "(a) Prove that the sum of the first n odd numbers, 1 + 3 + 5 + ... + (2n − 1), is equal to n².\n(b) Hence evaluate 1 + 3 + 5 + ... + 149.",
            modelAnswer:
              "(a) The odd numbers form an arithmetic series with a = 1 and d = 2, and 2n − 1 is the nth odd number, so there are n terms. Sn = n/2 (2a + (n − 1)d) = n/2 (2 + 2(n − 1)) = n/2 × 2n = n².\n(b) 149 = 2 × 75 − 1 is the 75th odd number, so the sum is 75² = 5625.",
            markScheme: ["5625", "n^2", "75", "a = 1, d = 2"],
            commonError:
              "In (b), using n = 149 (the last VALUE, not the number of terms) and answering 149². Always convert the last term to its position first.",
            guideRef: "Sequences in disguise",
            difficulty: "challenge",
            hints: [
              "The odd numbers are an arithmetic sequence — identify a and d.",
              "Apply the Sn formula with n terms and simplify the bracket.",
              "For (b): which odd number is 149? Solve 2k − 1 = 149.",
            ],
            strategy: "exploit symmetry",
            solutions: [
              {
                label: "Algebraic method (Sn formula)",
                steps: [
                  "The odd numbers 1, 3, 5, ... form an arithmetic series with a = 1, d = 2.",
                  "Sum of the first n of them: Sn = n/2 (2 × 1 + (n − 1) × 2) = n/2 (2n) = n².",
                  "149 satisfies 2k − 1 = 149, so k = 75: it is the 75th odd number.",
                  "Therefore 1 + 3 + ... + 149 = 75² = 5625.",
                ],
              },
              {
                label: "Picture method (the elegant one)",
                steps: [
                  "Build a growing square from unit tiles. A 1 × 1 square is 1 tile.",
                  "To grow an n × n square into an (n + 1) × (n + 1) square, wrap an L-shaped border along two sides and the corner: that border uses n + n + 1 = 2n + 1 tiles — the next odd number.",
                  "So adding the odd numbers 1, 3, 5, ... one at a time always leaves a perfect square: after n odd numbers you have an n × n square, i.e. n² tiles.",
                  "1 + 3 + ... + 149 adds the first 75 odd numbers, giving a 75 × 75 square: 5625. No formula needed — the picture is the proof.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "seq-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "seq-qa-p2-q01",
            question:
              "A sequence has nth term 8n + 3.\n(a) Write down the first three terms of the sequence.\n(b) Find the 100th term.",
            modelAnswer:
              "(a) n = 1: 11; n = 2: 19; n = 3: 27. The first three terms are 11, 19, 27.\n(b) 100th term = 8 × 100 + 3 = 803.",
            markScheme: ["11", "19", "27", "803"],
            commonError:
              "Starting at n = 0 and giving 3, 11, 19 — sequence positions start at n = 1.",
            guideRef: "Two ways to describe a sequence",
            difficulty: "warmup",
          },
          {
            id: "seq-qa-p2-q02",
            question:
              "The first four terms of an arithmetic sequence are 29, 25, 21, 17.\n(a) Find an expression, in terms of n, for the nth term.\n(b) Is −75 a term of the sequence? Justify your answer.",
            modelAnswer:
              "(a) The common difference is −4, so the nth term is −4n + c. When n = 1 we need 29, so c = 33: nth term = 33 − 4n. Check n = 2: 33 − 8 = 25. Correct.\n(b) Solve 33 − 4n = −75: 4n = 108, so n = 27, a positive whole number. Yes — −75 is the 27th term.",
            markScheme: ["33 - 4n", "27", "yes", "4n = 108"],
            commonError:
              "Sign slips when rearranging 33 − 4n = −75: adding 4n and 75 to both sides gives 108 = 4n; a mistake here often produces n = −27 and the wrong conclusion.",
            guideRef: "The nth term of an arithmetic sequence",
            difficulty: "core",
            hints: [
              "The sequence decreases by 4, so the nth term is −4n + c.",
              "Choose c so that n = 1 gives 29.",
              "For (b), solve 33 − 4n = −75 and decide whether n is a positive integer.",
            ],
            strategy: "work backwards",
          },
          {
            id: "seq-qa-p2-q03",
            question:
              "A sequence has nth term 7n + 4. Determine whether the year 2026 appears in this sequence. You must show your working.",
            modelAnswer:
              "Solve 7n + 4 = 2026: 7n = 2022. But 2022 ÷ 7 = 288.857..., which is not a whole number, so 2026 is not a term. Supporting check: the 288th term is 7 × 288 + 4 = 2020 and the 289th term is 7 × 289 + 4 = 2027, so 2026 falls strictly between consecutive terms.",
            markScheme: ["not a term", "7n = 2022", "not a whole number", "2020", "2027"],
            commonError:
              "Concluding \"no\" from the division alone without a statement — the mark scheme wants \"n is not a positive integer, so 2026 is not a term\" (naming the neighbouring terms 2020 and 2027 makes the argument airtight).",
            guideRef: "Is 2026 in the sequence?",
            difficulty: "core",
            hints: [
              "Set 7n + 4 equal to 2026.",
              "Is 2022 divisible by 7? Try 7 × 288.",
              "Name the two consecutive terms that trap 2026 between them.",
            ],
            strategy: "work backwards",
          },
          {
            id: "seq-qa-p2-q04",
            question:
              "A pattern sequence of tiles contains 3, 10, 21, 36 tiles in patterns 1, 2, 3, 4.\n(a) Find an expression, in terms of n, for the number of tiles in pattern n.\n(b) How many tiles are in pattern 12?",
            modelAnswer:
              "(a) First differences: 7, 11, 15. Second differences: 4, 4 — constant, so the n² coefficient is 2. Subtract 2n² (2, 8, 18, 32): 1, 2, 3, 4, which is n. So pattern n has 2n² + n tiles, i.e. n(2n + 1). Check n = 3: 18 + 3 = 21. Correct.\n(b) Pattern 12: 2 × 144 + 12 = 300 tiles.",
            markScheme: ["2n^2 + n", "300", "second difference 4", "n(2n + 1)"],
            commonError:
              "Treating the sequence as linear because the first difference (7) looks usable — always check whether the differences are constant before writing dn + c.",
            guideRef: "Quadratic sequences and second differences",
            difficulty: "core",
            hints: [
              "Are the first differences constant? If not, go a level deeper.",
              "Second difference 4 means the formula starts 2n².",
              "Subtract 2, 8, 18, 32 from the tile counts and identify the leftover.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "seq-qa-p2-q05",
            question:
              "The sum of the first n terms of the arithmetic series 4 + 7 + 10 + ... is 375. Find the value of n.",
            modelAnswer:
              "a = 4, d = 3. Sn = n/2 (8 + 3(n − 1)) = n/2 (3n + 5) = 375, so n(3n + 5) = 750, i.e. 3n² + 5n − 750 = 0. By the quadratic formula, n = (−5 ± √(25 + 9000))/6 = (−5 ± 95)/6, since √9025 = 95. So n = 15 or n = −50/3; n must be a positive integer, so n = 15. Check: S15 = 15/2 × (8 + 42) = 7.5 × 50 = 375. Correct.",
            markScheme: ["15", "3n^2 + 5n - 750 = 0", "quadratic", "reject negative"],
            commonError:
              "Losing the factor of 1/2 when clearing the formula (writing n(3n + 5) = 375 instead of 750), which leads to a quadratic with no nice roots — a sign you should re-check the setup.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "core",
            hints: [
              "Write Sn with a = 4, d = 3 and simplify the bracket.",
              "Set n/2 (3n + 5) = 375 and multiply both sides by 2.",
              "Solve the quadratic 3n² + 5n − 750 = 0 and keep only the sensible root.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "seq-qa-p2-q06",
            question:
              "An arithmetic series has 5th term 17 and 12th term 45.\n(a) Find the first term and the common difference.\n(b) Calculate the sum of the first 30 terms.",
            modelAnswer:
              "(a) From the 5th to the 12th term is 7 steps covering 45 − 17 = 28, so d = 4. Then a = 17 − 4d = 17 − 16 = 1. (Check: 12th term = 1 + 11 × 4 = 45. Correct.)\n(b) S30 = 30/2 × (2 × 1 + 29 × 4) = 15 × (2 + 116) = 15 × 118 = 1770.",
            markScheme: ["1770", "d = 4", "a = 1", "15 x 118"],
            commonError:
              "Dividing 28 by 8 instead of 7 — count the STEPS between terms (12 − 5 = 7), not the number of terms involved.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "challenge",
            hints: [
              "How many common differences separate the 5th and 12th terms?",
              "7d = 28. Now step back from the 5th term to find a.",
              "With a and d known, apply Sn = n/2 (2a + (n − 1)d) for n = 30.",
            ],
            strategy: "work backwards",
          },
        ],
      },
      {
        id: "seq-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "seq-qa-p3-q01",
            question:
              "A sequence starts at 40 and has term-to-term rule \"subtract 6\".\n(a) Write down the first five terms.\n(b) Is this sequence arithmetic? Give a reason.",
            modelAnswer:
              "(a) 40, 34, 28, 22, 16.\n(b) Yes — the difference between consecutive terms is constant (d = −6), which is exactly what makes a sequence arithmetic.",
            markScheme: ["40, 34, 28, 22, 16", "yes", "constant difference", "-6"],
            commonError:
              "Saying \"no, because it is decreasing\" — arithmetic sequences may decrease; what matters is that the difference is constant.",
            guideRef: "Two ways to describe a sequence",
            difficulty: "warmup",
          },
          {
            id: "seq-qa-p3-q02",
            question:
              "Rows of triangles are made from matchsticks: pattern 1 uses 3 matchsticks, pattern 2 uses 5 and pattern 3 uses 7.\n(a) Find an expression for the number of matchsticks in pattern n.\n(b) Ryan says one of the patterns uses exactly 90 matchsticks. Explain why Ryan is wrong.",
            modelAnswer:
              "(a) The counts 3, 5, 7 increase by 2, and 2 × 1 + 1 = 3 checks, so pattern n uses 2n + 1 matchsticks.\n(b) Solve 2n + 1 = 90: 2n = 89, so n = 44.5, which is not a whole number. So no pattern uses exactly 90 matchsticks. (Equivalently: 2n + 1 is always odd, and 90 is even.)",
            markScheme: ["2n + 1", "44.5", "not a whole number", "odd"],
            commonError:
              "Answering (b) with \"90 is not in the sequence\" and no evidence. Either solve the equation or use the parity argument — an unsupported assertion scores nothing.",
            guideRef: "Patterns and matchsticks",
            difficulty: "core",
            hints: [
              "Find the nth term from the counts 3, 5, 7.",
              "Set 2n + 1 = 90 — what happens?",
              "Alternatively, think about odd and even: what kind of number is 2n + 1?",
            ],
            strategy: "look for invariants",
          },
          {
            id: "seq-qa-p3-q03",
            question:
              "Use Gauss's pairing idea, or a formula, to work out the sum of all the whole numbers from 1 to 500. Show your method.",
            modelAnswer:
              "Pair the numbers from opposite ends: 1 + 500 = 501, 2 + 499 = 501, 3 + 498 = 501, and so on. There are 500 ÷ 2 = 250 pairs, each with sum 501, so the total is 250 × 501 = 125250. (Formula check: n(n + 1)/2 = 500 × 501 ÷ 2 = 125250.)",
            markScheme: ["125250", "250 pairs", "501", "n(n + 1)/2"],
            commonError:
              "Computing 500 × 501 = 250500 and forgetting to halve — each number must belong to exactly one pair.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "core",
            hints: [
              "Pair the smallest number with the largest, the second smallest with the second largest, ...",
              "What is the sum of each pair, and how many pairs are there?",
              "Multiply the pair total by the number of pairs.",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "seq-qa-p3-q04",
            question:
              "Find an expression, in terms of n, for the nth term of the quadratic sequence 6, 11, 18, 27, 38, ...",
            modelAnswer:
              "First differences: 5, 7, 9, 11. Second differences: 2, 2, 2 — constant, so the n² coefficient is 1. Subtract n² (1, 4, 9, 16, 25) from the sequence: 5, 7, 9, 11, 13, which is the linear sequence 2n + 3. So the nth term is n² + 2n + 3. Check n = 4: 16 + 8 + 3 = 27. Correct.",
            markScheme: ["n^2 + 2n + 3", "second difference 2", "2n + 3", "subtract n^2"],
            commonError:
              "Assuming the leftover after subtracting n² must be a constant — here it is the linear sequence 2n + 3, so you still have one more nth-term step to do.",
            guideRef: "Quadratic sequences and second differences",
            difficulty: "core",
            hints: [
              "Confirm the second differences are constant and halve them.",
              "Subtract 1, 4, 9, 16, 25 from the terms.",
              "The leftover 5, 7, 9, 11, 13 is itself arithmetic — find its nth term.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "seq-qa-p3-q05",
            question:
              "Amara starts a savings plan. She saves £20 in week 1, and each week she saves £5 more than the week before.\n(a) How much does she save in week n?\n(b) Show that her total savings after 24 weeks are £1860.\n(c) After how many weeks do her total savings first exceed £1000?",
            modelAnswer:
              "(a) Week n savings: 20 + 5(n − 1) = 5n + 15 pounds.\n(b) Total after 24 weeks: S24 = 24/2 × (2 × 20 + 23 × 5) = 12 × (40 + 115) = 12 × 155 = £1860, as required.\n(c) Sn = n/2 (40 + 5(n − 1)) = n/2 (5n + 35) = 5n(n + 7)/2. Require 5n(n + 7)/2 > 1000, i.e. n(n + 7) > 400. For n = 16: 16 × 23 = 368 (not enough, total £920). For n = 17: 17 × 24 = 408 (total £1020). So her savings first exceed £1000 after 17 weeks.",
            markScheme: ["5n + 15", "1860", "17", "n(n + 7) > 400"],
            commonError:
              "Muddling the nth TERM (amount saved in week n) with Sn (total saved so far) — part (a) asks for a term, parts (b) and (c) ask about sums.",
            guideRef: "Adding it all up: the story of young Gauss",
            difficulty: "core",
            hints: [
              "Week-by-week amounts form an arithmetic sequence: a = 20, d = 5.",
              "\"Total after n weeks\" is Sn, not the nth term.",
              "For (c), simplify Sn, set it against 1000, and test whole numbers of weeks either side.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "seq-qa-p3-q06",
            question:
              "A sequence has nth term n² + 2n. Determine whether 2026 is a term of this sequence. You must justify your answer fully.",
            modelAnswer:
              "Set n² + 2n = 2026. Complete the square: n² + 2n = (n + 1)² − 1, so (n + 1)² = 2027. Now 45² = 2025 and 46² = 2116, so 2027 is not a perfect square, which means n + 1 (and hence n) cannot be a whole number. Therefore 2026 is not a term. Supporting check: the 44th term is 44² + 88 = 2024 and the 45th term is 45² + 90 = 2115, so 2026 falls between consecutive terms.",
            markScheme: ["not a term", "(n + 1)^2 = 2027", "not a perfect square", "2025", "2024"],
            commonError:
              "Trying to factorise n² + 2n − 2026 and giving up — completing the square, or simply evaluating terms either side of 2026, settles it cleanly. An answer of \"no\" without either argument earns no marks.",
            guideRef: "Is 2026 in the sequence?",
            difficulty: "challenge",
            hints: [
              "Set the nth term equal to 2026, as with any membership question.",
              "n² + 2n is almost a perfect square — complete the square.",
              "You need (n + 1)² = 2027. Which two consecutive squares surround 2027?",
            ],
            strategy: "elegant algebra",
          },
        ],
      },
    ],
  },
};

export default topic;
