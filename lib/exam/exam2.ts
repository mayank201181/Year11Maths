import type { NamedExam } from "./index";

const exam: NamedExam = {
  id: "exam2",
  title: "Mock Exam 2",
  blurb:
    "A full-length mock spanning the entire Higher syllabus — from standard form to calculus, with a sting in the tail of every paper.",
  mcqPapers: [
    {
      id: "x2-mcq-paper-1",
      title: "Mock Exam 2 — Paper 1 (Multiple Choice)",
      questions: [
        {
          id: "x2-mcq-p1-q01",
          question:
            "A dust mite is 3.2 × 10⁻⁴ m long. Write this length as an ordinary number.",
          options: ["0.00032 m", "0.0032 m", "0.000032 m", "3200 m"],
          answerIndex: 0,
          explanation:
            "The power 10⁻⁴ moves the digits four places to the right of the decimal point: 3.2 × 10⁻⁴ = 0.00032. Moving only three places gives 0.0032, and five places gives 0.000032 — both classic miscounts.",
          difficulty: "warmup",
        },
        {
          id: "x2-mcq-p1-q02",
          question:
            "A smoothie bar mixes mango, banana and spinach in the ratio 5 : 3 : 2. A jug contains 250 g of mango. What is the total mass of the smoothie mix?",
          options: ["500 g", "400 g", "450 g", "550 g"],
          answerIndex: 0,
          explanation:
            "5 parts = 250 g, so 1 part = 50 g. The whole mix is 5 + 3 + 2 = 10 parts = 500 g. Choosing 400 g comes from counting only 8 parts, a common slip when one quantity is forgotten.",
          difficulty: "warmup",
        },
        {
          id: "x2-mcq-p1-q03",
          question: "Simplify 4a + 3b − a + 5b.",
          options: ["3a + 8b", "5a + 8b", "3a + 2b", "11ab"],
          answerIndex: 0,
          explanation:
            "Collect like terms: 4a − a = 3a and 3b + 5b = 8b, giving 3a + 8b. You cannot merge a-terms with b-terms, so 11ab is meaningless here; 3a + 2b comes from subtracting 3b instead of adding.",
          difficulty: "warmup",
        },
        {
          id: "x2-mcq-p1-q04",
          question:
            "After a 15% price cut, a camera drone costs £204. What was the original price?",
          options: ["£240", "£234.60", "£219", "£245"],
          answerIndex: 0,
          explanation:
            "£204 is 85% of the original, so original = 204 ÷ 0.85 = £240. Adding 15% of £204 back on gives £234.60 — the classic reverse-percentage trap, because 15% of the smaller number is not 15% of the original.",
          difficulty: "core",
          hints: [
            "The £204 is the price AFTER the cut — is it 15% or 85% of the original?",
            "Write the reduction as a multiplier: new price = original × 0.85.",
            "Undo the multiplication: divide £204 by 0.85.",
          ],
          strategy: "work backwards",
        },
        {
          id: "x2-mcq-p1-q05",
          question: "Simplify fully (2x³)⁴ ÷ 4x⁵.",
          options: ["4x⁷", "16x⁷", "2x⁷", "4x¹²"],
          answerIndex: 0,
          explanation:
            "(2x³)⁴ = 2⁴ × x¹² = 16x¹². Dividing by 4x⁵ gives (16 ÷ 4) x^(12−5) = 4x⁷. Forgetting to raise the 2 to the power 4 gives 2x⁷; forgetting to divide the coefficient gives 16x⁷.",
          difficulty: "core",
          hints: [
            "The power 4 applies to EVERYTHING inside the bracket, including the 2.",
            "Work out (2x³)⁴ first: raise 2 to the power 4 and multiply the indices on x.",
            "Then divide: coefficients 16 ÷ 4, and subtract the indices 12 − 5.",
          ],
          strategy: "break into steps",
        },
        {
          id: "x2-mcq-p1-q06",
          question:
            "Here are the first four terms of a quadratic sequence: 5, 11, 21, 35. What is the nth term?",
          options: ["2n² + 3", "n² + 4", "2n² + 3n", "4n + 1"],
          answerIndex: 0,
          explanation:
            "First differences are 6, 10, 14 and second differences are constant at 4, so the n² coefficient is 4 ÷ 2 = 2. Subtracting 2n² (2, 8, 18, 32) from the sequence leaves 3 every time, so the nth term is 2n² + 3. Check: n = 3 gives 18 + 3 = 21. The linear option 4n + 1 only fits the first term.",
          difficulty: "core",
          hints: [
            "Find the first differences between terms, then the differences of those.",
            "The coefficient of n² is half the constant second difference.",
            "Subtract your n² part from each term — what is left over?",
          ],
          strategy: "find a pattern",
        },
        {
          id: "x2-mcq-p1-q07",
          question:
            "Each interior angle of a regular polygon is 156°. How many sides does the polygon have?",
          options: ["15", "12", "13", "24"],
          answerIndex: 0,
          explanation:
            "Each exterior angle is 180° − 156° = 24°, and exterior angles of any polygon sum to 360°, so n = 360 ÷ 24 = 15. Answering 24 confuses the exterior angle with the number of sides.",
          difficulty: "core",
          hints: [
            "Interior and exterior angles at each vertex make a straight line.",
            "Find the exterior angle first: 180° minus the interior angle.",
            "All the exterior angles of a polygon add up to 360°.",
          ],
          strategy: "work backwards",
        },
        {
          id: "x2-mcq-p1-q08",
          question:
            "Two numbers satisfy 3x + 2y = 19 and x − y = 3. What is the value of x?",
          options: ["5", "2", "3", "7"],
          answerIndex: 0,
          explanation:
            "From the second equation x = y + 3. Substituting: 3(y + 3) + 2y = 19, so 5y + 9 = 19, y = 2 and x = 5. Check: 15 + 4 = 19 and 5 − 2 = 3. Choosing 2 gives the value of y, not x — always re-read which unknown is asked for.",
          difficulty: "core",
          hints: [
            "Rearrange the simpler equation to make x the subject.",
            "Substitute x = y + 3 into 3x + 2y = 19.",
            "Solve 5y + 9 = 19 for y, then add 3 to get x.",
          ],
          strategy: "introduce a variable",
        },
        {
          id: "x2-mcq-p1-q09",
          question:
            "A kite is flying on a taut 48 m string anchored at ground level. The string makes an angle of 62° with the horizontal ground. How high is the kite, to 1 decimal place?",
          options: ["42.4 m", "22.5 m", "54.4 m", "90.3 m"],
          answerIndex: 0,
          explanation:
            "The height is the side opposite the 62° angle and the string is the hypotenuse, so height = 48 sin 62° = 42.4 m. Using cos gives 22.5 m (the horizontal distance), and dividing instead of multiplying gives 54.4 m.",
          difficulty: "core",
          hints: [
            "Sketch the right-angled triangle: string, ground, and vertical height.",
            "Relative to the 62° angle, which sides are the height (opposite) and the string (hypotenuse)?",
            "Opposite and hypotenuse means sine: height = 48 × sin 62°.",
          ],
          strategy: "draw a diagram",
        },
        {
          id: "x2-mcq-p1-q10",
          question:
            "An arcade token pouch holds 5 gold and 3 silver tokens. Two tokens are drawn at random without replacement. What is the probability of drawing one of each colour?",
          options: ["15/28", "15/56", "15/32", "13/28"],
          answerIndex: 0,
          explanation:
            "P(gold then silver) = (5/8)(3/7) = 15/56 and P(silver then gold) = (3/8)(5/7) = 15/56. 'One of each' happens either way, so add: 30/56 = 15/28. The distractor 15/56 forgets the second order; 15/32 wrongly keeps the denominator 8 for the second draw.",
          difficulty: "challenge",
          hints: [
            "Without replacement means the second draw has only 7 tokens left.",
            "'One of each' can happen in two different orders — list them.",
            "Find the probability of each order along a tree diagram, then add them.",
          ],
          strategy: "consider all cases",
        },
        {
          id: "x2-mcq-p1-q11",
          question:
            "A square courtyard has a diagonal of length (6 + 2√2) m. What is the exact area of the courtyard in m²?",
          options: ["22 + 12√2", "44 + 24√2", "22 + 6√2", "38 + 12√2"],
          answerIndex: 0,
          explanation:
            "For a square, area = d²/2. Here d² = (6 + 2√2)² = 36 + 24√2 + 8 = 44 + 24√2, so the area is (44 + 24√2)/2 = 22 + 12√2. Option 44 + 24√2 forgets to halve; 22 + 6√2 halves the middle term twice by expanding (a + b)² without the 2ab.",
          difficulty: "challenge",
          hints: [
            "Split the square along its diagonal — how does the area relate to d²?",
            "For any square, area = (diagonal)² ÷ 2, by Pythagoras on half the square.",
            "Expand (6 + 2√2)² carefully: remember the middle term 2 × 6 × 2√2, and that (2√2)² = 8.",
          ],
          strategy: "exploit structure",
        },
        {
          id: "x2-mcq-p1-q12",
          question:
            "The curve y = 2x² − 8x + 5 models the cost profile of a battery charger. What is the minimum value of y?",
          options: ["−3", "5", "2", "−8"],
          answerIndex: 0,
          explanation:
            "Complete the square: 2x² − 8x + 5 = 2(x² − 4x) + 5 = 2(x − 2)² − 8 + 5 = 2(x − 2)² − 3. The squared term is never negative, so the minimum value is −3, at x = 2. Answering 2 gives the x-coordinate of the vertex, not the minimum value; 5 is just the y-intercept.",
          difficulty: "challenge",
          hints: [
            "Completing the square reveals the vertex of any quadratic.",
            "Factor 2 out of the x-terms first: 2(x² − 4x) + 5.",
            "Write x² − 4x as (x − 2)² − 4, then multiply back through by 2 and tidy up.",
            "The minimum is the constant left when the squared bracket equals zero.",
          ],
          strategy: "exploit symmetry",
        },
      ],
    },
    {
      id: "x2-mcq-paper-2",
      title: "Mock Exam 2 — Paper 2 (Multiple Choice)",
      questions: [
        {
          id: "x2-mcq-p2-q01",
          question:
            "Estimate the value of (48.9 × 3.14) ÷ 0.492 by rounding each number to 1 significant figure.",
          options: ["300", "30", "150", "3000"],
          answerIndex: 0,
          explanation:
            "Round to 50, 3 and 0.5: (50 × 3) ÷ 0.5 = 150 ÷ 0.5 = 300. Dividing by 0.5 doubles a number — treating it as 'divide by 5' gives 30, and stopping at 150 forgets the division entirely.",
          difficulty: "warmup",
        },
        {
          id: "x2-mcq-p2-q02",
          question:
            "In a class of 30 students, 18 stream music, 14 play online games and 6 do both. How many students do neither?",
          options: ["4", "2", "6", "10"],
          answerIndex: 0,
          explanation:
            "Students doing at least one: 18 + 14 − 6 = 26 (subtracting 6 stops the overlap being counted twice). So 30 − 26 = 4 do neither. Forgetting to subtract the overlap gives 30 − 32, which is impossible — a sign you've double-counted.",
          difficulty: "warmup",
        },
        {
          id: "x2-mcq-p2-q03",
          question:
            "A translation by the column vector (−3, 2) is applied to the point (5, −1). Where does the point move to?",
          options: ["(2, 1)", "(8, −3)", "(2, −3)", "(8, 1)"],
          answerIndex: 0,
          explanation:
            "Add the vector to the coordinates: (5 + (−3), −1 + 2) = (2, 1). Subtracting the vector instead gives (8, −3), which is the inverse translation.",
          difficulty: "warmup",
        },
        {
          id: "x2-mcq-p2-q04",
          question:
            "Work out (3 × 10⁵) × (4 × 10⁻²), giving your answer in standard form.",
          options: ["1.2 × 10⁴", "1.2 × 10³", "7 × 10³", "1.2 × 10⁻³"],
          answerIndex: 0,
          explanation:
            "3 × 4 = 12 and 10⁵ × 10⁻² = 10³, giving 12 × 10³. But standard form needs a number between 1 and 10, so adjust: 1.2 × 10⁴. Choosing 1.2 × 10³ adjusts the 12 without bumping the power up; 7 × 10³ adds instead of multiplying the front numbers.",
          difficulty: "core",
          hints: [
            "Multiply the number parts and the powers of 10 separately.",
            "Add the indices: 10⁵ × 10⁻² = 10^(5 + (−2)).",
            "12 × 10³ is not standard form — rewrite 12 as 1.2 × 10 and combine the powers.",
          ],
          strategy: "break into steps",
        },
        {
          id: "x2-mcq-p2-q05",
          question: "Simplify fully (x² − 9)/(x² + 5x + 6).",
          options: [
            "(x − 3)/(x + 2)",
            "(x + 3)/(x + 2)",
            "(x − 3)/(x − 2)",
            "−9/(5x + 6)",
          ],
          answerIndex: 0,
          explanation:
            "Factorise both: x² − 9 = (x − 3)(x + 3) and x² + 5x + 6 = (x + 2)(x + 3). Cancel the common factor (x + 3) to get (x − 3)/(x + 2). The option −9/(5x + 6) 'cancels' the x² terms — you can never cancel across a + or − sign.",
          difficulty: "core",
          hints: [
            "You can only cancel FACTORS, so factorise top and bottom first.",
            "x² − 9 is a difference of two squares.",
            "Factorise x² + 5x + 6: two numbers that multiply to 6 and add to 5.",
          ],
          strategy: "factorise first",
        },
        {
          id: "x2-mcq-p2-q06",
          question: "Solve the inequality 5 − 2x > 11.",
          options: ["x < −3", "x > −3", "x < 3", "x > 3"],
          answerIndex: 0,
          explanation:
            "Subtract 5: −2x > 6. Dividing by −2 REVERSES the inequality: x < −3. Check with x = −4: 5 − (−8) = 13 > 11 ✓. Keeping the sign the same gives x > −3, the most common error with negative coefficients.",
          difficulty: "core",
          hints: [
            "Isolate the x-term first by subtracting 5 from both sides.",
            "You need to divide by a negative number — what happens to the inequality sign?",
            "Test your answer with an easy value like x = −4 to make sure it satisfies 5 − 2x > 11.",
          ],
          strategy: "check with a test value",
        },
        {
          id: "x2-mcq-p2-q07",
          question:
            "Points A and B lie on a circle with centre O, and angle AOB = 118°. Point C lies on the major arc AB. What is angle ACB?",
          options: ["59°", "62°", "118°", "121°"],
          answerIndex: 0,
          explanation:
            "The angle at the centre is twice the angle at the circumference standing on the same arc, so angle ACB = 118° ÷ 2 = 59°. Doubling instead of halving, or using 180° − 118° = 62°, are the standard traps.",
          difficulty: "core",
          hints: [
            "Both angles stand on the same arc AB — which circle theorem links an angle at the centre to one at the circumference?",
            "The centre angle is always the bigger of the two.",
            "Halve 118°.",
          ],
          strategy: "spot the theorem",
        },
        {
          id: "x2-mcq-p2-q08",
          question:
            "A yeast culture grows by 20% every hour. It starts with 500 cells. How many cells are there after 3 hours?",
          options: ["864", "800", "620", "900"],
          answerIndex: 0,
          explanation:
            "Compound growth multiplies: 500 × 1.2³ = 500 × 1.728 = 864. Adding 20% of 500 three times gives 800 — that is simple growth, not compound, because it ignores that each hour's 20% acts on a bigger population.",
          difficulty: "core",
          hints: [
            "Each hour the culture is multiplied by the same number — what multiplier represents +20%?",
            "Three hours means applying the multiplier three times.",
            "Work out 500 × 1.2 × 1.2 × 1.2, or 500 × 1.2³.",
          ],
          strategy: "use a multiplier",
        },
        {
          id: "x2-mcq-p2-q09",
          question:
            "The column vectors a = (2, −1) and b = (−3, 4) describe two drone moves. Work out 2a − b.",
          options: ["(7, −6)", "(1, 2)", "(−7, 6)", "(7, 6)"],
          answerIndex: 0,
          explanation:
            "2a = (4, −2). Subtracting b means subtracting each component: (4 − (−3), −2 − 4) = (7, −6). The option (1, 2) is 2a + b, and (−7, 6) is b − 2a — watch the order and signs.",
          difficulty: "core",
          hints: [
            "Double each component of a first.",
            "Subtracting a negative component turns into an addition.",
            "Compute the x-components and y-components separately: (4 − (−3), −2 − 4).",
          ],
          strategy: "break into steps",
        },
        {
          id: "x2-mcq-p2-q10",
          question:
            "On a histogram of delivery times, the class 20 ≤ t < 35 minutes is drawn with a frequency density of 2.4. How many deliveries fall in this class?",
          options: ["36", "12", "6.25", "17.4"],
          answerIndex: 0,
          explanation:
            "Frequency = frequency density × class width = 2.4 × 15 = 36. The class width is 35 − 20 = 15, not 35. Dividing instead of multiplying gives 6.25; adding gives 17.4 — neither has any statistical meaning.",
          difficulty: "challenge",
          hints: [
            "On a histogram, the AREA of a bar gives the frequency, not its height.",
            "Work out the class width from 20 ≤ t < 35 first.",
            "Multiply the frequency density by the class width.",
          ],
          strategy: "area not height",
        },
        {
          id: "x2-mcq-p2-q11",
          question:
            "Express the recurring decimal 0.35̇ (that is, 0.3555…) as a fraction in its simplest form.",
          options: ["16/45", "35/99", "7/20", "32/99"],
          answerIndex: 0,
          explanation:
            "Let x = 0.3555…. Then 10x = 3.555… and 100x = 35.555…. Subtracting: 90x = 32, so x = 32/90 = 16/45. The option 35/99 treats BOTH digits as recurring (0.353535…), the most common misread of the dot notation.",
          difficulty: "challenge",
          hints: [
            "Only the 5 recurs — the 3 appears once. Write out the first few decimal places.",
            "Set x = 0.3555… and multiply by powers of 10 so the parts after the decimal point match.",
            "Subtract 10x from 100x so the recurring tails cancel, then solve for x and simplify.",
          ],
          strategy: "look for invariants",
        },
        {
          id: "x2-mcq-p2-q12",
          question:
            "Two mathematically similar perfume bottles are 12 cm and 18 cm tall. The smaller bottle holds 400 ml. How much does the larger bottle hold?",
          options: ["1350 ml", "600 ml", "900 ml", "2700 ml"],
          answerIndex: 0,
          explanation:
            "The length scale factor is 18/12 = 3/2, so the volume scale factor is (3/2)³ = 27/8. Volume = 400 × 27/8 = 1350 ml. Multiplying by 3/2 (600 ml) uses the length factor on a volume; (3/2)² = 9/4 gives 900 ml, the area factor.",
          difficulty: "challenge",
          hints: [
            "Find the length scale factor between the bottles first.",
            "Capacity is a volume — how does a volume scale when lengths scale by k?",
            "Cube the length scale factor, then multiply 400 ml by it.",
          ],
          strategy: "match the dimension",
        },
      ],
    },
  ],
  qaPapers: [
    {
      id: "x2-qa-paper-3",
      title: "Mock Exam 2 — Paper 3 (Written)",
      questions: [
        {
          id: "x2-qa-p3-q01",
          question:
            "Two LED strips on a stage rig flash together at the start of a show. One strip flashes every 84 seconds and the other every 126 seconds. After how many seconds will they next flash together? Give your answer in seconds, and also in minutes and seconds.",
          modelAnswer:
            "Write each number as a product of prime factors: 84 = 2² × 3 × 7 and 126 = 2 × 3² × 7.\n\nThe LCM takes the highest power of each prime: 2² × 3² × 7 = 4 × 9 × 7 = 252.\n\nThey next flash together after 252 seconds, which is 4 minutes 12 seconds.",
          markScheme: ["252", "prime factors", "LCM", "4 minutes 12 seconds"],
          commonError:
            "Finding the HCF (42) instead of the LCM, or simply multiplying 84 × 126 without removing the shared factors.",
          difficulty: "warmup",
        },
        {
          id: "x2-qa-p3-q02",
          question:
            "A vintage denim jacket is priced at £68. In a clearance sale every price is reduced by 35%. Work out the sale price of the jacket.",
          modelAnswer:
            "A 35% reduction leaves 65% of the price, so the multiplier is 0.65.\n\nSale price = 68 × 0.65 = £44.20.",
          markScheme: ["44.20", "0.65", "multiplier", "65%"],
          commonError:
            "Working out 35% of £68 (£23.80) and giving that as the answer instead of subtracting it from £68.",
          difficulty: "warmup",
        },
        {
          id: "x2-qa-p3-q03",
          question:
            "A community garden is a rectangle with length (3x + 2) metres and width (2x − 3) metres. Its perimeter is 88 metres. Work out the area of the garden.",
          modelAnswer:
            "Perimeter: 2[(3x + 2) + (2x − 3)] = 2(5x − 1) = 10x − 2.\n\nSet equal to 88: 10x − 2 = 88, so 10x = 90 and x = 9.\n\nLength = 3(9) + 2 = 29 m and width = 2(9) − 3 = 15 m.\n\nArea = 29 × 15 = 435 m².",
          markScheme: ["435", "x = 9", "10x − 2 = 88", "29", "15"],
          commonError:
            "Adding the length and width once (5x − 1 = 88) and forgetting that a perimeter uses TWO lengths and TWO widths.",
          difficulty: "core",
          hints: [
            "Write an expression for the perimeter using both the length and the width.",
            "A rectangle's perimeter is 2 × (length + width) — simplify before setting it equal to 88.",
            "Solve 10x − 2 = 88 for x, then substitute back to get the actual length and width.",
            "Area needs the numerical length × width, not the expressions.",
          ],
          strategy: "introduce a variable",
        },
        {
          id: "x2-qa-p3-q04",
          question:
            "The brightness y of a lantern (in lux) is inversely proportional to the square of the distance x metres from it. When x = 4, y = 5.\n\n(a) Find a formula for y in terms of x.\n(b) Find y when x = 2.\n(c) Find the positive value of x when y = 1.25.",
          modelAnswer:
            "(a) y = k/x². Substituting x = 4, y = 5: 5 = k/16, so k = 80 and y = 80/x².\n\n(b) When x = 2: y = 80/4 = 20 lux.\n\n(c) 1.25 = 80/x², so x² = 80/1.25 = 64 and x = 8 metres.",
          markScheme: ["y = 80/x²", "k = 80", "20", "8"],
          commonError:
            "Writing y = k/x (inverse proportion without the square), or using direct proportion y = kx² because the word 'square' appears.",
          difficulty: "core",
          hints: [
            "'Inversely proportional to the square of x' translates to y = k/x².",
            "Use the given pair x = 4, y = 5 to pin down the constant k.",
            "For part (c), rearrange to make x² the subject before square-rooting.",
          ],
          strategy: "introduce a variable",
        },
        {
          id: "x2-qa-p3-q05",
          question:
            "A wildlife-survey boat leaves harbour H and sails 8 km on a bearing of 065° to a buoy B. It then sails 11 km on a bearing of 130° to a reef R. Calculate the direct distance HR, giving your answer correct to 1 decimal place.",
          modelAnswer:
            "At B, the back-bearing to H is 065° + 180° = 245°. The angle HBR between the two legs is 245° − 130° = 115°.\n\nBy the cosine rule: HR² = 8² + 11² − 2 × 8 × 11 × cos 115°\n= 64 + 121 − 176 × (−0.4226…)\n= 185 + 74.38… = 259.38….\n\nHR = √259.38… = 16.105… ≈ 16.1 km.",
          markScheme: ["16.1", "cosine rule", "115", "259.4"],
          commonError:
            "Using the angle 130° − 65° = 65° (the change of bearing) in the cosine rule instead of the interior angle 115° of the triangle at B.",
          difficulty: "core",
          hints: [
            "Sketch the journey with a north line at H AND another north line at B.",
            "Find the angle inside the triangle at B: use the back-bearing of the first leg (065° + 180°).",
            "You know two sides and the angle between them — that is the cosine rule setup.",
            "Keep the full calculator value of cos 115° (it is negative) until the final square root.",
          ],
          strategy: "draw a diagram",
        },
        {
          id: "x2-qa-p3-q06",
          question:
            "Forty players tested a new puzzle app. The grouped table shows their session times.\n\n- 0 < t ≤ 10 minutes: 6 players\n- 10 < t ≤ 20 minutes: 11 players\n- 20 < t ≤ 40 minutes: 18 players\n- 40 < t ≤ 60 minutes: 5 players\n\nCalculate an estimate for the mean session time. Give your answer to 1 decimal place, and explain why your answer is only an estimate.",
          modelAnswer:
            "Use midpoints: 5, 15, 30 and 50 minutes.\n\nΣfx = 6 × 5 + 11 × 15 + 18 × 30 + 5 × 50 = 30 + 165 + 540 + 250 = 985.\n\nMean ≈ 985 ÷ 40 = 24.625 ≈ 24.6 minutes.\n\nIt is an estimate because the exact times within each class are unknown — each player is assumed to sit at the midpoint of their class.",
          markScheme: ["24.6", "midpoint", "985", "40", "estimate"],
          commonError:
            "Using the class endpoints or the class widths instead of the midpoints, or dividing by the number of classes (4) instead of the total frequency (40).",
          difficulty: "core",
          hints: [
            "You do not know each exact time — pick a representative value for each class.",
            "Use the midpoint of every class interval (note the last two classes are wider).",
            "Multiply each midpoint by its frequency, total them, then divide by the TOTAL number of players.",
          ],
          strategy: "use representative values",
        },
        {
          id: "x2-qa-p3-q07",
          question:
            "A skate ramp's cross-section follows the curve y = x² − 3x + 1, and a support beam lies along the line y = 2x − 5 (units in metres). Find the coordinates of the points where the beam meets the curve.",
          modelAnswer:
            "Set the expressions equal: x² − 3x + 1 = 2x − 5.\n\nRearrange: x² − 5x + 6 = 0, which factorises as (x − 2)(x − 3) = 0, so x = 2 or x = 3.\n\nSubstitute into y = 2x − 5: when x = 2, y = −1; when x = 3, y = 1.\n\nThe beam meets the curve at (2, −1) and (3, 1).",
          markScheme: ["(2, −1)", "(3, 1)", "x² − 5x + 6 = 0", "factorise"],
          commonError:
            "Stopping at x = 2 and x = 3 without finding the y-coordinates — the question asks for points, so both coordinates are needed.",
          difficulty: "challenge",
          hints: [
            "At a meeting point the curve and the line have the SAME y-value for the same x.",
            "Put x² − 3x + 1 equal to 2x − 5 and bring everything to one side.",
            "Factorise the resulting quadratic — two numbers multiplying to 6, adding to −5.",
            "Substitute each x back into the LINE equation (it is simpler) to get the y-values.",
          ],
          strategy: "introduce a variable",
        },
        {
          id: "x2-qa-p3-q08",
          question:
            "A right-angled triangular sail has its two shorter sides of length (3 + √2) m and (3 − √2) m.\n\n(a) Show that the length of the longest side is √22 m.\n(b) Find the exact area of the sail.",
          modelAnswer:
            "(a) By Pythagoras: hyp² = (3 + √2)² + (3 − √2)²\n= (9 + 6√2 + 2) + (9 − 6√2 + 2)\n= 11 + 6√2 + 11 − 6√2 = 22.\nSo the hypotenuse is √22 m, as required.\n\n(b) Area = ½ × (3 + √2)(3 − √2) = ½ × (9 − 2) = ½ × 7 = 3.5 m².",
          markScheme: ["√22", "3.5", "9 − 2", "6√2", "Pythagoras"],
          commonError:
            "Expanding (3 + √2)² as 9 + 2 = 11 and losing the middle term 6√2 — the two middle terms are needed (they cancel between the brackets, but only if you write them down).",
          difficulty: "challenge",
          hints: [
            "The two given sides are the legs, so Pythagoras gives the hypotenuse directly.",
            "Expand each squared bracket fully: (a ± b)² = a² ± 2ab + b².",
            "Watch what happens to the +6√2 and −6√2 terms when you add the two expansions.",
            "For the area, (3 + √2)(3 − √2) is a difference of two squares.",
          ],
          strategy: "exploit symmetry",
          solutions: [
            {
              label: "Full expansion method",
              steps: [
                "Expand (3 + √2)² = 9 + 6√2 + 2 = 11 + 6√2.",
                "Expand (3 − √2)² = 9 − 6√2 + 2 = 11 − 6√2.",
                "Add for Pythagoras: hyp² = 22, so hyp = √22 m.",
                "Area = ½(3 + √2)(3 − √2). Expand: 9 − 3√2 + 3√2 − 2 = 7.",
                "Area = ½ × 7 = 3.5 m².",
              ],
            },
            {
              label: "Structure-spotting method (the elegant one)",
              steps: [
                "The legs have the form a + b and a − b with a = 3, b = √2.",
                "(a + b)² + (a − b)² = 2a² + 2b² (the cross terms cancel), so hyp² = 2(9) + 2(2) = 22 and hyp = √22 m.",
                "(a + b)(a − b) = a² − b² = 9 − 2 = 7 (difference of two squares).",
                "Area = ½ × 7 = 3.5 m² — no messy surd expansion needed.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "x2-qa-paper-4",
      title: "Mock Exam 2 — Paper 4 (Written)",
      questions: [
        {
          id: "x2-qa-p4-q01",
          question:
            "A charity bake stall sells 2/5 of its cupcakes in the morning and 1/4 of them in the afternoon. What fraction of the cupcakes is left unsold? Show your working with a common denominator.",
          modelAnswer:
            "Common denominator of 5 and 4 is 20: 2/5 = 8/20 and 1/4 = 5/20.\n\nSold: 8/20 + 5/20 = 13/20.\n\nLeft unsold: 1 − 13/20 = 7/20.",
          markScheme: ["7/20", "common denominator", "13/20", "20"],
          commonError:
            "Adding 2/5 + 1/4 as 3/9 by adding tops and bottoms separately — fractions need a common denominator first.",
          difficulty: "warmup",
        },
        {
          id: "x2-qa-p4-q02",
          question: "Expand and simplify (x + 4)(x − 7).",
          modelAnswer:
            "(x + 4)(x − 7) = x² − 7x + 4x − 28 = x² − 3x − 28.",
          markScheme: ["x² − 3x − 28", "−7x", "4x", "expand"],
          commonError:
            "Getting the middle term as +3x by mishandling the signs, or writing the constant as +28 (forgetting that +4 × −7 = −28).",
          difficulty: "warmup",
        },
        {
          id: "x2-qa-p4-q03",
          question:
            "A rectangular solar panel is measured as 1.6 m by 0.9 m, each length correct to the nearest 0.1 m. Calculate the upper bound for the area of the panel. Give the exact value.",
          modelAnswer:
            "Half the rounding unit is 0.05 m, so the upper bounds of the lengths are 1.65 m and 0.95 m.\n\nUpper bound of area = 1.65 × 0.95 = 1.5675 m².",
          markScheme: ["1.5675", "1.65", "0.95", "upper bound"],
          commonError:
            "Adding the whole rounding unit (using 1.7 and 1.0) instead of half of it, or mixing an upper bound with a lower bound.",
          difficulty: "core",
          hints: [
            "'To the nearest 0.1 m' means the true value could be up to half of 0.1 m bigger.",
            "Write the upper bound of each measurement separately: measurement + 0.05.",
            "The area is biggest when BOTH lengths take their upper bounds — multiply them.",
          ],
          strategy: "consider extremes",
        },
        {
          id: "x2-qa-p4-q04",
          question:
            "The functions f and g are defined by f(x) = 3x − 2 and g(x) = x² + 1.\n\n(a) Work out fg(2).\n(b) Find f⁻¹(x).",
          modelAnswer:
            "(a) Work inside-out: g(2) = 2² + 1 = 5, then f(5) = 3 × 5 − 2 = 13. So fg(2) = 13.\n\n(b) Let y = 3x − 2. Swap and rearrange: x = 3y − 2, so y = (x + 2)/3. Therefore f⁻¹(x) = (x + 2)/3.",
          markScheme: ["13", "(x + 2)/3", "g(2) = 5", "inverse"],
          commonError:
            "Computing gf(2) = g(4) = 17 instead of fg(2) — in fg(2), the function NEAREST the input (g) acts first.",
          difficulty: "core",
          hints: [
            "fg(2) means 'do g first, then f' — the letter closest to the number acts first.",
            "Find g(2), then feed that result into f.",
            "For the inverse, write y = 3x − 2, swap x and y, and make y the subject.",
          ],
          strategy: "work inside-out",
        },
        {
          id: "x2-qa-p4-q05",
          question:
            "After a 12% pay rise, Priya's salary is £30,240 per year. What was her salary before the rise?",
          modelAnswer:
            "£30,240 represents 112% of the original salary.\n\nOriginal salary = 30240 ÷ 1.12 = £27,000.\n\nCheck: 27000 × 1.12 = 30240 ✓.",
          markScheme: ["27000", "1.12", "112%", "divide"],
          commonError:
            "Taking 12% off £30,240 (30240 × 0.88 = £26,611.20) — the 12% was applied to the ORIGINAL salary, which is a different, smaller number.",
          difficulty: "core",
          hints: [
            "£30,240 is the salary AFTER the rise — what percentage of the original is it?",
            "The rise turned 100% into 112%.",
            "Reverse the multiplier: divide by 1.12 (or find 1% first).",
          ],
          strategy: "work backwards",
          solutions: [
            {
              label: "Multiplier method (the elegant one)",
              steps: [
                "A 12% rise means new = original × 1.12.",
                "Undo it in one move: original = 30240 ÷ 1.12 = £27,000.",
                "Check forwards: 27000 × 1.12 = 30240 ✓.",
              ],
            },
            {
              label: "Unitary (1%) method",
              steps: [
                "£30,240 corresponds to 112% of the original salary.",
                "1% of the original = 30240 ÷ 112 = £270.",
                "100% of the original = 270 × 100 = £27,000.",
              ],
            },
          ],
        },
        {
          id: "x2-qa-p4-q06",
          question:
            "A model rollercoaster section follows the curve y = x³ − 6x² + 9x + 2 (units in metres). Use calculus to find the coordinates of the two turning points of the curve, and state which is the maximum.",
          modelAnswer:
            "Differentiate: dy/dx = 3x² − 12x + 9.\n\nAt turning points dy/dx = 0: 3(x² − 4x + 3) = 0, so (x − 1)(x − 3) = 0 and x = 1 or x = 3.\n\nWhen x = 1: y = 1 − 6 + 9 + 2 = 6, giving (1, 6).\nWhen x = 3: y = 27 − 54 + 27 + 2 = 2, giving (3, 2).\n\nFor a positive cubic the first turning point is the maximum (check the gradient sign either side: dy/dx > 0 for x < 1 and < 0 between 1 and 3). So (1, 6) is the maximum and (3, 2) is the minimum.",
          markScheme: ["(1, 6)", "(3, 2)", "3x² − 12x + 9", "dy/dx = 0", "maximum"],
          commonError:
            "Solving dy/dx = 0 correctly but substituting the x-values back into dy/dx (getting 0) instead of into the ORIGINAL equation for y.",
          difficulty: "core",
          hints: [
            "Turning points occur where the gradient is zero.",
            "Differentiate term by term: the derivative of xⁿ is n·xⁿ⁻¹.",
            "Set dy/dx = 0, take out the common factor 3, then factorise the quadratic.",
            "Substitute each x-value into the ORIGINAL curve to find the y-coordinates.",
          ],
          strategy: "translate to calculus",
        },
        {
          id: "x2-qa-p4-q07",
          question:
            "In triangle OAB, OA = a and OB = b (position vectors from O). Point P lies on AB so that AP : PB = 2 : 1. Point Q is positioned so that OQ = (2/3)a + (4/3)b.\n\n(a) Find AB in terms of a and b.\n(b) Show that OP = (1/3)a + (2/3)b.\n(c) Prove that O, P and Q lie on a straight line.",
          modelAnswer:
            "(a) AB = AO + OB = −a + b = b − a.\n\n(b) AP = (2/3)AB = (2/3)(b − a). So OP = OA + AP = a + (2/3)(b − a) = (1/3)a + (2/3)b, as required.\n\n(c) OQ = (2/3)a + (4/3)b = 2[(1/3)a + (2/3)b] = 2 OP. Since OQ is a scalar multiple of OP, the vectors are parallel, and both pass through the common point O — so O, P and Q are collinear (with Q twice as far from O as P).",
          markScheme: ["b − a", "(1/3)a + (2/3)b", "OQ = 2OP", "parallel", "collinear"],
          commonError:
            "Writing AP as (2/3)(a − b) by taking the vector from B to A, or claiming AP = (1/2)AB because the ratio 2 : 1 'looks like a half' — 2 : 1 splits AB into 3 equal parts.",
          difficulty: "challenge",
          hints: [
            "To travel from A to B via O: go backwards along a, then forwards along b.",
            "AP : PB = 2 : 1 means P is two-thirds of the way along AB from A.",
            "Build OP as OA + AP and collect the a and b terms.",
            "For collinearity, try writing OQ as a number times OP.",
          ],
          strategy: "look for invariants",
        },
        {
          id: "x2-qa-p4-q08",
          question:
            "A craftsman turns a solid wooden doorstop on a lathe: a cylinder of radius 6 cm and height 10 cm, topped by a hemisphere of the same radius. The oak he uses has density 0.71 g/cm³.\n\n(a) Show that the exact volume of the doorstop is 504π cm³.\n(b) Calculate the mass of the doorstop in grams, correct to 3 significant figures.",
          modelAnswer:
            "(a) Cylinder: V = πr²h = π × 6² × 10 = 360π cm³.\nHemisphere: V = (1/2) × (4/3)πr³ = (2/3)π × 6³ = (2/3)π × 216 = 144π cm³.\nTotal = 360π + 144π = 504π cm³, as required.\n\n(b) Volume = 504π = 1583.36… cm³.\nMass = density × volume = 0.71 × 1583.36… = 1124.19… ≈ 1120 g (3 s.f.).",
          markScheme: ["1120", "504π", "360π", "144π", "density × volume"],
          commonError:
            "Using the full sphere volume (4/3)πr³ instead of halving it for the hemisphere, which gives 648π and a mass of about 1450 g.",
          difficulty: "challenge",
          hints: [
            "Split the solid into two familiar pieces and handle each volume separately.",
            "A hemisphere is HALF a sphere: V = (2/3)πr³.",
            "Keep everything as multiples of π until the end, then combine.",
            "Mass = density × volume — convert only at the final step and round last.",
          ],
          strategy: "break into steps",
        },
      ],
    },
  ],
};

export default exam;
