import type { Topic } from "../types";

const topic: Topic = {
  id: "graphs",
  title: "Graphs & Coordinate Geometry",
  subject: "Maths",
  icon: "📈",
  intro:
    "Coordinate geometry turns pictures into algebra and back again. In this topic you will pin down points, measure lines with midpoints and lengths, master gradients and y = mx + c, spot parallel and perpendicular lines instantly, and sketch quadratics, cubics and reciprocals with confidence. You will also read real-life graphs — journeys, speeds and conversions — the way an examiner wants you to: by asking what the gradient and the area actually mean.",

  guide: [
    {
      heading: "Coordinates, midpoints and lengths",
      body:
        "Every point on the plane has an address (x, y): x tells you how far across, y how far up. Once points have addresses, geometry becomes arithmetic.\n\n**Midpoint.** The midpoint of the line segment joining A(x1, y1) and B(x2, y2) is the average of the coordinates:\n\n- Midpoint = ((x1 + x2)/2, (y1 + y2)/2)\n\n**Length.** The distance between A and B comes from Pythagoras. The horizontal gap is (x2 - x1) and the vertical gap is (y2 - y1), so\n\n- AB = √((x2 - x1)² + (y2 - y1)²)\n\nAlways sketch the two points and the right-angled triangle between them — it takes ten seconds and stops sign errors dead. A useful reverse skill: if you know the midpoint M and one end A, the other end is B = (2 times M's coordinates, minus A's), because A and B average to M.",
      discovery: {
        problem:
          "A treasure map says the gold is buried exactly halfway between the old oak at (2, 3) and the well at (8, 11). Without any formula, where would you dig? Try walking there in steps: how far across, how far up?",
        idea:
          "Halfway across from 2 to 8 is 5; halfway up from 3 to 11 is 7. Halfway between two points just means averaging each coordinate separately — that IS the midpoint formula.",
      },
      whyItWorks:
        "Drop a right-angled triangle between A and B: one leg runs horizontally (length x2 - x1), the other vertically (length y2 - y1), and AB is the hypotenuse. Pythagoras gives AB² = (x2 - x1)² + (y2 - y1)². The midpoint works because moving from A to B means adding the full gap in each direction; moving halfway means adding half of each gap, which lands you on the average of the coordinates.",
      strategies: ["draw a diagram", "work backwards"],
      keyPoints: [
        "Midpoint = average the x-coordinates, average the y-coordinates.",
        "Length uses Pythagoras: square the horizontal gap and the vertical gap, add, square root.",
        "Gaps can be negative when you subtract, but squaring removes the sign — the length is always positive.",
        "Given midpoint M and end A, the other end is B = (2mx - x1, 2my - y1).",
      ],
      thinkDeeper:
        "The midpoint splits a segment in the ratio 1:1. Can you adapt the idea to find the point one third of the way from A to B? (Add one third of each gap: A + (1/3)(B - A). This 'start plus fraction of the journey' picture is exactly how vectors describe points on a line.)",
    },
    {
      heading: "Gradient and the straight line y = mx + c",
      body:
        "The **gradient** m measures steepness: how many units the line rises for each unit it runs across.\n\n- m = rise/run = (y2 - y1)/(x2 - x1)\n\nA line sloping up left-to-right has positive gradient; sloping down, negative. Horizontal lines (y = c) have gradient 0; vertical lines (x = k) have undefined gradient.\n\nEvery non-vertical line can be written **y = mx + c**, where m is the gradient and c is the y-intercept — the value of y where the line crosses the y-axis at (0, c).\n\n**Finding an equation:**\n\n- From gradient m and a point (a, b): substitute into y = mx + c to find c, so b = ma + c gives c = b - ma.\n- From two points: first compute m with the gradient formula, then use either point to find c.\n\nWatch out for equations in disguise: 2y = 6x + 5 and 3x + 2y = 12 are straight lines too — rearrange to y = mx + c before reading off the gradient.",
      diagrams: [
        {
          id: "gra-diag-01",
          title: "The line y = 2x + 1",
          svg: `<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of the straight line y equals 2x plus 1, showing the y-intercept at (0, 1) and a gradient triangle going 1 across and 2 up between x equals 2 and x equals 3.">
  <line x1="40" y1="280" x2="380" y2="280" stroke="#64748b" stroke-width="2"/>
  <line x1="60" y1="300" x2="60" y2="10" stroke="#64748b" stroke-width="2"/>
  <text x="368" y="302" font-size="15" fill="#64748b">x</text>
  <text x="42" y="20" font-size="15" fill="#64748b">y</text>
  <text x="48" y="298" font-size="14" fill="#64748b">O</text>
  <line x1="60" y1="250" x2="300" y2="10" stroke="#2563eb" stroke-width="3"/>
  <circle cx="60" cy="250" r="5" fill="#dc2626"/>
  <text x="72" y="262" font-size="15" fill="#dc2626">(0, 1) y-intercept</text>
  <path d="M 180 130 L 240 130 L 240 70" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="5 4"/>
  <text x="196" y="150" font-size="15" fill="#16a34a">1 across</text>
  <text x="248" y="106" font-size="15" fill="#16a34a">2 up</text>
  <text x="230" y="34" font-size="16" font-weight="bold" fill="#2563eb">y = 2x + 1</text>
</svg>`,
          caption:
            "Gradient = rise/run = 2/1 = 2, and the line crosses the y-axis at (0, 1) — so the equation is y = 2x + 1.",
        },
      ],
      discovery: {
        problem:
          "Two ramps: ramp A climbs 3 m over a horizontal distance of 4 m; ramp B climbs 5 m over 7 m. Which is steeper? You cannot just compare the climbs (5 > 3) — the runs are different. What single number would let you compare fairly?",
        idea:
          "Compare climb PER metre of run: A rises 3/4 = 0.75 per metre, B rises 5/7 ≈ 0.71 per metre, so A is steeper. That ratio rise/run is the gradient — one number that captures steepness regardless of how long the ramp is.",
      },
      whyItWorks:
        "Why is the gradient the same wherever you measure it on a straight line? Take any two gradient triangles on the line: they have the same angles (the line makes a fixed angle with the horizontal), so they are similar triangles, and rise/run is the same ratio for both. That constancy is exactly what makes the line straight — and it is why m in y = mx + c is a single well-defined number.",
      strategies: ["draw a diagram", "introduce a variable"],
      keyPoints: [
        "Gradient m = (y2 - y1)/(x2 - x1): subtract coordinates in the SAME order top and bottom.",
        "In y = mx + c, m is the gradient and (0, c) is the y-intercept.",
        "To find an equation, you need a gradient and one point — two points give you both.",
        "Rearrange to y = mx + c before reading the gradient from forms like 3x + 2y = 12.",
      ],
      thinkDeeper:
        "The gradient is a rate of change: on a graph of cost against number of items, m is the cost per item; on distance against time, m is the speed. Whenever you see a gradient, ask 'y-units per x-unit of WHAT?' — that question unlocks every real-life graph on the paper.",
    },
    {
      heading: "Parallel and perpendicular lines",
      body:
        "**Parallel lines** never meet, so they must climb at the same rate: parallel lines have **equal gradients**. The lines y = 3x - 4 and y = 3x + 1 are parallel; they differ only in where they cross the y-axis.\n\n**Perpendicular lines** meet at 90°. If one line has gradient m1 and the other m2, then\n\n- m1 × m2 = -1, i.e. m2 = -1/m1 (the negative reciprocal).\n\nSo a line perpendicular to gradient 2/5 has gradient -5/2: flip the fraction, flip the sign.\n\n**Exam favourites:**\n\n- Find the line through P perpendicular to a given line: take the negative reciprocal gradient, then substitute P to find c.\n- The **perpendicular bisector** of AB: gradient = negative reciprocal of AB's gradient, passing through the midpoint of AB.\n- 'Show these lines are perpendicular': find both gradients and show their product is -1.",
      discovery: {
        problem:
          "Same line, two equations? Kara says the line 2y = 6x + 4 is parallel to y = 3x + 2. Marcus says they cannot be parallel because parallel lines never meet, and these two meet everywhere. Who is right — and what happened?",
        idea:
          "Divide 2y = 6x + 4 by 2 and you get y = 3x + 2 — the SAME line in disguise. Equal gradients make lines parallel only if the intercepts differ; always simplify to y = mx + c before comparing, or a rescaled equation can fool you.",
      },
      whyItWorks:
        "Why does m1 × m2 = -1? Draw the gradient triangle for a line with gradient m = b/a: go a across and b up. Now rotate that whole triangle 90° anticlockwise about its corner. 'Across a, up b' becomes 'across -b, up a' — so the rotated line, which is exactly perpendicular to the original, has gradient a/(-b) = -a/b. Multiply: (b/a) × (-a/b) = -1. The rule is nothing more than a rotated triangle.",
      strategies: ["draw a diagram", "exploit symmetry", "look for invariants"],
      keyPoints: [
        "Parallel: equal gradients (and different intercepts, or the lines coincide).",
        "Perpendicular: gradients multiply to -1; m2 = -1/m1, the negative reciprocal.",
        "Negative reciprocal in practice: flip the fraction AND change the sign (2/3 becomes -3/2).",
        "Perpendicular bisector of AB: negative reciprocal gradient, through the midpoint of AB.",
      ],
      thinkDeeper:
        "The rule m1 × m2 = -1 quietly fails for one pair: a horizontal line (m = 0) is perpendicular to a vertical line, whose gradient is undefined — and 0 times 'undefined' is not -1. The rotation picture still works (rotating 'across a, up 0' gives 'across 0, up a'); it is the algebra that breaks, because vertical lines have no m. Good mathematicians know exactly where their formulas stop working.",
    },
    {
      heading: "Quadratic graphs: roots, intercepts and turning points",
      body:
        "The graph of y = ax² + bx + c is a **parabola**: a U-shape if a > 0 (minimum point), an upside-down U if a < 0 (maximum point). To sketch one, find four features:\n\n- **y-intercept**: put x = 0, giving (0, c).\n- **Roots**: solve ax² + bx + c = 0 (factorise, or use the quadratic formula) — these are the x-axis crossing points.\n- **Line of symmetry**: exactly halfway between the roots, x = -b/(2a).\n- **Turning point**: on the line of symmetry; substitute that x-value to get y. Completing the square gives it directly: y = (x + p)² + q has turning point (-p, q).\n\nFor example, y = x² - 4x + 3 factorises as (x - 1)(x - 3): roots at x = 1 and x = 3, y-intercept (0, 3), symmetry line x = 2, turning point (2, -1).\n\nA **sketch** shows shape and labelled crossing points and turning point; a **plot** means computing a table of values and drawing a smooth curve through them — never join plotted points with straight ruler lines.",
      diagrams: [
        {
          id: "gra-diag-02",
          title: "The parabola y = x² - 4x + 3",
          svg: `<svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parabola y equals x squared minus 4x plus 3, marking roots at (1, 0) and (3, 0), y-intercept at (0, 3), turning point at (2, minus 1), and the dashed line of symmetry x equals 2.">
  <line x1="30" y1="240" x2="380" y2="240" stroke="#64748b" stroke-width="2"/>
  <line x1="60" y1="30" x2="60" y2="320" stroke="#64748b" stroke-width="2"/>
  <text x="368" y="262" font-size="15" fill="#64748b">x</text>
  <text x="42" y="40" font-size="15" fill="#64748b">y</text>
  <line x1="200" y1="60" x2="200" y2="320" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 5"/>
  <text x="208" y="76" font-size="15" fill="#f59e0b">x = 2</text>
  <path d="M 60 120 Q 200 440 340 120" fill="none" stroke="#2563eb" stroke-width="3"/>
  <circle cx="130" cy="240" r="5" fill="#dc2626"/>
  <circle cx="270" cy="240" r="5" fill="#dc2626"/>
  <text x="96" y="226" font-size="15" fill="#dc2626">(1, 0)</text>
  <text x="278" y="226" font-size="15" fill="#dc2626">(3, 0)</text>
  <circle cx="60" cy="120" r="5" fill="#2563eb"/>
  <text x="72" y="116" font-size="15" fill="#2563eb">(0, 3)</text>
  <circle cx="200" cy="280" r="5" fill="#16a34a"/>
  <text x="212" y="298" font-size="15" fill="#16a34a">(2, -1) turning point</text>
  <text x="250" y="120" font-size="16" font-weight="bold" fill="#2563eb">y = x² - 4x + 3</text>
</svg>`,
          caption:
            "Roots at x = 1 and x = 3, y-intercept (0, 3), and the turning point (2, -1) sitting on the line of symmetry x = 2 — halfway between the roots.",
        },
      ],
      discovery: {
        problem:
          "A quadratic graph crosses the x-axis at x = 1 and x = 3. Before doing ANY algebra, guess the x-coordinate of its lowest point. Now try roots 0 and 10, then roots -2 and 6. What is the pattern, and why must it hold?",
        idea:
          "The lowest point is always exactly halfway between the roots (x = 2, x = 5, x = 2 in the three cases), because a parabola is mirror-symmetric: the two crossing points are reflections of each other, so the fold of the mirror — where the turning point lives — is at their average.",
      },
      whyItWorks:
        "Completing the square explains everything: y = x² - 4x + 3 = (x - 2)² - 1. Since a square is never negative, (x - 2)² ≥ 0, with equality only at x = 2 — so the smallest y can be is -1, at (2, -1). The symmetry is visible too: replacing x by 2 + d or 2 - d gives the same y, because both give (±d)² - 1. The turning point and mirror line drop straight out of the algebra.",
      strategies: ["exploit symmetry", "draw a diagram", "consider extremes"],
      keyPoints: [
        "y-intercept: set x = 0. Roots: set y = 0 and solve the quadratic.",
        "The line of symmetry x = -b/(2a) is halfway between the roots.",
        "Turning point: substitute the symmetry x-value, or complete the square — (x + p)² + q turns at (-p, q).",
        "a > 0 gives a U-shape (minimum); a < 0 gives an upside-down U (maximum).",
        "Sketches need labelled intercepts and turning point; plots need a smooth freehand curve.",
      ],
    },
    {
      heading: "Cubics, reciprocals and solving equations with graphs",
      body:
        "You must recognise these shapes instantly:\n\n- **Cubic, y = x³ (or ax³ + ...)**: an S-shaped curve. With positive x³ coefficient it climbs from bottom-left to top-right; negative flips it. A factorised cubic like y = x(x - 2)(x + 2) crosses the x-axis at each root.\n- **Reciprocal, y = k/x**: two separate branches, one in the first quadrant and one in the third (for k > 0), getting ever closer to the axes but never touching them. The axes are **asymptotes**, and x = 0 is not allowed.\n\n**Solving equations graphically.** The x-coordinates of the points where two graphs intersect are the solutions of 'left curve = right curve'. Where y = x² meets y = x + 6, the solutions of x² = x + 6 appear as the crossing points.\n\nThe classic Higher question: you are GIVEN the graph of y = x² - 3x + 1 and asked to solve a DIFFERENT equation, say x² - 5x + 3 = 0, by drawing a line. Strategy: start from the equation you must solve and rearrange until one side is the drawn graph:\n\n- x² - 5x + 3 = 0\n- Add 2x - 2 to both sides: x² - 3x + 1 = 2x - 2\n\nSo draw the line y = 2x - 2 and read off the x-values where it crosses the parabola.",
      discovery: {
        problem:
          "You have carefully drawn the graph of y = x². Your friend needs to solve x² = x + 6 but has no calculator and no patience for the quadratic formula. Using only your parabola and a ruler, how can you hand them both solutions in ten seconds?",
        idea:
          "Draw the straight line y = x + 6 on the same axes. At any crossing point, the y-values agree, so x² = x + 6 there — the x-coordinates of the intersections (x = -2 and x = 3) ARE the solutions. Intersections of graphs are simultaneous solutions made visible.",
      },
      whyItWorks:
        "A point lies on a graph exactly when its coordinates satisfy that equation. So a point on BOTH graphs satisfies both equations at once — which is precisely what a solution of 'curve 1 = curve 2' means. For the 'draw a suitable line' trick, you are running this logic backwards: rearrange the target equation so that one side is the curve you already have; whatever is left on the other side is the line you must draw.",
      strategies: ["work backwards", "draw a diagram", "find a pattern"],
      keyPoints: [
        "y = x³ type: S-shape; y = k/x: two branches with the axes as asymptotes.",
        "Intersection points of two graphs solve the equation 'graph 1 = graph 2'.",
        "To solve a new equation from a drawn graph, rearrange the new equation until the drawn graph's expression appears on one side; draw the other side.",
        "Solutions are the x-coordinates of the crossing points, not the y-coordinates.",
      ],
      thinkDeeper:
        "How many times can a straight line cross y = x³? Try lines through the origin like y = kx: for k > 0 they cross three times, for k ≤ 0 just once (check k = 0). A line can meet a cubic at most 3 times because cubic = line rearranges to a cubic equation, which has at most 3 roots — the geometry and the algebra count the same thing.",
    },
    {
      heading: "Real-life graphs: journeys and conversions",
      body:
        "**Distance-time graphs.** The gradient is the **speed** (distance per unit time).\n\n- Straight sloping segment: steady speed. Steeper = faster.\n- Horizontal segment: stationary (distance not changing).\n- Segment sloping back down: returning towards the start.\n- Average speed for a whole journey = total distance travelled ÷ total time, including any rests.\n\n**Speed-time graphs.** Now the gradient is the **acceleration** (change in speed per unit time), and the **area under the graph is the distance travelled**. A horizontal segment means constant speed (zero acceleration). Split the region under the graph into triangles, rectangles and trapezia to find distance: a trapezium has area (1/2)(a + b)h.\n\n**Conversion graphs.** A straight line through the origin converts one unit to another (km to miles, £ to euros). The gradient is the conversion rate. To convert a value beyond the graph, read off a convenient value and scale up proportionally.",
      diagrams: [
        {
          id: "gra-diag-03",
          title: "A distance-time graph of a bike ride",
          svg: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Distance-time graph: a cyclist rides 12 km away from home in 1 hour, rests for half an hour, then returns home in 1.5 hours.">
  <line x1="40" y1="250" x2="450" y2="250" stroke="#64748b" stroke-width="2"/>
  <line x1="60" y1="270" x2="60" y2="20" stroke="#64748b" stroke-width="2"/>
  <text x="330" y="290" font-size="15" fill="#64748b">time (hours)</text>
  <text x="66" y="34" font-size="15" fill="#64748b">distance from home (km)</text>
  <line x1="180" y1="250" x2="180" y2="256" stroke="#64748b" stroke-width="2"/>
  <line x1="300" y1="250" x2="300" y2="256" stroke="#64748b" stroke-width="2"/>
  <line x1="420" y1="250" x2="420" y2="256" stroke="#64748b" stroke-width="2"/>
  <text x="176" y="272" font-size="14" fill="#64748b">1</text>
  <text x="296" y="272" font-size="14" fill="#64748b">2</text>
  <text x="416" y="272" font-size="14" fill="#64748b">3</text>
  <text x="46" y="272" font-size="14" fill="#64748b">0</text>
  <line x1="54" y1="50" x2="60" y2="50" stroke="#64748b" stroke-width="2"/>
  <text x="30" y="55" font-size="14" fill="#64748b">12</text>
  <line x1="60" y1="250" x2="180" y2="50" stroke="#2563eb" stroke-width="3"/>
  <line x1="180" y1="50" x2="240" y2="50" stroke="#f59e0b" stroke-width="3"/>
  <line x1="240" y1="50" x2="420" y2="250" stroke="#16a34a" stroke-width="3"/>
  <text x="74" y="130" font-size="15" fill="#2563eb">A: 12 km/h</text>
  <text x="172" y="42" font-size="15" fill="#f59e0b">B: resting</text>
  <text x="310" y="130" font-size="15" fill="#16a34a">C: 8 km/h</text>
</svg>`,
          caption:
            "Segment A: 12 km in 1 hour, so gradient (speed) = 12 km/h. Segment B is horizontal — resting. Segment C: 12 km home in 1.5 hours, speed 8 km/h. Average speed overall = 24 km ÷ 3 h = 8 km/h.",
        },
      ],
      discovery: {
        problem:
          "On a distance-time graph, a cyclist's line is twice as steep in the first hour as in the second. On a speed-time graph, a car's line is twice as steep in the first hour as in the second. Do those two 'steepnesses' mean the same thing? What is each gradient measuring?",
        idea:
          "Gradient always means 'y per x'. Distance per time is speed; speed per time is acceleration. Same picture, different axes, completely different physics — always read the axis labels before interpreting any gradient.",
      },
      whyItWorks:
        "Why is the area under a speed-time graph the distance? For constant speed, distance = speed × time — a rectangle of height 'speed' and width 'time'. Any speed-time graph can be sliced into thin near-rectangles, and adding their areas adds up all the little distances. Triangles and trapezia are just the tidy cases of this slicing.",
      strategies: ["draw a diagram", "try small cases"],
      keyPoints: [
        "Distance-time: gradient = speed; horizontal = stationary.",
        "Speed-time: gradient = acceleration; AREA under the graph = distance travelled.",
        "Average speed = total distance ÷ total time (rests included).",
        "Convert minutes to hours before finding speeds in km/h: 45 min = 0.75 h.",
        "Conversion graphs: straight line through the origin; the gradient is the exchange rate.",
      ],
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Midpoint of A(x1, y1) and B(x2, y2)?",
        back: "((x1 + x2)/2, (y1 + y2)/2) — average each coordinate.",
      },
      {
        front: "Length of the segment from A(x1, y1) to B(x2, y2)?",
        back: "√((x2 - x1)² + (y2 - y1)²) — Pythagoras on the horizontal and vertical gaps.",
      },
      {
        front: "Formula for gradient through two points?",
        back: "m = (y2 - y1)/(x2 - x1): change in y over change in x, subtracting in the same order.",
      },
      {
        front: "In y = mx + c, what are m and c?",
        back: "m is the gradient; c is the y-intercept, where the line crosses the y-axis at (0, c).",
      },
      {
        front: "Condition for two lines to be parallel?",
        back: "Equal gradients (with different y-intercepts, otherwise they are the same line).",
      },
      {
        front: "Condition for two lines to be perpendicular?",
        back: "m1 × m2 = -1: the gradients are negative reciprocals (flip the fraction, flip the sign).",
      },
      {
        front: "Gradient perpendicular to m = 3/4?",
        back: "-4/3. Check: (3/4) × (-4/3) = -1.",
      },
      {
        front: "Where is the turning point of a parabola relative to its roots?",
        back: "On the line of symmetry, exactly halfway between the roots: x = -b/(2a).",
      },
      {
        front: "Turning point of y = (x + p)² + q?",
        back: "(-p, q). The square is smallest (zero) when x = -p.",
      },
      {
        front: "Shape of y = k/x for k > 0?",
        back: "Two branches in the first and third quadrants; the x- and y-axes are asymptotes it never touches.",
      },
      {
        front: "On a distance-time graph, what do gradient and a horizontal line mean?",
        back: "Gradient = speed; a horizontal segment means stationary.",
      },
      {
        front: "On a speed-time graph, what do gradient and area mean?",
        back: "Gradient = acceleration; area under the graph = distance travelled.",
      },
      {
        front: "How do you solve f(x) = g(x) graphically?",
        back: "Draw both graphs; the x-coordinates of the intersection points are the solutions.",
      },
      {
        front: "Perpendicular bisector of AB — what two facts define it?",
        back: "It passes through the midpoint of AB and its gradient is the negative reciprocal of AB's gradient.",
      },
    ],
    keyFacts: [
      "Midpoint = ((x1 + x2)/2, (y1 + y2)/2); length AB = √((x2 - x1)² + (y2 - y1)²).",
      "Gradient m = rise/run = (y2 - y1)/(x2 - x1); horizontal lines have m = 0, vertical lines have undefined gradient.",
      "y = mx + c: gradient m, y-intercept (0, c). Rearrange other forms (e.g. 3x + 2y = 12) before reading m.",
      "Parallel lines: equal gradients. Perpendicular lines: m1 × m2 = -1.",
      "Parabola y = ax² + bx + c: U-shape if a > 0; line of symmetry x = -b/(2a); turning point on that line.",
      "Roots are where the graph crosses the x-axis (y = 0); the y-intercept is (0, c).",
      "y = x³ is S-shaped; y = k/x has two branches with the axes as asymptotes.",
      "Intersections of two graphs solve 'graph 1 = graph 2'; read off the x-coordinates.",
      "Distance-time: gradient = speed. Speed-time: gradient = acceleration, area = distance.",
      "Average speed = total distance ÷ total time, including stops.",
    ],
    formulaSheet: [
      {
        name: "Midpoint",
        formula: "M = ((x1 + x2)/2, (y1 + y2)/2)",
        note: "Average each coordinate.",
      },
      {
        name: "Length of a segment",
        formula: "AB = √((x2 - x1)² + (y2 - y1)²)",
        note: "Pythagoras on the coordinate gaps.",
      },
      {
        name: "Gradient",
        formula: "m = (y2 - y1)/(x2 - x1)",
        note: "Rise over run; subtract in the same order.",
      },
      {
        name: "Straight line",
        formula: "y = mx + c",
        note: "m = gradient, c = y-intercept.",
      },
      {
        name: "Perpendicular gradients",
        formula: "m1 × m2 = -1",
        note: "Negative reciprocals: m2 = -1/m1.",
      },
      {
        name: "Line of symmetry of a parabola",
        formula: "x = -b/(2a)",
        note: "For y = ax² + bx + c; the turning point lies on it.",
      },
      {
        name: "Completed square form",
        formula: "y = (x + p)² + q",
        note: "Turning point at (-p, q).",
      },
      {
        name: "Speed from a distance-time graph",
        formula: "speed = gradient = distance ÷ time",
        note: "Convert minutes to hours for km/h.",
      },
      {
        name: "Distance from a speed-time graph",
        formula: "distance = area under the graph",
        note: "Trapezium area = (1/2)(a + b)h.",
      },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "gra-quiz-mcq-01",
        question: "What is the midpoint of the line segment joining A(2, 3) and B(8, 11)?",
        options: ["(5, 7)", "(10, 14)", "(3, 4)", "(6, 8)"],
        answerIndex: 0,
        explanation:
          "Average each coordinate: x = (2 + 8)/2 = 5 and y = (3 + 11)/2 = 7, so the midpoint is (5, 7). (10, 14) is the sum without halving, (3, 4) is half the DIFFERENCE of the coordinates, and (6, 8) is the full difference.",
        guideRef: "Coordinates, midpoints and lengths",
        difficulty: "warmup",
      },
      {
        id: "gra-quiz-mcq-02",
        question: "What is the gradient of the line through (1, 2) and (4, 11)?",
        options: ["1/3", "3", "-3", "9"],
        answerIndex: 1,
        explanation:
          "m = (11 - 2)/(4 - 1) = 9/3 = 3. Putting the x-change on top gives the reciprocal 1/3; subtracting in different orders top and bottom gives -3; 9 is just the rise without dividing by the run.",
        guideRef: "Gradient and the straight line y = mx + c",
        difficulty: "warmup",
      },
      {
        id: "gra-quiz-mcq-03",
        question: "What is the length of the line segment from (-1, 2) to (5, 10)?",
        options: ["10", "14", "100", "8"],
        answerIndex: 0,
        explanation:
          "The gaps are 5 - (-1) = 6 across and 10 - 2 = 8 up, so length = √(6² + 8²) = √100 = 10. Adding the gaps gives 14; forgetting the square root gives 100; 8 is only the vertical gap.",
        guideRef: "Coordinates, midpoints and lengths",
        difficulty: "core",
        hints: [
          "Sketch the two points and draw the right-angled triangle between them.",
          "Find the horizontal gap and the vertical gap — careful with the -1.",
          "Apply Pythagoras: length = √(gap in x squared + gap in y squared).",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "gra-quiz-mcq-04",
        question: "A line has gradient -2 and passes through (3, 1). What is its equation?",
        options: ["y = -2x + 7", "y = -2x - 5", "y = -2x + 5", "y = 2x - 5"],
        answerIndex: 0,
        explanation:
          "Substitute into y = mx + c: 1 = -2(3) + c, so c = 1 + 6 = 7 and y = -2x + 7. Choosing c = -5 comes from computing 1 - 6 instead of 1 + 6; y = 2x - 5 has the wrong gradient entirely.",
        guideRef: "Gradient and the straight line y = mx + c",
        difficulty: "core",
        hints: [
          "You already know m; only c is missing.",
          "The point (3, 1) must satisfy the equation — substitute x = 3, y = 1.",
          "Solve 1 = -6 + c for c.",
        ],
        strategy: "introduce a variable",
      },
      {
        id: "gra-quiz-mcq-05",
        question: "Which line is parallel to y = 3x - 4?",
        options: ["y = -3x - 4", "y = (1/3)x - 4", "y = 3x + 1", "y = -(1/3)x + 2"],
        answerIndex: 2,
        explanation:
          "Parallel lines have equal gradients, so we need gradient 3: y = 3x + 1. Matching the intercept -4 is irrelevant; -1/3 would be the PERPENDICULAR gradient, and -3 or 1/3 are sign/reciprocal slips.",
        guideRef: "Parallel and perpendicular lines",
        difficulty: "core",
        hints: [
          "What single number decides whether lines are parallel?",
          "Compare gradients, not y-intercepts.",
          "You need another line with gradient exactly 3.",
        ],
        strategy: "look for invariants",
      },
      {
        id: "gra-quiz-mcq-06",
        question: "A line is perpendicular to y = (2/5)x + 1. What is its gradient?",
        options: ["-5/2", "5/2", "-2/5", "2/5"],
        answerIndex: 0,
        explanation:
          "Perpendicular gradients multiply to -1, so m = -1 ÷ (2/5) = -5/2. Check: (2/5) × (-5/2) = -1. Flipping without the sign change gives 5/2; changing only the sign gives -2/5 — you must do both.",
        guideRef: "Parallel and perpendicular lines",
        difficulty: "core",
        hints: [
          "Use m1 × m2 = -1.",
          "Take the negative reciprocal of 2/5.",
          "Flip the fraction AND flip the sign.",
        ],
        strategy: "look for invariants",
      },
      {
        id: "gra-quiz-mcq-07",
        question: "What are the coordinates of the turning point of y = x² - 6x + 5?",
        options: ["(3, -4)", "(-3, -4)", "(3, 4)", "(6, 5)"],
        answerIndex: 0,
        explanation:
          "The line of symmetry is x = -b/(2a) = 6/2 = 3, and y = 3² - 6(3) + 5 = 9 - 18 + 5 = -4, so the turning point is (3, -4). (-3, -4) has a sign error in -b/(2a); (3, 4) drops the sign of y; (6, 5) just reuses coefficients.",
        guideRef: "Quadratic graphs: roots, intercepts and turning points",
        difficulty: "core",
        hints: [
          "The turning point sits on the line of symmetry.",
          "Symmetry line: x = -b/(2a) — or halfway between the roots x = 1 and x = 5.",
          "Substitute that x-value back into the equation to find y.",
        ],
        strategy: "exploit symmetry",
      },
      {
        id: "gra-quiz-mcq-08",
        question: "Which best describes the graph of y = 1/x?",
        options: [
          "A U-shaped curve with a minimum point",
          "An S-shaped curve through the origin",
          "A straight line through the origin",
          "Two separate branches, in the first and third quadrants, never touching the axes",
        ],
        answerIndex: 3,
        explanation:
          "y = 1/x is the reciprocal graph: two branches in the first and third quadrants, with the axes as asymptotes (x = 0 is not allowed). The U-shape is a quadratic, the S-shape is a cubic, and it is certainly not straight.",
        guideRef: "Cubics, reciprocals and solving equations with graphs",
        difficulty: "warmup",
      },
      {
        id: "gra-quiz-mcq-09",
        question: "At which point do the lines y = 2x + 1 and y = x + 4 intersect?",
        options: ["(3, 5)", "(3, 7)", "(5, 3)", "(-3, 7)"],
        answerIndex: 1,
        explanation:
          "At the intersection the y-values agree: 2x + 1 = x + 4 gives x = 3, then y = 2(3) + 1 = 7, so (3, 7). (3, 5) forgets to substitute back correctly; (5, 3) swaps the coordinates.",
        guideRef: "Cubics, reciprocals and solving equations with graphs",
        difficulty: "core",
        hints: [
          "At an intersection, both equations give the same y for the same x.",
          "Set 2x + 1 equal to x + 4 and solve for x.",
          "Substitute your x back into either equation to find y.",
        ],
        strategy: "introduce a variable",
      },
      {
        id: "gra-quiz-mcq-10",
        question:
          "Line L passes through (2, 5) and is perpendicular to y = 2x - 3. Where does L cross the x-axis?",
        options: ["(12, 0)", "(6, 0)", "(-8, 0)", "(2, 0)"],
        answerIndex: 0,
        explanation:
          "L has gradient -1/2 (negative reciprocal of 2). Through (2, 5): 5 = -1/2 × 2 + c gives c = 6, so y = -(1/2)x + 6. Setting y = 0 gives x = 12: the point (12, 0). (6, 0) confuses the intercept c = 6 with the x-intercept; (-8, 0) comes from using gradient +1/2.",
        guideRef: "Parallel and perpendicular lines",
        difficulty: "challenge",
        hints: [
          "First find L's gradient using m1 × m2 = -1.",
          "Use the point (2, 5) to find c in y = mx + c.",
          "Crossing the x-axis means y = 0 — solve for x.",
        ],
        strategy: "work backwards",
      },
    ],
    qa: [
      {
        id: "gra-quiz-qa-01",
        question:
          "A is the point (1, 3) and B is the point (7, 11). Find (a) the midpoint of AB, (b) the length of AB.",
        modelAnswer:
          "(a) Midpoint = ((1 + 7)/2, (3 + 11)/2) = (4, 7).\n(b) Horizontal gap = 7 - 1 = 6; vertical gap = 11 - 3 = 8. By Pythagoras, AB = √(6² + 8²) = √(36 + 64) = √100 = 10.",
        markScheme: ["(4, 7)", "10", "Pythagoras", "36 + 64", "average"],
        commonError:
          "Adding the coordinates without halving (getting (8, 14)), or adding the gaps 6 + 8 = 14 instead of using Pythagoras for the length.",
        guideRef: "Coordinates, midpoints and lengths",
        difficulty: "warmup",
      },
      {
        id: "gra-quiz-qa-02",
        question: "Find the equation of the straight line that passes through (2, 3) and (6, 11).",
        modelAnswer:
          "Gradient m = (11 - 3)/(6 - 2) = 8/4 = 2. Substitute (2, 3) into y = 2x + c: 3 = 4 + c, so c = -1. The equation is y = 2x - 1. Check with (6, 11): 2(6) - 1 = 11 ✓.",
        markScheme: ["y = 2x - 1", "gradient", "2", "c = -1", "substitute"],
        commonError:
          "Computing the gradient as (x2 - x1)/(y2 - y1) = 1/2, or subtracting the coordinates in different orders top and bottom and getting -2.",
        guideRef: "Gradient and the straight line y = mx + c",
        difficulty: "core",
        hints: [
          "You need two things: the gradient and the intercept.",
          "Gradient first: (change in y)/(change in x) between the two points.",
          "Then substitute either point into y = mx + c to find c.",
        ],
        strategy: "introduce a variable",
        solutions: [
          {
            label: "Gradient-then-intercept (the standard method)",
            steps: [
              "m = (11 - 3)/(6 - 2) = 8/4 = 2.",
              "Use (2, 3): 3 = 2(2) + c, so c = -1.",
              "Equation: y = 2x - 1; check (6, 11): 12 - 1 = 11 ✓.",
            ],
          },
          {
            label: "Simultaneous equations (both unknowns at once)",
            steps: [
              "Both points satisfy y = mx + c: 3 = 2m + c and 11 = 6m + c.",
              "Subtract: 8 = 4m, so m = 2; then c = 3 - 4 = -1.",
              "Equation: y = 2x - 1. Elegant note: subtracting the equations IS the gradient formula in disguise — the c's cancel, leaving change in y over change in x.",
            ],
          },
        ],
      },
      {
        id: "gra-quiz-qa-03",
        question:
          "Line L is perpendicular to y = 4x - 1 and passes through the point (8, 2). Find the equation of L.",
        modelAnswer:
          "The gradient of y = 4x - 1 is 4, so L has gradient -1/4 (since 4 × (-1/4) = -1). Substitute (8, 2) into y = -(1/4)x + c: 2 = -2 + c, so c = 4. The equation of L is y = -(1/4)x + 4.",
        markScheme: ["y = -(1/4)x + 4", "-1/4", "negative reciprocal", "c = 4"],
        commonError:
          "Using gradient 1/4 (flipping without the sign change) or -4 (changing sign without flipping). The perpendicular gradient must do both.",
        guideRef: "Parallel and perpendicular lines",
        difficulty: "core",
        hints: [
          "What must the two gradients multiply to?",
          "Take the negative reciprocal of 4.",
          "Substitute (8, 2) to find the intercept c.",
        ],
        strategy: "look for invariants",
      },
      {
        id: "gra-quiz-qa-04",
        question:
          "Sketch the graph of y = x² - 4x - 5, labelling the points where it crosses both axes and the coordinates of the turning point.",
        modelAnswer:
          "Factorise: x² - 4x - 5 = (x - 5)(x + 1), so the roots are x = 5 and x = -1: the curve crosses the x-axis at (5, 0) and (-1, 0). At x = 0, y = -5, so the y-intercept is (0, -5). The line of symmetry is halfway between the roots: x = 2. At x = 2, y = 4 - 8 - 5 = -9, so the turning point (a minimum, since the x² coefficient is positive) is (2, -9). The sketch is a U-shaped parabola through those four labelled points.",
        markScheme: ["(2, -9)", "(5, 0)", "(-1, 0)", "(0, -5)", "factorise", "symmetry"],
        commonError:
          "Reading the roots off the factorisation with the wrong signs — (x - 5)(x + 1) gives roots 5 and -1, not -5 and 1.",
        guideRef: "Quadratic graphs: roots, intercepts and turning points",
        difficulty: "core",
        hints: [
          "Start by factorising to find where y = 0.",
          "The y-intercept is the constant term's point: set x = 0.",
          "The turning point sits halfway between the roots — substitute that x-value.",
        ],
        strategy: "exploit symmetry",
      },
      {
        id: "gra-quiz-qa-05",
        question:
          "Priya cycles 12 km from home to a lake in 45 minutes, rests for 15 minutes, then cycles home in 1 hour. (a) Find her speed on the way to the lake, in km/h. (b) Find her average speed for the whole journey, in km/h.",
        modelAnswer:
          "(a) 45 minutes = 0.75 hours, so speed = 12 ÷ 0.75 = 16 km/h.\n(b) Total distance = 12 + 12 = 24 km. Total time = 0.75 + 0.25 + 1 = 2 hours (the rest counts). Average speed = 24 ÷ 2 = 12 km/h.",
        markScheme: ["16 km/h", "12 km/h", "0.75", "total distance 24", "total time 2"],
        commonError:
          "Leaving the rest out of the total time, or dividing 12 by 45 without converting minutes to hours.",
        guideRef: "Real-life graphs: journeys and conversions",
        difficulty: "core",
        hints: [
          "Convert every time to hours before dividing.",
          "45 minutes is 3/4 of an hour.",
          "Average speed uses TOTAL distance over TOTAL time — including the rest.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "gra-quiz-qa-06",
        question:
          "A is (1, 2), B is (5, 10) and C is (7, k). Given that angle ABC = 90°, find the value of k.",
        modelAnswer:
          "Gradient of AB = (10 - 2)/(5 - 1) = 8/4 = 2. Since angle ABC = 90°, BC is perpendicular to AB, so BC has gradient -1/2. Gradient of BC: (k - 10)/(7 - 5) = (k - 10)/2. Set (k - 10)/2 = -1/2, so k - 10 = -1 and k = 9.",
        markScheme: ["k = 9", "gradient 2", "-1/2", "perpendicular", "m1m2 = -1"],
        commonError:
          "Making BC parallel to AB (using gradient 2, giving k = 14) instead of perpendicular, or flipping the reciprocal without the sign change.",
        guideRef: "Parallel and perpendicular lines",
        difficulty: "challenge",
        hints: [
          "The right angle is at B — which two segments must be perpendicular?",
          "Find the gradient of AB first.",
          "Write the gradient of BC in terms of k and set the product of the gradients to -1.",
        ],
        strategy: "introduce a variable",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "gra-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "gra-mcq-p1-q01",
            question: "Which of these points lies on the line y = 3x - 2?",
            options: ["(1, 5)", "(2, 4)", "(0, 2)", "(3, 6)"],
            answerIndex: 1,
            explanation:
              "Test each point: 3(2) - 2 = 4 ✓, so (2, 4) lies on the line. For (1, 5): 3 - 2 = 1 ≠ 5. For (0, 2): the intercept is -2, not 2. For (3, 6): 9 - 2 = 7 ≠ 6.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "warmup",
          },
          {
            id: "gra-mcq-p1-q02",
            question: "What is the midpoint of (-3, 4) and (5, -2)?",
            options: ["(2, 2)", "(4, -3)", "(1, 1)", "(8, -6)"],
            answerIndex: 2,
            explanation:
              "x = (-3 + 5)/2 = 1 and y = (4 + (-2))/2 = 1, so the midpoint is (1, 1). (2, 2) is the sum without halving; (8, -6) is the difference of the coordinates; (4, -3) is half of that difference.",
            guideRef: "Coordinates, midpoints and lengths",
            difficulty: "warmup",
          },
          {
            id: "gra-mcq-p1-q03",
            question: "What is the gradient of the line 2y = 6x + 5?",
            options: ["6", "3", "2", "5/2"],
            answerIndex: 1,
            explanation:
              "Divide by 2: y = 3x + 5/2, so the gradient is 3. Reading 6 straight from 6x ignores the 2 in front of y; 5/2 is the intercept, not the gradient.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "core",
            hints: [
              "The gradient can only be read from the form y = mx + c.",
              "Divide the whole equation by 2 first.",
              "Then m is the coefficient of x.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "gra-mcq-p1-q04",
            question: "What is the equation of the line through (0, -3) and (4, 5)?",
            options: ["y = 2x - 3", "y = 2x + 3", "y = (1/2)x - 3", "y = 8x - 3"],
            answerIndex: 0,
            explanation:
              "Gradient = (5 - (-3))/(4 - 0) = 8/4 = 2, and (0, -3) is on the y-axis so c = -3: y = 2x - 3. The 1/2 option inverts the gradient; 8 forgets to divide by the run; +3 has the intercept's sign wrong.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "core",
            hints: [
              "One of the points hands you c for free — which one?",
              "A point with x = 0 IS the y-intercept.",
              "Compute the gradient between the two points, watching the double negative.",
            ],
            strategy: "work backwards",
          },
          {
            id: "gra-mcq-p1-q05",
            question: "Which line is perpendicular to y = -(3/4)x + 2?",
            options: ["y = (3/4)x - 1", "y = -(4/3)x + 5", "y = (4/3)x - 1", "y = -(3/4)x - 2"],
            answerIndex: 2,
            explanation:
              "The perpendicular gradient is the negative reciprocal of -3/4, which is 4/3 (check: -3/4 × 4/3 = -1). y = (3/4)x - 1 only changes the sign; y = -(4/3)x + 5 only flips the fraction; the last option is parallel.",
            guideRef: "Parallel and perpendicular lines",
            difficulty: "core",
            hints: [
              "Perpendicular gradients multiply to -1.",
              "Negative reciprocal of a negative gradient is positive.",
              "Flip 3/4 to 4/3 and flip the sign from - to +.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "gra-mcq-p1-q06",
            question: "The graph of y = x² - 2x - 8 crosses the x-axis at which values of x?",
            options: ["x = 4 and x = -2", "x = -4 and x = 2", "x = 2 and x = 8", "x = 1 and x = -8"],
            answerIndex: 0,
            explanation:
              "Factorise: x² - 2x - 8 = (x - 4)(x + 2) = 0, so x = 4 or x = -2 (check: 4 × (-2) = -8 and 4 + (-2) = 2 ✓). The option x = -4, 2 has both signs backwards.",
            guideRef: "Quadratic graphs: roots, intercepts and turning points",
            difficulty: "core",
            hints: [
              "Crossing the x-axis means y = 0.",
              "Look for two numbers multiplying to -8 and adding to -2.",
              "Each bracket equal to zero gives one root — mind the signs.",
            ],
            strategy: "work backwards",
          },
          {
            id: "gra-mcq-p1-q07",
            question: "What is the equation of the line of symmetry of y = x² + 6x + 1?",
            options: ["x = 3", "x = -3", "x = -6", "y = -3"],
            answerIndex: 1,
            explanation:
              "The line of symmetry is x = -b/(2a) = -6/2 = -3. Forgetting the minus gives x = 3; forgetting to halve gives x = -6; and a line of symmetry of a parabola is vertical, so it is 'x =', never 'y ='.",
            guideRef: "Quadratic graphs: roots, intercepts and turning points",
            difficulty: "core",
            hints: [
              "Use x = -b/(2a).",
              "Here a = 1 and b = 6.",
              "Mind the minus sign in the formula.",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "gra-mcq-p1-q08",
            question:
              "A speed-time graph shows a train's speed increasing uniformly from 4 m/s to 10 m/s over 12 seconds. How far does it travel in those 12 seconds?",
            options: ["120 m", "84 m", "48 m", "72 m"],
            answerIndex: 1,
            explanation:
              "Distance is the area under a speed-time graph — here a trapezium: (1/2)(4 + 10)(12) = 84 m. 120 m uses the top speed for the whole time; 48 m uses only the starting speed; 72 m uses only the halfway rectangle at 6 m/s... in fact 72 comes from (1/2)(12)(12), muddling the parallel sides.",
            guideRef: "Real-life graphs: journeys and conversions",
            difficulty: "challenge",
            hints: [
              "On a speed-time graph, distance is not read off an axis — where does it hide?",
              "Sketch the graph: it is a trapezium with parallel sides 4 and 10.",
              "Trapezium area = half the sum of the parallel sides, times the width.",
            ],
            strategy: "draw a diagram",
          },
        ],
      },
      {
        id: "gra-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "gra-mcq-p2-q01",
            question: "On a distance-time graph, what does the gradient represent?",
            options: ["Acceleration", "Distance", "Speed", "Time"],
            answerIndex: 2,
            explanation:
              "Gradient = change in distance ÷ change in time = speed. Acceleration is the gradient of a SPEED-time graph — a classic mix-up.",
            guideRef: "Real-life graphs: journeys and conversions",
            difficulty: "warmup",
          },
          {
            id: "gra-mcq-p2-q02",
            question: "Which best describes the shape of the graph of y = x³?",
            options: [
              "An S-shaped curve climbing from bottom-left to top-right through the origin",
              "A U-shaped curve with its minimum at the origin",
              "Two branches in opposite quadrants",
              "A straight line through the origin with gradient 3",
            ],
            answerIndex: 0,
            explanation:
              "y = x³ is the S-shaped cubic through the origin: negative x gives negative y, positive gives positive. The U-shape is y = x², the two branches are y = 1/x, and y = 3x is the straight line.",
            guideRef: "Cubics, reciprocals and solving equations with graphs",
            difficulty: "warmup",
          },
          {
            id: "gra-mcq-p2-q03",
            question: "What is the length of the segment joining (2, -1) and (7, 11)?",
            options: ["17", "13", "√119", "60"],
            answerIndex: 1,
            explanation:
              "Gaps: 7 - 2 = 5 and 11 - (-1) = 12, so length = √(5² + 12²) = √169 = 13 (the 5-12-13 triangle). 17 adds the gaps; 60 multiplies them; √119 comes from subtracting the squares instead of adding.",
            guideRef: "Coordinates, midpoints and lengths",
            difficulty: "core",
            hints: [
              "Find the horizontal and vertical gaps first — careful with the -1.",
              "The gaps are 5 and 12.",
              "Pythagoras: √(5² + 12²). Do you know this famous triangle?",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "gra-mcq-p2-q04",
            question: "The line y = mx + 4 passes through the point (6, 1). What is the value of m?",
            options: ["1/2", "-1/2", "-2", "3"],
            answerIndex: 1,
            explanation:
              "Substitute: 1 = 6m + 4, so 6m = -3 and m = -1/2. The option 1/2 drops the sign; -2 solves 6m = -3 as m = 3 - ... incorrectly by dividing the wrong way; 3 confuses m with the difference 4 - 1.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "core",
            hints: [
              "The point must satisfy the equation.",
              "Substitute x = 6 and y = 1, leaving m as the unknown.",
              "Solve 1 = 6m + 4.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "gra-mcq-p2-q05",
            question: "Which pair of lines is parallel?",
            options: [
              "y = 2x and y = -2x",
              "y = 2x - 5 and 2y = 4x + 6",
              "y = 3x + 1 and y = x + 3",
              "y = (1/2)x and y = 2x",
            ],
            answerIndex: 1,
            explanation:
              "Rearranging 2y = 4x + 6 gives y = 2x + 3, which has the same gradient (2) as y = 2x - 5 — parallel. Gradients 2 and -2 are reflections, not parallel; 3 and 1 differ; 1/2 and 2 are reciprocals (and not negative reciprocals either).",
            guideRef: "Parallel and perpendicular lines",
            difficulty: "core",
            hints: [
              "Get every equation into y = mx + c form first.",
              "One option needs dividing by 2 before you can read its gradient.",
              "Parallel means equal gradients, whatever the intercepts.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "gra-mcq-p2-q06",
            question: "What is the minimum value of y on the graph of y = x² - 4x + 7?",
            options: ["7", "3", "-2", "2"],
            answerIndex: 1,
            explanation:
              "Complete the square: x² - 4x + 7 = (x - 2)² + 3. Since (x - 2)² ≥ 0, the minimum value of y is 3, at x = 2. Note the question asks for the minimum VALUE (the y), not where it happens (x = 2), and 7 is only the y-intercept.",
            guideRef: "Quadratic graphs: roots, intercepts and turning points",
            difficulty: "core",
            hints: [
              "Try completing the square.",
              "x² - 4x = (x - 2)² - 4.",
              "The square part is at least 0 — what is left over when it equals 0?",
            ],
            strategy: "consider extremes",
          },
          {
            id: "gra-mcq-p2-q07",
            question:
              "A conversion graph is a straight line through the origin passing through the point (40 km, 25 miles). How many miles is 64 km?",
            options: ["40 miles", "49 miles", "102.4 miles", "32 miles"],
            answerIndex: 0,
            explanation:
              "The rate is 25/40 = 0.625 miles per km, so 64 km = 64 × 0.625 = 40 miles. 102.4 divides the wrong way (64 × 40/25); 32 halves 64 instead of using the true rate.",
            guideRef: "Real-life graphs: journeys and conversions",
            difficulty: "core",
            hints: [
              "The gradient of the line is the conversion rate.",
              "Find miles per ONE km from the point (40, 25).",
              "Then scale: multiply that rate by 64.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "gra-mcq-p2-q08",
            question:
              "The graph of y = x² - 3x + 1 has been drawn. Which straight line should be drawn on the same axes to solve x² - 5x + 3 = 0?",
            options: ["y = 2x - 2", "y = -2x + 2", "y = 2x + 2", "y = 5x - 3"],
            answerIndex: 0,
            explanation:
              "Rearrange the target so the drawn curve appears: x² - 5x + 3 = 0 becomes x² - 3x + 1 = 2x - 2 (add 2x - 2 to both sides). So draw y = 2x - 2 and read off the intersections. The other options come from sign slips in that rearrangement — always check: (x² - 3x + 1) - (2x - 2) = x² - 5x + 3 ✓.",
            guideRef: "Cubics, reciprocals and solving equations with graphs",
            difficulty: "challenge",
            hints: [
              "You cannot redraw the curve — you must reuse it.",
              "Rearrange x² - 5x + 3 = 0 so that x² - 3x + 1 is alone on one side.",
              "Subtract the target equation from the curve's expression: what line is left over?",
            ],
            strategy: "work backwards",
          },
        ],
      },
      {
        id: "gra-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "gra-mcq-p3-q01",
            question: "Where does the line y = 5 - 2x cross the y-axis?",
            options: ["(0, 5)", "(5, 0)", "(0, -2)", "(2.5, 0)"],
            answerIndex: 0,
            explanation:
              "On the y-axis, x = 0, so y = 5: the point (0, 5). (2.5, 0) is where it crosses the x-axis; (0, -2) confuses the gradient -2 with the intercept.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "warmup",
          },
          {
            id: "gra-mcq-p3-q02",
            question: "Which equation has a reciprocal graph?",
            options: ["y = 3x", "y = 3/x", "y = x² + 3", "y = x³"],
            answerIndex: 1,
            explanation:
              "y = 3/x is of the form y = k/x — the reciprocal graph with two branches and the axes as asymptotes. y = 3x is a line, y = x² + 3 a parabola, y = x³ a cubic.",
            guideRef: "Cubics, reciprocals and solving equations with graphs",
            difficulty: "warmup",
          },
          {
            id: "gra-mcq-p3-q03",
            question:
              "The graphs of y = x² - 3x and y = x + 5 intersect where x satisfies which equation?",
            options: [
              "x² - 4x - 5 = 0",
              "x² - 2x + 5 = 0",
              "x² - 3x - 5 = 0",
              "x² - 4x + 5 = 0",
            ],
            answerIndex: 0,
            explanation:
              "At an intersection the y-values are equal: x² - 3x = x + 5. Bring everything to one side: x² - 4x - 5 = 0. The other options mishandle either the -3x - x step or the sign of 5.",
            guideRef: "Cubics, reciprocals and solving equations with graphs",
            difficulty: "core",
            hints: [
              "Intersection means the two expressions for y are equal.",
              "Set x² - 3x equal to x + 5.",
              "Move every term to the left-hand side, combining the x terms.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "gra-mcq-p3-q04",
            question: "The midpoint of AB is (3, 5) and A is (-1, 2). What are the coordinates of B?",
            options: ["(1, 3.5)", "(4, 3)", "(7, 8)", "(2, 7)"],
            answerIndex: 2,
            explanation:
              "A and B average to the midpoint, so B = (2 × 3 - (-1), 2 × 5 - 2) = (7, 8). Check: midpoint of (-1, 2) and (7, 8) is (3, 5) ✓. (1, 3.5) is the midpoint of A and M; (4, 3) is just M - A.",
            guideRef: "Coordinates, midpoints and lengths",
            difficulty: "core",
            hints: [
              "Work backwards: the midpoint is the average of A and B.",
              "From A to M you moved (+4, +3). How much further to B?",
              "Repeat the same step: B = M + (M - A).",
            ],
            strategy: "work backwards",
          },
          {
            id: "gra-mcq-p3-q05",
            question:
              "A speed-time graph is a horizontal line at 8 m/s from t = 0 to t = 10 s. Which statement is true?",
            options: [
              "The object is stationary",
              "The object accelerates at 8 m/s²",
              "The object moves at constant speed and travels 80 m",
              "The object travels 18 m",
            ],
            answerIndex: 2,
            explanation:
              "A horizontal line on a SPEED-time graph means constant speed (zero acceleration), and distance = area under the graph = 8 × 10 = 80 m. 'Stationary' would be a horizontal line on a DISTANCE-time graph — the most common confusion on this topic.",
            guideRef: "Real-life graphs: journeys and conversions",
            difficulty: "core",
            hints: [
              "Check the axes: this is speed against time, not distance.",
              "A flat line means the speed is not changing.",
              "Distance is the area under the line: a rectangle.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "gra-mcq-p3-q06",
            question: "A line passes through (1, 7) and (3, 3). Where does it cross the y-axis?",
            options: ["(0, 9)", "(0, 5)", "(0, -2)", "(4.5, 0)"],
            answerIndex: 0,
            explanation:
              "Gradient = (3 - 7)/(3 - 1) = -4/2 = -2. Then 7 = -2(1) + c gives c = 9, so the line y = -2x + 9 crosses the y-axis at (0, 9). (0, 5) comes from using gradient -2 but substituting incorrectly; (4.5, 0) is the x-intercept.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "core",
            hints: [
              "Find the gradient first — it will be negative.",
              "Use either point in y = mx + c to find c.",
              "The y-axis crossing is the point (0, c).",
            ],
            strategy: "work backwards",
          },
          {
            id: "gra-mcq-p3-q07",
            question: "Which point lies on BOTH y = x² and y = x + 6?",
            options: ["(2, 4)", "(3, 9)", "(-3, 9)", "(6, 36)"],
            answerIndex: 1,
            explanation:
              "Solve x² = x + 6: x² - x - 6 = (x - 3)(x + 2) = 0, so x = 3 (giving (3, 9)) or x = -2 (giving (-2, 4)). Check (3, 9): 3² = 9 ✓ and 3 + 6 = 9 ✓. The other options each lie on the parabola but NOT on the line — e.g. (-3, 9) fails since -3 + 6 = 3 ≠ 9.",
            guideRef: "Cubics, reciprocals and solving equations with graphs",
            difficulty: "core",
            hints: [
              "A point on both graphs must satisfy both equations.",
              "Either test each option in both equations, or solve x² = x + 6.",
              "Factorise x² - x - 6.",
            ],
            strategy: "work backwards",
          },
          {
            id: "gra-mcq-p3-q08",
            question:
              "P is (2, 1) and Q is (6, 9). What is the equation of the perpendicular bisector of PQ?",
            options: [
              "y = -(1/2)x + 7",
              "y = -(1/2)x + 5",
              "y = 2x - 3",
              "y = -2x + 13",
            ],
            answerIndex: 0,
            explanation:
              "Midpoint of PQ is (4, 5); gradient of PQ is (9 - 1)/(6 - 2) = 2, so the bisector has gradient -1/2. Then 5 = -(1/2)(4) + c gives c = 7: y = -(1/2)x + 7. The +5 option forgets to solve for c; y = 2x - 3 is PQ's own line; y = -2x + 13 uses -2 instead of -1/2.",
            guideRef: "Parallel and perpendicular lines",
            difficulty: "challenge",
            hints: [
              "The perpendicular bisector needs two ingredients — which two?",
              "Find the midpoint of PQ and the gradient of PQ.",
              "Use the negative reciprocal gradient through the midpoint to find c.",
            ],
            strategy: "draw a diagram",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "gra-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "gra-qa-p1-q01",
            question:
              "A is the point (2, 5) and B is the point (10, 11). Find (a) the midpoint of AB, (b) the length of AB.",
            modelAnswer:
              "(a) Midpoint = ((2 + 10)/2, (5 + 11)/2) = (6, 8).\n(b) Gaps: 10 - 2 = 8 and 11 - 5 = 6. AB = √(8² + 6²) = √(64 + 36) = √100 = 10.",
            markScheme: ["(6, 8)", "10", "Pythagoras", "64 + 36"],
            commonError:
              "Adding the two gaps (8 + 6 = 14) instead of squaring, adding and square-rooting.",
            guideRef: "Coordinates, midpoints and lengths",
            difficulty: "warmup",
          },
          {
            id: "gra-qa-p1-q02",
            question: "Find the equation of the straight line through (-2, 1) and (4, 13).",
            modelAnswer:
              "Gradient m = (13 - 1)/(4 - (-2)) = 12/6 = 2. Substitute (4, 13) into y = 2x + c: 13 = 8 + c, so c = 5. The equation is y = 2x + 5. Check with (-2, 1): 2(-2) + 5 = 1 ✓.",
            markScheme: ["y = 2x + 5", "gradient 2", "12/6", "c = 5"],
            commonError:
              "Mishandling the double negative in 4 - (-2), getting a run of 2 and a gradient of 6.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "core",
            hints: [
              "Gradient first: change in y over change in x.",
              "Careful: 4 - (-2) = 6.",
              "Substitute either point to find c, then check with the other point.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "gra-qa-p1-q03",
            question:
              "Line L1 has equation y = 3x - 2. Line L2 is perpendicular to L1 and passes through (6, 1). Find the equation of L2 and write down the coordinates of the point where L2 crosses the y-axis.",
            modelAnswer:
              "L1 has gradient 3, so L2 has gradient -1/3 (since 3 × (-1/3) = -1). Substitute (6, 1): 1 = -(1/3)(6) + c = -2 + c, so c = 3. L2 is y = -(1/3)x + 3, crossing the y-axis at (0, 3).",
            markScheme: ["y = -(1/3)x + 3", "(0, 3)", "-1/3", "negative reciprocal"],
            commonError:
              "Using gradient 1/3 or -3 for L2 — the perpendicular gradient must flip the fraction AND the sign.",
            guideRef: "Parallel and perpendicular lines",
            difficulty: "core",
            hints: [
              "What gradient multiplies with 3 to give -1?",
              "Substitute (6, 1) into y = mx + c with your new gradient.",
              "The y-axis crossing is simply (0, c).",
            ],
            strategy: "look for invariants",
          },
          {
            id: "gra-qa-p1-q04",
            question:
              "For the curve y = x² - 8x + 12: (a) find where it crosses the x-axis, (b) write down where it crosses the y-axis, (c) find the coordinates of its turning point, and (d) sketch the curve, labelling all these points.",
            modelAnswer:
              "(a) Factorise: x² - 8x + 12 = (x - 2)(x - 6), so it crosses the x-axis at (2, 0) and (6, 0).\n(b) At x = 0, y = 12: the point (0, 12).\n(c) The line of symmetry is x = 4 (halfway between 2 and 6). At x = 4, y = 16 - 32 + 12 = -4, so the turning point is (4, -4), a minimum.\n(d) Sketch: U-shaped parabola crossing at (2, 0) and (6, 0), through (0, 12), with minimum at (4, -4).",
            markScheme: ["(4, -4)", "(2, 0)", "(6, 0)", "(0, 12)", "factorise", "symmetry"],
            commonError:
              "Stating the turning point's x-coordinate as -4 (sign error in -b/(2a)), or plotting the y-intercept at (0, -12).",
            guideRef: "Quadratic graphs: roots, intercepts and turning points",
            difficulty: "core",
            hints: [
              "Two numbers that multiply to 12 and add to -8?",
              "The y-intercept is just the constant term as a point on the y-axis.",
              "The turning point is halfway between the roots — substitute that x.",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "gra-qa-p1-q05",
            question:
              "A conversion graph between pounds and euros is a straight line through the origin passing through the point (£20, €23). (a) Find the gradient of the line and explain what it represents. (b) Use the graph to convert €92 to pounds.",
            modelAnswer:
              "(a) Gradient = 23/20 = 1.15. It represents the exchange rate: 1.15 euros per pound.\n(b) €92 ÷ 1.15 = £80. (Or proportionally: €92 = 4 × €23, so the answer is 4 × £20 = £80.)",
            markScheme: ["£80", "1.15", "euros per pound", "exchange rate", "divide by 1.15"],
            commonError:
              "Multiplying by 1.15 instead of dividing when converting euros back to pounds — check the direction of the conversion.",
            guideRef: "Real-life graphs: journeys and conversions",
            difficulty: "core",
            hints: [
              "Gradient = rise/run = euros per pound.",
              "92 euros is how many lots of 23 euros?",
              "Going from euros to pounds reverses the conversion — divide by the rate.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "gra-qa-p1-q06",
            question:
              "Triangle ABC has vertices A(1, 2), B(4, 6) and C(8, 3). (a) Show that angle ABC is a right angle. (b) Hence find the area of triangle ABC.",
            modelAnswer:
              "(a) Gradient of AB = (6 - 2)/(4 - 1) = 4/3. Gradient of BC = (3 - 6)/(8 - 4) = -3/4. Product: (4/3) × (-3/4) = -1, so AB is perpendicular to BC and angle ABC = 90°.\n(b) AB = √(3² + 4²) = 5 and BC = √(4² + 3²) = 5. With the right angle at B, area = (1/2) × AB × BC = (1/2) × 5 × 5 = 12.5 square units.",
            markScheme: ["12.5", "m1m2 = -1", "4/3", "-3/4", "AB = 5", "BC = 5"],
            commonError:
              "Using AC as a side of the right angle — the right angle is at B, so the perpendicular sides are AB and BC, and AC is the hypotenuse.",
            guideRef: "Parallel and perpendicular lines",
            difficulty: "challenge",
            hints: [
              "A right angle at B is a statement about the segments AB and BC.",
              "Find both gradients and multiply them.",
              "For the area, the two perpendicular sides act as base and height.",
            ],
            strategy: "draw a diagram",
            solutions: [
              {
                label: "Gradient method",
                steps: [
                  "Gradient AB = (6 - 2)/(4 - 1) = 4/3; gradient BC = (3 - 6)/(8 - 4) = -3/4.",
                  "(4/3) × (-3/4) = -1, so AB ⊥ BC: the angle at B is 90°.",
                  "AB = √(9 + 16) = 5, BC = √(16 + 9) = 5, so area = (1/2)(5)(5) = 12.5.",
                ],
              },
              {
                label: "Converse of Pythagoras (no gradients needed)",
                steps: [
                  "AB² = 3² + 4² = 25, BC² = 4² + 3² = 25, AC² = 7² + 1² = 50.",
                  "AB² + BC² = 25 + 25 = 50 = AC², so by the converse of Pythagoras the angle at B is 90°.",
                  "Area = (1/2)(5)(5) = 12.5. Elegant note: this method proves the right angle and finds the side lengths in one sweep — no fractions at all.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "gra-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "gra-qa-p2-q01",
            question:
              "The line L has equation y = 4x - 3. (a) Write down the gradient of L and the coordinates of its y-intercept. (b) Determine whether the point (2, 5) lies on L.",
            modelAnswer:
              "(a) Gradient = 4; y-intercept (0, -3).\n(b) Substitute x = 2: y = 4(2) - 3 = 5. This matches, so yes, (2, 5) lies on L.",
            markScheme: ["4", "(0, -3)", "yes", "substitute", "4(2) - 3 = 5"],
            commonError:
              "Giving the y-intercept as 3 rather than -3, or as the point (-3, 0) on the wrong axis.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "warmup",
          },
          {
            id: "gra-qa-p2-q02",
            question: "Find the equation of the straight line through P(-2, 1) and Q(4, 10).",
            modelAnswer:
              "Gradient m = (10 - 1)/(4 - (-2)) = 9/6 = 3/2. Substitute (4, 10) into y = (3/2)x + c: 10 = 6 + c, so c = 4. The equation is y = (3/2)x + 4. Check with (-2, 1): (3/2)(-2) + 4 = -3 + 4 = 1 ✓.",
            markScheme: ["y = (3/2)x + 4", "3/2", "c = 4", "gradient"],
            commonError:
              "Refusing to accept a fractional gradient and rounding 9/6 to 1 or 2 — gradients are often fractions; keep them exact.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "core",
            hints: [
              "Find the gradient — leave it as a fraction in simplest form.",
              "9/6 simplifies.",
              "Use the point with easier numbers, (4, 10), to find c.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "gra-qa-p2-q03",
            question:
              "Sketch the curve y = x² + 2x - 15, labelling the x-intercepts, the y-intercept and the turning point.",
            modelAnswer:
              "Factorise: x² + 2x - 15 = (x + 5)(x - 3), so the x-intercepts are (-5, 0) and (3, 0). At x = 0, y = -15: y-intercept (0, -15). Line of symmetry: x = (-5 + 3)/2 = -1; at x = -1, y = 1 - 2 - 15 = -16, so the turning point is (-1, -16), a minimum. The sketch is a U-shaped parabola through these labelled points.",
            markScheme: ["(-1, -16)", "(-5, 0)", "(3, 0)", "(0, -15)", "factorise"],
            commonError:
              "Roots given as 5 and -3 — from (x + 5)(x - 3), the roots are x = -5 and x = 3, the opposite signs of the numbers in the brackets.",
            guideRef: "Quadratic graphs: roots, intercepts and turning points",
            difficulty: "core",
            hints: [
              "Two numbers multiplying to -15 and adding to +2?",
              "Set each bracket to zero for the roots — mind the signs.",
              "Average the roots for the symmetry line, then substitute for y.",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "gra-qa-p2-q04",
            question:
              "Sam walks 4 km from home to a shop in 50 minutes, spends 10 minutes in the shop, then jogs home by the same route in 30 minutes. (a) Find Sam's walking speed in km/h. (b) Find Sam's jogging speed in km/h. (c) Find Sam's average speed for the whole trip, in km/h to 1 decimal place.",
            modelAnswer:
              "(a) 50 min = 5/6 h, so walking speed = 4 ÷ (5/6) = 4.8 km/h.\n(b) 30 min = 0.5 h, so jogging speed = 4 ÷ 0.5 = 8 km/h.\n(c) Total distance = 8 km; total time = 50 + 10 + 30 = 90 min = 1.5 h. Average speed = 8 ÷ 1.5 = 5.333... = 5.3 km/h (1 dp).",
            markScheme: ["5.3 km/h", "4.8", "8 km/h", "total time 1.5", "include the stop"],
            commonError:
              "Averaging the two speeds ((4.8 + 8)/2 = 6.4) instead of using total distance over total time, or omitting the 10-minute stop.",
            guideRef: "Real-life graphs: journeys and conversions",
            difficulty: "core",
            hints: [
              "Convert each time to hours as a fraction: 50 min = 50/60 h.",
              "Speed = distance ÷ time for each leg separately.",
              "For (c): total distance is there AND back; total time includes the shop stop.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "gra-qa-p2-q05",
            question:
              "A car accelerates uniformly from rest to 24 m/s in 8 seconds, travels at 24 m/s for the next 12 seconds, then decelerates uniformly to rest in a further 10 seconds. (a) Find the acceleration during the first 8 seconds. (b) Find the total distance travelled.",
            modelAnswer:
              "(a) Acceleration = gradient of the speed-time graph = (24 - 0)/8 = 3 m/s².\n(b) Distance = area under the graph: first triangle (1/2)(8)(24) = 96 m; middle rectangle 12 × 24 = 288 m; final triangle (1/2)(10)(24) = 120 m. Total = 96 + 288 + 120 = 504 m.",
            markScheme: ["504 m", "3 m/s²", "area", "96", "288", "120"],
            commonError:
              "Using distance = speed × time for the accelerating sections (24 × 8 = 192) instead of the triangle area — the speed is not constant there.",
            guideRef: "Real-life graphs: journeys and conversions",
            difficulty: "core",
            hints: [
              "Sketch the speed-time graph: it is a trapezium overall.",
              "Acceleration is the gradient of the first sloping section.",
              "Split the area into a triangle, a rectangle and a triangle.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "gra-qa-p2-q06",
            question:
              "A is the point (2, 3) and B is the point (10, 9). The point P lies on the x-axis and is equidistant from A and B (PA = PB). Find the coordinates of P.",
            modelAnswer:
              "P is on the x-axis, so P = (x, 0). PA = PB gives PA² = PB²: (x - 2)² + 3² = (x - 10)² + 9². Expand: x² - 4x + 4 + 9 = x² - 20x + 100 + 81. So -4x + 13 = -20x + 181, giving 16x = 168 and x = 10.5. P is (10.5, 0). (Check: PA² = 8.5² + 9 = 81.25 and PB² = 0.5² + 81 = 81.25 ✓.)",
            markScheme: ["(10.5, 0)", "x = 10.5", "PA² = PB²", "perpendicular bisector", "16x = 168"],
            commonError:
              "Trying to keep the square roots and getting stuck — square both sides first, and the x² terms cancel beautifully.",
            guideRef: "Coordinates, midpoints and lengths",
            difficulty: "challenge",
            hints: [
              "P is on the x-axis, so call it (x, 0) — one unknown.",
              "Equal distances is easier as equal SQUARED distances.",
              "Write PA² and PB² with the distance formula and watch the x² terms cancel.",
            ],
            strategy: "introduce a variable",
            solutions: [
              {
                label: "Algebraic method (equal squared distances)",
                steps: [
                  "Let P = (x, 0). Then PA² = (x - 2)² + 9 and PB² = (x - 10)² + 81.",
                  "Setting them equal: x² - 4x + 13 = x² - 20x + 181, so 16x = 168.",
                  "x = 10.5, so P = (10.5, 0).",
                ],
              },
              {
                label: "Geometric method (perpendicular bisector)",
                steps: [
                  "Every point equidistant from A and B lies on the perpendicular bisector of AB.",
                  "Midpoint of AB = (6, 6); gradient of AB = 6/8 = 3/4, so the bisector has gradient -4/3: y - 6 = -(4/3)(x - 6).",
                  "On the x-axis y = 0: -6 = -(4/3)(x - 6), so x - 6 = 4.5 and x = 10.5. P = (10.5, 0). Elegant note: this method reveals WHY there is exactly one such point — a line meets the x-axis once.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "gra-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "gra-qa-p3-q01",
            question:
              "(a) Write down the equation of the horizontal line through the point (3, 7). (b) Write down the equation of the vertical line through (3, 7). (c) State the gradient of the horizontal line.",
            modelAnswer:
              "(a) y = 7 (every point on it has y-coordinate 7).\n(b) x = 3.\n(c) The gradient of y = 7 is 0 — it does not rise at all.",
            markScheme: ["y = 7", "x = 3", "0", "horizontal", "vertical"],
            commonError:
              "Swapping them: writing x = 7 for the horizontal line. A horizontal line fixes the y-value; a vertical line fixes the x-value.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "warmup",
          },
          {
            id: "gra-qa-p3-q02",
            question:
              "The line L has equation 3x + 2y = 12. Find (a) the gradient of L, (b) the coordinates of the points where L crosses each axis.",
            modelAnswer:
              "(a) Rearrange: 2y = 12 - 3x, so y = -(3/2)x + 6. The gradient is -3/2.\n(b) y-intercept: x = 0 gives y = 6, so (0, 6). x-intercept: y = 0 gives 3x = 12, so x = 4 and the point is (4, 0).",
            markScheme: ["-3/2", "(0, 6)", "(4, 0)", "rearrange"],
            commonError:
              "Reading the gradient as -3 (or +3) straight from 3x without dividing by the coefficient of y.",
            guideRef: "Gradient and the straight line y = mx + c",
            difficulty: "core",
            hints: [
              "Make y the subject before reading anything off.",
              "Divide every term by 2, not just some of them.",
              "For the intercepts, set x = 0 and then y = 0 in the ORIGINAL equation — it is quicker.",
            ],
            strategy: "work backwards",
          },
          {
            id: "gra-qa-p3-q03",
            question: "Show that the lines 2y = 3x + 4 and 3y + 2x = 6 are perpendicular.",
            modelAnswer:
              "First line: y = (3/2)x + 2, gradient m1 = 3/2. Second line: 3y = 6 - 2x, so y = -(2/3)x + 2, gradient m2 = -2/3. Product: m1 × m2 = (3/2) × (-2/3) = -1. Since the gradients multiply to -1, the lines are perpendicular.",
            markScheme: ["-1", "3/2", "-2/3", "product of gradients", "perpendicular"],
            commonError:
              "Comparing the raw coefficients (3 and 2 appear in both equations) instead of rearranging each into y = mx + c first.",
            guideRef: "Parallel and perpendicular lines",
            difficulty: "core",
            hints: [
              "'Show that' means compute both gradients and state the test.",
              "Rearrange each equation into y = mx + c.",
              "Multiply the two gradients — what must the product be?",
            ],
            strategy: "look for invariants",
          },
          {
            id: "gra-qa-p3-q04",
            question:
              "The curve C has equation y = x³ - 4x. (a) Find the coordinates of the points where C crosses the x-axis. (b) Describe the shape of C and state what happens to y as x becomes very large.",
            modelAnswer:
              "(a) Set y = 0: x³ - 4x = x(x² - 4) = x(x - 2)(x + 2) = 0, so x = -2, 0 or 2. C crosses the x-axis at (-2, 0), (0, 0) and (2, 0).\n(b) C is an S-shaped cubic with positive x³ coefficient: it comes up from the bottom-left, wiggles through the three roots, and climbs to the top-right. As x becomes very large, y becomes very large and positive (the x³ term dominates).",
            markScheme: ["(-2, 0)", "(0, 0)", "(2, 0)", "factorise", "S-shape", "cubic"],
            commonError:
              "Dividing through by x and losing the root x = 0 — factorise instead of dividing by a quantity that might be zero.",
            guideRef: "Cubics, reciprocals and solving equations with graphs",
            difficulty: "core",
            hints: [
              "Take out the common factor x first.",
              "x² - 4 is a difference of two squares.",
              "Three factors means up to three crossing points — do not lose one.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "gra-qa-p3-q05",
            question:
              "The graph of y = x² - 5x + 4 has been drawn accurately. (a) Show that the x-coordinates of the points where the line y = x - 1 crosses this curve satisfy x² - 6x + 5 = 0. (b) Hence solve x² - 6x + 5 = 0.",
            modelAnswer:
              "(a) At an intersection, x² - 5x + 4 = x - 1. Subtract x and add 1 to both sides: x² - 6x + 5 = 0, as required.\n(b) Factorise: x² - 6x + 5 = (x - 1)(x - 5) = 0, so x = 1 or x = 5. (On the graph, these are the x-coordinates where the line crosses the parabola.)",
            markScheme: ["x = 1 and x = 5", "x² - 6x + 5 = 0", "intersection", "factorise"],
            commonError:
              "Giving the intersection POINTS ((1, 0) and (5, 4)) when the question asks for the solutions, which are just the x-values.",
            guideRef: "Cubics, reciprocals and solving equations with graphs",
            difficulty: "core",
            hints: [
              "At a crossing point the two y-expressions are equal.",
              "Set the quadratic equal to x - 1 and tidy everything onto one side.",
              "For (b), factorise: two numbers multiplying to 5 and adding to -6.",
            ],
            strategy: "work backwards",
          },
          {
            id: "gra-qa-p3-q06",
            question:
              "Find the coordinates of the point on the line y = 2x + 3 that is closest to the origin, and show that this shortest distance is (3√5)/5.",
            modelAnswer:
              "The closest point is the foot of the perpendicular from the origin to the line. The line has gradient 2, so the perpendicular through O has gradient -1/2: y = -(1/2)x. Intersect: 2x + 3 = -(1/2)x, so (5/2)x = -3 and x = -6/5 = -1.2, giving y = -(1/2)(-1.2) = 0.6. The closest point is (-1.2, 0.6). Distance = √((-1.2)² + 0.6²) = √(1.44 + 0.36) = √1.8 = √(9/5) = 3/√5 = (3√5)/5 ≈ 1.34.",
            markScheme: ["(-1.2, 0.6)", "3√5/5", "perpendicular", "-1/2", "√1.8"],
            commonError:
              "Minimising by trying the y-intercept (0, 3), which gives distance 3 — the closest point is where the perpendicular from the origin meets the line, not the intercept.",
            guideRef: "Parallel and perpendicular lines",
            difficulty: "challenge",
            hints: [
              "Which segment from the origin to a line is shortest — at what angle must it meet the line?",
              "Write the equation of the line through the origin perpendicular to y = 2x + 3.",
              "Find where the two lines intersect, then use the distance formula and rationalise the denominator.",
            ],
            strategy: "draw a diagram",
          },
        ],
      },
    ],
  },
};

export default topic;
