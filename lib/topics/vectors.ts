import type { Topic } from "../types";

// Vectors & Transformations — Edexcel IGCSE Higher (4MA1)
// Notation used throughout: column vectors are written (3, -2), meaning 3 right and 2 down.
// Vectors are named with letters written plainly as a, b. OA means "the vector from O to A".

const diagVectorTriangle = {
  id: "vec-diag-01",
  title: "Triangle OAB with OA = a and OB = b",
  svg: `<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle O A B. The vector from O to A is labelled a in blue, the vector from O to B is labelled b in green, the dashed side from A to B is labelled b minus a, and M is the midpoint of A B with the dashed vector O M labelled half of a plus b.">
  <defs>
    <marker id="vec-arr-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L8,3 L0,6 z" fill="#2563eb"/></marker>
    <marker id="vec-arr-green" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L8,3 L0,6 z" fill="#16a34a"/></marker>
    <marker id="vec-arr-grey" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L8,3 L0,6 z" fill="#64748b"/></marker>
    <marker id="vec-arr-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L8,3 L0,6 z" fill="#dc2626"/></marker>
  </defs>
  <line x1="80" y1="300" x2="270" y2="72" stroke="#2563eb" stroke-width="3" marker-end="url(#vec-arr-blue)"/>
  <line x1="80" y1="300" x2="546" y2="300" stroke="#16a34a" stroke-width="3" marker-end="url(#vec-arr-green)"/>
  <line x1="280" y1="60" x2="546" y2="288" stroke="#64748b" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#vec-arr-grey)"/>
  <line x1="80" y1="300" x2="408" y2="184" stroke="#dc2626" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#vec-arr-red)"/>
  <circle cx="80" cy="300" r="4" fill="#64748b"/>
  <circle cx="280" cy="60" r="4" fill="#64748b"/>
  <circle cx="560" cy="300" r="4" fill="#64748b"/>
  <circle cx="420" cy="180" r="5" fill="#dc2626"/>
  <text x="58" y="322" font-size="18" fill="currentColor">O</text>
  <text x="272" y="44" font-size="18" fill="currentColor">A</text>
  <text x="574" y="322" font-size="18" fill="currentColor">B</text>
  <text x="432" y="172" font-size="18" fill="#dc2626">M</text>
  <text x="146" y="172" font-size="20" font-style="italic" font-weight="bold" fill="#2563eb">a</text>
  <text x="306" y="326" font-size="20" font-style="italic" font-weight="bold" fill="#16a34a">b</text>
  <text x="356" y="104" font-size="16" font-style="italic" fill="#64748b">b &#8722; a</text>
  <text x="196" y="262" font-size="16" font-style="italic" fill="#dc2626">&#189;(a + b)</text>
</svg>`,
  caption:
    "Every journey in the triangle can be written using only a and b. To go from A to B: back along a, then along b, so AB = b − a. M is the midpoint of AB and OM = ½(a + b).",
};

const diagNegativeEnlargement = {
  id: "vec-diag-02",
  title: "Enlargement with scale factor −2, centre (0, 0)",
  svg: `<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid showing blue triangle T with vertices at 1 1, 3 1 and 1 2, and its red image after an enlargement scale factor minus 2 about the origin, with vertices at minus 2 minus 2, minus 6 minus 2 and minus 2 minus 4. Dashed rays join each vertex to its image through the centre at the origin, and the image is on the opposite side of the centre and rotated 180 degrees.">
  <path d="M60 20V340M100 20V340M140 20V340M180 20V340M220 20V340M260 20V340M300 20V340M340 20V340M380 20V340M420 20V340M460 20V340M500 20V340" stroke="#64748b" stroke-width="1" opacity="0.25"/>
  <path d="M60 20H500M60 60H500M60 100H500M60 140H500M60 180H500M60 220H500M60 260H500M60 300H500M60 340H500" stroke="#64748b" stroke-width="1" opacity="0.25"/>
  <line x1="60" y1="140" x2="500" y2="140" stroke="#64748b" stroke-width="2"/>
  <line x1="340" y1="20" x2="340" y2="340" stroke="#64748b" stroke-width="2"/>
  <line x1="460" y1="100" x2="100" y2="220" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 5"/>
  <line x1="380" y1="100" x2="260" y2="220" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 5"/>
  <line x1="380" y1="60" x2="260" y2="300" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 5"/>
  <polygon points="380,100 460,100 380,60" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="260,220 100,220 260,300" fill="#dc2626" fill-opacity="0.15" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="340" cy="140" r="5" fill="#f59e0b"/>
  <text x="352" y="128" font-size="15" fill="#f59e0b">centre (0, 0)</text>
  <text x="398" y="92" font-size="17" font-weight="bold" fill="#2563eb">T</text>
  <text x="106" y="256" font-size="15" fill="#dc2626">image, sf &#8722;2</text>
  <text x="506" y="134" font-size="15" fill="#64748b">x</text>
  <text x="348" y="36" font-size="15" fill="#64748b">y</text>
</svg>`,
  caption:
    "With a negative scale factor, every ray from a vertex passes THROUGH the centre and out the other side. The image of T under sf −2 is twice the size, on the opposite side of the centre, and rotated 180°.",
};

const topic: Topic = {
  id: "vectors",
  title: "Vectors & Transformations",
  subject: "Maths",
  icon: "🧭",
  intro:
    "A vector is a journey: how far across, how far up. That one idea lets you pin down translations, prove that lines are parallel and points are collinear without a single measurement, and describe every reflection, rotation and enlargement precisely. This topic covers column vectors, vector arithmetic and magnitude, the classic a-and-b vector-geometry proofs, and all four transformations — including negative scale factors and combining two transformations into one. Notation: column vectors are written (3, −2), vectors are named a, b, and OA means the vector from O to A.",
  guide: [
    {
      heading: "Column vectors and translations",
      body:
        "A **column vector** records a movement: (3, −2) means 3 right and 2 down. The first number is the horizontal part (right is positive), the second is the vertical part (up is positive). We write it on one line as (3, −2) and call it a column vector.\n\nA vector is not a place — it is a **change of place**. The vector from P(2, 1) to Q(7, −3) is PQ = (5, −4), found by end minus start in each coordinate. The same vector (5, −4) also takes (10, 10) to (15, 6): vectors do not care where they start.\n\nA **translation** slides every point of a shape by the same vector. To translate a point, add the vector's components to its coordinates. Translations never rotate, reflect or resize — the image is congruent to the object and the same way up.\n\n- The vector from A to B is written AB; the reverse journey is BA = −AB.\n- Two vectors are **equal** only if both components match — same length AND same direction.\n- To describe a translation fully in an exam, give the column vector. Nothing else is needed.",
      discovery: {
        problem:
          "A delivery robot sits at (2, 1) and must reach (7, −3). Its remote control accepts a single instruction: a pair of numbers meaning (right, up). What instruction do you send? Would the SAME instruction also move a robot from (10, 10) to (15, 6)?",
        idea:
          "The instruction (5, −4) works in both cases. It records movement, not position — that is exactly what a vector is. One vector describes the translation of every point of a shape at once.",
      },
      whyItWorks:
        "Horizontal and vertical movement are independent: sliding 5 right never changes how far up you are. So a journey is completely captured by two separate numbers, and finding a journey is just subtraction in each coordinate: PQ = (end x − start x, end y − start y).",
      strategies: [
        "Draw a diagram — sketch the start point, end point and the arrow between them before calculating.",
        "End minus start — for the vector from P to Q, always subtract P's coordinates from Q's.",
        "Check with a test point — after finding a translation vector, apply it to one vertex and see if it lands correctly.",
      ],
      keyPoints: [
        "(x, y) as a column vector means x right and y up; negatives mean left or down.",
        "Vector from P to Q: subtract coordinates, end minus start.",
        "BA = −AB: reversing a journey flips both signs.",
        "A translation is described fully by its column vector alone.",
      ],
    },
    {
      heading: "Adding, subtracting and scalar multiples",
      body:
        "To **add** vectors, add the components: (4, 1) + (2, 3) = (6, 4). Geometrically, a + b means \"do journey a, then journey b\" — the arrows join nose to tail, and a + b is the single arrow from the very start to the very end.\n\nTo **subtract**, subtract components: a − b = a + (−b), which means \"do a, then do b backwards\".\n\nA **scalar multiple** ka stretches the vector: 3a = a + a + a is three times as long in the same direction, and each component is multiplied by 3. A negative scalar reverses direction: −2a is twice as long as a, pointing the opposite way.\n\nExpressions combine exactly like algebra: if a = (2, −1) and b = (−1, 3) then 3a − 2b = (6, −3) − (−2, 6) = (8, −9).",
      discovery: {
        problem:
          "A treasure map says: from the palm tree, walk (4, 1) to the black rock, then (2, 3) to the chest. Your rival misreads it and walks (2, 3) first, then (4, 1). Do you meet at the chest? And what single instruction would take either of you straight from the tree to the treasure?",
        idea:
          "Both routes end at the same spot, (6, 4) from the tree — two different routes, same destination. Adding vectors component by component gives the single direct journey, and the order of adding never matters: a + b = b + a.",
      },
      whyItWorks:
        "When you do journey a then journey b, the total distance right is (a's right part) + (b's right part), and likewise for up — the horizontal and vertical totals accumulate separately. That is why vector addition is just component-wise addition, and why it is commutative: ordinary addition of numbers is.",
      strategies: [
        "Nose to tail — to add vectors on a diagram, start the second arrow where the first one ends.",
        "Work component by component — treat the top numbers and bottom numbers as two separate calculations.",
        "Look for invariants — whatever route you take through a network of vectors, the start-to-end total is the same.",
      ],
      keyPoints: [
        "a + b: add matching components; geometrically, journeys done in succession.",
        "ka multiplies each component by k; k < 0 reverses the direction.",
        "a − b means a + (−b): do a, then b in reverse.",
        "Vector algebra behaves like ordinary algebra: 2(a + b) = 2a + 2b.",
      ],
      thinkDeeper:
        "The treasure-hunt fact — different routes, same total — is the deep principle behind every vector-geometry proof you will do. When you compute a route like MN = MO + ON, you are choosing a convenient path through known vectors, confident that any path gives the same answer.",
    },
    {
      heading: "Magnitude and position vectors",
      body:
        "The **magnitude** (length) of v = (x, y) is |v| = √(x² + y²). The two components are the legs of a right-angled triangle and the vector is the hypotenuse. So |(−6, 8)| = √(36 + 64) = √100 = 10. Leave awkward answers as surds unless asked to round: |(−1, 9)| = √82.\n\nA **position vector** fixes a point by its journey from the origin O: the point A(2, 3) has position vector OA = a = (2, 3). Position vectors let us turn geometry into algebra.\n\nThe crucial formula: **AB = b − a** (end minus start). Reason: to get from A to B, go A → O → B, so AB = AO + OB = −a + b.\n\nThe **midpoint** M of AB has position vector OM = ½(a + b) — the average of the endpoints.",
      discovery: {
        problem:
          "A rescue drone flies from base with displacement (6, 8) km. Its straight-line distance from base is NOT 6 + 8 = 14 km. What is it, and why?",
        idea:
          "The 6 km east and 8 km north are perpendicular, so they form the two legs of a right-angled triangle. Pythagoras gives the direct distance: √(6² + 8²) = 10 km. Magnitude is always Pythagoras on the components.",
      },
      whyItWorks:
        "Any vector (x, y) can be drawn as x across then y up — two perpendicular legs. The arrow itself is the hypotenuse, so its length is √(x² + y²). Squaring kills the signs, which is why (−6, 8) and (6, 8) have the same length. And AB = b − a is just the route A → O → B written in symbols: −a then b.",
      strategies: [
        "Draw the right-angled triangle — sketch the components before reaching for Pythagoras.",
        "End minus start — AB = b − a, never a − b.",
        "Check for classic triples — 3-4-5, 5-12-13, 8-15-17 turn up constantly in magnitude questions.",
      ],
      keyPoints: [
        "|(x, y)| = √(x² + y²); give exact surds unless told to round.",
        "Magnitude is never negative, and |−v| = |v|.",
        "Position vector of A is OA = a, the journey from the origin.",
        "AB = b − a, and the midpoint of AB is at ½(a + b).",
      ],
    },
    {
      heading: "Vector geometry with a and b",
      body:
        "In the classic Higher question, a figure is described by two base vectors, say OA = a and OB = b, and you must express other vectors **in terms of a and b**. The method never changes:\n\n- Pick a route from start to finish that only uses vectors you know.\n- Write the route as a sum, then simplify with ordinary algebra.\n\nExample (see the diagram): AB = AO + OB = −a + b = b − a. If M is the midpoint of AB, then OM = OA + AM = a + ½(b − a) = ½(a + b).\n\n**Ratio points**: if P lies on AB with AP : PB = 2 : 3, then AP is 2/5 of AB (2 parts out of 5 in total), so OP = a + (2/5)(b − a) = (3/5)a + (2/5)b. Always convert the ratio to a fraction of the WHOLE segment.\n\nWrite each step of the route explicitly in exams — method marks come from lines like \"AM = ½AB = ½(b − a)\".",
      diagrams: [diagVectorTriangle],
      discovery: {
        problem:
          "In triangle OAB with OA = a and OB = b, M is the midpoint of AB. Using only the letters a and b, how would you direct someone from O to M?",
        idea:
          "Walk a to reach A, then half of AB: OM = a + ½(b − a) = ½(a + b). The midpoint is the average of the two position vectors — and the same route-picking trick answers every question of this type.",
      },
      whyItWorks:
        "Because different routes give the same total (the treasure-hunt principle), you may choose whichever path uses known vectors. Simplifying a + ½(b − a) with ordinary algebra is legitimate because vector addition and scalar multiplication obey the same rules as numbers.",
      strategies: [
        "Pick a route through known vectors — go via labelled points, e.g. M to N via O.",
        "Introduce a variable — for an unknown ratio, call it k and solve later.",
        "Convert ratios to fractions of the whole — AP : PB = m : n means AP = m/(m + n) of AB.",
        "Work backwards — if the target is to show PQ is parallel to a, aim to make every b term cancel.",
      ],
      keyPoints: [
        "Any vector in the figure = a route written in a and b, then simplified.",
        "AB = b − a whenever a, b are position vectors of A, B.",
        "Midpoint of AB: ½(a + b). Ratio m : n from A: a + m/(m + n) × (b − a).",
        "Show every route step — method marks depend on it.",
      ],
      thinkDeeper:
        "The midpoint formula ½(a + b) generalises beautifully: the point one third of the way from A to B is (2/3)a + (1/3)b, and any point of AB is (1 − t)a + tb for some t between 0 and 1. The coefficients always sum to 1 — a quick sanity check examiners love and a first glimpse of the \"weighted average\" idea used throughout higher maths.",
    },
    {
      heading: "Parallel vectors and collinear points",
      body:
        "Two vectors are **parallel** exactly when one is a scalar multiple of the other: (6, −8) is parallel to (−3, 4) because (6, −8) = −2 × (−3, 4). In a-and-b form, 2a + 4b is parallel to a + 2b because 2a + 4b = 2(a + 2b).\n\nThree points A, B, C are **collinear** (lie on one straight line) if AB is a scalar multiple of AC (or of BC). The two-line proof examiners want:\n\n- Show AB = k × AC for a specific number k.\n- State: \"AB is parallel to AC, and both pass through the common point A, so A, B and C are collinear.\"\n\nThe multiple also gives ratios: if AC = 3AB then B divides AC with AB : BC = 1 : 2.\n\nTo prove two line segments are parallel (but not collinear), show one direction vector is a multiple of the other — no common point needed.",
      discovery: {
        problem:
          "From point A, you compute two route-vectors: AB = a + 2b and AC = 3a + 6b. Before doing anything else, stare at them. What do you notice — and what does it force to be true about the points A, B and C?",
        idea:
          "AC = 3(a + 2b) = 3AB: one route is a multiple of the other. Both journeys leave A in the same direction, so C lies on the line through A and B — the three points are collinear, with B a third of the way along AC.",
      },
      whyItWorks:
        "A scalar multiple keeps (or exactly reverses) direction. If AB and AC point along the same line AND share the endpoint A, there is only one straight line through A in that direction — so B and C must both be on it. Both ingredients matter: parallel vectors alone could sit on two different parallel lines.",
      strategies: [
        "Show one vector is a multiple of the other — factorise the expression to expose the multiple.",
        "Find a pattern — matching ratios of coefficients (2 : 4 vs 1 : 2) signal parallel vectors.",
        "State the common point — a collinearity proof is incomplete without it.",
      ],
      keyPoints: [
        "Parallel ⟺ scalar multiple; a negative multiple still counts as parallel.",
        "Collinear proof = multiple of vectors + common point + conclusion.",
        "(p, q) is parallel to (r, s) exactly when ps = qr (cross-multiplying the components).",
        "The scalar tells you the ratio: AC = 3AB gives AB : BC = 1 : 2.",
      ],
      thinkDeeper:
        "Why insist on the common point? Take A(0, 0), B(1, 0), C(0, 1), D(1, 1): AB and CD are both (1, 0) — parallel, even equal — yet A, B, C, D are not all on one line. Parallel vectors say \"same direction\"; only a shared point pins the direction to a single line.",
    },
    {
      heading: "Reflections and rotations",
      body:
        "A **reflection** flips a shape over a mirror line. The lines you must handle: vertical lines x = a, horizontal lines y = b, and the diagonals y = x and y = −x.\n\n- In x = a: (x, y) → (2a − x, y). In y = b: (x, y) → (x, 2b − y).\n- In y = x: swap the coordinates, (x, y) → (y, x).\n- In y = −x: swap AND negate both, (x, y) → (−y, −x).\n\nA **rotation** turns a shape about a fixed centre. About the origin: 90° anticlockwise (x, y) → (−y, x); 90° clockwise (x, y) → (y, −x); 180° (x, y) → (−x, −y). For 180° about any centre (p, q): (x, y) → (2p − x, 2q − y) — the centre is the midpoint of every point-image pair.\n\n**Finding a centre of rotation**: join two corresponding points; the centre lies on the perpendicular bisector of that segment. Do it for a second pair — the centre is where the bisectors cross. (With tracing paper: hold a candidate point and turn.)\n\nBoth transformations preserve size and shape (the image is congruent); reflection reverses orientation, rotation does not.",
      discovery: {
        problem:
          "Reflect the point (7, 3) in the vertical line x = 2 — without drawing anything. What must be true about the point and its image?",
        idea:
          "Mirror and object are equidistant from the glass. (7, 3) sits 5 units right of the line, so the image sits 5 units left: (−3, 3). In general x' = 2a − x — the mirror line is the perpendicular bisector of every point-image segment, which is also exactly how you FIND an unknown mirror line or centre.",
      },
      whyItWorks:
        "Reflection in y = x swaps coordinates because the roles of \"across\" and \"up\" are exchanged by that diagonal: the point (5, 1) and the point (1, 5) are mirror twins across it. The 90° rotation rules follow from turning the axes: anticlockwise, the positive x-direction lands on the positive y-direction, sending (x, y) to (−y, x). Doing 90° twice gives the 180° rule (−x, −y).",
      strategies: [
        "Use a test point — apply your rule to one easy vertex and check it lands where the picture says.",
        "Exploit symmetry — mirror line = perpendicular bisector of point-to-image segments.",
        "Track orientation — if the image is flipped (lettering reversed), it is a reflection, not a rotation.",
      ],
      keyPoints: [
        "x = a: (x, y) → (2a − x, y); y = b: (x, y) → (x, 2b − y).",
        "y = x swaps coordinates; y = −x swaps and negates both.",
        "About O: 90° anticlockwise (−y, x); 90° clockwise (y, −x); 180° (−x, −y).",
        "180° about (p, q): (2p − x, 2q − y); the centre is the midpoint of each point-image pair.",
        "Describe a reflection by its LINE (as an equation); a rotation by centre, angle AND direction.",
      ],
    },
    {
      heading: "Enlargements and combined transformations",
      body:
        "An **enlargement** with centre C and scale factor k sends each point P to the point k times as far from C, along the ray CP: image = C + k × (P − C). Every length multiplies by |k|; angles are unchanged, so the image is similar to the object.\n\n- k > 1: bigger. 0 < k < 1: smaller (still called an enlargement!).\n- **k < 0**: the image lands on the OPPOSITE side of the centre and appears rotated 180° (see the diagram). Under sf −2 with centre (0, 0), the point (3, 1) maps to (−6, −2).\n\n**Finding centre and scale factor**: join each vertex to its image vertex; the lines all cross at the centre. Scale factor = (image length) ÷ (object length), negative if object and image are on opposite sides of the centre.\n\n**Describing a single transformation fully** — the examiner's checklist:\n- Translation: the column vector.\n- Reflection: the equation of the mirror line.\n- Rotation: centre, angle, direction.\n- Enlargement: centre and scale factor (with its sign!).\n\n**Combined transformations**: when asked to describe the result of two transformations \"as a single transformation\", actually transform a triangle twice, then compare the final image with the original and describe ONE transformation mapping object to final image. Naming the two steps scores nothing. Classic results: reflection in the x-axis then the y-axis = rotation 180° about O; enlargement sf −1 = rotation 180° about the centre.",
      diagrams: [diagNegativeEnlargement],
      discovery: {
        problem:
          "You know how to enlarge with scale factor 2: each point moves to twice as far from the centre, same side. So what could scale factor −2 possibly mean? Where should the image of (3, 1) land if the centre is the origin?",
        idea:
          "Negative distance means \"through the centre and out the other side\". The image of (3, 1) is at (−6, −2): twice as far from the centre, on the opposite ray. The whole image is doubled in size and looks rotated 180° — which is why sf −1 is exactly a half-turn.",
      },
      whyItWorks:
        "The formula image = C + k(P − C) explains everything: P − C is the vector from the centre to the point, and multiplying by k scales it (and reverses it when k < 0). Because every centre-to-point vector is scaled by the same k, all lengths scale by |k| and straight lines stay straight — that is why the image is similar to the object.",
      strategies: [
        "Draw the rays — lines through corresponding points meet at the centre of enlargement.",
        "Use vectors from the centre — compute image = C + k(P − C) instead of counting squares under pressure.",
        "Try small cases — to identify a combined transformation, push one easy triangle through both steps and compare start with finish.",
        "Consider extremes — a point ON the mirror line, or AT the centre, never moves; use fixed points to identify a transformation.",
      ],
      keyPoints: [
        "Enlargement: image = C + k(P − C); lengths ×|k|, angles unchanged.",
        "Negative k: image on the opposite side of the centre, rotated 180°.",
        "Find the centre by joining corresponding points and intersecting the rays.",
        "One transformation must be named with ALL its details — vector; mirror line; centre + angle + direction; centre + scale factor.",
        "Two transformations combined: track a triangle through both, then describe object → final image as one transformation.",
      ],
      thinkDeeper:
        "Two reflections make a rotation: reflect in y = x then in the x-axis and you get (x, y) → (y, x) → (y, −x), which is a 90° clockwise rotation about O — twice the 45° angle between the two mirror lines. Reflecting in two PARALLEL lines gives a translation of twice the gap. Every rotation and translation is secretly a pair of reflections — the idea behind the mathematics of symmetry groups.",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What does the column vector (3, −2) mean?",
        back: "A movement of 3 right and 2 down. It records a journey, not a position — the same vector translates every point the same way.",
      },
      {
        front: "AB in terms of the position vectors a and b?",
        back: "AB = b − a (end minus start). Route: A → O → B gives −a + b.",
      },
      {
        front: "Magnitude of v = (x, y)?",
        back: "|v| = √(x² + y²) — Pythagoras on the components. E.g. |(−6, 8)| = √(36 + 64) = 10.",
      },
      {
        front: "Position vector of the midpoint M of AB?",
        back: "OM = ½(a + b) — the average of the two position vectors.",
      },
      {
        front: "P lies on AB with AP : PB = m : n. What is OP?",
        back: "OP = a + m/(m + n) × (b − a). Convert the ratio to a fraction of the whole segment first.",
      },
      {
        front: "When are two vectors parallel?",
        back: "Exactly when one is a scalar multiple of the other, e.g. 2a + 4b = 2(a + 2b) is parallel to a + 2b. A negative multiple still counts.",
      },
      {
        front: "How do you prove points A, B, C are collinear?",
        back: "Show AB = k × AC (a scalar multiple), then state that the vectors are parallel AND share the common point A, so all three points lie on one line.",
      },
      {
        front: "Reflection rules for y = x and y = −x?",
        back: "In y = x: swap coordinates, (x, y) → (y, x). In y = −x: swap and negate both, (x, y) → (−y, −x).",
      },
      {
        front: "Reflection rules for x = a and y = b?",
        back: "In x = a: (x, y) → (2a − x, y). In y = b: (x, y) → (x, 2b − y). The mirror is the perpendicular bisector of each point-image segment.",
      },
      {
        front: "Rotation rules about the origin?",
        back: "90° anticlockwise: (x, y) → (−y, x). 90° clockwise: (x, y) → (y, −x). 180°: (x, y) → (−x, −y).",
      },
      {
        front: "What does an enlargement with a negative scale factor do?",
        back: "Sends each point through the centre to the opposite side: image = C + k(P − C) with k < 0. The image is |k| times the size and rotated 180°. Sf −1 is exactly a 180° rotation about the centre.",
      },
      {
        front: "What details describe each transformation fully?",
        back: "Translation: column vector. Reflection: equation of the mirror line. Rotation: centre, angle, direction. Enlargement: centre and scale factor (including its sign).",
      },
      {
        front: "How do you find the centre of an enlargement?",
        back: "Join each vertex to its image vertex with a straight line; the lines all meet at the centre. Scale factor = image length ÷ object length, negative if the image is on the opposite side.",
      },
      {
        front: "How do you answer \"describe the SINGLE transformation\" after two transformations?",
        back: "Transform one triangle through both steps, then compare the final image with the ORIGINAL and describe one transformation mapping object to final image. Never name two transformations.",
      },
    ],
    keyFacts: [
      "A vector has magnitude and direction but no fixed position; (x, y) means x right, y up.",
      "AB = b − a: end minus start, via the route A → O → B.",
      "|(x, y)| = √(x² + y²); watch for the triples 3-4-5, 5-12-13, 8-15-17.",
      "Adding vectors is nose-to-tail: two different routes to the same destination give equal totals.",
      "Parallel ⟺ one vector is a scalar multiple of the other; collinear needs a multiple PLUS a common point.",
      "Midpoint of AB has position vector ½(a + b).",
      "About the origin: 90° acw (−y, x); 90° cw (y, −x); 180° (−x, −y). 180° about (p, q): (2p − x, 2q − y).",
      "Enlargement image = C + k(P − C); negative k puts the image on the far side of the centre, rotated 180°.",
      "Reflections and rotations give congruent images; enlargements give similar images with lengths ×|k|.",
    ],
    formulaSheet: [
      {
        name: "Vector between points",
        formula: "AB = b − a",
        note: "End minus start, where a and b are position vectors of A and B.",
      },
      {
        name: "Magnitude",
        formula: "|(x, y)| = √(x² + y²)",
        note: "Pythagoras on the components; leave as a surd unless asked to round.",
      },
      {
        name: "Midpoint of AB",
        formula: "OM = ½(a + b)",
        note: "The average of the endpoints' position vectors.",
      },
      {
        name: "Point dividing AB in ratio m : n (from A)",
        formula: "OP = a + m/(m + n) × (b − a)",
        note: "AP is m parts out of m + n of the whole of AB.",
      },
      {
        name: "Reflection in x = a / y = b",
        formula: "(x, y) → (2a − x, y);  (x, y) → (x, 2b − y)",
      },
      {
        name: "Reflection in y = x / y = −x",
        formula: "(x, y) → (y, x);  (x, y) → (−y, −x)",
      },
      {
        name: "Rotations about the origin",
        formula: "90° acw: (−y, x);  90° cw: (y, −x);  180°: (−x, −y)",
        note: "For 180° about (p, q): (x, y) → (2p − x, 2q − y).",
      },
      {
        name: "Enlargement, centre C, scale factor k",
        formula: "image = C + k(P − C)",
        note: "k < 0 sends the image through the centre to the other side.",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "vec-quiz-mcq-01",
        question: "a = (3, −2) and b = (−1, 4). Work out a + b.",
        options: ["(2, 2)", "(4, −6)", "(2, −2)", "(−3, −8)"],
        answerIndex: 0,
        explanation:
          "Add the components separately: 3 + (−1) = 2 and −2 + 4 = 2, so a + b = (2, 2). (4, −6) is a − b, and (−3, −8) comes from multiplying components instead of adding.",
        guideRef: "Adding, subtracting and scalar multiples",
        difficulty: "warmup",
      },
      {
        id: "vec-quiz-mcq-02",
        question: "The point (2, 5) is translated by the vector (−3, 1). Where does it land?",
        options: ["(5, 4)", "(−1, 6)", "(−6, 5)", "(−1, 4)"],
        answerIndex: 1,
        explanation:
          "Add the vector to the coordinates: 2 + (−3) = −1 and 5 + 1 = 6, giving (−1, 6). (5, 4) comes from subtracting the vector instead of adding it.",
        guideRef: "Column vectors and translations",
        difficulty: "warmup",
      },
      {
        id: "vec-quiz-mcq-03",
        question: "Find the magnitude of the vector (−6, 8).",
        options: ["2", "10", "14", "100"],
        answerIndex: 1,
        explanation:
          "|(−6, 8)| = √((−6)² + 8²) = √(36 + 64) = √100 = 10. Choosing 14 adds the components, 2 subtracts them, and 100 forgets the square root.",
        guideRef: "Magnitude and position vectors",
        difficulty: "core",
        hints: [
          "A vector's components are the two legs of a right-angled triangle.",
          "Square each component — the minus sign disappears when you square.",
          "Compute √(36 + 64).",
        ],
        strategy: "Draw the right-angled triangle",
      },
      {
        id: "vec-quiz-mcq-04",
        question: "a = (2, −1) and b = (−1, 3). Work out 3a − 2b.",
        options: ["(4, 3)", "(8, −9)", "(4, −9)", "(8, 3)"],
        answerIndex: 1,
        explanation:
          "3a = (6, −3) and 2b = (−2, 6), so 3a − 2b = (6 − (−2), −3 − 6) = (8, −9). (4, 3) is 3a + 2b — the classic sign slip when subtracting a negative.",
        guideRef: "Adding, subtracting and scalar multiples",
        difficulty: "core",
        hints: [
          "First write out 3a and 2b as column vectors.",
          "3a = (6, −3) and 2b = (−2, 6).",
          "Subtracting −2 means adding 2: take extra care with the first components.",
        ],
        strategy: "Work component by component",
      },
      {
        id: "vec-quiz-mcq-05",
        question: "A and B have position vectors OA = (2, 3) and OB = (7, 1). Find the vector AB.",
        options: ["(5, −2)", "(−5, 2)", "(9, 4)", "(5, 2)"],
        answerIndex: 0,
        explanation:
          "AB = b − a = (7 − 2, 1 − 3) = (5, −2): end minus start. (−5, 2) is BA, and (9, 4) is a + b, which is not a journey between the points at all.",
        guideRef: "Magnitude and position vectors",
        difficulty: "core",
        hints: [
          "Think of the route A → O → B.",
          "That route is −a then b, so AB = b − a.",
          "Subtract A's coordinates from B's: end minus start.",
        ],
        strategy: "End minus start",
      },
      {
        id: "vec-quiz-mcq-06",
        question: "In triangle OAB, OA = a and OB = b. M is the midpoint of AB. Which expression equals OM?",
        options: ["½(b − a)", "½(a + b)", "a + ½b", "½a + b"],
        answerIndex: 1,
        explanation:
          "OM = OA + AM = a + ½(b − a) = ½a + ½b = ½(a + b) — the average of the endpoints. ½(b − a) is AM, the journey from A to the midpoint, not from O.",
        guideRef: "Vector geometry with a and b",
        difficulty: "core",
        hints: [
          "Pick a route from O to M through points you know.",
          "Go O → A → M: that is a plus half of AB.",
          "AB = b − a, so simplify a + ½(b − a).",
        ],
        strategy: "Pick a route through known vectors",
      },
      {
        id: "vec-quiz-mcq-07",
        question: "The point (3, −2) is reflected in the line y = x. Where is its image?",
        options: ["(−2, 3)", "(2, −3)", "(−3, 2)", "(3, 2)"],
        answerIndex: 0,
        explanation:
          "Reflection in y = x swaps the coordinates: (3, −2) → (−2, 3). Swapping AND negating, giving (2, −3), is the rule for y = −x; (3, 2) is reflection in the x-axis.",
        guideRef: "Reflections and rotations",
        difficulty: "core",
        hints: [
          "The line y = x exchanges the roles of across and up.",
          "The rule is (x, y) → (y, x) — no sign changes.",
          "Swap 3 and −2, keeping each sign attached to its number.",
        ],
        strategy: "Use a test point",
      },
      {
        id: "vec-quiz-mcq-08",
        question: "The point (4, 1) is rotated 90° clockwise about the origin. Where is its image?",
        options: ["(−1, 4)", "(−4, −1)", "(1, −4)", "(−4, 1)"],
        answerIndex: 2,
        explanation:
          "90° clockwise about O uses (x, y) → (y, −x), so (4, 1) → (1, −4). (−1, 4) is the anticlockwise rotation and (−4, −1) is a 180° rotation.",
        guideRef: "Reflections and rotations",
        difficulty: "core",
        hints: [
          "Sketch the point and turn the page a quarter turn clockwise.",
          "Clockwise 90° about O: (x, y) → (y, −x).",
          "Put x = 4, y = 1 into that rule.",
        ],
        strategy: "Use a test point",
      },
      {
        id: "vec-quiz-mcq-09",
        question: "An enlargement has centre (0, 0) and scale factor −½. What is the image of the point (6, −4)?",
        options: ["(3, −2)", "(−3, 2)", "(−12, 8)", "(12, −8)"],
        answerIndex: 1,
        explanation:
          "Multiply the position vector by −½: (6, −4) → (−3, 2), on the opposite side of the centre and half the distance. (3, −2) ignores the minus sign; (−12, 8) uses −2 instead of −½.",
        guideRef: "Enlargements and combined transformations",
        difficulty: "core",
        hints: [
          "With centre at the origin, just multiply the coordinates by the scale factor.",
          "The scale factor is −½: halve AND change both signs.",
          "Half of 6 is 3; now apply the minus to both components.",
        ],
        strategy: "Use vectors from the centre",
      },
      {
        id: "vec-quiz-mcq-10",
        question:
          "Points P, Q and R satisfy PQ = a + 2b and PR = 3a + 6b. The three points are collinear. What is the ratio PQ : QR?",
        options: ["1 : 2", "1 : 3", "2 : 3", "1 : 1"],
        answerIndex: 0,
        explanation:
          "PR = 3(a + 2b) = 3PQ, so QR = PR − PQ = 2a + 4b = 2PQ. Along the line, PQ is 1 part and QR is 2 parts: PQ : QR = 1 : 2. Choosing 1 : 3 confuses QR with the whole of PR.",
        guideRef: "Parallel vectors and collinear points",
        difficulty: "challenge",
        hints: [
          "Try to write PR as a multiple of PQ.",
          "PR = 3PQ. Now find QR using QR = PR − PQ.",
          "QR = 2a + 4b — how many copies of PQ is that?",
        ],
        strategy: "Show one vector is a multiple of the other",
      },
    ],
    qa: [
      {
        id: "vec-quiz-qa-01",
        question:
          "The point P(−2, 4) is translated by the vector (3, −5) to the point Q. Write down the coordinates of Q.",
        modelAnswer:
          "Add the vector's components to the coordinates of P: x-coordinate −2 + 3 = 1, y-coordinate 4 + (−5) = −1. So Q = (1, −1).",
        markScheme: ["(1, -1)", "add the vector", "-2 + 3", "4 - 5"],
        guideRef: "Column vectors and translations",
        difficulty: "warmup",
        commonError:
          "Subtracting the vector instead of adding it, giving (−5, 9) — the translation vector tells you the journey FROM P, so you add it.",
      },
      {
        id: "vec-quiz-qa-02",
        question:
          "p = (3, −1) and q = (−2, 5). Find the exact magnitude of p + 2q, giving your answer as a surd.",
        modelAnswer:
          "2q = (−4, 10), so p + 2q = (3 − 4, −1 + 10) = (−1, 9). Then |p + 2q| = √((−1)² + 9²) = √(1 + 81) = √82.",
        markScheme: ["√82", "(-1, 9)", "Pythagoras", "1 + 81"],
        guideRef: "Magnitude and position vectors",
        difficulty: "core",
        hints: [
          "First find the single column vector p + 2q.",
          "2q = (−4, 10); add it to p component by component.",
          "Magnitude = √(x² + y²) on your resulting vector — leave the answer as a surd.",
        ],
        strategy: "Work component by component",
        commonError:
          "Finding |p| + 2|q| instead of |p + 2q| — you must combine the vectors FIRST, then take the magnitude. Magnitudes do not add like that.",
      },
      {
        id: "vec-quiz-qa-03",
        question:
          "In triangle OAB, OA = a and OB = b. M is the midpoint of OA and N is the midpoint of OB. (a) Find MN in terms of a and b. (b) What do your results prove about the segments MN and AB?",
        modelAnswer:
          "(a) OM = ½a and ON = ½b, so MN = ON − OM = ½b − ½a = ½(b − a). (b) AB = b − a, so MN = ½AB. Therefore MN is parallel to AB and exactly half its length (the midsegment of the triangle).",
        markScheme: ["1/2(b - a)", "AB = b - a", "parallel", "half the length"],
        guideRef: "Vector geometry with a and b",
        difficulty: "core",
        hints: [
          "Write down the position vectors of M and N first.",
          "M is the midpoint of OA, so OM = ½a; similarly for N.",
          "Use the route M → O → N, then compare your answer with AB = b − a.",
        ],
        strategy: "Pick a route through known vectors",
        commonError:
          "Stopping at MN = ½b − ½a without factorising — you must write ½(b − a) and explicitly compare it with AB = b − a to earn the conclusion marks.",
        solutions: [
          {
            label: "Vector method (the one that generalises)",
            steps: [
              "OM = ½OA = ½a and ON = ½OB = ½b.",
              "Route M → O → N: MN = MO + ON = −½a + ½b = ½(b − a).",
              "AB = AO + OB = b − a.",
              "So MN = ½AB: MN is parallel to AB and half its length.",
            ],
          },
          {
            label: "Similar-triangles method (geometric)",
            steps: [
              "Triangles OMN and OAB share the angle at O.",
              "OM : OA = 1 : 2 and ON : OB = 1 : 2, so the triangles are similar with ratio 1 : 2 (SAS similarity).",
              "Matching sides of similar triangles are in the same ratio and matching angles are equal, so MN = ½AB and MN is parallel to AB.",
              "The vector method is usually quicker in exams and works even when the points are not midpoints.",
            ],
          },
        ],
      },
      {
        id: "vec-quiz-qa-04",
        question:
          "Triangle P has vertices (1, 1), (4, 1) and (1, 3). Triangle Q has vertices (1, −1), (−2, −1) and (1, −3). Describe fully the single transformation that maps triangle P onto triangle Q.",
        modelAnswer:
          "Test the 180° rule about a centre (p, q): (x, y) → (2p − x, 2q − y). With centre (1, 0): (1, 1) → (1, −1) ✓, (4, 1) → (−2, −1) ✓, (1, 3) → (1, −3) ✓. So the transformation is a rotation of 180° about the point (1, 0). (For 180° no direction is needed; for any other angle you must also state clockwise or anticlockwise.)",
        markScheme: ["rotation", "180", "(1, 0)", "centre"],
        guideRef: "Reflections and rotations",
        difficulty: "core",
        hints: [
          "Plot both triangles — the image is upside down but not mirrored.",
          "Upside down with no flip suggests a rotation of 180°.",
          "For a 180° rotation, the centre is the midpoint of any point and its image — try (1, 1) and (1, −1).",
        ],
        strategy: "Track orientation",
        commonError:
          "Writing just \"rotation 180°\" without the centre — a rotation is only fully described with its centre AND angle, and it loses marks without them.",
      },
      {
        id: "vec-quiz-qa-05",
        question:
          "Triangle A has vertices (2, 1), (4, 1) and (2, 2). Triangle B has vertices (5, 4), (1, 4) and (5, 2). Describe fully the single transformation that maps triangle A onto triangle B.",
        modelAnswer:
          "Triangle B's sides are twice the length of triangle A's, and B is rotated 180° relative to A, so try a negative scale factor. Join corresponding points: (2, 1)→(5, 4), (4, 1)→(1, 4), (2, 2)→(5, 2); the joining lines all pass through (3, 2). Check with image = C + k(P − C), k = −2, C = (3, 2): (2, 1) → (3, 2) + (−2)(−1, −1) = (5, 4) ✓; (4, 1) → (3, 2) + (−2)(1, −1) = (1, 4) ✓; (2, 2) → (3, 2) + (−2)(−1, 0) = (5, 2) ✓. The transformation is an enlargement, scale factor −2, centre (3, 2).",
        markScheme: ["enlargement", "-2", "(3, 2)", "centre"],
        guideRef: "Enlargements and combined transformations",
        difficulty: "core",
        hints: [
          "Compare side lengths first — the image is twice the size, so it is an enlargement.",
          "The image is also upside down relative to the object: what does that tell you about the sign of the scale factor?",
          "Join each vertex to its image with a straight line; the centre is where all the lines cross.",
        ],
        strategy: "Draw the rays",
        commonError:
          "Giving scale factor 2 instead of −2 — when the image is on the opposite side of the centre and rotated 180°, the scale factor must be negative.",
      },
      {
        id: "vec-quiz-qa-06",
        question:
          "Relative to an origin O, the points P, Q and R have position vectors OP = a, OQ = 2a + b and OR = 4a + 3b. Prove that P, Q and R lie on a straight line, and find the ratio PQ : QR.",
        modelAnswer:
          "PQ = OQ − OP = (2a + b) − a = a + b. QR = OR − OQ = (4a + 3b) − (2a + b) = 2a + 2b = 2(a + b). So QR = 2PQ, which means PQ and QR are parallel. Since they share the common point Q, the points P, Q and R are collinear. The ratio of lengths is PQ : QR = 1 : 2.",
        markScheme: ["1 : 2", "PQ = a + b", "QR = 2(a + b)", "parallel", "common point"],
        guideRef: "Parallel vectors and collinear points",
        difficulty: "challenge",
        hints: [
          "Find the two route-vectors PQ and QR using end minus start.",
          "PQ = a + b. Now compute QR and factorise it.",
          "If QR is a multiple of PQ and they share the point Q, what does that force?",
        ],
        strategy: "Show one vector is a multiple of the other",
        commonError:
          "Showing QR = 2PQ but forgetting to mention the common point Q — parallel vectors alone do not prove collinearity, since they could lie on two different parallel lines.",
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "vec-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "vec-mcq-p1-q01",
            question: "a = (5, 2) and b = (1, −3). Work out b − a.",
            options: ["(−4, −5)", "(4, 5)", "(6, −1)", "(−4, 5)"],
            answerIndex: 0,
            explanation:
              "Subtract component by component: 1 − 5 = −4 and −3 − 2 = −5, so b − a = (−4, −5). (4, 5) is a − b (order matters) and (6, −1) is a + b.",
            guideRef: "Adding, subtracting and scalar multiples",
            difficulty: "warmup",
          },
          {
            id: "vec-mcq-p1-q02",
            question: "Which vector translates the point (−3, 7) to the point (2, 4)?",
            options: ["(−5, 3)", "(5, −3)", "(5, 3)", "(−1, 11)"],
            answerIndex: 1,
            explanation:
              "End minus start: (2 − (−3), 4 − 7) = (5, −3). (−5, 3) is the reverse journey and (−1, 11) comes from adding the points instead of subtracting.",
            guideRef: "Column vectors and translations",
            difficulty: "warmup",
          },
          {
            id: "vec-mcq-p1-q03",
            question: "Find the magnitude of the vector (5, −12).",
            options: ["7", "13", "17", "169"],
            answerIndex: 1,
            explanation:
              "|(5, −12)| = √(25 + 144) = √169 = 13 — the 5-12-13 triple. 17 mixes it up with 8-15-17, 7 subtracts the components, and 169 forgets the square root.",
            guideRef: "Magnitude and position vectors",
            difficulty: "core",
            hints: [
              "The components are the legs of a right-angled triangle.",
              "Square both components — the sign of −12 vanishes.",
              "√(25 + 144) is a perfect square.",
            ],
            strategy: "Check for classic triples",
          },
          {
            id: "vec-mcq-p1-q04",
            question: "a = (1, 4) and b = (−2, 0). Work out 2a + 3b.",
            options: ["(−4, 8)", "(8, 8)", "(−4, 12)", "(4, 8)"],
            answerIndex: 0,
            explanation:
              "2a = (2, 8) and 3b = (−6, 0), so 2a + 3b = (2 − 6, 8 + 0) = (−4, 8). (8, 8) drops the minus sign in b; (−4, 12) multiplies a by 3 instead of 2.",
            guideRef: "Adding, subtracting and scalar multiples",
            difficulty: "core",
            hints: [
              "Write out 2a and 3b as column vectors first.",
              "2a = (2, 8) and 3b = (−6, 0).",
              "Add the matching components carefully — one of them is negative.",
            ],
            strategy: "Work component by component",
          },
          {
            id: "vec-mcq-p1-q05",
            question: "OA = (3, 1) and AB = (2, 5). Find the position vector OB.",
            options: ["(5, 6)", "(−1, 4)", "(1, −4)", "(6, 5)"],
            answerIndex: 0,
            explanation:
              "Route O → A → B: OB = OA + AB = (3 + 2, 1 + 5) = (5, 6). (−1, 4) is AB − OA, which is not a meaningful route here.",
            guideRef: "Magnitude and position vectors",
            difficulty: "core",
            hints: [
              "You are given the journey O to A and the journey A to B.",
              "Chain the journeys nose to tail.",
              "OB = OA + AB.",
            ],
            strategy: "Pick a route through known vectors",
          },
          {
            id: "vec-mcq-p1-q06",
            question: "Which of these vectors is parallel to (6, −8)?",
            options: ["(8, −6)", "(6, 8)", "(−3, 4)", "(3, 4)"],
            answerIndex: 2,
            explanation:
              "(−3, 4) = −½ × (6, −8), a scalar multiple, so it is parallel (a negative multiple just reverses direction). (8, −6) swaps the components, and (6, 8) and (3, 4) change only one sign — neither is a multiple of (6, −8).",
            guideRef: "Parallel vectors and collinear points",
            difficulty: "core",
            hints: [
              "Parallel means one vector is a scalar multiple of the other.",
              "Try multiplying each option by a constant to hit (6, −8).",
              "Does k = −2 turn one of the options into (6, −8)?",
            ],
            strategy: "Show one vector is a multiple of the other",
          },
          {
            id: "vec-mcq-p1-q07",
            question: "The point (5, 3) is reflected in the line x = 2. Where is its image?",
            options: ["(−1, 3)", "(−5, 3)", "(5, 1)", "(−1, −3)"],
            answerIndex: 0,
            explanation:
              "(5, 3) is 3 units right of x = 2, so its image is 3 units left: (2 − 3, 3) = (−1, 3); the y-coordinate is unchanged. (−5, 3) reflects in the y-axis (x = 0), and (5, 1) reflects in y = 2 instead.",
            guideRef: "Reflections and rotations",
            difficulty: "core",
            hints: [
              "A vertical mirror only changes the x-coordinate.",
              "How far is the point from the line x = 2? The image is the same distance on the other side.",
              "Use x' = 2a − x with a = 2.",
            ],
            strategy: "Exploit symmetry",
          },
          {
            id: "vec-mcq-p1-q08",
            question:
              "In triangle OAB, OA = a and OB = b. P lies on AB with AP : PB = 2 : 3. Which expression equals OP?",
            options: [
              "(3/5)a + (2/5)b",
              "(2/5)a + (3/5)b",
              "a + (2/5)b",
              "(2/3)a + (2/5)b",
            ],
            answerIndex: 0,
            explanation:
              "AP is 2 parts of the 5, so AP = (2/5)AB = (2/5)(b − a). Then OP = a + (2/5)(b − a) = (3/5)a + (2/5)b. Note the coefficients sum to 1 — a quick check. (2/5)a + (3/5)b swaps the weights: that point is nearer B than A, but P should be nearer A.",
            guideRef: "Vector geometry with a and b",
            difficulty: "challenge",
            hints: [
              "AP : PB = 2 : 3 means AP is 2 parts out of how many in total?",
              "AP = (2/5)AB and AB = b − a.",
              "Simplify OP = a + (2/5)(b − a) and check the coefficients sum to 1.",
            ],
            strategy: "Convert ratios to fractions of the whole",
          },
        ],
      },
      {
        id: "vec-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "vec-mcq-p2-q01",
            question: "a = (−2, 3). Work out 4a.",
            options: ["(−8, 12)", "(2, 7)", "(−8, 3)", "(8, −12)"],
            answerIndex: 0,
            explanation:
              "Multiply each component by 4: 4a = (−8, 12). (2, 7) adds 4 instead of multiplying; (−8, 3) forgets the second component; (8, −12) is −4a.",
            guideRef: "Adding, subtracting and scalar multiples",
            difficulty: "warmup",
          },
          {
            id: "vec-mcq-p2-q02",
            question: "The point (1, −2) is translated by the vector (0, 6). Where does it land?",
            options: ["(1, −8)", "(1, 4)", "(6, −2)", "(0, 4)"],
            answerIndex: 1,
            explanation:
              "Add the components: (1 + 0, −2 + 6) = (1, 4). The point slides straight up by 6. (1, −8) subtracts instead of adding.",
            guideRef: "Column vectors and translations",
            difficulty: "warmup",
          },
          {
            id: "vec-mcq-p2-q03",
            question: "Which of these vectors has magnitude 5?",
            options: ["(2, 3)", "(4, 3)", "(5, 5)", "(1, 4)"],
            answerIndex: 1,
            explanation:
              "|(4, 3)| = √(16 + 9) = √25 = 5 — the 3-4-5 triple. The others give √13, √50 and √17. (5, 5) is tempting, but its length is 5√2, not 5.",
            guideRef: "Magnitude and position vectors",
            difficulty: "core",
            hints: [
              "Magnitude of (x, y) is √(x² + y²).",
              "You need x² + y² = 25.",
              "One option is a famous Pythagorean triple.",
            ],
            strategy: "Check for classic triples",
          },
          {
            id: "vec-mcq-p2-q04",
            question: "a = (0, 5) and b = (3, −1). Work out a − 2b.",
            options: ["(−6, 3)", "(−6, 7)", "(6, 7)", "(−3, 6)"],
            answerIndex: 1,
            explanation:
              "2b = (6, −2), so a − 2b = (0 − 6, 5 − (−2)) = (−6, 7). (−6, 3) makes the sign slip 5 − 2 in the second component; (−3, 6) only subtracts b once.",
            guideRef: "Adding, subtracting and scalar multiples",
            difficulty: "core",
            hints: [
              "First double b.",
              "2b = (6, −2).",
              "Subtracting −2 in the second component means adding 2.",
            ],
            strategy: "Work component by component",
          },
          {
            id: "vec-mcq-p2-q05",
            question: "The point (3, −2) is rotated 90° anticlockwise about the origin. Where is its image?",
            options: ["(−2, −3)", "(2, 3)", "(−3, 2)", "(2, −3)"],
            answerIndex: 1,
            explanation:
              "90° anticlockwise about O uses (x, y) → (−y, x), so (3, −2) → (−(−2), 3) = (2, 3). (−2, −3) is the clockwise rotation and (−3, 2) is 180°.",
            guideRef: "Reflections and rotations",
            difficulty: "core",
            hints: [
              "Recall the rule for a quarter turn anticlockwise about O.",
              "(x, y) → (−y, x).",
              "Here y = −2, so −y = +2.",
            ],
            strategy: "Use a test point",
          },
          {
            id: "vec-mcq-p2-q06",
            question:
              "An enlargement has centre (1, 2) and scale factor 3. What is the image of the point (3, 4)?",
            options: ["(9, 12)", "(6, 6)", "(7, 8)", "(4, 6)"],
            answerIndex: 2,
            explanation:
              "Vector from centre to point: (3, 4) − (1, 2) = (2, 2). Multiply by 3 to get (6, 6), then add back the centre: (1, 2) + (6, 6) = (7, 8). (9, 12) wrongly enlarges from the origin instead of the given centre.",
            guideRef: "Enlargements and combined transformations",
            difficulty: "core",
            hints: [
              "Work with the vector from the CENTRE to the point, not from the origin.",
              "That vector is (2, 2); scale it by 3.",
              "Add the scaled vector back onto the centre (1, 2).",
            ],
            strategy: "Use vectors from the centre",
          },
          {
            id: "vec-mcq-p2-q07",
            question: "A reflection maps the point (4, 1) to the point (1, 4). Which line is the mirror?",
            options: ["y = −x", "y = x", "x = 2.5", "y = 2.5"],
            answerIndex: 1,
            explanation:
              "Reflection in y = x swaps coordinates: (4, 1) → (1, 4) ✓. In y = −x the image would be (−1, −4); in x = 2.5 it would be (1, 1); in y = 2.5 it would be (4, 4).",
            guideRef: "Reflections and rotations",
            difficulty: "core",
            hints: [
              "Compare the point and its image — what happened to the coordinates?",
              "They swapped, with no sign changes.",
              "Which mirror line has the rule (x, y) → (y, x)?",
            ],
            strategy: "Use a test point",
          },
          {
            id: "vec-mcq-p2-q08",
            question:
              "A, B and C are collinear points with AB = 2a − 3b and BC = ka − 6b. What is the value of k?",
            options: ["4", "−4", "6", "8"],
            answerIndex: 0,
            explanation:
              "Collinear means BC is a scalar multiple of AB. Comparing b parts: −6 = 2 × (−3), so BC = 2AB, and the a parts give k = 2 × 2 = 4. Any other value of k breaks the matching ratio of components.",
            guideRef: "Parallel vectors and collinear points",
            difficulty: "challenge",
            hints: [
              "Collinear points sharing B force BC to be a multiple of AB.",
              "Compare the b coefficients: −6 is what multiple of −3?",
              "Apply that same multiple to the a coefficient of AB.",
            ],
            strategy: "Show one vector is a multiple of the other",
          },
        ],
      },
      {
        id: "vec-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "vec-mcq-p3-q01",
            question: "Which column vector describes the movement \"5 right and 2 down\"?",
            options: ["(5, 2)", "(−5, 2)", "(5, −2)", "(2, −5)"],
            answerIndex: 2,
            explanation:
              "Right is positive in the first component and down is negative in the second, so the vector is (5, −2). (5, 2) would be 5 right and 2 UP.",
            guideRef: "Column vectors and translations",
            difficulty: "warmup",
          },
          {
            id: "vec-mcq-p3-q02",
            question: "a = (−1, −4) and b = (3, 4). Work out a + b.",
            options: ["(2, 0)", "(−4, −8)", "(2, −8)", "(4, 0)"],
            answerIndex: 0,
            explanation:
              "Add components: −1 + 3 = 2 and −4 + 4 = 0, so a + b = (2, 0). (−4, −8) is a − b; (2, −8) muddles the sign in the second component.",
            guideRef: "Adding, subtracting and scalar multiples",
            difficulty: "warmup",
          },
          {
            id: "vec-mcq-p3-q03",
            question: "a = (2, −2). Find the exact magnitude of 3a.",
            options: ["6√2", "12", "72", "3√2"],
            answerIndex: 0,
            explanation:
              "3a = (6, −6), so |3a| = √(36 + 36) = √72 = 6√2. Choosing 12 adds 6 + 6 instead of using Pythagoras; 72 forgets the square root; 3√2 halves the correct surd. As a check, |a| = √8 = 2√2, and 3|a| = 6√2 agrees.",
            guideRef: "Magnitude and position vectors",
            difficulty: "core",
            hints: [
              "First write 3a as a column vector.",
              "3a = (6, −6): apply Pythagoras to the components.",
              "Simplify √72 by taking out the largest square factor.",
            ],
            strategy: "Draw the right-angled triangle",
          },
          {
            id: "vec-mcq-p3-q04",
            question:
              "A(−2, 5) and B(4, −1). M is the midpoint of AB. What is the position vector OM?",
            options: ["(3, −3)", "(1, 2)", "(2, 4)", "(−3, 3)"],
            answerIndex: 1,
            explanation:
              "OM = ½(OA + OB) = ½((−2, 5) + (4, −1)) = ½(2, 4) = (1, 2). (3, −3) is ½(b − a), which is the vector AM, not the position of M.",
            guideRef: "Magnitude and position vectors",
            difficulty: "core",
            hints: [
              "The midpoint's position vector is the average of the endpoints'.",
              "Add the two position vectors first.",
              "Halve (2, 4).",
            ],
            strategy: "End minus start",
          },
          {
            id: "vec-mcq-p3-q05",
            question: "The point (5, 3) is rotated 180° about the point (2, 1). Where is its image?",
            options: ["(−5, −3)", "(−1, 1)", "(−1, −1)", "(1, −1)"],
            answerIndex: 2,
            explanation:
              "For 180° about (p, q), use (x, y) → (2p − x, 2q − y): (2×2 − 5, 2×1 − 3) = (−1, −1). Equivalently the centre (2, 1) is the midpoint of the point and its image. (−5, −3) rotates about the origin instead.",
            guideRef: "Reflections and rotations",
            difficulty: "core",
            hints: [
              "The centre of a 180° rotation is the midpoint of each point-image pair.",
              "Go from (5, 3) to the centre, then the same journey again.",
              "The journey to the centre is (−3, −2); repeat it from (2, 1).",
            ],
            strategy: "Exploit symmetry",
          },
          {
            id: "vec-mcq-p3-q06",
            question:
              "An enlargement has centre (0, 0) and scale factor −½. What is the image of the point (−4, 6)?",
            options: ["(−2, 3)", "(2, −3)", "(8, −12)", "(−8, 12)"],
            answerIndex: 1,
            explanation:
              "With the centre at the origin, multiply by −½: (−4, 6) → (2, −3) — halved in size and pushed through the centre to the other side. (−2, 3) forgets the minus sign; (8, −12) uses scale factor −2.",
            guideRef: "Enlargements and combined transformations",
            difficulty: "core",
            hints: [
              "Centre at the origin: just multiply the coordinates by the scale factor.",
              "Halve each coordinate first.",
              "Now apply the minus: both signs flip.",
            ],
            strategy: "Use vectors from the centre",
          },
          {
            id: "vec-mcq-p3-q07",
            question: "The point (2, 5) is reflected in the line y = −x. Where is its image?",
            options: ["(5, 2)", "(−5, −2)", "(−2, −5)", "(5, −2)"],
            answerIndex: 1,
            explanation:
              "Reflection in y = −x swaps the coordinates AND negates both: (2, 5) → (−5, −2). (5, 2) is the rule for y = x; (−2, −5) is a 180° rotation about O.",
            guideRef: "Reflections and rotations",
            difficulty: "core",
            hints: [
              "The rule for y = −x has two steps.",
              "Swap the coordinates first.",
              "Then change the sign of both.",
            ],
            strategy: "Use a test point",
          },
          {
            id: "vec-mcq-p3-q08",
            question:
              "A shape is reflected in the line y = x, and the image is then reflected in the x-axis. Which single transformation is equivalent to the combination?",
            options: [
              "Rotation 90° clockwise about the origin",
              "Rotation 90° anticlockwise about the origin",
              "Reflection in the line y = −x",
              "Rotation 180° about the origin",
            ],
            answerIndex: 0,
            explanation:
              "Track a point: (x, y) → (y, x) after y = x, then → (y, −x) after the x-axis. The rule (x, y) → (y, −x) is exactly a 90° clockwise rotation about O. Two reflections always make a rotation of TWICE the angle between the mirrors (here 2 × 45° = 90°).",
            guideRef: "Enlargements and combined transformations",
            difficulty: "challenge",
            hints: [
              "Push a general point (x, y) through both reflections in order.",
              "After y = x you have (y, x); now reflect that in the x-axis.",
              "Which rotation rule matches (x, y) → (y, −x)?",
            ],
            strategy: "Try small cases",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "vec-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "vec-qa-p1-q01",
            question: "c = (2, −3) and d = (−4, 1). Work out 2c + d as a column vector.",
            modelAnswer:
              "2c = (4, −6). Then 2c + d = (4 + (−4), −6 + 1) = (0, −5).",
            markScheme: ["(0, -5)", "2c = (4, -6)", "add components"],
            guideRef: "Adding, subtracting and scalar multiples",
            difficulty: "warmup",
            commonError:
              "Doubling only one component of c, giving (4, −3) before adding — the scalar multiplies BOTH components.",
          },
          {
            id: "vec-qa-p1-q02",
            question:
              "A delivery drone flies from its base with total displacement (8, −15), in metres. How far is the drone from its base?",
            modelAnswer:
              "The straight-line distance is the magnitude of the displacement: √(8² + (−15)²) = √(64 + 225) = √289 = 17 metres.",
            markScheme: ["17", "√289", "Pythagoras", "magnitude"],
            guideRef: "Magnitude and position vectors",
            difficulty: "core",
            hints: [
              "\"How far\" asks for the magnitude of the vector.",
              "The components are the legs of a right-angled triangle.",
              "√(64 + 225) is a perfect square — an 8-15-17 triangle.",
            ],
            strategy: "Check for classic triples",
            commonError:
              "Answering 8 + 15 = 23 m — the two legs are perpendicular, so distances combine by Pythagoras, not by adding.",
          },
          {
            id: "vec-qa-p1-q03",
            question:
              "A(1, 5) and B(7, −4). (a) Find the vector AB. (b) Find the coordinates of the midpoint M of AB.",
            modelAnswer:
              "(a) AB = b − a = (7 − 1, −4 − 5) = (6, −9). (b) OM = ½(OA + OB) = ½(8, 1) = (4, 0.5), so M = (4, 0.5).",
            markScheme: ["(6, -9)", "(4, 0.5)", "b - a", "midpoint"],
            guideRef: "Magnitude and position vectors",
            difficulty: "core",
            hints: [
              "For AB, subtract A's coordinates from B's: end minus start.",
              "The midpoint's position vector is the average of the endpoints'.",
              "Average each coordinate separately: (1 + 7)/2 and (5 + (−4))/2.",
            ],
            strategy: "End minus start",
            commonError:
              "Computing a − b = (−6, 9) for AB — that is the vector BA. The vector named AB always runs FROM A TO B.",
          },
          {
            id: "vec-qa-p1-q04",
            question:
              "Triangle A has vertices (1, 2), (3, 2) and (3, 5). Triangle B has vertices (7, 2), (5, 2) and (5, 5). Describe fully the single transformation that maps triangle A onto triangle B.",
            modelAnswer:
              "The y-coordinates are unchanged and the shapes face each other, so it is a reflection in a vertical line. Corresponding x-coordinates: 1 ↔ 7 (midpoint 4) and 3 ↔ 5 (midpoint 4). Both give the same mirror. The transformation is a reflection in the line x = 4.",
            markScheme: ["reflection", "x = 4", "mirror line"],
            guideRef: "Reflections and rotations",
            difficulty: "core",
            hints: [
              "The y-coordinates have not changed — what does that suggest?",
              "The mirror sits halfway between each point and its image.",
              "Halfway between x = 1 and x = 7 is where? Check it also works for 3 and 5.",
            ],
            strategy: "Exploit symmetry",
            commonError:
              "Writing \"reflection in the vertical line\" or \"reflection in x-axis\" — you must give the mirror line's EQUATION, x = 4, to describe the reflection fully.",
          },
          {
            id: "vec-qa-p1-q05",
            question:
              "Triangle T has vertices (2, 1), (4, 1) and (4, 2). T is rotated 90° anticlockwise about the origin. Find the coordinates of the vertices of the image.",
            modelAnswer:
              "The rule for 90° anticlockwise about O is (x, y) → (−y, x). So (2, 1) → (−1, 2), (4, 1) → (−1, 4), and (4, 2) → (−2, 4). The image has vertices (−1, 2), (−1, 4) and (−2, 4).",
            markScheme: ["(-1, 2)", "(-1, 4)", "(-2, 4)", "(x, y) → (-y, x)"],
            guideRef: "Reflections and rotations",
            difficulty: "core",
            hints: [
              "Use the rotation rule for 90° anticlockwise about the origin.",
              "(x, y) → (−y, x).",
              "Apply the rule to each vertex separately and keep the signs straight.",
            ],
            strategy: "Use a test point",
            commonError:
              "Using (y, −x) — that is 90° CLOCKWISE. Check with an easy point: (1, 0) must go to (0, 1) when turning anticlockwise.",
          },
          {
            id: "vec-qa-p1-q06",
            question:
              "OACB is a parallelogram with OA = a and OB = b, so OC = a + b. M is the midpoint of OA and N is the point on AB such that AN : NB = 1 : 3. Prove that MN is parallel to OC.",
            modelAnswer:
              "OM = ½a. ON = OA + AN = a + ¼AB = a + ¼(b − a) = ¾a + ¼b. So MN = ON − OM = ¾a − ½a + ¼b = ¼a + ¼b = ¼(a + b). Since OC = a + b, we have MN = ¼OC, a scalar multiple of OC. Therefore MN is parallel to OC.",
            markScheme: ["1/4(a + b)", "ON = 3/4a + 1/4b", "MN = 1/4 OC", "scalar multiple", "parallel"],
            guideRef: "Parallel vectors and collinear points",
            difficulty: "challenge",
            hints: [
              "Find the position vectors of M and N first.",
              "AN : NB = 1 : 3 means AN = ¼AB, and AB = b − a.",
              "Compute MN = ON − OM and factorise — compare with OC = a + b.",
            ],
            strategy: "Work backwards",
            commonError:
              "Using AN = (1/3)AB — the ratio 1 : 3 splits AB into 1 + 3 = 4 parts, so AN is ¼ of AB, not ⅓.",
          },
        ],
      },
      {
        id: "vec-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "vec-qa-p2-q01",
            question:
              "A translation maps the point (3, −1) to the point (−2, 4). Write down the column vector of the translation.",
            modelAnswer:
              "End minus start: (−2 − 3, 4 − (−1)) = (−5, 5). The translation vector is (−5, 5).",
            markScheme: ["(-5, 5)", "end minus start", "subtract"],
            guideRef: "Column vectors and translations",
            difficulty: "warmup",
            commonError:
              "Computing start minus end, giving (5, −5) — that vector would undo the translation rather than perform it.",
          },
          {
            id: "vec-qa-p2-q02",
            question: "The vector (6, k) is parallel to the vector (2, −3). Find the value of k.",
            modelAnswer:
              "Parallel vectors are scalar multiples. Since 6 = 3 × 2, the multiplier is 3, so k = 3 × (−3) = −9.",
            markScheme: ["-9", "scalar multiple", "multiplier 3"],
            guideRef: "Parallel vectors and collinear points",
            difficulty: "core",
            hints: [
              "Parallel means (6, k) = m × (2, −3) for some number m.",
              "Use the first components to find m.",
              "Apply the same m to the second component.",
            ],
            strategy: "Show one vector is a multiple of the other",
            commonError:
              "Giving k = 9 by ignoring the sign — the multiplier 3 must be applied to −3, keeping it negative.",
          },
          {
            id: "vec-qa-p2-q03",
            question: "v = (t, 8) and |v| = 10, where t > 0. Find the value of t.",
            modelAnswer:
              "|v|² = t² + 8² = t² + 64. Setting this equal to 10² = 100 gives t² = 36, so t = 6 (taking the positive root since t > 0).",
            markScheme: ["6", "t² + 64 = 100", "t² = 36", "Pythagoras"],
            guideRef: "Magnitude and position vectors",
            difficulty: "core",
            hints: [
              "Write the magnitude formula and set it equal to 10.",
              "Square both sides to remove the root.",
              "Solve t² + 64 = 100.",
            ],
            strategy: "Introduce a variable",
            commonError:
              "Writing t + 8 = 10 so t = 2 — magnitude uses squares, not a straight sum of components.",
          },
          {
            id: "vec-qa-p2-q04",
            question:
              "Triangle P has vertices (2, 2), (6, 2) and (6, 4). P is enlarged with scale factor ½, centre (0, 2). Find the coordinates of the vertices of the image.",
            modelAnswer:
              "Use image = C + ½(P − C) with C = (0, 2). (2, 2): vector from centre (2, 0), halved (1, 0), image (1, 2). (6, 2): vector (6, 0) → (3, 0), image (3, 2). (6, 4): vector (6, 2) → (3, 1), image (3, 3). The image has vertices (1, 2), (3, 2) and (3, 3).",
            markScheme: ["(1, 2)", "(3, 2)", "(3, 3)", "half the distance from the centre"],
            guideRef: "Enlargements and combined transformations",
            difficulty: "core",
            hints: [
              "Work with vectors from the CENTRE (0, 2), not from the origin.",
              "Halve each centre-to-vertex vector.",
              "Add each halved vector back onto the centre.",
            ],
            strategy: "Use vectors from the centre",
            commonError:
              "Halving the raw coordinates (giving (1, 1), (3, 1), (3, 2)) — that enlarges from the origin, but the centre here is (0, 2).",
          },
          {
            id: "vec-qa-p2-q05",
            question:
              "Triangle A has vertices (1, 1), (1, 4) and (2, 1). Triangle B has vertices (1, −1), (4, −1) and (1, −2). Describe fully the single transformation that maps triangle A onto triangle B.",
            modelAnswer:
              "Test the rule (x, y) → (y, −x): (1, 1) → (1, −1) ✓, (1, 4) → (4, −1) ✓, (2, 1) → (1, −2) ✓. That rule is a rotation of 90° clockwise about the origin. So the transformation is a rotation, 90° clockwise (or equivalently 270° anticlockwise), centre the origin (0, 0).",
            markScheme: ["rotation", "90", "clockwise", "origin"],
            guideRef: "Reflections and rotations",
            difficulty: "core",
            hints: [
              "Sketch both triangles — the image is a quarter turn of the object, not a mirror image.",
              "Test the two 90° rules about the origin on the vertex (1, 4).",
              "(1, 4) → (4, −1) matches (x, y) → (y, −x). Which direction is that?",
            ],
            strategy: "Track orientation",
            commonError:
              "Stating \"rotation 90°\" without direction or centre — a rotation needs centre, angle AND direction to score full marks (180° is the only angle where direction is optional).",
          },
          {
            id: "vec-qa-p2-q06",
            question:
              "OAB is a triangle with OA = a and OB = b. M lies on AB with AM : MB = 1 : 2. N lies on OM extended such that ON = (3/2)OM. Show that AN is parallel to OB.",
            modelAnswer:
              "OM = OA + AM = a + (1/3)AB = a + (1/3)(b − a) = (2/3)a + (1/3)b. Then ON = (3/2)OM = (3/2)((2/3)a + (1/3)b) = a + ½b. So AN = ON − OA = (a + ½b) − a = ½b. AN is a scalar multiple of b = OB, so AN is parallel to OB.",
            markScheme: ["AN = 1/2 b", "OM = 2/3a + 1/3b", "ON = a + 1/2b", "multiple of b", "parallel"],
            guideRef: "Vector geometry with a and b",
            difficulty: "challenge",
            hints: [
              "Start by finding OM: the ratio 1 : 2 makes AM one third of AB.",
              "OM = (2/3)a + (1/3)b. Now scale it by 3/2 to get ON.",
              "Compute AN = ON − OA. If every a term cancels, you are done — a pure multiple of b is parallel to OB.",
            ],
            strategy: "Work backwards",
            commonError:
              "Using AM = ½AB from the ratio 1 : 2 — one part out of THREE means AM = (1/3)AB. Misreading ratios is the single biggest mark-loser in vector geometry.",
          },
        ],
      },
      {
        id: "vec-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "vec-qa-p3-q01",
            question:
              "A shape is translated by the vector (4, −1) and the image is then translated by the vector (−6, 3). Write down the single vector that describes the combined translation.",
            modelAnswer:
              "Translations combine by adding the vectors: (4, −1) + (−6, 3) = (−2, 2).",
            markScheme: ["(-2, 2)", "add the vectors", "4 - 6", "-1 + 3"],
            guideRef: "Column vectors and translations",
            difficulty: "warmup",
            commonError:
              "Subtracting the vectors — doing one journey after another always ADDS the vectors, nose to tail.",
          },
          {
            id: "vec-qa-p3-q02",
            question: "p = (2, k) and q = (−1, 3). Given that p + 2q = (0, 1), find the value of k.",
            modelAnswer:
              "2q = (−2, 6), so p + 2q = (2 − 2, k + 6) = (0, k + 6). The first components already match. Setting the second components equal: k + 6 = 1, so k = −5.",
            markScheme: ["-5", "k + 6 = 1", "2q = (-2, 6)"],
            guideRef: "Adding, subtracting and scalar multiples",
            difficulty: "core",
            hints: [
              "Write p + 2q as a single column vector, keeping k as a letter.",
              "The second component is k + 6.",
              "Match it against the given result (0, 1).",
            ],
            strategy: "Introduce a variable",
            commonError:
              "Solving k + 3 = 1 (forgetting to double q's second component), which gives k = −2 instead of −5.",
          },
          {
            id: "vec-qa-p3-q03",
            question:
              "A(−1, 2) and B(5, −1). The point C lies on AB such that AC : CB = 2 : 1. Find the coordinates of C.",
            modelAnswer:
              "AB = b − a = (6, −3). AC is 2 parts out of 3, so AC = (2/3)AB = (4, −2). Then OC = OA + AC = (−1 + 4, 2 − 2) = (3, 0). C = (3, 0).",
            markScheme: ["(3, 0)", "AB = (6, -3)", "2/3", "AC = (4, -2)"],
            guideRef: "Vector geometry with a and b",
            difficulty: "core",
            hints: [
              "Find the vector AB first.",
              "AC : CB = 2 : 1 means C is how far along AB as a fraction?",
              "Add (2/3)AB onto A's position vector.",
            ],
            strategy: "Convert ratios to fractions of the whole",
            commonError:
              "Using AC = ½AB because of the \"2 : 1\" — the ratio has 2 + 1 = 3 parts, so AC = (2/3)AB.",
            solutions: [
              {
                label: "Vector method",
                steps: [
                  "AB = b − a = (5 − (−1), −1 − 2) = (6, −3).",
                  "AC : CB = 2 : 1, so AC = (2/3)AB = (4, −2).",
                  "OC = OA + AC = (−1, 2) + (4, −2) = (3, 0).",
                ],
              },
              {
                label: "Stepping method (visual)",
                steps: [
                  "From A to B you go 6 right and 3 down.",
                  "C sits two thirds of the way along, so step two thirds of each: 4 right and 2 down from A.",
                  "Start at (−1, 2): 4 right gives 3, 2 down gives 0, so C = (3, 0).",
                  "Elegant because the arithmetic stays whole-number all the way — but the vector method generalises to any ratio and to a-and-b questions.",
                ],
              },
            ],
          },
          {
            id: "vec-qa-p3-q04",
            question:
              "Triangle T is reflected in the x-axis to give T1. T1 is then reflected in the y-axis to give T2. Describe fully the single transformation that maps T onto T2, and justify your answer.",
            modelAnswer:
              "Track a general point: (x, y) → (x, −y) after reflecting in the x-axis, then → (−x, −y) after reflecting in the y-axis. The overall rule (x, y) → (−x, −y) is a rotation of 180° about the origin. So the single transformation is a rotation, 180°, centre (0, 0).",
            markScheme: ["rotation", "180", "origin", "(x, y) → (-x, -y)"],
            guideRef: "Enlargements and combined transformations",
            difficulty: "core",
            hints: [
              "Push a general point (x, y) through both reflections one at a time.",
              "After the x-axis: (x, −y). Now reflect that in the y-axis.",
              "Which single transformation has the rule (x, y) → (−x, −y)?",
            ],
            strategy: "Try small cases",
            commonError:
              "Answering \"a reflection in the origin\" or naming both reflections — the question demands ONE correctly-named transformation: a rotation of 180° about (0, 0).",
          },
          {
            id: "vec-qa-p3-q05",
            question:
              "Triangle D has vertices (1, 1), (3, 1) and (1, 2). D is enlarged with scale factor −3, centre the origin. Find the coordinates of the vertices of the image, and state what happens to the orientation of the triangle.",
            modelAnswer:
              "With centre O, multiply each position vector by −3: (1, 1) → (−3, −3); (3, 1) → (−9, −3); (1, 2) → (−3, −6). The image has vertices (−3, −3), (−9, −3) and (−3, −6). It lies on the opposite side of the centre, is 3 times the size, and appears rotated 180° relative to D.",
            markScheme: ["(-3, -3)", "(-9, -3)", "(-3, -6)", "rotated 180", "opposite side"],
            guideRef: "Enlargements and combined transformations",
            difficulty: "core",
            hints: [
              "Centre at the origin: multiply each coordinate pair by the scale factor.",
              "The scale factor is −3: triple AND flip both signs.",
              "For the orientation, look at the diagram of a negative enlargement in the guide.",
            ],
            strategy: "Use vectors from the centre",
            commonError:
              "Giving (3, 3), (9, 3), (3, 6) by dropping the minus sign — a negative scale factor sends every point through the centre to the other side.",
          },
          {
            id: "vec-qa-p3-q06",
            question:
              "OPQ is a triangle with OP = p and OQ = q. M is the midpoint of OQ. G lies on PM such that PG : GM = 2 : 1. K is the midpoint of PQ. Prove that O, G and K lie on a straight line, and find the ratio OG : GK.",
            modelAnswer:
              "OM = ½q. PM = OM − OP = ½q − p. PG = (2/3)PM, so OG = OP + PG = p + (2/3)(½q − p) = p − (2/3)p + (1/3)q = (1/3)p + (1/3)q = (1/3)(p + q). OK = ½(p + q). So OG = (2/3)OK: OG is a scalar multiple of OK, hence parallel to it, and both vectors start at the common point O. Therefore O, G and K are collinear. Since OG = (2/3)OK, G is two thirds of the way from O to K, so OG : GK = 2 : 1. (G is the centroid — the medians PM and OK really do meet at it, two thirds of the way along each.)",
            markScheme: ["2 : 1", "OG = 1/3(p + q)", "OK = 1/2(p + q)", "OG = 2/3 OK", "common point"],
            guideRef: "Parallel vectors and collinear points",
            difficulty: "challenge",
            hints: [
              "Find OG by the route O → P → G, using PG = (2/3)PM.",
              "First get PM = ½q − p, then simplify p + (2/3)(½q − p).",
              "Compare your OG with OK = ½(p + q): is one a multiple of the other?",
            ],
            strategy: "Show one vector is a multiple of the other",
            commonError:
              "Using PG = ½PM from the ratio 2 : 1 — PG is 2 parts out of 3, so PG = (2/3)PM. Also, do not forget to state the common point O before concluding collinearity.",
          },
        ],
      },
    ],
  },
};

export default topic;
