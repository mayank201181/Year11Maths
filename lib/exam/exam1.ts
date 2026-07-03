import type { NamedExam } from "./index";

const exam: NamedExam = {
  id: "exam1",
  title: "Mock Exam 1",
  blurb:
    "A full-length mock spanning the whole Higher syllabus — from warm-up number work to grade 9 crossover problems that mix algebra, geometry and probability.",
  mcqPapers: [
    {
      id: "x1-mcq-paper-1",
      title: "Mock Exam 1 — Paper 1 (Multiple Choice)",
      questions: [
        {
          id: "x1-mcq-p1-q01",
          question: "Write 0.00047 in standard form.",
          options: ["4.7 × 10^-4", "4.7 × 10^-3", "47 × 10^-5", "4.7 × 10^4"],
          answerIndex: 0,
          explanation:
            "Move the decimal point 4 places right to get 4.7, so 0.00047 = 4.7 × 10^-4. In standard form the first number must be between 1 and 10, which rules out 47 × 10^-5, and a small number needs a negative power, ruling out 4.7 × 10^4.",
          difficulty: "warmup",
        },
        {
          id: "x1-mcq-p1-q02",
          question:
            "A coat costing £80 is reduced by 15% in a sale. What is the sale price?",
          options: ["£68", "£65", "£12", "£92"],
          answerIndex: 0,
          explanation:
            "A 15% reduction leaves 85%, so the sale price is 0.85 × £80 = £68. £12 is only the discount itself, £65 comes from subtracting 15 rather than 15%, and £92 comes from adding instead of subtracting.",
          difficulty: "warmup",
        },
        {
          id: "x1-mcq-p1-q03",
          question: "Expand and simplify 3(2x − 1) − 2(x − 4).",
          options: ["4x + 5", "4x − 11", "8x + 5", "4x − 5"],
          answerIndex: 0,
          explanation:
            "3(2x − 1) = 6x − 3 and −2(x − 4) = −2x + 8, so the total is 6x − 3 − 2x + 8 = 4x + 5. The classic slip is −2 × −4 = −8 instead of +8, which gives 4x − 11.",
          difficulty: "warmup",
        },
        {
          id: "x1-mcq-p1-q04",
          question: "Simplify fully (2x³)^4 ÷ (4x²).",
          options: ["4x^10", "8x^10", "4x^14", "2x^6"],
          answerIndex: 0,
          explanation:
            "(2x³)^4 = 2^4 × x^12 = 16x^12. Dividing by 4x² gives (16 ÷ 4) × x^(12−2) = 4x^10. Forgetting to raise the 2 to the power 4, or multiplying indices in the division instead of subtracting, gives the wrong options.",
          difficulty: "core",
          hints: [
            "Deal with the bracket first: the power 4 applies to BOTH the 2 and the x³.",
            "(x³)^4 means multiply the indices: x^12. And 2^4 = 16.",
            "Now divide: subtract the indices and divide the number parts, 16x^12 ÷ 4x².",
          ],
          strategy: "break it into pieces",
        },
        {
          id: "x1-mcq-p1-q05",
          question:
            "Find the nth term of the quadratic sequence 5, 11, 21, 35, ...",
          options: ["2n² + 3", "n² + 4", "2n² + n + 2", "3n + 2"],
          answerIndex: 0,
          explanation:
            "First differences are 6, 10, 14; the second difference is constant at 4, so the n² coefficient is 4 ÷ 2 = 2. Subtracting 2n² (which gives 2, 8, 18, 32) leaves 3, 3, 3, 3, so the nth term is 2n² + 3. Check: n = 4 gives 32 + 3 = 35. A linear rule like 3n + 2 cannot fit because the differences are not constant.",
          difficulty: "core",
          hints: [
            "Write down the differences between consecutive terms. Are they constant?",
            "The second difference is constant — halve it to find the coefficient of n².",
            "Subtract 2n² from each term and see what constant sequence is left over.",
          ],
          strategy: "find a pattern",
        },
        {
          id: "x1-mcq-p1-q06",
          question:
            "Each interior angle of a regular polygon is 156°. How many sides does it have?",
          options: ["15", "12", "14", "24"],
          answerIndex: 0,
          explanation:
            "The exterior angle is 180° − 156° = 24°, and exterior angles of any polygon sum to 360°, so the number of sides is 360 ÷ 24 = 15. Choosing 24 confuses the exterior angle with the number of sides.",
          difficulty: "core",
          hints: [
            "It is easier to work with the EXTERIOR angle. How is it related to the interior angle?",
            "Exterior angle = 180° − 156°.",
            "The exterior angles of any polygon add up to 360°, so divide.",
          ],
          strategy: "work backwards",
        },
        {
          id: "x1-mcq-p1-q07",
          question:
            "In a right-angled triangle the hypotenuse is 12 cm and one angle is 38°. What is the length of the side opposite the 38° angle, to 2 decimal places?",
          options: ["7.39 cm", "9.46 cm", "15.36 cm", "19.49 cm"],
          answerIndex: 0,
          explanation:
            "sin 38° = opposite ÷ hypotenuse, so opposite = 12 × sin 38° = 12 × 0.6157... = 7.39 cm. Using cos gives 9.46 cm (that is the adjacent side), and dividing instead of multiplying gives the two longer distractors — impossible anyway, since no side can exceed the hypotenuse.",
          difficulty: "core",
          hints: [
            "Label the sides from the 38° angle: which side do you want, and which do you know?",
            "You know the hypotenuse and want the opposite — SOH: sin = opp/hyp.",
            "Rearrange to opposite = 12 × sin 38°. Sense-check: it must be shorter than 12 cm.",
          ],
          strategy: "draw a diagram",
        },
        {
          id: "x1-mcq-p1-q08",
          question:
            "A bag contains 3 red and 5 blue counters. Two counters are taken out at random without replacement. What is the probability that both are blue?",
          options: ["5/14", "25/64", "15/56", "5/8"],
          answerIndex: 0,
          explanation:
            "P(blue, blue) = 5/8 × 4/7 = 20/56 = 5/14. The second fraction must change because a counter has been removed — 25/64 wrongly keeps 5/8 for both picks (with replacement), 15/56 is P(red then blue), and 5/8 is just the first pick.",
          difficulty: "core",
          hints: [
            "\"Without replacement\" means the bag changes after the first pick.",
            "P(first blue) = 5/8. After removing a blue, how many blues and how many counters are left?",
            "Multiply along the branch: 5/8 × 4/7, then simplify.",
          ],
          strategy: "draw a diagram",
        },
        {
          id: "x1-mcq-p1-q09",
          question:
            "The mean of four numbers is 7.5. When a fifth number is added, the mean becomes 8. What is the fifth number?",
          options: ["10", "8", "9.5", "2"],
          answerIndex: 0,
          explanation:
            "Four numbers with mean 7.5 sum to 30; five numbers with mean 8 sum to 40. The fifth number is 40 − 30 = 10. Answering 8 assumes the new number equals the new mean; totals, not means, are what you can add.",
          difficulty: "core",
          hints: [
            "You cannot work with means directly — convert to totals.",
            "Total of the four numbers = 4 × 7.5. Total of all five = 5 × 8.",
            "The fifth number is the difference between the two totals.",
          ],
          strategy: "introduce a variable",
        },
        {
          id: "x1-mcq-p1-q10",
          question:
            "Line L passes through (2, 5) and (−1, 11). What is the gradient of a line perpendicular to L?",
          options: ["1/2", "−2", "2", "−1/2"],
          answerIndex: 0,
          explanation:
            "Gradient of L = (11 − 5)/(−1 − 2) = 6/(−3) = −2. Perpendicular gradients multiply to −1, so the answer is the negative reciprocal: 1/2. Choosing −2 finds L's own gradient; 2 or −1/2 come from flipping or negating but not both.",
          difficulty: "core",
          hints: [
            "First find the gradient of L itself: change in y over change in x.",
            "Watch the signs: (11 − 5)/(−1 − 2).",
            "For a perpendicular line, take the negative reciprocal — flip the fraction AND change the sign.",
          ],
          strategy: "break it into pieces",
        },
        {
          id: "x1-mcq-p1-q11",
          question: "Simplify fully (√48 + √27)/√3.",
          options: ["7", "7√3", "5", "√75"],
          answerIndex: 0,
          explanation:
            "√48 = 4√3 and √27 = 3√3, so the numerator is 7√3. Dividing by √3 gives exactly 7 — a pleasingly whole answer. 7√3 forgets the final division, and you cannot just add 48 + 27 under one root (√75 is wrong because √a + √b ≠ √(a+b)).",
          difficulty: "challenge",
          hints: [
            "Simplify each surd first by pulling out the largest square factor.",
            "48 = 16 × 3 and 27 = 9 × 3.",
            "Collect like surds in the numerator, then use √3 ÷ √3 = 1.",
          ],
          strategy: "look for structure",
        },
        {
          id: "x1-mcq-p1-q12",
          question:
            "A rectangle has length (x + 7) cm and width (x + 1) cm, and its area is 40 cm². What is its perimeter?",
          options: ["28 cm", "26 cm", "40 cm", "22 cm"],
          answerIndex: 0,
          explanation:
            "Area: (x + 7)(x + 1) = x² + 8x + 7 = 40, so x² + 8x − 33 = 0, which factorises as (x + 11)(x − 3) = 0. Lengths must be positive, so x = 3, giving sides 10 cm and 4 cm. Perimeter = 2(10 + 4) = 28 cm. Answering 40 confuses area with perimeter; 22 comes from adding only two sides plus x-slips.",
          difficulty: "challenge",
          hints: [
            "Turn the area fact into an equation: (x + 7)(x + 1) = 40.",
            "Expand, move everything to one side, and factorise the quadratic.",
            "One root is negative — why must you reject it? Then find the actual side lengths before the perimeter.",
          ],
          strategy: "introduce a variable",
        },
      ],
    },
    {
      id: "x1-mcq-paper-2",
      title: "Mock Exam 1 — Paper 2 (Multiple Choice)",
      questions: [
        {
          id: "x1-mcq-p2-q01",
          question: "What is the highest common factor (HCF) of 84 and 120?",
          options: ["12", "6", "24", "840"],
          answerIndex: 0,
          explanation:
            "84 = 2² × 3 × 7 and 120 = 2³ × 3 × 5. Taking the lowest power of each shared prime: 2² × 3 = 12. 6 misses a factor of 2, 24 uses 2³ which 84 does not have, and 840 is the LCM, not the HCF.",
          difficulty: "warmup",
        },
        {
          id: "x1-mcq-p2-q02",
          question:
            "£360 is shared between three people in the ratio 2 : 3 : 4. How much does the person with the largest share receive?",
          options: ["£160", "£120", "£90", "£40"],
          answerIndex: 0,
          explanation:
            "There are 2 + 3 + 4 = 9 parts, so one part is £360 ÷ 9 = £40. The largest share is 4 × £40 = £160. £40 is just one part and £120 is the middle share.",
          difficulty: "warmup",
        },
        {
          id: "x1-mcq-p2-q03",
          question: "P = {2, 3, 5, 7, 11} and Q = {1, 3, 5, 7, 9}. What is P ∩ Q?",
          options: ["{3, 5, 7}", "{1, 2, 3, 5, 7, 9, 11}", "{2, 11}", "{1, 9}"],
          answerIndex: 0,
          explanation:
            "The intersection P ∩ Q contains the elements in BOTH sets: 3, 5 and 7. The long list is the union P ∪ Q, {2, 11} is P without Q, and {1, 9} is Q without P.",
          difficulty: "warmup",
        },
        {
          id: "x1-mcq-p2-q04",
          question:
            "£2000 is invested at 3% per annum compound interest. What is the value of the investment after 3 years?",
          options: ["£2185.45", "£2180.00", "£2060.00", "£2247.20"],
          answerIndex: 0,
          explanation:
            "Compound growth uses a multiplier: 2000 × 1.03³ = 2000 × 1.092727 = £2185.45. £2180 is simple interest (3 × £60 added), and £2060 is only one year's growth.",
          difficulty: "core",
          hints: [
            "Each year the whole balance grows by 3% — find the yearly multiplier.",
            "The multiplier is 1.03, applied 3 times.",
            "Compute 2000 × 1.03³ in one go on your calculator.",
          ],
          strategy: "use a multiplier",
        },
        {
          id: "x1-mcq-p2-q05",
          question: "f(x) = 3x − 2 and g(x) = x². What is fg(2)?",
          options: ["10", "16", "4", "8"],
          answerIndex: 0,
          explanation:
            "fg(2) means g first: g(2) = 4, then f(4) = 3 × 4 − 2 = 10. Doing f first gives gf(2) = g(4) = 16 — the order matters, and the function nearest the input acts first.",
          difficulty: "core",
          hints: [
            "fg(2) means f(g(2)) — which function acts on 2 first?",
            "Work out g(2) first.",
            "Now feed that result into f.",
          ],
          strategy: "work from the inside out",
        },
        {
          id: "x1-mcq-p2-q06",
          question: "Solve the inequality 5 − 2x > 11.",
          options: ["x < −3", "x > −3", "x < 3", "x > 3"],
          answerIndex: 0,
          explanation:
            "Subtract 5: −2x > 6. Dividing by −2 REVERSES the inequality: x < −3. Check with x = −4: 5 − 2(−4) = 13 > 11 ✓. Forgetting to flip the sign gives x > −3, which fails the check (x = 0 gives 5, not > 11).",
          difficulty: "core",
          hints: [
            "Rearrange as usual: get the x term alone on one side.",
            "You will need to divide by a negative number — what happens to the inequality sign?",
            "Test a value from your answer set back in the original inequality to check.",
          ],
          strategy: "test a value",
        },
        {
          id: "x1-mcq-p2-q07",
          question:
            "A, B, C and D lie on a circle in that order. Angle ABC = 78°. What is angle ADC?",
          options: ["102°", "78°", "12°", "156°"],
          answerIndex: 0,
          explanation:
            "ABCD is a cyclic quadrilateral, and opposite angles of a cyclic quadrilateral sum to 180°, so angle ADC = 180° − 78° = 102°. 156° doubles the angle (mixing this up with the angle-at-centre theorem) and 78° assumes opposite angles are equal.",
          difficulty: "core",
          hints: [
            "Four points on a circle joined in order make a special quadrilateral — which one?",
            "ABC and ADC are OPPOSITE angles of a cyclic quadrilateral.",
            "Opposite angles of a cyclic quadrilateral sum to 180°.",
          ],
          strategy: "draw a diagram",
        },
        {
          id: "x1-mcq-p2-q08",
          question:
            "A sector has radius 6 cm and angle 45°. What is its area, to 1 decimal place?",
          options: ["14.1 cm²", "28.3 cm²", "4.7 cm²", "113.1 cm²"],
          answerIndex: 0,
          explanation:
            "A sector is a fraction of the circle: (45/360) × π × 6² = (1/8) × 36π = 4.5π = 14.1 cm². 4.7 cm² is actually the arc LENGTH (1.5π), 113.1 cm² is the whole circle, and 28.3 cm² is a quarter-circle (using 90° instead of 45°).",
          difficulty: "core",
          hints: [
            "A sector is a fraction of the full circle. What fraction is 45°?",
            "Full circle area = πr². Take 45/360 of it.",
            "45/360 = 1/8, so compute 36π ÷ 8.",
          ],
          strategy: "break it into pieces",
        },
        {
          id: "x1-mcq-p2-q09",
          question:
            "a and b are the column vectors a = (3, −1) and b = (−2, 4). What is 2a − b?",
          options: ["(8, −6)", "(4, 2)", "(8, 2)", "(4, −6)"],
          answerIndex: 0,
          explanation:
            "2a = (6, −2). Subtracting b means subtracting each component: (6 − (−2), −2 − 4) = (8, −6). (4, 2) is 2a + b, and the other options each make one sign slip — subtracting a negative gives a plus.",
          difficulty: "core",
          hints: [
            "Handle each component separately.",
            "First double a: 2a = (6, −2).",
            "Now subtract b component by component — careful: 6 − (−2) is an addition in disguise.",
          ],
          strategy: "break it into pieces",
        },
        {
          id: "x1-mcq-p2-q10",
          question:
            "y is inversely proportional to the square of x, and y = 4 when x = 3. What is y when x = 2?",
          options: ["9", "6", "16/9", "24"],
          answerIndex: 0,
          explanation:
            "y = k/x², so k = y × x² = 4 × 9 = 36. When x = 2, y = 36/4 = 9. Using y = k/x (not squared) gives 6, and using DIRECT proportion to x² gives 16/9. Sense-check: x got smaller, so with inverse proportion y must get bigger.",
          difficulty: "core",
          hints: [
            "Write the relationship with a constant: y = k/x².",
            "Substitute y = 4, x = 3 to find k.",
            "Now substitute x = 2 into y = 36/x².",
          ],
          strategy: "introduce a variable",
        },
        {
          id: "x1-mcq-p2-q11",
          question:
            "The curve y = x³ − 6x² + 5 has two turning points. What are the coordinates of the minimum point?",
          options: ["(4, −27)", "(0, 5)", "(4, 27)", "(2, −11)"],
          answerIndex: 0,
          explanation:
            "dy/dx = 3x² − 12x = 3x(x − 4), which is zero at x = 0 and x = 4. For a positive cubic the first turning point (x = 0, y = 5) is the maximum and the second (x = 4) is the minimum: y = 64 − 96 + 5 = −27, so (4, −27). (0, 5) is the maximum, and (4, 27) drops the sign of y.",
          difficulty: "challenge",
          hints: [
            "Turning points happen where the gradient is zero — differentiate first.",
            "Factorise dy/dx = 3x² − 12x to find both x-values.",
            "Substitute each x back into the ORIGINAL curve for y, then decide which is the minimum (sketch the shape of a positive cubic).",
          ],
          strategy: "break it into pieces",
        },
        {
          id: "x1-mcq-p2-q12",
          question:
            "Two mathematically similar solids have surface areas 36 cm² and 81 cm². The smaller solid has volume 40 cm³. What is the volume of the larger solid?",
          options: ["135 cm³", "90 cm³", "60 cm³", "202.5 cm³"],
          answerIndex: 0,
          explanation:
            "Area ratio 36 : 81 = 4 : 9, so the length scale factor is √(9/4) = 3/2, and the volume scale factor is (3/2)³ = 27/8. Volume = 40 × 27/8 = 135 cm³. 90 cm³ wrongly applies the area ratio 9/4 to volume, and 60 cm³ uses the length factor 3/2 — each measure needs its own power of the scale factor.",
          difficulty: "challenge",
          hints: [
            "Similar solids: area scales with (length factor)², volume with (length factor)³.",
            "From the areas, find the LENGTH scale factor first — take a square root.",
            "Cube that length factor and apply it to 40 cm³.",
          ],
          strategy: "look for structure",
        },
      ],
    },
  ],
  qaPapers: [
    {
      id: "x1-qa-paper-3",
      title: "Mock Exam 1 — Paper 3 (Written)",
      questions: [
        {
          id: "x1-qa-p3-q01",
          question:
            "A recipe for 12 biscuits uses 180 g of flour. How much flour is needed for 30 biscuits?",
          modelAnswer:
            "Flour per biscuit = 180 ÷ 12 = 15 g. For 30 biscuits: 30 × 15 = 450 g. (Or: scale factor = 30/12 = 2.5, so 180 × 2.5 = 450 g.)",
          markScheme: ["450", "15 g per biscuit", "scale factor 2.5", "unitary"],
          commonError:
            "Adding the difference in biscuits to the grams (e.g. 180 + 18 = 198 g) instead of scaling proportionally.",
          difficulty: "warmup",
        },
        {
          id: "x1-qa-p3-q02",
          question: "Solve 4(x − 3) = 2x + 7.",
          modelAnswer:
            "Expand: 4x − 12 = 2x + 7. Subtract 2x: 2x − 12 = 7. Add 12: 2x = 19. Divide by 2: x = 9.5. Check: 4(9.5 − 3) = 4 × 6.5 = 26 and 2(9.5) + 7 = 26 ✓.",
          markScheme: ["9.5", "4x − 12", "2x = 19", "expand"],
          commonError:
            "Expanding 4(x − 3) as 4x − 3 — the 4 must multiply BOTH terms inside the bracket.",
          difficulty: "warmup",
        },
        {
          id: "x1-qa-p3-q03",
          question:
            "Work out (3.2 × 10^5) × (4.5 × 10^-2). Give your answer in standard form.",
          modelAnswer:
            "Multiply the number parts: 3.2 × 4.5 = 14.4. Add the powers: 10^5 × 10^-2 = 10^3. So the product is 14.4 × 10^3 — but 14.4 is not between 1 and 10, so adjust: 14.4 × 10^3 = 1.44 × 10^4.",
          markScheme: ["1.44 × 10^4", "14.4", "add the powers", "14400"],
          commonError:
            "Leaving the answer as 14.4 × 10^3, which is not standard form because 14.4 ≥ 10.",
          difficulty: "core",
          hints: [
            "Multiply the number parts and the powers of 10 separately.",
            "For the powers, use 10^a × 10^b = 10^(a+b).",
            "Check your final answer: the first number must be at least 1 and less than 10.",
          ],
          strategy: "break it into pieces",
        },
        {
          id: "x1-qa-p3-q04",
          question: "Solve the simultaneous equations 3x + 2y = 19 and x − y = 3.",
          modelAnswer:
            "From x − y = 3, x = y + 3. Substitute: 3(y + 3) + 2y = 19, so 5y + 9 = 19, 5y = 10, y = 2. Then x = 2 + 3 = 5. Check in the first equation: 3(5) + 2(2) = 19 ✓. Answer: x = 5, y = 2.",
          markScheme: ["x = 5", "y = 2", "substitution", "elimination"],
          commonError:
            "Substituting x = y + 3 but only multiplying the y by 3, getting 3y + 3 + 2y = 19 instead of 3y + 9 + 2y = 19.",
          difficulty: "core",
          hints: [
            "You need to remove one unknown. The second equation is very easy to rearrange.",
            "Write x = y + 3 and substitute it into the first equation — or multiply the second equation by 2 and add, so the y terms cancel.",
            "Once you have one value, substitute back to find the other, and check BOTH values in the equation you did not use.",
          ],
          strategy: "eliminate an unknown",
          solutions: [
            {
              label: "Substitution method",
              steps: [
                "Rearrange the simpler equation: x − y = 3 gives x = y + 3.",
                "Substitute into 3x + 2y = 19: 3(y + 3) + 2y = 19.",
                "Expand and collect: 3y + 9 + 2y = 19, so 5y = 10 and y = 2.",
                "Back-substitute: x = 2 + 3 = 5.",
                "Check: 3(5) + 2(2) = 15 + 4 = 19 ✓.",
              ],
            },
            {
              label: "Elimination method (the slick one — no fractions, no rearranging)",
              steps: [
                "Multiply the second equation by 2: 2x − 2y = 6.",
                "Add it to 3x + 2y = 19 — the y terms cancel immediately: 5x = 25.",
                "So x = 5, and from x − y = 3 we get y = 2.",
                "Check: 3(5) + 2(2) = 19 ✓. Spotting that +2y and −2y can be made to cancel saves all the substitution work.",
              ],
            },
          ],
        },
        {
          id: "x1-qa-p3-q05",
          question:
            "A 6.5 m ladder leans against a vertical wall, with its foot 2.5 m from the base of the wall on horizontal ground. (a) How far up the wall does the ladder reach? (b) What angle does the ladder make with the ground, to 1 decimal place?",
          modelAnswer:
            "(a) By Pythagoras: height² = 6.5² − 2.5² = 42.25 − 6.25 = 36, so height = √36 = 6 m. (b) cos θ = adjacent/hypotenuse = 2.5/6.5, so θ = cos⁻¹(2.5/6.5) = 67.4° (1 d.p.). (Equivalently tan⁻¹(6/2.5) = 67.4°.)",
          markScheme: ["6", "67.4", "Pythagoras", "cos", "42.25 − 6.25"],
          commonError:
            "Adding the squares instead of subtracting — the ladder is the hypotenuse, so its square is the LARGEST and the other squares are subtracted from it.",
          difficulty: "core",
          hints: [
            "Sketch it: the wall, the ground and the ladder form a right-angled triangle. Which side is the hypotenuse?",
            "Part (a): the ladder is the hypotenuse, so use 6.5² − 2.5², not a sum.",
            "Part (b): from the ground angle you know the adjacent (2.5) and the hypotenuse (6.5) — which trig ratio uses those?",
          ],
          strategy: "draw a diagram",
        },
        {
          id: "x1-qa-p3-q06",
          question:
            "The table shows the times, t minutes, that 20 customers waited: 0 < t ≤ 10, frequency 6; 10 < t ≤ 20, frequency 9; 20 < t ≤ 40, frequency 5. Calculate an estimate for the mean waiting time.",
          modelAnswer:
            "Use midpoints: 5, 15 and 30. Estimated total = 6×5 + 9×15 + 5×30 = 30 + 135 + 150 = 315 minutes. Mean ≈ 315 ÷ 20 = 15.75 minutes. It is an estimate because we assume every customer waited the midpoint time of their class.",
          markScheme: ["15.75", "midpoints", "315", "divide by 20"],
          commonError:
            "Dividing by 3 (the number of rows) instead of 20 (the total frequency), or using class endpoints instead of midpoints.",
          difficulty: "core",
          hints: [
            "You do not know each exact time — what single value best represents each class?",
            "Multiply each midpoint by its frequency and total these.",
            "Divide by the TOTAL number of customers, not the number of classes.",
          ],
          strategy: "use representative values",
        },
        {
          id: "x1-qa-p3-q07",
          question:
            "A, B and C are points on a circle with centre O, with C on the major arc. Angle AOB = (4x + 10)° and angle ACB = (x + 35)°. Find x, and hence the size of angle AOB.",
          modelAnswer:
            "The angle at the centre is twice the angle at the circumference standing on the same arc AB: 4x + 10 = 2(x + 35). So 4x + 10 = 2x + 70, giving 2x = 60 and x = 30. Then angle AOB = 4(30) + 10 = 130°. Check: angle ACB = 30 + 35 = 65°, and 2 × 65° = 130° ✓.",
          markScheme: ["x = 30", "130", "angle at centre", "twice", "4x + 10 = 2(x + 35)"],
          commonError:
            "Writing 2(4x + 10) = x + 35 — doubling the wrong angle. It is the CENTRE angle that is twice the circumference angle, not the other way round.",
          difficulty: "challenge",
          hints: [
            "Both angles stand on the same arc AB — which circle theorem links an angle at the centre with one at the circumference?",
            "Angle at centre = 2 × angle at circumference. Be careful which expression gets doubled.",
            "Set up 4x + 10 = 2(x + 35) and solve — then remember the question asks for the ANGLE, not just x.",
          ],
          strategy: "translate geometry into algebra",
        },
        {
          id: "x1-qa-p3-q08",
          question:
            "A bag contains n sweets, of which 6 are orange and the rest are lemon. Two sweets are taken at random without replacement. The probability that both sweets are orange is 1/3. (a) Show that n² − n − 90 = 0. (b) Find n.",
          modelAnswer:
            "(a) P(both orange) = 6/n × 5/(n − 1) = 30/(n(n − 1)) = 1/3. Cross-multiplying: 90 = n(n − 1), so n² − n = 90 and n² − n − 90 = 0, as required. (b) Factorise: (n − 10)(n + 9) = 0, so n = 10 or n = −9. A bag cannot contain −9 sweets, so n = 10. Check: 6/10 × 5/9 = 30/90 = 1/3 ✓.",
          markScheme: ["n = 10", "6/n × 5/(n − 1)", "30/(n(n − 1)) = 1/3", "factorise", "(n − 10)(n + 9)"],
          commonError:
            "Using 6/n × 6/n for both picks — after one orange sweet is taken, only 5 oranges and n − 1 sweets remain.",
          difficulty: "challenge",
          hints: [
            "Write the probability of the first sweet being orange, then the second GIVEN the first was orange — the bag has changed.",
            "Multiply the two fractions and set the product equal to 1/3.",
            "Cross-multiply and rearrange into the required quadratic. For (b), factorise: which two numbers multiply to −90 and differ by 1?",
            "One root is impossible in context — say why you reject it.",
          ],
          strategy: "introduce a variable",
        },
      ],
    },
    {
      id: "x1-qa-paper-4",
      title: "Mock Exam 1 — Paper 4 (Written)",
      questions: [
        {
          id: "x1-qa-p4-q01",
          question:
            "In a class of 30 students, 18 like tea, 15 like coffee and 6 like neither. (a) How many students like both tea and coffee? (b) A student is chosen at random. What is the probability they like both drinks?",
          modelAnswer:
            "(a) 30 − 6 = 24 students like at least one drink. Both = 18 + 15 − 24 = 9. (A Venn diagram with 9 in the overlap, 9 tea-only, 6 coffee-only and 6 outside sums to 30 ✓.) (b) P(both) = 9/30 = 3/10.",
          markScheme: ["9", "3/10", "18 + 15 − 24", "Venn"],
          commonError:
            "Forgetting the 6 who like neither and computing 18 + 15 − 30 = 3 for the overlap.",
          difficulty: "warmup",
        },
        {
          id: "x1-qa-p4-q02",
          question:
            "The arithmetic sequence 7, 11, 15, 19, ... continues forever. (a) Find an expression for the nth term. (b) Is 130 a term of the sequence? Justify your answer.",
          modelAnswer:
            "(a) The common difference is 4, so the nth term is 4n + 3 (check: n = 1 gives 7 ✓). (b) Solve 4n + 3 = 130: 4n = 127, n = 31.75. Since n must be a whole number, 130 is NOT a term of the sequence.",
          markScheme: ["4n + 3", "no", "31.75", "not a whole number"],
          commonError:
            "Writing the nth term as n + 4 because \"it goes up by 4\" — the common difference multiplies n; the constant is found by checking the first term.",
          difficulty: "warmup",
        },
        {
          id: "x1-qa-p4-q03",
          question:
            "A car bought for £18,000 depreciates by 12% each year. Calculate its value after 3 years, to the nearest pound.",
          modelAnswer:
            "Each year the car keeps 100% − 12% = 88% of its value, so the multiplier is 0.88. Value = 18000 × 0.88³ = 18000 × 0.681472 = £12,266.496 ≈ £12,266 to the nearest pound.",
          markScheme: ["12266", "0.88", "multiplier", "18000 × 0.88³"],
          commonError:
            "Subtracting 12% of £18,000 three times (£18,000 − 3 × £2,160 = £11,520) — depreciation compounds, so each year's 12% is taken from a smaller value.",
          difficulty: "core",
          hints: [
            "If the car loses 12%, what percentage does it KEEP each year?",
            "Turn that into a decimal multiplier and apply it once per year.",
            "18000 × 0.88 × 0.88 × 0.88 — or use the power button. Round only at the end.",
          ],
          strategy: "use a multiplier",
        },
        {
          id: "x1-qa-p4-q04",
          question: "Simplify fully (x² − 9)/(x² + 5x + 6).",
          modelAnswer:
            "Factorise top and bottom. Numerator: x² − 9 = (x − 3)(x + 3) (difference of two squares). Denominator: x² + 5x + 6 = (x + 2)(x + 3). Cancel the common factor (x + 3): the fraction simplifies to (x − 3)/(x + 2).",
          markScheme: ["(x − 3)/(x + 2)", "factorise", "difference of two squares", "(x + 3)"],
          commonError:
            "\"Cancelling\" the x² terms or the individual numbers across the fraction — you can only cancel whole FACTORS, so factorise first.",
          difficulty: "core",
          hints: [
            "You cannot cancel terms in an unfactorised fraction — factorise top and bottom first.",
            "The numerator is a difference of two squares.",
            "For the denominator, find two numbers that multiply to 6 and add to 5, then cancel the shared bracket.",
          ],
          strategy: "look for structure",
        },
        {
          id: "x1-qa-p4-q05",
          question:
            "OAB is a triangle with OA = a and OB = b (vectors from O). M is the midpoint of AB. (a) Find AB in terms of a and b. (b) Show that OM = ½(a + b).",
          modelAnswer:
            "(a) AB = AO + OB = −a + b = b − a. (b) OM = OA + AM = a + ½AB = a + ½(b − a) = a + ½b − ½a = ½a + ½b = ½(a + b). This is the position vector of the midpoint — the average of the two endpoint vectors.",
          markScheme: ["b − a", "½(a + b)", "a + ½(b − a)", "midpoint"],
          commonError:
            "Writing AB = a − b: to travel from A to B you go BACKWARDS along a (−a) and then along b, giving b − a.",
          difficulty: "core",
          hints: [
            "For AB, describe a route from A to B using O as a staging post.",
            "AB = AO + OB, and AO is the reverse of OA.",
            "For OM, route O → A → M, where AM is half of AB. Then collect the a terms.",
          ],
          strategy: "find a route",
        },
        {
          id: "x1-qa-p4-q06",
          question:
            "The curve C has equation y = x² − 4x + 1. (a) Find dy/dx. (b) Find the gradient of C at the point where x = 3. (c) Find the coordinates of the turning point of C and state whether it is a maximum or a minimum.",
          modelAnswer:
            "(a) dy/dx = 2x − 4. (b) At x = 3: gradient = 2(3) − 4 = 2. (c) At a turning point dy/dx = 0: 2x − 4 = 0, so x = 2, and y = 4 − 8 + 1 = −3. The turning point is (2, −3). Since the x² coefficient is positive the parabola opens upwards, so it is a minimum.",
          markScheme: ["2x − 4", "2", "(2, −3)", "minimum"],
          commonError:
            "Substituting x = 2 into dy/dx to find the y-coordinate — the y-value comes from the ORIGINAL equation, not the derivative (which is 0 there by definition).",
          difficulty: "core",
          hints: [
            "Differentiate term by term: multiply by the power, reduce the power by 1. Constants vanish.",
            "For (b), the gradient at a point is dy/dx evaluated at that x.",
            "For (c), set dy/dx = 0, solve for x, then substitute into the original equation for y. Think about the shape of y = x² − ... to classify it.",
          ],
          strategy: "break it into pieces",
        },
        {
          id: "x1-qa-p4-q07",
          question:
            "In triangle ABC, AB = 8 cm, AC = 11 cm and angle BAC = 62°. (a) Calculate the length of BC, to 1 decimal place. (b) Calculate the area of triangle ABC, to 1 decimal place.",
          modelAnswer:
            "(a) Cosine rule: BC² = 8² + 11² − 2 × 8 × 11 × cos 62° = 64 + 121 − 176 × 0.46947... = 185 − 82.63 = 102.37, so BC = √102.37 = 10.1 cm (1 d.p.). (b) Area = ½ × 8 × 11 × sin 62° = 44 × 0.88295... = 38.8 cm² (1 d.p.).",
          markScheme: ["10.1", "38.8", "cosine rule", "½ab sin C", "102.37"],
          commonError:
            "Using Pythagoras or SOHCAHTOA — the triangle has no right angle, so you need the cosine rule and the ½ab sin C area formula. Also beware rounding 102.37 before square-rooting.",
          difficulty: "challenge",
          hints: [
            "There is no right angle here — which rules work in ANY triangle?",
            "You know two sides and the angle BETWEEN them: that is exactly the setup for the cosine rule.",
            "For the area, the same two sides and included angle fit the formula ½ab sin C.",
            "Keep full calculator accuracy until the final rounding.",
          ],
          strategy: "choose the right tool",
        },
        {
          id: "x1-qa-p4-q08",
          question:
            "A rectangle has perimeter 26 cm and area 40 cm². Find the length and width of the rectangle.",
          modelAnswer:
            "Let the sides be x and y. Perimeter: 2(x + y) = 26, so x + y = 13. Area: xy = 40. Then y = 13 − x, so x(13 − x) = 40, giving x² − 13x + 40 = 0, which factorises as (x − 5)(x − 8) = 0. So x = 5 or x = 8, and the sides are 8 cm and 5 cm. Check: 2(8 + 5) = 26 ✓ and 8 × 5 = 40 ✓.",
          markScheme: ["8", "5", "x² − 13x + 40 = 0", "x + y = 13", "factorise"],
          commonError:
            "Setting x + y = 26 — the perimeter is TWICE the sum of the two different sides, so the semi-perimeter 13 is what x + y equals.",
          difficulty: "challenge",
          hints: [
            "Two unknowns need two equations — translate the perimeter fact and the area fact separately.",
            "Careful with the perimeter: 2(x + y) = 26, so what is x + y?",
            "Substitute y = 13 − x into xy = 40 and rearrange into a quadratic.",
            "You want two numbers that ADD to 13 and MULTIPLY to 40 — that thought alone can crack it.",
          ],
          strategy: "introduce a variable",
          solutions: [
            {
              label: "Algebraic method (simultaneous equations)",
              steps: [
                "Let the sides be x and y. Perimeter gives 2(x + y) = 26, so x + y = 13; area gives xy = 40.",
                "Substitute y = 13 − x into xy = 40: x(13 − x) = 40.",
                "Rearrange: x² − 13x + 40 = 0, and factorise: (x − 5)(x − 8) = 0.",
                "So x = 5 or x = 8 — the two roots are the two sides: 8 cm by 5 cm.",
                "Check: perimeter 2(13) = 26 ✓, area 40 ✓.",
              ],
            },
            {
              label: "Sum-and-product method (the elegant one)",
              steps: [
                "The perimeter says the two sides ADD to 13; the area says they MULTIPLY to 40.",
                "So the sides are exactly the pair of numbers with sum 13 and product 40 — the same pair you hunt for when factorising a quadratic.",
                "Run through factor pairs of 40: 1 & 40, 2 & 20, 4 & 10, 5 & 8. Only 5 & 8 sum to 13.",
                "The rectangle is 8 cm by 5 cm. This is the quadratic method with the machinery stripped away — sum and product determine the pair completely.",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default exam;
