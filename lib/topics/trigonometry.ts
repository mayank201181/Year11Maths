import type { Topic } from "../types";

const topic: Topic = {
  id: "trigonometry",
  title: "Pythagoras & Trigonometry",
  subject: "Maths",
  icon: "🔺",
  intro:
    "Right angles hide everywhere — in ladders against walls, diagonals of boxes, ships changing course. Pythagoras' theorem and trigonometry let you calculate lengths and angles you could never measure directly. In this topic you will build both tools from scratch, extend them into 3D, and learn the sine and cosine rules that work in ANY triangle — then practise choosing the right tool at speed, exactly as the exam demands.",
  guide: [
    {
      heading: "Pythagoras' theorem",
      discovery: {
        problem:
          "Draw a right-angled triangle with legs 3 cm and 4 cm. Now draw a square on each of the three sides and work out the area of each square. What do you notice about the three areas — and do you think it happens for every right-angled triangle?",
        idea: "The two smaller squares (areas 9 and 16) exactly account for the largest square (area 25). This is Pythagoras' theorem: in any right-angled triangle, a² + b² = c², where c is the hypotenuse — the side opposite the right angle.",
      },
      body: `In a right-angled triangle with legs a and b and hypotenuse c:

**a² + b² = c²**

- **Finding the hypotenuse**: square the two legs, **add**, square root. Legs 6 and 8: c = √(36 + 64) = √100 = 10.
- **Finding a leg**: square, **subtract**, square root. Hypotenuse 13, leg 5: b = √(169 − 25) = √144 = 12.
- **Exact answers**: if the square root is not a whole number, leave it as a simplified surd. Hypotenuse 8, leg 4: other leg = √(64 − 16) = √48 = 4√3. "Exact" on an exam paper means "do not round to a decimal".

**Distance between two points** is Pythagoras on a coordinate grid. For (x₁, y₁) and (x₂, y₂), the horizontal and vertical gaps are the legs:

distance = √((x₂ − x₁)² + (y₂ − y₁)²)

So from (1, 2) to (7, 10): √(6² + 8²) = √100 = 10.

**The converse** works too: if the sides of a triangle satisfy a² + b² = c² (with c the longest side), the triangle must be right-angled. Test 7, 24, 25: 49 + 576 = 625 = 25². Right-angled.`,
      whyItWorks: `The rearrangement proof. Take four identical right-angled triangles with legs a, b and hypotenuse c, and a big square of side a + b.

Arrangement 1: place the four triangles in the corners so their hypotenuses form a tilted square in the middle. The uncovered area is c².

Arrangement 2: pair the same four triangles into two a-by-b rectangles pushed into opposite corners. Now the uncovered area is two squares: a² + b².

Same big square, same four triangles — so the leftover area must be the same both times: **a² + b² = c²**. No measuring, no special cases: it works for every right-angled triangle.`,
      strategies: [
        "draw a diagram — mark the right angle and label the hypotenuse first",
        "check with a special case (does your method give 5 for legs 3 and 4?)",
        "work backwards — if the answer must be a length, a negative or a huge number signals a slip",
      ],
      keyPoints: [
        "The hypotenuse is opposite the right angle and is always the longest side.",
        "ADD squares to find the hypotenuse; SUBTRACT to find a leg.",
        "An exact answer means a simplified surd, e.g. √48 = 4√3 — never a rounded decimal.",
        "The distance formula is just Pythagoras with legs (x₂ − x₁) and (y₂ − y₁).",
        "Converse: if a² + b² = c² holds for the sides, the triangle is right-angled.",
      ],
      thinkDeeper:
        "The converse can be sharpened: if c² > a² + b² the angle opposite c is obtuse, and if c² < a² + b² it is acute — Pythagoras is the boundary case. Also, whole-number triples like 3-4-5, 5-12-13, 8-15-17 and 7-24-25 stay right-angled when scaled: 6-8-10 is just 3-4-5 doubled. Spotting a hidden triple can save you a minute of calculation in the exam.",
    },
    {
      heading: "Pythagoras in 3D",
      discovery: {
        problem:
          "A pencil is 19 cm long. Can it lie completely inside a closed box measuring 15 cm by 8 cm by 6 cm? (The longest space in a box is not along an edge...)",
        idea: "The longest line in a cuboid is the space diagonal, from one corner to the opposite corner. Two uses of Pythagoras give its length: the base diagonal is √(15² + 8²) = √289 = 17, then the space diagonal is √(17² + 6²) = √325 ≈ 18.0 cm. The 19 cm pencil does NOT fit — even though every edge of a 15 cm box feels roomy.",
      },
      body: `3D problems are 2D problems in disguise: find the right-angled triangle hiding inside the solid and flatten it out.

For a cuboid a by b by c, the **space diagonal** d (corner to opposite corner) comes from Pythagoras used twice:

- Base diagonal: (base diagonal)² = a² + b²
- Space diagonal: d² = (base diagonal)² + c²

Combining: **d² = a² + b² + c²**, so d = √(a² + b² + c²).

Example: cuboid 3 by 4 by 12. d = √(9 + 16 + 144) = √169 = 13.

The same "flatten the triangle" idea works for pyramids and prisms: pick the length you want, find a right-angled triangle containing it, and identify the other two sides of that triangle (often a height and half a diagonal).`,
      whyItWorks: `Why can we just add all three squares? The base diagonal and the vertical edge really are perpendicular: the vertical edge is perpendicular to the whole base plane, so it is perpendicular to every line drawn in the base — including the base diagonal. That guarantees the second triangle (base diagonal, height, space diagonal) is genuinely right-angled, so Pythagoras applies again:

d² = (a² + b²) + c².`,
      strategies: [
        "flatten 3D into 2D — sketch each right-angled triangle separately, flat on the page",
        "draw a diagram — label the corners of the solid with letters before you start",
        "work in stages — find the base diagonal first, and keep it exact (as a surd) until the final step",
      ],
      keyPoints: [
        "Space diagonal of an a × b × c cuboid: d = √(a² + b² + c²).",
        "It is two applications of ordinary Pythagoras: base diagonal first, then up the height.",
        "Never round the base diagonal before using it — carry the exact value through.",
        "The space diagonal is the longest line segment that fits inside a cuboid.",
      ],
      diagrams: [
        {
          id: "tri-diag-03",
          title: "Space diagonal of a cuboid",
          svg: `<svg viewBox="0 0 440 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cuboid with base A B C D and top E F G H. The red space diagonal runs from A at the front bottom left to G at the back top right. The blue dashed base diagonal runs from A to C, with a right angle marked where the vertical edge C G meets the base, and angle theta marked at A between A C and A G." style="max-width:640px;width:100%;height:auto"><polygon points="80,225 285,225 285,120 80,120" fill="none" stroke="#64748b" stroke-width="2"/><line x1="285" y1="225" x2="355" y2="180" stroke="#64748b" stroke-width="2"/><line x1="355" y1="180" x2="355" y2="75" stroke="#64748b" stroke-width="2"/><line x1="355" y1="75" x2="285" y2="120" stroke="#64748b" stroke-width="2"/><line x1="80" y1="120" x2="150" y2="75" stroke="#64748b" stroke-width="2"/><line x1="150" y1="75" x2="355" y2="75" stroke="#64748b" stroke-width="2"/><line x1="80" y1="225" x2="150" y2="180" stroke="#64748b" stroke-width="2" stroke-dasharray="5 4"/><line x1="150" y1="180" x2="355" y2="180" stroke="#64748b" stroke-width="2" stroke-dasharray="5 4"/><line x1="150" y1="180" x2="150" y2="75" stroke="#64748b" stroke-width="2" stroke-dasharray="5 4"/><line x1="80" y1="225" x2="355" y2="180" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="7 5"/><line x1="80" y1="225" x2="355" y2="75" stroke="#dc2626" stroke-width="3"/><path d="M 355 164 L 340 166 L 340 181" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 139 215 A 60 60 0 0 0 133 196" fill="none" stroke="#dc2626" stroke-width="2"/><text x="146" y="209" font-size="15" fill="#dc2626">θ</text><text x="62" y="240" font-size="15" fill="currentColor">A</text><text x="290" y="242" font-size="15" fill="currentColor">B</text><text x="362" y="194" font-size="15" fill="currentColor">C</text><text x="132" y="196" font-size="15" fill="currentColor">D</text><text x="62" y="114" font-size="15" fill="currentColor">E</text><text x="290" y="114" font-size="15" fill="currentColor">F</text><text x="362" y="70" font-size="15" fill="currentColor">G</text><text x="134" y="70" font-size="15" fill="currentColor">H</text><text x="176" y="246" font-size="14" fill="#64748b">a</text><text x="330" y="212" font-size="14" fill="#64748b">b</text><text x="366" y="132" font-size="14" fill="#64748b">c</text></svg>`,
          caption:
            "Space diagonal AG (red): first find base diagonal AC (blue, dashed) with Pythagoras, then use the right-angled triangle ACG. Overall, AG = √(a² + b² + c²). The angle θ at A is the angle between AG and the base — see the 3D trigonometry section.",
        },
      ],
    },
    {
      heading: "SOHCAHTOA: sides and angles",
      discovery: {
        problem:
          "Draw ANY right-angled triangle containing a 35° angle — any size you like. Measure the side opposite the 35° angle and the hypotenuse, and divide them. Compare with someone whose triangle is a completely different size. Why do you both get roughly 0.57?",
        idea: "All right-angled triangles with a 35° angle are similar — enlargements of each other — so the ratio opposite/hypotenuse is fixed by the angle alone. That fixed ratio deserves a name: sin 35° ≈ 0.574. Your calculator stores these ratios for every angle.",
      },
      body: `Label the sides **relative to the angle θ you are using**:

- **Hypotenuse** (H): opposite the right angle — always the longest.
- **Opposite** (O): the side facing θ.
- **Adjacent** (A): the side next to θ (but not the hypotenuse).

The three ratios: **SOH CAH TOA**

- sin θ = O/H
- cos θ = A/H
- tan θ = O/A

**Finding a side**: pick the ratio that uses your known side and wanted side, then rearrange. Angle 35°, hypotenuse 12, want the opposite: sin 35° = O/12, so O = 12 sin 35° ≈ 6.88.

**Finding an angle**: form the ratio from two known sides, then apply the inverse function (sin⁻¹, cos⁻¹ or tan⁻¹). Opposite 7, adjacent 10: tan θ = 0.7, so θ = tan⁻¹(0.7) ≈ 35.0°.

Make sure your calculator is in **degrees mode** — a radians answer like 0.61 for an angle question is the classic giveaway.`,
      whyItWorks: `Two right-angled triangles that share another angle θ have all three angles equal (the third is 90° − θ), so they are similar. Similar shapes have equal ratios of corresponding sides. So opposite/hypotenuse does not depend on the size of the triangle at all — only on θ. That is what makes sin, cos and tan well-defined functions of the angle, and why one calculator table works for every triangle ever drawn.`,
      strategies: [
        "draw a diagram — mark θ, then label H, O, A before choosing a ratio",
        "cover the unknown — in SOH CAH TOA, cover the letter you want to see whether to multiply or divide",
        "estimate first — the opposite of a 35° angle should be well under the hypotenuse; sense-check your answer",
      ],
      keyPoints: [
        "Label O and A relative to the angle in use — swap the angle and O and A swap too.",
        "sin and cos of an acute angle are always less than 1; tan can be any positive size.",
        "Side wanted: multiply or divide using the ratio. Angle wanted: inverse function.",
        "Calculator in degrees mode, and keep full accuracy until the final rounding.",
      ],
      diagrams: [
        {
          id: "tri-diag-01",
          title: "Labelling a right-angled triangle",
          svg: `<svg viewBox="0 0 440 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A right-angled triangle with the right angle at the bottom left, marked with a small square. The angle theta is marked at the bottom right. The vertical side facing theta is labelled opposite, the horizontal side next to theta is labelled adjacent, and the longest sloping side is labelled hypotenuse." style="max-width:640px;width:100%;height:auto"><polygon points="90,220 370,220 90,70" fill="none" stroke="#2563eb" stroke-width="3"/><rect x="90" y="196" width="24" height="24" fill="none" stroke="#64748b" stroke-width="2"/><path d="M 325 220 A 45 45 0 0 1 330 199" fill="none" stroke="#dc2626" stroke-width="2"/><text x="300" y="211" font-size="16" fill="#dc2626">θ</text><text x="200" y="128" font-size="15" fill="#2563eb" transform="rotate(-28 200 128)">hypotenuse</text><text x="60" y="150" font-size="15" fill="#16a34a" transform="rotate(-90 60 150)">opposite</text><text x="195" y="245" font-size="15" fill="#f59e0b">adjacent</text></svg>`,
          caption:
            "Sides are named relative to the marked angle θ: opposite faces it, adjacent touches it, and the hypotenuse is always opposite the right angle. Then SOH CAH TOA chooses the ratio.",
        },
      ],
    },
    {
      heading: "Exact trig values",
      discovery: {
        problem:
          "Take an equilateral triangle with sides of length 2 and fold it exactly in half, corner to corner. What right-angled triangle do you get, and what are its three side lengths? Now read off sin 30° from it. Why is it EXACTLY 1/2 — not approximately?",
        idea: "Folding gives a right-angled triangle with hypotenuse 2 (an original side), base 1 (half a side) and, by Pythagoras, height √(4 − 1) = √3. The 30° angle sits at the top, facing the side of length 1, so sin 30° = 1/2 exactly. One folded triangle hands you the exact values for 30° and 60°.",
      },
      body: `Two special triangles generate the whole exact-values table.

**Half an equilateral triangle** (sides 1, √3, 2 with angles 30°, 60°, 90°):

- sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 (= √3/3)
- sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3

**A right-angled isosceles triangle** (sides 1, 1, √2 with angles 45°, 45°, 90°):

- sin 45° = cos 45° = 1/√2 (= √2/2), tan 45° = 1

Also worth knowing: sin 0° = 0, cos 0° = 1, sin 90° = 1, cos 90° = 0.

The exam can say "give an exact value" or ban the calculator — so these must be at your fingertips. If you forget one, redraw the triangle: it takes twenty seconds.`,
      whyItWorks: `Nothing here is memorised by accident — every value is read straight off a triangle. In the folded equilateral triangle, the side facing the 30° angle is half an original side, and the hypotenuse is a whole original side: sin 30° = 1/2 with no rounding anywhere. The height comes from Pythagoras (√3), giving cos 30° = √3/2. The 45° triangle works the same way: legs 1 and 1 force the hypotenuse to be √2, so sin 45° = 1/√2. Exactness comes from geometry, not from a calculator.`,
      strategies: [
        "redraw the two special triangles rather than trusting memory under pressure",
        "exploit symmetry — sin θ = cos (90° − θ), so the 30° and 60° columns mirror each other",
        "check the trend — sin grows from 0 to 1 as the angle grows from 0° to 90°, so sin 60° must beat sin 30°",
      ],
      keyPoints: [
        "sin 30° = cos 60° = 1/2 and sin 60° = cos 30° = √3/2.",
        "sin 45° = cos 45° = 1/√2 and tan 45° = 1.",
        "tan 30° = 1/√3 and tan 60° = √3 — reciprocals of each other.",
        "All eight values come from just two triangles: (1, √3, 2) and (1, 1, √2).",
      ],
      thinkDeeper:
        "In any right-angled triangle, (O/H)² + (A/H)² = (O² + A²)/H² = H²/H² = 1 by Pythagoras — that is the identity sin²θ + cos²θ = 1. Test it: (1/2)² + (√3/2)² = 1/4 + 3/4 = 1. Also tan θ = sin θ / cos θ, which explains tan 45° = 1 instantly. Trigonometry and Pythagoras are the same subject wearing different hats.",
    },
    {
      heading: "Elevation, depression and bearings",
      discovery: {
        problem:
          "Armed with only a protractor, a drinking straw and a tape measure, how could you find the height of your school building without leaving the ground?",
        idea: "Stand a measured distance from the base and sight the roof through the straw: the protractor gives the angle of elevation θ. The building's height is then (distance) × tan θ plus your eye height. One angle and one distance measure anything you can see — that is surveying.",
      },
      body: `**Angle of elevation**: measured UP from the horizontal to your line of sight.

**Angle of depression**: measured DOWN from the horizontal. Because the two horizontals are parallel, the angle of depression from the top equals the angle of elevation from the bottom — alternate angles. Draw the horizontal line at the observer's eye first, every time.

**Bearings** describe direction with three rules:

- measured **from north**
- measured **clockwise**
- written with **three figures** (060°, not 60°)

To go from a bearing problem to a triangle: draw a north line at every point mentioned, mark the bearings, and hunt for a right angle or use the sine/cosine rules. Useful facts: east is 090°; the back-bearing (return journey) differs by 180°; and the angle between two paths can often be found from parallel north lines (co-interior and alternate angles).

Example: a ship sails 24 km on a bearing of 040°. How far north has it travelled? The north line, the ship's path and the "distance north" make a right-angled triangle with the 40° angle at the start: distance north = 24 cos 40° ≈ 18.4 km, and distance east = 24 sin 40° ≈ 15.4 km.`,
      whyItWorks: `Everything reduces to a right-angled triangle whose legs run north-south and east-west. A bearing of θ (measured from north) puts the angle θ between the north line and the path, so the northward leg is (distance) × cos θ and the eastward leg is (distance) × sin θ — cos hugs the line the angle is measured from. Elevation and depression problems are the same picture rotated: horizontal leg, vertical leg, line of sight as hypotenuse.`,
      strategies: [
        "draw a diagram — a north line at every point, or a horizontal line at every eye",
        "look for parallel lines — alternate angles convert a depression into an elevation",
        "split the journey into north and east components before reassembling with Pythagoras",
      ],
      keyPoints: [
        "Elevation and depression are both measured from the HORIZONTAL, never from a wall or mast.",
        "Depression from the top = elevation from the bottom (alternate angles).",
        "Bearings: from north, clockwise, three figures.",
        "Distance north = d cos(bearing), distance east = d sin(bearing), for bearings up to 090°.",
      ],
      diagrams: [
        {
          id: "tri-diag-02",
          title: "Elevation and depression",
          svg: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An observer on level ground looks up at the top of a tower. The angle of elevation is marked in red between the ground and the line of sight. At the top of the tower a dashed horizontal line is drawn, and the angle of depression from the top back down to the observer is marked in amber. The tower height is labelled h and the ground distance is labelled d." style="max-width:640px;width:100%;height:auto"><line x1="30" y1="240" x2="450" y2="240" stroke="#64748b" stroke-width="2"/><rect x="380" y="80" width="26" height="160" fill="none" stroke="#16a34a" stroke-width="3"/><circle cx="70" cy="240" r="5" fill="#2563eb"/><line x1="70" y1="240" x2="393" y2="80" stroke="#2563eb" stroke-width="2.5"/><line x1="393" y1="80" x2="120" y2="80" stroke="#64748b" stroke-width="2" stroke-dasharray="6 5"/><path d="M 125 240 A 55 55 0 0 0 119 216" fill="none" stroke="#dc2626" stroke-width="2"/><text x="132" y="228" font-size="14" fill="#dc2626">angle of elevation</text><path d="M 338 80 A 55 55 0 0 0 344 104" fill="none" stroke="#f59e0b" stroke-width="2"/><text x="152" y="103" font-size="14" fill="#f59e0b">angle of depression</text><text x="420" y="166" font-size="15" fill="#16a34a">h</text><text x="220" y="262" font-size="15" fill="#64748b">d</text></svg>`,
          caption:
            "Elevation is measured up from the horizontal at the observer; depression is measured down from the horizontal at the top. The two horizontals are parallel, so the two marked angles are equal (alternate angles), and tan(elevation) = h/d.",
        },
      ],
    },
    {
      heading: "Sine rule, cosine rule and the area formula",
      discovery: {
        problem:
          "The familiar area formula needs a base and a PERPENDICULAR height. Suppose you know two sides of a triangle, 8 cm and 5 cm, and only the 60° angle pinched between them. Can you find the exact area without ever drawing or measuring the height?",
        idea: "Drop a height h from the end of the 5 cm side onto the 8 cm base. In the right-angled triangle formed, h = 5 sin 60°. So Area = ½ × 8 × (5 sin 60°) = ½ × 8 × 5 × sin 60° = 10√3 cm². In general, **Area = ½ab sin C** — half the product of two sides times the sine of the included angle. The height was there all along; sine measures it for you.",
      },
      body: `These rules work in **any** triangle — no right angle needed. Label sides a, b, c opposite angles A, B, C.

**Sine rule** (use when you have an OPPOSITE pair — a side and the angle facing it):

a/sin A = b/sin B = c/sin C

Finding a side: b = a sin B / sin A. Finding an angle: sin B = b sin A / a, then B = sin⁻¹(...).

**Cosine rule** (use for SAS — two sides and the INCLUDED angle — or SSS — all three sides):

- Side form: a² = b² + c² − 2bc cos A
- Angle form: cos A = (b² + c² − a²) / (2bc)

**Area of any triangle**: Area = ½ab sin C, where C is the angle BETWEEN sides a and b.

Worked example: sides 7 and 9 with included angle 60°. Third side: a² = 49 + 81 − 2 × 7 × 9 × cos 60° = 130 − 63 = 67, so a = √67 ≈ 8.19. Area = ½ × 7 × 9 × sin 60° = 63√3/4 ≈ 27.3.

Watch obtuse angles: sin 150° = sin 30° = 1/2 (sine stays positive), but cos of an obtuse angle is NEGATIVE, which makes the cosine rule's "− 2bc cos A" term ADD length — exactly right, since obtuse triangles have a long far side.`,
      whyItWorks: `**Sine rule**: drop a height h from C onto side c. The left right-angled triangle gives h = b sin A; the right one gives h = a sin B. Same height, so b sin A = a sin B, i.e. a/sin A = b/sin B. Repeat from another vertex for c.

**Cosine rule**: it is Pythagoras plus a correction term. Drop a height from B onto side b, splitting it into pieces of length c cos A and b − c cos A. Two applications of Pythagoras and expanding the bracket give a² = b² + c² − 2bc cos A. Set A = 90°: cos A = 0 and the rule collapses to a² = b² + c² — Pythagoras is the special case.

**Area**: ½ × base × height with the height rewritten as a sin C (or b sin C) — the derivation in the discovery above.`,
      strategies: [
        "name what you know — ASA or an opposite pair means sine rule; SAS or SSS means cosine rule",
        "introduce a variable — call the unknown side x and write the rule before touching the calculator",
        "consider extremes — the biggest angle faces the longest side; check your answer respects this",
      ],
      keyPoints: [
        "Sine rule needs an opposite side-angle pair; cosine rule needs SAS or SSS.",
        "Angle form of the cosine rule: cos A = (b² + c² − a²)/(2bc) — a is the side facing the angle you want.",
        "Area = ½ab sin C only works when C is the INCLUDED angle between a and b.",
        "sin(obtuse) is positive but cos(obtuse) is negative — a negative cosine in the angle form means an obtuse angle.",
      ],
      thinkDeeper:
        "The sine rule has an ambiguous case: sin B = 0.6 is satisfied by B ≈ 36.9° AND B ≈ 143.1°, since sin(180° − θ) = sin θ. With SSA information both triangles can genuinely exist — the exam will usually signpost 'the angle is acute' or give a diagram. The cosine rule never suffers from this: cos determines an angle between 0° and 180° uniquely, which is one reason to prefer it for finding angles from three sides.",
    },
    {
      heading: "Choosing the right rule and 3D trigonometry",
      discovery: {
        problem:
          "A spider stands at the bottom corner of a room 8 m long, 6 m wide and 5 m high, staring at the opposite top corner. Its path of sight is the space diagonal. What angle does that gaze make with the floor — and which triangle would you even measure it in?",
        idea: "The angle between a line and a plane is the angle between the line and its SHADOW (projection) on the plane. The shadow of the space diagonal is the base diagonal, length √(8² + 6²) = 10. The right-angled triangle with base 10 and height 5 gives tan θ = 5/10, so θ = tan⁻¹(0.5) ≈ 26.6°.",
      },
      body: `**Decision guide**:

- Right angle in the triangle? One missing SIDE with two known → **Pythagoras**. An angle involved → **SOHCAHTOA**.
- No right angle? Opposite side-angle pair known → **sine rule**. Two sides + included angle, or three sides → **cosine rule**.
- Asked for area with two sides and the included angle → **½ab sin C**.

**Angle between a line and a plane**: drop a perpendicular from the top end of the line to the plane; the angle sits between the line and its projection (its shadow). In a cuboid, the angle between space diagonal AG and the base is found in right-angled triangle ACG: tan θ = (height)/(base diagonal).

**Multi-step problems** chain the tools. A quadrilateral is usually split by a diagonal into two triangles:

- Find the diagonal first (Pythagoras or cosine rule).
- Then attack the second triangle with whichever rule its information demands.
- Keep every intermediate value exact or to at least 4 significant figures — rounding early is the number one source of lost accuracy marks.

Example: ABCD with a right angle at B, AB = 6, BC = 8. Diagonal AC = 10 by Pythagoras; triangle ACD (with CD and DA known) then falls to the cosine rule, and each triangle's area comes from ½ab sin C.`,
      whyItWorks: `Why is "line and its shadow" the right definition of the angle with a plane? Of all the angles the line makes with lines in the plane through its foot, the one with the projection is the smallest — tilt away from the shadow in any direction and the angle only grows. The perpendicular drop also manufactures the right angle that lets SOHCAHTOA work. Every 3D angle question is secretly a hunt for one flat right-angled triangle.`,
      strategies: [
        "split into triangles — one diagonal turns a quadrilateral into two solvable triangles",
        "draw and flatten the key triangle — redraw it in 2D with all known values on it",
        "name what you know (SAS, SSS, ASA, opposite pair) before choosing a rule",
        "look for invariants — the shared diagonal must come out the same from both triangles: a free check",
      ],
      keyPoints: [
        "Choose by information shape: opposite pair → sine rule; SAS/SSS → cosine rule; right angle → Pythagoras/SOHCAHTOA.",
        "Angle between a line and a plane = angle between the line and its projection on the plane.",
        "In a cuboid: tan θ = height ÷ base diagonal for the space diagonal's angle with the base.",
        "Never round mid-calculation — store the exact value in your calculator's memory.",
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Pythagoras' theorem",
        back: "In a right-angled triangle, a² + b² = c², where c is the hypotenuse (the side opposite the right angle, always the longest).",
      },
      {
        front: "When do you ADD squares and when do you SUBTRACT?",
        back: "ADD to find the hypotenuse: c = √(a² + b²). SUBTRACT to find a leg: a = √(c² − b²).",
      },
      {
        front: "Distance between (x₁, y₁) and (x₂, y₂)",
        back: "√((x₂ − x₁)² + (y₂ − y₁)²) — Pythagoras with the horizontal and vertical gaps as legs.",
      },
      {
        front: "SOH CAH TOA",
        back: "sin θ = Opposite/Hypotenuse, cos θ = Adjacent/Hypotenuse, tan θ = Opposite/Adjacent. Label O and A relative to the angle in use.",
      },
      {
        front: "How do you find an ANGLE from two sides?",
        back: "Form the ratio, then use the inverse function: θ = sin⁻¹, cos⁻¹ or tan⁻¹ of the ratio. Calculator in degrees mode.",
      },
      {
        front: "Exact values: sin 30°, sin 45°, sin 60°",
        back: "1/2, 1/√2 (= √2/2), √3/2. Cosines run the same list backwards: cos 30° = √3/2, cos 45° = 1/√2, cos 60° = 1/2.",
      },
      {
        front: "Exact values: tan 30°, tan 45°, tan 60°",
        back: "1/√3 (= √3/3), 1, √3. From the special triangles (1, √3, 2) and (1, 1, √2).",
      },
      {
        front: "The three rules of bearings",
        back: "Measured from north, measured clockwise, written with three figures (e.g. 060°). Back-bearing differs by 180°.",
      },
      {
        front: "Sine rule — statement and when to use it",
        back: "a/sin A = b/sin B = c/sin C. Use when you know an OPPOSITE side-angle pair.",
      },
      {
        front: "Cosine rule — both forms",
        back: "Side: a² = b² + c² − 2bc cos A (for SAS). Angle: cos A = (b² + c² − a²)/(2bc) (for SSS).",
      },
      {
        front: "Area of any triangle",
        back: "Area = ½ab sin C, where C is the angle INCLUDED between sides a and b. Comes from ½ × base × height with height = a sin C.",
      },
      {
        front: "Space diagonal of a cuboid a × b × c",
        back: "d = √(a² + b² + c²) — Pythagoras applied twice: base diagonal, then up the height.",
      },
      {
        front: "Angle between a line and a plane",
        back: "The angle between the line and its projection (shadow) on the plane. In a cuboid: tan θ = height ÷ base diagonal.",
      },
      {
        front: "Angle of depression",
        back: "Measured DOWN from the horizontal. It equals the angle of elevation seen from the other end — alternate angles between parallel horizontals.",
      },
    ],
    keyFacts: [
      "The hypotenuse is opposite the right angle and is always the longest side.",
      "Pythagorean triples worth spotting: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (and all their multiples, e.g. 6-8-10).",
      "sin 30° = cos 60° = 1/2 exactly — from half an equilateral triangle.",
      "sin and cos of an acute angle are always less than 1; tan 45° = 1 and tan grows without limit.",
      "The sine rule needs an opposite side-angle pair; the cosine rule handles SAS and SSS.",
      "sin(180° − θ) = sin θ, so sin 150° = sin 30° = 1/2 — obtuse angles keep a positive sine.",
      "cos of an obtuse angle is negative — a negative result from the cosine rule's angle form means the angle is obtuse.",
      "Bearings use three figures, measured clockwise from north: due east is 090°, due south is 180°.",
      "An 'exact' answer means a simplified surd or fraction (e.g. 4√3, 1/2) — never a rounded decimal.",
      "Keep intermediate values unrounded; round only the final answer, usually to 1 decimal place or 3 significant figures.",
    ],
    formulaSheet: [
      {
        name: "Pythagoras' theorem",
        formula: "a² + b² = c²",
        note: "c is the hypotenuse. Add for the hypotenuse, subtract for a leg.",
      },
      {
        name: "Distance between two points",
        formula: "d = √((x₂ − x₁)² + (y₂ − y₁)²)",
      },
      {
        name: "Space diagonal of a cuboid",
        formula: "d = √(a² + b² + c²)",
      },
      {
        name: "Sine ratio",
        formula: "sin θ = opposite / hypotenuse",
      },
      {
        name: "Cosine ratio",
        formula: "cos θ = adjacent / hypotenuse",
      },
      {
        name: "Tangent ratio",
        formula: "tan θ = opposite / adjacent",
      },
      {
        name: "Sine rule",
        formula: "a/sin A = b/sin B = c/sin C",
        note: "Needs an opposite side-angle pair. Beware the ambiguous case when finding angles.",
      },
      {
        name: "Cosine rule (side form)",
        formula: "a² = b² + c² − 2bc cos A",
        note: "For two sides and the included angle (SAS).",
      },
      {
        name: "Cosine rule (angle form)",
        formula: "cos A = (b² + c² − a²) / (2bc)",
        note: "For three sides (SSS); a faces the wanted angle.",
      },
      {
        name: "Area of any triangle",
        formula: "Area = ½ ab sin C",
        note: "C must be the angle between sides a and b.",
      },
      {
        name: "Exact values",
        formula: "sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3; sin 45° = cos 45° = 1/√2, tan 45° = 1; sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "tri-quiz-mcq-01",
        question:
          "A right-angled triangle has legs of length 6 cm and 8 cm. What is the length of the hypotenuse?",
        options: ["10 cm", "14 cm", "5.3 cm", "100 cm"],
        answerIndex: 0,
        explanation:
          "c = √(6² + 8²) = √(36 + 64) = √100 = 10 cm. Adding the sides themselves gives 14 (wrong — square first); subtracting squares gives √28 ≈ 5.3 (that is for finding a leg); 100 is c² without the square root.",
        guideRef: "Pythagoras' theorem",
        difficulty: "warmup",
      },
      {
        id: "tri-quiz-mcq-02",
        question:
          "A right-angled triangle has hypotenuse 13 cm and one leg 5 cm. What is the other leg?",
        options: ["13.9 cm", "12 cm", "8 cm", "144 cm"],
        answerIndex: 1,
        explanation:
          "Leg = √(13² − 5²) = √(169 − 25) = √144 = 12 cm — a 5-12-13 triple. Adding the squares gives √194 ≈ 13.9 (only add for the hypotenuse); 8 is just 13 − 5; 144 forgets the square root.",
        guideRef: "Pythagoras' theorem",
        difficulty: "warmup",
      },
      {
        id: "tri-quiz-mcq-03",
        question: "What is the distance between the points (1, 2) and (7, 10)?",
        options: ["√14", "14", "10", "8"],
        answerIndex: 2,
        explanation:
          "The gaps are 6 and 8, so distance = √(6² + 8²) = √100 = 10. √14 forgets to square the gaps; 14 adds the gaps without Pythagoras; 8 is only the vertical gap.",
        guideRef: "Pythagoras' theorem",
        difficulty: "core",
        hints: [
          "Sketch both points — the line between them is the hypotenuse of a right-angled triangle.",
          "The legs are the horizontal gap (7 − 1) and the vertical gap (10 − 2).",
          "Apply Pythagoras: distance = √(6² + 8²).",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "tri-quiz-mcq-04",
        question:
          "In a right-angled triangle, the angle at the base is 35° and the hypotenuse is 12 cm. What is the length of the side opposite the 35° angle, to 3 significant figures?",
        options: ["9.83 cm", "8.40 cm", "20.9 cm", "6.88 cm"],
        answerIndex: 3,
        explanation:
          "Opposite and hypotenuse means sine: O = 12 sin 35° ≈ 6.88 cm. 9.83 uses cos (that gives the adjacent); 8.40 uses tan; 20.9 divides instead of multiplying (12/sin 35°) — but the opposite side must be SHORTER than the hypotenuse.",
        guideRef: "SOHCAHTOA: sides and angles",
        difficulty: "core",
        hints: [
          "Label the sides relative to the 35° angle: which two sides are involved?",
          "Opposite and hypotenuse — which of SOH, CAH, TOA uses exactly those?",
          "sin 35° = O/12, so multiply both sides by 12.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "tri-quiz-mcq-05",
        question:
          "A right-angled triangle has opposite side 7 cm and adjacent side 10 cm (relative to angle θ). Find θ to 1 decimal place.",
        options: ["35.0°", "44.4°", "55.0°", "0.7°"],
        answerIndex: 0,
        explanation:
          "tan θ = 7/10 = 0.7, so θ = tan⁻¹(0.7) ≈ 35.0°. 44.4° comes from wrongly using sin⁻¹(0.7); 55.0° is tan⁻¹(10/7), the OTHER acute angle; 0.7° confuses the ratio with the angle.",
        guideRef: "SOHCAHTOA: sides and angles",
        difficulty: "core",
        hints: [
          "Opposite and adjacent are known — which ratio uses those two?",
          "Form tan θ = 7/10.",
          "Undo tan with the inverse function tan⁻¹ on your calculator (degrees mode).",
        ],
        strategy: "work backwards",
      },
      {
        id: "tri-quiz-mcq-06",
        question: "What is the exact value of sin 60°?",
        options: ["1/2", "√3/2", "1/√2", "√3"],
        answerIndex: 1,
        explanation:
          "From half an equilateral triangle (sides 1, √3, 2): sin 60° = √3/2. 1/2 is sin 30°; 1/√2 is sin 45°; √3 is tan 60° — and sine of an acute angle can never exceed 1.",
        guideRef: "Exact trig values",
        difficulty: "warmup",
      },
      {
        id: "tri-quiz-mcq-07",
        question:
          "In triangle ABC, angle A = 40°, angle B = 75° and side a = 8 cm. Find side b to 3 significant figures.",
        options: ["5.32 cm", "7.73 cm", "12.0 cm", "8.00 cm"],
        answerIndex: 2,
        explanation:
          "Sine rule: b = a sin B / sin A = 8 sin 75° / sin 40° ≈ 7.727/0.643 ≈ 12.0 cm. 5.32 flips the rule upside down (8 sin 40°/sin 75°); 7.73 forgets to divide by sin 40°; 8.00 ignores the angles. Sanity check: b faces the bigger angle so must be longer than a.",
        guideRef: "Sine rule, cosine rule and the area formula",
        difficulty: "core",
        hints: [
          "You know an opposite pair (a and A) — which rule needs exactly that?",
          "Write a/sin A = b/sin B with the numbers in.",
          "Rearrange: b = 8 sin 75° / sin 40°. Should b be bigger or smaller than 8?",
        ],
        strategy: "name what you know",
      },
      {
        id: "tri-quiz-mcq-08",
        question:
          "A triangle has sides 7 cm and 9 cm with an included angle of 60°. Find the third side to 3 significant figures.",
        options: ["8.19 cm", "13.9 cm", "11.4 cm", "67.0 cm"],
        answerIndex: 0,
        explanation:
          "Cosine rule: a² = 7² + 9² − 2×7×9×cos 60° = 130 − 63 = 67, so a = √67 ≈ 8.19 cm. 13.9 comes from a sign slip (adding 63); 11.4 is √130, forgetting the cosine term entirely; 67.0 forgets the square root.",
        guideRef: "Sine rule, cosine rule and the area formula",
        difficulty: "core",
        hints: [
          "Two sides and the INCLUDED angle — which rule fits SAS?",
          "a² = b² + c² − 2bc cos A. Substitute b = 7, c = 9, A = 60°.",
          "cos 60° = 1/2 exactly, so the correction term is 63. Don't forget the final square root.",
        ],
        strategy: "name what you know",
      },
      {
        id: "tri-quiz-mcq-09",
        question:
          "A triangle has sides 8 cm and 11 cm with an included angle of 150°. What is its area?",
        options: ["44 cm²", "38.1 cm²", "22 cm²", "88 cm²"],
        answerIndex: 2,
        explanation:
          "Area = ½ × 8 × 11 × sin 150°. The key insight: sin 150° = sin 30° = 1/2 exactly, so Area = 44 × 1/2 = 22 cm². 44 forgets the sine factor; 38.1 uses cos 150° (magnitude); 88 is just 8 × 11.",
        guideRef: "Sine rule, cosine rule and the area formula",
        difficulty: "challenge",
        hints: [
          "The formula ½ab sin C works even when C is obtuse.",
          "What is sin 150°? Think about sin(180° − θ) = sin θ.",
          "sin 150° = sin 30° = 1/2 — an exact value, so no calculator needed.",
        ],
        strategy: "exploit symmetry",
      },
      {
        id: "tri-quiz-mcq-10",
        question:
          "A ship sails 10 km on a bearing of 060°, then 10 km on a bearing of 150°. How far is it from its starting point?",
        options: ["20 km", "14.1 km", "10 km", "17.3 km"],
        answerIndex: 1,
        explanation:
          "The bearing changes by 150° − 60° = 90°, so the two legs are perpendicular — the path turns through a right angle. Distance = √(10² + 10²) = 10√2 ≈ 14.1 km. 20 assumes the ship went straight; 10 and 17.3 (10√3) come from mishandling the angle between the legs.",
        guideRef: "Elevation, depression and bearings",
        difficulty: "challenge",
        hints: [
          "Draw north lines at the start point and at the turning point.",
          "Work out the angle between the first leg and the second leg at the turn.",
          "The bearings differ by 90° — so what shortcut applies to the triangle?",
        ],
        strategy: "draw a diagram",
      },
    ],
    qa: [
      {
        id: "tri-quiz-qa-01",
        question:
          "A 5 m ladder leans against a vertical wall with its foot 1.4 m from the base of the wall on horizontal ground. How far up the wall does the ladder reach?",
        modelAnswer:
          "The ladder, wall and ground form a right-angled triangle with hypotenuse 5 m and base 1.4 m. Height = √(5² − 1.4²) = √(25 − 1.96) = √23.04 = 4.8 m. The ladder reaches 4.8 m up the wall.",
        markScheme: ["4.8", "25 - 1.96", "23.04", "Pythagoras"],
        commonError:
          "Adding the squares (√(25 + 1.96) ≈ 5.19 m) — the ladder is the hypotenuse, so you must SUBTRACT to find a leg. A ladder cannot reach higher than its own length!",
        guideRef: "Pythagoras' theorem",
        difficulty: "warmup",
      },
      {
        id: "tri-quiz-qa-02",
        question:
          "From a point 50 m from the base of a tower, on level ground, the angle of elevation of the top of the tower is 32°. Find the height of the tower to 1 decimal place.",
        modelAnswer:
          "The height is opposite the 32° angle and the 50 m distance is adjacent, so use tan. tan 32° = h/50, so h = 50 tan 32° = 50 × 0.6249 ≈ 31.2 m.",
        markScheme: ["31.2", "tan 32", "50 tan", "opposite"],
        commonError:
          "Using sin instead of tan. The 50 m is along the ground (adjacent), not the line of sight (hypotenuse) — read the diagram carefully before choosing a ratio.",
        guideRef: "Elevation, depression and bearings",
        difficulty: "core",
        hints: [
          "Sketch it: horizontal ground 50 m, vertical tower h, angle 32° at the far point.",
          "Relative to 32°, which sides are h and 50 m?",
          "Opposite and adjacent → tan. Rearrange tan 32° = h/50.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "tri-quiz-qa-03",
        question:
          "A right-angled triangle has hypotenuse 8 cm and one leg 4 cm. Find the exact length of the other leg, giving your answer as a simplified surd.",
        modelAnswer:
          "Other leg = √(8² − 4²) = √(64 − 16) = √48. Simplify: √48 = √(16 × 3) = 4√3 cm (≈ 6.93 cm, but the exact answer 4√3 is required).",
        markScheme: ["4√3", "√48", "64 - 16", "surd"],
        commonError:
          "Stopping at √48 (not fully simplified) or giving a rounded decimal 6.93 — 'exact' means the simplified surd 4√3.",
        guideRef: "Pythagoras' theorem",
        difficulty: "core",
        hints: [
          "The 8 cm side is the hypotenuse — subtract squares.",
          "You should reach √48. Is that fully simplified?",
          "Look for the largest square factor of 48: 48 = 16 × 3.",
        ],
        strategy: "work backwards",
      },
      {
        id: "tri-quiz-qa-04",
        question:
          "In triangle ABC, angle A = 38°, a = 7 cm and b = 10 cm. Find the acute angle B to 1 decimal place.",
        modelAnswer:
          "Sine rule: sin B / b = sin A / a, so sin B = 10 sin 38° / 7 = 10 × 0.61566/7 ≈ 0.8795. B = sin⁻¹(0.8795) ≈ 61.6°.",
        markScheme: ["61.6", "sine rule", "0.8795", "sin B"],
        commonError:
          "Forgetting the final inverse-sine step and giving 0.88 as the 'angle', or rounding sin B too early (0.88 gives 61.7° — keep full accuracy until the end).",
        guideRef: "Sine rule, cosine rule and the area formula",
        difficulty: "core",
        hints: [
          "You have an opposite pair (a = 7 with A = 38°) — sine rule territory.",
          "Write sin B/10 = sin 38°/7 and solve for sin B.",
          "Finish with sin⁻¹. (The question says acute, so take the calculator's answer directly.)",
        ],
        strategy: "name what you know",
      },
      {
        id: "tri-quiz-qa-05",
        question:
          "A triangle has sides of 8 cm and 5 cm with an included angle of 60°. Find the exact area of the triangle.",
        modelAnswer:
          "Area = ½ab sin C = ½ × 8 × 5 × sin 60° = 20 × √3/2 = 10√3 cm² (≈ 17.3 cm²). The exact answer is 10√3 cm².",
        markScheme: ["10√3", "17.3", "½ab sin C", "sin 60"],
        commonError:
          "Using cos 60° = 1/2 instead of sin 60° = √3/2, giving 10 cm² — the area formula always uses sine of the included angle.",
        guideRef: "Sine rule, cosine rule and the area formula",
        difficulty: "core",
        hints: [
          "Two sides and the angle between them — which area formula fits?",
          "Area = ½ × 8 × 5 × sin 60°. What is sin 60° exactly?",
          "sin 60° = √3/2; multiply through and leave the answer as a surd.",
        ],
        strategy: "name what you know",
        solutions: [
          {
            label: "Formula method",
            steps: [
              "The two sides 8 and 5 include the 60° angle, so Area = ½ab sin C applies directly.",
              "Area = ½ × 8 × 5 × sin 60° = 20 sin 60°.",
              "sin 60° = √3/2 exactly, so Area = 20 × √3/2 = 10√3 cm².",
            ],
          },
          {
            label: "Base-and-height method (shows why the formula works)",
            steps: [
              "Take the 8 cm side as the base. Drop a perpendicular height h from the far end of the 5 cm side.",
              "In the right-angled triangle formed, h is opposite the 60° angle with hypotenuse 5: h = 5 sin 60° = 5√3/2.",
              "Area = ½ × base × height = ½ × 8 × 5√3/2 = 10√3 cm². The elegant point: this IS the derivation of ½ab sin C.",
            ],
          },
        ],
      },
      {
        id: "tri-quiz-qa-06",
        question:
          "A cuboid measures 8 cm by 6 cm by 5 cm (height 5 cm). Find the angle between the space diagonal and the base of the cuboid, to 1 decimal place.",
        modelAnswer:
          "The projection of the space diagonal onto the base is the base diagonal: √(8² + 6²) = √100 = 10 cm. The angle θ between the space diagonal and the base satisfies tan θ = height/base diagonal = 5/10 = 0.5. θ = tan⁻¹(0.5) ≈ 26.6°.",
        markScheme: ["26.6", "base diagonal", "10", "tan"],
        commonError:
          "Using an edge (8 or 6) instead of the base diagonal as the adjacent side — the angle with the plane is measured against the diagonal's SHADOW, which is the full base diagonal.",
        guideRef: "Choosing the right rule and 3D trigonometry",
        difficulty: "challenge",
        hints: [
          "The angle between a line and a plane is the angle between the line and its projection on the plane.",
          "What is the projection of the space diagonal onto the base? Find its length first.",
          "Base diagonal = √(64 + 36) = 10. Now use tan with the height 5.",
        ],
        strategy: "flatten 3D into 2D",
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "tri-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice): Pythagoras & Right Triangles",
        questions: [
          {
            id: "tri-mcq-p1-q01",
            question:
              "A right-angled triangle has legs 9 cm and 12 cm. What is the hypotenuse?",
            options: ["21 cm", "15 cm", "7.9 cm", "225 cm"],
            answerIndex: 1,
            explanation:
              "c = √(81 + 144) = √225 = 15 cm — a scaled 3-4-5 triple. 21 adds the legs without squaring; 7.9 subtracts the squares (that is for a missing leg); 225 forgets the square root.",
            guideRef: "Pythagoras' theorem",
            difficulty: "warmup",
          },
          {
            id: "tri-mcq-p1-q02",
            question: "Which of these triangles is right-angled?",
            options: [
              "Sides 6, 7, 10",
              "Sides 5, 6, 8",
              "Sides 8, 10, 12",
              "Sides 7, 24, 25",
            ],
            answerIndex: 3,
            explanation:
              "Test the converse: 7² + 24² = 49 + 576 = 625 = 25². The others fail: 36 + 49 = 85 ≠ 100; 25 + 36 = 61 ≠ 64; 64 + 100 = 164 ≠ 144. 7-24-25 is a Pythagorean triple worth memorising.",
            guideRef: "Pythagoras' theorem",
            difficulty: "warmup",
          },
          {
            id: "tri-mcq-p1-q03",
            question:
              "A right-angled triangle has hypotenuse 17 cm and one leg 15 cm. Find the other leg.",
            options: ["8 cm", "22.7 cm", "2 cm", "64 cm"],
            answerIndex: 0,
            explanation:
              "Leg = √(17² − 15²) = √(289 − 225) = √64 = 8 cm — the 8-15-17 triple. 22.7 adds the squares; 2 just subtracts the sides; 64 stops before the square root.",
            guideRef: "Pythagoras' theorem",
            difficulty: "core",
            hints: [
              "You have the hypotenuse and want a leg — add or subtract the squares?",
              "Compute 17² − 15².",
              "289 − 225 = 64; finish with the square root.",
            ],
            strategy: "check with a special case",
          },
          {
            id: "tri-mcq-p1-q04",
            question:
              "What is the distance between the points (−2, 3) and (3, 15)?",
            options: ["17", "13", "√17", "7"],
            answerIndex: 1,
            explanation:
              "Gaps: 3 − (−2) = 5 and 15 − 3 = 12, so distance = √(25 + 144) = √169 = 13 (a 5-12-13 triple). 17 adds the gaps; √17 forgets to square them; 7 muddles the subtraction.",
            guideRef: "Pythagoras' theorem",
            difficulty: "core",
            hints: [
              "Find the horizontal and vertical gaps first — mind the negative coordinate.",
              "The gaps are 5 and 12.",
              "Distance = √(5² + 12²). Recognise the triple?",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "tri-mcq-p1-q05",
            question:
              "A right-angled triangle has hypotenuse 10 cm and one leg 5 cm. What is the EXACT length of the other leg?",
            options: ["5√5 cm", "5 cm", "5√3 cm", "2√5 cm"],
            answerIndex: 2,
            explanation:
              "Leg = √(100 − 25) = √75 = √(25 × 3) = 5√3 cm. 5√5 (= √125) comes from adding the squares; 5 assumes the legs are equal; 2√5 is a mis-simplification of the surd.",
            guideRef: "Pythagoras' theorem",
            difficulty: "core",
            hints: [
              "Subtract the squares: 10² − 5².",
              "You get √75 — now simplify the surd.",
              "Find the largest square factor: 75 = 25 × 3.",
            ],
            strategy: "work backwards",
          },
          {
            id: "tri-mcq-p1-q06",
            question:
              "Relative to angle θ in a right-angled triangle, you know the opposite side and the hypotenuse. Which ratio should you use?",
            options: ["cosine", "tangent", "sine", "Pythagoras — no ratio needed"],
            answerIndex: 2,
            explanation:
              "SOH: sin θ = opposite/hypotenuse — exactly the two sides given. Cosine pairs adjacent with hypotenuse; tangent pairs opposite with adjacent; Pythagoras finds sides, not angles from two sides in ratio.",
            guideRef: "SOHCAHTOA: sides and angles",
            difficulty: "core",
            hints: [
              "Write out SOH CAH TOA in full.",
              "Match the letters: O and H appear together in which triple?",
              "SOH stands for Sin = Opposite over Hypotenuse.",
            ],
          },
          {
            id: "tri-mcq-p1-q07",
            question:
              "In a right-angled triangle, the angle is 28° and the hypotenuse is 15 cm. Find the side ADJACENT to the 28° angle, to 3 significant figures.",
            options: ["13.2 cm", "7.04 cm", "28.2 cm", "17.0 cm"],
            answerIndex: 0,
            explanation:
              "Adjacent and hypotenuse means cosine: A = 15 cos 28° ≈ 13.2 cm. 7.04 uses sin (the opposite side); 28.2 is 15/tan 28°; 17.0 is 15/cos 28° — impossible, as a leg cannot exceed the hypotenuse.",
            guideRef: "SOHCAHTOA: sides and angles",
            difficulty: "core",
            hints: [
              "Which two sides are involved — and which ratio pairs them?",
              "CAH: cos 28° = adjacent/15.",
              "Multiply: adjacent = 15 cos 28°. Check it is less than 15.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "tri-mcq-p1-q08",
            question:
              "A square has a diagonal of length 12 cm. What is the exact perimeter of the square?",
            options: ["48 cm", "24√2 cm", "12√2 cm", "36 cm"],
            answerIndex: 1,
            explanation:
              "If the side is s, the diagonal is s√2 = 12, so s = 12/√2 = 6√2. Perimeter = 4 × 6√2 = 24√2 cm ≈ 33.9 cm. 48 treats the diagonal as the side; 12√2 is the diagonal times √2 (that would be the perimeter of a half-square); 36 is a rounding guess. Working backwards from the diagonal is the key move.",
            guideRef: "Pythagoras' theorem",
            difficulty: "challenge",
            hints: [
              "Let the side be s and apply Pythagoras to half the square.",
              "The diagonal of a square of side s is s√2.",
              "Solve s√2 = 12, then rationalise: 12/√2 = 6√2.",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
      {
        id: "tri-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice): Trig Ratios, Bearings & Exact Values",
        questions: [
          {
            id: "tri-mcq-p2-q01",
            question: "Which of these correctly defines tan θ in a right-angled triangle?",
            options: [
              "opposite ÷ adjacent",
              "adjacent ÷ opposite",
              "opposite ÷ hypotenuse",
              "adjacent ÷ hypotenuse",
            ],
            answerIndex: 0,
            explanation:
              "TOA: tan θ = opposite/adjacent. Adjacent over opposite is its reciprocal (1/tan θ); opposite over hypotenuse is sin θ; adjacent over hypotenuse is cos θ.",
            guideRef: "SOHCAHTOA: sides and angles",
            difficulty: "warmup",
          },
          {
            id: "tri-mcq-p2-q02",
            question: "What is the exact value of cos 60°?",
            options: ["√3/2", "1/2", "1/√2", "1/√3"],
            answerIndex: 1,
            explanation:
              "From the half-equilateral triangle (1, √3, 2): cos 60° = adjacent/hypotenuse = 1/2. √3/2 is cos 30° (or sin 60°); 1/√2 belongs to 45°; 1/√3 is tan 30°.",
            guideRef: "Exact trig values",
            difficulty: "warmup",
          },
          {
            id: "tri-mcq-p2-q03",
            question:
              "In a right-angled triangle, the hypotenuse is 20 cm and the side opposite angle θ is 13 cm. Find θ to 1 decimal place.",
            options: ["33.0°", "49.5°", "40.5°", "0.65°"],
            answerIndex: 2,
            explanation:
              "sin θ = 13/20 = 0.65, so θ = sin⁻¹(0.65) ≈ 40.5°. 33.0° wrongly uses tan⁻¹(0.65); 49.5° is the other acute angle (90° − 40.5°); 0.65° confuses the ratio with the angle.",
            guideRef: "SOHCAHTOA: sides and angles",
            difficulty: "core",
            hints: [
              "Opposite and hypotenuse — pick the matching ratio.",
              "sin θ = 13/20.",
              "Apply sin⁻¹ to 0.65 with the calculator in degrees mode.",
            ],
            strategy: "work backwards",
          },
          {
            id: "tri-mcq-p2-q04",
            question:
              "A kite string is 60 m long and fully taut, making an angle of elevation of 48° with the horizontal ground. How high is the kite, to 3 significant figures?",
            options: ["40.1 m", "66.6 m", "80.7 m", "44.6 m"],
            answerIndex: 3,
            explanation:
              "The string is the hypotenuse and the height is opposite the 48°: h = 60 sin 48° ≈ 44.6 m. 40.1 uses cos (that is the horizontal distance); 66.6 uses tan; 80.7 divides by sin — a kite cannot fly higher than its string is long.",
            guideRef: "Elevation, depression and bearings",
            difficulty: "core",
            hints: [
              "The taut string is the hypotenuse of a right-angled triangle.",
              "The height is opposite the 48° angle.",
              "Opposite from hypotenuse: h = 60 sin 48°.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "tri-mcq-p2-q05",
            question:
              "From the top of an 80 m cliff, the angle of depression of a boat is 25°. How far is the boat from the base of the cliff, to 3 significant figures?",
            options: ["172 m", "37.3 m", "189 m", "88.3 m"],
            answerIndex: 0,
            explanation:
              "By alternate angles, the elevation of the cliff top from the boat is 25°. tan 25° = 80/d, so d = 80/tan 25° ≈ 172 m. 37.3 multiplies instead of dividing (80 tan 25°); 189 uses sin; 88.3 uses cos — both wrongly treat 80 m as related to the hypotenuse.",
            guideRef: "Elevation, depression and bearings",
            difficulty: "core",
            hints: [
              "Draw the horizontal at the cliff top; the depression is measured down from it.",
              "Alternate angles put 25° at the boat, between the sea and the line of sight.",
              "tan 25° = 80/d. Solve for d — divide, don't multiply.",
            ],
            strategy: "look for parallel lines",
          },
          {
            id: "tri-mcq-p2-q06",
            question:
              "A ship sails 24 km on a bearing of 040°. How far NORTH has it travelled, to 3 significant figures?",
            options: ["15.4 km", "18.4 km", "31.3 km", "20.1 km"],
            answerIndex: 1,
            explanation:
              "The bearing is measured from north, so the northward leg is adjacent to the 40° angle: north = 24 cos 40° ≈ 18.4 km. 15.4 is 24 sin 40° (the EASTWARD distance); 31.3 divides by cos; 20.1 uses tan.",
            guideRef: "Elevation, depression and bearings",
            difficulty: "core",
            hints: [
              "Draw a north line at the start; the path makes 40° with it.",
              "The northward distance hugs the line the angle is measured from.",
              "Adjacent to the angle with a known hypotenuse → cos: 24 cos 40°.",
            ],
            strategy: "split the journey into components",
          },
          {
            id: "tri-mcq-p2-q07",
            question: "What is the exact value of tan 60°?",
            options: ["1/√3", "√3/2", "√3", "1/2"],
            answerIndex: 2,
            explanation:
              "In the half-equilateral triangle, tan 60° = opposite/adjacent = √3/1 = √3. 1/√3 is tan 30° (its reciprocal); √3/2 is sin 60°; 1/2 is cos 60°.",
            guideRef: "Exact trig values",
            difficulty: "core",
            hints: [
              "Sketch the (1, √3, 2) triangle: the 60° angle is at the base.",
              "Which sides are opposite and adjacent to 60°?",
              "Opposite is √3, adjacent is 1.",
            ],
          },
          {
            id: "tri-mcq-p2-q08",
            question:
              "Without a calculator, evaluate sin 45° × cos 45° + sin 30°.",
            options: ["3/4", "1", "(√2 + 1)/2", "1/2"],
            answerIndex: 1,
            explanation:
              "sin 45° × cos 45° = (1/√2) × (1/√2) = 1/2, and sin 30° = 1/2, so the total is 1/2 + 1/2 = 1. 3/4 misjudges the product; (√2 + 1)/2 ADDS sin 45° and cos 45° instead of multiplying; 1/2 drops one term.",
            guideRef: "Exact trig values",
            difficulty: "challenge",
            hints: [
              "Replace each trig value with its exact form from the special triangles.",
              "sin 45° = cos 45° = 1/√2. What is their product?",
              "(1/√2)² = 1/2. Now add sin 30°.",
            ],
            strategy: "exploit symmetry",
          },
        ],
      },
      {
        id: "tri-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice): Sine Rule, Cosine Rule & 3D",
        questions: [
          {
            id: "tri-mcq-p3-q01",
            question:
              "You know two sides of a triangle and the angle BETWEEN them, and you want the third side. Which rule applies directly?",
            options: [
              "Sine rule",
              "Cosine rule",
              "Pythagoras' theorem",
              "Area formula ½ab sin C",
            ],
            answerIndex: 1,
            explanation:
              "SAS (two sides + included angle) is exactly the cosine rule's job: a² = b² + c² − 2bc cos A. The sine rule needs an opposite pair; Pythagoras needs a right angle; the area formula gives area, not a side.",
            guideRef: "Choosing the right rule and 3D trigonometry",
            difficulty: "warmup",
          },
          {
            id: "tri-mcq-p3-q02",
            question:
              "In triangle ABC, angle A = 52°, angle C = 63° and c = 14 cm. Find side a to 3 significant figures.",
            options: ["12.4 cm", "15.8 cm", "11.0 cm", "14.0 cm"],
            answerIndex: 0,
            explanation:
              "Sine rule: a = c sin A/sin C = 14 sin 52°/sin 63° ≈ 11.03/0.891 ≈ 12.4 cm. 15.8 inverts the rule (14 sin 63°/sin 52°); 11.0 forgets to divide by sin 63°; 14.0 ignores the angles. Check: a faces the smaller angle, so a < c. ✓",
            guideRef: "Sine rule, cosine rule and the area formula",
            difficulty: "core",
            hints: [
              "c and C form an opposite pair — sine rule.",
              "a/sin A = c/sin C with the numbers in.",
              "a = 14 sin 52°/sin 63°. Should a be more or less than 14?",
            ],
            strategy: "name what you know",
          },
          {
            id: "tri-mcq-p3-q03",
            question:
              "A triangle has sides 5 cm, 7 cm and 8 cm. Find the angle opposite the 8 cm side, to 1 decimal place.",
            options: ["60.0°", "38.2°", "98.2°", "81.8°"],
            answerIndex: 3,
            explanation:
              "cos A = (5² + 7² − 8²)/(2 × 5 × 7) = (25 + 49 − 64)/70 = 10/70 = 1/7, so A = cos⁻¹(1/7) ≈ 81.8°. 60.0° is the angle opposite the 7 cm side; 38.2° is opposite the 5 cm side; 98.2° is 180° − 81.8°. The wanted side must go alone on top with the minus sign.",
            guideRef: "Sine rule, cosine rule and the area formula",
            difficulty: "core",
            hints: [
              "Three sides, no angles — angle form of the cosine rule.",
              "cos A = (b² + c² − a²)/(2bc), where a = 8 faces the wanted angle.",
              "Compute (25 + 49 − 64)/70, then cos⁻¹.",
            ],
            strategy: "name what you know",
          },
          {
            id: "tri-mcq-p3-q04",
            question:
              "A triangle has sides 9 cm and 12 cm with an included angle of 40°. What is its area, to 3 significant figures?",
            options: ["41.4 cm²", "34.7 cm²", "69.4 cm²", "54.0 cm²"],
            answerIndex: 1,
            explanation:
              "Area = ½ × 9 × 12 × sin 40° = 54 × 0.6428 ≈ 34.7 cm². 41.4 uses cos 40°; 69.4 forgets the ½; 54.0 forgets the sine factor entirely.",
            guideRef: "Sine rule, cosine rule and the area formula",
            difficulty: "core",
            hints: [
              "Two sides and the included angle → Area = ½ab sin C.",
              "Substitute: ½ × 9 × 12 × sin 40°.",
              "9 × 12 = 108; halve it, then multiply by sin 40°.",
            ],
            strategy: "name what you know",
          },
          {
            id: "tri-mcq-p3-q05",
            question:
              "What is the length of the space diagonal of a cuboid measuring 2 cm by 6 cm by 9 cm?",
            options: ["11 cm", "10.8 cm", "17 cm", "6.32 cm"],
            answerIndex: 0,
            explanation:
              "d = √(2² + 6² + 9²) = √(4 + 36 + 81) = √121 = 11 cm. 10.8 (√117) drops the 2 cm dimension; 17 adds the edges; 6.32 (√40) uses only two dimensions.",
            guideRef: "Pythagoras in 3D",
            difficulty: "core",
            hints: [
              "Space diagonal: apply Pythagoras twice, or use the 3D formula.",
              "d² = a² + b² + c² — all THREE dimensions.",
              "4 + 36 + 81 = 121, a perfect square.",
            ],
            strategy: "flatten 3D into 2D",
          },
          {
            id: "tri-mcq-p3-q06",
            question:
              "A cuboid has a base 12 cm by 9 cm and height 8 cm. What angle does the space diagonal make with the base, to 1 decimal place?",
            options: ["33.7°", "41.6°", "28.1°", "61.9°"],
            answerIndex: 2,
            explanation:
              "Base diagonal = √(144 + 81) = √225 = 15. tan θ = 8/15, so θ = tan⁻¹(8/15) ≈ 28.1°. 33.7° uses the 12 cm edge instead of the base diagonal; 41.6° uses the 9 cm edge; 61.9° is the complement.",
            guideRef: "Choosing the right rule and 3D trigonometry",
            difficulty: "core",
            hints: [
              "The angle with the base is measured against the diagonal's projection — the base diagonal.",
              "Base diagonal = √(12² + 9²) — recognise the triple.",
              "tan θ = height/base diagonal = 8/15.",
            ],
            strategy: "flatten 3D into 2D",
          },
          {
            id: "tri-mcq-p3-q07",
            question:
              "A triangle has sides 10 cm and 12 cm and area 30 cm². Find the acute included angle between those sides.",
            options: ["60°", "14.5°", "45°", "30°"],
            answerIndex: 3,
            explanation:
              "½ × 10 × 12 × sin θ = 30, so 60 sin θ = 30 and sin θ = 0.5, giving θ = 30° (acute). 60° confuses sin 60° with 0.5 the wrong way round; 14.5° comes from forgetting the ½ (sin θ = 0.25); 45° is a guess at a 'nice' angle.",
            guideRef: "Sine rule, cosine rule and the area formula",
            difficulty: "core",
            hints: [
              "Put the knowns into Area = ½ab sin C and solve for sin C.",
              "60 sin θ = 30.",
              "sin θ = 1/2 — you know this exact value.",
            ],
            strategy: "work backwards",
          },
          {
            id: "tri-mcq-p3-q08",
            question:
              "A triangle has sides 13 cm, 14 cm and 15 cm. What is its area?",
            options: ["105 cm²", "84 cm²", "91 cm²", "42 cm²"],
            answerIndex: 1,
            explanation:
              "Cosine rule for the angle between the 14 and 15 sides: cos A = (14² + 15² − 13²)/(2×14×15) = 252/420 = 0.6, so sin A = √(1 − 0.36) = 0.8 (Pythagorean identity — no calculator needed). Area = ½ × 14 × 15 × 0.8 = 84 cm². 105 treats the triangle as right-angled (½ × 14 × 15); 91 is ½ × 13 × 14; 42 halves the true answer. The 13-14-15 triangle is a classic: it splits into 5-12-13 and 9-12-15 right triangles with height 12.",
            guideRef: "Choosing the right rule and 3D trigonometry",
            difficulty: "challenge",
            hints: [
              "Three sides, want area — find an angle first with the cosine rule.",
              "Choose the angle between the 14 and 15 cm sides; the fractions cancel beautifully.",
              "cos A = 0.6 exactly. Use sin²A + cos²A = 1 to get sin A, then ½ab sin A.",
            ],
            strategy: "elegant algebra",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "tri-qa-paper-1",
        title: "Practice Paper 1 (Written): Pythagoras & SOHCAHTOA",
        questions: [
          {
            id: "tri-qa-p1-q01",
            question:
              "A rectangle measures 9 cm by 12 cm. Find the length of its diagonal.",
            modelAnswer:
              "The diagonal is the hypotenuse of a right-angled triangle with legs 9 and 12. Diagonal = √(9² + 12²) = √(81 + 144) = √225 = 15 cm.",
            markScheme: ["15", "81 + 144", "225", "Pythagoras"],
            commonError:
              "Adding 9 + 12 = 21 or halving it — the diagonal must be found by squaring, adding, then square-rooting. (Spot the 3-4-5 triple scaled by 3.)",
            guideRef: "Pythagoras' theorem",
            difficulty: "warmup",
          },
          {
            id: "tri-qa-p1-q02",
            question:
              "An isosceles triangle has two sides of 13 cm and a base of 10 cm. Find its perpendicular height and hence its area.",
            modelAnswer:
              "The height splits the base in half: 5 cm each side. Height = √(13² − 5²) = √(169 − 25) = √144 = 12 cm. Area = ½ × base × height = ½ × 10 × 12 = 60 cm².",
            markScheme: ["60", "height 12", "169 - 25", "half base"],
            commonError:
              "Using the full base 10 instead of half of it in Pythagoras — the height only forms a right-angled triangle with HALF the base.",
            guideRef: "Pythagoras' theorem",
            difficulty: "core",
            hints: [
              "Draw the height from the apex — what does it do to the base?",
              "It bisects the base: right triangle with hypotenuse 13 and leg 5.",
              "Height = √(169 − 25), then use ½ × base × height.",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "tri-qa-p1-q03",
            question:
              "P is the point (1, 5) and Q is the point (6, −3). Find the exact length of PQ, giving your answer as a surd.",
            modelAnswer:
              "Horizontal gap: 6 − 1 = 5. Vertical gap: −3 − 5 = −8, so 8 in length. PQ = √(5² + 8²) = √(25 + 64) = √89 (≈ 9.43). √89 has no square factors, so √89 is the exact answer.",
            markScheme: ["√89", "25 + 64", "9.43", "distance"],
            commonError:
              "Mishandling the negative coordinate: the vertical gap is −3 − 5 = −8 (length 8), not 2. Squaring removes the sign, but the gap itself must be right first.",
            guideRef: "Pythagoras' theorem",
            difficulty: "core",
            hints: [
              "Distance formula: √((x₂ − x₁)² + (y₂ − y₁)²).",
              "Careful with −3 − 5.",
              "√(25 + 64) — can √89 be simplified? Check for square factors.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "tri-qa-p1-q04",
            question:
              "A wheelchair ramp must rise 1.2 m and is inclined at 9.5° to the horizontal. How long is the ramp itself (the sloping surface), to 3 significant figures?",
            modelAnswer:
              "The rise (1.2 m) is opposite the 9.5° angle and the ramp is the hypotenuse. sin 9.5° = 1.2/L, so L = 1.2/sin 9.5° = 1.2/0.16505 ≈ 7.27 m.",
            markScheme: ["7.27", "sin 9.5", "1.2", "hypotenuse"],
            commonError:
              "Multiplying instead of dividing: L = 1.2 × sin 9.5° ≈ 0.198 m — absurd, since the ramp must be LONGER than its rise. Always sense-check which side is the hypotenuse.",
            guideRef: "SOHCAHTOA: sides and angles",
            difficulty: "core",
            hints: [
              "Sketch the ramp: rise 1.2 m vertical, angle 9.5° at the bottom.",
              "The ramp is the hypotenuse; the rise is opposite the angle.",
              "sin 9.5° = 1.2/L — rearrange so L is the subject.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "tri-qa-p1-q05",
            question:
              "In a right-angled triangle, one angle is 30° and the hypotenuse is 14 cm. Find, without rounding, the length of the side opposite the 30° angle.",
            modelAnswer:
              "sin 30° = opposite/14, so opposite = 14 sin 30° = 14 × 1/2 = 7 cm exactly.",
            markScheme: ["7", "sin 30", "1/2", "half hypotenuse"],
            commonError:
              "Reaching for the calculator and writing 6.99 or 7.0000001 — sin 30° = 1/2 exactly, so the answer is exactly 7 cm.",
            guideRef: "Exact trig values",
            difficulty: "core",
            hints: [
              "Which ratio links the opposite side and the hypotenuse?",
              "opposite = 14 sin 30°. Do you need a calculator for sin 30°?",
              "sin 30° = 1/2 exactly — think of half an equilateral triangle.",
            ],
            strategy: "exploit symmetry",
            solutions: [
              {
                label: "SOHCAHTOA method",
                steps: [
                  "The opposite side and the hypotenuse are involved, so use sine.",
                  "sin 30° = opposite/14, giving opposite = 14 sin 30°.",
                  "sin 30° = 1/2 exactly, so opposite = 14 × 1/2 = 7 cm.",
                ],
              },
              {
                label: "Special-triangle method (the elegant one)",
                steps: [
                  "A 30-60-90 triangle is half an equilateral triangle.",
                  "Complete the equilateral triangle by reflecting: its sides all equal the hypotenuse, 14 cm.",
                  "The side opposite 30° is half a side of the equilateral triangle — half of 14 is 7 cm. No trig button needed: in any 30-60-90 triangle, the shortest side is exactly half the hypotenuse.",
                ],
              },
            ],
          },
          {
            id: "tri-qa-p1-q06",
            question:
              "A right-angled triangle has perimeter 40 cm and hypotenuse 17 cm. Find its area. (Hint: you do NOT need to find the two legs separately... but you can.)",
            modelAnswer:
              "Let the legs be a and b. Then a + b = 40 − 17 = 23 and a² + b² = 17² = 289. Square the first equation: (a + b)² = 529, so a² + 2ab + b² = 529. Subtract the second: 2ab = 529 − 289 = 240, so ab = 120. Area = ½ab = 60 cm². (Indeed the legs are 8 and 15 — the 8-15-17 triple — confirming perimeter 40 and area ½ × 8 × 15 = 60.)",
            markScheme: ["60", "a + b = 23", "2ab = 240", "ab = 120"],
            commonError:
              "Trying to guess the legs immediately or setting up a quadratic and getting lost — the identity (a + b)² = a² + 2ab + b² hands you 2ab, which is four times the area, with almost no work.",
            guideRef: "Pythagoras' theorem",
            difficulty: "challenge",
            hints: [
              "Write down what you know about the legs a and b: their sum, and the sum of their squares.",
              "The area is ½ab — so you only need the PRODUCT ab, not a and b themselves.",
              "Expand (a + b)² and compare it with a² + b². What drops out?",
            ],
            strategy: "elegant algebra",
          },
        ],
      },
      {
        id: "tri-qa-paper-2",
        title: "Practice Paper 2 (Written): Elevation, Depression & Bearings",
        questions: [
          {
            id: "tri-qa-p2-q01",
            question: "Without a calculator, find the exact value of sin 30° + cos 60°.",
            modelAnswer:
              "sin 30° = 1/2 and cos 60° = 1/2 (both from half an equilateral triangle). Sum = 1/2 + 1/2 = 1.",
            markScheme: ["1", "1/2", "exact values"],
            commonError:
              "Mixing up the table and using √3/2 for one of them, giving (1 + √3)/2 — remember sin 30° and cos 60° are the SAME value because 30° and 60° are complementary.",
            guideRef: "Exact trig values",
            difficulty: "warmup",
          },
          {
            id: "tri-qa-p2-q02",
            question:
              "From a point on level ground 35 m from the base of a mast, the angle of elevation of the top of the mast is 54°. Find the height of the mast, to 1 decimal place.",
            modelAnswer:
              "Height is opposite the 54° angle; the 35 m along the ground is adjacent. tan 54° = h/35, so h = 35 tan 54° = 35 × 1.3764 ≈ 48.2 m.",
            markScheme: ["48.2", "tan 54", "35 tan 54", "opposite"],
            commonError:
              "Choosing sin because 'elevation sounds like height' — the given 35 m is the ADJACENT side (along the ground), so tan is forced: no hypotenuse is known.",
            guideRef: "Elevation, depression and bearings",
            difficulty: "core",
            hints: [
              "Sketch: horizontal 35 m, vertical h, elevation angle 54° at the observer.",
              "You know the adjacent and want the opposite.",
              "tan 54° = h/35 — multiply up.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "tri-qa-p2-q03",
            question:
              "From the top of a 60 m lighthouse, the angle of depression of a buoy at sea is 21°. How far is the buoy from the base of the lighthouse, to 3 significant figures?",
            modelAnswer:
              "The depression is measured down from the horizontal at the top; by alternate angles, the elevation of the lighthouse top from the buoy is also 21°. tan 21° = 60/d, so d = 60/tan 21° = 60/0.38386 ≈ 156 m.",
            markScheme: ["156", "60/tan 21", "alternate", "depression"],
            commonError:
              "Placing the 21° between the lighthouse WALL and the line of sight (giving d = 60 tan 21° ≈ 23 m) — depression is always measured from the HORIZONTAL, never from the vertical structure.",
            guideRef: "Elevation, depression and bearings",
            difficulty: "core",
            hints: [
              "Draw the horizontal line at the top of the lighthouse first.",
              "Use alternate angles to move the 21° down to the buoy.",
              "tan 21° = 60/d — the height is opposite, the sea distance adjacent.",
            ],
            strategy: "look for parallel lines",
          },
          {
            id: "tri-qa-p2-q04",
            question:
              "A yacht sails 25 km from harbour H on a bearing of 062° to reach a marker M. Calculate how far east and how far north M is from H, each to 3 significant figures.",
            modelAnswer:
              "Draw a north line at H; the path makes 62° with it. North component (adjacent to the angle): 25 cos 62° = 25 × 0.46947 ≈ 11.7 km. East component (opposite the angle): 25 sin 62° = 25 × 0.88295 ≈ 22.1 km. So M is 22.1 km east and 11.7 km north of H.",
            markScheme: ["22.1", "11.7", "25 sin 62", "25 cos 62"],
            commonError:
              "Swapping the components (east = 25 cos 62°, north = 25 sin 62°) — the bearing is measured FROM north, so cos goes with north. Sense-check: 62° is past 45°, so the yacht heads more east than north, and indeed 22.1 > 11.7.",
            guideRef: "Elevation, depression and bearings",
            difficulty: "core",
            hints: [
              "Draw the north line at H and mark the 62° clockwise to the path.",
              "The path is the hypotenuse; the north and east distances are the legs.",
              "cos pairs with the side touching the angle (north); sin with the side facing it (east).",
            ],
            strategy: "split the journey into components",
          },
          {
            id: "tri-qa-p2-q05",
            question:
              "A hiker walks 8 km on a bearing of 070°, then 5 km on a bearing of 130°. Calculate the hiker's distance from the starting point, to 1 decimal place.",
            modelAnswer:
              "At the turning point, the back-bearing to the start is 070° + 180° = 250°. The angle between the return direction (250°) and the new path (130°) is 250° − 130° = 120°. Cosine rule with sides 8 and 5 around the 120° angle: d² = 8² + 5² − 2 × 8 × 5 × cos 120° = 64 + 25 − 80 × (−0.5) = 89 + 40 = 129. d = √129 ≈ 11.4 km.",
            markScheme: ["11.4", "120", "cosine rule", "√129"],
            commonError:
              "Using the raw bearing difference 130° − 70° = 60° as the triangle's angle — the interior angle at the turn is 180° − 60° = 120°. Draw the north line at the TURNING point to see it. (cos 120° is negative, so the distance comes out LONGER than √89.)",
            guideRef: "Elevation, depression and bearings",
            difficulty: "core",
            hints: [
              "Draw north lines at both the start and the turning point.",
              "Find the interior angle of the triangle at the turning point — use parallel north lines (co-interior angles), or the back-bearing 250°.",
              "The angle is 120°. Now apply the cosine rule with 8, 5 and 120°. Remember cos 120° = −1/2.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "tri-qa-p2-q06",
            question:
              "From a point P on level ground, the angle of elevation of the top of a mast is 35°. After walking 40 m directly towards the mast to a point Q, the angle of elevation is 52°. Find the height of the mast, to 1 decimal place.",
            modelAnswer:
              "Let the height be h and let Q be x m from the base. From Q: h = x tan 52°. From P: h = (x + 40) tan 35°. Set equal: x tan 52° = (x + 40) tan 35°, so x(tan 52° − tan 35°) = 40 tan 35°, giving x = 40 × 0.70021/(1.27994 − 0.70021) = 28.008/0.57973 ≈ 48.31 m. Then h = 48.31 × tan 52° ≈ 61.8 m.",
            markScheme: ["61.8", "tan 52", "tan 35", "simultaneous"],
            commonError:
              "Writing h = 40 tan 52° or h = 40 tan 35° — the 40 m is the distance BETWEEN the two observation points, not the distance to the mast, so an unknown x is unavoidable.",
            guideRef: "Choosing the right rule and 3D trigonometry",
            difficulty: "challenge",
            hints: [
              "Introduce a variable: let x be the distance from Q (the nearer point) to the base of the mast.",
              "Write the height h twice — once using each observation point and its angle.",
              "Both expressions equal h, so set x tan 52° = (x + 40) tan 35° and solve for x first.",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
      {
        id: "tri-qa-paper-3",
        title: "Practice Paper 3 (Written): Sine Rule, Cosine Rule & 3D",
        questions: [
          {
            id: "tri-qa-p3-q01",
            question:
              "A triangle has sides of 6 cm and 10 cm with an included angle of 30°. Find its exact area.",
            modelAnswer:
              "Area = ½ab sin C = ½ × 6 × 10 × sin 30° = 30 × 1/2 = 15 cm² exactly.",
            markScheme: ["15", "½ab sin C", "sin 30", "1/2"],
            commonError:
              "Multiplying by cos 30° or by 30° itself — the formula needs the SINE of the included angle, and sin 30° = 1/2 exactly.",
            guideRef: "Sine rule, cosine rule and the area formula",
            difficulty: "warmup",
          },
          {
            id: "tri-qa-p3-q02",
            question:
              "In triangle PQR, angle P = 68°, p = 11.4 cm and q = 9.8 cm. Find angle Q, to 1 decimal place. (Angle Q is acute.)",
            modelAnswer:
              "Sine rule: sin Q/q = sin P/p, so sin Q = 9.8 sin 68°/11.4 = 9.8 × 0.92718/11.4 ≈ 0.79707. Q = sin⁻¹(0.79707) ≈ 52.9°.",
            markScheme: ["52.9", "sine rule", "0.797", "sin Q"],
            commonError:
              "Rounding sin Q to 0.8 before the inverse step (giving 53.1°) — carry at least 4 decimal places through to the sin⁻¹.",
            guideRef: "Sine rule, cosine rule and the area formula",
            difficulty: "core",
            hints: [
              "p and P are an opposite pair — sine rule.",
              "Rearrange to sin Q = q sin P/p.",
              "Keep full accuracy, then apply sin⁻¹ at the very end.",
            ],
            strategy: "name what you know",
          },
          {
            id: "tri-qa-p3-q03",
            question:
              "A triangular field has two sides of 120 m and 95 m meeting at an angle of 74°. Find (a) the length of the third side, to 3 significant figures, and (b) the area of the field, to 3 significant figures.",
            modelAnswer:
              "(a) Cosine rule: c² = 120² + 95² − 2 × 120 × 95 × cos 74° = 14400 + 9025 − 22800 × 0.27564 = 23425 − 6284.5 = 17140.5, so c = √17140.5 ≈ 131 m. (b) Area = ½ × 120 × 95 × sin 74° = 5700 × 0.96126 ≈ 5480 m².",
            markScheme: ["131", "5480", "cosine rule", "½ab sin C"],
            commonError:
              "Rounding c² or cos 74° too early in part (a), and in part (b) reusing the rounded side 131 unnecessarily — the area needs only the ORIGINAL two sides and the included angle.",
            guideRef: "Sine rule, cosine rule and the area formula",
            difficulty: "core",
            hints: [
              "Part (a): two sides + included angle is SAS — which rule?",
              "Keep every digit of 2 × 120 × 95 × cos 74° in your calculator.",
              "Part (b) needs no new lengths: ½ × 120 × 95 × sin 74° straight away.",
            ],
            strategy: "name what you know",
          },
          {
            id: "tri-qa-p3-q04",
            question:
              "A cuboid measures 10 cm by 7 cm with height 4 cm. Find (a) the length of the space diagonal, to 3 significant figures, and (b) the angle the space diagonal makes with the base, to 1 decimal place.",
            modelAnswer:
              "(a) d = √(10² + 7² + 4²) = √(100 + 49 + 16) = √165 ≈ 12.8 cm. (b) The projection on the base is the base diagonal √(100 + 49) = √149 ≈ 12.207 cm. tan θ = 4/√149 = 0.32769, so θ = tan⁻¹(0.32769) ≈ 18.1°.",
            markScheme: ["12.8", "√165", "18.1", "base diagonal"],
            commonError:
              "In (b), using the rounded 12.2 for the base diagonal or, worse, using the space diagonal as the adjacent side — the right-angled triangle has legs 4 (height) and √149 (base diagonal), with the space diagonal as hypotenuse.",
            guideRef: "Pythagoras in 3D",
            difficulty: "core",
            hints: [
              "Part (a): d² = a² + b² + c².",
              "Part (b): the angle with the base sits between the space diagonal and the BASE diagonal.",
              "tan θ = height ÷ base diagonal, keeping √149 exact.",
            ],
            strategy: "flatten 3D into 2D",
          },
          {
            id: "tri-qa-p3-q05",
            question:
              "In quadrilateral ABCD, angle ABC = 90°, AB = 6 cm, BC = 8 cm, CD = 7 cm and DA = 9 cm. Find the area of the quadrilateral, to 1 decimal place. (Hint: draw the diagonal AC.)",
            modelAnswer:
              "Split along AC. Triangle ABC is right-angled at B: AC = √(6² + 8²) = 10 cm, and its area is ½ × 6 × 8 = 24 cm². Triangle ACD has sides AC = 10, CD = 7, DA = 9. Cosine rule for angle D: cos D = (9² + 7² − 10²)/(2 × 9 × 7) = (81 + 49 − 100)/126 = 30/126 = 0.23810, so D ≈ 76.23° and sin D ≈ 0.97124. Area of ACD = ½ × 9 × 7 × sin D = 31.5 × 0.97124 ≈ 30.6 cm². Total area = 24 + 30.6 = 54.6 cm².",
            markScheme: ["54.6", "AC = 10", "24", "30.6"],
            commonError:
              "Trying to use ½ab sin C on the whole quadrilateral, or finding angle D but then using sides 10 and 7 (or 10 and 9) with it — the angle used in ½ab sin C must be BETWEEN the two sides you multiply (here 9 and 7 around D).",
            guideRef: "Choosing the right rule and 3D trigonometry",
            difficulty: "core",
            hints: [
              "One diagonal turns the quadrilateral into two triangles — which diagonal can you actually calculate?",
              "Triangle ABC is right-angled: AC comes from Pythagoras (spot the triple), and its area is instant.",
              "Triangle ACD is SSS: cosine rule for one angle, then ½ab sin C with the two sides AROUND that angle.",
            ],
            strategy: "split into triangles",
          },
          {
            id: "tri-qa-p3-q06",
            question:
              "A triangle has two sides of fixed lengths 8 cm and 11 cm, but the angle between them can be anything. (a) What is the LARGEST possible area of the triangle, and what angle achieves it? (b) Find the exact length of the third side in that case.",
            modelAnswer:
              "(a) Area = ½ × 8 × 11 × sin θ = 44 sin θ. Since sin θ has maximum value 1, achieved at θ = 90°, the largest area is 44 × 1 = 44 cm², achieved when the sides are perpendicular. (b) With a 90° included angle, Pythagoras gives the third side: √(8² + 11²) = √(64 + 121) = √185 cm (≈ 13.6 cm).",
            markScheme: ["44", "90", "√185", "13.6"],
            commonError:
              "Assuming the maximum happens for an equilateral-ish or 60° angle, or trying calculus — the area is 44 sin θ, and sine itself peaks at exactly 1 when θ = 90°: an extreme-case argument, no differentiation needed.",
            guideRef: "Sine rule, cosine rule and the area formula",
            difficulty: "challenge",
            hints: [
              "Write the area as a formula in the unknown angle θ.",
              "Area = 44 sin θ. For which θ between 0° and 180° is sin θ biggest?",
              "sin θ ≤ 1 always, with equality only at 90°. Part (b) then hands you a right-angled triangle.",
            ],
            strategy: "consider extremes",
          },
        ],
      },
    ],
  },
};

export default topic;
