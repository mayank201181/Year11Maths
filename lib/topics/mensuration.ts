import type { Topic } from "../types";

const topic: Topic = {
  id: "mensuration",
  title: "Area, Volume & Similarity",
  subject: "Maths",
  icon: "📦",
  intro:
    "How much paint covers a wall, how much juice fills a cone, and why a model village is more than just 'smaller'. This topic takes you from compound shapes and circles, through prisms, cones and spheres, to the beautiful k, k², k³ pattern of similar shapes. The 4MA1 exam gives you many of these formulae on the formulae sheet — your job is to know exactly when and how to deploy them, and to reason like a problem-solver when the question refuses to be routine.",
  guide: [
    {
      heading: "Compound shapes: slice and stitch",
      body:
        "A **compound shape** is built from simple pieces — rectangles, triangles, trapezia, semicircles. You never need a new formula: you need a plan.\n\nFor **area** you have two moves:\n\n- **Slice**: cut the shape into simple pieces, find each area, add.\n- **Stitch (subtract)**: surround the shape with a bigger simple shape and subtract the missing parts.\n\nFor **perimeter**, trace the boundary once, edge by edge. Watch for edges whose lengths are not printed on the diagram — deduce them from the ones that are (opposite sides of the surrounding rectangle must balance).\n\n**Area of a trapezium**: ½(a + b)h, where a and b are the parallel sides and h is the distance between them. This one is on the 4MA1 formulae sheet.",
      discovery: {
        problem:
          "An L-shaped room is an 8 m by 5 m rectangle with a 3 m by 2 m rectangle cut from one corner. Without adding up all six sides one by one, can you predict its perimeter instantly?",
        idea:
          "Slide the two 'inner' edges of the notch outwards until they line up with the outer walls. The horizontal cut edge is exactly what the top wall is missing, and the vertical cut edge is what the side wall is missing. So the perimeter equals the perimeter of the full 8 by 5 rectangle: 2(8 + 5) = 26 m. Cutting a rectangular notch from a corner never changes the perimeter — a lovely invariant.",
      },
      whyItWorks:
        "Slicing works because area is additive: non-overlapping pieces have areas that simply add. Subtracting works for the same reason run backwards — the big shape's area equals the compound shape plus the removed piece. Perimeter is NOT additive in the same way (cutting pieces out can leave the perimeter unchanged, or even increase it), which is why perimeter questions demand a careful trace of the boundary.",
      strategies: [
        "Draw a diagram — mark every length, then deduce the unlabelled edges before computing anything",
        "Look for invariants — a rectangular corner-notch leaves the perimeter unchanged",
        "Work backwards — given an area, set up an equation for the missing length",
      ],
      keyPoints: [
        "Area of a compound shape: slice into simple pieces and add, or surround and subtract.",
        "Trapezium: area = ½(a + b)h — a and b are the parallel sides.",
        "Deduce missing edge lengths first: horizontal edges on one side of a rectilinear shape must total the width.",
        "Perimeter means tracing the boundary once — internal cut lines are never part of it.",
      ],
      thinkDeeper:
        "Which cuts DO change the perimeter of a rectangle? A rectangular notch in the middle of an edge (not at a corner) adds twice the notch's depth. Try it: the invariant only survives at corners, because there the two new edges replace equal amounts of old edge.",
    },
    {
      heading: "Circles and exact answers",
      body:
        "For a circle of radius r:\n\n- **Circumference** C = 2πr (equivalently πd)\n- **Area** A = πr²\n\nThe classic slip is mixing these up, or using the diameter where the radius belongs. Say it aloud: area needs radius **squared**.\n\nExaminers often ask for an answer **in terms of π** — for example 25π cm² rather than 78.5 cm². This is called an **exact answer**: the moment you press the π button and round, you throw away accuracy. If a question says 'give your answer in terms of π', a decimal scores nothing for the final mark.\n\nSemicircles and quarter circles are just fractions: a semicircle has area ½πr², and its perimeter is HALF the circumference PLUS the diameter — forgetting the straight edge is the most common perimeter error in the whole topic.",
      discovery: {
        problem:
          "A circular table top has area exactly 49π cm² — no calculator allowed. Can you state its radius, then its circumference, without computing a single decimal?",
        idea:
          "Because the area was left in terms of π, you can read the structure directly: πr² = 49π gives r² = 49, so r = 7, and C = 2πr = 14π. Exact forms are not just more accurate — they make reverse problems almost effortless. That is why examiners love them.",
      },
      whyItWorks:
        "Why is the same constant π in both formulae? Cut a circle into many thin sectors and lay them alternately point-up, point-down: they form an almost-rectangle with height r and width half the circumference, πr. Its area is πr × r = πr². So the area formula is the circumference formula, folded up — one constant governs both.",
      strategies: [
        "Work backwards — from an area in terms of π, read off r² directly",
        "Consider extremes — sanity-check with a rough decimal (π ≈ 3) at the end",
      ],
      keyPoints: [
        "C = 2πr = πd; A = πr² — area uses the radius squared.",
        "'In terms of π' means leave π as a symbol: 14π, 100 − 25π, etc.",
        "Perimeter of a semicircle = πr + 2r (arc plus diameter).",
        "Given the diameter, halve it before doing anything else.",
      ],
    },
    {
      heading: "Arcs and sectors: a fraction of the circle",
      body:
        "A **sector** is a pizza slice: two radii and an arc. Everything about it comes from one idea — the sector is the fraction θ/360 of the whole circle, where θ is the angle at the centre.\n\n- **Arc length** = (θ/360) × 2πr\n- **Sector area** = (θ/360) × πr²\n- **Perimeter of a sector** = arc + 2r (don't forget the two straight radii!)\n\n**Reverse problems** are 4MA1 favourites: given the arc length or sector area, find θ or r. Set up the equation with the fraction and solve — no new formula needed.\n\nExample: a sector of radius 6 cm has area 15π cm². Then (θ/360) × 36π = 15π, so θ/360 = 15/36 and θ = 150°.",
      discovery: {
        problem:
          "You and a friend share a circular pizza of radius 12 cm. Your slice has an angle of 40° at the centre. Without any sector formula, what fraction of the pizza is yours — and can you turn that straight into an area?",
        idea:
          "Angles at the centre add up to 360°, so a 40° slice is 40/360 = 1/9 of the pizza — and area shares out in exactly the same proportion. Your slice is (1/9) × π × 12² = 16π cm². Every arc and sector formula is just this one 'fraction of the circle' idea in disguise.",
      },
      whyItWorks:
        "Rotating a sector about the centre doesn't change its area or arc, so equal central angles give equal slices. Stack 360 one-degree slices and you rebuild the circle; hence one degree carries exactly 1/360 of the circumference and 1/360 of the area, and θ degrees carry θ/360 of each. The formulae are proportional reasoning, not new facts.",
      strategies: [
        "Find the fraction first — write θ/360 before touching the formula",
        "Introduce a variable — for reverse problems, let θ (or r) be unknown and build the equation",
        "Draw a diagram — mark the two radii so you never forget them in a perimeter",
      ],
      keyPoints: [
        "Sector = θ/360 of the circle, for both arc length and area.",
        "Arc length = (θ/360) × 2πr; sector area = (θ/360) × πr².",
        "Sector perimeter = arc length + 2r.",
        "Reverse problems: substitute what you know, solve for θ or r.",
      ],
      thinkDeeper:
        "A sector of radius 10 cm is curled into a cone (the two radii are taped together). The sector's radius becomes the cone's slant height, and the ARC becomes the circumference of the cone's base. This single observation unlocks a classic grade 9 problem — try it in Practice Paper 1 (Written).",
      diagrams: [
        {
          id: "men-diag-01",
          title: "A sector is a fraction of its circle",
          svg: `<svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with a shaded sector of angle theta, showing two radii labelled r and the arc highlighted"><circle cx="150" cy="140" r="110" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="6 6"/><path d="M 150 140 L 260 140 A 110 110 0 0 0 205 44.7 Z" fill="#2563eb" fill-opacity="0.15" stroke="#2563eb" stroke-width="2.5"/><path d="M 260 140 A 110 110 0 0 0 205 44.7" fill="none" stroke="#dc2626" stroke-width="4"/><path d="M 185 140 A 35 35 0 0 0 167.5 109.7" fill="none" stroke="#16a34a" stroke-width="2"/><text x="196" y="128" font-size="16" fill="#16a34a">θ</text><text x="200" y="158" font-size="15" fill="#2563eb">r</text><text x="158" y="90" font-size="15" fill="#2563eb">r</text><text x="252" y="80" font-size="15" fill="#dc2626">arc</text><text x="18" y="238" font-size="15" fill="currentColor">arc = (θ/360) × 2πr,  area = (θ/360) × πr²</text></svg>`,
          caption:
            "The sector (blue) is θ/360 of the whole circle — the same fraction gives both its arc length (red) and its area.",
        },
      ],
    },
    {
      heading: "Prisms, cylinders and unit conversion",
      body:
        "A **prism** is a solid with the same cross-section all the way through. One formula rules them all:\n\n- **Volume of a prism** = area of cross-section × length\n\nA **cylinder** is just a circular prism: V = πr²h. Its **curved surface area** is 2πrh (unroll it: a rectangle of width 2πr and height h), and the **total surface area** adds the two circular ends: 2πrh + 2πr².\n\nFor any prism's surface area, count faces: two copies of the cross-section, plus one rectangle for each edge of the cross-section.\n\n**Units** trip up more candidates than the formulae do:\n\n- 1 m = 100 cm, so 1 m² = 100 × 100 = **10 000 cm²**\n- 1 m³ = 100 × 100 × 100 = **1 000 000 cm³**\n- 1 litre = **1000 cm³** (and 1 ml = 1 cm³)",
      discovery: {
        problem:
          "A rug measures 1 m by 1 m. Your friend says that's 100 cm², 'because 1 m = 100 cm'. Sketch the square metre with a centimetre grid on it. How many little squares are there really?",
        idea:
          "Each row holds 100 centimetre squares, and there are 100 rows — 10 000 squares in all. Area units convert with the LENGTH factor squared, because area is two lengths multiplied. Likewise volume converts with the cube: 1 m³ = 1 000 000 cm³. Convert the units, then square or cube the factor — never just copy it.",
      },
      whyItWorks:
        "Why is a prism's volume cross-section × length? Imagine slicing the prism into very thin identical slabs, each a copy of the cross-section with tiny thickness. Each slab has volume (cross-section area) × (thickness), and the thicknesses add up to the length. The cylinder formula V = πr²h is this fact with a circular cross-section.",
      strategies: [
        "Find a pattern — every prism is cross-section × length; identify the cross-section first",
        "Convert units before calculating, not after — and square or cube the conversion factor",
        "Work backwards — given a volume, divide to recover the cross-section area or length",
      ],
      keyPoints: [
        "Prism: V = cross-section area × length. Cylinder: V = πr²h.",
        "Cylinder curved surface = 2πrh; total = 2πrh + 2πr².",
        "1 m² = 10 000 cm²; 1 m³ = 1 000 000 cm³; 1 litre = 1000 cm³.",
        "Surface area = sum of the areas of ALL faces — sketch the net if unsure.",
      ],
    },
    {
      heading: "Pyramids, cones, spheres — and frustums",
      body:
        "The pointed and round solids share a family resemblance:\n\n- **Pyramid**: V = ⅓ × base area × height\n- **Cone**: V = ⅓πr²h, curved surface area = πrl where l is the **slant height**\n- **Sphere**: V = (4/3)πr³, surface area = 4πr²\n- **Hemisphere**: half the sphere's volume; curved surface 2πr², total surface 3πr² (add the flat circular face)\n\nGood news: the cone and sphere formulae are **printed on the 4MA1 formulae sheet** — but you must know which is which and what l means.\n\n**Slant height via Pythagoras**: in a cone, the radius, the vertical height and the slant height form a right-angled triangle, so l² = r² + h². Questions love giving you two of these and needing the third.\n\n**Compound solids** (a cone on a hemisphere, a cylinder with a hemispherical top): add the volumes of the parts, but for surface area only count the faces you can actually see.\n\n**Frustum** (challenge favourite): chop the top off a cone with a cut parallel to the base. Volume of frustum = **big cone − small cone**. The small cone is similar to the big one, so use ratios to find its dimensions.",
      discovery: {
        problem:
          "A juice bar sells two cone-shaped cups. Cone P has radius 4 cm and depth 9 cm; cone Q is shorter but wider — radius 6 cm, depth 4 cm. They cost the same. Which holds more juice? Guess first, then check.",
        idea:
          "V(P) = ⅓π × 4² × 9 = 48π and V(Q) = ⅓π × 6² × 4 = 48π — they are exactly equal! Because the radius is squared, widening beats deepening: multiplying r by 1.5 multiplies the volume by 2.25, which here exactly cancels the height dropping from 9 to 4. Intuition about 'tall vs wide' is unreliable — the formula, not the eye, settles it.",
      },
      whyItWorks:
        "Where does the ⅓ come from? A cube of side a can be cut into 3 identical square-based pyramids, each with apex at one corner — so each pyramid is ⅓ of base × height. The same ⅓ survives for every pyramid and cone (they scale slice-by-slice). For the frustum, the removed top is similar to the whole cone: the parallel cut shrinks every length by the same factor, which is exactly the similarity idea of the next section.",
      strategies: [
        "Draw a diagram — mark r, h and l on the cone's right-angled triangle",
        "Big minus small — frustum volume is whole cone minus the similar cone removed",
        "Exploit symmetry — compound solids split along the joining face",
      ],
      keyPoints: [
        "Cone V = ⅓πr²h; curved surface = πrl; l² = r² + h² (Pythagoras).",
        "Sphere V = (4/3)πr³, surface = 4πr²; hemisphere total surface = 3πr².",
        "Pyramid V = ⅓ × base area × height — works for any base.",
        "Frustum = big cone − small cone; the two cones are similar.",
        "Cone and sphere formulae are on the exam formulae sheet — practise choosing the right one.",
      ],
      thinkDeeper:
        "Archimedes' favourite theorem: a sphere fits exactly inside a cylinder (touching top, bottom and sides). Then the sphere's volume is exactly ⅔ of the cylinder's — check it: (4/3)πr³ against πr² × 2r. He was so proud he asked for the figure on his tombstone.",
      diagrams: [
        {
          id: "men-diag-02",
          title: "Slant height of a cone by Pythagoras",
          svg: `<svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cone with vertical height h, base radius r and slant height l, showing the right-angled triangle with l squared equals r squared plus h squared"><ellipse cx="160" cy="200" rx="100" ry="24" fill="none" stroke="#64748b" stroke-width="2"/><path d="M 60 200 L 160 40 L 260 200" fill="none" stroke="#2563eb" stroke-width="2.5"/><line x1="160" y1="40" x2="160" y2="200" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 5"/><line x1="160" y1="200" x2="260" y2="200" stroke="#dc2626" stroke-width="2.5"/><rect x="160" y="186" width="14" height="14" fill="none" stroke="#64748b" stroke-width="1.5"/><text x="145" y="125" font-size="16" fill="#16a34a">h</text><text x="205" y="192" font-size="16" fill="#dc2626">r</text><text x="222" y="115" font-size="16" fill="#2563eb">l</text><text x="52" y="243" font-size="15" fill="currentColor">l² = r² + h²  (right-angled triangle inside)</text></svg>`,
          caption:
            "Radius, height and slant height form a right-angled triangle: given any two, Pythagoras finds the third.",
        },
      ],
    },
    {
      heading: "Similar shapes: k, k², k³ — and congruence",
      body:
        "Two shapes are **similar** if one is an enlargement of the other: same shape, same angles, all lengths multiplied by the same **scale factor k**.\n\nThe crown jewels of this topic:\n\n- Lengths scale by **k**\n- Areas scale by **k²**\n- Volumes (and masses of same-material solids) scale by **k³**\n\nSo if a model is built at scale 1:20, its surface areas are 1:400 and its volumes 1:8000.\n\n**Reverse problems**: given an area ratio, square-root it to find k; given a volume ratio, cube-root it. Then apply whichever power the question actually asks about. Areas 49:25 means k = 7/5, so volumes are 343:125.\n\n**Congruence** is similarity with k = 1: identical shapes. Two triangles are congruent if they match by **SSS**, **SAS**, **ASA** (or AAS), or **RHS** (right angle, hypotenuse, side). Note that SSA is NOT a criterion — two different triangles can share two sides and a non-included angle.",
      discovery: {
        problem:
          "A square photo is enlarged so every side is 3 times longer. How many copies of the ORIGINAL photo would you need to tile the enlargement exactly? Try sketching it before you count.",
        idea:
          "The enlargement is 3 originals wide and 3 tall, so 3 × 3 = 9 copies tile it: the area grew by 3² = 9, not 3. Any flat shape — however curvy — can be approximated by tiny squares, and each tiny square's area grows by k², so the whole area does too. One more dimension gives volume its k³: a 3× cube holds 3 × 3 × 3 = 27 unit cubes.",
      },
      whyItWorks:
        "Area is length × length, so scaling both directions by k multiplies area by k × k = k². Volume is length × length × length: k × k × k = k³. This is also why the units convert the way they do (1 m² = 100² cm²) — unit conversion is just similarity with k = 100.",
      strategies: [
        "Try small cases — tile a 2× or 3× square to see k² with your own eyes",
        "Work backwards — square-root an area ratio (or cube-root a volume ratio) to recover k first",
        "Introduce a variable — call the scale factor k and track which power each quantity needs",
      ],
      keyPoints: [
        "Similar shapes: lengths ×k, areas ×k², volumes and masses ×k³.",
        "From an area ratio, k = √(ratio); from a volume ratio, k = ∛(ratio).",
        "Always match corresponding lengths — the shortest side pairs with the shortest side.",
        "Congruence criteria: SSS, SAS, ASA/AAS, RHS. SSA does not guarantee congruence.",
      ],
      thinkDeeper:
        "Why can't giants exist? Scale a person by k: muscle strength grows like cross-sectional area (k²) but weight grows like volume (k³). At k = 10 the giant is 10 times weaker relative to its weight — the k²/k³ mismatch is a genuine law of biology, and it is exactly the mathematics of this section.",
      diagrams: [
        {
          id: "men-diag-03",
          title: "Why areas scale by k²",
          svg: `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A small square and an enlargement with scale factor 3 tiled by nine copies of the small square, showing area times nine"><rect x="30" y="120" width="48" height="48" fill="#2563eb" fill-opacity="0.25" stroke="#2563eb" stroke-width="2"/><text x="38" y="196" font-size="15" fill="currentColor">1 × 1</text><text x="100" y="115" font-size="18" fill="#dc2626">k = 3 →</text><g stroke="#2563eb" stroke-width="1.5" fill="#2563eb" fill-opacity="0.25"><rect x="190" y="24" width="48" height="48"/><rect x="238" y="24" width="48" height="48"/><rect x="286" y="24" width="48" height="48"/><rect x="190" y="72" width="48" height="48"/><rect x="238" y="72" width="48" height="48"/><rect x="286" y="72" width="48" height="48"/><rect x="190" y="120" width="48" height="48"/><rect x="238" y="120" width="48" height="48"/><rect x="286" y="120" width="48" height="48"/></g><rect x="190" y="24" width="144" height="144" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="190" y="196" font-size="15" fill="currentColor">3 × 3 = 9 copies: area × k²</text></svg>`,
          caption:
            "Triple every length and nine copies of the original tile the enlargement: lengths ×3, area ×9.",
        },
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Circumference and area of a circle, radius r",
        back: "C = 2πr (= πd); A = πr². Area uses the radius SQUARED.",
      },
      {
        front: "Arc length of a sector, angle θ",
        back: "(θ/360) × 2πr — the sector is the fraction θ/360 of the circle.",
      },
      {
        front: "Area of a sector, angle θ",
        back: "(θ/360) × πr². Perimeter of the sector = arc + 2r.",
      },
      {
        front: "Volume of any prism",
        back: "Area of cross-section × length. A cylinder is a circular prism: V = πr²h.",
      },
      {
        front: "Surface area of a cylinder",
        back: "Curved: 2πrh (an unrolled rectangle). Total: 2πrh + 2πr².",
      },
      {
        front: "Volume of a pyramid or cone",
        back: "⅓ × base area × height. Cone: V = ⅓πr²h (on the formulae sheet).",
      },
      {
        front: "Curved surface area of a cone — and what is l?",
        back: "πrl, where l is the SLANT height. l² = r² + h² by Pythagoras.",
      },
      {
        front: "Volume and surface area of a sphere",
        back: "V = (4/3)πr³; surface = 4πr². Both printed on the 4MA1 formulae sheet.",
      },
      {
        front: "Total surface area of a solid hemisphere",
        back: "3πr² — curved part 2πr² plus the flat circular face πr².",
      },
      {
        front: "Convert m² to cm², and cm³ to litres",
        back: "1 m² = 10 000 cm² (square the factor 100). 1000 cm³ = 1 litre.",
      },
      {
        front: "Similar shapes with length scale factor k",
        back: "Lengths ×k, areas ×k², volumes and masses ×k³.",
      },
      {
        front: "Given the AREA ratio of similar shapes, how do you find k?",
        back: "Square-root the area ratio. Given a volume ratio, cube-root it. Then apply the power the question needs.",
      },
      {
        front: "How do you find the volume of a frustum?",
        back: "Big cone minus small cone. The removed cone is SIMILAR to the whole one — use ratios to find its height and radius.",
      },
      {
        front: "The four congruence criteria for triangles",
        back: "SSS, SAS, ASA (or AAS), RHS. SSA is NOT enough — two different triangles can match it.",
      },
    ],
    keyFacts: [
      "A sector is θ/360 of its circle — the same fraction gives arc length and area.",
      "Perimeter of a semicircle = πr + 2r; of a sector = arc + 2r. The straight edges count!",
      "Volume of a prism = cross-section area × length; every prism, no exceptions.",
      "In a cone, radius, height and slant height form a right-angled triangle: l² = r² + h².",
      "1 m² = 10 000 cm², 1 m³ = 1 000 000 cm³, 1 litre = 1000 cm³.",
      "Similar shapes: lengths ×k, areas ×k², volumes ×k³ — and mass scales like volume.",
      "To reverse: k = √(area ratio) or ∛(volume ratio).",
      "A frustum is a cone with a similar cone sliced off the top: volume = big − small.",
      "'In terms of π' means an exact answer like 36π — a rounded decimal loses the mark.",
      "The 4MA1 formulae sheet gives cone and sphere formulae (and the trapezium) — learn what each symbol means.",
    ],
    formulaSheet: [
      { name: "Area of trapezium", formula: "½(a + b)h", note: "Given on the 4MA1 formulae sheet; a, b are the parallel sides." },
      { name: "Circumference of circle", formula: "C = 2πr = πd" },
      { name: "Area of circle", formula: "A = πr²" },
      { name: "Arc length", formula: "(θ/360) × 2πr", note: "θ is the angle at the centre in degrees." },
      { name: "Sector area", formula: "(θ/360) × πr²" },
      { name: "Volume of prism", formula: "area of cross-section × length" },
      { name: "Volume of cylinder", formula: "πr²h", note: "Curved surface area = 2πrh." },
      { name: "Volume of pyramid", formula: "⅓ × base area × height" },
      { name: "Volume of cone", formula: "⅓πr²h", note: "Given in the exam." },
      { name: "Curved surface area of cone", formula: "πrl", note: "Given in the exam; l = slant height, l² = r² + h²." },
      { name: "Volume of sphere", formula: "(4/3)πr³", note: "Given in the exam." },
      { name: "Surface area of sphere", formula: "4πr²", note: "Given in the exam; hemisphere total = 3πr²." },
      { name: "Similarity scale factors", formula: "lengths ×k, areas ×k², volumes ×k³" },
      { name: "Unit conversions", formula: "1 m² = 10 000 cm²; 1 m³ = 10^6 cm³; 1 litre = 1000 cm³" },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "men-quiz-mcq-01",
        question: "A circle has radius 5 cm. What is its circumference, in terms of π?",
        options: ["10π cm", "25π cm", "5π cm", "100π cm"],
        answerIndex: 0,
        explanation:
          "C = 2πr = 2 × π × 5 = 10π cm. 25π is the AREA (πr²), 5π forgets the factor 2, and 100π squares the diameter.",
        guideRef: "Circles and exact answers",
        difficulty: "warmup",
      },
      {
        id: "men-quiz-mcq-02",
        question:
          "An L-shape is an 8 cm by 6 cm rectangle with a 3 cm by 2 cm rectangle removed from one corner. What is its area?",
        options: ["42 cm²", "48 cm²", "44 cm²", "40 cm²"],
        answerIndex: 0,
        explanation:
          "Surround and subtract: 8 × 6 = 48, minus the missing 3 × 2 = 6, gives 42 cm². 48 forgets to subtract; 44 subtracts only 4; 40 subtracts 8.",
        guideRef: "Compound shapes: slice and stitch",
        difficulty: "warmup",
      },
      {
        id: "men-quiz-mcq-03",
        question: "A sector has radius 9 cm and angle 80°. What is its arc length, in terms of π?",
        options: ["4π cm", "18π cm", "8π cm", "2π cm"],
        answerIndex: 0,
        explanation:
          "Arc = (80/360) × 2π × 9 = (2/9) × 18π = 4π cm. 18π is the sector AREA ((2/9) × 81π); 2π halves the correct arc; 8π doubles it.",
        guideRef: "Arcs and sectors: a fraction of the circle",
        difficulty: "core",
        hints: [
          "What fraction of the full circle is an 80° sector?",
          "The full circumference is 2π × 9 = 18π cm.",
          "Multiply 18π by 80/360 = 2/9.",
        ],
        strategy: "find the fraction first",
      },
      {
        id: "men-quiz-mcq-04",
        question:
          "A cylinder has radius 4 cm and height 10 cm. What is its volume, to 3 significant figures?",
        options: ["503 cm³", "251 cm³", "126 cm³", "2010 cm³"],
        answerIndex: 0,
        explanation:
          "V = πr²h = π × 16 × 10 = 160π ≈ 502.65 ≈ 503 cm³. 251 is the curved surface area 2πrh; 126 uses πrh; 2010 wrongly uses the diameter 8 as the radius.",
        guideRef: "Prisms, cylinders and unit conversion",
        difficulty: "core",
        hints: [
          "A cylinder is a prism — what is its cross-section?",
          "Volume = area of the circular cross-section × height.",
          "Compute π × 4² × 10, then round.",
        ],
        strategy: "cross-section × length",
      },
      {
        id: "men-quiz-mcq-05",
        question: "Convert 3.5 m² into cm².",
        options: ["35 000 cm²", "350 cm²", "3500 cm²", "350 000 cm²"],
        answerIndex: 0,
        explanation:
          "1 m² = 100 × 100 = 10 000 cm², so 3.5 m² = 35 000 cm². 350 uses the length factor 100 without squaring; the others misplace the decimal.",
        guideRef: "Prisms, cylinders and unit conversion",
        difficulty: "core",
        hints: [
          "How many centimetre squares tile one square metre?",
          "1 m² = 100 cm × 100 cm.",
          "Multiply 3.5 by 10 000.",
        ],
        strategy: "square the conversion factor",
      },
      {
        id: "men-quiz-mcq-06",
        question: "What is the volume of a sphere of radius 3 cm, in terms of π?",
        options: ["36π cm³", "108π cm³", "12π cm³", "9π cm³"],
        answerIndex: 0,
        explanation:
          "V = (4/3)πr³ = (4/3)π × 27 = 36π cm³. 108π forgets to divide by 3 (4 × 27 = 108); 12π uses r² instead of r³; 9π is just πr².",
        guideRef: "Pyramids, cones, spheres — and frustums",
        difficulty: "core",
        hints: [
          "The sphere volume formula is on the formulae sheet: (4/3)πr³.",
          "First cube the radius: 3³ = 27.",
          "Then take 4/3 of 27π.",
        ],
        strategy: "use the formulae sheet",
      },
      {
        id: "men-quiz-mcq-07",
        question:
          "A cone has base radius 5 cm and vertical height 12 cm. What is its CURVED surface area, in terms of π?",
        options: ["65π cm²", "60π cm²", "25π cm²", "90π cm²"],
        answerIndex: 0,
        explanation:
          "Slant height l = √(5² + 12²) = √169 = 13, so curved surface = πrl = π × 5 × 13 = 65π cm². 60π wrongly uses the vertical height in πrl; 25π is the base area; 90π is the TOTAL surface area (65π + 25π).",
        guideRef: "Pyramids, cones, spheres — and frustums",
        difficulty: "core",
        hints: [
          "πrl needs the SLANT height l, not the vertical height.",
          "Radius, height and slant height form a right-angled triangle.",
          "l = √(5² + 12²) — a very famous triangle.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "men-quiz-mcq-08",
        question:
          "Two similar bottles have heights 10 cm and 15 cm. The smaller holds 400 ml. How much does the larger hold?",
        options: ["1350 ml", "600 ml", "900 ml", "1000 ml"],
        answerIndex: 0,
        explanation:
          "k = 15/10 = 1.5, and volume scales by k³ = 3.375, so 400 × 3.375 = 1350 ml. 600 uses k (lengths), 900 uses k² (areas) — capacity is a volume, so it needs the cube.",
        guideRef: "Similar shapes: k, k², k³ — and congruence",
        difficulty: "core",
        hints: [
          "Find the length scale factor from the heights first.",
          "Capacity is a volume — which power of k does volume use?",
          "Multiply 400 by (1.5)³.",
        ],
        strategy: "k, k², k³",
      },
      {
        id: "men-quiz-mcq-09",
        question:
          "Two similar triangles have areas 16 cm² and 36 cm². A side of the smaller triangle is 6 cm. How long is the corresponding side of the larger?",
        options: ["9 cm", "13.5 cm", "8 cm", "12 cm"],
        answerIndex: 0,
        explanation:
          "Area ratio 36/16 = 9/4, so k = √(9/4) = 3/2, and the side is 6 × 1.5 = 9 cm. 13.5 multiplies by the area ratio 9/4 without square-rooting; 8 and 12 come from adding or doubling.",
        guideRef: "Similar shapes: k, k², k³ — and congruence",
        difficulty: "core",
        hints: [
          "You are given an AREA ratio but asked for a LENGTH.",
          "Areas scale by k² — so how do you recover k?",
          "k = √(36/16); multiply 6 by it.",
        ],
        strategy: "work backwards",
      },
      {
        id: "men-quiz-mcq-10",
        question:
          "A sector of a circle of radius 6 cm has area 15π cm². What is the angle at the centre?",
        options: ["150°", "75°", "120°", "216°"],
        answerIndex: 0,
        explanation:
          "(θ/360) × π × 36 = 15π, so θ/360 = 15/36 and θ = 150°. 75° halves the answer, 120° comes from rounding 15/36 to 1/3, and 216° confuses the fraction with 3/5 of 360.",
        guideRef: "Arcs and sectors: a fraction of the circle",
        difficulty: "challenge",
        hints: [
          "Write the sector-area formula with θ unknown.",
          "The full circle has area 36π — what fraction is 15π?",
          "Solve θ/360 = 15/36.",
        ],
        strategy: "introduce a variable",
      },
    ],
    qa: [
      {
        id: "men-quiz-qa-01",
        question:
          "A window is made of a rectangle 10 cm wide and 4 cm tall, with a semicircle of diameter 4 cm attached to one of its short (4 cm) sides. Find the total area of the window. Give your answer in terms of π.",
        modelAnswer:
          "Rectangle: 10 × 4 = 40 cm². The semicircle has diameter 4 cm, so radius 2 cm; its area is ½ × π × 2² = 2π cm². Total area = (40 + 2π) cm².",
        markScheme: ["40 + 2π", "radius 2", "½πr²", "semicircle"],
        commonError:
          "Using the diameter 4 as the radius, giving ½π × 16 = 8π — always halve the diameter first.",
        guideRef: "Compound shapes: slice and stitch",
        difficulty: "warmup",
      },
      {
        id: "men-quiz-qa-02",
        question:
          "A sector has radius 8 cm and angle 45°. Work out the PERIMETER of the sector. Give your answer correct to 3 significant figures.",
        modelAnswer:
          "Arc length = (45/360) × 2π × 8 = (1/8) × 16π = 2π cm. Perimeter = arc + two radii = 2π + 8 + 8 = 16 + 2π ≈ 22.283… ≈ 22.3 cm.",
        markScheme: ["22.3", "2π", "16 + 2π", "arc", "two radii"],
        commonError:
          "Giving just the arc length (6.28 cm) as the perimeter — a sector's boundary includes the TWO straight radii as well as the arc.",
        guideRef: "Arcs and sectors: a fraction of the circle",
        difficulty: "core",
        hints: [
          "The boundary of a sector has three parts — name them.",
          "Arc = (45/360) × 2π × 8.",
          "Add the arc to 8 + 8, then round.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "men-quiz-qa-03",
        question:
          "A closed cylinder has radius 3 cm and height 7 cm. Work out its TOTAL surface area. Give your answer in terms of π.",
        modelAnswer:
          "Two circular ends: 2 × π × 3² = 18π. Curved surface (unrolled rectangle): 2π × 3 × 7 = 42π. Total = 18π + 42π = 60π cm².",
        markScheme: ["60π", "18π", "42π", "2πrh", "2πr²"],
        commonError:
          "Forgetting the two circular ends and giving only 42π, or including just one end (51π). A CLOSED cylinder has three faces.",
        guideRef: "Prisms, cylinders and unit conversion",
        difficulty: "core",
        hints: [
          "How many faces does a closed cylinder have?",
          "The curved face unrolls into a rectangle 2πr wide and h tall.",
          "Add 2πr² for the ends to 2πrh.",
        ],
        strategy: "sketch the net",
      },
      {
        id: "men-quiz-qa-04",
        question:
          "A cone has base radius 6 cm and vertical height 8 cm. Work out its TOTAL surface area. Give your answer in terms of π.",
        modelAnswer:
          "Slant height: l = √(6² + 8²) = √100 = 10 cm. Curved surface = πrl = π × 6 × 10 = 60π. Base = πr² = 36π. Total = 60π + 36π = 96π cm².",
        markScheme: ["96π", "slant", "10", "60π", "36π"],
        commonError:
          "Substituting the vertical height 8 into πrl to get 48π — the formula needs the slant height, found by Pythagoras first.",
        guideRef: "Pyramids, cones, spheres — and frustums",
        difficulty: "core",
        hints: [
          "πrl needs the slant height — do you have it yet?",
          "Use Pythagoras on the triangle with legs 6 and 8.",
          "Total surface = curved part πrl PLUS the circular base πr².",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "men-quiz-qa-05",
        question:
          "Two cone-shaped juice cups cost the same. Cup P has radius 4 cm and depth 9 cm. Cup Q has radius 6 cm and depth 4 cm. Which cup holds more juice? You must show working.",
        modelAnswer:
          "V(P) = ⅓π × 4² × 9 = ⅓π × 144 = 48π cm³. V(Q) = ⅓π × 6² × 4 = ⅓π × 144 = 48π cm³. The volumes are exactly EQUAL — both cups hold 48π ≈ 151 cm³.",
        markScheme: ["equal", "48π", "⅓πr²h", "same volume"],
        commonError:
          "Comparing r × h (36 vs 24) and declaring P the winner — the radius is SQUARED in the volume formula, so width counts double.",
        guideRef: "Pyramids, cones, spheres — and frustums",
        difficulty: "core",
        hints: [
          "Don't trust your eye — use the cone volume formula on each cup.",
          "V = ⅓πr²h; keep both answers in terms of π.",
          "Compare r²h for the two cups: 16 × 9 and 36 × 4.",
        ],
        strategy: "consider extremes",
        solutions: [
          {
            label: "Direct calculation",
            steps: [
              "V(P) = ⅓π × 4² × 9 = ⅓π × 16 × 9 = 48π cm³.",
              "V(Q) = ⅓π × 6² × 4 = ⅓π × 36 × 4 = 48π cm³.",
              "48π = 48π, so the cups hold exactly the same amount.",
            ],
          },
          {
            label: "Scale-factor comparison (the elegant one)",
            steps: [
              "Going from P to Q, the radius is multiplied by 6/4 = 3/2, so r² is multiplied by (3/2)² = 9/4.",
              "The height is multiplied by 4/9.",
              "Overall the volume is multiplied by (9/4) × (4/9) = 1 — the changes cancel exactly, so the volumes are equal without computing either.",
            ],
          },
        ],
      },
      {
        id: "men-quiz-qa-06",
        question:
          "A cone has base radius 6 cm and vertical height 12 cm. The top half is removed by a cut parallel to the base, halfway up. Work out the volume of the remaining frustum. Give your answer in terms of π.",
        modelAnswer:
          "Whole cone: V = ⅓π × 6² × 12 = 144π cm³. The removed top is a SIMILAR cone with half the height (6 cm), so its radius is half too (3 cm): V = ⅓π × 3² × 6 = 18π cm³. Frustum = 144π − 18π = 126π cm³. (Check with similarity: the small cone is (½)³ = ⅛ of the whole, and 144π × 7/8 = 126π. ✓)",
        markScheme: ["126π", "144π", "18π", "similar", "big minus small"],
        commonError:
          "Assuming the frustum is half the cone's volume (72π) because the cut is halfway up — the small cone is only ⅛ of the whole, since volume scales by k³.",
        guideRef: "Pyramids, cones, spheres — and frustums",
        difficulty: "challenge",
        hints: [
          "A frustum is what's left when a smaller cone is sliced off — find both cones.",
          "The removed cone is similar to the whole one. If its height is half, what is its radius?",
          "Frustum = volume of whole cone − volume of small cone.",
          "Shortcut: the small cone is k³ = (½)³ of the big one.",
        ],
        strategy: "big minus small",
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "men-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "men-mcq-p1-q01",
            question: "A circle has diameter 10 cm. What is its area, in terms of π?",
            options: ["25π cm²", "100π cm²", "10π cm²", "5π cm²"],
            answerIndex: 0,
            explanation:
              "Radius = 10 ÷ 2 = 5, so A = πr² = 25π cm². 100π forgets to halve the diameter; 10π is the circumference; 5π is πr with no squaring.",
            guideRef: "Circles and exact answers",
            difficulty: "warmup",
          },
          {
            id: "men-mcq-p1-q02",
            question:
              "An L-shape is made from an 8 cm by 5 cm rectangle with a 3 cm by 2 cm rectangle removed from one corner. What is the PERIMETER of the L-shape?",
            options: ["26 cm", "22 cm", "34 cm", "16 cm"],
            answerIndex: 0,
            explanation:
              "Slide the two cut edges outwards: they exactly replace the missing parts of the outer walls, so the perimeter equals that of the full rectangle, 2(8 + 5) = 26 cm. 22 wrongly subtracts the notch edges; 34 adds them twice; 16 is half the answer plus a slip.",
            guideRef: "Compound shapes: slice and stitch",
            difficulty: "warmup",
          },
          {
            id: "men-mcq-p1-q03",
            question: "A carton holds 2.4 litres of juice. How many cm³ is that?",
            options: ["2400 cm³", "240 cm³", "24 000 cm³", "24 cm³"],
            answerIndex: 0,
            explanation:
              "1 litre = 1000 cm³, so 2.4 litres = 2400 cm³. The other options misplace the factor of 1000.",
            guideRef: "Prisms, cylinders and unit conversion",
            difficulty: "core",
            hints: [
              "How many cm³ make one litre?",
              "1 litre = 1000 cm³.",
              "Multiply 2.4 by 1000.",
            ],
            strategy: "know the conversion",
          },
          {
            id: "men-mcq-p1-q04",
            question:
              "A triangular prism has a cross-section of base 6 cm and height 4 cm, and is 10 cm long. What is its volume?",
            options: ["120 cm³", "240 cm³", "60 cm³", "100 cm³"],
            answerIndex: 0,
            explanation:
              "Cross-section area = ½ × 6 × 4 = 12 cm²; volume = 12 × 10 = 120 cm³. 240 forgets the ½ in the triangle area; 60 halves twice; 100 ignores the cross-section.",
            guideRef: "Prisms, cylinders and unit conversion",
            difficulty: "core",
            hints: [
              "Volume of a prism = cross-section area × length.",
              "The cross-section is a triangle: don't forget the ½.",
              "½ × 6 × 4 first, then × 10.",
            ],
            strategy: "cross-section × length",
          },
          {
            id: "men-mcq-p1-q05",
            question:
              "A sector has radius 8 cm and angle 135°. What is its arc length, in terms of π?",
            options: ["6π cm", "24π cm", "3π cm", "12π cm"],
            answerIndex: 0,
            explanation:
              "135/360 = 3/8, and the full circumference is 16π, so the arc is (3/8) × 16π = 6π cm. 24π is the sector AREA ((3/8) × 64π); 3π halves the arc; 12π doubles it.",
            guideRef: "Arcs and sectors: a fraction of the circle",
            difficulty: "core",
            hints: [
              "Simplify the fraction 135/360 first.",
              "Full circumference = 2π × 8 = 16π.",
              "Take 3/8 of 16π.",
            ],
            strategy: "find the fraction first",
          },
          {
            id: "men-mcq-p1-q06",
            question:
              "What is the TOTAL surface area of a solid hemisphere of radius 6 cm, in terms of π?",
            options: ["108π cm²", "72π cm²", "144π cm²", "216π cm²"],
            answerIndex: 0,
            explanation:
              "Curved part = ½ × 4πr² = 2π × 36 = 72π; flat circular face = π × 36 = 36π; total 108π cm². 72π forgets the flat face; 144π is a full sphere's surface; 216π doubles the answer.",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "core",
            hints: [
              "A solid hemisphere has TWO faces — what are they?",
              "The curved face is half of 4πr².",
              "Add the flat circle πr².",
            ],
            strategy: "count the faces",
          },
          {
            id: "men-mcq-p1-q07",
            question:
              "A photograph of area 15 cm² is enlarged with length scale factor 3. What is the area of the enlargement?",
            options: ["135 cm²", "45 cm²", "225 cm²", "30 cm²"],
            answerIndex: 0,
            explanation:
              "Area scales by k² = 9, so 15 × 9 = 135 cm². 45 uses k = 3 on the area; 225 squares the wrong number (15²/1); 30 doubles instead.",
            guideRef: "Similar shapes: k, k², k³ — and congruence",
            difficulty: "core",
            hints: [
              "Lengths triple — what happens to area?",
              "Tile the enlargement with copies of the original: how many fit?",
              "Multiply 15 by 3².",
            ],
            strategy: "k, k², k³",
          },
          {
            id: "men-mcq-p1-q08",
            question:
              "A sphere fits exactly inside a cylinder, touching the top, bottom and curved side. What fraction of the cylinder's volume does the sphere fill?",
            options: ["2/3", "1/2", "3/4", "π/4"],
            answerIndex: 0,
            explanation:
              "If the sphere has radius r, the cylinder has radius r and height 2r. Sphere: (4/3)πr³; cylinder: πr² × 2r = 2πr³. Ratio = (4/3)/2 = 2/3 — Archimedes' famous result, true for EVERY radius. The other fractions are guesses that don't survive the algebra.",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "challenge",
            hints: [
              "Introduce a variable: let the sphere's radius be r.",
              "What are the cylinder's radius and height in terms of r?",
              "Divide (4/3)πr³ by 2πr³ — the r³ cancels.",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
      {
        id: "men-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "men-mcq-p2-q01",
            question: "A circle has area 49π cm². What is its radius?",
            options: ["7 cm", "49 cm", "24.5 cm", "14 cm"],
            answerIndex: 0,
            explanation:
              "πr² = 49π gives r² = 49, so r = 7 cm. 49 forgets the square root; 24.5 halves 49; 14 is the diameter, not the radius.",
            guideRef: "Circles and exact answers",
            difficulty: "warmup",
          },
          {
            id: "men-mcq-p2-q02",
            question: "Convert 45 000 cm² into m².",
            options: ["4.5 m²", "450 m²", "0.45 m²", "45 m²"],
            answerIndex: 0,
            explanation:
              "1 m² = 10 000 cm², so 45 000 ÷ 10 000 = 4.5 m². 450 divides by only 100 (the length factor); the others misplace the decimal.",
            guideRef: "Prisms, cylinders and unit conversion",
            difficulty: "warmup",
          },
          {
            id: "men-mcq-p2-q03",
            question:
              "A sector has radius 10 cm and angle 72°. What is its area, in terms of π?",
            options: ["20π cm²", "4π cm²", "50π cm²", "10π cm²"],
            answerIndex: 0,
            explanation:
              "72/360 = 1/5, so area = (1/5) × π × 100 = 20π cm². 4π is the ARC length ((1/5) × 20π); 50π is half the circle; 10π uses the radius unsquared.",
            guideRef: "Arcs and sectors: a fraction of the circle",
            difficulty: "core",
            hints: [
              "Simplify 72/360.",
              "The whole circle has area π × 10² = 100π.",
              "Take one fifth of 100π.",
            ],
            strategy: "find the fraction first",
          },
          {
            id: "men-mcq-p2-q04",
            question:
              "A cylinder has radius 5 cm and height 8 cm. What is its CURVED surface area, to 3 significant figures?",
            options: ["251 cm²", "80 cm²", "408 cm²", "126 cm²"],
            answerIndex: 0,
            explanation:
              "Curved surface = 2πrh = 2π × 5 × 8 = 80π ≈ 251.3 ≈ 251 cm². 80 stops at 80 without the π; 408 is the TOTAL surface area (80π + 50π = 130π); 126 uses πrh.",
            guideRef: "Prisms, cylinders and unit conversion",
            difficulty: "core",
            hints: [
              "Unroll the curved face: what rectangle do you get?",
              "Its width is the circumference 2πr and its height is h.",
              "Evaluate 2π × 5 × 8 and round.",
            ],
            strategy: "sketch the net",
          },
          {
            id: "men-mcq-p2-q05",
            question:
              "A square-based pyramid has base edge 6 cm and vertical height 10 cm. What is its volume?",
            options: ["120 cm³", "360 cm³", "60 cm³", "90 cm³"],
            answerIndex: 0,
            explanation:
              "V = ⅓ × base area × height = ⅓ × 36 × 10 = 120 cm³. 360 forgets the ⅓; 60 uses ⅙; 90 uses ⅓ × 6 × 45 — a muddled substitution.",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "core",
            hints: [
              "Base area first: the base is a 6 by 6 square.",
              "A pyramid is one third of the matching prism.",
              "⅓ × 36 × 10.",
            ],
            strategy: "use the formulae sheet",
          },
          {
            id: "men-mcq-p2-q06",
            question:
              "Two similar vases hold 270 ml and 640 ml. The smaller vase is 15 cm tall. How tall is the larger vase?",
            options: ["20 cm", "35.6 cm", "23.1 cm", "16 cm"],
            answerIndex: 0,
            explanation:
              "Volume ratio 640/270 = 64/27, so k = ∛(64/27) = 4/3 and the height is 15 × 4/3 = 20 cm. 35.6 multiplies by the volume ratio itself; 23.1 square-roots instead of cube-rooting; 16 just adds 1.",
            guideRef: "Similar shapes: k, k², k³ — and congruence",
            difficulty: "core",
            hints: [
              "You have a VOLUME ratio but need a LENGTH.",
              "Volumes scale by k³ — undo that with a cube root.",
              "∛(64/27) is a nice fraction; multiply 15 by it.",
            ],
            strategy: "work backwards",
          },
          {
            id: "men-mcq-p2-q07",
            question:
              "A cone has radius 3 cm and vertical height 7 cm. What is its volume, in terms of π?",
            options: ["21π cm³", "63π cm³", "7π cm³", "42π cm³"],
            answerIndex: 0,
            explanation:
              "V = ⅓πr²h = ⅓π × 9 × 7 = 21π cm³. 63π forgets the ⅓; 7π uses r not r²; 42π doubles the correct answer.",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "core",
            hints: [
              "The cone formula is on the formulae sheet: ⅓πr²h.",
              "Square the radius first: 3² = 9.",
              "⅓ × 9 × 7 = 21.",
            ],
            strategy: "use the formulae sheet",
          },
          {
            id: "men-mcq-p2-q08",
            question:
              "A sector with angle 100° has arc length 5π cm. What is the radius of the circle?",
            options: ["9 cm", "18 cm", "4.5 cm", "5 cm"],
            answerIndex: 0,
            explanation:
              "(100/360) × 2πr = 5π gives (5/9)πr = 5π, so r = 9 cm. 18 solves (5/9)r = 10 (a doubling slip); 4.5 halves the answer; 5 assumes r equals the arc's coefficient.",
            guideRef: "Arcs and sectors: a fraction of the circle",
            difficulty: "challenge",
            hints: [
              "Write the arc-length formula with r unknown.",
              "Simplify 100/360 to 5/18, so the arc is (5/18) × 2πr = (5/9)πr.",
              "Set (5/9)πr = 5π and cancel the π.",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
      {
        id: "men-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "men-mcq-p3-q01",
            question:
              "A trapezium has parallel sides 6 cm and 10 cm, which are 4 cm apart. What is its area?",
            options: ["32 cm²", "64 cm²", "40 cm²", "48 cm²"],
            answerIndex: 0,
            explanation:
              "Area = ½(a + b)h = ½ × (6 + 10) × 4 = 32 cm². 64 forgets the ½; 40 averages wrongly; 48 multiplies 6 × 10 × 4/5.",
            guideRef: "Compound shapes: slice and stitch",
            difficulty: "warmup",
          },
          {
            id: "men-mcq-p3-q02",
            question: "Which of these is NOT a valid congruence criterion for triangles?",
            options: ["SSA", "SAS", "ASA", "RHS"],
            answerIndex: 0,
            explanation:
              "SSA (two sides and a NON-included angle) can be satisfied by two different triangles, so it does not guarantee congruence. SAS, ASA and RHS each pin the triangle down uniquely.",
            guideRef: "Similar shapes: k, k², k³ — and congruence",
            difficulty: "warmup",
          },
          {
            id: "men-mcq-p3-q03",
            question:
              "What is the perimeter of a semicircle of diameter 12 cm, in terms of π?",
            options: ["(6π + 12) cm", "6π cm", "(12π + 12) cm", "(6π + 6) cm"],
            answerIndex: 0,
            explanation:
              "Radius 6, so the curved arc is half of 12π, i.e. 6π; add the straight diameter 12 to get 6π + 12. 6π forgets the diameter; 12π + 12 uses the full circumference; 6π + 6 adds the radius instead of the diameter.",
            guideRef: "Circles and exact answers",
            difficulty: "core",
            hints: [
              "A semicircle's boundary has a curved part AND a straight part.",
              "Half the circumference is ½ × π × 12.",
              "Add the diameter, not the radius.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "men-mcq-p3-q04",
            question: "What is the surface area of a sphere of radius 4 cm, in terms of π?",
            options: ["64π cm²", "256π/3 cm²", "16π cm²", "32π cm²"],
            answerIndex: 0,
            explanation:
              "Surface area = 4πr² = 4π × 16 = 64π cm². 256π/3 is the VOLUME ((4/3)π × 64); 16π drops the factor 4; 32π uses 2πr².",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "core",
            hints: [
              "The sphere surface formula is 4πr² — it's on the formulae sheet.",
              "Square the radius: 4² = 16.",
              "Multiply by 4π.",
            ],
            strategy: "use the formulae sheet",
          },
          {
            id: "men-mcq-p3-q05",
            question:
              "A solid is a cylinder of radius 3 cm and height 5 cm with a hemisphere of radius 3 cm on top. What is its total volume, in terms of π?",
            options: ["63π cm³", "45π cm³", "81π cm³", "54π cm³"],
            answerIndex: 0,
            explanation:
              "Cylinder: π × 9 × 5 = 45π. Hemisphere: ½ × (4/3)π × 27 = 18π. Total 63π cm³. 45π forgets the hemisphere; 81π adds a FULL sphere (36π); 54π adds a sphere of the wrong radius.",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "core",
            hints: [
              "Split the compound solid at the joining face.",
              "Hemisphere volume is HALF of (4/3)πr³.",
              "45π + 18π.",
            ],
            strategy: "exploit symmetry",
          },
          {
            id: "men-mcq-p3-q06",
            question:
              "Triangles ABC and PQR are similar, with AB = 8 cm corresponding to PQ = 12 cm. If BC = 10 cm, how long is QR?",
            options: ["15 cm", "14 cm", "6.7 cm", "20 cm"],
            answerIndex: 0,
            explanation:
              "k = 12/8 = 1.5, so QR = 10 × 1.5 = 15 cm. 14 adds 4 (the difference of the first pair — an additive slip); 6.7 divides instead of multiplying; 20 doubles.",
            guideRef: "Similar shapes: k, k², k³ — and congruence",
            difficulty: "core",
            hints: [
              "Find the scale factor from the pair of corresponding sides you know.",
              "Similarity is multiplicative, never additive.",
              "Multiply 10 by 12/8.",
            ],
            strategy: "find a pattern",
          },
          {
            id: "men-mcq-p3-q07",
            question:
              "A prism has volume 540 cm³ and length 12 cm. What is the area of its cross-section?",
            options: ["45 cm²", "6480 cm²", "22.5 cm²", "90 cm²"],
            answerIndex: 0,
            explanation:
              "Volume = cross-section × length, so cross-section = 540 ÷ 12 = 45 cm². 6480 multiplies instead of dividing; 22.5 divides by 24; 90 divides by 6.",
            guideRef: "Prisms, cylinders and unit conversion",
            difficulty: "core",
            hints: [
              "Write the prism volume formula and identify what's missing.",
              "Work backwards: undo the multiplication.",
              "540 ÷ 12.",
            ],
            strategy: "work backwards",
          },
          {
            id: "men-mcq-p3-q08",
            question:
              "Two similar cones have surface areas in the ratio 9 : 25. What is the ratio of their volumes?",
            options: ["27 : 125", "9 : 25", "3 : 5", "81 : 625"],
            answerIndex: 0,
            explanation:
              "Areas scale by k², so k = √9 : √25 = 3 : 5, and volumes scale by k³ = 27 : 125. Choosing 9 : 25 keeps the area ratio; 3 : 5 stops at lengths; 81 : 625 squares the area ratio instead of converting via k.",
            guideRef: "Similar shapes: k, k², k³ — and congruence",
            difficulty: "challenge",
            hints: [
              "Recover the LENGTH ratio from the area ratio first.",
              "k = √9 : √25.",
              "Now cube the length ratio for volumes.",
            ],
            strategy: "work backwards",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "men-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "men-qa-p1-q01",
            question:
              "An L-shaped floor is a 12 m by 9 m rectangle with a 5 m by 4 m rectangle removed from one corner. Carpet costs £15 per square metre. Work out the total cost of carpeting the floor.",
            modelAnswer:
              "Area of full rectangle = 12 × 9 = 108 m². Removed piece = 5 × 4 = 20 m². Floor area = 108 − 20 = 88 m². Cost = 88 × £15 = £1320.",
            markScheme: ["1320", "88", "108", "subtract 20"],
            commonError:
              "Forgetting to subtract the notch and paying for 108 m² (£1620) — always find the ACTUAL floor area first.",
            guideRef: "Compound shapes: slice and stitch",
            difficulty: "warmup",
          },
          {
            id: "men-qa-p1-q02",
            question:
              "A circle of radius 5 cm is drawn inside a square of side 10 cm so that it touches all four sides. Work out the shaded area between the square and the circle. Give your answer in terms of π.",
            modelAnswer:
              "Square: 10² = 100 cm². Circle: π × 5² = 25π cm². Shaded area = (100 − 25π) cm² (≈ 21.5 cm²).",
            markScheme: ["100 − 25π", "25π", "100", "subtract"],
            commonError:
              "Using the side 10 as the circle's radius, giving 100 − 100π (negative!) — a quick sense-check catches this: the shaded area must be positive.",
            guideRef: "Circles and exact answers",
            difficulty: "core",
            hints: [
              "Surround and subtract: which two areas do you need?",
              "The circle touches all four sides — what is its radius?",
              "Leave the answer as 100 − 25π; do not round.",
            ],
            strategy: "surround and subtract",
          },
          {
            id: "men-qa-p1-q03",
            question:
              "A pizza slice is a sector of radius 12 cm with angle 40° at the centre. Work out the area of the slice, correct to 3 significant figures.",
            modelAnswer:
              "Fraction of circle = 40/360 = 1/9. Area = (1/9) × π × 12² = (1/9) × 144π = 16π ≈ 50.265… ≈ 50.3 cm².",
            markScheme: ["50.3", "16π", "1/9", "144π"],
            commonError:
              "Using 2πr instead of πr² and finding the arc (8.38 cm) — check whether the question wants a length or an area.",
            guideRef: "Arcs and sectors: a fraction of the circle",
            difficulty: "core",
            hints: [
              "What fraction of the whole pizza is a 40° slice?",
              "Whole pizza area = π × 12².",
              "Take 1/9 of 144π, then round to 3 s.f.",
            ],
            strategy: "find the fraction first",
          },
          {
            id: "men-qa-p1-q04",
            question:
              "A cylindrical water tank has radius 30 cm and height 100 cm. Work out its capacity in LITRES, correct to 3 significant figures.",
            modelAnswer:
              "V = πr²h = π × 30² × 100 = 90 000π ≈ 282 743 cm³. Since 1000 cm³ = 1 litre, capacity ≈ 282.743 ≈ 283 litres.",
            markScheme: ["283", "90 000π", "282 743", "divide by 1000"],
            commonError:
              "Dividing by 100 instead of 1000 when converting cm³ to litres — one litre is a 10 cm cube: 10 × 10 × 10 = 1000 cm³.",
            guideRef: "Prisms, cylinders and unit conversion",
            difficulty: "core",
            hints: [
              "Find the volume in cm³ first: πr²h.",
              "How many cm³ in one litre?",
              "Divide by 1000, then round to 3 s.f.",
            ],
            strategy: "convert at the end",
          },
          {
            id: "men-qa-p1-q05",
            question:
              "Triangles ABC and PQR are similar. AB = 6 cm corresponds to PQ = 9 cm, and the area of triangle ABC is 20 cm². Work out the area of triangle PQR.",
            modelAnswer:
              "Length scale factor k = 9/6 = 1.5. Area scale factor = k² = 2.25. Area of PQR = 20 × 2.25 = 45 cm².",
            markScheme: ["45", "2.25", "k²", "1.5"],
            commonError:
              "Multiplying the area by k = 1.5 to get 30 cm² — areas need the SQUARE of the length scale factor.",
            guideRef: "Similar shapes: k, k², k³ — and congruence",
            difficulty: "core",
            hints: [
              "Find the length scale factor from AB and PQ.",
              "Areas scale by which power of k?",
              "Multiply 20 by (9/6)².",
            ],
            strategy: "k, k², k³",
            solutions: [
              {
                label: "Scale factor method (the elegant one)",
                steps: [
                  "k = 9/6 = 3/2 from the corresponding sides.",
                  "Areas scale by k² = 9/4.",
                  "Area of PQR = 20 × 9/4 = 45 cm².",
                ],
              },
              {
                label: "Ratio equation method",
                steps: [
                  "For similar shapes, area ÷ (length)² is the same for both triangles.",
                  "So Area(PQR)/9² = 20/6², i.e. Area(PQR)/81 = 20/36.",
                  "Area(PQR) = 81 × 20/36 = 45 cm².",
                ],
              },
            ],
          },
          {
            id: "men-qa-p1-q06",
            question:
              "A sector of a circle has radius 10 cm and angle 216°. The two straight edges are joined together to form a hollow cone. Work out the volume of the cone. Give your answer in terms of π.",
            modelAnswer:
              "The sector's radius becomes the slant height: l = 10 cm. The ARC becomes the base circumference: arc = (216/360) × 2π × 10 = 12π cm. So 2πR = 12π gives base radius R = 6 cm. Height: h = √(l² − R²) = √(100 − 36) = √64 = 8 cm. Volume = ⅓π × 6² × 8 = 96π cm³.",
            markScheme: ["96π", "12π", "radius 6", "height 8", "arc becomes circumference"],
            commonError:
              "Using the sector radius 10 as the cone's BASE radius — the sector radius becomes the slant height; only the arc wraps into the base circle.",
            guideRef: "Arcs and sectors: a fraction of the circle",
            difficulty: "challenge",
            hints: [
              "When the sector curls up, which length becomes the slant height?",
              "The arc wraps exactly around the base circle: arc = 2πR.",
              "Find the arc, solve for R, then Pythagoras for the height.",
              "Finish with V = ⅓πR²h.",
            ],
            strategy: "draw a diagram",
          },
        ],
      },
      {
        id: "men-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "men-qa-p2-q01",
            question:
              "A trundle wheel has diameter 50 cm. Ellie wheels it in a straight line for 100 m. How many COMPLETE revolutions does the wheel make?",
            modelAnswer:
              "Circumference = πd = π × 50 ≈ 157.08 cm. Number of revolutions = 10 000 ÷ 157.08 ≈ 63.66, so the wheel makes 63 complete revolutions.",
            markScheme: ["63", "circumference", "50π", "157"],
            commonError:
              "Rounding 63.66 UP to 64 — the 64th revolution is never completed, so round down for 'complete' revolutions.",
            guideRef: "Circles and exact answers",
            difficulty: "warmup",
          },
          {
            id: "men-qa-p2-q02",
            question:
              "A sector of a circle of radius 8 cm has area 60 cm². Work out the angle at the centre of the sector, correct to 1 decimal place.",
            modelAnswer:
              "(θ/360) × π × 8² = 60, so θ = 60 × 360 / (64π) = 21 600 / (64π) ≈ 107.43 ≈ 107.4°.",
            markScheme: ["107.4", "64π", "θ/360", "21 600"],
            commonError:
              "Treating 60 as 60π and getting θ = 337.5° — read carefully whether the area is exact (with π) or a plain number.",
            guideRef: "Arcs and sectors: a fraction of the circle",
            difficulty: "core",
            hints: [
              "Write the sector-area formula with θ as the unknown.",
              "The whole circle has area 64π.",
              "Rearrange: θ = 360 × 60 ÷ (64π).",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "men-qa-p2-q03",
            question:
              "A triangular prism is 8 cm long. Its cross-section is a right-angled triangle with sides 3 cm, 4 cm and 5 cm. Work out the TOTAL surface area of the prism.",
            modelAnswer:
              "Two triangular ends: 2 × (½ × 3 × 4) = 12 cm². Three rectangular faces, one per side of the triangle: (3 + 4 + 5) × 8 = 96 cm². Total surface area = 12 + 96 = 108 cm².",
            markScheme: ["108", "12", "96", "three rectangles"],
            commonError:
              "Counting only one triangular end, or missing the rectangle on the hypotenuse — a triangular prism has exactly five faces.",
            guideRef: "Prisms, cylinders and unit conversion",
            difficulty: "core",
            hints: [
              "How many faces does a triangular prism have?",
              "Each rectangle is (side of triangle) × (length of prism).",
              "A shortcut: the rectangles together are perimeter × length.",
            ],
            strategy: "sketch the net",
          },
          {
            id: "men-qa-p2-q04",
            question:
              "A sphere has volume 288π cm³. Work out (a) its radius, (b) its surface area in terms of π.",
            modelAnswer:
              "(a) (4/3)πr³ = 288π, so r³ = 288 × 3/4 = 216, giving r = 6 cm. (b) Surface area = 4πr² = 4π × 36 = 144π cm².",
            markScheme: ["6", "144π", "r³ = 216", "cube root"],
            commonError:
              "Solving r³ = 216 with a square root (r ≈ 14.7) instead of a cube root — check the power before you undo it.",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "core",
            hints: [
              "Set (4/3)πr³ equal to 288π and cancel the π.",
              "Multiply both sides by 3/4 to isolate r³.",
              "216 is a perfect cube. Then use 4πr² for part (b).",
            ],
            strategy: "work backwards",
          },
          {
            id: "men-qa-p2-q05",
            question:
              "Two solid statues are similar and made of the same material. Their heights are 20 cm and 30 cm, and the smaller statue has mass 1.6 kg. Work out the mass of the larger statue.",
            modelAnswer:
              "k = 30/20 = 1.5. Mass is proportional to volume, which scales by k³ = 3.375. Mass of larger statue = 1.6 × 3.375 = 5.4 kg.",
            markScheme: ["5.4", "3.375", "k³", "1.5"],
            commonError:
              "Using k² = 2.25 (giving 3.6 kg) — mass depends on VOLUME, so it needs the cube, not the square.",
            guideRef: "Similar shapes: k, k², k³ — and congruence",
            difficulty: "core",
            hints: [
              "Same material means mass behaves exactly like volume.",
              "Find k from the heights.",
              "Multiply 1.6 by k³ = (3/2)³.",
            ],
            strategy: "k, k², k³",
          },
          {
            id: "men-qa-p2-q06",
            question:
              "A toy consists of a cone fixed on top of a hemisphere. Both have radius 3 cm, and the total height of the toy is 11 cm. Work out the total volume of the toy. Give your answer in terms of π.",
            modelAnswer:
              "The hemisphere contributes 3 cm of the height, so the cone's height is 11 − 3 = 8 cm. Cone: ⅓π × 3² × 8 = 24π cm³. Hemisphere: ½ × (4/3)π × 3³ = 18π cm³. Total volume = 24π + 18π = 42π cm³.",
            markScheme: ["42π", "24π", "18π", "cone height 8"],
            commonError:
              "Using 11 as the cone's height — the hemisphere's radius accounts for 3 cm of the total height, leaving only 8 cm for the cone.",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "challenge",
            hints: [
              "Sketch the toy and mark the total height 11 cm.",
              "How much of that height belongs to the hemisphere?",
              "Cone height = 11 − 3; then add ⅓πr²h and half a sphere.",
            ],
            strategy: "draw a diagram",
          },
        ],
      },
      {
        id: "men-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "men-qa-p3-q01",
            question:
              "(a) Convert 5 m² into cm². (b) A fish tank holds 2500 cm³ of water. How many litres is that?",
            modelAnswer:
              "(a) 1 m² = 100 × 100 = 10 000 cm², so 5 m² = 50 000 cm². (b) 1 litre = 1000 cm³, so 2500 cm³ = 2.5 litres.",
            markScheme: ["50 000", "2.5", "10 000", "1000"],
            commonError:
              "Writing 5 m² = 500 cm² — the length factor 100 must be SQUARED for areas.",
            guideRef: "Prisms, cylinders and unit conversion",
            difficulty: "warmup",
          },
          {
            id: "men-qa-p3-q02",
            question:
              "A running track is a rectangle 60 m long and 30 m wide, with a semicircle of diameter 30 m on each short end. Work out the perimeter of the track, correct to 1 decimal place.",
            modelAnswer:
              "The two semicircular ends together make one full circle of diameter 30 m, contributing π × 30 = 30π m. The two straight sides contribute 2 × 60 = 120 m. Perimeter = 120 + 30π ≈ 214.2 m. (The 30 m ends are replaced by the curves, so they are NOT added.)",
            markScheme: ["214.2", "30π", "120", "two semicircles make a circle"],
            commonError:
              "Adding the two 30 m widths as well, giving 274.2 m — the short ends of the rectangle are replaced by the curved ends and are not part of the boundary.",
            guideRef: "Compound shapes: slice and stitch",
            difficulty: "core",
            hints: [
              "Trace the boundary: which edges of the rectangle are actually on it?",
              "Two identical semicircles combine into one whole circle.",
              "Perimeter = 2 straights + circumference of a circle of diameter 30.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "men-qa-p3-q03",
            question:
              "A pyramid has a rectangular base 10 cm by 8 cm and vertical height 9 cm. Work out its volume.",
            modelAnswer:
              "Base area = 10 × 8 = 80 cm². V = ⅓ × base area × height = ⅓ × 80 × 9 = 240 cm³.",
            markScheme: ["240", "80", "⅓", "base area"],
            commonError:
              "Forgetting the ⅓ and giving 720 cm³ — a pyramid is one third of the prism on the same base.",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "core",
            hints: [
              "Find the base area first.",
              "A pyramid is what fraction of the matching cuboid?",
              "⅓ × 80 × 9.",
            ],
            strategy: "use the formulae sheet",
          },
          {
            id: "men-qa-p3-q04",
            question:
              "A cone has base diameter 18 cm and slant height 15 cm. Work out its volume. Give your answer in terms of π.",
            modelAnswer:
              "Radius = 18 ÷ 2 = 9 cm. Vertical height: h = √(15² − 9²) = √(225 − 81) = √144 = 12 cm. Volume = ⅓π × 9² × 12 = ⅓π × 972 = 324π cm³.",
            markScheme: ["324π", "height 12", "Pythagoras", "radius 9"],
            commonError:
              "Substituting the slant height 15 as h in ⅓πr²h (405π) — the volume formula needs the VERTICAL height, so use Pythagoras first.",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "core",
            hints: [
              "Which height does ⅓πr²h need — slant or vertical?",
              "Halve the diameter, then use l² = r² + h².",
              "h = √(225 − 81); finish with ⅓π × 81 × h.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "men-qa-p3-q05",
            question:
              "Two similar bottle labels have areas 50 cm² and 98 cm². The smaller label is 10 cm tall. Work out the height of the larger label.",
            modelAnswer:
              "Area ratio = 98/50 = 49/25, so k² = 49/25 and k = 7/5 = 1.4. Height of larger label = 10 × 1.4 = 14 cm.",
            markScheme: ["14", "49/25", "1.4", "square root"],
            commonError:
              "Multiplying 10 by the area ratio 1.96 to get 19.6 cm — recover the LENGTH scale factor with a square root before scaling a height.",
            guideRef: "Similar shapes: k, k², k³ — and congruence",
            difficulty: "core",
            hints: [
              "Simplify the area ratio 98/50 as far as possible.",
              "Areas scale by k² — square-root to find k.",
              "Multiply the 10 cm height by k.",
            ],
            strategy: "work backwards",
          },
          {
            id: "men-qa-p3-q06",
            question:
              "A plant pot is a frustum of a cone. Its circular top has radius 9 cm, its circular base has radius 6 cm, and its vertical height is 8 cm. Work out the volume of the pot. Give your answer in terms of π.",
            modelAnswer:
              "Extend the sloping sides downwards to complete a cone with apex below the base. Let the full cone (top radius 9) have height H; the removed cone (radius 6) has height H − 8. By similar triangles, (H − 8)/H = 6/9 = 2/3, so 3H − 24 = 2H and H = 24 cm; the removed cone has height 16 cm. Volume = ⅓π × 9² × 24 − ⅓π × 6² × 16 = 648π − 192π = 456π cm³.",
            markScheme: ["456π", "H = 24", "16", "similar", "big minus small"],
            commonError:
              "Averaging the radii and treating the pot as a cylinder of radius 7.5 (450π) — close here, but wrong in general; the frustum must be big cone minus small cone.",
            guideRef: "Pyramids, cones, spheres — and frustums",
            difficulty: "challenge",
            hints: [
              "Complete the cone: extend the sloping sides to an apex.",
              "The whole cone and the removed cone are similar — set up a ratio of radii and heights.",
              "Let the whole cone's height be H, so the removed cone's is H − 8; solve (H − 8)/H = 6/9.",
              "Volume = ⅓π(9²)(24) − ⅓π(6²)(16).",
            ],
            strategy: "big minus small",
          },
        ],
      },
    ],
  },
};

export default topic;
