import type { Topic } from "../types";

const topic: Topic = {
  id: "functions-calculus",
  title: "Functions & Calculus",
  subject: "Maths",
  icon: "🎢",
  intro:
    "Functions are the machines of mathematics: feed in a number, get one out. Calculus asks the sharpest question you can ask about a machine — how fast is the output changing right NOW? Together they let you chain processes, run them backwards, find the exact top of a hill, and squeeze the biggest possible area out of a fixed length of fence. This is the topic where grade 8–9 marks live on the 4MA1 Higher paper.",

  guide: [
    {
      heading: "Function machines: notation and evaluating",
      discovery: {
        problem:
          "A number machine squares its input, then subtracts double the input. Two DIFFERENT inputs both produce the output 8. Can you find them both?",
        idea:
          "Calling the input x, the machine computes x² − 2x, so you need x² − 2x = 8, i.e. (x − 4)(x + 2) = 0: both x = 4 and x = −2 work. Naming the rule once — f(x) = x² − 2x — lets you talk about EVERY input at the same time. And you have just discovered something important: two inputs can share an output, which will matter when we try to run machines backwards.",
      },
      body: `A **function** is a rule that turns each input into exactly one output. We write f(x) = 3x + 1 and read it "f of x". The letter x is just a placeholder — a slot waiting for a number.

- **Evaluating**: f(5) means "put 5 into every slot": f(5) = 3(5) + 1 = 16.
- Negative inputs need brackets. If g(x) = x² + 2x then g(−3) = (−3)² + 2(−3) = 9 − 6 = 3, NOT −9 − 6.
- **Solving f(x) = k**: work in reverse. If f(x) = 3x + 1 and f(x) = 28, then 3x + 1 = 28 so x = 9.
- Expressions as inputs: f(2a) = 3(2a) + 1 = 6a + 1. Substitute the WHOLE input into every slot.

Exam questions often mix these skills: "given f(x) = 5x − 2, find f(3) and solve f(x) = 28" is two different directions through the same machine.`,
      keyPoints: [
        "f(x) is the output when x goes in — it is not f times x.",
        "Evaluate by substituting into EVERY x, with brackets around negative or algebraic inputs.",
        "Solving f(x) = k means finding which input gives output k: set the rule equal to k and solve.",
        "A function gives exactly one output per input, but different inputs may share an output.",
      ],
      strategies: [
        "Introduce a variable: name the unknown input x and turn the word-machine into algebra.",
        "Work backwards: to solve f(x) = k, undo the machine's steps in reverse order.",
      ],
      whyItWorks:
        "The notation earns its keep because it separates the RULE from any particular number. Writing f(x) = x² − 2x once lets you ask f(4), f(−2), f(2a), f(x + 1) — same rule, different slot-fillers. That is why substituting the whole input into every slot is not a convention but a necessity: the rule acts on whatever occupies the slot.",
    },
    {
      heading: "Domain and range: which inputs are allowed?",
      discovery: {
        problem:
          "Type 1 ÷ (3 − 3) into a calculator. Now try √(2 − 5). What does the calculator say — and what do these two errors have in common?",
        idea:
          "Both are inputs the rules cannot digest: you cannot divide by zero, and (in IGCSE maths) you cannot square-root a negative. So the function f(x) = 1/(x − 3) simply has no value at x = 3, and g(x) = √(x − 5) has no value for x < 5. The set of allowed inputs is the DOMAIN; the set of outputs actually produced is the RANGE.",
      },
      body: `The **domain** is the set of inputs a function accepts; the **range** is the set of outputs it produces.

Two rules cause trouble on the 4MA1 paper:

- **Division**: f(x) = 1/(x − a) breaks when the denominator is zero, so x = a must be excluded. For f(x) = 7/(2x + 6), solve 2x + 6 = 0 to find the excluded value x = −3.
- **Square roots**: g(x) = √(x − a) needs x − a ≥ 0, so the domain is x ≥ a. For √(2x − 2) you need 2x − 2 ≥ 0, i.e. x ≥ 1.

**Range** questions usually lean on a known shape. For f(x) = x² + 3 with all real inputs: since x² ≥ 0 always, the outputs satisfy f(x) ≥ 3, with the minimum 3 achieved at x = 0. Note the range includes 3 itself (use ≥, not >).

When a question says "state the value of x that must be excluded from the domain", it is asking exactly one thing: where is the denominator zero?`,
      keyPoints: [
        "Exclude any x that makes a denominator zero: for 1/(x − a), exclude x = a.",
        "√(expression) needs expression ≥ 0 — include the boundary value, where the root equals 0.",
        "Range = set of possible OUTPUTS; use the shape (e.g. x² ≥ 0) to bound it.",
        "Always solve the inside: for √(2x − 2), the condition is 2x − 2 ≥ 0, not x ≥ 2.",
      ],
      strategies: [
        "Consider extremes: test inputs near the danger point (x slightly above and below a) to see the function blow up.",
        "Try small cases: substitute a few easy values to feel out which outputs are reachable.",
      ],
      whyItWorks:
        "Division by zero is not 'infinity' — it is undefined, because no number times 0 gives 1. And squaring any real number gives a result ≥ 0, so no real number can be the square root of a negative. Domains are not arbitrary rules to memorise: they are exactly the inputs for which the arithmetic can actually be carried out.",
    },
    {
      heading: "Chaining and reversing: composite and inverse functions",
      discovery: {
        problem:
          "Machine f trebles a number then adds 1. Machine g squares a number. Feed 2 through f then g. Now feed 2 through g then f. Do you get the same answer?",
        idea:
          "No! f then g gives f(2) = 7, then g(7) = 49. But g then f gives g(2) = 4, then f(4) = 13. Chained machines are COMPOSITE functions, and the order matters. The notation gf(2) means 'g of f of 2' — the function written CLOSEST to the input acts first.",
      },
      diagrams: [
        {
          id: "fun-diag-01",
          title: "Composite functions as chained machines",
          svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two chains of function machines. Top chain: input 2 goes into machine f which trebles and adds 1, giving 7, then into machine g which squares, giving 49, labelled gf(2) = 49. Bottom chain: input 2 goes into machine g first giving 4, then machine f giving 13, labelled fg(2) = 13. The order of the machines changes the answer.">
  <text x="320" y="26" font-size="17" font-weight="bold" text-anchor="middle" fill="currentColor">Order matters: gf means f FIRST, then g</text>
  <text x="30" y="80" font-size="16" fill="currentColor">2</text>
  <line x1="45" y1="75" x2="85" y2="75" stroke="#64748b" stroke-width="2"/>
  <polygon points="85,75 77,70 77,80" fill="#64748b"/>
  <rect x="90" y="50" width="150" height="50" rx="8" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="165" y="72" font-size="15" text-anchor="middle" fill="#2563eb">f: treble, add 1</text>
  <text x="165" y="92" font-size="14" text-anchor="middle" fill="#2563eb">f(x) = 3x + 1</text>
  <line x1="240" y1="75" x2="285" y2="75" stroke="#64748b" stroke-width="2"/>
  <polygon points="285,75 277,70 277,80" fill="#64748b"/>
  <text x="262" y="65" font-size="15" text-anchor="middle" fill="currentColor">7</text>
  <rect x="290" y="50" width="130" height="50" rx="8" fill="none" stroke="#16a34a" stroke-width="2"/>
  <text x="355" y="72" font-size="15" text-anchor="middle" fill="#16a34a">g: square</text>
  <text x="355" y="92" font-size="14" text-anchor="middle" fill="#16a34a">g(x) = x²</text>
  <line x1="420" y1="75" x2="465" y2="75" stroke="#64748b" stroke-width="2"/>
  <polygon points="465,75 457,70 457,80" fill="#64748b"/>
  <text x="480" y="80" font-size="16" font-weight="bold" fill="currentColor">49</text>
  <text x="530" y="80" font-size="15" fill="#16a34a">gf(2) = 49</text>
  <text x="30" y="205" font-size="16" fill="currentColor">2</text>
  <line x1="45" y1="200" x2="85" y2="200" stroke="#64748b" stroke-width="2"/>
  <polygon points="85,200 77,195 77,205" fill="#64748b"/>
  <rect x="90" y="175" width="130" height="50" rx="8" fill="none" stroke="#16a34a" stroke-width="2"/>
  <text x="155" y="197" font-size="15" text-anchor="middle" fill="#16a34a">g: square</text>
  <text x="155" y="217" font-size="14" text-anchor="middle" fill="#16a34a">g(x) = x²</text>
  <line x1="220" y1="200" x2="265" y2="200" stroke="#64748b" stroke-width="2"/>
  <polygon points="265,200 257,195 257,205" fill="#64748b"/>
  <text x="242" y="190" font-size="15" text-anchor="middle" fill="currentColor">4</text>
  <rect x="270" y="175" width="150" height="50" rx="8" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="345" y="197" font-size="15" text-anchor="middle" fill="#2563eb">f: treble, add 1</text>
  <text x="345" y="217" font-size="14" text-anchor="middle" fill="#2563eb">f(x) = 3x + 1</text>
  <line x1="420" y1="200" x2="465" y2="200" stroke="#64748b" stroke-width="2"/>
  <polygon points="465,200 457,195 457,205" fill="#64748b"/>
  <text x="480" y="205" font-size="16" font-weight="bold" fill="currentColor">13</text>
  <text x="530" y="205" font-size="15" fill="#dc2626">fg(2) = 13</text>
  <text x="320" y="270" font-size="15" text-anchor="middle" fill="#dc2626">gf(2) ≠ fg(2): the function nearest the input runs first.</text>
</svg>`,
          caption:
            "Composite functions are machines bolted together. In gf(x), f runs first because it sits next to the x.",
        },
      ],
      body: `**Composite functions**: fg(x) means f(g(x)) — apply g first, then f. To build the algebra, substitute the whole of g(x) into every x-slot of f.

Example: f(x) = 2x + 1, g(x) = x². Then fg(x) = 2(x²) + 1 = 2x² + 1, but gf(x) = (2x + 1)². Completely different functions.

**Inverse functions**: f⁻¹ is the machine run backwards — it undoes f, so f⁻¹(f(x)) = x. The algebraic method:

- Write y = f(x).
- Rearrange to make x the subject.
- Swap letters: replace y by x in your result and name it f⁻¹(x).

Example: f(x) = (2x − 3)/5. Write y = (2x − 3)/5, so 5y = 2x − 3, so x = (5y + 3)/2. Hence f⁻¹(x) = (5x + 3)/2.

Always sanity-check with a number: f(4) = 5/5 = 1, and f⁻¹(1) = 8/2 = 4. Back where we started.

**Solving f(x) = g(x)**: set the two expressions equal and solve — often a quadratic. If f(x) = x² and g(x) = 3x + 10, then x² = 3x + 10 gives x² − 3x − 10 = 0, so (x − 5)(x + 2) = 0 and x = 5 or x = −2.`,
      keyPoints: [
        "fg(x) = f(g(x)): the function written next to the input acts FIRST.",
        "In general fg(x) ≠ gf(x) — never assume order can be swapped.",
        "Inverse method: write y = f(x), make x the subject, then swap letters.",
        "Check any inverse with a number: f followed by f⁻¹ must return the input.",
        "f(x) = g(x) is just an equation — rearrange to = 0 and solve.",
      ],
      strategies: [
        "Draw a diagram: sketch the machine chain to keep the order straight.",
        "Work backwards: an inverse is literally the machine's steps undone in reverse order.",
        "Try small cases: test composites and inverses with an easy number before trusting the algebra.",
      ],
      whyItWorks:
        "Why does 'make x the subject' find the inverse? Because y = f(x) states 'y is the output for input x'. Rearranging to x = (expression in y) states the SAME relationship read backwards: 'x is the input that produced output y'. That reversed reading is exactly what f⁻¹ does. The letter swap at the end is pure relabelling, so that the inverse is written with x as its input like every other function. Graphically, swapping input and output reflects the graph in the line y = x.",
      thinkDeeper:
        "A function only has an inverse if no two inputs share an output (otherwise the reversed machine wouldn't know which input to return — remember x² sends both 3 and −3 to 9). Also try this: let f(x) = 1/(1 − x) and compute fff(x). You should get plain x — applying f three times is a round trip! Functions like this are called cyclic, and spotting the cycle beats grinding through the algebra.",
    },
    {
      heading: "Discovering the derivative",
      discovery: {
        problem:
          "A ball dropped from a cliff falls s = 5t² metres in t seconds. Its average speed between t = 1 and t = 1.1 is (5×1.1² − 5×1²)/0.1 = 10.5 m/s. Work out the average speed from t = 1 to t = 1.01, then to t = 1.001. What number are these speeds sneaking up on?",
        idea:
          "You get 10.05, then 10.005 — the averages home in on 10. As the interval shrinks to nothing, average speed becomes the speed AT the instant t = 1. This limiting value is the DERIVATIVE, and the miracle is that a simple rule computes it: if s = 5t², then ds/dt = 10t, which at t = 1 gives exactly the 10 you discovered.",
      },
      body: `The **derivative** dy/dx measures the gradient of a curve — the instantaneous rate of change of y with respect to x.

**The rule**: if y = ax^n, then dy/dx = anx^(n−1). Multiply by the old power, then knock the power down by one. Differentiate term by term:

- y = 4x³ − 5x + 7 gives dy/dx = 12x² − 5. (The constant 7 vanishes: a flat line has gradient 0. The term −5x becomes −5: a straight line's gradient is its coefficient.)
- **Negative powers work too**: y = 3/x² is y = 3x^-2, so dy/dx = −6x^-3 = −6/x³.
- Products and brackets: EXPAND FIRST. y = (2x + 1)(x − 3) = 2x² − 5x − 3, so dy/dx = 4x − 5.

**Gradient at a point**: differentiate, THEN substitute. For y = x² − 6x + 2 at x = 4: dy/dx = 2x − 6, so the gradient is 2(4) − 6 = 2.`,
      keyPoints: [
        "dy/dx of ax^n is anx^(n−1): multiply by the power, reduce the power by 1.",
        "Constants differentiate to 0; ax differentiates to a.",
        "Rewrite 1/x² as x^-2 before differentiating — the same rule handles negative powers.",
        "To find a gradient at a point: differentiate first, substitute second.",
        "Expand brackets before differentiating — never differentiate each factor separately.",
      ],
      strategies: [
        "Consider extremes: shrink the interval towards zero and watch the average settle on a limit.",
        "Find a pattern: differentiate x², x³, x⁴ from first principles and the rule nx^(n−1) reveals itself.",
      ],
      whyItWorks:
        "Take y = x² and nudge the input from x to x + h. The output moves from x² to (x + h)² = x² + 2xh + h². The gradient of the chord is (2xh + h²)/h = 2x + h. Now shrink h towards 0: the chord tips into the tangent and its gradient settles on 2x. The same expansion with x³ gives 3x² + (terms with h), settling on 3x². Every case fits nx^(n−1) — the rule is the shadow left behind when h vanishes.",
      thinkDeeper:
        "Does the rule really survive negative powers? Test y = 1/x directly: the chord gradient from x to x + h is (1/(x+h) − 1/x)/h = (x − (x+h))/(hx(x+h)) = −1/(x(x+h)), which settles on −1/x² as h shrinks. And the rule with n = −1 predicts −1·x^-2 = −1/x². Perfect agreement — the pattern is deeper than the whole-number powers it was discovered on.",
    },
    {
      heading: "Tangents, turning points and curve sketching",
      discovery: {
        problem:
          "You walk over a smooth hill. At the very top, is the path sloping up, sloping down — or something else? Why must the gradient be exactly zero at the summit?",
        idea:
          "If the gradient at the top were positive you could still climb higher, and if it were negative you'd already be past the top — contradiction either way. So at a smooth maximum (or minimum) the tangent is horizontal: dy/dx = 0. Solving dy/dx = 0 finds every candidate summit and valley on a curve.",
      },
      diagrams: [
        {
          id: "fun-diag-02",
          title: "Chords closing in on the tangent",
          svg: `<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rising curve with a point P marked. Two grey and amber chords from P to points further along the curve pivot closer and closer to the red tangent line at P as the second point slides towards P. The tangent's gradient is the derivative at P.">
  <line x1="50" y1="330" x2="620" y2="330" stroke="#64748b" stroke-width="2"/>
  <line x1="50" y1="330" x2="50" y2="30" stroke="#64748b" stroke-width="2"/>
  <text x="612" y="350" font-size="15" fill="currentColor">x</text>
  <text x="30" y="42" font-size="15" fill="currentColor">y</text>
  <path d="M 60 300 Q 400 300 580 60" fill="none" stroke="#2563eb" stroke-width="3"/>
  <line x1="360" y1="240" x2="501.6" y2="146.4" stroke="#64748b" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="360" y1="240" x2="434.4" y2="198.6" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="160" y1="332" x2="560" y2="148" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="360" cy="240" r="6" fill="#dc2626"/>
  <circle cx="501.6" cy="146.4" r="5" fill="#64748b"/>
  <circle cx="434.4" cy="198.6" r="5" fill="#f59e0b"/>
  <text x="352" y="268" font-size="16" font-weight="bold" fill="#dc2626">P</text>
  <text x="512" y="140" font-size="15" fill="#64748b">Q1</text>
  <text x="444" y="192" font-size="15" fill="#f59e0b">Q2</text>
  <text x="120" y="90" font-size="15" fill="#64748b">chords PQ1, PQ2 pivot towards</text>
  <text x="120" y="112" font-size="15" fill="#dc2626">the tangent at P as Q slides in</text>
</svg>`,
          caption:
            "As Q slides towards P, the chord PQ tips into the tangent at P. The tangent's gradient is dy/dx evaluated at P.",
        },
        {
          id: "fun-diag-03",
          title: "Turning points: where the gradient vanishes",
          svg: `<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cubic-shaped curve rising to a maximum, falling to a minimum, then rising again. Dashed horizontal tangent lines are drawn at the maximum and minimum. Gradient signs are marked: positive before the maximum, zero at it, negative between the turning points, zero at the minimum, positive after it.">
  <line x1="30" y1="335" x2="620" y2="335" stroke="#64748b" stroke-width="2"/>
  <text x="612" y="355" font-size="15" fill="currentColor">x</text>
  <path d="M 40 300 C 120 120 200 120 280 200 C 360 280 440 280 520 200 C 550 170 575 120 600 60" fill="none" stroke="#2563eb" stroke-width="3"/>
  <line x1="124" y1="149" x2="244" y2="149" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="7 5"/>
  <circle cx="184" cy="149" r="6" fill="#dc2626"/>
  <text x="184" y="126" font-size="15" text-anchor="middle" fill="#dc2626">maximum: dy/dx = 0</text>
  <line x1="340" y1="260" x2="460" y2="260" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="7 5"/>
  <circle cx="400" cy="260" r="6" fill="#16a34a"/>
  <text x="400" y="292" font-size="15" text-anchor="middle" fill="#16a34a">minimum: dy/dx = 0</text>
  <text x="80" y="210" font-size="16" fill="#16a34a">+</text>
  <text x="290" y="200" font-size="16" fill="#dc2626">−</text>
  <text x="530" y="150" font-size="16" fill="#16a34a">+</text>
  <text x="320" y="30" font-size="15" text-anchor="middle" fill="currentColor">gradient: + then 0 then − (max);  − then 0 then + (min)</text>
</svg>`,
          caption:
            "At each turning point the tangent is horizontal. The gradient changes + to − at a maximum and − to + at a minimum.",
        },
      ],
      body: `**Equation of a tangent** at x = a:

- Find the y-coordinate: y = f(a).
- Find the gradient: m = value of dy/dx at x = a.
- Use y − y1 = m(x − x1).

Example: y = x² − 4x + 1 at x = 3. Point: (3, −2). Gradient: dy/dx = 2x − 4 = 2. Tangent: y + 2 = 2(x − 3), i.e. y = 2x − 8.

**Turning points**: solve dy/dx = 0. Then decide max or min by either test:

- **Second derivative test**: find d²y/dx² (differentiate again). Negative means maximum (the hill is bending downwards); positive means minimum.
- **Gradient test**: check the sign of dy/dx just before and just after. + then − is a maximum; − then + is a minimum.

Example: y = 2x³ − 9x² + 12x. dy/dx = 6x² − 18x + 12 = 6(x − 1)(x − 2) = 0 at x = 1 and x = 2. d²y/dx² = 12x − 18: at x = 1 it is −6 < 0 (maximum, at (1, 5)); at x = 2 it is +6 > 0 (minimum, at (2, 4)).

**Curve sketching from calculus**: plot the turning points, mark where the curve cuts the axes if easy, and remember a positive cubic runs bottom-left to top-right. The turning points pin the wiggle in place.`,
      keyPoints: [
        "Tangent recipe: point from the curve, gradient from dy/dx, then y − y1 = m(x − x1).",
        "Turning points solve dy/dx = 0 — the tangent is horizontal there.",
        "d²y/dx² < 0: maximum. d²y/dx² > 0: minimum.",
        "Gradient test: sign of dy/dx changing + to − means max; − to + means min.",
        "Sketch with turning points, axis crossings and the end behaviour of the curve.",
      ],
      strategies: [
        "Draw a diagram: a rough sketch of the curve makes max vs min obvious and catches sign slips.",
        "Exploit symmetry: a parabola's turning point sits midway between its roots.",
        "Look for invariants: whatever the curve, a smooth peak always has gradient exactly zero.",
      ],
      whyItWorks:
        "Why does the second derivative decide max vs min? d²y/dx² is the rate of change of the gradient. At a maximum the gradient is falling — from + through 0 to − — so its rate of change is negative. At a minimum the gradient is rising, so d²y/dx² is positive. The test just reads off which way the gradient is drifting through zero.",
      thinkDeeper:
        "dy/dx = 0 finds CANDIDATES, not certainties. The curve y = x³ has dy/dx = 3x² = 0 at x = 0, yet x = 0 is neither a max nor a min — the gradient is + on both sides and the curve just flattens momentarily (a point of inflexion). This is exactly why the examiner awards marks for TESTING the nature of a turning point rather than assuming it.",
    },
    {
      heading: "Calculus at work: motion and best-possible problems",
      discovery: {
        problem:
          "You have 40 m of fencing for a rectangular pen. Try a 5 × 15 pen (75 m²), an 8 × 12 pen (96 m²), a 10 × 10 pen (100 m²), an 11 × 9 pen (99 m²). Is 100 m² really the best possible — and how could you ever be SURE without testing every rectangle?",
        idea:
          "Write area as a function: with width x, the length is 20 − x and A = x(20 − x). Certainty comes from calculus: dA/dx = 20 − 2x = 0 exactly when x = 10, and the second derivative −2 < 0 confirms a maximum. One derivative replaces infinitely many trials.",
      },
      body: `**Kinematics**: if s(t) is displacement at time t, then

- velocity v = ds/dt (rate of change of displacement),
- acceleration a = dv/dt (rate of change of velocity).

Each step is one differentiation: s → v → a.

- **At rest** means v = 0 (not s = 0!). For s = t³ − 6t² + 9t: v = 3t² − 12t + 9 = 3(t − 1)(t − 3), so the particle is at rest at t = 1 and t = 3.
- **Maximum height**: a projectile is highest when its velocity is zero. For h = 30t − 5t²: dh/dt = 30 − 10t = 0 at t = 3, giving h = 90 − 45 = 45 m.

**Applied maximum/minimum** — the method that wins the hardest marks on the paper:

- Introduce a variable for the quantity you control.
- Use the constraint (fixed perimeter, fixed volume...) to write the target quantity as a function of that ONE variable.
- Differentiate, set equal to 0, solve.
- Confirm max/min (second derivative or gradient test) and answer the actual question asked.

Example: an open-top box with a square base of side x cm must have volume 256 cm³. Surface area S = x² + 4xh with h = 256/x², so S = x² + 1024/x. Then dS/dx = 2x − 1024/x² = 0 gives x³ = 512, x = 8, and S = 64 + 128 = 192 cm² — a minimum since d²S/dx² = 2 + 2048/x³ > 0.`,
      keyPoints: [
        "Differentiate displacement to get velocity; differentiate velocity to get acceleration.",
        "'At rest' translates to v = 0; 'maximum height' also happens when v = 0.",
        "Applied max/min: use the constraint to get ONE variable, then differentiate and set to 0.",
        "Always verify max or min — the examiner expects the test, not just the answer.",
        "Finish by answering the question asked: the maximum AREA, not just the x that gives it.",
      ],
      strategies: [
        "Introduce a variable: let x be the one length you control, and express everything through it.",
        "Try small cases: a quick table of trial values tells you roughly where the best answer lives.",
        "Work backwards: 'when is it at rest?' means start from v = 0 and solve for t.",
      ],
      whyItWorks:
        "Velocity IS the gradient of the displacement–time graph — the shrinking-interval argument from the derivative section, applied to motion. And optimisation works because the best possible value of a smooth quantity sits at a summit or valley of its graph, where we already know the gradient must vanish. Calculus converts 'best possible' into an equation.",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What does f(5) mean for f(x) = 3x − 4?",
        back: "Substitute 5 for every x: f(5) = 3(5) − 4 = 11. f(x) is the output for input x.",
      },
      {
        front: "Which value of x is excluded from f(x) = 1/(x − a)?",
        back: "x = a, because the denominator would be zero and division by zero is undefined.",
      },
      {
        front: "Domain of g(x) = √(x − a)?",
        back: "x ≥ a. The expression under a square root must be ≥ 0 (the boundary IS allowed).",
      },
      {
        front: "What does fg(x) mean, and which function acts first?",
        back: "fg(x) = f(g(x)). g acts first — the function written next to the input runs first.",
      },
      {
        front: "Is fg(x) always equal to gf(x)?",
        back: "No! Order matters. E.g. f(x) = 2x + 1, g(x) = x²: fg(x) = 2x² + 1 but gf(x) = (2x + 1)².",
      },
      {
        front: "Three steps to find f⁻¹(x) algebraically?",
        back: "1) Write y = f(x). 2) Rearrange to make x the subject. 3) Swap letters: replace y with x.",
      },
      {
        front: "How can you CHECK an inverse is right?",
        back: "Compose them: f⁻¹(f(x)) must simplify to x. Or test with a number: if f(4) = 1 then f⁻¹(1) must be 4.",
      },
      {
        front: "Differentiate y = ax^n.",
        back: "dy/dx = anx^(n−1): multiply by the power, then reduce the power by one. Works for negative powers too.",
      },
      {
        front: "Differentiate y = 3/x².",
        back: "Rewrite as y = 3x^-2 first. Then dy/dx = −6x^-3 = −6/x³.",
      },
      {
        front: "How do you find the gradient of a curve at x = a?",
        back: "Differentiate to get dy/dx, THEN substitute x = a. (Never substitute before differentiating.)",
      },
      {
        front: "Recipe for the equation of a tangent at x = a?",
        back: "Point: y = f(a). Gradient: m = dy/dx at x = a. Line: y − y1 = m(x − x1).",
      },
      {
        front: "How do you find and classify turning points?",
        back: "Solve dy/dx = 0. Then d²y/dx² < 0 means maximum, d²y/dx² > 0 means minimum (or test the gradient sign either side).",
      },
      {
        front: "Kinematics: how are s, v and a connected?",
        back: "v = ds/dt and a = dv/dt. Differentiate displacement for velocity, and velocity for acceleration.",
      },
      {
        front: "What does 'the particle is at rest' translate to?",
        back: "v = 0 (velocity zero). NOT s = 0 — the particle can be at rest far from its start.",
      },
    ],
    keyFacts: [
      "fg(x) means f(g(x)): apply g first, then f — and in general fg(x) ≠ gf(x).",
      "f⁻¹ undoes f: write y = f(x), make x the subject, swap letters. f⁻¹(f(x)) = x.",
      "Exclude x = a from the domain of 1/(x − a); √(expression) needs expression ≥ 0.",
      "If y = ax^n then dy/dx = anx^(n−1), including negative powers like x^-2.",
      "Constants differentiate to 0; the gradient of a curve at a point is dy/dx evaluated there.",
      "Tangent at x = a: use point (a, f(a)) and gradient f'(a) in y − y1 = m(x − x1).",
      "Turning points: dy/dx = 0; d²y/dx² < 0 gives a maximum, d²y/dx² > 0 gives a minimum.",
      "Kinematics chain: s → (differentiate) → v → (differentiate) → a; 'at rest' means v = 0.",
      "Maximum height of a projectile occurs when the velocity dh/dt = 0.",
      "Applied max/min: reduce to ONE variable using the constraint, differentiate, set to 0, then TEST the nature.",
    ],
    formulaSheet: [
      {
        name: "Derivative of a power",
        formula: "y = ax^n gives dy/dx = anx^(n−1)",
        note: "Works for negative n: y = 3/x² = 3x^-2 gives dy/dx = −6/x³.",
      },
      {
        name: "Composite function",
        formula: "fg(x) = f(g(x))",
        note: "g acts first. Substitute the whole of g(x) into every x of f.",
      },
      {
        name: "Inverse function check",
        formula: "f⁻¹(f(x)) = x",
        note: "Find f⁻¹ by writing y = f(x), making x the subject, then swapping letters.",
      },
      {
        name: "Equation of a tangent",
        formula: "y − y1 = m(x − x1), where m = dy/dx at the point",
        note: "The point (x1, y1) must lie ON the curve.",
      },
      {
        name: "Turning points",
        formula: "dy/dx = 0; then d²y/dx² < 0 max, d²y/dx² > 0 min",
        note: "Or test the sign of dy/dx just before and after.",
      },
      {
        name: "Kinematics",
        formula: "v = ds/dt, a = dv/dt",
        note: "At rest: v = 0. Maximum height: v = 0.",
      },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "fun-quiz-mcq-01",
        question: "f(x) = 3x − 4. Work out f(5).",
        options: ["11", "19", "1", "15"],
        answerIndex: 0,
        explanation:
          "Substitute 5 for x: f(5) = 3(5) − 4 = 15 − 4 = 11. Choosing 19 comes from adding 4 instead of subtracting; 15 stops before the −4 step.",
        guideRef: "Function machines: notation and evaluating",
        difficulty: "warmup",
      },
      {
        id: "fun-quiz-mcq-02",
        question: "g(x) = x² + 2x. Work out g(−3).",
        options: ["3", "−15", "15", "−3"],
        answerIndex: 0,
        explanation:
          "g(−3) = (−3)² + 2(−3) = 9 − 6 = 3. The trap answer −15 comes from computing (−3)² as −9; 15 comes from a sign slip on the 2x term.",
        guideRef: "Function machines: notation and evaluating",
        difficulty: "warmup",
      },
      {
        id: "fun-quiz-mcq-03",
        question: "f(x) = 2x + 1 and g(x) = x². Work out fg(3).",
        options: ["19", "49", "37", "13"],
        answerIndex: 0,
        explanation:
          "fg(3) = f(g(3)): g acts first. g(3) = 9, then f(9) = 2(9) + 1 = 19. The answer 49 is gf(3) = (7)² — the order swapped; 37 comes from squaring after doubling incorrectly.",
        guideRef: "Chaining and reversing: composite and inverse functions",
        difficulty: "core",
        hints: [
          "In fg(3), which function is written closest to the 3?",
          "Apply g first: work out g(3).",
          "Now feed that result into f: f(g(3)) = 2 × (your value) + 1.",
        ],
        strategy: "Draw a diagram: sketch the machine chain, input on the right function first.",
      },
      {
        id: "fun-quiz-mcq-04",
        question: "Which value of x must be excluded from the domain of f(x) = 3/(x − 5)?",
        options: ["5", "−5", "3", "0"],
        answerIndex: 0,
        explanation:
          "The function is undefined when the denominator is zero: x − 5 = 0 at x = 5. Choosing −5 is a sign slip; 3 confuses the numerator with the danger point.",
        guideRef: "Domain and range: which inputs are allowed?",
        difficulty: "core",
        hints: [
          "Which arithmetic operation can break a function like this?",
          "Division by zero is undefined — when is the denominator zero?",
          "Solve x − 5 = 0.",
        ],
        strategy: "Consider extremes: test values near the suspect input and watch the fraction blow up.",
      },
      {
        id: "fun-quiz-mcq-05",
        question: "State the domain of f(x) = √(x − 2).",
        options: ["x ≥ 2", "x > 2", "x ≥ −2", "x ≤ 2"],
        answerIndex: 0,
        explanation:
          "The expression under the root must satisfy x − 2 ≥ 0, so x ≥ 2. It is ≥, not >, because √0 = 0 is perfectly fine, so x = 2 is allowed. x ≥ −2 is a sign slip.",
        guideRef: "Domain and range: which inputs are allowed?",
        difficulty: "core",
        hints: [
          "What condition must the expression inside a square root satisfy?",
          "Set up the inequality x − 2 ≥ 0.",
          "Is the boundary value x = 2 itself allowed? What is √0?",
        ],
        strategy: "Consider extremes: check the boundary input separately.",
      },
      {
        id: "fun-quiz-mcq-06",
        question: "f(x) = (x + 3)/2. Find f⁻¹(x).",
        options: ["f⁻¹(x) = 2x − 3", "f⁻¹(x) = 2x + 3", "f⁻¹(x) = (x − 3)/2", "f⁻¹(x) = 2/(x + 3)"],
        answerIndex: 0,
        explanation:
          "y = (x + 3)/2 gives 2y = x + 3, so x = 2y − 3, hence f⁻¹(x) = 2x − 3. Check: f(7) = 5 and 2(5) − 3 = 7. Option 2x + 3 undoes the steps in the wrong order; 2/(x + 3) confuses inverse with reciprocal.",
        guideRef: "Chaining and reversing: composite and inverse functions",
        difficulty: "core",
        hints: [
          "Write y = (x + 3)/2 and make x the subject.",
          "Multiply both sides by 2 first, then deal with the +3.",
          "The machine adds 3 then halves — the inverse must double FIRST, then subtract 3.",
        ],
        strategy: "Work backwards: undo the machine's steps in reverse order.",
      },
      {
        id: "fun-quiz-mcq-07",
        question: "y = 4x³ − 5x + 7. Find dy/dx.",
        options: ["12x² − 5", "12x² − 5x", "4x² − 5", "12x² − 5 + 7"],
        answerIndex: 0,
        explanation:
          "Term by term: 4x³ gives 12x², −5x gives −5, and the constant 7 gives 0. So dy/dx = 12x² − 5. Keeping −5x or +7 means the linear/constant terms were not differentiated; 4x² forgot to multiply by the power 3.",
        guideRef: "Discovering the derivative",
        difficulty: "core",
        hints: [
          "Apply 'multiply by the power, reduce the power by one' to each term separately.",
          "What happens to a constant term when you differentiate?",
          "−5x is −5x¹: its derivative is just the coefficient.",
        ],
        strategy: "Find a pattern: every term follows ax^n → anx^(n−1).",
      },
      {
        id: "fun-quiz-mcq-08",
        question: "Find the gradient of the curve y = x² − 6x + 2 at the point where x = 4.",
        options: ["2", "−2", "10", "−6"],
        answerIndex: 0,
        explanation:
          "dy/dx = 2x − 6. At x = 4 the gradient is 2(4) − 6 = 2. The answer −6 substitutes into the wrong place (or reads off the coefficient); −2 is 6 − 2(4) sign-flipped; 10 forgets the −6.",
        guideRef: "Discovering the derivative",
        difficulty: "core",
        hints: [
          "Differentiate FIRST — do not substitute x = 4 into y.",
          "dy/dx = 2x − 6.",
          "Now evaluate that expression at x = 4.",
        ],
        strategy: "Work backwards from what 'gradient at a point' means: the derivative evaluated there.",
      },
      {
        id: "fun-quiz-mcq-09",
        question:
          "The curve y = x³ − 3x² + k has a minimum turning point that lies exactly on the x-axis. Find the value of k.",
        options: ["k = 4", "k = −4", "k = 0", "k = 2"],
        answerIndex: 0,
        explanation:
          "dy/dx = 3x² − 6x = 3x(x − 2), so turning points sit at x = 0 and x = 2. d²y/dx² = 6x − 6 is +6 at x = 2, so the MINIMUM is at x = 2, where y = 8 − 12 + k = k − 4. On the x-axis means k − 4 = 0, so k = 4. Choosing k = 0 uses the maximum at x = 0 instead; k = −4 is a sign slip.",
        guideRef: "Tangents, turning points and curve sketching",
        difficulty: "challenge",
        hints: [
          "Find the turning points: solve dy/dx = 0 (k disappears when you differentiate!).",
          "There are two turning points — use the second derivative to decide which is the minimum.",
          "The minimum lies on the x-axis, so its y-coordinate is 0. Substitute that x into the curve and solve for k.",
        ],
        strategy: "Look for invariants: k shifts the curve vertically but never moves the x-positions of the turning points.",
      },
      {
        id: "fun-quiz-mcq-10",
        question: "f(x) = 1/(1 − x). Which expression equals fff(x), i.e. f applied three times?",
        options: ["x", "1/(1 − x)", "(x − 1)/x", "1 − x"],
        answerIndex: 0,
        explanation:
          "ff(x) = 1/(1 − 1/(1 − x)) = (1 − x)/((1 − x) − 1) = (1 − x)/(−x) = (x − 1)/x. Then fff(x) = 1/(1 − (x − 1)/x) = 1/((x − (x − 1))/x) = 1/(1/x) = x. Applying f three times is a round trip — f is cyclic. (x − 1)/x stops after two applications; 1/(1 − x) is only one.",
        guideRef: "Chaining and reversing: composite and inverse functions",
        difficulty: "challenge",
        hints: [
          "Build up in stages: first find ff(x) by substituting f(x) into f.",
          "Tidy the compound fraction: 1 − 1/(1 − x) = ((1 − x) − 1)/(1 − x). Simplify ff(x) fully before going on.",
          "Now substitute your simplified ff(x) into f once more — or test with a number like x = 2 and watch it come home.",
        ],
        strategy: "Try small cases: chase one number (say x = 2) through f three times and see where it lands.",
      },
    ],
    qa: [
      {
        id: "fun-quiz-qa-01",
        question: "f(x) = 5x − 2. Solve f(x) = 28.",
        modelAnswer:
          "f(x) = 28 means 5x − 2 = 28. Add 2 to both sides: 5x = 30. Divide by 5: x = 6.",
        markScheme: ["x = 6", "5x - 2 = 28", "5x = 30"],
        guideRef: "Function machines: notation and evaluating",
        difficulty: "warmup",
        commonError:
          "Computing f(28) = 138 instead of solving the equation — 'solve f(x) = 28' asks which INPUT gives output 28.",
      },
      {
        id: "fun-quiz-qa-02",
        question: "f(x) = 3x + 1 and g(x) = x² − 2. Find gf(x), giving your answer in its simplest form.",
        modelAnswer:
          "gf(x) = g(f(x)): apply f first. Substitute 3x + 1 into g: gf(x) = (3x + 1)² − 2 = 9x² + 6x + 1 − 2 = 9x² + 6x − 1.",
        markScheme: ["9x² + 6x - 1", "(3x + 1)²", "substitute", "expand"],
        guideRef: "Chaining and reversing: composite and inverse functions",
        difficulty: "core",
        hints: [
          "In gf(x), which function acts first?",
          "Substitute the whole of f(x) = 3x + 1 into every x of g.",
          "Expand (3x + 1)² carefully — it has three terms — then subtract 2.",
        ],
        strategy: "Draw a diagram: machine chain x → f → g keeps the order straight.",
        commonError:
          "Working out fg(x) = 3(x² − 2) + 1 = 3x² − 5 instead — the order is reversed. In gf(x) the f, written next to the x, acts first.",
      },
      {
        id: "fun-quiz-qa-03",
        question: "f(x) = (2x − 3)/5. Find f⁻¹(x).",
        modelAnswer:
          "Let y = (2x − 3)/5. Multiply by 5: 5y = 2x − 3. Add 3: 2x = 5y + 3. Divide by 2: x = (5y + 3)/2. Swap letters: f⁻¹(x) = (5x + 3)/2. Check: f(4) = (8 − 3)/5 = 1 and f⁻¹(1) = 8/2 = 4. Correct.",
        markScheme: ["(5x + 3)/2", "y = (2x - 3)/5", "make x the subject", "swap"],
        guideRef: "Chaining and reversing: composite and inverse functions",
        difficulty: "core",
        hints: [
          "Write y = (2x − 3)/5 and aim to make x the subject.",
          "Undo the machine in reverse: the last thing f does is divide by 5, so first multiply by 5.",
          "Once x = (5y + 3)/2, swap the letters to state f⁻¹(x).",
        ],
        strategy: "Work backwards: reverse each step of the machine in the opposite order.",
        commonError:
          "Writing f⁻¹(x) = 5/(2x − 3) — treating the inverse function as the reciprocal. f⁻¹ undoes f; it is not 1/f(x).",
      },
      {
        id: "fun-quiz-qa-04",
        question:
          "The curve y = 2x³ − 9x² + 12x has two turning points. Find their coordinates and determine the nature of each.",
        modelAnswer:
          "dy/dx = 6x² − 18x + 12 = 6(x² − 3x + 2) = 6(x − 1)(x − 2). Setting dy/dx = 0 gives x = 1 and x = 2. At x = 1: y = 2 − 9 + 12 = 5, so (1, 5). At x = 2: y = 16 − 36 + 24 = 4, so (2, 4). d²y/dx² = 12x − 18. At x = 1: d²y/dx² = −6 < 0, so (1, 5) is a maximum. At x = 2: d²y/dx² = +6 > 0, so (2, 4) is a minimum.",
        markScheme: ["(1, 5)", "(2, 4)", "6x² - 18x + 12", "maximum", "minimum", "second derivative"],
        guideRef: "Tangents, turning points and curve sketching",
        difficulty: "core",
        hints: [
          "Turning points happen where the gradient is zero — differentiate first.",
          "Factorise dy/dx = 6x² − 18x + 12 (take out the 6 first).",
          "Find y at each x, then use d²y/dx² (or test gradient signs) to classify each point.",
        ],
        strategy: "Look for invariants: every smooth turning point has dy/dx = 0, so start there.",
        commonError:
          "Stopping after finding x = 1 and x = 2 — the question asks for COORDINATES (substitute back into y) and the NATURE of each point.",
        solutions: [
          {
            label: "Second derivative test",
            steps: [
              "dy/dx = 6x² − 18x + 12 = 6(x − 1)(x − 2), so dy/dx = 0 at x = 1 and x = 2.",
              "y(1) = 2 − 9 + 12 = 5 and y(2) = 16 − 36 + 24 = 4, giving points (1, 5) and (2, 4).",
              "d²y/dx² = 12x − 18. At x = 1 it is −6 (negative → maximum). At x = 2 it is +6 (positive → minimum).",
            ],
          },
          {
            label: "Gradient sign test (no second derivative needed)",
            steps: [
              "dy/dx = 6(x − 1)(x − 2) = 0 at x = 1 and x = 2; find the points (1, 5) and (2, 4) as before.",
              "Test signs of dy/dx: at x = 0.5 it is 6(−0.5)(−1.5) > 0; at x = 1.5 it is 6(0.5)(−0.5) < 0; at x = 3 it is 6(2)(1) > 0.",
              "Around x = 1 the gradient goes + to −, so (1, 5) is a maximum; around x = 2 it goes − to +, so (2, 4) is a minimum. The factorised form makes the sign checks almost instant — an elegant shortcut when the second derivative is fiddly.",
            ],
          },
        ],
      },
      {
        id: "fun-quiz-qa-05",
        question: "Find the equation of the tangent to the curve y = x² − 4x + 1 at the point where x = 3.",
        modelAnswer:
          "At x = 3: y = 9 − 12 + 1 = −2, so the point is (3, −2). dy/dx = 2x − 4, so the gradient at x = 3 is 2(3) − 4 = 2. Tangent: y − (−2) = 2(x − 3), i.e. y + 2 = 2x − 6, so y = 2x − 8.",
        markScheme: ["y = 2x - 8", "2x - 4", "gradient 2", "(3, -2)"],
        guideRef: "Tangents, turning points and curve sketching",
        difficulty: "core",
        hints: [
          "A tangent needs two things: a point on the curve and a gradient.",
          "Get the point by substituting x = 3 into y; get the gradient from dy/dx at x = 3.",
          "Finish with y − y1 = m(x − x1).",
        ],
        strategy: "Draw a diagram: sketch the parabola and the tangent to sanity-check the gradient's sign.",
        commonError:
          "Using the derivative expression 2x − 4 as the 'gradient' without substituting x = 3 — a tangent is a straight line, so its gradient must be a NUMBER.",
      },
      {
        id: "fun-quiz-qa-06",
        question:
          "A farmer has 40 m of fencing to build a rectangular pen against a long straight wall. The wall forms one side of the pen, so fencing is needed on only three sides. Find the dimensions that make the pen's area as large as possible, and state this maximum area.",
        modelAnswer:
          "Let x m be the width (the two sides meeting the wall). The fencing gives 2x + length = 40, so the length is 40 − 2x. Area A = x(40 − 2x) = 40x − 2x². dA/dx = 40 − 4x = 0 gives x = 10. d²A/dx² = −4 < 0, so this is a maximum. Dimensions: width 10 m, length 40 − 20 = 20 m. Maximum area A = 10 × 20 = 200 m².",
        markScheme: ["200", "x = 10", "40x - 2x²", "40 - 4x", "20"],
        guideRef: "Calculus at work: motion and best-possible problems",
        difficulty: "challenge",
        hints: [
          "Introduce a variable: let x be the width. How much fencing is left for the length? (Remember the wall is free.)",
          "Write the area as a function of x alone: A = x(40 − 2x).",
          "Differentiate A, set dA/dx = 0, and confirm your answer is a maximum before stating the dimensions and area.",
        ],
        strategy: "Introduce a variable: turn the geometry into a one-variable function, then optimise it.",
        commonError:
          "Writing the constraint as 2x + 2L = 40 — that includes a fourth fenced side, but the wall replaces it. Only three sides use fencing: 2x + L = 40.",
        solutions: [
          {
            label: "Calculus method",
            steps: [
              "Let width = x, so length = 40 − 2x and A = 40x − 2x².",
              "dA/dx = 40 − 4x = 0 gives x = 10; d²A/dx² = −4 < 0 confirms a maximum.",
              "Width 10 m, length 20 m, maximum area 200 m².",
            ],
          },
          {
            label: "Completing the square (no calculus)",
            steps: [
              "A = 40x − 2x² = −2(x² − 20x) = −2((x − 10)² − 100) = 200 − 2(x − 10)².",
              "Since (x − 10)² ≥ 0 always, A ≤ 200, with equality exactly when x = 10.",
              "So the maximum area is 200 m² at width 10 m, length 20 m — an elegant proof that 200 is truly the ceiling, not just a local peak.",
            ],
          },
        ],
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "fun-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "fun-mcq-p1-q01",
            question: "g(x) = x² − 3. Work out g(4).",
            options: ["13", "19", "1", "5"],
            answerIndex: 0,
            explanation:
              "g(4) = 4² − 3 = 16 − 3 = 13. The answer 19 adds 3 instead; 5 doubles 4 instead of squaring; 1 squares the wrong thing, (4 − 3)².",
            guideRef: "Function machines: notation and evaluating",
            difficulty: "warmup",
          },
          {
            id: "fun-mcq-p1-q02",
            question: "f(x) = 10 − 2x. Solve f(x) = 4.",
            options: ["x = 3", "x = −3", "x = 7", "x = 2"],
            answerIndex: 0,
            explanation:
              "10 − 2x = 4 gives 2x = 6, so x = 3. Getting −3 comes from a sign slip when moving terms; 7 comes from 10 − 4 without dividing by 2; 2 is f(4) confusion.",
            guideRef: "Function machines: notation and evaluating",
            difficulty: "warmup",
          },
          {
            id: "fun-mcq-p1-q03",
            question: "State the domain of h(x) = √(x + 5).",
            options: ["x ≥ −5", "x ≥ 5", "x > −5", "x ≤ −5"],
            answerIndex: 0,
            explanation:
              "Need x + 5 ≥ 0, so x ≥ −5. The boundary is included because √0 = 0 is defined, ruling out x > −5. x ≥ 5 is a sign slip.",
            guideRef: "Domain and range: which inputs are allowed?",
            difficulty: "core",
            hints: [
              "What must be true of the expression under a square root?",
              "Solve x + 5 ≥ 0.",
              "Decide whether the boundary value is allowed: what is √0?",
            ],
            strategy: "Consider extremes: test the boundary input on its own.",
          },
          {
            id: "fun-mcq-p1-q04",
            question: "f(x) = x − 4 and g(x) = 2x. Work out gf(5).",
            options: ["2", "6", "14", "1"],
            answerIndex: 0,
            explanation:
              "gf(5) = g(f(5)): f first. f(5) = 1, then g(1) = 2. The answer 6 is fg(5) = f(10) — order swapped; 14 is 2(5) + 4; 1 stops after f.",
            guideRef: "Chaining and reversing: composite and inverse functions",
            difficulty: "core",
            hints: [
              "Which function is written next to the 5?",
              "Work out f(5) first.",
              "Now double that result.",
            ],
            strategy: "Draw a diagram: chain the machines 5 → f → g.",
          },
          {
            id: "fun-mcq-p1-q05",
            question: "f(x) = 4x − 7. Find f⁻¹(x).",
            options: ["f⁻¹(x) = (x + 7)/4", "f⁻¹(x) = (x − 7)/4", "f⁻¹(x) = 4x + 7", "f⁻¹(x) = 1/(4x − 7)"],
            answerIndex: 0,
            explanation:
              "y = 4x − 7 gives x = (y + 7)/4, so f⁻¹(x) = (x + 7)/4. Check: f(2) = 1 and (1 + 7)/4 = 2. Option (x − 7)/4 undoes the −7 the wrong way; 1/(4x − 7) is the reciprocal, not the inverse.",
            guideRef: "Chaining and reversing: composite and inverse functions",
            difficulty: "core",
            hints: [
              "f multiplies by 4 THEN subtracts 7. In what order must the inverse undo those steps?",
              "Write y = 4x − 7 and make x the subject.",
              "Add 7 first, then divide by 4.",
            ],
            strategy: "Work backwards: undo the last step first.",
          },
          {
            id: "fun-mcq-p1-q06",
            question: "y = x^4 − 3x² + 2x. Find dy/dx.",
            options: ["4x³ − 6x + 2", "x³ − 6x + 2", "4x³ − 3x + 2", "4x³ − 6x"],
            answerIndex: 0,
            explanation:
              "x^4 gives 4x³, −3x² gives −6x, and 2x gives 2, so dy/dx = 4x³ − 6x + 2. x³ − 6x + 2 forgot the ×4; 4x³ − 3x + 2 forgot to double the middle coefficient; 4x³ − 6x dropped the 2x term's derivative.",
            guideRef: "Discovering the derivative",
            difficulty: "core",
            hints: [
              "Handle each term separately: multiply by the power, reduce the power by one.",
              "−3x² becomes −3 × 2 × x¹.",
              "2x is 2x¹ — what does it become?",
            ],
            strategy: "Find a pattern: ax^n → anx^(n−1) for every term.",
          },
          {
            id: "fun-mcq-p1-q07",
            question: "The curve y = x³ − 12x has turning points at which values of x?",
            options: ["x = 2 and x = −2", "x = 2 only", "x = 4 and x = −4", "x = 0 and x = 4"],
            answerIndex: 0,
            explanation:
              "dy/dx = 3x² − 12 = 0 gives x² = 4, so x = ±2. Forgetting the negative root gives 'x = 2 only'; x = ±4 comes from x² = 12 sloppiness; x = 0 and 4 comes from factorising 3x(x − 4) of the wrong derivative.",
            guideRef: "Tangents, turning points and curve sketching",
            difficulty: "core",
            hints: [
              "Turning points satisfy dy/dx = 0.",
              "Differentiate: dy/dx = 3x² − 12.",
              "Solve 3x² − 12 = 0 — remember square roots come in pairs.",
            ],
            strategy: "Look for invariants: horizontal tangents always mean dy/dx = 0.",
          },
          {
            id: "fun-mcq-p1-q08",
            question:
              "The tangent to the curve y = x² at the point P passes through (0, −9). Find the possible x-coordinates of P.",
            options: ["x = 3 and x = −3", "x = 9 and x = −9", "x = 3 only", "x = √3 and −√3"],
            answerIndex: 0,
            explanation:
              "Let P = (a, a²). The gradient there is 2a, so the tangent is y − a² = 2a(x − a), i.e. y = 2ax − a². Through (0, −9): −9 = −a², so a² = 9 and a = ±3. Both work by symmetry — 'x = 3 only' misses the mirror-image tangent; ±√3 forgets to square the gradient relation properly.",
            guideRef: "Tangents, turning points and curve sketching",
            difficulty: "challenge",
            hints: [
              "You don't know where P is — introduce a variable: call it (a, a²).",
              "Write the tangent at (a, a²) using gradient 2a: y = 2ax − a².",
              "Force the line through (0, −9) and solve for a. How many solutions does a² = 9 have?",
            ],
            strategy: "Introduce a variable: let the unknown point be (a, a²) and build the tangent in terms of a.",
          },
        ],
      },
      {
        id: "fun-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "fun-mcq-p2-q01",
            question: "f(x) = x². Work out f(−5).",
            options: ["25", "−25", "10", "−10"],
            answerIndex: 0,
            explanation:
              "f(−5) = (−5)² = 25 — a negative times a negative is positive. −25 forgets the brackets; ±10 doubles instead of squaring.",
            guideRef: "Function machines: notation and evaluating",
            difficulty: "warmup",
          },
          {
            id: "fun-mcq-p2-q02",
            question: "y = 7x. Find dy/dx.",
            options: ["7", "7x", "0", "x"],
            answerIndex: 0,
            explanation:
              "y = 7x is a straight line with gradient 7, so dy/dx = 7. (By the rule: 7x¹ → 7x⁰ = 7.) The answer 0 treats 7x as a constant; 7x forgets to reduce the power.",
            guideRef: "Discovering the derivative",
            difficulty: "warmup",
          },
          {
            id: "fun-mcq-p2-q03",
            question: "f(x) = x² + 3 for all real x. What is the range of f?",
            options: ["f(x) ≥ 3", "f(x) > 3", "f(x) ≥ 0", "all real numbers"],
            answerIndex: 0,
            explanation:
              "x² ≥ 0 for every real x, so x² + 3 ≥ 3, and the value 3 IS achieved at x = 0 — so f(x) ≥ 3, not f(x) > 3. f(x) ≥ 0 describes x² alone and ignores the +3.",
            guideRef: "Domain and range: which inputs are allowed?",
            difficulty: "core",
            hints: [
              "What is the smallest possible value of x²?",
              "Add 3 to that smallest value.",
              "Can the output actually EQUAL your bound? Try x = 0.",
            ],
            strategy: "Consider extremes: find the input that makes the output as small as possible.",
          },
          {
            id: "fun-mcq-p2-q04",
            question: "f(x) = 2x + 3 and g(x) = x − 1. Solve fg(x) = 11.",
            options: ["x = 5", "x = 4.5", "x = 4", "x = 3"],
            answerIndex: 0,
            explanation:
              "fg(x) = f(x − 1) = 2(x − 1) + 3 = 2x + 1. Then 2x + 1 = 11 gives x = 5. The answer 4.5 solves gf(x) = 2x + 2 = 11 (order swapped); 4 solves f(x) = 11 ignoring g.",
            guideRef: "Chaining and reversing: composite and inverse functions",
            difficulty: "core",
            hints: [
              "Build fg(x) first: substitute x − 1 into f.",
              "Simplify: fg(x) = 2(x − 1) + 3.",
              "Set your simplified expression equal to 11 and solve.",
            ],
            strategy: "Introduce a variable: get fg(x) as a single expression before solving.",
          },
          {
            id: "fun-mcq-p2-q05",
            question: "y = 3/x². Find dy/dx.",
            options: ["−6/x³", "6/x³", "−3/x³", "−6/x"],
            answerIndex: 0,
            explanation:
              "Rewrite y = 3x^-2. Then dy/dx = 3 × (−2)x^-3 = −6x^-3 = −6/x³. 6/x³ drops the sign of the power; −3/x³ forgets to multiply by 2; −6/x doesn't reduce the power correctly.",
            guideRef: "Discovering the derivative",
            difficulty: "core",
            hints: [
              "Rewrite the fraction as a power of x first.",
              "3/x² = 3x^-2 — now apply the usual rule.",
              "Multiply by the power (−2), then reduce the power by one: −2 − 1 = −3.",
            ],
            strategy: "Find a pattern: the rule anx^(n−1) works for negative n too.",
          },
          {
            id: "fun-mcq-p2-q06",
            question: "Find the gradient of the curve y = x³ − 5x at the point where x = −1.",
            options: ["−2", "2", "−8", "4"],
            answerIndex: 0,
            explanation:
              "dy/dx = 3x² − 5. At x = −1: 3(−1)² − 5 = 3 − 5 = −2. The answer −8 computes 3(−1)³ − 5 (cubing instead of squaring); 4 comes from substituting into y instead of dy/dx.",
            guideRef: "Discovering the derivative",
            difficulty: "core",
            hints: [
              "Differentiate first: dy/dx = 3x² − 5.",
              "Substitute x = −1, remembering (−1)² = +1.",
              "3(1) − 5 = ?",
            ],
            strategy: "Work backwards from the definition: gradient at a point = derivative evaluated there.",
          },
          {
            id: "fun-mcq-p2-q07",
            question:
              "A particle moves so that its displacement is s = 5t² − 3t metres after t seconds. Find its velocity when t = 2.",
            options: ["17 m/s", "14 m/s", "20 m/s", "7 m/s"],
            answerIndex: 0,
            explanation:
              "v = ds/dt = 10t − 3. At t = 2: v = 20 − 3 = 17 m/s. The answer 14 is s(2) = 20 − 6 — the displacement, not the velocity; 20 forgets the −3; 7 comes from differentiating 5t² incorrectly as 5t.",
            guideRef: "Calculus at work: motion and best-possible problems",
            difficulty: "core",
            hints: [
              "Velocity is the rate of change of displacement — differentiate s.",
              "v = 10t − 3.",
              "Evaluate at t = 2.",
            ],
            strategy: "Look for invariants: velocity is ALWAYS ds/dt, never s divided by t.",
          },
          {
            id: "fun-mcq-p2-q08",
            question:
              "The curve y = x³ + ax² + bx has a turning point at (1, −5). Find the value of a.",
            options: ["a = 3", "a = −3", "a = 1", "a = −9"],
            answerIndex: 0,
            explanation:
              "Turning point: dy/dx = 3x² + 2ax + b = 0 at x = 1, so 2a + b = −3. On the curve: 1 + a + b = −5, so a + b = −6. Subtracting: a = 3 (and b = −9). Check: y = x³ + 3x² − 9x has dy/dx = 3(x + 3)(x − 1), zero at x = 1, and y(1) = −5. The answer −9 is b, not a; −3 mixes up the equations.",
            guideRef: "Tangents, turning points and curve sketching",
            difficulty: "challenge",
            hints: [
              "A turning point gives you TWO facts: the point lies on the curve, and dy/dx = 0 there.",
              "Write both equations: substitute (1, −5) into y, and set the derivative to zero at x = 1.",
              "You get 2a + b = −3 and a + b = −6 — solve simultaneously.",
            ],
            strategy: "Work backwards: translate each given fact into an equation, then solve the pair.",
          },
        ],
      },
      {
        id: "fun-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "fun-mcq-p3-q01",
            question: "f(x) = (x + 1)/2. Work out f(9).",
            options: ["5", "5.5", "4", "10"],
            answerIndex: 0,
            explanation:
              "f(9) = (9 + 1)/2 = 10/2 = 5. The answer 5.5 computes 9/2 + 1, dividing before adding — the bracket means add first; 4 subtracts instead.",
            guideRef: "Function machines: notation and evaluating",
            difficulty: "warmup",
          },
          {
            id: "fun-mcq-p3-q02",
            question: "Which value of x must be excluded from the domain of g(x) = 7/(2x + 6)?",
            options: ["x = −3", "x = 3", "x = −6", "x = 0"],
            answerIndex: 0,
            explanation:
              "The denominator is zero when 2x + 6 = 0, i.e. x = −3. x = 3 is a sign slip; x = −6 forgets to divide by 2; x = 0 is never automatically excluded.",
            guideRef: "Domain and range: which inputs are allowed?",
            difficulty: "warmup",
          },
          {
            id: "fun-mcq-p3-q03",
            question: "f(x) = x² − 1 and g(x) = 3x. Work out fg(2).",
            options: ["35", "9", "11", "12"],
            answerIndex: 0,
            explanation:
              "fg(2) = f(g(2)). g(2) = 6, then f(6) = 36 − 1 = 35. The answer 9 is gf(2) = 3 × 3 (order swapped); 11 is 3(2²) − 1 with the square in the wrong place; 12 is 3 × (2² … ) muddled.",
            guideRef: "Chaining and reversing: composite and inverse functions",
            difficulty: "core",
            hints: [
              "Which function acts first in fg(2)?",
              "Work out g(2) = 6.",
              "Now apply f to that: 6² − 1.",
            ],
            strategy: "Draw a diagram: 2 → g → f, right to left through the notation.",
          },
          {
            id: "fun-mcq-p3-q04",
            question: "f(x) = x³ + 2. Find f⁻¹(x).",
            options: ["f⁻¹(x) = ∛(x − 2)", "f⁻¹(x) = ∛x − 2", "f⁻¹(x) = (x − 2)³", "f⁻¹(x) = 1/(x³ + 2)"],
            answerIndex: 0,
            explanation:
              "y = x³ + 2 gives x³ = y − 2, so x = ∛(y − 2) and f⁻¹(x) = ∛(x − 2). Check: f(1) = 3 and ∛(3 − 2) = 1. Option ∛x − 2 undoes the steps in the wrong order; (x − 2)³ inverts the wrong way round; 1/(x³ + 2) is the reciprocal.",
            guideRef: "Chaining and reversing: composite and inverse functions",
            difficulty: "core",
            hints: [
              "f cubes THEN adds 2. In what order must the inverse undo these?",
              "Subtract 2 first, then take the cube root.",
              "Verify with a number: f(1) = 3, so f⁻¹(3) must be 1.",
            ],
            strategy: "Work backwards: undo the last operation first.",
          },
          {
            id: "fun-mcq-p3-q05",
            question: "y = (2x + 1)(x − 3). Find dy/dx.",
            options: ["4x − 5", "4x − 6", "2x − 5", "2"],
            answerIndex: 0,
            explanation:
              "Expand first: y = 2x² − 6x + x − 3 = 2x² − 5x − 3, so dy/dx = 4x − 5. The answer 2 comes from differentiating each bracket separately and multiplying (2 × 1) — that rule is false; 4x − 6 and 2x − 5 are expansion slips.",
            guideRef: "Discovering the derivative",
            difficulty: "core",
            hints: [
              "You cannot differentiate the brackets separately — expand the product first.",
              "(2x + 1)(x − 3) = 2x² − 5x − 3.",
              "Now differentiate term by term.",
            ],
            strategy: "Work backwards: rewrite into a form (a sum of powers) that the rule can handle.",
          },
          {
            id: "fun-mcq-p3-q06",
            question:
              "A particle has velocity v = t³ − 4t + 1 m/s at time t seconds. Find its acceleration when t = 2.",
            options: ["8 m/s²", "12 m/s²", "1 m/s²", "4 m/s²"],
            answerIndex: 0,
            explanation:
              "a = dv/dt = 3t² − 4. At t = 2: a = 12 − 4 = 8 m/s². The answer 12 forgets the −4; 1 is v(2) — the velocity, not the acceleration; 4 halves incorrectly.",
            guideRef: "Calculus at work: motion and best-possible problems",
            difficulty: "core",
            hints: [
              "Acceleration is the rate of change of velocity.",
              "Differentiate v to get a = 3t² − 4.",
              "Substitute t = 2.",
            ],
            strategy: "Look for invariants: each step of the chain s → v → a is one differentiation.",
          },
          {
            id: "fun-mcq-p3-q07",
            question: "f(x) = x² and g(x) = 3x + 10. Solve f(x) = g(x).",
            options: ["x = 5 or x = −2", "x = −5 or x = 2", "x = 5 only", "x = 2 or x = 5"],
            answerIndex: 0,
            explanation:
              "x² = 3x + 10 gives x² − 3x − 10 = 0, so (x − 5)(x + 2) = 0 and x = 5 or x = −2. Check: 25 = 15 + 10 and 4 = −6 + 10. The sign-swapped pair fails the check; 'x = 5 only' discards a genuine solution.",
            guideRef: "Chaining and reversing: composite and inverse functions",
            difficulty: "core",
            hints: [
              "Set the two expressions equal: x² = 3x + 10.",
              "Rearrange everything to one side to get a quadratic equal to zero.",
              "Factorise x² − 3x − 10 — two numbers multiplying to −10, summing to −3.",
            ],
            strategy: "Work backwards: 'where do the graphs meet?' becomes 'solve the equation'.",
          },
          {
            id: "fun-mcq-p3-q08",
            question: "For x > 0, the curve y = x + 4/x has a minimum value. What is it?",
            options: ["4", "2", "8", "5"],
            answerIndex: 0,
            explanation:
              "y = x + 4x^-1, so dy/dx = 1 − 4/x². Setting this to 0: x² = 4, and since x > 0, x = 2. Then y = 2 + 4/2 = 4, a minimum because d²y/dx² = 8/x³ > 0. The answer 2 is the x-coordinate, not the minimum VALUE; 8 and 5 come from substitution slips.",
            guideRef: "Calculus at work: motion and best-possible problems",
            difficulty: "challenge",
            hints: [
              "Rewrite 4/x as 4x^-1 and differentiate.",
              "Solve 1 − 4/x² = 0, keeping only the root with x > 0.",
              "The question asks for the minimum VALUE of y — substitute your x back in.",
            ],
            strategy: "Consider extremes: y blows up as x → 0 and as x grows, so the valley lies between — find it with dy/dx = 0.",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "fun-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "fun-qa-p1-q01",
            question: "f(x) = x² + 3x. Work out f(−2).",
            modelAnswer: "f(−2) = (−2)² + 3(−2) = 4 − 6 = −2.",
            markScheme: ["-2", "4 - 6", "(-2)²"],
            guideRef: "Function machines: notation and evaluating",
            difficulty: "warmup",
            commonError:
              "Evaluating (−2)² as −4. With brackets, (−2)² = +4; only −2² without brackets means −(2²).",
          },
          {
            id: "fun-qa-p1-q02",
            question: "f(x) = 7 − 2x and g(x) = x² + 1. Find fg(x), giving your answer in its simplest form.",
            modelAnswer:
              "fg(x) = f(g(x)): apply g first. Substitute x² + 1 into f: fg(x) = 7 − 2(x² + 1) = 7 − 2x² − 2 = 5 − 2x².",
            markScheme: ["5 - 2x²", "7 - 2(x² + 1)", "substitute", "expand"],
            guideRef: "Chaining and reversing: composite and inverse functions",
            difficulty: "core",
            hints: [
              "In fg(x), g acts first — its whole expression becomes the input to f.",
              "Replace the x in 7 − 2x with (x² + 1), brackets included.",
              "Expand and collect: 7 − 2x² − 2.",
            ],
            strategy: "Draw a diagram: machine chain x → g → f.",
            commonError:
              "Finding gf(x) = (7 − 2x)² + 1 instead — that squares f's output, which is the wrong order for fg.",
          },
          {
            id: "fun-qa-p1-q03",
            question:
              "f(x) = 3/(x − 2). (a) State the value of x that must be excluded from the domain of f. (b) Find f⁻¹(x).",
            modelAnswer:
              "(a) The denominator is zero at x = 2, so x = 2 is excluded. (b) Let y = 3/(x − 2). Then y(x − 2) = 3, so x − 2 = 3/y, giving x = 3/y + 2. Swap letters: f⁻¹(x) = 3/x + 2 (equivalently (2x + 3)/x). Check: f(5) = 1 and f⁻¹(1) = 3 + 2 = 5.",
            markScheme: ["3/x + 2", "x = 2", "y(x - 2) = 3", "make x the subject"],
            guideRef: "Chaining and reversing: composite and inverse functions",
            difficulty: "core",
            hints: [
              "(a) Which input makes the denominator zero?",
              "(b) Write y = 3/(x − 2) and multiply both sides by (x − 2).",
              "Isolate x step by step, then swap the letters.",
            ],
            strategy: "Work backwards: reverse the machine — subtract-2-then-divide-into-3 becomes divide-into-3-then-add-2.",
            commonError:
              "Writing f⁻¹(x) = (x − 2)/3 by 'flipping the fraction' — the inverse must be derived by rearranging, and here the x sits in the denominator.",
          },
          {
            id: "fun-qa-p1-q04",
            question: "Find the equation of the tangent to the curve y = x³ − 2x + 4 at the point where x = 1.",
            modelAnswer:
              "At x = 1: y = 1 − 2 + 4 = 3, so the point is (1, 3). dy/dx = 3x² − 2, so the gradient at x = 1 is 3 − 2 = 1. Tangent: y − 3 = 1(x − 1), so y = x + 2.",
            markScheme: ["y = x + 2", "3x² - 2", "gradient 1", "(1, 3)"],
            guideRef: "Tangents, turning points and curve sketching",
            difficulty: "core",
            hints: [
              "Find the point on the curve by substituting x = 1 into y.",
              "Find the gradient by substituting x = 1 into dy/dx.",
              "Combine with y − y1 = m(x − x1).",
            ],
            strategy: "Draw a diagram: a quick sketch shows the tangent rising gently through (1, 3).",
            commonError:
              "Substituting x = 1 into y BEFORE differentiating, which gives the meaningless 'derivative of 3'. Always differentiate the function, then substitute.",
          },
          {
            id: "fun-qa-p1-q05",
            question:
              "A particle moves in a straight line so that its displacement from O after t seconds is s = t³ − 6t² + 9t metres (t ≥ 0). Find the times at which the particle is at rest.",
            modelAnswer:
              "At rest means v = 0. v = ds/dt = 3t² − 12t + 9 = 3(t² − 4t + 3) = 3(t − 1)(t − 3). So v = 0 at t = 1 and t = 3. The particle is at rest after 1 second and after 3 seconds.",
            markScheme: ["t = 1 and t = 3", "3t² - 12t + 9", "v = 0", "factorise"],
            guideRef: "Calculus at work: motion and best-possible problems",
            difficulty: "core",
            hints: [
              "Translate 'at rest' into an equation about velocity.",
              "Velocity is ds/dt — differentiate the displacement.",
              "Factorise 3t² − 12t + 9 (take out the 3 first) and solve.",
            ],
            strategy: "Work backwards: start from the condition v = 0 and solve for t.",
            commonError:
              "Solving s = 0 instead of v = 0. 'At rest' is about velocity being zero, not about being back at the start.",
          },
          {
            id: "fun-qa-p1-q06",
            question:
              "An open-top box is made from a 12 cm by 12 cm square of card by cutting a square of side x cm from each corner and folding up the sides. Show that the volume is V = x(12 − 2x)², find the value of x that makes V a maximum, and state the maximum volume.",
            modelAnswer:
              "After cutting, the base is a square of side 12 − 2x and the height is x, so V = x(12 − 2x)². Expand: V = x(144 − 48x + 4x²) = 144x − 48x² + 4x³. dV/dx = 144 − 96x + 12x² = 12(x² − 8x + 12) = 12(x − 2)(x − 6). So dV/dx = 0 at x = 2 or x = 6. Since 0 < x < 6 (at x = 6 the base vanishes), take x = 2. Check: d²V/dx² = 24x − 96 = −48 < 0 at x = 2, confirming a maximum. Maximum volume V = 2 × (12 − 4)² = 2 × 64 = 128 cm³.",
            markScheme: ["128", "x = 2", "12x² - 96x + 144", "(x - 2)(x - 6)", "d²V/dx² < 0"],
            guideRef: "Calculus at work: motion and best-possible problems",
            difficulty: "challenge",
            hints: [
              "Draw a diagram: after cutting corners of side x, what are the base side and the height of the folded box?",
              "Expand V = x(12 − 2x)² into powers of x so you can differentiate.",
              "Solve dV/dx = 0 — you'll get two candidates. Which one is physically possible, and how do you PROVE it's a maximum?",
            ],
            strategy: "Draw a diagram, then introduce a variable: geometry becomes a one-variable cubic to optimise.",
            commonError:
              "Accepting x = 6 as an answer. At x = 6 the base is 12 − 12 = 0 so the 'box' has no volume — always sanity-check candidates against the physical constraints.",
          },
        ],
      },
      {
        id: "fun-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "fun-qa-p2-q01",
            question: "y = x³ − 5x² + 4x − 7. Find dy/dx.",
            modelAnswer:
              "Differentiate term by term: x³ gives 3x², −5x² gives −10x, 4x gives 4, and the constant −7 gives 0. So dy/dx = 3x² − 10x + 4.",
            markScheme: ["3x² - 10x + 4", "term by term", "constant gives 0"],
            guideRef: "Discovering the derivative",
            difficulty: "warmup",
            commonError:
              "Leaving '−7' in the derivative. Constants have gradient zero — they vanish when you differentiate.",
          },
          {
            id: "fun-qa-p2-q02",
            question: "f(x) = 4x − 1. Solve ff(x) = 27.",
            modelAnswer:
              "ff(x) = f(4x − 1) = 4(4x − 1) − 1 = 16x − 4 − 1 = 16x − 5. Then 16x − 5 = 27 gives 16x = 32, so x = 2. Check: f(2) = 7 and f(7) = 27.",
            markScheme: ["x = 2", "16x - 5", "4(4x - 1) - 1"],
            guideRef: "Chaining and reversing: composite and inverse functions",
            difficulty: "core",
            hints: [
              "ff(x) means f applied twice: substitute f(x) into f.",
              "Build ff(x) = 4(4x − 1) − 1 and simplify.",
              "Set the simplified expression equal to 27 and solve.",
            ],
            strategy: "Try small cases: after solving, push your x through f twice to confirm it lands on 27.",
            commonError:
              "Interpreting ff(x) as (f(x))² = (4x − 1)². Double application means feeding the output back in, not squaring.",
          },
          {
            id: "fun-qa-p2-q03",
            question:
              "g(x) = √(x − 3) and h(x) = 2x + 1. (a) Find gh(x). (b) State the domain of gh.",
            modelAnswer:
              "(a) gh(x) = g(h(x)) = g(2x + 1) = √((2x + 1) − 3) = √(2x − 2). (b) Need 2x − 2 ≥ 0, so the domain is x ≥ 1.",
            markScheme: ["√(2x - 2)", "x ≥ 1", "2x + 1 - 3", "2x - 2 ≥ 0"],
            guideRef: "Domain and range: which inputs are allowed?",
            difficulty: "core",
            hints: [
              "In gh(x), h acts first — substitute 2x + 1 into g.",
              "Simplify what sits under the root: (2x + 1) − 3.",
              "For the domain, insist the expression under the root is ≥ 0 and solve the inequality.",
            ],
            strategy: "Work backwards: the domain condition comes from the finished composite, not from g alone.",
            commonError:
              "Giving the domain as x ≥ 3 (the condition for g on its own). After composing, the condition applies to 2x − 2, giving x ≥ 1.",
          },
          {
            id: "fun-qa-p2-q04",
            question:
              "The curve y = ax² + bx passes through the point (2, 10), and the gradient of the curve at x = 2 is 11. Find the values of a and b.",
            modelAnswer:
              "Point on curve: 4a + 2b = 10. Gradient: dy/dx = 2ax + b, and at x = 2 this is 4a + b = 11. Subtract the second equation from the first: (4a + 2b) − (4a + b) = 10 − 11, so b = −1. Then 4a − 1 = 11 gives a = 3. Check: y = 3x² − x passes through (2, 10) since 12 − 2 = 10, and dy/dx = 6x − 1 = 11 at x = 2. So a = 3, b = −1.",
            markScheme: ["a = 3", "b = -1", "4a + b = 11", "4a + 2b = 10", "simultaneous"],
            guideRef: "Discovering the derivative",
            difficulty: "core",
            hints: [
              "You are given two separate facts — turn each into an equation in a and b.",
              "'Passes through (2, 10)' means substituting x = 2 into y gives 10; 'gradient 11 at x = 2' involves dy/dx.",
              "Solve the two equations simultaneously — subtracting them eliminates a.",
            ],
            strategy: "Introduce a variable: two unknowns need two equations — hunt one from each given fact.",
            commonError:
              "Substituting x = 2 into y and setting it equal to 11 — mixing up the y-VALUE (10) with the GRADIENT (11). Keep the two facts in separate equations.",
          },
          {
            id: "fun-qa-p2-q05",
            question:
              "A particle moves along a line with displacement s = 2t³ − 15t² + 24t + 3 metres at time t seconds. Find its acceleration at the first moment when its velocity is zero.",
            modelAnswer:
              "v = ds/dt = 6t² − 30t + 24 = 6(t² − 5t + 4) = 6(t − 1)(t − 4). So v = 0 at t = 1 and t = 4; the first is t = 1. a = dv/dt = 12t − 30. At t = 1: a = 12 − 30 = −18 m/s².",
            markScheme: ["-18", "t = 1", "6t² - 30t + 24", "12t - 30"],
            guideRef: "Calculus at work: motion and best-possible problems",
            difficulty: "core",
            hints: [
              "Differentiate once for velocity, and factorise to find when v = 0.",
              "Which of the two times comes FIRST?",
              "Differentiate again for acceleration and substitute that first time.",
            ],
            strategy: "Work backwards: the chain is s → v → a, and the question needs both links.",
            commonError:
              "Substituting t = 4 (the second rest time) or reporting a positive 18. The acceleration at t = 1 is genuinely negative — the particle is slowing into its first pause.",
          },
          {
            id: "fun-qa-p2-q06",
            question: "Find both values of m for which the line y = mx − 4 is a tangent to the curve y = x².",
            modelAnswer:
              "Where the line meets the curve: x² = mx − 4, so x² − mx + 4 = 0. Tangency means exactly one intersection, so the discriminant is zero: m² − 4(1)(4) = 0, giving m² = 16 and m = ±4. Check m = 4: x² − 4x + 4 = (x − 2)² touches at x = 2. Check m = −4: x² + 4x + 4 = (x + 2)² touches at x = −2. So m = 4 or m = −4.",
            markScheme: ["m = ±4", "x² - mx + 4 = 0", "discriminant", "m² - 16 = 0"],
            guideRef: "Tangents, turning points and curve sketching",
            difficulty: "challenge",
            hints: [
              "Where a line is tangent to a curve, how many times do they meet?",
              "Set x² = mx − 4 and rearrange into a quadratic in x.",
              "One repeated root means the discriminant b² − 4ac equals zero — solve that for m. Expect two answers by symmetry.",
            ],
            strategy: "Exploit symmetry: the parabola is symmetric about the y-axis, so tangents from a point on that axis come in mirror pairs.",
            commonError:
              "Finding m = 4 and stopping. m² = 16 has two roots, and the picture confirms it: from (0, −4) below the parabola, one tangent leans right and its mirror image leans left.",
            solutions: [
              {
                label: "Discriminant method",
                steps: [
                  "Intersections satisfy x² − mx + 4 = 0.",
                  "Tangency = repeated root, so m² − 16 = 0.",
                  "m = ±4, touching at (2, 4) and (−2, 4) respectively.",
                ],
              },
              {
                label: "Calculus method",
                steps: [
                  "Let the tangent touch y = x² at (a, a²); the gradient there is 2a, so the tangent is y = 2ax − a².",
                  "Matching y = mx − 4 gives m = 2a and a² = 4, so a = ±2.",
                  "Hence m = 2a = ±4 — this method also hands you the touching points for free, which is its elegance.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "fun-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "fun-qa-p3-q01",
            question: "g(x) = 2x² − 3x. Work out g(3).",
            modelAnswer: "g(3) = 2(3)² − 3(3) = 2 × 9 − 9 = 18 − 9 = 9.",
            markScheme: ["9", "18 - 9", "2(3)²"],
            guideRef: "Function machines: notation and evaluating",
            difficulty: "warmup",
            commonError:
              "Computing 2(3)² as (2 × 3)² = 36. Squaring happens before multiplying by 2: 2 × 9 = 18.",
          },
          {
            id: "fun-qa-p3-q02",
            question: "f(x) = x + 5 and g(x) = x² − 1. Solve f(x) = g(x).",
            modelAnswer:
              "x + 5 = x² − 1. Rearranging: x² − x − 6 = 0, so (x − 3)(x + 2) = 0, giving x = 3 or x = −2. Check: f(3) = 8 = g(3) and f(−2) = 3 = g(−2).",
            markScheme: ["x = 3 or x = -2", "x² - x - 6 = 0", "factorise"],
            guideRef: "Chaining and reversing: composite and inverse functions",
            difficulty: "core",
            hints: [
              "Set the two expressions equal to each other.",
              "Move everything to one side to get a quadratic equal to zero.",
              "Factorise: two numbers with product −6 and sum −1.",
            ],
            strategy: "Work backwards: 'f(x) = g(x)' is just an equation waiting to be rearranged.",
            commonError:
              "Losing a solution by dividing through or by only checking positive x. A quadratic here should usually give two answers — check both.",
          },
          {
            id: "fun-qa-p3-q03",
            question:
              "The curve y = 2x³ − 3x² − 12x + 5 has two turning points. Find their coordinates and determine the nature of each.",
            modelAnswer:
              "dy/dx = 6x² − 6x − 12 = 6(x² − x − 2) = 6(x − 2)(x + 1). So dy/dx = 0 at x = −1 and x = 2. At x = −1: y = −2 − 3 + 12 + 5 = 12, giving (−1, 12). At x = 2: y = 16 − 12 − 24 + 5 = −15, giving (2, −15). d²y/dx² = 12x − 6. At x = −1: −18 < 0, so (−1, 12) is a maximum. At x = 2: +18 > 0, so (2, −15) is a minimum.",
            markScheme: ["(-1, 12)", "(2, -15)", "6x² - 6x - 12", "maximum", "minimum"],
            guideRef: "Tangents, turning points and curve sketching",
            difficulty: "core",
            hints: [
              "Differentiate and factorise — take out the common factor 6 first.",
              "Substitute each x back into the ORIGINAL curve for the y-coordinates.",
              "Classify with d²y/dx² = 12x − 6, or by testing gradient signs either side.",
            ],
            strategy: "Draw a diagram: a positive cubic rises, turns down, turns up — max first, then min.",
            commonError:
              "Substituting the turning-point x-values into dy/dx (getting 0!) instead of into y when finding the coordinates.",
          },
          {
            id: "fun-qa-p3-q04",
            question:
              "Find the coordinates of the point on the curve y = x² − 8x + 3 where the tangent is parallel to the line y = 2x + 1.",
            modelAnswer:
              "Parallel lines share a gradient, so we need dy/dx = 2. dy/dx = 2x − 8, so 2x − 8 = 2 gives x = 5. Then y = 25 − 40 + 3 = −12. The point is (5, −12).",
            markScheme: ["(5, -12)", "2x - 8 = 2", "gradient 2", "parallel"],
            guideRef: "Tangents, turning points and curve sketching",
            difficulty: "core",
            hints: [
              "What gradient does the line y = 2x + 1 have?",
              "Parallel means the curve's gradient there equals that value: set dy/dx = 2.",
              "Solve for x, then substitute into the curve for y.",
            ],
            strategy: "Work backwards: start from the required gradient and solve for where the curve achieves it.",
            commonError:
              "Setting y = 2x + 1 equal to the curve (finding intersections) instead of matching GRADIENTS — parallel is a statement about dy/dx, not about meeting points.",
          },
          {
            id: "fun-qa-p3-q05",
            question:
              "A ball is thrown vertically upwards so that its height after t seconds is h = 30t − 5t² metres. Find the time at which the ball reaches its maximum height, and find that maximum height.",
            modelAnswer:
              "At maximum height the velocity is zero. dh/dt = 30 − 10t = 0 gives t = 3. Then h = 30(3) − 5(9) = 90 − 45 = 45. Maximum height 45 m, reached after 3 seconds. (d²h/dt² = −10 < 0 confirms a maximum.)",
            markScheme: ["45", "t = 3", "30 - 10t", "dh/dt = 0"],
            guideRef: "Calculus at work: motion and best-possible problems",
            difficulty: "core",
            hints: [
              "What is the ball's velocity at the very top of its flight?",
              "Differentiate h and set dh/dt = 0.",
              "Substitute the time back into h — the question asks for the height too.",
            ],
            strategy: "Exploit symmetry: a parabola peaks midway between its roots — a great way to check your calculus.",
            commonError:
              "Answering t = 3 and stopping — the maximum HEIGHT is h(3) = 45 m, and both parts earn marks.",
            solutions: [
              {
                label: "Calculus method",
                steps: [
                  "dh/dt = 30 − 10t; setting this to zero gives t = 3.",
                  "d²h/dt² = −10 < 0, so t = 3 is a maximum.",
                  "h(3) = 90 − 45 = 45 m.",
                ],
              },
              {
                label: "Symmetry method (no calculus)",
                steps: [
                  "h = 5t(6 − t) is zero at t = 0 and t = 6 — launch and landing.",
                  "A parabola is symmetric, so the peak sits midway: t = 3.",
                  "h(3) = 45 m. Agreeing with the calculus is a powerful self-check in the exam.",
                ],
              },
            ],
          },
          {
            id: "fun-qa-p3-q06",
            question:
              "An open-top box has a square base of side x cm and height h cm, and its volume must be 256 cm³. Show that its external surface area is S = x² + 1024/x, and find the value of x that makes S a minimum. State the minimum surface area.",
            modelAnswer:
              "Volume: x²h = 256, so h = 256/x². Surface area (base plus four sides, no top): S = x² + 4xh = x² + 4x(256/x²) = x² + 1024/x. Differentiate: S = x² + 1024x^-1, so dS/dx = 2x − 1024/x². Setting dS/dx = 0: 2x = 1024/x², so x³ = 512 and x = 8. d²S/dx² = 2 + 2048/x³ > 0 for x > 0, so this is a minimum. Minimum S = 64 + 1024/8 = 64 + 128 = 192 cm². (Then h = 256/64 = 4 cm.)",
            markScheme: ["192", "x = 8", "x² + 1024/x", "2x - 1024/x²", "x³ = 512"],
            guideRef: "Calculus at work: motion and best-possible problems",
            difficulty: "challenge",
            hints: [
              "Use the volume constraint to write h in terms of x: h = 256/x².",
              "Count the faces of an open-top box: one base x², four sides each x by h. Substitute for h to get S in x alone.",
              "Write 1024/x as 1024x^-1 to differentiate, set dS/dx = 0, and solve x³ = 512. Remember to justify 'minimum' and give S itself.",
            ],
            strategy: "Introduce a variable and use the constraint: two unknowns collapse to one, and calculus does the rest.",
            commonError:
              "Including a top face and writing S = 2x² + 4xh. The box is open, so there is exactly one x² term — misreading this changes every subsequent number.",
          },
        ],
      },
    ],
  },
};

export default topic;
