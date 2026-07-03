import type { Topic } from "../types";

const angleAtCentreSvg = `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with centre O. Points A and B lie on the circle at the lower left and lower right, and point C lies at the top. Red lines join O to A and O to B, with the angle AOB at the centre marked 130 degrees. Blue lines join C to A and C to B, with the angle ACB at the circumference marked 65 degrees.">
  <circle cx="200" cy="160" r="115" fill="none" stroke="#64748b" stroke-width="2"/>
  <line x1="200" y1="160" x2="96" y2="209" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="200" y1="160" x2="304" y2="209" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="200" y1="45" x2="96" y2="209" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="200" y1="45" x2="304" y2="209" stroke="#2563eb" stroke-width="2.5"/>
  <path d="M 176.5 171.1 A 26 26 0 0 0 223.5 171.1" fill="none" stroke="#dc2626" stroke-width="2"/>
  <path d="M 181.8 73.7 A 34 34 0 0 0 218.2 73.7" fill="none" stroke="#2563eb" stroke-width="2"/>
  <circle cx="200" cy="160" r="3.5" fill="currentColor"/>
  <text x="200" y="206" font-size="15" fill="#dc2626" text-anchor="middle">130°</text>
  <text x="200" y="100" font-size="15" fill="#2563eb" text-anchor="middle">65°</text>
  <text x="200" y="34" font-size="16" fill="currentColor" text-anchor="middle">C</text>
  <text x="82" y="222" font-size="16" fill="currentColor">A</text>
  <text x="310" y="222" font-size="16" fill="currentColor">B</text>
  <text x="208" y="155" font-size="16" fill="currentColor">O</text>
</svg>`;

const cyclicQuadSvg = `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cyclic quadrilateral ABCD drawn inside a circle with centre O. The interior angle at vertex A is marked 85 degrees in red and the opposite interior angle at vertex C is marked 95 degrees in green.">
  <circle cx="200" cy="160" r="115" fill="none" stroke="#64748b" stroke-width="2"/>
  <polygon points="161,52 308,121 258,260 100,218" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <path d="M 180.9 61.4 A 22 22 0 0 1 153.4 72.7" fill="none" stroke="#dc2626" stroke-width="2"/>
  <path d="M 265.5 239.3 A 22 22 0 0 0 236.7 254.3" fill="none" stroke="#16a34a" stroke-width="2"/>
  <circle cx="200" cy="160" r="3.5" fill="currentColor"/>
  <text x="212" y="156" font-size="16" fill="currentColor">O</text>
  <text x="177" y="94" font-size="15" fill="#dc2626" text-anchor="middle">85°</text>
  <text x="243" y="234" font-size="15" fill="#16a34a" text-anchor="middle">95°</text>
  <text x="151" y="42" font-size="16" fill="currentColor">A</text>
  <text x="320" y="118" font-size="16" fill="currentColor">B</text>
  <text x="260" y="282" font-size="16" fill="currentColor">C</text>
  <text x="76" y="232" font-size="16" fill="currentColor">D</text>
</svg>`;

const altSegmentSvg = `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with centre O. A tangent touches the circle at point A at the bottom and extends to point T on the right. Chords join A to B, A to C and C to B. The angle between the tangent AT and the chord AB is marked 65 degrees, and the angle ACB in the alternate segment is also marked 65 degrees. A dashed green radius OA meets the tangent at a right angle.">
  <circle cx="210" cy="140" r="100" fill="none" stroke="#64748b" stroke-width="2"/>
  <line x1="60" y1="240" x2="360" y2="240" stroke="#16a34a" stroke-width="2.5"/>
  <line x1="210" y1="140" x2="210" y2="240" stroke="#16a34a" stroke-width="2" stroke-dasharray="5 4"/>
  <polyline points="210,228 222,228 222,240" fill="none" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="210" y1="240" x2="287" y2="76" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="210" y1="240" x2="123" y2="90" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="123" y1="90" x2="287" y2="76" stroke="#2563eb" stroke-width="2.5"/>
  <path d="M 240 240 A 30 30 0 0 0 222.8 212.9" fill="none" stroke="#dc2626" stroke-width="2"/>
  <path d="M 136.1 112.5 A 26 26 0 0 0 148.9 87.8" fill="none" stroke="#dc2626" stroke-width="2"/>
  <circle cx="210" cy="140" r="3.5" fill="currentColor"/>
  <text x="253" y="222" font-size="15" fill="#dc2626" text-anchor="middle">65°</text>
  <text x="164" y="117" font-size="15" fill="#dc2626" text-anchor="middle">65°</text>
  <text x="210" y="262" font-size="16" fill="currentColor" text-anchor="middle">A</text>
  <text x="295" y="68" font-size="16" fill="currentColor">B</text>
  <text x="103" y="84" font-size="16" fill="currentColor">C</text>
  <text x="221" y="135" font-size="16" fill="currentColor">O</text>
  <text x="366" y="234" font-size="16" fill="currentColor">T</text>
</svg>`;

const topic: Topic = {
  id: "geometry",
  title: "Angles, Polygons & Circle Theorems",
  subject: "Maths",
  icon: "📐",
  intro:
    "Angle chasing is detective work: every line, triangle and circle leaves clues, and a handful of theorems let you deduce angles you were never told. In this topic you'll master angle facts, the proper names for parallel-line angles, polygon rules, three-figure bearings, and every circle theorem on the 4MA1 Higher paper — including how to word your reasons so the examiner has to give you the marks.",
  guide: [
    {
      heading: "Angles at a point, on a line and at a crossing",
      body: "Three facts power almost every angle question, and they all come from the idea of a **full turn**.\n\n- Angles at a point add to **360°** (a full turn).\n- Angles on a straight line add to **180°** (a half turn).\n- When two straight lines cross, **vertically opposite angles are equal**.\n\nOn their own these feel obvious, but examiners chain them together. A typical question gives you angles as expressions like (2x + 10)° and expects you to build an equation: decide whether the angles sit on a line (sum 180°) or around a point (sum 360°), add them, and solve.\n\nWhen you use a fact in a written answer, **quote it by name**: \"angles on a straight line add to 180°\". The reason is worth a mark all by itself.",
      discovery: {
        problem:
          "Two straight lines cross, making four angles. You are told just ONE of them: 70°. Without measuring, can you work out all the other three? What if the lines had crossed at a different slant — how many of the four angles do you really need to be told?",
        idea: "One angle is enough. The angle next to 70° lies on a straight line with it, so it must be 110°; the other two are vertically opposite these. Every crossing carries only one piece of information — the rest is forced. Angle chasing is about spotting what is forced.",
      },
      whyItWorks:
        "Why are vertically opposite angles equal? Call two neighbouring angles at the crossing a and b. They sit on a straight line, so a + b = 180°. But b and the angle opposite a ALSO sit on a straight line, so b + (opposite of a) = 180°. Both a and its opposite equal 180° − b, so they are equal. No measuring needed — it is forced by the straight lines.",
      strategies: ["draw a diagram", "introduce a variable", "work backwards"],
      keyPoints: [
        "Angles at a point sum to 360°; angles on a straight line sum to 180°.",
        "Vertically opposite angles are equal — this is a consequence of the straight-line fact, not a new axiom.",
        "With algebraic angles, first decide the correct total (180° or 360°), then form and solve an equation.",
        "Always state the angle fact you used, word for word: it earns a reason mark.",
      ],
    },
    {
      heading: "Parallel lines: alternate, corresponding, co-interior",
      body: "A transversal crossing a pair of parallel lines creates eight angles, but only two different sizes. The three relationships have **proper names** that Edexcel expects you to use — \"Z angles\" or \"F angles\" score nothing on 4MA1.\n\n- **Alternate angles are equal** (the Z shape — angles on opposite sides of the transversal, between the parallels).\n- **Corresponding angles are equal** (the F shape — angles in matching positions at each crossing).\n- **Co-interior angles add to 180°** (the C shape — both between the parallels, same side of the transversal). Also called allied angles.\n\nExam questions rarely use one rule alone. A classic two-step: use alternate angles to jump across to the other parallel line, then angles on a straight line to finish. Write a reason for **every** step.",
      discovery: {
        problem:
          "Draw two parallel lines and a slanted line crossing both. Measure all eight angles with a protractor. How many genuinely different values do you get? Now tilt the transversal and repeat — what stays true?",
        idea: "Only two values ever appear, and they add to 180°. Sliding one crossing along the transversal onto the other maps each angle exactly onto its corresponding angle — parallel lines mean the two crossings are identical copies. Every parallel-line rule follows from that single translation idea.",
      },
      whyItWorks:
        "Corresponding angles are equal because translating one intersection along the transversal to the other keeps every direction the same (that is what parallel means), so the angle pattern is copied exactly. Alternate angles then follow: an alternate pair is a corresponding pair combined with vertically opposite angles. Co-interior follows too: a co-interior partner is the straight-line neighbour of an alternate angle, so the pair sums to 180°. Three rules, one idea.",
      strategies: ["draw a diagram", "look for invariants", "exploit symmetry"],
      keyPoints: [
        "Alternate angles: equal. Corresponding angles: equal. Co-interior angles: sum to 180°.",
        "Use the full names in reasons — \"Z angles\" earns no marks on 4MA1.",
        "The reason must mention parallel lines, e.g. \"alternate angles (AB parallel to CD) are equal\".",
        "If you can't see the rule, extend the lines lightly in pencil — the Z, F or C shape often hides in a bigger diagram.",
      ],
      thinkDeeper:
        "The parallel-line rules work in reverse, too: if a pair of alternate angles is equal, the lines MUST be parallel. Surveyors and joiners use this converse to test for parallelism without ever measuring the distance between the lines. Could you design a test for parallelism using only co-interior angles?",
    },
    {
      heading: "Triangles and quadrilaterals",
      body: "The angles of a triangle sum to **180°**, and the angles of a quadrilateral sum to **360°** (any quadrilateral splits into two triangles along a diagonal).\n\nTwo triangle facts do heavy lifting in exam questions:\n\n- **Isosceles triangles**: the two base angles (opposite the equal sides) are equal. Spotting equal sides — especially two radii of a circle — is often the hidden key to a question.\n- **Exterior angle of a triangle** = sum of the two interior opposite angles. This is a shortcut: it merges \"angles in a triangle\" and \"angles on a straight line\" into one step.\n\nSpecial quadrilaterals bring their own facts: a parallelogram or rhombus has opposite angles equal and co-interior angles (between the parallel sides) summing to 180°; a kite has one pair of equal opposite angles.",
      discovery: {
        problem:
          "Cut any triangle out of paper — the wonkier the better. Tear off the three corners and place them together at a point. What shape do they always make? Try again with a quadrilateral's four corners.",
        idea: "The triangle's corners always line up along a straight edge (180°), and the quadrilateral's corners complete a full turn (360°). Tearing corners is persuasive, but it isn't a proof — the proof uses alternate angles, and you will be asked to give it.",
      },
      whyItWorks:
        "Proof that a triangle's angles sum to 180°: take triangle ABC and draw a line through A parallel to BC. The angle between this line and AB equals angle B (alternate angles), and the angle between the line and AC equals angle C (alternate angles). These two copies plus angle A sit together on a straight line at A, so A + B + C = 180°. The exterior angle fact follows immediately: the exterior angle at C is 180° − C, which equals A + B.",
      strategies: ["draw a diagram", "try small cases", "work backwards"],
      keyPoints: [
        "Triangle angles sum to 180°; quadrilateral angles sum to 360°.",
        "Base angles of an isosceles triangle are equal — hunt for equal sides (dashes on the diagram, or two radii).",
        "Exterior angle of a triangle = sum of the two interior opposite angles.",
        "In a parallelogram, opposite angles are equal and neighbouring angles sum to 180°.",
      ],
      thinkDeeper:
        "On a sphere, triangle angles sum to MORE than 180° — a triangle with one vertex at the North Pole and two on the equator can have three right angles. The 180° fact is really a fact about flat space. The proof above needed a parallel line through A; on a sphere there is no such line, and the proof collapses.",
    },
    {
      heading: "Interior and exterior angles of polygons",
      body: "For any polygon with n sides:\n\n- Sum of **interior** angles = (n − 2) × 180°.\n- Sum of **exterior** angles = **360°**, always — regular or irregular, any n.\n- At each vertex, interior + exterior = 180° (they sit on a straight line).\n\nFor a **regular** polygon (all sides and angles equal): each exterior angle = 360°/n, and each interior angle = 180° − 360°/n.\n\nThe most common exam task runs backwards: given an interior angle of a regular polygon, find n. Don't wrestle with (n − 2) × 180°/n — instead subtract from 180° to get the exterior angle, then n = 360° ÷ exterior. For irregular polygons, work with the correct total: e.g. a pentagon's five interior angles must sum to 540°.",
      discovery: {
        problem:
          "Imagine walking round the edge of any polygon-shaped park, turning at each corner, until you arrive back where you started, facing your original direction. Add up all the turns you made. Does the answer depend on the shape? On the number of corners?",
        idea: "You always turn through exactly 360° in total — one full turn — no matter how many corners or how irregular the shape. Each turn is an exterior angle, so the exterior angles of ANY polygon sum to 360°. Everything else (the interior sum formula, regular polygon angles) follows from this one walk.",
      },
      whyItWorks:
        "At each of the n vertices, interior + exterior = 180°, so all interiors + all exteriors = 180n degrees. The walk shows the exteriors total 360°, so the interiors total 180n − 360 = (n − 2) × 180 degrees. The same formula comes from fanning the polygon into n triangles from an interior point: n × 180° minus the full turn of 360° at the centre.",
      strategies: ["look for invariants", "consider extremes", "work backwards"],
      keyPoints: [
        "Interior angle sum = (n − 2) × 180°; exterior angle sum = 360° for every polygon.",
        "Regular polygon: exterior = 360°/n, interior = 180° − 360°/n.",
        "Given a regular interior angle, find n via the exterior angle: n = 360° ÷ (180° − interior).",
        "Check for sense: interior angles of a (convex) polygon are less than 180°, and n must come out a whole number.",
      ],
      thinkDeeper:
        "Can a regular polygon have an interior angle of 155°? The exterior would be 25°, and 360 ÷ 25 = 14.4 — not a whole number, so no such polygon exists. Which whole-number interior angles ARE possible? Exactly those where 180 − interior divides 360 — a lovely divisibility problem hiding inside geometry.",
    },
    {
      heading: "Bearings",
      body: "A **bearing** describes a direction as an angle measured **clockwise from north**, always written with **three figures**: due east is 090°, due south is 180°, a direction slightly west of north might be 355°.\n\nThe standard toolkit:\n\n- Draw a **north line** (vertical arrow) at every point in the problem. All north lines are parallel — so alternate and co-interior angles connect bearings at different points.\n- **Back bearings**: the bearing of A from B is the bearing of B from A plus or minus 180° (add if the original is under 180°, subtract if it is over).\n- Read the phrase carefully: \"the bearing of B **from** A\" is measured standing **at A**.\n\nBearings questions are really parallel-lines questions in disguise: the parallel north lines are the parallels, and the path between the points is the transversal.",
      discovery: {
        problem:
          "A ship sails from P on a bearing of 060°. The captain radios the port: \"What bearing should a rescue boat leaving MY position take to get back to you?\" Guess first: is it 060° again? 120°? Something else? Now draw it with two north lines and check.",
        idea: "The return bearing is 240° — exactly 180° more. The two north lines are parallel, and co-interior angles between them force the back bearing to differ by exactly a half-turn. One sketch with two north arrows turns every back-bearing question into a parallel-lines question.",
      },
      strategies: ["draw a diagram", "exploit symmetry"],
      keyPoints: [
        "Bearings are measured clockwise from north and written with three figures (e.g. 072°).",
        "Draw a north line at every point mentioned — they are parallel lines you can use.",
        "Back bearing = bearing ± 180°.",
        "\"Bearing of B from A\" means you are standing at A, looking towards B.",
      ],
    },
    {
      heading: "Circle theorems: angles from the same arc",
      body: "Four theorems govern angles made by chords in a circle. In every reason, name the theorem exactly as below.\n\n- **The angle at the centre is twice the angle at the circumference** (standing on the same arc). In the diagram, angle AOB = 130° forces angle ACB = 65°.\n- **The angle in a semicircle is 90°** — if AB is a diameter, any angle ACB on the circle is a right angle. (This is the centre theorem with a 180° centre angle.)\n- **Angles in the same segment are equal** — two angles standing on the same chord, on the same side of it, are equal. (Both are half the same centre angle.)\n- **Opposite angles of a cyclic quadrilateral sum to 180°** — for any quadrilateral whose four vertices lie on a circle.\n\nStrategy for \"find the angle, giving reasons\" questions: mark every radius (they give isosceles triangles), then chase angles one theorem at a time, writing the theorem name beside each step. A typical mark scheme gives one mark for each correct angle **and** one for each correctly named reason.",
      discovery: {
        problem:
          "Draw a big circle, mark two points A and B on it, and draw the angle AOB at the centre O. Now pick any point C on the major arc and measure angle ACB at the circumference. Move C somewhere else on the same arc and measure again. What do you notice — about how the two circumference angles compare with each other, and with the angle at the centre?",
        idea: "Every position of C gives the SAME angle, and it is always exactly half the angle at the centre. One theorem, two conjectures: angle at centre = 2 × angle at circumference, and angles in the same segment are equal. The proof needs nothing but isosceles triangles — see why it works below.",
      },
      whyItWorks:
        "Proof of the angle-at-the-centre theorem. Let A, B, C lie on a circle with centre O, and draw the line from C through O, extended to a point D on the far side. Triangle OCA is isosceles because OC = OA (both radii); call its base angles a, so angle OCA = angle OAC = a. The exterior angle of this triangle at O gives angle AOD = a + a = 2a (exterior angle = sum of interior opposite angles). Likewise triangle OCB is isosceles with base angles b, so angle BOD = 2b. Adding: angle AOB = 2a + 2b = 2(a + b) = 2 × angle ACB. The semicircle theorem is the special case where angle AOB = 180°, and \"same segment\" follows because every angle at the circumference equals half of the SAME centre angle.",
      diagrams: [
        {
          id: "geo-diag-01",
          title: "Angle at the centre is twice the angle at the circumference",
          svg: angleAtCentreSvg,
          caption:
            "Angle AOB at the centre (130°, red) is exactly twice angle ACB at the circumference (65°, blue) — both stand on the same arc AB.",
        },
        {
          id: "geo-diag-02",
          title: "Opposite angles of a cyclic quadrilateral",
          svg: cyclicQuadSvg,
          caption:
            "ABCD is a cyclic quadrilateral: all four vertices lie on the circle. Opposite angles sum to 180°, here 85° + 95° = 180°.",
        },
      ],
      strategies: ["draw a diagram", "look for invariants", "work backwards"],
      keyPoints: [
        "Angle at the centre = 2 × angle at the circumference (same arc).",
        "Angle in a semicircle is 90° — triggered by the word \"diameter\".",
        "Angles in the same segment are equal.",
        "Opposite angles of a cyclic quadrilateral sum to 180°.",
        "Radii are equal, so joining O to points on the circle creates isosceles triangles — often the hidden first step.",
      ],
      thinkDeeper:
        "The cyclic quadrilateral theorem is the centre theorem used twice: angle B is half of one angle AOC, angle D is half of the reflex angle AOC, and the two centre angles together make 360°, so B + D = 180°. Try writing this out as a formal proof — it is a favourite 4-mark question. And the converse is true too: if opposite angles of a quadrilateral sum to 180°, its vertices must lie on a circle.",
    },
    {
      heading: "Circle theorems: tangents and the alternate segment",
      body: "A **tangent** touches the circle at exactly one point. Three theorems:\n\n- **A tangent is perpendicular to the radius** at the point of contact (angle = 90°).\n- **Tangents from an external point are equal in length.** If TA and TB are both tangents from T, then TA = TB — so triangle TAB is isosceles, and the line TO is a line of symmetry.\n- **Alternate segment theorem**: the angle between a tangent and a chord equals the angle in the **alternate segment** — the angle the chord subtends at the circumference on the *other* side. In the diagram, the 65° between tangent AT and chord AB equals the 65° at C.\n\nThe alternate segment theorem is the one students misquote. Say it in full: \"the angle between a tangent and a chord equals the angle in the alternate segment\". Combined questions love to chain it with the isosceles triangle from equal tangents — practise that combination.",
      discovery: {
        problem:
          "Draw a circle, a tangent touching it at A, and a chord AB. Measure the angle between the tangent and the chord. Now pick any point C on the far (major) arc and measure angle ACB. Repeat with a steeper chord. What do you notice?",
        idea: "The two angles always match: tangent–chord angle = angle in the alternate segment. As a sanity check, when the chord is a diameter both angles become 90° — the tangent–radius theorem and the semicircle theorem agree with it perfectly.",
      },
      whyItWorks:
        "Why the alternate segment theorem holds: let the chord be AB, the tangent touch at A, and call the tangent–chord angle t. The radius OA meets the tangent at 90°, so angle OAB = 90° − t. Triangle OAB is isosceles (OA = OB, radii), so angle AOB = 180° − 2(90° − t) = 2t. By the angle-at-the-centre theorem, angle ACB in the alternate segment = half of angle AOB = t. Every tangent theorem ultimately leans on tangent ⊥ radius.",
      diagrams: [
        {
          id: "geo-diag-03",
          title: "The alternate segment theorem",
          svg: altSegmentSvg,
          caption:
            "The angle between tangent AT and chord AB (65°) equals angle ACB in the alternate segment (65°). The dashed radius OA meets the tangent at 90°.",
        },
      ],
      strategies: ["draw a diagram", "exploit symmetry", "work backwards"],
      keyPoints: [
        "Tangent ⊥ radius at the point of contact — look for the right angle the instant you see \"tangent\".",
        "Tangents from an external point are equal, creating an isosceles triangle.",
        "Alternate segment theorem: angle between tangent and chord = angle in the alternate segment.",
        "In multi-step problems, write one line per angle with its theorem named — reasons carry their own marks.",
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Angles on a straight line add up to…?",
        back: "180°. Angles at a point add up to 360°.",
      },
      {
        front: "Vertically opposite angles are…?",
        back: "Equal. Formed when two straight lines cross.",
      },
      {
        front: "Alternate angles (parallel lines) — rule and shape?",
        back: "Equal. The Z shape — but write \"alternate angles\" in reasons, never \"Z angles\".",
      },
      {
        front: "Corresponding angles (parallel lines) — rule and shape?",
        back: "Equal. The F shape — matching positions at the two crossings.",
      },
      {
        front: "Co-interior angles (parallel lines) — rule and shape?",
        back: "Add up to 180°. The C shape — both between the parallels, same side of the transversal.",
      },
      {
        front: "Exterior angle of a triangle equals…?",
        back: "The sum of the two interior opposite angles.",
      },
      {
        front: "Sum of interior angles of an n-sided polygon?",
        back: "(n − 2) × 180°. E.g. hexagon: 4 × 180° = 720°.",
      },
      {
        front: "Sum of exterior angles of ANY polygon?",
        back: "360°. For a regular polygon each exterior angle is 360°/n.",
      },
      {
        front: "Three rules for bearings?",
        back: "Measured clockwise from north; written with three figures; back bearing = bearing ± 180°.",
      },
      {
        front: "Angle at the centre theorem?",
        back: "The angle at the centre is twice the angle at the circumference standing on the same arc.",
      },
      {
        front: "Angle in a semicircle?",
        back: "90°. If AB is a diameter, angle ACB = 90° for any C on the circle.",
      },
      {
        front: "Opposite angles of a cyclic quadrilateral?",
        back: "Add up to 180°. All four vertices must lie on the circle.",
      },
      {
        front: "Two tangent facts?",
        back: "A tangent is perpendicular to the radius at the point of contact; tangents from an external point are equal in length.",
      },
      {
        front: "Alternate segment theorem?",
        back: "The angle between a tangent and a chord equals the angle in the alternate segment.",
      },
    ],
    keyFacts: [
      "Angles on a straight line sum to 180°; angles at a point sum to 360°; vertically opposite angles are equal.",
      "Parallel lines: alternate angles equal, corresponding angles equal, co-interior angles sum to 180° — use these exact names.",
      "Triangle angles sum to 180°; base angles of an isosceles triangle are equal; exterior angle = sum of interior opposite angles.",
      "Polygon: interior angles sum to (n − 2) × 180°; exterior angles always sum to 360°.",
      "Regular polygon from an angle: exterior = 180° − interior, then n = 360° ÷ exterior.",
      "Bearings: three figures, clockwise from north; draw a north line at every point; back bearing = bearing ± 180°.",
      "Circle: angle at centre = 2 × angle at circumference; angle in a semicircle = 90°; angles in the same segment are equal.",
      "Cyclic quadrilateral: opposite angles sum to 180°.",
      "Tangent ⊥ radius; tangents from an external point are equal; angle between tangent and chord = angle in the alternate segment.",
      "In \"giving reasons\" questions, one line per step: the angle, then the theorem named in full.",
    ],
    formulaSheet: [
      {
        name: "Interior angle sum of a polygon",
        formula: "(n − 2) × 180°",
        note: "n = number of sides. Pentagon 540°, hexagon 720°.",
      },
      {
        name: "Exterior angle sum of a polygon",
        formula: "360°",
        note: "True for every polygon, regular or irregular.",
      },
      {
        name: "Regular polygon: each exterior angle",
        formula: "360° ÷ n",
        note: "So n = 360° ÷ exterior angle.",
      },
      {
        name: "Regular polygon: each interior angle",
        formula: "180° − 360°/n",
        note: "Interior + exterior = 180° at each vertex.",
      },
      {
        name: "Back bearing",
        formula: "bearing ± 180°",
        note: "Add if the bearing is under 180°, subtract if over.",
      },
      {
        name: "Angle at the centre",
        formula: "angle AOB = 2 × angle ACB",
        note: "Same arc AB; semicircle case gives 90° at the circumference.",
      },
      {
        name: "Cyclic quadrilateral",
        formula: "opposite angles sum to 180°",
        note: "A + C = 180° and B + D = 180°.",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "geo-quiz-mcq-01",
        question:
          "Three angles on a straight line are x°, 2x° and 30°. What is the value of x?",
        options: ["50", "60", "110", "75"],
        answerIndex: 0,
        explanation:
          "Angles on a straight line sum to 180°, so x + 2x + 30 = 180, giving 3x = 150 and x = 50. Choosing 110 comes from using 360° (angles at a point) by mistake; 60 comes from forgetting the 30°.",
        guideRef: "Angles at a point, on a line and at a crossing",
        difficulty: "warmup",
      },
      {
        id: "geo-quiz-mcq-02",
        question:
          "Two straight lines cross. One of the four angles formed is 130°. What is the size of the angle vertically opposite it?",
        options: ["130°", "50°", "65°", "230°"],
        answerIndex: 0,
        explanation:
          "Vertically opposite angles are equal, so it is also 130°. The angle NEXT to it (on the straight line) would be 50°; 65° is a half-the-angle slip and 230° comes from subtracting from 360°.",
        guideRef: "Angles at a point, on a line and at a crossing",
        difficulty: "warmup",
      },
      {
        id: "geo-quiz-mcq-03",
        question:
          "AB and CD are parallel lines cut by a transversal. One angle is 74°. What is the size of its co-interior partner?",
        options: ["106°", "74°", "16°", "254°"],
        answerIndex: 0,
        explanation:
          "Co-interior angles add to 180°, so the partner is 180° − 74° = 106°. Answering 74° confuses co-interior with alternate or corresponding angles (which are equal); 16° subtracts from 90°.",
        guideRef: "Parallel lines: alternate, corresponding, co-interior",
        difficulty: "core",
        hints: [
          "Co-interior angles form a C shape between the parallel lines.",
          "Co-interior angles are NOT equal — think about what they add up to.",
          "Subtract the given angle from 180°.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "geo-quiz-mcq-04",
        question:
          "In triangle ABC, AB = AC and angle A = 40°. What is the size of angle B?",
        options: ["70°", "140°", "40°", "100°"],
        answerIndex: 0,
        explanation:
          "AB = AC makes the triangle isosceles with equal base angles at B and C. So angle B = (180° − 40°) ÷ 2 = 70°. 140° forgets to halve; 40° wrongly copies the apex angle; 100° treats 40° as one of the base angles.",
        guideRef: "Triangles and quadrilaterals",
        difficulty: "core",
        hints: [
          "Two equal sides means two equal angles — which two?",
          "The equal angles are opposite the equal sides: angles B and C.",
          "Subtract 40° from 180°, then share equally between B and C.",
        ],
        strategy: "exploit symmetry",
      },
      {
        id: "geo-quiz-mcq-05",
        question: "What is the size of each exterior angle of a regular decagon (10 sides)?",
        options: ["36°", "144°", "10°", "72°"],
        answerIndex: 0,
        explanation:
          "Exterior angles of any polygon sum to 360°, and a regular decagon shares this equally: 360° ÷ 10 = 36°. 144° is the INTERIOR angle; 72° halves 144° incorrectly.",
        guideRef: "Interior and exterior angles of polygons",
        difficulty: "core",
        hints: [
          "What do the exterior angles of any polygon add up to?",
          "A regular polygon shares that total equally among its vertices.",
          "Divide 360° by the number of sides.",
        ],
        strategy: "look for invariants",
      },
      {
        id: "geo-quiz-mcq-06",
        question:
          "Each interior angle of a regular polygon is 156°. How many sides does the polygon have?",
        options: ["15", "12", "13", "24"],
        answerIndex: 0,
        explanation:
          "Exterior angle = 180° − 156° = 24°, and n = 360° ÷ 24° = 15. Choosing 24 stops at the exterior angle; 12 and 13 come from arithmetic slips in (n − 2) × 180°/n = 156.",
        guideRef: "Interior and exterior angles of polygons",
        difficulty: "core",
        hints: [
          "Working with the interior angle formula directly is messy — is there an easier angle to use?",
          "Interior + exterior = 180° at each vertex.",
          "Find the exterior angle, then divide it into 360°.",
        ],
        strategy: "work backwards",
      },
      {
        id: "geo-quiz-mcq-07",
        question: "The bearing of B from A is 065°. What is the bearing of A from B?",
        options: ["245°", "115°", "295°", "065°"],
        answerIndex: 0,
        explanation:
          "The back bearing differs by 180°: 065° + 180° = 245°. 115° subtracts from 180°, and 295° subtracts 65° from 360° — both classic slips. The bearing is only unchanged (065°) if you forget to turn round at all!",
        guideRef: "Bearings",
        difficulty: "core",
        hints: [
          "Draw north lines at both A and B — they are parallel.",
          "Standing at B, you face the exact opposite direction to the A-to-B journey.",
          "Back bearing = bearing + 180° when the bearing is less than 180°.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "geo-quiz-mcq-08",
        question:
          "A, B and C lie on a circle with centre O. Angle AOB = 108°, and C is on the major arc AB. What is angle ACB?",
        options: ["54°", "216°", "108°", "126°"],
        answerIndex: 0,
        explanation:
          "The angle at the centre is twice the angle at the circumference on the same arc, so angle ACB = 108° ÷ 2 = 54°. 216° doubles instead of halving; 126° subtracts from 180° (cyclic-quadrilateral thinking applied to the wrong situation).",
        guideRef: "Circle theorems: angles from the same arc",
        difficulty: "core",
        hints: [
          "Both angles stand on the same arc AB — which theorem links an angle at O to an angle at the circumference?",
          "The angle at the centre is the bigger one.",
          "Halve the centre angle.",
        ],
        strategy: "look for invariants",
      },
      {
        id: "geo-quiz-mcq-09",
        question:
          "PQRS is a cyclic quadrilateral. Angle P = 83°. What is the size of angle R?",
        options: ["97°", "83°", "277°", "7°"],
        answerIndex: 0,
        explanation:
          "P and R are opposite vertices of a cyclic quadrilateral, so P + R = 180°, giving R = 97°. 83° confuses this with 'opposite angles of a parallelogram are equal'; 277° subtracts from 360°; 7° subtracts from 90°.",
        guideRef: "Circle theorems: angles from the same arc",
        difficulty: "core",
        hints: [
          "All four vertices lie on a circle — which theorem applies to opposite angles?",
          "Opposite angles of a cyclic quadrilateral are supplementary.",
          "Subtract 83° from 180°.",
        ],
        strategy: "work backwards",
      },
      {
        id: "geo-quiz-mcq-10",
        question:
          "TA and TB are tangents to a circle centre O, touching it at A and B. Angle ATB = 48°, and C lies on the major arc AB. What is angle ACB?",
        options: ["66°", "132°", "48°", "90°"],
        answerIndex: 0,
        explanation:
          "Tangent ⊥ radius gives angles OAT = OBT = 90°. In quadrilateral OATB, angle AOB = 360° − 90° − 90° − 48° = 132°. The angle at the centre is twice the angle at the circumference, so angle ACB = 66°. Choosing 132° stops at the centre angle; 48° copies the tangent angle; 90° misapplies the semicircle theorem.",
        guideRef: "Circle theorems: tangents and the alternate segment",
        difficulty: "challenge",
        hints: [
          "Join O to A and O to B. What angles do the tangents make with these radii?",
          "The quadrilateral OATB has angle sum 360° — find angle AOB.",
          "Once you know the angle at the centre, one more theorem gives angle ACB.",
        ],
        strategy: "draw a diagram",
      },
    ],
    qa: [
      {
        id: "geo-quiz-qa-01",
        question:
          "Four angles meet at a point. Their sizes are (x + 10)°, 2x°, 90° and (3x − 40)°. Find the value of x and the size of the largest of the four angles.",
        modelAnswer:
          "Angles at a point sum to 360°. So (x + 10) + 2x + 90 + (3x − 40) = 360, which simplifies to 6x + 60 = 360, so 6x = 300 and x = 50. The four angles are 60°, 100°, 90° and 110°. The largest angle is 110°. (Check: 60 + 100 + 90 + 110 = 360 ✓)",
        markScheme: ["110", "x = 50", "360", "angles at a point", "6x + 60"],
        commonError:
          "Using 180° as the total (angles on a line) instead of 360° (angles at a point) — read whether the angles are at a point or on a line.",
        guideRef: "Angles at a point, on a line and at a crossing",
        difficulty: "warmup",
      },
      {
        id: "geo-quiz-qa-02",
        question:
          "AB and CD are parallel lines. A straight line EF crosses AB at X and CD at Y, with E above AB and F below CD. Angle AXY = 116°. (a) Find angle XYD, giving a reason. (b) Find angle XYC, giving a reason.",
        modelAnswer:
          "(a) Angle XYD = 116°, because angle AXY and angle XYD are alternate angles (AB parallel to CD), and alternate angles are equal. (b) Angle XYC = 180° − 116° = 64°, because angle AXY and angle XYC are co-interior angles (AB parallel to CD), which add up to 180°. (Alternatively: XYC and XYD lie on the straight line CD, so XYC = 180° − 116° = 64°.)",
        markScheme: ["64", "116", "alternate", "co-interior", "parallel"],
        commonError:
          "Writing \"Z angles\" or \"C angles\" as the reason — 4MA1 mark schemes require the words alternate, corresponding or co-interior, and a mention of the parallel lines.",
        guideRef: "Parallel lines: alternate, corresponding, co-interior",
        difficulty: "core",
        hints: [
          "Sketch the two parallels and the transversal, and mark 116° at X between XA and XE... which angles at Y sit between the parallels?",
          "A and D are on opposite sides of the line EF — what do we call that pair of angles?",
          "For part (b), C and D are on a straight line through Y.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "geo-quiz-qa-03",
        question:
          "The interior angles of a polygon add up to 2340°. Work out the number of sides of the polygon. If the polygon is regular, find the size of each exterior angle.",
        modelAnswer:
          "Interior angle sum = (n − 2) × 180°. So (n − 2) × 180 = 2340, giving n − 2 = 13 and n = 15 sides. If regular, each exterior angle = 360° ÷ 15 = 24°. (Check: each interior angle would be 2340 ÷ 15 = 156°, and 156 + 24 = 180 ✓)",
        markScheme: ["15", "24", "(n − 2) × 180", "2340", "360"],
        commonError:
          "Solving (n − 2) × 180 = 2340 to get n = 13 and forgetting to add the 2 back on.",
        guideRef: "Interior and exterior angles of polygons",
        difficulty: "core",
        hints: [
          "Which formula links the interior angle sum to the number of sides?",
          "Divide 2340 by 180 first.",
          "That quotient is n − 2, not n. For the exterior angle, use the 360° fact.",
        ],
        strategy: "work backwards",
      },
      {
        id: "geo-quiz-qa-04",
        question:
          "A ship sails from port P on a bearing of 070° to a buoy Q. At Q it changes course and sails on a bearing of 160° to a lighthouse R. (a) Write down the bearing of P from Q. (b) Work out the size of angle PQR.",
        modelAnswer:
          "(a) Bearing of P from Q = 070° + 180° = 250° (back bearing: north lines at P and Q are parallel, so the bearings differ by 180°). (b) At Q, the direction to P is 250° and the direction to R is 160°, both measured clockwise from the north line at Q. Angle PQR = 250° − 160° = 90°.",
        markScheme: ["90", "250", "back bearing", "180", "north"],
        commonError:
          "Subtracting the two given bearings (160° − 70° = 90° happens to work here, but only by coincidence when the answer is 90°) — always convert to directions FROM the same point before subtracting.",
        guideRef: "Bearings",
        difficulty: "core",
        hints: [
          "Draw a north line at Q. Part (a) is a back-bearing.",
          "Add or subtract 180° from 070°.",
          "For (b), both QP and QR are directions from Q — find each as a clockwise angle from Q's north line, then subtract.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "geo-quiz-qa-05",
        question:
          "A, B, C and D lie on a circle with centre O, in that order, so that ABCD is a cyclic quadrilateral. B is on the major arc AC and D is on the minor arc AC. The (non-reflex) angle AOC = 150°. Find angle ABC and angle ADC, giving a reason for each answer.",
        modelAnswer:
          "Angle ABC = 150° ÷ 2 = 75°, because the angle at the centre is twice the angle at the circumference standing on the same arc (the minor arc AC). Angle ADC = 180° − 75° = 105°, because opposite angles of a cyclic quadrilateral add up to 180°. (Check via the reflex angle: reflex AOC = 360° − 150° = 210°, and 210° ÷ 2 = 105° ✓)",
        markScheme: ["75", "105", "angle at the centre", "cyclic quadrilateral", "180"],
        commonError:
          "Halving 150° for BOTH angles — angle ADC stands on the major arc, so it corresponds to the reflex angle at O, not the 150°.",
        guideRef: "Circle theorems: angles from the same arc",
        difficulty: "core",
        hints: [
          "Angle ABC and angle AOC = 150° both stand on the minor arc AC.",
          "Halve the centre angle for angle ABC.",
          "B and D are opposite vertices of cyclic quadrilateral ABCD — what do their angles sum to?",
        ],
        strategy: "look for invariants",
        solutions: [
          {
            label: "Cyclic quadrilateral route",
            steps: [
              "Angle ABC = 150° ÷ 2 = 75° (angle at the centre is twice the angle at the circumference).",
              "ABCD is a cyclic quadrilateral, and B and D are opposite vertices.",
              "So angle ADC = 180° − 75° = 105° (opposite angles of a cyclic quadrilateral sum to 180°).",
            ],
          },
          {
            label: "Two centre angles route (elegant — one theorem does everything)",
            steps: [
              "Angle ABC stands on the minor arc AC, matching the 150° at the centre: angle ABC = 150° ÷ 2 = 75°.",
              "Angle ADC stands on the MAJOR arc AC, matching the reflex angle at the centre: reflex AOC = 360° − 150° = 210°.",
              "So angle ADC = 210° ÷ 2 = 105°. The two answers summing to 180° is exactly WHY the cyclic quadrilateral theorem is true.",
            ],
          },
        ],
      },
      {
        id: "geo-quiz-qa-06",
        question:
          "TA and TB are tangents to a circle, touching it at A and B. C is a point on the major arc AB. Angle ATB = 44°. Work out the size of angle ACB, giving a reason for each step of your working.",
        modelAnswer:
          "TA = TB because tangents from an external point are equal, so triangle TAB is isosceles. Angle TAB = angle TBA = (180° − 44°) ÷ 2 = 68° (base angles of an isosceles triangle; angles in a triangle sum to 180°). Angle TAB is the angle between the tangent TA and the chord AB, so angle ACB = 68° by the alternate segment theorem. Angle ACB = 68°.",
        markScheme: ["68", "tangents", "equal", "isosceles", "alternate segment"],
        commonError:
          "Assuming angle ACB equals the 44° at T, or halving 44° — the tangent angle at T is not an angle at the circumference; you must go through the isosceles triangle (or the centre).",
        guideRef: "Circle theorems: tangents and the alternate segment",
        difficulty: "challenge",
        hints: [
          "What does the theorem about two tangents from the same external point tell you about triangle TAB?",
          "Find the base angles of the isosceles triangle TAB.",
          "Angle TAB sits between a tangent and a chord — which theorem carries it into the circle?",
        ],
        strategy: "exploit symmetry",
        solutions: [
          {
            label: "Alternate segment route (elegant — no centre needed)",
            steps: [
              "Tangents from an external point are equal: TA = TB, so triangle TAB is isosceles.",
              "Angle TAB = angle TBA = (180° − 44°) ÷ 2 = 68° (angles in a triangle sum to 180°).",
              "Alternate segment theorem: the angle between tangent TA and chord AB equals the angle in the alternate segment, so angle ACB = 68°.",
            ],
          },
          {
            label: "Centre route (via O)",
            steps: [
              "Join O to A and B. Angle OAT = angle OBT = 90° (a tangent is perpendicular to the radius).",
              "In quadrilateral OATB: angle AOB = 360° − 90° − 90° − 44° = 136° (angles in a quadrilateral sum to 360°).",
              "Angle at the centre is twice the angle at the circumference: angle ACB = 136° ÷ 2 = 68°.",
            ],
          },
        ],
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "geo-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "geo-mcq-p1-q01",
            question:
              "Three angles meet at a point. Two of them are 150° and 110°. What is the third angle?",
            options: ["100°", "110°", "120°", "80°"],
            answerIndex: 0,
            explanation:
              "Angles at a point sum to 360°: 360 − 150 − 110 = 100°. Answers like 80° come from wrongly using 180° somewhere; the total for a full turn is 360°.",
            guideRef: "Angles at a point, on a line and at a crossing",
            difficulty: "warmup",
          },
          {
            id: "geo-mcq-p1-q02",
            question:
              "Two angles of a triangle are 47° and 62°. What is the third angle?",
            options: ["71°", "109°", "69°", "81°"],
            answerIndex: 0,
            explanation:
              "Angles in a triangle sum to 180°: 180 − 47 − 62 = 71°. 109° only subtracts one of the angles (180 − 71); 69° and 81° are small arithmetic slips.",
            guideRef: "Triangles and quadrilaterals",
            difficulty: "warmup",
          },
          {
            id: "geo-mcq-p1-q03",
            question:
              "Two parallel lines are cut by a transversal. A pair of equal angles in matching positions at the two crossings (both, say, above the parallel and left of the transversal) are called…",
            options: [
              "corresponding angles",
              "alternate angles",
              "co-interior angles",
              "vertically opposite angles",
            ],
            answerIndex: 0,
            explanation:
              "Matching positions (the F shape) are corresponding angles. Alternate angles are on OPPOSITE sides of the transversal between the parallels (Z shape); co-interior angles are not equal (they sum to 180°); vertically opposite angles occur at a single crossing.",
            guideRef: "Parallel lines: alternate, corresponding, co-interior",
            difficulty: "core",
            hints: [
              "Which shape do the two angles trace out — Z, F or C?",
              "Matching positions means the pattern at one crossing is copied at the other.",
              "The F-shape pair has the proper name you need.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "geo-mcq-p1-q04",
            question:
              "Three angles of a quadrilateral are 88°, 95° and 102°. What is the fourth angle?",
            options: ["75°", "85°", "65°", "105°"],
            answerIndex: 0,
            explanation:
              "Angles in a quadrilateral sum to 360°: 360 − 88 − 95 − 102 = 75°. Using 180° (a triangle's total) makes the question impossible; 85° and 65° are subtraction slips.",
            guideRef: "Triangles and quadrilaterals",
            difficulty: "core",
            hints: [
              "A quadrilateral splits into two triangles — what is its angle total?",
              "Add the three given angles first.",
              "Subtract that sum from 360°.",
            ],
            strategy: "work backwards",
          },
          {
            id: "geo-mcq-p1-q05",
            question:
              "Each interior angle of a regular polygon is 165°. How many sides has the polygon?",
            options: ["24", "22", "12", "15"],
            answerIndex: 0,
            explanation:
              "Exterior angle = 180° − 165° = 15°, so n = 360° ÷ 15° = 24. Choosing 15 stops at the exterior angle; 12 halves 24 by mistake.",
            guideRef: "Interior and exterior angles of polygons",
            difficulty: "core",
            hints: [
              "Convert the interior angle to an exterior angle first.",
              "Interior + exterior = 180°.",
              "Then n = 360° ÷ exterior angle.",
            ],
            strategy: "work backwards",
          },
          {
            id: "geo-mcq-p1-q06",
            question:
              "The bearing of A from B is 310°. What is the bearing of B from A?",
            options: ["130°", "310°", "050°", "230°"],
            answerIndex: 0,
            explanation:
              "Back bearing: since 310° is over 180°, subtract 180° to get 130°. Adding 180° would give 490°, which is not a valid bearing; 050° subtracts from 360° — a classic slip.",
            guideRef: "Bearings",
            difficulty: "core",
            hints: [
              "Back bearings differ by 180°.",
              "310° + 180° is more than a full turn — so which way should you go?",
              "Subtract 180° from 310°.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "geo-mcq-p1-q07",
            question:
              "AB is a diameter of a circle and C is a point on the circle. Angle CAB = 37°. What is angle CBA?",
            options: ["53°", "37°", "90°", "143°"],
            answerIndex: 0,
            explanation:
              "The angle in a semicircle is 90°, so angle ACB = 90°. Then angle CBA = 180° − 90° − 37° = 53° (angles in a triangle). 90° is angle ACB, not CBA; 143° subtracts 37° from 180° and ignores the right angle.",
            guideRef: "Circle theorems: angles from the same arc",
            difficulty: "core",
            hints: [
              "The word \"diameter\" triggers a specific circle theorem.",
              "What is angle ACB?",
              "Use the angle sum of triangle ABC to finish.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "geo-mcq-p1-q08",
            question:
              "In a regular polygon, each interior angle is four times as big as each exterior angle. How many sides has the polygon?",
            options: ["10", "8", "12", "5"],
            answerIndex: 0,
            explanation:
              "Let the exterior angle be e. Then interior = 4e and e + 4e = 180°, so e = 36° and n = 360° ÷ 36° = 10. Choosing 5 uses 180 ÷ 36 instead of 360 ÷ 36; 8 and 12 come from setting e + 4e = 180 up wrongly (e.g. using 360°).",
            guideRef: "Interior and exterior angles of polygons",
            difficulty: "challenge",
            hints: [
              "Introduce a variable: let the exterior angle be e. Write the interior angle in terms of e.",
              "At each vertex, interior + exterior = 180°.",
              "Solve 5e = 180°, then use n = 360° ÷ e.",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
      {
        id: "geo-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "geo-mcq-p2-q01",
            question:
              "Two straight lines cross. One angle is 74°. What is the size of the angle NEXT to it (not opposite)?",
            options: ["106°", "74°", "286°", "90°"],
            answerIndex: 0,
            explanation:
              "Adjacent angles at a crossing lie on a straight line, so 180° − 74° = 106°. 74° would be the vertically OPPOSITE angle; 286° subtracts from 360°.",
            guideRef: "Angles at a point, on a line and at a crossing",
            difficulty: "warmup",
          },
          {
            id: "geo-mcq-p2-q02",
            question:
              "In a triangle, two interior angles are 48° and 71°. One side is extended to form an exterior angle at the third vertex. How big is that exterior angle?",
            options: ["119°", "61°", "109°", "132°"],
            answerIndex: 0,
            explanation:
              "The exterior angle of a triangle equals the sum of the two interior opposite angles: 48° + 71° = 119°. 61° is the third INTERIOR angle (180 − 119); 109° and 132° are addition slips.",
            guideRef: "Triangles and quadrilaterals",
            difficulty: "warmup",
          },
          {
            id: "geo-mcq-p2-q03",
            question:
              "p and q are alternate angles between two parallel lines, with p = (2x + 15)° and q = (3x − 20)°. What is the value of x?",
            options: ["35", "37", "7", "45"],
            answerIndex: 0,
            explanation:
              "Alternate angles are equal: 2x + 15 = 3x − 20, so x = 35. Choosing 37 comes from treating them as co-interior (summing to 180°); 7 comes from a sign error moving the 20.",
            guideRef: "Parallel lines: alternate, corresponding, co-interior",
            difficulty: "core",
            hints: [
              "What is the rule for alternate angles: equal, or summing to 180°?",
              "Set the two expressions equal to each other.",
              "Collect the x terms on one side.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "geo-mcq-p2-q04",
            question: "What is the sum of the interior angles of a hexagon?",
            options: ["720°", "1080°", "540°", "360°"],
            answerIndex: 0,
            explanation:
              "(n − 2) × 180° with n = 6 gives 4 × 180° = 720°. 1080° uses n = 8 (an octagon); 540° uses n = 5 (a pentagon); 360° is a quadrilateral's total.",
            guideRef: "Interior and exterior angles of polygons",
            difficulty: "core",
            hints: [
              "How many triangles does a hexagon split into from one vertex?",
              "Use (n − 2) × 180° with n = 6.",
              "Compute 4 × 180°.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "geo-mcq-p2-q05",
            question:
              "A, B, C and D lie on a circle, with C and D on the same side of the chord AB. Angle ACB = 41°. What is angle ADB?",
            options: ["41°", "82°", "139°", "20.5°"],
            answerIndex: 0,
            explanation:
              "Angles in the same segment are equal, so angle ADB = 41°. 82° doubles it (mixing up the centre theorem); 139° subtracts from 180° (cyclic quadrilateral thinking — but C and D are on the SAME side of AB, so they are in the same segment).",
            guideRef: "Circle theorems: angles from the same arc",
            difficulty: "core",
            hints: [
              "Both angles stand on the chord AB.",
              "C and D are on the same side of AB — same segment.",
              "What does the same-segment theorem say about such angles?",
            ],
            strategy: "look for invariants",
          },
          {
            id: "geo-mcq-p2-q06",
            question:
              "In cyclic quadrilateral ABCD, angle A = (4x)° and its opposite angle C = (x + 30)°. What is the value of x?",
            options: ["30", "36", "50", "25"],
            answerIndex: 0,
            explanation:
              "Opposite angles of a cyclic quadrilateral sum to 180°: 4x + x + 30 = 180, so 5x = 150 and x = 30. Choosing 36 solves 5x = 180 (forgetting the 30); 50 sets 4x + x + 30 = 280 or similar slip; 25 halves incorrectly.",
            guideRef: "Circle theorems: angles from the same arc",
            difficulty: "core",
            hints: [
              "Which circle theorem links angle A and angle C?",
              "Form an equation summing them to 180°.",
              "Solve 5x + 30 = 180.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "geo-mcq-p2-q07",
            question:
              "PT is a tangent to a circle with centre O, touching it at T. Angle TPO = 32°. What is angle TOP?",
            options: ["58°", "32°", "148°", "90°"],
            answerIndex: 0,
            explanation:
              "A tangent is perpendicular to the radius, so angle OTP = 90°. In triangle OTP: angle TOP = 180° − 90° − 32° = 58°. 90° is the angle at T, not O; 148° forgets the right angle and just does 180 − 32.",
            guideRef: "Circle theorems: tangents and the alternate segment",
            difficulty: "core",
            hints: [
              "What angle does the radius OT make with the tangent PT?",
              "Triangle OTP has a right angle at T.",
              "Use the angle sum of the triangle.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "geo-mcq-p2-q08",
            question:
              "A walker goes from P on a bearing of 040° to Q, then from Q on a bearing of 140° to R, walking the same distance each time. What is the bearing of P from R?",
            options: ["270°", "090°", "220°", "320°"],
            answerIndex: 0,
            explanation:
              "At Q, the direction back to P is 220° and the direction to R is 140°, so angle PQR = 80°. Triangle PQR is isosceles (PQ = QR), so angles QPR = QRP = 50°. Direction P to R is bearing 040° + 50° = 090° — R is due east of P, so P is due west of R: bearing 270°. Choosing 090° answers the reverse question (bearing of R from P); 220° and 320° are back bearings of the given legs.",
            guideRef: "Bearings",
            difficulty: "challenge",
            hints: [
              "Draw the two legs with north lines at P, Q and R. Use the back bearing of 040° to find angle PQR.",
              "Equal legs make triangle PQR isosceles — find its base angles.",
              "Combine the base angle at P with the 040° bearing to get the direction of R from P, then reverse it.",
            ],
            strategy: "draw a diagram",
          },
        ],
      },
      {
        id: "geo-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "geo-mcq-p3-q01",
            question:
              "Five equal angles meet at a point. What is the size of each angle?",
            options: ["72°", "60°", "45°", "36°"],
            answerIndex: 0,
            explanation:
              "Angles at a point sum to 360°, so each is 360° ÷ 5 = 72°. 36° uses 180° as the total; 60° divides 360° by 6.",
            guideRef: "Angles at a point, on a line and at a crossing",
            difficulty: "warmup",
          },
          {
            id: "geo-mcq-p3-q02",
            question:
              "A rhombus has one interior angle of 64°. What is the size of an angle adjacent to it (sharing one side)?",
            options: ["116°", "64°", "26°", "296°"],
            answerIndex: 0,
            explanation:
              "A rhombus has opposite sides parallel, so adjacent angles are co-interior: 180° − 64° = 116°. 64° is the OPPOSITE angle; 26° subtracts from 90°.",
            guideRef: "Triangles and quadrilaterals",
            difficulty: "warmup",
          },
          {
            id: "geo-mcq-p3-q03",
            question:
              "What is the sum of the interior angles of a 14-sided polygon?",
            options: ["2160°", "2520°", "1980°", "2340°"],
            answerIndex: 0,
            explanation:
              "(n − 2) × 180° = 12 × 180° = 2160°. 2520° forgets to subtract 2 (14 × 180); 2340° uses n − 1; 1980° uses n − 3.",
            guideRef: "Interior and exterior angles of polygons",
            difficulty: "core",
            hints: [
              "Recall the interior angle sum formula.",
              "Subtract 2 from the number of sides first.",
              "Multiply 12 by 180°.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "geo-mcq-p3-q04",
            question:
              "Four angles of a pentagon are 100°, 105°, 120° and 130°. What is the fifth angle?",
            options: ["85°", "95°", "75°", "125°"],
            answerIndex: 0,
            explanation:
              "A pentagon's interior angles sum to (5 − 2) × 180° = 540°. The four given angles total 455°, so the fifth is 540° − 455° = 85°. Using 360° as the total gives an impossible negative answer; 95° and 75° are subtraction slips.",
            guideRef: "Interior and exterior angles of polygons",
            difficulty: "core",
            hints: [
              "First find the total for a pentagon's interior angles.",
              "(5 − 2) × 180° = 540°.",
              "Subtract the sum of the four given angles from 540°.",
            ],
            strategy: "work backwards",
          },
          {
            id: "geo-mcq-p3-q05",
            question:
              "The bearing of X from Y is 205°. What is the bearing of Y from X?",
            options: ["025°", "205°", "155°", "335°"],
            answerIndex: 0,
            explanation:
              "205° is over 180°, so subtract: 205° − 180° = 25°, written as the three-figure bearing 025°. 155° subtracts from 360°; 335° adds 130° — both classic back-bearing slips.",
            guideRef: "Bearings",
            difficulty: "core",
            hints: [
              "Back bearings differ by 180°.",
              "Adding 180° to 205° overshoots a full turn.",
              "Subtract 180° and remember three figures.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "geo-mcq-p3-q06",
            question:
              "A, B and C lie on a circle with centre O, with C on the MINOR arc AB. Angle ACB = 118°. What is the size of the non-reflex angle AOB?",
            options: ["124°", "236°", "59°", "62°"],
            answerIndex: 0,
            explanation:
              "With C on the minor arc, angle ACB stands on the MAJOR arc AB, so the matching centre angle is the reflex angle AOB = 2 × 118° = 236°. The non-reflex angle AOB = 360° − 236° = 124°. Choosing 236° forgets the final subtraction; 59° halves instead of doubling.",
            guideRef: "Circle theorems: angles from the same arc",
            difficulty: "core",
            hints: [
              "Which arc does the angle at C stand on when C is on the minor arc?",
              "Double 118° — but that gives the REFLEX angle at O.",
              "Use angles at a point (360°) to get the non-reflex angle.",
            ],
            strategy: "consider extremes",
          },
          {
            id: "geo-mcq-p3-q07",
            question:
              "A tangent touches a circle at A, and AB is a chord. The angle between the tangent and AB is 67°. C is a point on the major arc AB (the alternate segment). What is angle ACB?",
            options: ["67°", "113°", "33.5°", "23°"],
            answerIndex: 0,
            explanation:
              "By the alternate segment theorem, the angle between a tangent and a chord equals the angle in the alternate segment, so angle ACB = 67°. 113° subtracts from 180° (cyclic-quadrilateral confusion); 33.5° halves it (centre-theorem confusion); 23° subtracts from 90°.",
            guideRef: "Circle theorems: tangents and the alternate segment",
            difficulty: "core",
            hints: [
              "An angle trapped between a tangent and a chord triggers one particular theorem.",
              "The theorem carries the angle across the chord into the far segment.",
              "The two angles are equal, not supplementary.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "geo-mcq-p3-q08",
            question:
              "Chords AC and BD of a circle cross at a point X inside the circle. Angle ABD = 33° and angle AXB = 103°. What is angle BDC?",
            options: ["44°", "33°", "103°", "70°"],
            answerIndex: 0,
            explanation:
              "In triangle ABX: angle BAX = 180° − 103° − 33° = 44°, and angle BAX is the same as angle BAC. Angles BAC and BDC stand on the same chord BC, on the same side, so angle BDC = 44° (angles in the same segment are equal). 33° copies angle ABD; 103° copies angle AXB; 70° comes from 103 − 33.",
            guideRef: "Circle theorems: angles from the same arc",
            difficulty: "challenge",
            hints: [
              "X lies on both chords, so angle ABX is the same angle as angle ABD.",
              "Use the angle sum of triangle ABX to find angle BAC.",
              "Angles BAC and BDC stand on the same chord BC — which theorem finishes the job?",
            ],
            strategy: "draw a diagram",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "geo-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "geo-qa-p1-q01",
            question:
              "Three angles lie on a straight line: (2x + 10)°, (3x − 25)° and a right angle. Find the value of x, and write down the sizes of the two unknown angles.",
            modelAnswer:
              "Angles on a straight line sum to 180°: (2x + 10) + (3x − 25) + 90 = 180. So 5x + 75 = 180, giving 5x = 105 and x = 21. The angles are 2(21) + 10 = 52° and 3(21) − 25 = 38°. (Check: 52 + 38 + 90 = 180 ✓)",
            markScheme: ["x = 21", "52", "38", "180", "straight line"],
            commonError:
              "Forgetting to include the 90° right angle in the equation, giving 5x − 15 = 180 and a non-integer x.",
            guideRef: "Angles at a point, on a line and at a crossing",
            difficulty: "warmup",
          },
          {
            id: "geo-qa-p1-q02",
            question:
              "AB and CD are parallel. A straight line cuts AB at G and CD at H. E is a point on the line above AB, and angle EGA = 54°. (a) Write down the size of angle GHC, giving a reason. (b) Find the size of angle GHD, giving a reason.",
            modelAnswer:
              "(a) Angle GHC = 54°, because angle EGA and angle GHC are corresponding angles (AB parallel to CD), and corresponding angles are equal. (b) Angle GHD = 180° − 54° = 126°, because angles GHC and GHD lie on the straight line CD, and angles on a straight line sum to 180°. (Alternative reason for (b): angle AGH = 126° by angles on a straight line at G, and angles AGH and GHC are co-interior, summing to 180°.)",
            markScheme: ["126", "54", "corresponding", "straight line", "parallel"],
            commonError:
              "Correct numbers but reasons like \"F angles\" — the mark scheme requires \"corresponding angles\" and a reference to the parallel lines.",
            guideRef: "Parallel lines: alternate, corresponding, co-interior",
            difficulty: "core",
            hints: [
              "Sketch it: E at the top, then G on AB, then H on CD, with A and C on the same (left) side.",
              "Angle EGA and angle GHC are in matching positions at the two crossings.",
              "For (b), C, H and D lie on one straight line.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "geo-qa-p1-q03",
            question:
              "In triangle ABC, AB = AC. The side BC is extended to a point D, and angle ACD = 124°. Work out the size of angle BAC, giving reasons.",
            modelAnswer:
              "Angle ACB = 180° − 124° = 56° (angles on a straight line sum to 180°). Since AB = AC, triangle ABC is isosceles, so angle ABC = angle ACB = 56° (base angles of an isosceles triangle are equal). Then angle BAC = 180° − 56° − 56° = 68° (angles in a triangle sum to 180°). Alternative finish: the exterior angle 124° equals the sum of the interior opposite angles A and B, so angle BAC = 124° − 56° = 68° ✓.",
            markScheme: ["68", "56", "isosceles", "straight line", "base angles"],
            commonError:
              "Halving 124° to get angle A = 62° — the exterior angle equals angle A + angle B, but A and B are NOT the equal pair here (B and C are), so you cannot split 124° equally between them.",
            guideRef: "Triangles and quadrilaterals",
            difficulty: "core",
            hints: [
              "B, C and D lie on one straight line — find angle ACB first.",
              "AB = AC tells you which two angles of the triangle are equal.",
              "Use the 180° angle sum of the triangle to finish.",
            ],
            strategy: "work backwards",
          },
          {
            id: "geo-qa-p1-q04",
            question:
              "Each interior angle of a regular polygon is 162°. Work out the number of sides of the polygon.",
            modelAnswer:
              "Each exterior angle = 180° − 162° = 18° (interior and exterior angles lie on a straight line). The exterior angles of a polygon sum to 360°, so n = 360° ÷ 18° = 20. The polygon has 20 sides.",
            markScheme: ["20", "18", "exterior", "360"],
            commonError:
              "Setting up (n − 2) × 180 ÷ n = 162 and making algebra slips — the exterior-angle route (180 − 162, then divide into 360) is faster and safer.",
            guideRef: "Interior and exterior angles of polygons",
            difficulty: "core",
            hints: [
              "Turn the interior angle into an exterior angle.",
              "Interior + exterior = 180° at every vertex.",
              "All the exterior angles together make 360°.",
            ],
            strategy: "work backwards",
          },
          {
            id: "geo-qa-p1-q05",
            question:
              "The bearing of B from A is 118°. The bearing of C from B is 230°. Work out the size of angle ABC.",
            modelAnswer:
              "Bearing of A from B = 118° + 180° = 298° (back bearing). At B, measured clockwise from north: the direction to A is 298° and the direction to C is 230°. So angle ABC = 298° − 230° = 68°.",
            markScheme: ["68", "298", "back bearing", "180"],
            commonError:
              "Computing 230 − 118 = 112 — those two bearings are measured at DIFFERENT points (A and B), so they cannot be subtracted directly; convert both directions to the point B first.",
            guideRef: "Bearings",
            difficulty: "core",
            hints: [
              "Angle ABC is at B, so express both BA and BC as bearings from B.",
              "The bearing of A from B is the back bearing of 118°.",
              "Subtract the two directions at B.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "geo-qa-p1-q06",
            question:
              "PA is a tangent to a circle with centre O, touching it at A. B is a point on the circle such that angle PAB = 63°, and C is a point on the major arc AB. Find (a) angle ACB and (b) angle AOB, giving a reason for each answer.",
            modelAnswer:
              "(a) Angle ACB = 63°, by the alternate segment theorem: the angle between the tangent PA and the chord AB equals the angle in the alternate segment. (b) Angle AOB = 2 × 63° = 126°, because the angle at the centre is twice the angle at the circumference standing on the same arc AB. (Check: angle OAB = 90° − 63° = 27° using tangent ⊥ radius, and the isosceles triangle OAB then has 27° + 27° + 126° = 180° ✓)",
            markScheme: ["126", "63", "alternate segment", "angle at the centre", "twice"],
            commonError:
              "Doing part (b) as 180° − 63° = 117° (cyclic quadrilateral misuse) — O is the centre, not a point on the circle, so cyclic quadrilateral rules do not apply to it.",
            guideRef: "Circle theorems: tangents and the alternate segment",
            difficulty: "challenge",
            hints: [
              "Angle PAB is between a tangent and a chord — which theorem moves it into the circle?",
              "That gives you the angle at C directly.",
              "For (b), link the angle at the circumference to the angle at the centre.",
            ],
            strategy: "look for invariants",
          },
        ],
      },
      {
        id: "geo-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "geo-qa-p2-q01",
            question:
              "Three angles meet at a point and are in the ratio 2 : 3 : 4. Work out the size of the largest angle.",
            modelAnswer:
              "Angles at a point sum to 360°. The ratio has 2 + 3 + 4 = 9 parts, so one part = 360° ÷ 9 = 40°. The angles are 80°, 120° and 160°. The largest angle is 160°.",
            markScheme: ["160", "40", "360", "9 parts"],
            commonError:
              "Using 180° as the total, giving 40°, 60° and 80° — angles AT A POINT make a full turn of 360°.",
            guideRef: "Angles at a point, on a line and at a crossing",
            difficulty: "warmup",
          },
          {
            id: "geo-qa-p2-q02",
            question:
              "The four angles of a quadrilateral are x°, 2x°, (x + 30)° and (x + 40)°. Find the value of x and the size of the largest angle.",
            modelAnswer:
              "Angles in a quadrilateral sum to 360°: x + 2x + (x + 30) + (x + 40) = 360, so 5x + 70 = 360, giving 5x = 290 and x = 58. The angles are 58°, 116°, 88° and 98°. The largest angle is 116°. (Check: 58 + 116 + 88 + 98 = 360 ✓)",
            markScheme: ["116", "x = 58", "360", "5x + 70"],
            commonError:
              "Answering x = 58 as the final answer when the question asks for the largest ANGLE — always reread what is asked.",
            guideRef: "Triangles and quadrilaterals",
            difficulty: "core",
            hints: [
              "What do the four angles of any quadrilateral add up to?",
              "Collect the x terms and the constants separately.",
              "After finding x, substitute back to identify the largest angle.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "geo-qa-p2-q03",
            question:
              "Prove that the angles of a triangle add up to 180°. You may use the parallel-line angle rules, naming them correctly.",
            modelAnswer:
              "Take any triangle ABC. Draw a straight line through A parallel to BC. The angle between this line and AB (on B's side) equals angle ABC, because they are alternate angles (the line through A is parallel to BC). Similarly, the angle between the line and AC (on C's side) equals angle ACB, alternate angles again. At A, these two copied angles and angle BAC together make the straight line, so they sum to 180° (angles on a straight line). Therefore angle ABC + angle BAC + angle ACB = 180°.",
            markScheme: ["180", "parallel", "alternate angles", "straight line"],
            commonError:
              "\"Proving\" it by measuring or by tearing corners — a proof must derive the result from stated facts (alternate angles and angles on a straight line), not check examples.",
            guideRef: "Triangles and quadrilaterals",
            difficulty: "core",
            hints: [
              "Add something to the diagram: a line through one vertex parallel to the opposite side.",
              "Which parallel-line rule copies angles B and C up to the new line?",
              "The three angles at the top vertex now sit on a straight line.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "geo-qa-p2-q04",
            question:
              "Five of the interior angles of a hexagon are 130°, 125°, 105°, 140° and 115°. Work out the size of the sixth angle.",
            modelAnswer:
              "Interior angles of a hexagon sum to (6 − 2) × 180° = 720°. The five given angles total 130 + 125 + 105 + 140 + 115 = 615°. So the sixth angle = 720° − 615° = 105°.",
            markScheme: ["105", "720", "615", "(n − 2) × 180"],
            commonError:
              "Using 540° (a pentagon's total) because five angles are listed — the shape is a hexagon, so the total is 720°.",
            guideRef: "Interior and exterior angles of polygons",
            difficulty: "core",
            hints: [
              "How many sides does the shape have? Use that in the angle-sum formula.",
              "(6 − 2) × 180° gives the total.",
              "Subtract the five known angles from the total.",
            ],
            strategy: "work backwards",
          },
          {
            id: "geo-qa-p2-q05",
            question:
              "A, B, C and D lie on a circle, with A and D on the same side of the chord BC. Angle BAC = 38° and angle DBC = 45°. (a) Write down the size of angle BDC, giving a reason. (b) Work out the size of angle BCD.",
            modelAnswer:
              "(a) Angle BDC = 38°, because angles BAC and BDC stand on the same chord BC, on the same side, and angles in the same segment are equal. (b) In triangle BDC: angle BCD = 180° − 38° − 45° = 97° (angles in a triangle sum to 180°).",
            markScheme: ["97", "38", "same segment", "triangle", "180"],
            commonError:
              "Giving 180° − 38° = 142° for part (a) — same-segment angles are EQUAL; the 'sum to 180°' rule is for opposite angles of a cyclic quadrilateral, which A and D are not here (they are on the same side of BC).",
            guideRef: "Circle theorems: angles from the same arc",
            difficulty: "core",
            hints: [
              "Angles BAC and BDC both stand on chord BC, with A and D on the same side.",
              "That is exactly the same-segment situation.",
              "For (b), angles BDC, DBC and BCD are the three angles of one triangle.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "geo-qa-p2-q06",
            question:
              "TP and TQ are tangents to a circle with centre O, touching it at P and Q. Angle PTQ = 52°, and R is a point on the major arc PQ. Work out (a) angle POQ, (b) angle PRQ and (c) angle TPQ, giving a reason for each step.",
            modelAnswer:
              "(a) Angle OPT = angle OQT = 90° (a tangent is perpendicular to the radius). In quadrilateral OPTQ, angles sum to 360°, so angle POQ = 360° − 90° − 90° − 52° = 128°. (b) Angle PRQ = 128° ÷ 2 = 64° (the angle at the centre is twice the angle at the circumference on the same arc PQ). (c) TP = TQ (tangents from an external point are equal), so triangle TPQ is isosceles: angle TPQ = (180° − 52°) ÷ 2 = 64°. Note (b) and (c) agree with the alternate segment theorem: the tangent–chord angle TPQ equals the angle PRQ in the alternate segment.",
            markScheme: ["128", "64", "tangent", "perpendicular", "angle at the centre", "isosceles"],
            commonError:
              "In (a), summing the quadrilateral to 180° or forgetting BOTH right angles; in (c), splitting 52° in half instead of (180° − 52°).",
            guideRef: "Circle theorems: tangents and the alternate segment",
            difficulty: "challenge",
            hints: [
              "Join the radii OP and OQ. What angles do they make with the tangents?",
              "OPTQ is a quadrilateral — use its 360° angle sum for (a).",
              "For (b), relate the centre angle to the circumference angle; for (c), what kind of triangle is TPQ?",
            ],
            strategy: "exploit symmetry",
          },
        ],
      },
      {
        id: "geo-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "geo-qa-p3-q01",
            question:
              "Two straight lines cross. One pair of vertically opposite angles measures (4x − 10)° and (2x + 50)°. Find the value of x and the size of these angles.",
            modelAnswer:
              "Vertically opposite angles are equal: 4x − 10 = 2x + 50, so 2x = 60 and x = 30. Each angle = 4(30) − 10 = 110°. (Check: 2(30) + 50 = 110° ✓)",
            markScheme: ["110", "x = 30", "vertically opposite", "equal"],
            commonError:
              "Setting the two expressions to sum to 180° — that is the rule for ADJACENT angles at the crossing, not vertically opposite ones.",
            guideRef: "Angles at a point, on a line and at a crossing",
            difficulty: "warmup",
          },
          {
            id: "geo-qa-p3-q02",
            question:
              "A ship sails from a port P on a bearing of 075° to a marker Q. From Q it sails due south to a reef R. (a) Write down the bearing of P from Q. (b) Work out the size of angle PQR.",
            modelAnswer:
              "(a) Bearing of P from Q = 075° + 180° = 255° (back bearing — the north lines at P and Q are parallel). (b) At Q: due south is the bearing 180°, and the direction to P is 255°. So angle PQR = 255° − 180° = 75°.",
            markScheme: ["75", "255", "back bearing", "180", "south"],
            commonError:
              "Giving the bearing of P from Q as 075° or as 360° − 75° = 285° — the back bearing always differs by exactly 180°.",
            guideRef: "Bearings",
            difficulty: "core",
            hints: [
              "Part (a) is a back bearing: add or subtract 180°.",
              "Due south as a bearing is 180°.",
              "Both directions are now measured clockwise from Q's north line — subtract them.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "geo-qa-p3-q03",
            question:
              "The five exterior angles of a pentagon are x°, 2x°, 3x°, 4x° and 5x°. Find the value of x and the size of the largest INTERIOR angle of the pentagon.",
            modelAnswer:
              "Exterior angles of any polygon sum to 360°: x + 2x + 3x + 4x + 5x = 15x = 360, so x = 24. The exterior angles are 24°, 48°, 72°, 96° and 120°. The largest interior angle pairs with the SMALLEST exterior angle: 180° − 24° = 156°.",
            markScheme: ["156", "x = 24", "360", "exterior", "smallest"],
            commonError:
              "Pairing the largest interior angle with the largest exterior angle (180 − 120 = 60°) — interior and exterior angles at a vertex add to 180°, so big exterior means SMALL interior.",
            guideRef: "Interior and exterior angles of polygons",
            difficulty: "core",
            hints: [
              "What do exterior angles of any polygon sum to?",
              "Solve 15x = 360.",
              "Interior = 180° − exterior at each vertex — think carefully about WHICH exterior angle gives the largest interior one.",
            ],
            strategy: "consider extremes",
          },
          {
            id: "geo-qa-p3-q04",
            question:
              "AB is a diameter of a circle and C is a point on the circle with angle ABC = 29°. (a) Write down the size of angle ACB, giving a reason. (b) Work out the size of angle BAC.",
            modelAnswer:
              "(a) Angle ACB = 90°, because the angle in a semicircle is 90° (AB is a diameter). (b) Angles in a triangle sum to 180°: angle BAC = 180° − 90° − 29° = 61°.",
            markScheme: ["61", "90", "semicircle", "diameter", "triangle"],
            commonError:
              "Missing the reason in (a) — \"angle in a semicircle is 90°\" (or \"angle subtended by a diameter\") must be stated to earn the reason mark.",
            guideRef: "Circle theorems: angles from the same arc",
            difficulty: "core",
            hints: [
              "The word \"diameter\" points to one specific theorem.",
              "That theorem fixes the angle at C.",
              "Finish with the triangle angle sum.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "geo-qa-p3-q05",
            question:
              "ABCD is a cyclic quadrilateral with angle A = (3x + 10)°, angle B = (4x − 15)° and angle C = (2x + 20)°. Find the value of x and the size of angle D.",
            modelAnswer:
              "Opposite angles of a cyclic quadrilateral sum to 180°. A and C are opposite: (3x + 10) + (2x + 20) = 180, so 5x + 30 = 180, giving x = 30. Then angle B = 4(30) − 15 = 105°, and since B and D are also opposite, angle D = 180° − 105° = 75°. (Check: A = 100°, C = 80°, and 100 + 80 = 180 ✓; 105 + 75 = 180 ✓)",
            markScheme: ["75", "x = 30", "opposite", "cyclic quadrilateral", "180"],
            commonError:
              "Summing ALL FOUR expressions to 360° — that is true but leaves two unknowns; the key fact is that OPPOSITE pairs each sum to 180°, and A is opposite C (not B).",
            guideRef: "Circle theorems: angles from the same arc",
            difficulty: "core",
            hints: [
              "In quadrilateral ABCD, which vertex is opposite A?",
              "Use A + C = 180° to find x.",
              "Then find angle B, and use B + D = 180°.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "geo-qa-p3-q06",
            question:
              "A, B and C lie on a circle, and TA is a tangent touching the circle at A. Angle TAB = 56°, C is in the alternate segment, and BA = BC. Work out the size of angle ABC, giving a reason for each step of your working.",
            modelAnswer:
              "Angle ACB = 56°, by the alternate segment theorem (the angle between the tangent TA and the chord AB equals the angle in the alternate segment). Since BA = BC, triangle ABC is isosceles with the equal angles opposite the equal sides: angle BAC = angle BCA = 56° (base angles of an isosceles triangle are equal). Then angle ABC = 180° − 56° − 56° = 68° (angles in a triangle sum to 180°).",
            markScheme: ["68", "56", "alternate segment", "isosceles", "180"],
            commonError:
              "Making angle ABC = 56° via the isosceles triangle — BA = BC means the angles at A and C (opposite those sides) are equal, not the angle at B.",
            guideRef: "Circle theorems: tangents and the alternate segment",
            difficulty: "challenge",
            hints: [
              "Start by moving the 56° into the circle: tangent–chord angle equals which angle?",
              "BA = BC — identify precisely which two angles of triangle ABC are equal.",
              "The equal angles are opposite the equal sides; finish with the angle sum.",
            ],
            strategy: "exploit symmetry",
          },
        ],
      },
    ],
  },
};

export default topic;
