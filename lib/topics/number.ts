import type { Topic } from "../types";

const topic: Topic = {
  id: "number",
  title: "Number & Standard Form",
  subject: "Maths",
  icon: "🔢",
  intro:
    "Number is where sharp habits are built: breaking integers into primes, taming fractions and recurring decimals, writing enormous and tiny quantities in standard form, and knowing exactly how much a rounded measurement can be trusted. Every skill here appears on the 4MA1 Higher papers — and bounds and recurring decimals are two of the most reliable places to bank marks.",

  guide: [
    {
      heading: "Primes, HCF and LCM",
      body: `Every integer greater than 1 is either **prime** or can be written as a product of primes in exactly one way (ignoring order). This is the Fundamental Theorem of Arithmetic — primes are the DNA of the whole numbers.

To factorise, use a factor tree or repeated division: 360 = 2 × 180 = 2 × 2 × 90 = ... = 2³ × 3² × 5.

Once two numbers are written in prime-factor form, both the **HCF** (highest common factor) and the **LCM** (lowest common multiple) can be read off directly:

- HCF: take each shared prime to the **lower** power.
- LCM: take every prime that appears, to the **higher** power.

Example: 60 = 2² × 3 × 5 and 72 = 2³ × 3². HCF = 2² × 3 = 12; LCM = 2³ × 3² × 5 = 360.

A very useful check: for any two positive integers a and b, **HCF × LCM = a × b**. Here 12 × 360 = 4320 = 60 × 72.`,
      discovery: {
        problem:
          "Two lighthouse beams start flashing together at midnight. One flashes every 12 seconds, the other every 20 seconds. When do they next flash together — and can you answer without listing times?",
        idea: "They coincide at common multiples of 12 and 20. Prime factorisation (12 = 2² × 3, 20 = 2² × 5) gives the LCM instantly: 2² × 3 × 5 = 60 seconds. Prime powers let you build the answer instead of hunting for it.",
      },
      whyItWorks: `Why does "lower power for HCF, higher power for LCM" work? A number d divides both a and b only if every prime in d appears in both — so d can use each prime at most to the smaller of the two powers. A common multiple must contain every prime of a AND every prime of b — so it needs at least the larger power of each. Taking exactly those powers gives the greatest divisor and the least multiple. Multiplying them uses each prime's lower power once and higher power once — which is the same as using both original powers — hence HCF × LCM = ab.`,
      strategies: [
        "Factor first: rewrite numbers as prime powers before comparing them",
        "Try small cases: test a rule on 12 and 20 before trusting it in general",
        "Work backwards: to make a product a square or cube, ask what exponents are missing",
      ],
      keyPoints: [
        "1 is NOT prime; 2 is the only even prime",
        "HCF = shared primes to the lower power; LCM = all primes to the higher power",
        "HCF × LCM = product of the two numbers",
        "A number is a perfect square exactly when every exponent in its prime factorisation is even (a cube needs multiples of 3)",
        "To test whether n is prime, only check prime divisors up to √n",
      ],
      thinkDeeper:
        "Euclid proved there are infinitely many primes: if p₁, p₂, ..., pₖ were ALL the primes, the number N = p₁ × p₂ × ... × pₖ + 1 leaves remainder 1 when divided by each of them, so its prime factors are new primes — contradiction. Try it: 2 × 3 × 5 × 7 + 1 = 211, which is prime.",
      diagrams: [
        {
          id: "num-diag-01",
          title: "Factor tree for 360",
          svg: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Factor tree showing 360 splitting into 2 and 180, 180 into 2 and 90, 90 into 2 and 45, 45 into 3 and 15, 15 into 3 and 5, giving 360 equals 2 cubed times 3 squared times 5">
  <line x1="200" y1="34" x2="150" y2="70" stroke="#64748b" stroke-width="2"/>
  <line x1="200" y1="34" x2="250" y2="70" stroke="#64748b" stroke-width="2"/>
  <line x1="250" y1="86" x2="205" y2="118" stroke="#64748b" stroke-width="2"/>
  <line x1="250" y1="86" x2="295" y2="118" stroke="#64748b" stroke-width="2"/>
  <line x1="295" y1="134" x2="255" y2="166" stroke="#64748b" stroke-width="2"/>
  <line x1="295" y1="134" x2="335" y2="166" stroke="#64748b" stroke-width="2"/>
  <line x1="335" y1="182" x2="300" y2="214" stroke="#64748b" stroke-width="2"/>
  <line x1="335" y1="182" x2="370" y2="214" stroke="#64748b" stroke-width="2"/>
  <text x="200" y="28" font-size="18" text-anchor="middle" fill="currentColor" font-weight="bold">360</text>
  <text x="145" y="86" font-size="17" text-anchor="middle" fill="#dc2626" font-weight="bold">2</text>
  <text x="252" y="86" font-size="17" text-anchor="middle" fill="currentColor">180</text>
  <text x="202" y="134" font-size="17" text-anchor="middle" fill="#dc2626" font-weight="bold">2</text>
  <text x="297" y="134" font-size="17" text-anchor="middle" fill="currentColor">90</text>
  <text x="252" y="182" font-size="17" text-anchor="middle" fill="#dc2626" font-weight="bold">2</text>
  <text x="337" y="182" font-size="17" text-anchor="middle" fill="currentColor">45</text>
  <text x="297" y="230" font-size="17" text-anchor="middle" fill="#16a34a" font-weight="bold">3</text>
  <text x="372" y="230" font-size="17" text-anchor="middle" fill="#2563eb" font-weight="bold">15 = 3 × 5</text>
  <text x="30" y="120" font-size="16" fill="currentColor">360 =</text>
  <text x="30" y="145" font-size="16" fill="#dc2626" font-weight="bold">2³</text>
  <text x="52" y="145" font-size="16" fill="currentColor">×</text>
  <text x="68" y="145" font-size="16" fill="#16a34a" font-weight="bold">3²</text>
  <text x="90" y="145" font-size="16" fill="currentColor">×</text>
  <text x="106" y="145" font-size="16" fill="#2563eb" font-weight="bold">5</text>
</svg>`,
          caption:
            "Keep splitting until every branch ends in a prime, then collect the primes as powers.",
        },
      ],
    },

    {
      heading: "Fraction and decimal arithmetic",
      body: `Higher papers assume fluent, calculator-free fraction work.

**Add or subtract**: rewrite over a common denominator (the LCM of the denominators is the tidiest choice), then combine numerators. 3/4 + 2/5 = 15/20 + 8/20 = 23/20.

**Multiply**: multiply straight across — but **cancel first** to keep numbers small. 5/6 × 4/15: cancel the 5 with the 15 and the 4 with the 6 to get 2/9 with almost no work.

**Divide**: keep the first fraction, flip the second, multiply. 2/3 ÷ 5/6 = 2/3 × 6/5 = 4/5.

Avoid mixed numbers mid-calculation — convert to improper fractions first, and only convert back at the end if the question asks.

**Fractions to decimals**: divide the numerator by the denominator (short division). A fraction in lowest terms gives a **terminating** decimal exactly when its denominator has no prime factors other than 2 and 5 — e.g. 7/40 terminates (40 = 2³ × 5) but 5/12 recurs (the 3 in 12 spoils it).`,
      whyItWorks: `Why "flip and multiply" for division? Dividing by 5/6 asks: how many lots of 5/6 fit? Multiply numerator and denominator of (2/3)/(5/6) by 6/5 and the denominator becomes 1: (2/3 × 6/5)/(5/6 × 6/5) = (2/3 × 6/5)/1. Nothing mysterious — you are just clearing the denominator with its reciprocal.`,
      strategies: [
        "Cancel before you multiply — small numbers make fewer slips",
        "Use the LCM of denominators, not just their product",
        "Estimate first (2/3 ÷ 5/6 should be a bit less than 1) to sanity-check the answer",
      ],
      keyPoints: [
        "Common denominator for + and −; straight across for ×; keep-flip-multiply for ÷",
        "Always give fraction answers in simplest form",
        "Denominator (in lowest terms) built only from 2s and 5s ⇔ terminating decimal",
        "Convert mixed numbers to improper fractions before any arithmetic",
      ],
    },

    {
      heading: "Recurring decimals to fractions",
      body: `Every recurring decimal is secretly a fraction, and the 4MA1 Higher papers regularly ask you to prove it with the **algebraic shift method**:

- Let x equal the decimal: x = 0.242424...
- Multiply by 10 for each digit in the repeating block, so the blocks line up: 100x = 24.242424...
- Subtract: 100x − x = 24, so 99x = 24 and x = 24/99 = 8/33.

If some digits do NOT recur, shift twice so the recurring tails match. For 0.3777...: 10x = 3.777... and 100x = 37.777..., so 90x = 34 and x = 34/90 = 17/45.

Quick pattern worth knowing: a block of n recurring digits sitting right after the point is that block over n nines — 0.7 recurring = 7/9, 0.45 recurring = 45/99 = 5/11.

Always simplify the final fraction — "show that" questions expect the target form exactly.`,
      discovery: {
        problem:
          "Is 0.999... (the 9s going on forever) actually EQUAL to 1, or just very close? Decide, then try to prove your answer.",
        idea: "Let x = 0.999.... Then 10x = 9.999..., so 10x − x = 9, giving 9x = 9 and x = 1. Exactly 1 — not approximately. The subtraction trick that settles this argument is the same one that converts every recurring decimal into a fraction.",
      },
      whyItWorks: `Multiplying by 10 to the power of the block length slides the decimal one whole block to the left, so the infinite recurring tails of x and its multiple are IDENTICAL. Subtracting kills the infinite part completely, leaving an ordinary equation with whole numbers. That is why the method needs the shift to match the block length: shift by the wrong amount and the tails no longer cancel.`,
      strategies: [
        "Introduce a variable: naming the decimal x turns an infinite object into algebra",
        "Look for invariants: the recurring tail is unchanged by the right shift — exploit that",
        "Check by division: convert your fraction back to a decimal to confirm",
      ],
      keyPoints: [
        "Multiply by 10^(length of repeating block) so the tails align, then subtract",
        "Non-recurring digits first? Use two multiples (e.g. 10x and 100x) and subtract those",
        "0.ababab... = ab/99; 0.abcabc... = abc/999",
        "Simplify — examiners' target fractions are always in lowest terms",
      ],
      thinkDeeper:
        "Why does 1/7 = 0.142857 recurring have a 6-digit block? When you divide by 7, each step's remainder is one of 1, 2, 3, 4, 5, 6 — only 6 possibilities — so within 6 steps a remainder must repeat, and the digits cycle from there. In general the block length of 1/n is at most n − 1, and equals n − 1 for special primes like 7, 17 and 19.",
    },

    {
      heading: "Standard form",
      body: `Standard form writes any number as **a × 10ⁿ** where **1 ≤ a < 10** and n is an integer. It exists because science needs both 5 970 000 000 000 000 000 000 000 kg (the Earth) and 0.000 000 000 1 m (an atom) to be readable: 5.97 × 10²⁴ and 1 × 10⁻¹⁰.

**Writing**: count how many places the decimal point moves to return a to the original number. Big numbers get positive n; numbers between 0 and 1 get negative n. 0.00042 = 4.2 × 10⁻⁴.

**Multiplying and dividing**: handle the number parts and the powers of 10 separately, using index laws.

- (3 × 10⁵) × (4 × 10⁻²) = 12 × 10³ = 1.2 × 10⁴
- (8 × 10⁻³) ÷ (4 × 10⁵) = 2 × 10⁻⁸

Notice the fix-up in the first example: 12 × 10³ is NOT standard form because 12 ≥ 10, so trade a factor of 10 into the power.

**Adding and subtracting**: powers of 10 must match first — either convert to ordinary numbers or rewrite with the same power. 2.4 × 10⁵ + 3.1 × 10⁴ = 24 × 10⁴ + 3.1 × 10⁴ = 27.1 × 10⁴ = 2.71 × 10⁵.

**Comparing**: the bigger power of 10 wins; only compare the a-parts when the powers are equal.`,
      discovery: {
        problem:
          "Light from the Sun takes about 8 minutes to reach Earth. Light from Proxima Centauri, the next-nearest star, takes about 4.2 years. Roughly how many times further away is Proxima Centauri? Try the division with ordinary numbers — then ask whether there is a saner notation.",
        idea: "4.2 years ≈ 2.2 × 10⁶ minutes, so the ratio is about (2.2 × 10⁶)/8 ≈ 2.8 × 10⁵ — nearly 300 000 times further. Standard form turns astronomical division into one small division plus index laws.",
      },
      whyItWorks: `All the operation rules are just index laws in disguise: 10^m × 10^n = 10^(m+n) and 10^m ÷ 10^n = 10^(m−n). Addition has no such shortcut because 10^m + 10^n does not simplify — which is exactly why you must equalise the powers (make the place values match) before adding, just as you line up columns in ordinary addition.`,
      strategies: [
        "Split the problem: deal with the a-parts and the powers of 10 separately",
        "Consider extremes: sanity-check by asking whether the answer should be huge or tiny",
        "Fix the form last: finish the arithmetic, then adjust so 1 ≤ a < 10",
      ],
      keyPoints: [
        "a × 10ⁿ with 1 ≤ a < 10 — check a every time; 12 × 10³ and 0.45 × 10⁻³ are not standard form",
        "Multiply/divide: combine a-parts, add/subtract the indices",
        "Add/subtract: make the powers of 10 equal first",
        "Negative index means a number between 0 and 1, not a negative number",
      ],
    },

    {
      heading: "Estimation, significant figures and rounding",
      body: `**Significant figures** count from the first non-zero digit. In 0.030472 the first significant figure is 3; to 2 s.f. it is 0.030 — and the trailing zero must stay, because it is doing the job of showing the precision.

**Rounding rule**: look at the single digit after the cut; 5 or more rounds up. 34 578 to 3 s.f. is 34 600 (the 7 pushes the 5 up to 6) — keep the place-holding zeros so the size of the number is unchanged.

**Estimation**: round every value to **1 significant figure**, then calculate exactly with those easy numbers.

(4.92 × 20.3)/0.198 ≈ (5 × 20)/0.2 = 100/0.2 = 500.

Division by a decimal? Multiply top and bottom by 10 until the divisor is whole: 100/0.2 = 1000/2 = 500.

You can often say whether an estimate is an over- or under-estimate: if you rounded the numerator up and the denominator down, the estimate is too big. Examiners love a one-line justification of this.`,
      strategies: [
        "Round to 1 s.f. first, calculate second — never the other way round",
        "Consider extremes: track whether each rounding pushed the answer up or down",
        "Sense-check answers against an estimate before moving on — it is the cheapest error-catcher in the exam",
      ],
      keyPoints: [
        "Significant figures start at the first non-zero digit; decimal places start at the point",
        "To estimate, round every number to 1 s.f., then work exactly",
        "Keep place-holder zeros: 34 578 → 34 600 (3 s.f.), not 346",
        "Rounding the numerator up (or denominator down) makes a fraction's estimate an overestimate",
      ],
    },

    {
      heading: "Upper and lower bounds",
      body: `A measurement of 8.3 cm "to 1 decimal place" was never exactly 8.3 — it was anything from 8.25 up to (but not including) 8.35. We write the **error interval** 8.25 ≤ x < 8.35. The rule: half the rounding unit each way. The lower bound is 8.25; the upper bound is 8.35 (we use 8.35 in calculations even though the value never quite reaches it).

The interesting Higher skill is bounding **calculated** quantities. To make a result as LARGE as possible, feed in whatever pushes it up; to make it small, push everything down:

- **Add / Multiply**: max = UB + UB (or UB × UB); min = LB + LB (or LB × LB)
- **Subtract**: max = UB − LB; min = LB − UB
- **Divide**: max = UB ÷ LB; min = LB ÷ UB

Example: a = 5.4 and b = 2.1, both to 1 d.p. The greatest possible a/b is 5.45/2.05 = 2.66 (3 s.f.) — biggest top, smallest bottom.

**Suitable degree of accuracy**: compute the upper AND lower bound of the result; the answer "to an appropriate accuracy" is the most precise rounding at which both bounds agree. If UB = 21.33 and LB = 20.59, both round to 21 (2 s.f.), so quote 21.`,
      discovery: {
        problem:
          "A shelf bracket needs a gap of exactly 2.40 m. A joiner cuts two planks, each measuring 1.20 m to the nearest centimetre, and lays them end to end. Is it possible the pair is more than 1 cm too long?",
        idea: "Each plank can be as long as 1.205 m, so together they can reach 2.41 m — a full centimetre over. Rounded measurements carry hidden uncertainty, and uncertainties ADD UP when you combine measurements. Bounds make that hidden risk exact.",
      },
      whyItWorks: `Why does division use opposite bounds? A fraction grows when its numerator grows OR its denominator shrinks — so the biggest possible quotient takes the numerator's upper bound with the denominator's lower bound. Subtraction is the same story: a − b is largest when a is large and b is small. The reliable habit is not to memorise the table but to ask of each input: does increasing this push my answer up or down?`,
      strategies: [
        "Consider extremes: test the corner values of each interval rather than guessing",
        "Draw a diagram: sketch the error interval on a number line",
        "Work backwards for suitable accuracy: find both bounds, then see where they first agree",
      ],
      keyPoints: [
        "Error interval: (value − half a unit) ≤ x < (value + half a unit)",
        "The upper bound uses < but is still the number you substitute into calculations",
        "Max of a − b and a ÷ b: big a, SMALL b; min: small a, big b",
        "Appropriate accuracy = the precision at which UB and LB round to the same value",
      ],
      thinkDeeper:
        "Percentage error behaves differently from absolute error. Each 1.20 m plank is at most 0.5 cm off — about 0.4% — but the SUM of two planks is at most 1 cm off, still about 0.4%. Adding measurements adds absolute errors but roughly preserves percentage error, whereas multiplying measurements roughly ADDS the percentage errors. That is why the bounds of an area (two multiplied lengths) are proportionally wider than the bounds of either side.",
      diagrams: [
        {
          id: "num-diag-02",
          title: "Error interval for 8.3 (1 d.p.)",
          svg: `<svg viewBox="0 0 620 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line from 8.2 to 8.4 showing the error interval for 8.3 to one decimal place: a filled dot at 8.25, an open circle at 8.35, and a shaded bar between them">
  <line x1="30" y1="80" x2="590" y2="80" stroke="currentColor" stroke-width="2"/>
  <line x1="60" y1="72" x2="60" y2="88" stroke="currentColor" stroke-width="2"/>
  <line x1="310" y1="72" x2="310" y2="88" stroke="currentColor" stroke-width="2"/>
  <line x1="560" y1="72" x2="560" y2="88" stroke="currentColor" stroke-width="2"/>
  <text x="60" y="110" font-size="15" text-anchor="middle" fill="currentColor">8.2</text>
  <text x="310" y="110" font-size="15" text-anchor="middle" fill="currentColor">8.3</text>
  <text x="560" y="110" font-size="15" text-anchor="middle" fill="currentColor">8.4</text>
  <rect x="185" y="74" width="250" height="12" fill="#2563eb" opacity="0.35"/>
  <circle cx="185" cy="80" r="7" fill="#2563eb"/>
  <circle cx="435" cy="80" r="7" fill="none" stroke="#dc2626" stroke-width="3"/>
  <text x="185" y="55" font-size="15" text-anchor="middle" fill="#2563eb" font-weight="bold">8.25 included</text>
  <text x="435" y="55" font-size="15" text-anchor="middle" fill="#dc2626" font-weight="bold">8.35 excluded</text>
  <text x="310" y="28" font-size="16" text-anchor="middle" fill="currentColor" font-weight="bold">8.25 ≤ x &lt; 8.35</text>
</svg>`,
          caption:
            "Half the rounding unit each way: the lower bound is included, the upper bound is approached but never reached.",
        },
      ],
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What makes a number prime?",
        back: "It has exactly two factors: 1 and itself. 1 is not prime; 2 is the only even prime.",
      },
      {
        front: "HCF from prime factorisations?",
        back: "Take each SHARED prime to the LOWER power. E.g. 60 = 2²×3×5, 72 = 2³×3² → HCF = 2²×3 = 12.",
      },
      {
        front: "LCM from prime factorisations?",
        back: "Take EVERY prime that appears, to the HIGHER power. 60 and 72 → LCM = 2³×3²×5 = 360.",
      },
      {
        front: "Link between HCF, LCM and the two numbers?",
        back: "HCF × LCM = a × b for any two positive integers a and b.",
      },
      {
        front: "How do you divide one fraction by another?",
        back: "Keep the first, flip the second, multiply: 2/3 ÷ 5/6 = 2/3 × 6/5 = 4/5.",
      },
      {
        front: "Which fractions give terminating decimals?",
        back: "In lowest terms, exactly those whose denominator has no prime factors other than 2 and 5 (e.g. 7/40 terminates, 5/12 recurs).",
      },
      {
        front: "Method to convert 0.242424... to a fraction?",
        back: "Let x = 0.2424..., then 100x = 24.2424...; subtract: 99x = 24, so x = 24/99 = 8/33.",
      },
      {
        front: "0.7 recurring and 0.45 recurring as fractions?",
        back: "7/9 and 45/99 = 5/11. A recurring block straight after the point sits over that many nines.",
      },
      {
        front: "Definition of standard form?",
        back: "a × 10ⁿ with 1 ≤ a < 10 and n an integer. 12 × 10³ is NOT standard form — rewrite as 1.2 × 10⁴.",
      },
      {
        front: "How do you add numbers in standard form?",
        back: "Make the powers of 10 equal first (or convert to ordinary numbers), add, then restore standard form.",
      },
      {
        front: "How do you estimate a calculation?",
        back: "Round every number to 1 significant figure, then calculate exactly with those values.",
      },
      {
        front: "Error interval for 12.5 measured to 1 d.p.?",
        back: "12.45 ≤ x < 12.55 — half the rounding unit (0.05) each way; lower bound included, upper excluded.",
      },
      {
        front: "Upper bound of a ÷ b?",
        back: "UB(a) ÷ LB(b) — biggest top over smallest bottom. The minimum is LB(a) ÷ UB(b).",
      },
      {
        front: "What is a 'suitable degree of accuracy' answer?",
        back: "The most precise rounding at which the upper and lower bounds of the result agree — compute both bounds, then round until they match.",
      },
    ],
    keyFacts: [
      "Every integer > 1 has exactly one prime factorisation (Fundamental Theorem of Arithmetic)",
      "HCF: shared primes, lower powers. LCM: all primes, higher powers. HCF × LCM = ab",
      "A perfect square has all even exponents in its prime factorisation; a cube has all multiples of 3",
      "0.ababab... = ab/99; with non-recurring digits, shift twice and subtract",
      "0.999... is exactly equal to 1",
      "Standard form: a × 10ⁿ, 1 ≤ a < 10; multiply/divide via index laws, add/subtract only with matching powers",
      "Significant figures start at the first non-zero digit; estimation = round everything to 1 s.f.",
      "A value rounded to a unit u has error interval value ± u/2 (lower ≤ x < upper)",
      "Max of a − b or a ÷ b uses UB(a) with LB(b); min uses LB(a) with UB(b)",
    ],
    formulaSheet: [
      {
        name: "HCF–LCM product rule",
        formula: "HCF(a, b) × LCM(a, b) = a × b",
        note: "Handy for finding the LCM once the HCF is known.",
      },
      {
        name: "Standard form",
        formula: "a × 10ⁿ, where 1 ≤ a < 10",
        note: "n > 0 for large numbers, n < 0 for numbers between 0 and 1.",
      },
      {
        name: "Index laws for powers of 10",
        formula: "10^m × 10^n = 10^(m+n);  10^m ÷ 10^n = 10^(m−n)",
      },
      {
        name: "Error interval",
        formula: "value − u/2 ≤ x < value + u/2",
        note: "u is the rounding unit, e.g. u = 0.1 for 1 d.p.",
      },
      {
        name: "Bounds of a quotient",
        formula: "max(a/b) = UB(a)/LB(b);  min(a/b) = LB(a)/UB(b)",
      },
      {
        name: "Speed and density",
        formula: "speed = distance/time;  density = mass/volume",
        note: "Common carriers for bound calculations.",
      },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "num-quiz-mcq-01",
        question: "Which of these is the prime factorisation of 360?",
        options: ["2² × 3³ × 5", "2³ × 3² × 5", "2³ × 3 × 5²", "2 × 3² × 5²"],
        answerIndex: 1,
        explanation:
          "360 = 8 × 45 = 2³ × 9 × 5 = 2³ × 3² × 5. Check by multiplying back: 8 × 9 × 5 = 360. The other options give 540, 600 and 450.",
        guideRef: "Primes, HCF and LCM",
        difficulty: "warmup",
      },
      {
        id: "num-quiz-mcq-02",
        question: "What is the HCF of 84 and 126?",
        options: ["14", "21", "42", "252"],
        answerIndex: 2,
        explanation:
          "84 = 2² × 3 × 7 and 126 = 2 × 3² × 7. Shared primes to the lower power: 2 × 3 × 7 = 42. 252 is the LCM, not the HCF; 14 and 21 are common factors but not the highest.",
        guideRef: "Primes, HCF and LCM",
        difficulty: "core",
        hints: [
          "Write both numbers as products of prime factors first.",
          "84 = 2² × 3 × 7. Now factorise 126.",
          "The HCF takes each shared prime to the LOWER power appearing in the two factorisations.",
        ],
        strategy: "Factor first",
      },
      {
        id: "num-quiz-mcq-03",
        question: "0.454545... (45 recurring) written as a fraction in simplest form is:",
        options: ["9/20", "45/100", "5/11", "4/9"],
        answerIndex: 2,
        explanation:
          "Let x = 0.4545...; then 100x = 45.4545..., so 99x = 45 and x = 45/99 = 5/11. 9/20 = 0.45 exactly (no recurrence) and 45/100 is the same trap; 4/9 = 0.444...",
        guideRef: "Recurring decimals to fractions",
        difficulty: "core",
        hints: [
          "Call the decimal x and remove the infinite tail by subtraction.",
          "The repeating block has two digits, so multiply x by 100.",
          "100x − x = 45 exactly. Solve for x and simplify.",
        ],
        strategy: "Introduce a variable",
      },
      {
        id: "num-quiz-mcq-04",
        question: "Write 0.00042 in standard form.",
        options: ["4.2 × 10⁻³", "4.2 × 10⁻⁴", "42 × 10⁻⁵", "4.2 × 10⁴"],
        answerIndex: 1,
        explanation:
          "The decimal point moves 4 places to give 4.2, and the number is small, so the power is −4: 4.2 × 10⁻⁴. 42 × 10⁻⁵ has the right value but 42 ≥ 10, so it is not standard form.",
        guideRef: "Standard form",
        difficulty: "warmup",
      },
      {
        id: "num-quiz-mcq-05",
        question: "Work out (3 × 10⁵) × (4 × 10⁻²), giving your answer in standard form.",
        options: ["1.2 × 10³", "1.2 × 10⁴", "1.2 × 10⁻¹⁰", "7 × 10³"],
        answerIndex: 1,
        explanation:
          "3 × 4 = 12 and 10⁵ × 10⁻² = 10³, giving 12 × 10³ — but 12 ≥ 10, so adjust: 1.2 × 10⁴. Choosing 1.2 × 10³ forgets that adjustment; 1.2 × 10⁻¹⁰ multiplies the indices instead of adding; 7 × 10³ adds the number parts.",
        guideRef: "Standard form",
        difficulty: "core",
        hints: [
          "Multiply the number parts and the powers of 10 separately.",
          "Index law: 10⁵ × 10⁻² = 10^(5 + (−2)).",
          "You should get 12 × 10³ — is that standard form? Fix it.",
        ],
        strategy: "Split the problem",
      },
      {
        id: "num-quiz-mcq-06",
        question: "By rounding each number to 1 significant figure, estimate (4.92 × 20.3) ÷ 0.198.",
        options: ["50", "200", "500", "5000"],
        answerIndex: 2,
        explanation:
          "4.92 ≈ 5, 20.3 ≈ 20, 0.198 ≈ 0.2, so the estimate is (5 × 20)/0.2 = 100/0.2 = 500. Getting 50 usually means dividing by 2 instead of 0.2; 5000 means multiplying by 10 twice when clearing the decimal.",
        guideRef: "Estimation, significant figures and rounding",
        difficulty: "core",
        hints: [
          "Round every number to 1 significant figure before doing anything else.",
          "You should be computing (5 × 20)/0.2.",
          "To divide by 0.2, multiply top and bottom by 10: 100/0.2 = 1000/2.",
        ],
        strategy: "Round to 1 s.f. first",
      },
      {
        id: "num-quiz-mcq-07",
        question: "Round 0.030472 to 2 significant figures.",
        options: ["0.03", "0.030", "0.031", "0.0305"],
        answerIndex: 1,
        explanation:
          "The first significant figure is the 3; the second is the 0 after it. The next digit is 4, so round down, keeping the trailing zero: 0.030. Writing 0.03 shows only 1 significant figure; 0.031 rounds the wrong way.",
        guideRef: "Estimation, significant figures and rounding",
        difficulty: "warmup",
      },
      {
        id: "num-quiz-mcq-08",
        question: "A length is measured as 8.3 cm to 1 decimal place. What is its upper bound?",
        options: ["8.34 cm", "8.349 cm", "8.35 cm", "8.4 cm"],
        answerIndex: 2,
        explanation:
          "Half the rounding unit (0.1) is 0.05, so the interval is 8.25 ≤ x < 8.35 and the upper bound is 8.35. 8.349 is a classic mistake — values like 8.3499 are even closer to 8.35, so the bound itself must be 8.35.",
        guideRef: "Upper and lower bounds",
        difficulty: "core",
        hints: [
          "The measurement was rounded to the nearest 0.1.",
          "The true value lies within half a unit either side of 8.3.",
          "Half of 0.1 is 0.05 — add it to 8.3.",
        ],
        strategy: "Consider extremes",
      },
      {
        id: "num-quiz-mcq-09",
        question: "Work out 2/3 ÷ 5/6, giving your answer in simplest form.",
        options: ["5/9", "4/5", "5/4", "7/9"],
        answerIndex: 1,
        explanation:
          "Keep, flip, multiply: 2/3 × 6/5 = 12/15 = 4/5. 5/9 comes from multiplying without flipping; 5/4 comes from flipping the wrong fraction.",
        guideRef: "Fraction and decimal arithmetic",
        difficulty: "core",
        hints: [
          "Dividing by a fraction is the same as multiplying by its reciprocal.",
          "Rewrite as 2/3 × 6/5 and cancel before multiplying.",
          "The 3 cancels into the 6, leaving 2 × 2 over 5.",
        ],
        strategy: "Keep-flip-multiply",
      },
      {
        id: "num-quiz-mcq-10",
        question: "How many zeros are at the END of 30! (that is, 30 × 29 × 28 × ... × 2 × 1)?",
        options: ["6", "7", "8", "26"],
        answerIndex: 1,
        explanation:
          "Each trailing zero comes from a factor 10 = 2 × 5, and 2s are plentiful, so count factors of 5: the multiples of 5 up to 30 give six (5, 10, 15, 20, 25, 30), and 25 = 5² contributes one extra. Total 6 + 1 = 7. Answering 6 misses the double five inside 25.",
        guideRef: "Primes, HCF and LCM",
        difficulty: "challenge",
        hints: [
          "A trailing zero needs a factor of 10 — what primes build a 10?",
          "There are far more factors of 2 than of 5 in 30!, so the 5s are the bottleneck.",
          "Count multiples of 5 up to 30 — then ask whether any of them contain 5 more than once.",
        ],
        strategy: "Look for invariants",
      },
    ],
    qa: [
      {
        id: "num-quiz-qa-01",
        question:
          "Write 60 and 72 as products of their prime factors, and hence find the HCF and LCM of 60 and 72.",
        modelAnswer:
          "60 = 2² × 3 × 5 and 72 = 2³ × 3². HCF: shared primes to the lower power = 2² × 3 = 12. LCM: all primes to the higher power = 2³ × 3² × 5 = 8 × 9 × 5 = 360. (Check: 12 × 360 = 4320 = 60 × 72.)",
        markScheme: ["HCF = 12", "LCM = 360", "2² × 3 × 5", "2³ × 3²", "prime factors"],
        commonError:
          "Swapping the rules — taking higher powers for the HCF gives 360 and lower powers for the LCM gives 12, exactly the wrong way round.",
        guideRef: "Primes, HCF and LCM",
        difficulty: "warmup",
      },
      {
        id: "num-quiz-qa-02",
        question: "Use algebra to show that 0.3777... (only the 7 recurring) is equal to 17/45.",
        modelAnswer:
          "Let x = 0.3777.... Then 10x = 3.777... and 100x = 37.777.... Subtracting: 100x − 10x = 37.777... − 3.777... = 34, so 90x = 34 and x = 34/90 = 17/45, as required.",
        markScheme: ["17/45", "90x = 34", "10x", "100x", "subtract"],
        commonError:
          "Multiplying only by 10 and subtracting x gives 9x = 3.4 — the recurring tails do not cancel because the 3 is not part of the repeating block. You need two multiples whose tails match.",
        guideRef: "Recurring decimals to fractions",
        difficulty: "core",
        hints: [
          "Let x be the decimal. Since one digit does not recur, one multiplication will not be enough.",
          "Find two multiples of x whose decimal tails are identical: try 10x and 100x.",
          "Subtract them — the infinite tails cancel, leaving 90x equal to a whole number.",
        ],
        strategy: "Introduce a variable",
      },
      {
        id: "num-quiz-qa-03",
        question:
          "Light travels at 3 × 10⁸ m/s. The Sun is 1.5 × 10¹¹ m from Earth. How long does sunlight take to reach Earth? Give your answer in seconds, and also in minutes and seconds.",
        modelAnswer:
          "time = distance ÷ speed = (1.5 × 10¹¹) ÷ (3 × 10⁸) = (1.5 ÷ 3) × 10^(11−8) = 0.5 × 10³ = 500 seconds. 500 s = 480 s + 20 s = 8 minutes 20 seconds.",
        markScheme: ["500", "8 minutes 20 seconds", "distance ÷ speed", "10³", "0.5 × 10³"],
        commonError:
          "Adding the indices (11 + 8 = 19) instead of subtracting when dividing, or leaving the answer as 0.5 × 10³ without converting to 500 s and then to minutes.",
        guideRef: "Standard form",
        difficulty: "core",
        hints: [
          "Which formula links distance, speed and time?",
          "Divide the number parts and the powers of 10 separately.",
          "1.5 ÷ 3 = 0.5 and 10¹¹ ÷ 10⁸ = 10³. Combine, then convert seconds to minutes.",
        ],
        strategy: "Split the problem",
      },
      {
        id: "num-quiz-qa-04",
        question:
          "a = 5.4 and b = 2.1, each correct to 1 decimal place. Calculate the upper bound of a ÷ b. Give your answer correct to 3 significant figures.",
        modelAnswer:
          "Bounds: 5.35 ≤ a < 5.45 and 2.05 ≤ b < 2.15. A quotient is largest with the biggest numerator and smallest denominator, so UB(a ÷ b) = 5.45 ÷ 2.05 = 2.65853... = 2.66 (3 s.f.).",
        markScheme: ["2.66", "5.45", "2.05", "upper bound", "5.45 ÷ 2.05"],
        commonError:
          "Using the upper bounds of BOTH numbers: 5.45 ÷ 2.15 = 2.53... actually gives neither bound — for division the extremes come from opposite ends of the two intervals.",
        guideRef: "Upper and lower bounds",
        difficulty: "core",
        hints: [
          "First write down the error interval for each measurement.",
          "To make a fraction as large as possible, what should happen to the top? To the bottom?",
          "Use the upper bound of a with the LOWER bound of b.",
        ],
        strategy: "Consider extremes",
      },
      {
        id: "num-quiz-qa-05",
        question: "Work out 15/4 − 11/6. Give your answer as a fraction in its simplest form.",
        modelAnswer:
          "The LCM of 4 and 6 is 12. 15/4 = 45/12 and 11/6 = 22/12, so 15/4 − 11/6 = 45/12 − 22/12 = 23/12. 23 is prime, so 23/12 is already in simplest form.",
        markScheme: ["23/12", "common denominator", "45/12", "22/12"],
        commonError:
          "Subtracting tops and bottoms separately: (15 − 11)/(6 − 4) = 4/2 = 2 is wrong — fractions can only be subtracted once they share a denominator.",
        guideRef: "Fraction and decimal arithmetic",
        difficulty: "core",
        hints: [
          "You need a common denominator before subtracting.",
          "The LCM of 4 and 6 is smaller than 24 — what is it?",
          "Convert both fractions to twelfths, then subtract the numerators.",
        ],
        strategy: "Use the LCM of denominators",
      },
      {
        id: "num-quiz-qa-06",
        question:
          "A sprinter runs d = 88 m, measured to the nearest metre, in t = 4.2 s, measured to the nearest 0.1 s. Using v = d/t, work out her speed to a suitable degree of accuracy. You must justify your rounding using bounds.",
        modelAnswer:
          "Bounds: 87.5 ≤ d < 88.5 and 4.15 ≤ t < 4.25. UB(v) = 88.5 ÷ 4.15 = 21.325... m/s; LB(v) = 87.5 ÷ 4.25 = 20.588... m/s. To 2 significant figures both bounds round to 21, so a suitable answer is v = 21 m/s (2 s.f.). (To 3 s.f. they disagree — 21.3 vs 20.6 — so 2 s.f. is the appropriate accuracy.)",
        markScheme: ["21", "21.3", "20.6", "88.5 ÷ 4.15", "87.5 ÷ 4.25", "bounds agree"],
        commonError:
          "Computing only 88 ÷ 4.2 = 20.95... and rounding it, with no bounds. The 'suitable accuracy' mark needs BOTH bounds calculated and a statement that they agree at the chosen precision.",
        guideRef: "Upper and lower bounds",
        difficulty: "challenge",
        hints: [
          "Write the error interval for the distance and for the time.",
          "The fastest possible speed uses the longest distance over the shortest time; the slowest uses the reverse.",
          "Round both bounds to 3 s.f. — do they agree? Now try 2 s.f.",
          "Quote the value both bounds round to, and say why that precision is justified.",
        ],
        strategy: "Consider extremes",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "num-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "num-mcq-p1-q01",
            question: "Which of these numbers is prime?",
            options: ["51", "57", "61", "91"],
            answerIndex: 2,
            explanation:
              "61 has no prime factors up to √61 ≈ 7.8 (not divisible by 2, 3, 5 or 7). The others all factorise: 51 = 3 × 17, 57 = 3 × 19, 91 = 7 × 13 — 91 fools many people because 7 × 13 is easy to miss.",
            guideRef: "Primes, HCF and LCM",
            difficulty: "warmup",
          },
          {
            id: "num-mcq-p1-q02",
            question: "Write 3/8 as a decimal.",
            options: ["0.38", "0.375", "0.35", "0.325"],
            answerIndex: 1,
            explanation:
              "3 ÷ 8 = 0.375 (or use 1/8 = 0.125, so 3/8 = 3 × 0.125). It terminates because 8 = 2³ has no prime factor other than 2.",
            guideRef: "Fraction and decimal arithmetic",
            difficulty: "warmup",
          },
          {
            id: "num-mcq-p1-q03",
            question: "What is the LCM of 18 and 24?",
            options: ["6", "48", "72", "432"],
            answerIndex: 2,
            explanation:
              "18 = 2 × 3² and 24 = 2³ × 3, so the LCM takes higher powers: 2³ × 3² = 72. 6 is the HCF; 432 is 18 × 24 (the product only equals the LCM when the HCF is 1); 48 is a multiple of 24 but not of 18.",
            guideRef: "Primes, HCF and LCM",
            difficulty: "core",
            hints: [
              "Prime-factorise both numbers.",
              "18 = 2 × 3² and 24 = 2³ × 3.",
              "LCM takes every prime to the HIGHER power appearing.",
            ],
            strategy: "Factor first",
          },
          {
            id: "num-mcq-p1-q04",
            question: "0.777... (7 recurring) as a fraction is:",
            options: ["7/10", "77/100", "7/9", "7/11"],
            answerIndex: 2,
            explanation:
              "Let x = 0.777...; then 10x = 7.777..., so 9x = 7 and x = 7/9. A one-digit recurring block sits over 9. 7/10 = 0.7 exactly and 7/11 = 0.636363...",
            guideRef: "Recurring decimals to fractions",
            difficulty: "core",
            hints: [
              "Set x equal to the decimal and multiply by 10.",
              "Subtract x from 10x — the tails cancel.",
              "9x equals a whole number.",
            ],
            strategy: "Introduce a variable",
          },
          {
            id: "num-mcq-p1-q05",
            question: "Work out (8 × 10⁻³) ÷ (4 × 10⁵), giving your answer in standard form.",
            options: ["2 × 10⁻²", "2 × 10⁻⁸", "2 × 10⁸", "2 × 10⁻¹⁵"],
            answerIndex: 1,
            explanation:
              "8 ÷ 4 = 2 and 10⁻³ ÷ 10⁵ = 10^(−3−5) = 10⁻⁸, so the answer is 2 × 10⁻⁸. Getting 10⁻² adds instead of subtracting the indices; 10⁸ drops the sign; 10⁻¹⁵ multiplies the indices.",
            guideRef: "Standard form",
            difficulty: "core",
            hints: [
              "Handle the number parts and the powers of 10 separately.",
              "When dividing powers of 10, subtract the indices.",
              "−3 − 5 = −8.",
            ],
            strategy: "Split the problem",
          },
          {
            id: "num-mcq-p1-q06",
            question: "Round 34 578 to 3 significant figures.",
            options: ["34 500", "34 580", "34 600", "34 000"],
            answerIndex: 2,
            explanation:
              "The first three significant figures are 3, 4, 5; the next digit is 7, so the 5 rounds up to 6, and zeros hold the place value: 34 600. Choosing 34 500 forgets to round up; 34 000 is 2 s.f.",
            guideRef: "Estimation, significant figures and rounding",
            difficulty: "core",
            hints: [
              "Identify the first three significant figures.",
              "Look at the single digit after them to decide up or down.",
              "That digit is 7 — so round up, and keep place-holding zeros.",
            ],
            strategy: "Round at the cut digit",
          },
          {
            id: "num-mcq-p1-q07",
            question:
              "Each side of a square is 6.4 cm, correct to 1 decimal place. What is the lower bound of its perimeter?",
            options: ["25.36 cm", "25.4 cm", "25.6 cm", "25.8 cm"],
            answerIndex: 1,
            explanation:
              "The lower bound of each side is 6.35 cm, so the smallest possible perimeter is 4 × 6.35 = 25.4 cm. 25.6 uses the stated value; 25.8 is the UPPER bound (4 × 6.45); 25.36 subtracts 0.04 rather than using half the unit per side.",
            guideRef: "Upper and lower bounds",
            difficulty: "core",
            hints: [
              "Find the error interval for one side first.",
              "The side is at least 6.4 − 0.05.",
              "Perimeter = 4 × (smallest possible side).",
            ],
            strategy: "Consider extremes",
          },
          {
            id: "num-mcq-p1-q08",
            question: "0.3181818... (only the 18 recurring) as a fraction in simplest form is:",
            options: ["106/333", "53/165", "159/500", "7/22"],
            answerIndex: 3,
            explanation:
              "Let x = 0.31818...; then 10x = 3.1818... and 1000x = 318.1818.... Subtracting: 990x = 315, so x = 315/990 = 7/22 (divide by 45). 106/333 = 318/999 wrongly treats the 3 as recurring; 159/500 = 0.318 exactly; 53/165 comes from writing 990x = 318 − a subtraction slip.",
            guideRef: "Recurring decimals to fractions",
            difficulty: "challenge",
            hints: [
              "One digit does not recur, so a single multiplication will not line the tails up.",
              "Try 10x and 1000x — both have the tail .1818...",
              "1000x − 10x = 318.1818... − 3.1818... — compute this carefully.",
              "Solve 990x = 315 and cancel fully.",
            ],
            strategy: "Introduce a variable",
          },
        ],
      },
      {
        id: "num-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "num-mcq-p2-q01",
            question: "Write 5.6 × 10⁴ as an ordinary number.",
            options: ["5 600", "56 000", "560 000", "0.00056"],
            answerIndex: 1,
            explanation:
              "10⁴ = 10 000, and 5.6 × 10 000 = 56 000 — the decimal point moves 4 places to the right. 5 600 moves it only 3 places; 0.00056 moves it the wrong way.",
            guideRef: "Standard form",
            difficulty: "warmup",
          },
          {
            id: "num-mcq-p2-q02",
            question: "What is the HCF of 12 and 30?",
            options: ["2", "3", "6", "60"],
            answerIndex: 2,
            explanation:
              "12 = 2² × 3 and 30 = 2 × 3 × 5; shared primes to the lower power give 2 × 3 = 6. 60 is the LCM; 2 and 3 are common factors but not the highest.",
            guideRef: "Primes, HCF and LCM",
            difficulty: "warmup",
          },
          {
            id: "num-mcq-p2-q03",
            question: "Work out 2/5 + 3/7.",
            options: ["5/12", "6/35", "26/35", "29/35"],
            answerIndex: 3,
            explanation:
              "Common denominator 35: 2/5 = 14/35 and 3/7 = 15/35, so the sum is 29/35. 5/12 adds tops and bottoms separately; 6/35 multiplies instead of adding; 26/35 miscalculates 14 + 15.",
            guideRef: "Fraction and decimal arithmetic",
            difficulty: "core",
            hints: [
              "Find a common denominator for fifths and sevenths.",
              "The LCM of 5 and 7 is 35.",
              "Convert both fractions to 35ths, then add the numerators only.",
            ],
            strategy: "Use the LCM of denominators",
          },
          {
            id: "num-mcq-p2-q04",
            question: "Which of these numbers is the largest?",
            options: ["9.9 × 10³", "1.05 × 10⁴", "3.2 × 10⁴", "8.7 × 10³"],
            answerIndex: 2,
            explanation:
              "Compare powers first: the two ×10⁴ numbers beat the two ×10³ numbers, and 3.2 > 1.05, so 3.2 × 10⁴ = 32 000 wins. 9.9 × 10³ tempts because 9.9 is the biggest front number, but it is only 9 900.",
            guideRef: "Standard form",
            difficulty: "core",
            hints: [
              "Compare the powers of 10 before looking at the front numbers.",
              "10⁴ numbers are in the tens of thousands; 10³ numbers are in the thousands.",
              "Among the 10⁴ options, compare the a-parts.",
            ],
            strategy: "Consider extremes",
          },
          {
            id: "num-mcq-p2-q05",
            question:
              "By rounding each value to 1 significant figure, estimate √48.6 × 3.9².",
            options: ["28", "56", "112", "196"],
            answerIndex: 2,
            explanation:
              "√48.6 ≈ √49 = 7 and 3.9² ≈ 4² = 16, so the estimate is 7 × 16 = 112. Getting 28 usually means using 3.9 × ... without squaring (7 × 4); 196 squares the 7 as well.",
            guideRef: "Estimation, significant figures and rounding",
            difficulty: "core",
            hints: [
              "Replace 48.6 by a nearby number with an exact square root.",
              "√49 = 7 and 3.9 rounds to 4.",
              "Remember to square the 4 before multiplying.",
            ],
            strategy: "Round to 1 s.f. first",
          },
          {
            id: "num-mcq-p2-q06",
            question:
              "A time t is 12.5 seconds, correct to the nearest 0.1 second. Which is the correct error interval?",
            options: [
              "12.45 ≤ t < 12.55",
              "12.45 ≤ t ≤ 12.55",
              "12.4 ≤ t < 12.6",
              "12.5 ≤ t < 12.6",
            ],
            answerIndex: 0,
            explanation:
              "Half of 0.1 is 0.05 each way: 12.45 ≤ t < 12.55. The upper bound must use a strict inequality (12.55 itself would round to 12.6); 12.4 to 12.6 uses a whole unit each way instead of half.",
            guideRef: "Upper and lower bounds",
            difficulty: "core",
            hints: [
              "The rounding unit is 0.1 — how far either side can the true value be?",
              "Half a unit each way.",
              "Think about whether each endpoint would round to 12.5 — that decides ≤ versus <.",
            ],
            strategy: "Consider extremes",
          },
          {
            id: "num-mcq-p2-q07",
            question: "Work out (2.4 × 10⁵) + (3.1 × 10⁴), giving your answer in standard form.",
            options: ["5.5 × 10⁵", "5.5 × 10⁹", "2.71 × 10⁵", "2.71 × 10⁴"],
            answerIndex: 2,
            explanation:
              "Match the powers first: 2.4 × 10⁵ = 24 × 10⁴, so the sum is (24 + 3.1) × 10⁴ = 27.1 × 10⁴ = 2.71 × 10⁵. Adding the front numbers directly (5.5) ignores that the powers differ.",
            guideRef: "Standard form",
            difficulty: "core",
            hints: [
              "You cannot add until the powers of 10 match.",
              "Rewrite 2.4 × 10⁵ as something × 10⁴ (or convert both to ordinary numbers).",
              "240 000 + 31 000 = 271 000 — now put that back into standard form.",
            ],
            strategy: "Split the problem",
          },
          {
            id: "num-mcq-p2-q08",
            question:
              "Given that 540 = 2² × 3³ × 5, what is the smallest positive integer n such that 540n is a perfect square?",
            options: ["3", "5", "15", "60"],
            answerIndex: 2,
            explanation:
              "A square needs every prime exponent even. 540 = 2² × 3³ × 5 has an odd power of 3 and of 5, so n must supply one more 3 and one more 5: n = 15, giving 540 × 15 = 8100 = 90². Choosing 3 or 5 fixes only one odd exponent; 60 works (32 400 = 180²) but is not smallest.",
            guideRef: "Primes, HCF and LCM",
            difficulty: "challenge",
            hints: [
              "When is a number a perfect square, in terms of its prime factorisation?",
              "Look at each exponent in 2² × 3³ × 5 — which are odd?",
              "n must top up every odd exponent to an even one, and nothing more.",
            ],
            strategy: "Work backwards",
          },
        ],
      },
      {
        id: "num-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "num-mcq-p3-q01",
            question: "Round 7.0349 to 2 decimal places.",
            options: ["7.03", "7.04", "7.035", "7.0"],
            answerIndex: 0,
            explanation:
              "The third decimal digit is 4, so the 3 in the second place stays: 7.03. Rounding to 7.04 happens if you first round 7.0349 to 7.035 and then round again — never round in two stages.",
            guideRef: "Estimation, significant figures and rounding",
            difficulty: "warmup",
          },
          {
            id: "num-mcq-p3-q02",
            question: "Write 0.00307 in standard form.",
            options: ["3.7 × 10⁻³", "3.07 × 10⁻³", "3.07 × 10⁻²", "30.7 × 10⁻⁴"],
            answerIndex: 1,
            explanation:
              "The point moves 3 places to give 3.07, so the answer is 3.07 × 10⁻³. Don't drop the middle zero (3.7 × 10⁻³ is a different number); 30.7 × 10⁻⁴ has the right value but 30.7 ≥ 10 breaks the standard-form rule.",
            guideRef: "Standard form",
            difficulty: "warmup",
          },
          {
            id: "num-mcq-p3-q03",
            question: "Work out 5/6 × 4/15, giving your answer in simplest form.",
            options: ["2/9", "25/8", "9/21", "4/9"],
            answerIndex: 0,
            explanation:
              "Cancel first: the 5 cancels into the 15 and the 4 with the 6, leaving (1 × 2)/(3 × 3) = 2/9. 25/8 flips the second fraction (that's division); 9/21 adds numerators and denominators.",
            guideRef: "Fraction and decimal arithmetic",
            difficulty: "core",
            hints: [
              "Multiply straight across — no common denominator needed.",
              "Cancel any numerator with any denominator before multiplying.",
              "5 with 15, and 4 with 6.",
            ],
            strategy: "Cancel before you multiply",
          },
          {
            id: "num-mcq-p3-q04",
            question:
              "x = 4.5, correct to 1 decimal place. What is the upper bound of x²?",
            options: ["20.25", "20.3", "19.8025", "20.7025"],
            answerIndex: 3,
            explanation:
              "The upper bound of x is 4.55, so the upper bound of x² is 4.55² = 20.7025. 20.25 squares the stated value; 19.8025 is the LOWER bound (4.45²); 20.3 rounds the bound, which loses the exactness a bounds question expects.",
            guideRef: "Upper and lower bounds",
            difficulty: "core",
            hints: [
              "First find the upper bound of x itself.",
              "Half of 0.1 is 0.05.",
              "Square 4.55 exactly — do not round.",
            ],
            strategy: "Consider extremes",
          },
          {
            id: "num-mcq-p3-q05",
            question: "Work out (6 × 10⁷) ÷ (3 × 10⁻²), giving your answer in standard form.",
            options: ["2 × 10⁵", "2 × 10⁹", "2 × 10⁻¹⁴", "3 × 10⁹"],
            answerIndex: 1,
            explanation:
              "6 ÷ 3 = 2 and 10⁷ ÷ 10⁻² = 10^(7−(−2)) = 10⁹, so 2 × 10⁹. Getting 10⁵ subtracts as 7 − 2, forgetting the sign of the second index; 3 × 10⁹ subtracts the number parts.",
            guideRef: "Standard form",
            difficulty: "core",
            hints: [
              "Divide number parts and powers separately.",
              "Subtracting a negative index means adding.",
              "7 − (−2) = 9.",
            ],
            strategy: "Split the problem",
          },
          {
            id: "num-mcq-p3-q06",
            question:
              "Given that 432 = 2⁴ × 3³ and 360 = 2³ × 3² × 5, what is the HCF of 432 and 360?",
            options: ["8", "36", "72", "2160"],
            answerIndex: 2,
            explanation:
              "Shared primes to the lower power: 2³ × 3² = 8 × 9 = 72. 2160 is the LCM (2⁴ × 3³ × 5); 36 misses one factor of 2; 8 uses only the 2s.",
            guideRef: "Primes, HCF and LCM",
            difficulty: "core",
            hints: [
              "The factorisations are given — no factor trees needed.",
              "Which primes appear in BOTH numbers?",
              "Take 2 and 3 each to the lower of the two powers.",
            ],
            strategy: "Factor first",
          },
          {
            id: "num-mcq-p3-q07",
            question:
              "Which of these fractions is equal to a TERMINATING decimal?",
            options: ["5/12", "4/15", "7/40", "3/70"],
            answerIndex: 2,
            explanation:
              "In lowest terms, a fraction terminates exactly when its denominator has no prime factor other than 2 or 5. 40 = 2³ × 5 qualifies, so 7/40 = 0.175. The others have a rogue 3 (12, 15) or 7 (70) in the denominator, so they recur.",
            guideRef: "Fraction and decimal arithmetic",
            difficulty: "core",
            hints: [
              "The answer depends only on the denominator (each fraction is already in lowest terms).",
              "Prime-factorise each denominator.",
              "Only 2s and 5s are allowed for a terminating decimal.",
            ],
            strategy: "Factor first",
          },
          {
            id: "num-mcq-p3-q08",
            question: "How many digits does the number 2¹⁵ × 5¹⁷ have when written out in full?",
            options: ["16", "17", "18", "32"],
            answerIndex: 1,
            explanation:
              "Pair the 2s and 5s: 2¹⁵ × 5¹⁷ = (2 × 5)¹⁵ × 5² = 25 × 10¹⁵ — the digits 2, 5 followed by 15 zeros, which is 17 digits. Answering 32 just adds the exponents; 16 counts the zeros plus one digit.",
            guideRef: "Standard form",
            difficulty: "challenge",
            hints: [
              "Do not try to compute it — restructure it.",
              "Every pair 2 × 5 makes a 10. How many pairs can you form?",
              "You are left with 5² × 10¹⁵ — write that as an ordinary number in your head.",
            ],
            strategy: "Exploit symmetry",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "num-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "num-qa-p1-q01",
            question: "Work out 3/4 + 2/5 − 1/2. Give your answer as a fraction in its simplest form.",
            modelAnswer:
              "The LCM of 4, 5 and 2 is 20. 3/4 = 15/20, 2/5 = 8/20, 1/2 = 10/20. So 15/20 + 8/20 − 10/20 = 13/20. 13 is prime and does not divide 20, so 13/20 is in simplest form.",
            markScheme: ["13/20", "common denominator", "20", "15/20"],
            commonError:
              "Working left to right with different denominators at each step and slipping — convert all three fractions to twentieths in one go.",
            guideRef: "Fraction and decimal arithmetic",
            difficulty: "warmup",
          },
          {
            id: "num-qa-p1-q02",
            question:
              "Two buses leave the station together at 08:00. Bus A leaves every 12 minutes and Bus B every 20 minutes. At what time do they next leave together? Show your method.",
            modelAnswer:
              "They leave together at common multiples of 12 and 20 minutes. 12 = 2² × 3 and 20 = 2² × 5, so LCM = 2² × 3 × 5 = 60 minutes. They next leave together 60 minutes after 08:00, at 09:00.",
            markScheme: ["09:00", "LCM", "60", "2² × 3 × 5"],
            commonError:
              "Using the HCF (4 minutes) instead of the LCM, or multiplying 12 × 20 = 240 and answering 12:00 — the product overshoots whenever the numbers share a factor.",
            guideRef: "Primes, HCF and LCM",
            difficulty: "core",
            hints: [
              "The joint departures happen at times that are multiples of BOTH 12 and 20.",
              "You need the lowest common multiple.",
              "Prime-factorise 12 and 20 and take each prime to its higher power.",
            ],
            strategy: "Factor first",
          },
          {
            id: "num-qa-p1-q03",
            question: "Use algebra to convert 0.135135... (135 recurring) to a fraction in its simplest form.",
            modelAnswer:
              "Let x = 0.135135.... The block has 3 digits, so 1000x = 135.135135.... Subtract: 1000x − x = 135, so 999x = 135 and x = 135/999. Dividing top and bottom by 27: x = 5/37.",
            markScheme: ["5/37", "999x = 135", "1000x", "135/999"],
            commonError:
              "Multiplying by 100 instead of 1000 — the multiplier must match the 3-digit block — or leaving the answer as 135/999 unsimplified.",
            guideRef: "Recurring decimals to fractions",
            difficulty: "core",
            hints: [
              "How many digits are in the repeating block?",
              "Multiply x by 10 to that power so the tails line up.",
              "999x is a whole number. Then simplify hard — try dividing by 27.",
            ],
            strategy: "Introduce a variable",
          },
          {
            id: "num-qa-p1-q04",
            question:
              "The mass of the Earth is 5.97 × 10²⁴ kg. The mass of the Moon is 7.35 × 10²² kg. How many times heavier than the Moon is the Earth? Give your answer correct to 2 significant figures.",
            modelAnswer:
              "Ratio = (5.97 × 10²⁴) ÷ (7.35 × 10²²) = (5.97 ÷ 7.35) × 10^(24−22) = 0.8122... × 10² = 81.22.... To 2 s.f., the Earth is about 81 times heavier than the Moon.",
            markScheme: ["81", "divide", "10²", "5.97 ÷ 7.35"],
            commonError:
              "Stopping at 0.81 × 10² without evaluating it, or rounding 5.97 ÷ 7.35 too early (0.8 × 100 = 80 loses the required accuracy).",
            guideRef: "Standard form",
            difficulty: "core",
            hints: [
              "'How many times heavier' means divide the two masses.",
              "Divide the number parts and subtract the indices separately.",
              "0.8122... × 10² — write this as an ordinary number before rounding.",
            ],
            strategy: "Split the problem",
          },
          {
            id: "num-qa-p1-q05",
            question:
              "By rounding each number to 1 significant figure, estimate the value of (612 × 4.87) ÷ 0.482. Show your rounded values clearly.",
            modelAnswer:
              "612 ≈ 600, 4.87 ≈ 5, 0.482 ≈ 0.5. Estimate = (600 × 5) ÷ 0.5 = 3000 ÷ 0.5 = 6000. (Dividing by 0.5 doubles the number.)",
            markScheme: ["6000", "600", "5", "0.5", "1 significant figure"],
            commonError:
              "Dividing by 0.5 as if it halved the number, giving 1500 — dividing by a half doubles.",
            guideRef: "Estimation, significant figures and rounding",
            difficulty: "core",
            hints: [
              "Round all three numbers to 1 s.f. before calculating.",
              "You should have (600 × 5) ÷ 0.5.",
              "3000 ÷ 0.5: how many halves are in 3000?",
            ],
            strategy: "Round to 1 s.f. first",
          },
          {
            id: "num-qa-p1-q06",
            question:
              "Express 396 as a product of its prime factors. Hence find the smallest positive integer k such that 396k is a perfect cube.",
            modelAnswer:
              "396 = 4 × 99 = 2² × 3² × 11. A cube needs every exponent to be a multiple of 3, so we must raise 2² to 2³, 3² to 3³ and 11¹ to 11³. Thus k = 2 × 3 × 11² = 6 × 121 = 726. Check: 396 × 726 = 287 496 = 66³ (since 396 × 726 = (2 × 3 × 11)³).",
            markScheme: ["726", "2² × 3² × 11", "cube", "multiple of 3", "11²"],
            commonError:
              "Supplying only one factor of 11 (k = 66) — the exponent of 11 must climb from 1 all the way to 3, needing 11², not 11.",
            guideRef: "Primes, HCF and LCM",
            difficulty: "challenge",
            hints: [
              "Prime-factorise 396 first.",
              "In a perfect cube, what must be true of every prime's exponent?",
              "Each exponent in 2² × 3² × 11¹ must be topped up to the next multiple of 3.",
              "Count exactly how many extra 2s, 3s and 11s that requires.",
            ],
            strategy: "Work backwards",
          },
        ],
      },
      {
        id: "num-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "num-qa-p2-q01",
            question: "Write (a) 0.00086 and (b) 4 320 000 in standard form.",
            modelAnswer:
              "(a) The point moves 4 places: 0.00086 = 8.6 × 10⁻⁴. (b) The point moves 6 places: 4 320 000 = 4.32 × 10⁶.",
            markScheme: ["8.6 × 10⁻⁴", "4.32 × 10⁶", "negative index", "10⁶"],
            commonError:
              "Off-by-one powers from counting the zeros instead of counting how far the decimal point moves.",
            guideRef: "Standard form",
            difficulty: "warmup",
          },
          {
            id: "num-qa-p2-q02",
            question: "Use algebra to show that 0.242424... (24 recurring) = 8/33.",
            modelAnswer:
              "Let x = 0.242424.... The block has 2 digits, so 100x = 24.242424.... Subtract: 100x − x = 24, so 99x = 24 and x = 24/99. Dividing top and bottom by 3 gives x = 8/33, as required.",
            markScheme: ["8/33", "99x = 24", "100x", "24/99"],
            commonError:
              "Writing x = 24/99 and stopping — a 'show that' question must reach exactly 8/33, so the simplification step is a required part of the proof.",
            guideRef: "Recurring decimals to fractions",
            difficulty: "core",
            hints: [
              "Name the decimal x.",
              "The repeating block is two digits long — choose your multiplier to match.",
              "Subtract x from 100x, solve, and simplify to the target fraction.",
            ],
            strategy: "Introduce a variable",
          },
          {
            id: "num-qa-p2-q03",
            question:
              "Work out (3.6 × 10⁻⁵) ÷ (8 × 10⁻²). Give your answer in standard form.",
            modelAnswer:
              "3.6 ÷ 8 = 0.45 and 10⁻⁵ ÷ 10⁻² = 10^(−5−(−2)) = 10⁻³, so the answer is 0.45 × 10⁻³. Since 0.45 < 1, adjust: 0.45 × 10⁻³ = 4.5 × 10⁻⁴.",
            markScheme: ["4.5 × 10⁻⁴", "0.45", "10⁻³", "subtract indices"],
            commonError:
              "Leaving the answer as 0.45 × 10⁻³ — the front number must satisfy 1 ≤ a < 10, so a factor of 10 must move into the index.",
            guideRef: "Standard form",
            difficulty: "core",
            hints: [
              "Divide the number parts and the powers separately.",
              "−5 − (−2) = −3.",
              "Your front number will be less than 1 — adjust into standard form at the end.",
            ],
            strategy: "Fix the form last",
          },
          {
            id: "num-qa-p2-q04",
            question:
              "A rectangle measures 8.4 cm by 5.6 cm, each correct to 1 decimal place. Calculate the lower bound of its area.",
            modelAnswer:
              "Lower bounds of the sides: 8.35 cm and 5.55 cm. The smallest possible area uses both lower bounds: 8.35 × 5.55 = 46.3425 cm².",
            markScheme: ["46.3425", "8.35", "5.55", "lower bound"],
            commonError:
              "Mixing bounds (e.g. 8.35 × 5.65) — area is a product, so its minimum takes the LOWER bound of BOTH factors; opposite bounds are only for subtraction and division.",
            guideRef: "Upper and lower bounds",
            difficulty: "core",
            hints: [
              "Write the error interval for each side.",
              "To make a product as small as possible, how should each factor be chosen?",
              "Multiply 8.35 by 5.55 exactly.",
            ],
            strategy: "Consider extremes",
          },
          {
            id: "num-qa-p2-q05",
            question: "Find the HCF and the LCM of 90 and 126.",
            modelAnswer:
              "90 = 2 × 3² × 5 and 126 = 2 × 3² × 7. HCF = shared primes to the lower power = 2 × 3² = 18. LCM = all primes to the higher power = 2 × 3² × 5 × 7 = 630.",
            markScheme: ["HCF = 18", "LCM = 630", "2 × 3² × 5", "2 × 3² × 7"],
            commonError:
              "Finding the HCF correctly but then computing the LCM as 90 × 126 = 11 340, forgetting to divide by the HCF.",
            guideRef: "Primes, HCF and LCM",
            difficulty: "core",
            hints: [
              "Prime-factorise both numbers.",
              "HCF: shared primes, lower powers. LCM: all primes, higher powers.",
              "Or find the HCF any way you like, then use HCF × LCM = 90 × 126.",
            ],
            strategy: "Factor first",
            solutions: [
              {
                label: "Prime factorisation (elegant — one factorisation gives both answers)",
                steps: [
                  "90 = 2 × 45 = 2 × 3² × 5.",
                  "126 = 2 × 63 = 2 × 3² × 7.",
                  "HCF: take shared primes to the lower power: 2 × 3² = 18.",
                  "LCM: take every prime to the higher power: 2 × 3² × 5 × 7 = 18 × 35 = 630.",
                ],
              },
              {
                label: "Euclidean algorithm + product rule",
                steps: [
                  "HCF(126, 90): 126 = 1 × 90 + 36, so HCF(126, 90) = HCF(90, 36).",
                  "90 = 2 × 36 + 18, so HCF(90, 36) = HCF(36, 18).",
                  "36 = 2 × 18 exactly, so the HCF is 18.",
                  "Then LCM = (90 × 126) ÷ HCF = 11 340 ÷ 18 = 630.",
                ],
              },
            ],
          },
          {
            id: "num-qa-p2-q06",
            question:
              "The decimal expansion of 3/7 is 0.428571428571... What is the 100th digit after the decimal point? Explain your reasoning.",
            modelAnswer:
              "3/7 = 0.428571 recurring, with a repeating block of 6 digits: 4, 2, 8, 5, 7, 1. Position 100: divide by the block length, 100 = 6 × 16 + 4, so after 16 complete blocks (96 digits) the 100th digit is the 4th digit of the block, which is 5.",
            markScheme: ["5", "block of 6", "100 = 6 × 16 + 4", "remainder 4", "4th digit"],
            commonError:
              "Using 100 ÷ 6 = 16.67 and taking the 6th or 7th digit — you need the exact remainder (4), and remainder 0 would mean the LAST digit of the block, not the first.",
            guideRef: "Recurring decimals to fractions",
            difficulty: "challenge",
            hints: [
              "The digits repeat in a fixed cycle — how long is the cycle?",
              "Digits 1–6 are one block, digits 7–12 the next, and so on.",
              "Find the remainder when 100 is divided by 6.",
              "The remainder tells you which digit within the block to read off.",
            ],
            strategy: "Find a pattern",
          },
        ],
      },
      {
        id: "num-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "num-qa-p3-q01",
            question: "Round 68 244 to (a) 1 significant figure, (b) 2 significant figures, (c) 3 significant figures.",
            modelAnswer:
              "(a) The second digit is 8, so 68 244 → 70 000 (1 s.f.). (b) The third digit is 2, so 68 000 (2 s.f.). (c) The fourth digit is 4, so 68 200 (3 s.f.). Place-holding zeros keep each answer the right size.",
            markScheme: ["70 000", "68 000", "68 200", "significant figures"],
            commonError:
              "Writing 68 240 for 3 s.f. — that is 4 s.f. The digit after the cut (4) means round DOWN, and everything after the third significant figure becomes zero.",
            guideRef: "Estimation, significant figures and rounding",
            difficulty: "warmup",
          },
          {
            id: "num-qa-p3-q02",
            question:
              "A jug holds 9/2 litres of juice. Glasses hold 3/8 of a litre each. How many full glasses can be poured? Show your working with fractions.",
            modelAnswer:
              "Number of glasses = 9/2 ÷ 3/8 = 9/2 × 8/3 = 72/6 = 12. Exactly 12 full glasses can be poured.",
            markScheme: ["12", "9/2 × 8/3", "reciprocal", "flip"],
            commonError:
              "Multiplying instead of dividing (9/2 × 3/8 = 27/16), which gives the nonsensical answer of fewer than 2 glasses from a big jug.",
            guideRef: "Fraction and decimal arithmetic",
            difficulty: "core",
            hints: [
              "You are asking how many 3/8s fit into 9/2 — which operation is that?",
              "Keep the first fraction, flip the second, multiply.",
              "Cancel the 9 with the 3 and the 8 with the 2 before multiplying.",
            ],
            strategy: "Keep-flip-multiply",
          },
          {
            id: "num-qa-p3-q03",
            question: "Work out (2 × 10³)³. Give your answer in standard form.",
            modelAnswer:
              "Cube each factor: (2 × 10³)³ = 2³ × (10³)³ = 8 × 10⁹. The front number 8 already satisfies 1 ≤ a < 10, so the answer is 8 × 10⁹.",
            markScheme: ["8 × 10⁹", "2³", "10⁹", "multiply indices"],
            commonError:
              "Writing 2³ × 10⁶ — when a power is raised to a power the indices MULTIPLY (3 × 3 = 9); adding them (3 + 3) is the rule for multiplying two powers, not for cubing.",
            guideRef: "Standard form",
            difficulty: "core",
            hints: [
              "Cube the 2 and the 10³ separately.",
              "What is (10³)³ — do the indices add or multiply?",
              "2³ = 8 and (10³)³ = 10⁹.",
            ],
            strategy: "Split the problem",
          },
          {
            id: "num-qa-p3-q04",
            question:
              "The mass of a parcel is 5600 g, correct to 2 significant figures. Write down the error interval for the mass, w grams.",
            modelAnswer:
              "To 2 s.f., 5600 is rounded to the nearest 100 g, so the true mass is within 50 g either side: 5550 ≤ w < 5650.",
            markScheme: ["5550 ≤ w < 5650", "5550", "5650", "nearest 100"],
            commonError:
              "Treating 5600 as rounded to the nearest whole number and writing 5599.5 ≤ w < 5600.5 — with 2 s.f. the rounding unit is 100, so half a unit is 50.",
            guideRef: "Upper and lower bounds",
            difficulty: "core",
            hints: [
              "What place value does the second significant figure of 5600 occupy?",
              "The number was rounded to the nearest 100.",
              "Go half of 100 either side of 5600.",
            ],
            strategy: "Consider extremes",
          },
          {
            id: "num-qa-p3-q05",
            question:
              "Convert 0.5272727... (only the 27 recurring) to a fraction in its simplest form.",
            modelAnswer:
              "Let x = 0.52727.... Then 10x = 5.2727... and 1000x = 527.2727.... Subtract: 1000x − 10x = 522, so 990x = 522 and x = 522/990. Dividing top and bottom by 18: x = 29/55.",
            markScheme: ["29/55", "990x = 522", "522/990", "1000x", "10x"],
            commonError:
              "Writing 527/999 — that treats all three digits as recurring, but the 5 appears only once. The two multiples you subtract must have identical tails.",
            guideRef: "Recurring decimals to fractions",
            difficulty: "core",
            hints: [
              "One digit is not part of the repeat, so plan two multiplications.",
              "10x and 1000x both end in .2727...",
              "Subtract, solve, and simplify 522/990 fully (both are divisible by 18).",
            ],
            strategy: "Introduce a variable",
            solutions: [
              {
                label: "Algebraic shift-and-subtract",
                steps: [
                  "Let x = 0.5272727....",
                  "10x = 5.272727... and 1000x = 527.272727... — both now have the same recurring tail.",
                  "Subtract: 1000x − 10x = 527.2727... − 5.2727... = 522, so 990x = 522.",
                  "x = 522/990 = 29/55 after dividing top and bottom by 18.",
                ],
              },
              {
                label: "Split into known pieces (elegant — no equations at all)",
                steps: [
                  "Split the decimal: 0.5272727... = 0.5 + 0.0272727....",
                  "0.0272727... is 0.272727... shifted one place, i.e. (1/10) × 27/99 = (1/10) × 3/11 = 3/110.",
                  "So the number is 1/2 + 3/110 = 55/110 + 3/110 = 58/110.",
                  "Simplify: 58/110 = 29/55.",
                ],
              },
            ],
          },
          {
            id: "num-qa-p3-q06",
            question:
              "In an experiment, g is calculated using g = 2d/t². The distance is d = 1.20 m, correct to the nearest centimetre, and the time is t = 0.50 s, correct to the nearest 0.01 s. Calculate the upper bound of g. Give your answer correct to 3 significant figures.",
            modelAnswer:
              "Bounds: 1.195 ≤ d < 1.205 and 0.495 ≤ t < 0.505. g = 2d/t² is largest with the biggest d and the SMALLEST t (t is squared in the denominator). UB(g) = (2 × 1.205) ÷ 0.495² = 2.41 ÷ 0.245025 = 9.8357... = 9.84 (3 s.f.).",
            markScheme: ["9.84", "1.205", "0.495", "0.495²", "0.245025"],
            commonError:
              "Using the upper bound of t as well as of d — t sits in the denominator, so maximising g needs t at its LOWER bound. Also watch that the whole of t is squared: 0.495² = 0.245025, not 0.4950.",
            guideRef: "Upper and lower bounds",
            difficulty: "challenge",
            hints: [
              "Write the error interval for d and for t.",
              "d is on top of the fraction — should it be big or small to maximise g?",
              "t is squared on the bottom — a SMALLER t makes g bigger.",
              "Compute 2 × 1.205 divided by 0.495², keeping full accuracy until the final rounding.",
            ],
            strategy: "Consider extremes",
          },
        ],
      },
    ],
  },
};

export default topic;
