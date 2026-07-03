import type { Topic } from "../types";

const topic: Topic = {
  id: "ratio",
  title: "Ratio, Percentages & Proportion",
  subject: "Maths",
  icon: "⚖️",
  intro:
    "Ratio, percentages and proportion are the engine room of IGCSE Higher: they power money questions, science formulas, best-buy comparisons and some of the sneakiest exam traps (looking at you, reverse percentages). In this topic you will learn to share and combine ratios, drive every percentage question with a single multiplier, run compound interest forwards and backwards, set up proportion equations with a constant k, and handle speed, density and pressure like a physicist. Expect a few problems designed to fool you — spotting the trap is half the fun.",
  guide: [
    {
      heading: "Ratios: sharing, combining, and fractions",
      body:
        "A ratio compares parts. The ratio 3:5 says that for every 3 of one thing there are 5 of the other — so out of every **8** items, 3/8 are the first kind and 5/8 are the second.\n\n**Sharing in a ratio.** To share £72 in the ratio 3:5: add the parts (3 + 5 = 8), find one part (72 ÷ 8 = 9), then multiply up (3 × 9 = £27 and 5 × 9 = £45). Always check the shares add back to the total.\n\n**Ratio to fraction.** In the ratio a:b, the first quantity is a/(a+b) of the whole — the denominator is the TOTAL number of parts, not the other number.\n\n**Combining ratios.** If a:b = 3:4 and b:c = 6:5, you cannot just write 3:4:5 — the two 'b' numbers (4 and 6) must agree first. Scale both ratios so b becomes lcm(4, 6) = 12: a:b = 9:12 and b:c = 12:10, so a:b:c = 9:12:10.\n\n**Ratios with unknowns.** When a ratio changes after something is added or removed, write the original amounts as 3x and 5x (say), then form an equation from the new ratio. This turns a puzzle into two lines of algebra.",
      discovery: {
        problem:
          "Three friends win a prize and split it in the ratio 2:3:7. The friend with the middle share receives £57 less than the friend with the largest share. Can you find the whole prize — without knowing any share directly?",
        idea:
          "You don't need the total to start — you need the value of ONE PART. The gap between the largest and middle shares is 7 − 3 = 4 parts, and that gap is £57, so one part is £57 ÷ 4 = £14.25. The whole prize is 2 + 3 + 7 = 12 parts: 12 × £14.25 = £171. Differences of shares are differences of parts — once you can price one part, you can price anything.",
      },
      whyItWorks:
        "Sharing in the ratio 3:5 works because you are really cutting the total into 8 equal slices and handing out 3 of them and 5 of them. That is why the fraction of the whole is 3/8, not 3/5 — the 5 in '3/5' would compare the two shares to each other, which is a different (also useful) statement: the first share is 3/5 OF the second share.",
      strategies: [
        "Introduce a variable: write unknown quantities as 3x and 5x when the ratio is 3:5",
        "Work with one part: price a single part first, then scale up",
        "Draw a diagram: bar models make sharing and 'difference of shares' problems visual",
      ],
      keyPoints: [
        "To share in a ratio: add the parts, divide the total by the number of parts, multiply up.",
        "In the ratio a:b, the first quantity is a/(a+b) of the whole.",
        "To combine a:b and b:c, scale both so the b values match (use the lcm).",
        "A difference of shares is a difference of parts: in 2:7, the gap is 5 parts.",
        "When a ratio changes, let the original amounts be 3x and 5x and form an equation.",
      ],
      thinkDeeper:
        "Ratios behave like fractions in disguise: 3:5 = 6:10 = 9:15, just as 3/5 = 6/10. But ratios can chain three or more quantities (a:b:c) where a single fraction cannot. Question to ponder: if a:b = b:c (a 'continued ratio'), what does that say about b? Try a = 4, c = 9 — you should find b² = ac, so b = 6. This 'geometric mean' idea returns in similar triangles and geometric sequences.",
    },
    {
      heading: "Percentage multipliers and percentage change",
      body:
        "The single most powerful percentage idea at Higher tier is the **multiplier**.\n\n- Increase by 12% → multiply by 1.12\n- Decrease by 12% → multiply by 0.88\n- Increase by 3.5% → multiply by 1.035\n- Decrease by 3.5% → multiply by 0.965\n\nOne multiplication replaces the two-step 'find the percentage, then add or subtract' — and multipliers are the only sane way to handle repeated change and reverse percentages later.\n\n**Percentage of an amount.** 15% of £360 = 0.15 × 360 = £54. Without a calculator, build it from 10% (£36) and 5% (£18).\n\n**Percentage change.** percentage change = (change ÷ ORIGINAL) × 100. A price going from £64 to £80 is a change of £16 on an original of £64, so a 25% increase. The original is always the denominator — the 'before' value, not the 'after'.\n\n**Chaining changes.** An 8% rise followed by 10% off is the multiplier 1.08 × 0.90 = 0.972 — an overall 2.8% DECREASE. Percentage changes multiply; they never simply add.",
      discovery: {
        problem:
          "A shop raises a price by 20%, then puts it in a '20% off' sale. A customer says the price is back where it started. The shopkeeper disagrees. Who is right — and can you settle it without picking an actual price?",
        idea:
          "The shopkeeper. Up 20% is ×1.2; down 20% is ×0.8; together that is ×0.96 — the price ends 4% LOWER. The trap: the second 20% is taken of a BIGGER number than the first, so it removes more than the rise added. Multipliers settle it in one line, no example price needed.",
      },
      whyItWorks:
        "Why is 'increase by 12%' the same as '× 1.12'? Because the new amount is 100% of the old plus 12% of the old = 112% of the old, and 112% means 112/100 = 1.12. Every percentage statement is secretly a statement about hundredths, and collecting '100% + change' into one number is just factorising: x + 0.12x = 1.12x.",
      strategies: [
        "Turn every percentage instruction into a single multiplier before calculating",
        "Try small cases: test a claim about percentages with £100 to see what's really happening",
        "Look for invariants: chained percentage changes combine by multiplying the multipliers",
      ],
      keyPoints: [
        "r% increase → multiplier 1 + r/100; r% decrease → multiplier 1 − r/100.",
        "Percentage change = change ÷ original × 100 — divide by the BEFORE value.",
        "Successive changes multiply: ×1.08 then ×0.90 is ×0.972 overall.",
        "+20% then −20% is ×0.96 — a 4% decrease, not a return to the start.",
        "Non-calculator: build percentages from 10%, 5% and 1% blocks.",
      ],
    },
    {
      heading: "Reverse percentages: working backwards",
      body:
        "A reverse percentage question gives you the AFTER value and asks for the BEFORE value. The give-away words: 'after a 20% increase, the price is...', 'in a sale everything is reduced by 15%; the sale price is...'.\n\n**The method:** identify the multiplier, then DIVIDE by it.\n\n- After a 20% increase the price is £96. Original = 96 ÷ 1.2 = £80.\n- After a 15% reduction the sale price is £61.20. Original = 61.20 ÷ 0.85 = £72.\n\n**The classic trap** is to take the percentage of the new price: 20% of £96 is £19.20, and 96 − 19.20 = £76.80 — wrong, because the 20% in the question was 20% of the ORIGINAL (£80), which is £16, not £19.20.\n\nAlways sanity-check by going forwards: does £80 × 1.2 give £96? Yes — done. That forwards check takes five seconds and catches the trap every time.",
      discovery: {
        problem:
          "A jacket costs £61.20 in a '15% off' sale. Zara works out 15% of £61.20 (£9.18), adds it back on, and announces the original price was £70.38. The label says the original price was £72. Where did Zara's method go wrong — she used the right percentage, didn't she?",
        idea:
          "She used the right percentage of the WRONG amount. The 15% that was removed was 15% of the original £72 (which is £10.80), not 15% of the sale price. Adding back a percentage of the reduced price never undoes taking a percentage of the original price. The reliable route is to undo the multiplication: sale price = original × 0.85, so original = 61.20 ÷ 0.85 = £72.",
      },
      whyItWorks:
        "If new = original × m, then dividing both sides by m gives original = new ÷ m. Reverse percentages are just solving a one-step equation — the multiplier turned the question into algebra, and division is the inverse of multiplication. That is exactly why the multiplier habit matters: '−15% then +15%' are NOT inverse operations, but '×0.85 then ÷0.85' are.",
      strategies: [
        "Work backwards: undo × m with ÷ m",
        "Introduce a variable: let the original price be x and write x × m = final",
        "Check by going forwards: multiply your answer by the multiplier and compare",
      ],
      keyPoints: [
        "Reverse percentage: divide the final amount by the multiplier.",
        "After +20%: divide by 1.2. After −15%: divide by 0.85.",
        "Never take the percentage of the final amount — the r% was r% of the original.",
        "'Price including 20% VAT is £330' → pre-VAT price = 330 ÷ 1.2 = £275.",
      ],
      thinkDeeper:
        "What single percentage decrease exactly undoes a 25% increase? You need m with 1.25 × m = 1, so m = 0.8 — a 20% decrease. In general, a p% rise is undone by a fall of 100p/(100+p) %, which is always LESS than p. That asymmetry (gains and losses of equal percentage are not symmetric) is a big deal in finance: lose 50% and you need +100% just to break even.",
    },
    {
      heading: "Compound interest and depreciation",
      body:
        "**Simple interest** pays the same amount every year: interest = P × r/100 × n. £800 at 4.5% simple for 6 years earns 800 × 0.045 × 6 = £216. Growth is a straight line.\n\n**Compound interest** pays interest on the interest. Each year multiplies the CURRENT balance by the same multiplier, so after n years:\n\n**amount = P × (1 + r/100)^n**\n\n£2000 at 3% compound for 4 years: 2000 × 1.03^4 = £2251.02. Growth is a curve that steepens — exponential growth.\n\n**Depreciation** is compound DECAY: a van worth £24,000 losing 18% a year is worth 24000 × 0.82³ = £13,232.83 after 3 years. Note the multiplier is 0.82, and it is raised to the power — never multiply the percentage loss by the number of years.\n\n**Finding n.** 'After how many years does £5000 at 4% first exceed £6000?' means finding the smallest n with 1.04^n > 1.2. At Higher tier, use systematic trial: 1.04^4 = 1.1699 (not enough), 1.04^5 = 1.2167 (enough) — so n = 5. Show the powers either side of the target: that is what earns the marks.",
      discovery: {
        problem:
          "Two banks compete for your £1000. Bank Linear pays a flat £60 every year (6% simple). Bank Snowball pays 5% compound — less per cent, and a smaller payout in year one. Your friend says Linear obviously wins forever, since 6 beats 5 every single year. Will Snowball ever catch up?",
        idea:
          "Yes — inevitably. Linear adds the SAME £60 each year; Snowball's payment grows every year because it earns interest on past interest. Trial shows Snowball's balance (1000 × 1.05^n) passes Linear's (1000 + 60n) between years 15 and 16: at n = 15, £2078.93 vs £1900. Any compound growth eventually overtakes any straight line — exponential beats linear in the long run, always.",
      },
      whyItWorks:
        "Where does P(1 + r/100)^n come from? Each year is one application of the same multiplier m = 1 + r/100. After one year: Pm. After two: (Pm)m = Pm². After n years the multiplier has been applied n times: Pm^n. The formula is nothing more than 'repeated percentage change written with an index' — the same reason chained sale-and-rise problems multiplied their multipliers.",
      strategies: [
        "Find a pattern: write out year 1, year 2, year 3 and spot the power",
        "Try small cases: for 'find n', test powers systematically and bracket the target",
        "Consider extremes: over long times, compound (exponential) always beats simple (linear)",
      ],
      keyPoints: [
        "Compound amount = P × (1 + r/100)^n; depreciation uses (1 − r/100)^n.",
        "Simple interest = P × r/100 × n — linear, the same interest each year.",
        "The percentage applies to the CURRENT value each year, not the original.",
        "To find n, test powers of the multiplier and show values either side of the target.",
        "Compound interest earned = final amount − P (read the question: amount or interest?).",
      ],
      thinkDeeper:
        "A handy banker's estimate — the 'rule of 72': money at r% compound roughly doubles in 72/r years (at 6%, about 12 years; check 1.06^12 ≈ 2.01). Why 72? Doubling needs (1 + r/100)^n = 2, and logarithms show n ≈ 69/r for small r; 72 is used because it divides nicely. Try testing the rule at 8% with your calculator.",
      diagrams: [
        {
          id: "rat-diag-01",
          title: "Simple vs compound interest",
          svg: `<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph comparing simple interest, a straight line, with compound interest, a curve that starts lower but rises faster and overtakes the line."><line x1="60" y1="310" x2="600" y2="310" stroke="#64748b" stroke-width="2"/><line x1="60" y1="310" x2="60" y2="30" stroke="#64748b" stroke-width="2"/><text x="330" y="345" font-size="16" fill="#64748b" text-anchor="middle">years</text><text x="30" y="170" font-size="16" fill="#64748b" text-anchor="middle" transform="rotate(-90 30 170)">value (£)</text><line x1="60" y1="280" x2="560" y2="130" stroke="#2563eb" stroke-width="3"/><path d="M 60 280 Q 300 265 440 190 Q 520 140 560 60" fill="none" stroke="#dc2626" stroke-width="3"/><circle cx="60" cy="280" r="5" fill="#16a34a"/><text x="75" y="288" font-size="15" fill="#16a34a">same start</text><text x="430" y="240" font-size="15" fill="#2563eb">simple: adds the same each year</text><text x="300" y="90" font-size="15" fill="#dc2626">compound: multiplies each year</text><circle cx="470" cy="163" r="5" fill="#f59e0b"/><text x="330" y="150" font-size="14" fill="#f59e0b">overtakes here</text></svg>`,
          caption:
            "Simple interest grows along a straight line; compound interest curves upwards and always overtakes it eventually.",
        },
      ],
    },
    {
      heading: "Direct and inverse proportion",
      body:
        "**Direct proportion:** y ∝ x means y = kx for a constant k. Double x and y doubles; the graph is a straight line through the origin.\n\n**Other powers:** y ∝ x² means y = kx². y ∝ √x means y = k√x. **Inverse proportion:** y ∝ 1/x means y = k/x (double x, halve y), and y ∝ 1/√x means y = k/√x.\n\n**The three-step routine (always the same):**\n\n- Write the equation with k: y = kx².\n- Substitute the given pair to find k: if y = 12 when x = 2, then 12 = 4k, so k = 3.\n- Rewrite the formula (y = 3x²) and use it to answer the question: when x = 5, y = 75.\n\n**Spotting the type from data.** If y/x is constant, it's y = kx. If y × x is constant, it's y = k/x. If y/x² is constant, it's y = kx². Test the products and quotients before committing.\n\n**Real contexts:** extension of a spring ∝ mass (direct); time to finish a job ∝ 1/(number of workers) (inverse); air resistance ∝ speed²; the period of a pendulum ∝ √length.",
      discovery: {
        problem:
          "In a physics lesson you time a pendulum: length 25 cm gives a swing time of 1.0 s; length 100 cm gives 2.0 s. Quadrupling the length only DOUBLED the time. What rule connects time T and length L — and what length would give a 3-second swing?",
        idea:
          "Doubling the output when the input quadruples is the signature of a SQUARE ROOT: T ∝ √L. Then T = k√L, and T = 1 when L = 25 gives k = 0.2, so T = 0.2√L. For T = 3: √L = 15, so L = 225 cm. Real experiments hand you two data points; proportionality turns them into a formula that predicts everything else.",
      },
      whyItWorks:
        "Why does one data pair pin down the whole relationship? Because 'y ∝ x²' already fixes the SHAPE of the rule — the only freedom left is the scale factor k. One substitution finds it. This is also why proportion questions are impossible without the k step: 'y ∝ x²' is a family of formulas, and the data point selects which member of the family you have.",
      strategies: [
        "Introduce a variable: always write the equation with k before touching numbers",
        "Find a pattern: test y/x, y·x, y/x² on data pairs to identify the relationship",
        "Try small cases: check your final formula reproduces the given data point",
      ],
      keyPoints: [
        "y ∝ x² → y = kx²; y ∝ 1/x → y = k/x; y ∝ 1/√x → y = k/√x.",
        "Routine: write with k → substitute to find k → rewrite → answer.",
        "Direct: y/x constant, straight line through origin. Inverse: x·y constant.",
        "In y = kx², multiplying x by a multiplies y by a² (×1.2 on x → ×1.44 on y).",
        "Inverse proportion in context: more workers, proportionally less time (t = k/n).",
      ],
      diagrams: [
        {
          id: "rat-diag-02",
          title: "Shapes of proportion graphs",
          svg: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three small graphs: y equals k x is a straight line through the origin; y equals k x squared is a curve through the origin getting steeper; y equals k over x is a curve that falls and approaches the axes."><g><line x1="30" y1="250" x2="190" y2="250" stroke="#64748b" stroke-width="2"/><line x1="30" y1="250" x2="30" y2="60" stroke="#64748b" stroke-width="2"/><line x1="30" y1="250" x2="180" y2="80" stroke="#2563eb" stroke-width="3"/><text x="105" y="285" font-size="15" fill="#2563eb" text-anchor="middle">y = kx</text></g><g><line x1="240" y1="250" x2="400" y2="250" stroke="#64748b" stroke-width="2"/><line x1="240" y1="250" x2="240" y2="60" stroke="#64748b" stroke-width="2"/><path d="M 240 250 Q 330 245 370 90" fill="none" stroke="#16a34a" stroke-width="3"/><text x="320" y="285" font-size="15" fill="#16a34a" text-anchor="middle">y = kx²</text></g><g><line x1="450" y1="250" x2="610" y2="250" stroke="#64748b" stroke-width="2"/><line x1="450" y1="250" x2="450" y2="60" stroke="#64748b" stroke-width="2"/><path d="M 465 75 Q 475 220 600 240" fill="none" stroke="#dc2626" stroke-width="3"/><text x="530" y="285" font-size="15" fill="#dc2626" text-anchor="middle">y = k/x</text></g></svg>`,
          caption:
            "Direct proportion passes through the origin; y = kx² curves upward through the origin; inverse proportion never touches either axis.",
        },
      ],
    },
    {
      heading: "Compound measures, best value and exchange rates",
      body:
        "A **compound measure** combines two units into one, and its units tell you the formula.\n\n- **Speed** = distance ÷ time (km/h, m/s). 150 km in 2 h 30 min: time = 2.5 h (NOT 2.3), so speed = 60 km/h.\n- **Density** = mass ÷ volume (g/cm³). A 540 g block of volume 240 cm³: density = 2.25 g/cm³.\n- **Pressure** = force ÷ area (N/m²). 120 N on 0.4 m²: pressure = 300 N/m².\n\nEach comes with two rearrangements (distance = speed × time, etc.) — the units are the memory aid: km/h literally reads 'kilometres per hour', i.e. kilometres DIVIDED BY hours.\n\n**Average speed** for a whole journey is TOTAL distance ÷ TOTAL time. It is never the mean of two speeds unless the TIMES are equal — a favourite challenge trap.\n\n**Best value.** Compare like with like: work out the price per unit (per roll, per 100 g) for each option, or the amount per pound. 6 rolls for £2.70 is 45p a roll; 9 rolls for £3.96 is 44p a roll — the 9-pack wins.\n\n**Exchange rates.** If £1 = €1.15: pounds → euros MULTIPLY by 1.15; euros → pounds DIVIDE by 1.15. Sanity check the direction: €207 must be fewer pounds (£180), because each pound is worth more than a euro.",
      discovery: {
        problem:
          "Ava drives 30 km to town at 60 km/h and the same 30 km home at 40 km/h. She reckons her average speed is the comfortable middle: 50 km/h. Her satnav logged 48 km/h. The satnav isn't broken — so what did Ava's 'obvious' averaging miss?",
        idea:
          "She spent MORE TIME at the slower speed (45 min at 40 km/h vs 30 min at 60 km/h), so the slow leg drags the average down harder. Average speed = total distance ÷ total time = 60 km ÷ 1.25 h = 48 km/h. Speeds averaged over equal DISTANCES weight the slower speed more — only equal TIMES give the simple mean.",
      },
      whyItWorks:
        "Why do the units dictate the formula? 'Grams per cubic centimetre' is a rate: how many grams each single cm³ carries. Dividing total mass by total volume shares the mass equally over the volume — the same one-part idea as ratios. Every compound measure is a 'per one unit' statement, which is why best-value problems (price per roll) and exchange rates (euros per pound) are the same mathematics wearing different clothes.",
      strategies: [
        "Draw a diagram: a formula triangle or a distance-time bar sorts out rearrangements",
        "Work with one part: convert everything to 'per one unit' before comparing",
        "Consider extremes: sanity-check exchange direction — should the number get bigger or smaller?",
      ],
      keyPoints: [
        "Speed = distance/time; density = mass/volume; pressure = force/area.",
        "Convert minutes to decimal hours: 2 h 30 min = 2.5 h; 45 min = 0.75 h.",
        "Average speed = total distance ÷ total time — never the mean of the speeds.",
        "Best value: compare price per unit (or units per pound) — like with like.",
        "£1 = $1.30: pounds → dollars ×1.30; dollars → pounds ÷1.30.",
      ],
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Share £72 in the ratio 3:5 — what is the routine?",
        back: "Add the parts (3+5 = 8), divide the total by the parts (72÷8 = £9 per part), multiply up: £27 and £45. Check they sum to £72.",
      },
      {
        front: "In the ratio a:b, what fraction of the whole is the first quantity?",
        back: "a/(a+b). The denominator is the TOTAL parts. In 3:5, the first share is 3/8 of the whole (and 3/5 of the second share).",
      },
      {
        front: "Multiplier for a 3.5% increase? For a 3.5% decrease?",
        back: "Increase: ×1.035. Decrease: ×0.965. In general 1 + r/100 and 1 − r/100.",
      },
      {
        front: "Percentage change formula",
        back: "Percentage change = (change ÷ original) × 100. Always divide by the BEFORE value.",
      },
      {
        front: "Reverse percentage: after a 20% rise the price is £96. Original?",
        back: "Divide by the multiplier: 96 ÷ 1.2 = £80. Never take 20% of £96 — the 20% was of the original.",
      },
      {
        front: "Compound interest formula",
        back: "Amount = P × (1 + r/100)^n. For depreciation use (1 − r/100)^n. The interest earned is amount − P.",
      },
      {
        front: "Simple interest formula",
        back: "Interest = P × r/100 × n. Linear growth: the same interest every year, no interest on interest.",
      },
      {
        front: "A price rises 20% then falls 20%. Net effect?",
        back: "×1.2 × 0.8 = ×0.96, a 4% DECREASE overall. Successive percentage changes multiply — they never cancel by adding.",
      },
      {
        front: "y is inversely proportional to x². Write the equation, and the routine.",
        back: "y = k/x². Substitute the given pair to find k, rewrite the formula, then answer the question.",
      },
      {
        front: "y ∝ x². If x is multiplied by 1.2, what happens to y?",
        back: "y is multiplied by 1.2² = 1.44, a 44% increase. In y = kx^n, scaling x by a scales y by a^n.",
      },
      {
        front: "The three compound-measure formulas",
        back: "Speed = distance ÷ time. Density = mass ÷ volume. Pressure = force ÷ area. The units spell the formula: km/h = km ÷ h.",
      },
      {
        front: "How do you find the average speed of a two-part journey?",
        back: "Total distance ÷ total time. It is NOT the mean of the two speeds unless the times are equal.",
      },
      {
        front: "£1 = €1.15. Convert £40 to euros, and €92 to pounds.",
        back: "Pounds → euros multiply: £40 = €46. Euros → pounds divide: €92 = £80. Check the direction makes the number sensible.",
      },
    ],
    keyFacts: [
      "In the ratio 3:5 the shares are 3/8 and 5/8 of the whole.",
      "r% increase → ×(1 + r/100); r% decrease → ×(1 − r/100).",
      "Reverse percentage: DIVIDE the final amount by the multiplier.",
      "Up 20% then down 20% is ×0.96 — a 4% fall, not back to the start.",
      "Compound: P(1 + r/100)^n. Simple: interest = Prn/100. Compound is exponential, simple is linear.",
      "To find n in compound growth, test powers of the multiplier and show values either side of the target.",
      "Proportion routine: equation with k → substitute → find k → rewrite → answer.",
      "Average speed = total distance ÷ total time, never the mean of the speeds.",
      "2 h 30 min = 2.5 hours; 45 min = 0.75 hours (never 2.3 or 0.45).",
      "Best value: compare cost per single unit — like with like.",
    ],
    formulaSheet: [
      {
        name: "Percentage multiplier",
        formula: "r% increase: ×(1 + r/100);  r% decrease: ×(1 − r/100)",
        note: "Chained changes multiply their multipliers.",
      },
      {
        name: "Percentage change",
        formula: "percentage change = (change ÷ original) × 100",
        note: "Divide by the BEFORE value.",
      },
      {
        name: "Reverse percentage",
        formula: "original = final ÷ multiplier",
        note: "e.g. after +20%: divide by 1.2.",
      },
      {
        name: "Compound interest / growth",
        formula: "amount = P(1 + r/100)^n",
        note: "Depreciation/decay: amount = P(1 − r/100)^n.",
      },
      {
        name: "Simple interest",
        formula: "interest = P × r/100 × n",
      },
      {
        name: "Direct proportion",
        formula: "y ∝ x → y = kx;  y ∝ x² → y = kx²;  y ∝ √x → y = k√x",
        note: "Find k from the given data pair.",
      },
      {
        name: "Inverse proportion",
        formula: "y ∝ 1/x → y = k/x;  y ∝ 1/√x → y = k/√x",
        note: "For y = k/x the product xy is constant.",
      },
      {
        name: "Speed",
        formula: "speed = distance ÷ time",
        note: "distance = speed × time; time = distance ÷ speed.",
      },
      {
        name: "Density and pressure",
        formula: "density = mass ÷ volume;  pressure = force ÷ area",
        note: "Units: g/cm³ or kg/m³; N/m².",
      },
    ],
  },
  quiz: {
    mcq: [
      {
        id: "rat-quiz-mcq-01",
        question: "£45 is shared between two people in the ratio 2:7. How much is the smaller share?",
        options: ["£10", "£35", "£9", "£22.50"],
        answerIndex: 0,
        explanation:
          "There are 2 + 7 = 9 parts, so one part is 45 ÷ 9 = £5. The smaller share is 2 × 5 = £10. £35 is the larger share, £9 is the number of parts mistaken for pounds, and £22.50 is an equal split.",
        guideRef: "Ratios: sharing, combining, and fractions",
        difficulty: "warmup",
      },
      {
        id: "rat-quiz-mcq-02",
        question: "What is 15% of £360?",
        options: ["£54", "£24", "£306", "£5.40"],
        answerIndex: 0,
        explanation:
          "0.15 × 360 = £54 (or 10% = £36 plus 5% = £18). £306 is 360 − 54 (a 15% decrease, not 15% of), £24 is 360 ÷ 15, and £5.40 misplaces the decimal point.",
        guideRef: "Percentage multipliers and percentage change",
        difficulty: "warmup",
      },
      {
        id: "rat-quiz-mcq-03",
        question: "A price rises from £64 to £80. What is the percentage increase?",
        options: ["25%", "20%", "16%", "80%"],
        answerIndex: 0,
        explanation:
          "The change is £16 on an original of £64: 16/64 = 0.25 = 25%. Dividing by the NEW price gives 16/80 = 20% — the classic wrong denominator. 16% confuses the change in pounds with a percentage.",
        guideRef: "Percentage multipliers and percentage change",
        difficulty: "core",
        hints: [
          "Percentage change compares the change to one particular value — which one?",
          "First find the actual increase in pounds: 80 − 64.",
          "Divide that change by the ORIGINAL price, £64, then multiply by 100.",
        ],
        strategy: "use the multiplier / original as denominator",
      },
      {
        id: "rat-quiz-mcq-04",
        question: "Which multiplier represents a decrease of 3.5%?",
        options: ["0.965", "0.35", "0.65", "1.035"],
        answerIndex: 0,
        explanation:
          "A 3.5% decrease leaves 100% − 3.5% = 96.5%, i.e. ×0.965. 1.035 is a 3.5% INCREASE, 0.65 is a 35% decrease, and 0.35 keeps only 35% (a 65% decrease).",
        guideRef: "Percentage multipliers and percentage change",
        difficulty: "core",
        hints: [
          "After the decrease, what percentage of the original remains?",
          "100% − 3.5% = 96.5%. Write that as a decimal.",
          "96.5% = 96.5/100 — careful with the decimal places.",
        ],
        strategy: "turn the percentage into a multiplier",
      },
      {
        id: "rat-quiz-mcq-05",
        question: "After a 20% increase, a ticket costs £96. What was the original price?",
        options: ["£80", "£76.80", "£115.20", "£77.00"],
        answerIndex: 0,
        explanation:
          "New = original × 1.2, so original = 96 ÷ 1.2 = £80 (check: 80 × 1.2 = 96 ✓). £76.80 comes from wrongly subtracting 20% of £96; £115.20 increases £96 by 20% instead of undoing the increase.",
        guideRef: "Reverse percentages: working backwards",
        difficulty: "core",
        hints: [
          "The £96 is the AFTER value. Which operation produced it from the original?",
          "original × 1.2 = 96 — how do you undo a multiplication?",
          "Divide 96 by 1.2, then check your answer by multiplying forwards.",
        ],
        strategy: "work backwards",
      },
      {
        id: "rat-quiz-mcq-06",
        question: "£2000 is invested at 3% per annum compound interest. What is the value after 4 years?",
        options: ["£2251.02", "£2240.00", "£2185.45", "£2260.00"],
        answerIndex: 0,
        explanation:
          "Value = 2000 × 1.03^4 = 2000 × 1.12550881 = £2251.02. £2240 is SIMPLE interest (4 × £60 added); £2185.45 is only 3 years of compounding; £2260 has no correct working.",
        guideRef: "Compound interest and depreciation",
        difficulty: "core",
        hints: [
          "Compound means each year's interest is calculated on the CURRENT balance.",
          "Write one multiplier for a 3% increase, applied 4 times.",
          "Compute 2000 × 1.03^4 in one go on your calculator.",
        ],
        strategy: "repeated multiplier with an index",
      },
      {
        id: "rat-quiz-mcq-07",
        question: "y is directly proportional to x², and y = 12 when x = 2. What is y when x = 5?",
        options: ["75", "30", "60", "45"],
        answerIndex: 0,
        explanation:
          "y = kx² with 12 = k × 4 gives k = 3, so y = 3x² and y = 3 × 25 = 75. Answer 30 treats it as y = kx (linear, k = 6); 60 doubles instead of using the square.",
        guideRef: "Direct and inverse proportion",
        difficulty: "core",
        hints: [
          "Start by writing the equation with a constant: y = kx².",
          "Substitute y = 12, x = 2 to find k.",
          "k = 3, so evaluate 3 × 5².",
        ],
        strategy: "introduce a variable (find k)",
      },
      {
        id: "rat-quiz-mcq-08",
        question: "y is inversely proportional to x, and y = 8 when x = 3. Find x when y = 6.",
        options: ["4", "2.25", "16", "6"],
        answerIndex: 0,
        explanation:
          "y = k/x with 8 = k/3 gives k = 24, so 6 = 24/x and x = 4. Answer 2.25 wrongly uses DIRECT proportion (y = 8x/3); 16 multiplies instead of dividing when solving for x.",
        guideRef: "Direct and inverse proportion",
        difficulty: "core",
        hints: [
          "Inverse proportion means y = k/x — the product xy stays constant.",
          "Use the first pair: k = 8 × 3.",
          "Solve 6 = 24/x for x.",
        ],
        strategy: "look for invariants (xy constant)",
      },
      {
        id: "rat-quiz-mcq-09",
        question: "A train travels 150 km in 2 hours 30 minutes. What is its average speed?",
        options: ["60 km/h", "75 km/h", "65.2 km/h", "50 km/h"],
        answerIndex: 0,
        explanation:
          "2 h 30 min = 2.5 h, so speed = 150 ÷ 2.5 = 60 km/h. 75 km/h uses 2 hours only; 65.2 km/h comes from typing the time as 2.3 hours — 30 minutes is 0.5 h, not 0.3 h.",
        guideRef: "Compound measures, best value and exchange rates",
        difficulty: "core",
        hints: [
          "Speed = distance ÷ time — but the time must be in a single unit.",
          "Convert 2 h 30 min to hours as a decimal. Is 30 minutes 0.3 of an hour?",
          "30 min = 0.5 h, so divide 150 by 2.5.",
        ],
        strategy: "convert units before calculating",
      },
      {
        id: "rat-quiz-mcq-10",
        question: "A price is increased by 20%, then the new price is reduced by 20%. Compared with the starting price, the final price is:",
        options: ["4% lower", "exactly the same", "4% higher", "2% lower"],
        answerIndex: 0,
        explanation:
          "The combined multiplier is 1.2 × 0.8 = 0.96, so the price ends 4% lower. It is not back to the start because the 20% cut acts on a LARGER amount than the 20% rise did. The changes multiply — they do not add to zero.",
        guideRef: "Percentage multipliers and percentage change",
        difficulty: "challenge",
        hints: [
          "Don't guess — test it with a starting price of £100.",
          "£100 → £120 after the rise. Now take 20% off £120.",
          "Alternatively multiply the two multipliers: 1.2 × 0.8.",
        ],
        strategy: "try small cases / multiply multipliers",
      },
    ],
    qa: [
      {
        id: "rat-quiz-qa-01",
        question: "Amir and Beth share £126 in the ratio 4:5. How much more money does Beth receive than Amir?",
        modelAnswer:
          "Total parts = 4 + 5 = 9. One part = 126 ÷ 9 = £14. Amir gets 4 × 14 = £56 and Beth gets 5 × 14 = £70. Beth receives 70 − 56 = £14 more. (Faster: the difference is 5 − 4 = 1 part = £14.)",
        markScheme: ["£14", "9 parts", "56", "70"],
        commonError:
          "Finding the two shares correctly but forgetting the question asks for the DIFFERENCE — always re-read what is actually being asked.",
        guideRef: "Ratios: sharing, combining, and fractions",
        difficulty: "warmup",
      },
      {
        id: "rat-quiz-qa-02",
        question: "A car was bought for £13,500. One year later it is valued at £11,745. Calculate the percentage decrease in its value.",
        modelAnswer:
          "Decrease = 13500 − 11745 = £1755. Percentage decrease = 1755 ÷ 13500 × 100 = 13%.",
        markScheme: ["13%", "1755", "divide by 13500", "original"],
        commonError:
          "Dividing the change by the NEW value (1755/11745 ≈ 14.9%) instead of the original £13,500.",
        guideRef: "Percentage multipliers and percentage change",
        difficulty: "core",
        hints: [
          "First find the actual fall in value in pounds.",
          "Percentage change = change ÷ original × 100.",
          "The original value here is £13,500.",
        ],
        strategy: "original as denominator",
      },
      {
        id: "rat-quiz-qa-03",
        question: "In a sale, all prices are reduced by 15%. A coat costs £61.20 in the sale. Work out the original price of the coat.",
        modelAnswer:
          "Sale price = original × 0.85, so original = 61.20 ÷ 0.85 = £72. Check: 72 × 0.85 = 61.20 ✓.",
        markScheme: ["£72", "0.85", "divide", "61.20 ÷ 0.85"],
        commonError:
          "Adding 15% of £61.20 back on (giving £70.38) — the 15% removed was 15% of the ORIGINAL price, so you must divide by 0.85, not add 15% of the sale price.",
        guideRef: "Reverse percentages: working backwards",
        difficulty: "core",
        hints: [
          "Is £61.20 the before or the after value?",
          "Write the forwards process: original × multiplier = 61.20.",
          "A 15% reduction is ×0.85 — undo it with division.",
        ],
        strategy: "work backwards",
      },
      {
        id: "rat-quiz-qa-04",
        question: "A delivery van is bought for £24,000. Its value depreciates by 18% each year. Work out its value after 3 years, giving your answer to the nearest pound.",
        modelAnswer:
          "Each year multiplies the value by 1 − 0.18 = 0.82. After 3 years: 24000 × 0.82³ = 24000 × 0.551368 = £13,232.83 ≈ £13,233 (nearest pound).",
        markScheme: ["£13,233", "0.82", "0.82³", "13232.83"],
        commonError:
          "Taking 18% of £24,000 three times (24000 − 3 × 4320 = £11,040) — depreciation is compound, so each year's 18% is taken from the CURRENT value.",
        guideRef: "Compound interest and depreciation",
        difficulty: "core",
        hints: [
          "Depreciation is a repeated percentage DECREASE. What is the yearly multiplier?",
          "Losing 18% leaves 82% each year.",
          "Calculate 24000 × 0.82³, then round.",
        ],
        strategy: "repeated multiplier with an index",
      },
      {
        id: "rat-quiz-qa-05",
        question: "Given that a:b = 3:4 and b:c = 6:5, find the ratio a:b:c in its simplest form.",
        modelAnswer:
          "Make the b values match. lcm(4, 6) = 12. Scale a:b = 3:4 by 3 to get 9:12, and b:c = 6:5 by 2 to get 12:10. So a:b:c = 9:12:10 (no common factor, so this is simplest form).",
        markScheme: ["9:12:10", "lcm", "12", "scale"],
        commonError:
          "Writing 3:4:5 or 3:6:5 by gluing the ratios together without first making the two b values equal.",
        guideRef: "Ratios: sharing, combining, and fractions",
        difficulty: "core",
        hints: [
          "The b appears in both ratios but as different numbers (4 and 6). They must agree.",
          "Find a number both 4 and 6 divide into.",
          "Scale each ratio so b = 12, then read off a:b:c.",
        ],
        strategy: "work with one part (common b)",
        solutions: [
          {
            label: "Scaling to a common b (standard method)",
            steps: [
              "The link between the ratios is b, but it is 4 in the first and 6 in the second.",
              "lcm(4, 6) = 12, so scale a:b = 3:4 by ×3 → 9:12.",
              "Scale b:c = 6:5 by ×2 → 12:10.",
              "Both now agree that b is 12 parts, so a:b:c = 9:12:10.",
            ],
          },
          {
            label: "Fraction chain (elegant)",
            steps: [
              "a/b = 3/4 and b/c = 6/5, so a/c = (a/b) × (b/c) = (3/4) × (6/5) = 18/20 = 9/10.",
              "So a:c = 9:10, and from a:b = 3:4 = 9:12 we get b = 12 on the same scale.",
              "Hence a:b:c = 9:12:10. The fraction chain shows WHY it works: ratios multiply like fractions, and the b cancels.",
            ],
          },
        ],
      },
      {
        id: "rat-quiz-qa-06",
        question:
          "£5000 is invested at 4% per annum compound interest. After how many complete years will the investment first be worth more than £6000? You must show your working.",
        modelAnswer:
          "We need the smallest n with 5000 × 1.04^n > 6000, i.e. 1.04^n > 1.2. Testing powers: 1.04⁴ = 1.16986 → 5000 × 1.04⁴ = £5849.29 (not enough). 1.04⁵ = 1.21665 → 5000 × 1.04⁵ = £6083.26 > £6000. So the investment first exceeds £6000 after 5 complete years.",
        markScheme: ["5 years", "1.04", "5849", "6083"],
        commonError:
          "Failing to show working either side of the target — examiners want to see both the year that is still below £6000 (n = 4, £5849.29) and the first year above it (n = 5, £6083.26). Also beware treating it as simple interest at £200 a year.",
        guideRef: "Compound interest and depreciation",
        difficulty: "challenge",
        hints: [
          "Write the condition as an inequality: 5000 × 1.04^n > 6000.",
          "Divide both sides by 5000: you need 1.04^n > 1.2.",
          "Test n = 4, 5, ... with your calculator and show the values either side of the target.",
        ],
        strategy: "try small cases and bracket the target",
      },
    ],
  },
  questionBank: {
    mcqPapers: [
      {
        id: "rat-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "rat-mcq-p1-q01",
            question: "Simplify the ratio 24:36 fully.",
            options: ["2:3", "3:4", "4:6", "12:18"],
            answerIndex: 0,
            explanation:
              "The highest common factor of 24 and 36 is 12, so 24:36 = 2:3. Both 4:6 and 12:18 are equivalent but not fully simplified; 3:4 has the numbers' roles muddled.",
            guideRef: "Ratios: sharing, combining, and fractions",
            difficulty: "warmup",
          },
          {
            id: "rat-mcq-p1-q02",
            question: "In a class, the ratio of boys to girls is 3:5. What fraction of the class are boys?",
            options: ["3/8", "3/5", "5/8", "1/3"],
            answerIndex: 0,
            explanation:
              "There are 3 + 5 = 8 parts in total, so boys are 3/8 of the class. The tempting 3/5 compares boys to GIRLS, not to the whole class.",
            guideRef: "Ratios: sharing, combining, and fractions",
            difficulty: "warmup",
          },
          {
            id: "rat-mcq-p1-q03",
            question: "Increase £240 by 12.5%.",
            options: ["£270", "£252", "£300", "£267"],
            answerIndex: 0,
            explanation:
              "240 × 1.125 = £270 (12.5% of 240 is 30). £252 uses 5%; £300 uses 25%; £267 has no correct working.",
            guideRef: "Percentage multipliers and percentage change",
            difficulty: "core",
            hints: [
              "Write the increase as a single multiplier.",
              "12.5% = 0.125, so the multiplier is 1.125.",
              "Or find 12.5% as one eighth of 240 and add it on.",
            ],
            strategy: "turn the percentage into a multiplier",
          },
          {
            id: "rat-mcq-p1-q04",
            question: "The exchange rate is £1 = €1.15. Convert €207 into pounds.",
            options: ["£180", "£238.05", "£192", "£207"],
            answerIndex: 0,
            explanation:
              "Each pound is worth €1.15, so euros → pounds means DIVIDING: 207 ÷ 1.15 = £180. £238.05 multiplies instead — but €207 must become FEWER pounds since a pound is worth more than a euro.",
            guideRef: "Compound measures, best value and exchange rates",
            difficulty: "core",
            hints: [
              "Should €207 be more or fewer than 207 in pounds? Each pound buys more than one euro.",
              "Going pounds → euros multiplies by 1.15; going back must do the opposite.",
              "Compute 207 ÷ 1.15.",
            ],
            strategy: "consider extremes (sanity-check direction)",
          },
          {
            id: "rat-mcq-p1-q05",
            question: "£800 is invested at 4.5% per annum SIMPLE interest. How much interest is earned in 6 years?",
            options: ["£216", "£241.81", "£36", "£1016"],
            answerIndex: 0,
            explanation:
              "Simple interest = 800 × 0.045 × 6 = £216 (£36 every year, no compounding). £241.81 is the COMPOUND interest (800 × 1.045⁶ − 800); £36 is only one year; £1016 is the final balance, not the interest.",
            guideRef: "Compound interest and depreciation",
            difficulty: "core",
            hints: [
              "Simple interest pays the same amount every year.",
              "Find one year's interest: 4.5% of £800.",
              "Multiply that yearly interest by 6 — and note the question asks for the interest, not the total.",
            ],
            strategy: "simple = linear growth",
          },
          {
            id: "rat-mcq-p1-q06",
            question: "A block has mass 540 g and volume 240 cm³. What is its density?",
            options: ["2.25 g/cm³", "0.44 g/cm³", "2.5 g/cm³", "300 g/cm³"],
            answerIndex: 0,
            explanation:
              "Density = mass ÷ volume = 540 ÷ 240 = 2.25 g/cm³. 0.44 divides the wrong way round (volume ÷ mass); 300 subtracts the numbers.",
            guideRef: "Compound measures, best value and exchange rates",
            difficulty: "core",
            hints: [
              "The unit g/cm³ tells you the formula: grams per cubic centimetre.",
              "Divide the mass by the volume.",
              "Check: density above 1 g/cm³ means denser than water — plausible for a solid block.",
            ],
            strategy: "let the units dictate the formula",
          },
          {
            id: "rat-mcq-p1-q07",
            question: "y is inversely proportional to x². Given y = 4 when x = 3, find y when x = 2.",
            options: ["9", "6", "16/9", "81"],
            answerIndex: 0,
            explanation:
              "y = k/x² with 4 = k/9 gives k = 36, so y = 36/4 = 9 when x = 2. Answer 6 uses y = k/x (forgetting the square); 16/9 uses DIRECT proportion y = kx².",
            guideRef: "Direct and inverse proportion",
            difficulty: "core",
            hints: [
              "Write the equation first: y = k/x².",
              "Substitute y = 4, x = 3: what is k?",
              "k = 36, so evaluate 36 ÷ 2².",
            ],
            strategy: "introduce a variable (find k)",
          },
          {
            id: "rat-mcq-p1-q08",
            question:
              "A bag contains red and blue counters in the ratio 3:5. When 12 more red counters are added, the ratio of red to blue becomes 3:4. How many blue counters are in the bag?",
            options: ["80", "48", "60", "40"],
            answerIndex: 0,
            explanation:
              "Let red = 3x and blue = 5x. Then (3x + 12)/(5x) = 3/4, so 12x + 48 = 15x, giving x = 16. Blue = 5 × 16 = 80. Check: red goes 48 → 60, and 60:80 = 3:4 ✓. 48 is the ORIGINAL red count; 60 is the new red count.",
            guideRef: "Ratios: sharing, combining, and fractions",
            difficulty: "challenge",
            hints: [
              "The blue counters never change — that's your invariant.",
              "Introduce a variable: let the original numbers be 3x red and 5x blue.",
              "After adding, (3x + 12) : 5x = 3 : 4. Cross-multiply and solve for x.",
              "Remember to answer with the number of BLUE counters, 5x.",
            ],
            strategy: "introduce a variable / look for invariants",
          },
        ],
      },
      {
        id: "rat-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "rat-mcq-p2-q01",
            question: "Write 45 minutes to 2 hours as a ratio in its simplest form.",
            options: ["3:8", "45:2", "1:3", "8:3"],
            answerIndex: 0,
            explanation:
              "Convert to the same units first: 45 min : 120 min = 45:120 = 3:8 (dividing by 15). 45:2 mixes units; 8:3 is the right numbers reversed.",
            guideRef: "Ratios: sharing, combining, and fractions",
            difficulty: "warmup",
          },
          {
            id: "rat-mcq-p2-q02",
            question: "What is 8% of 350?",
            options: ["28", "42", "2.8", "322"],
            answerIndex: 0,
            explanation:
              "0.08 × 350 = 28. 2.8 misplaces the decimal (that's 0.8%); 322 is 350 − 28, an 8% decrease rather than 8% of.",
            guideRef: "Percentage multipliers and percentage change",
            difficulty: "warmup",
          },
          {
            id: "rat-mcq-p2-q03",
            question: "A jacket's price falls from £85 to £68. What is the percentage decrease?",
            options: ["20%", "25%", "17%", "80%"],
            answerIndex: 0,
            explanation:
              "The change is £17 on an original of £85: 17/85 = 0.2 = 20%. Dividing by the new price gives 17/68 = 25% — wrong denominator. 17% mistakes the pound change for a percentage.",
            guideRef: "Percentage multipliers and percentage change",
            difficulty: "core",
            hints: [
              "Find the fall in price in pounds first.",
              "Divide the change by the value BEFORE the fall.",
              "17 ÷ 85 — simplify the fraction 17/85 by dividing by 17.",
            ],
            strategy: "original as denominator",
          },
          {
            id: "rat-mcq-p2-q04",
            question: "A television costs £330 including VAT at 20%. What is the price before VAT?",
            options: ["£275", "£264", "£396", "£310"],
            answerIndex: 0,
            explanation:
              "Price with VAT = pre-VAT price × 1.2, so pre-VAT = 330 ÷ 1.2 = £275 (check: 275 × 1.2 = 330 ✓). £264 wrongly subtracts 20% of £330; £396 adds VAT again.",
            guideRef: "Reverse percentages: working backwards",
            difficulty: "core",
            hints: [
              "£330 is the AFTER value — VAT has already been added.",
              "pre-VAT × 1.2 = 330.",
              "Undo the ×1.2 with division, then check forwards.",
            ],
            strategy: "work backwards",
          },
          {
            id: "rat-mcq-p2-q05",
            question:
              "A £9000 car loses 15% of its value each year. Which calculation gives its value after 4 years?",
            options: [
              "9000 × 0.85^4",
              "9000 × 0.15^4",
              "9000 − 9000 × 0.15 × 4",
              "9000 × 0.85 × 4",
            ],
            answerIndex: 0,
            explanation:
              "Losing 15% each year keeps 85%, so the yearly multiplier is 0.85, applied 4 times: 9000 × 0.85⁴. Option B keeps only 15% a year; option C is simple (linear) depreciation; option D multiplies by 4 instead of raising to the power 4.",
            guideRef: "Compound interest and depreciation",
            difficulty: "core",
            hints: [
              "If 15% is lost, what percentage remains after one year?",
              "The same multiplier is applied year after year.",
              "Repeated multiplication is written as a power.",
            ],
            strategy: "repeated multiplier with an index",
          },
          {
            id: "rat-mcq-p2-q06",
            question: "A force of 120 N acts on an area of 0.4 m². What is the pressure?",
            options: ["300 N/m²", "48 N/m²", "3.33 N/m²", "480 N/m²"],
            answerIndex: 0,
            explanation:
              "Pressure = force ÷ area = 120 ÷ 0.4 = 300 N/m². 48 multiplies force by area; 3.33 divides the wrong way (0.4 ÷ 120 scaled); dividing by a number less than 1 should make the answer BIGGER than 120.",
            guideRef: "Compound measures, best value and exchange rates",
            difficulty: "core",
            hints: [
              "The unit N/m² reads 'newtons per square metre' — that spells the formula.",
              "Divide the force by the area.",
              "Dividing by 0.4 is the same as multiplying by 2.5.",
            ],
            strategy: "let the units dictate the formula",
          },
          {
            id: "rat-mcq-p2-q07",
            question:
              "Kitchen roll comes in a 6-roll pack for £2.70 or a 9-roll pack for £3.96. Which is better value?",
            options: [
              "The 9-roll pack, at 44p per roll",
              "The 6-roll pack, at 45p per roll",
              "They are exactly the same value",
              "The 6-roll pack, at 40p per roll",
            ],
            answerIndex: 0,
            explanation:
              "Price per roll: 270 ÷ 6 = 45p and 396 ÷ 9 = 44p. The 9-pack is cheaper per roll, so it is better value. (Comparing totals alone tells you nothing — you must compare like with like.)",
            guideRef: "Compound measures, best value and exchange rates",
            difficulty: "core",
            hints: [
              "You can't compare a 6-pack price with a 9-pack price directly.",
              "Find the cost of ONE roll in each pack.",
              "Work in pence to keep the division clean: 270 ÷ 6 and 396 ÷ 9.",
            ],
            strategy: "work with one part (unit price)",
          },
          {
            id: "rat-mcq-p2-q08",
            question: "y is inversely proportional to √x, and y = 10 when x = 25. Find x when y = 4.",
            options: ["156.25", "12.5", "4", "625"],
            answerIndex: 0,
            explanation:
              "y = k/√x with 10 = k/5 gives k = 50. Then 4 = 50/√x, so √x = 12.5 and x = 12.5² = 156.25. Answer 12.5 forgets to square at the end; 4 comes from using direct proportion y = k√x.",
            guideRef: "Direct and inverse proportion",
            difficulty: "challenge",
            hints: [
              "Write the equation with k: y = k/√x.",
              "Use y = 10, x = 25 (so √x = 5) to find k.",
              "Solve 4 = 50/√x for √x first.",
              "You have √x — one more step gets x.",
            ],
            strategy: "introduce a variable (find k)",
          },
        ],
      },
      {
        id: "rat-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "rat-mcq-p3-q01",
            question: "84 sweets are shared in the ratio 5:2. How many sweets are in the larger share?",
            options: ["60", "24", "42", "12"],
            answerIndex: 0,
            explanation:
              "5 + 2 = 7 parts, so one part is 84 ÷ 7 = 12 sweets. The larger share is 5 × 12 = 60. 24 is the smaller share; 42 is an equal split; 12 is one part.",
            guideRef: "Ratios: sharing, combining, and fractions",
            difficulty: "warmup",
          },
          {
            id: "rat-mcq-p3-q02",
            question: "Which multiplier represents an increase of 40%?",
            options: ["1.4", "0.4", "1.04", "0.6"],
            answerIndex: 0,
            explanation:
              "An increase of 40% gives 140% of the original, i.e. ×1.4. 0.4 keeps only 40%; 1.04 is a 4% increase; 0.6 is a 40% DECREASE.",
            guideRef: "Percentage multipliers and percentage change",
            difficulty: "warmup",
          },
          {
            id: "rat-mcq-p3-q03",
            question: "A coach travels 210 miles at an average speed of 56 mph. How long does the journey take?",
            options: ["3 hours 45 minutes", "3 hours 75 minutes", "3 hours 15 minutes", "4 hours"],
            answerIndex: 0,
            explanation:
              "Time = distance ÷ speed = 210 ÷ 56 = 3.75 hours. The decimal 0.75 h is 45 minutes, so 3 h 45 min. Reading 3.75 as '3 hours 75 minutes' is the classic decimal-time slip.",
            guideRef: "Compound measures, best value and exchange rates",
            difficulty: "core",
            hints: [
              "Rearrange speed = distance ÷ time for time.",
              "210 ÷ 56 = 3.75 hours — but 0.75 is not 75 minutes.",
              "0.75 of an hour is 0.75 × 60 minutes.",
            ],
            strategy: "convert units before answering",
          },
          {
            id: "rat-mcq-p3-q04",
            question:
              "A town's population of 60,000 grows by 2% each year. What is the population after 3 years, to the nearest whole number?",
            options: ["63,672", "63,600", "61,200", "65,000"],
            answerIndex: 0,
            explanation:
              "60000 × 1.02³ = 60000 × 1.061208 = 63,672 (63672.48 rounded). 63,600 is simple growth (3 × 1200 added); 61,200 is only one year.",
            guideRef: "Compound interest and depreciation",
            difficulty: "core",
            hints: [
              "Percentage growth compounds — each year's 2% is of the CURRENT population.",
              "The yearly multiplier is 1.02.",
              "Compute 60000 × 1.02³.",
            ],
            strategy: "repeated multiplier with an index",
          },
          {
            id: "rat-mcq-p3-q05",
            question: "d is directly proportional to t². Given d = 45 when t = 3, find d when t = 6.",
            options: ["180", "90", "30", "720"],
            answerIndex: 0,
            explanation:
              "d = kt² with 45 = 9k gives k = 5, so d = 5 × 36 = 180. Answer 90 just doubles d when t doubles — but t² quadruples, so d quadruples too (45 × 4 = 180).",
            guideRef: "Direct and inverse proportion",
            difficulty: "core",
            hints: [
              "Write d = kt² and use the given pair to find k.",
              "45 = k × 3².",
              "With k = 5, evaluate 5 × 6². (Shortcut: t doubled, so d is multiplied by 2² = 4.)",
            ],
            strategy: "introduce a variable (find k)",
          },
          {
            id: "rat-mcq-p3-q06",
            question: "After losing 12% of its value, a phone is worth £352. What was it worth originally?",
            options: ["£400", "£394.24", "£309.76", "£440"],
            answerIndex: 0,
            explanation:
              "352 = original × 0.88, so original = 352 ÷ 0.88 = £400 (check: 400 × 0.88 = 352 ✓). £394.24 adds 12% of £352 — the wrong base; £309.76 reduces £352 by another 12%.",
            guideRef: "Reverse percentages: working backwards",
            difficulty: "core",
            hints: [
              "£352 is the AFTER value.",
              "A 12% loss is the multiplier 0.88.",
              "Undo the multiplication: divide 352 by 0.88.",
            ],
            strategy: "work backwards",
          },
          {
            id: "rat-mcq-p3-q07",
            question:
              "A video game costs £48 in the UK and €57.50 in France. Using £1 = €1.15, where is it cheaper, and by how much in pounds?",
            options: ["The UK, by £2", "France, by £2", "The UK, by £9.50", "Same price in both"],
            answerIndex: 0,
            explanation:
              "Convert to the same currency: €57.50 ÷ 1.15 = £50. The UK price of £48 is £2 less, so the game is cheaper in the UK by £2. '£9.50' subtracts the raw numbers 57.50 − 48 without converting — you can never compare pounds with euros directly.",
            guideRef: "Compound measures, best value and exchange rates",
            difficulty: "core",
            hints: [
              "You can only compare prices in the SAME currency.",
              "Convert €57.50 to pounds: divide by 1.15.",
              "Compare £48 with your converted price.",
            ],
            strategy: "convert to a common unit",
          },
          {
            id: "rat-mcq-p3-q08",
            question:
              "The ratio of Amy's age to Ben's age is 4:7. In 6 years' time the ratio will be 2:3. How old is Amy now?",
            options: ["12", "21", "8", "18"],
            answerIndex: 0,
            explanation:
              "Let the ages be 4x and 7x. In 6 years: (4x + 6)/(7x + 6) = 2/3, so 12x + 18 = 14x + 12, giving 2x = 6 and x = 3. Amy is 4 × 3 = 12 (check: in 6 years, 18:27 = 2:3 ✓). 21 is Ben's age; 8 and 18 come from mis-solving.",
            guideRef: "Ratios: sharing, combining, and fractions",
            difficulty: "challenge",
            hints: [
              "Introduce a variable: write the current ages as 4x and 7x.",
              "In 6 years BOTH ages increase by 6 — the ratio parts do not simply stay 4 and 7.",
              "Set (4x + 6) : (7x + 6) = 2 : 3 and cross-multiply.",
              "Solve for x, then answer with Amy's age, 4x.",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "rat-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "rat-qa-p1-q01",
            question: "91 marbles are shared between three children in the ratio 2:5:6. How many marbles does each child receive?",
            modelAnswer:
              "Total parts = 2 + 5 + 6 = 13. One part = 91 ÷ 13 = 7 marbles. The shares are 2 × 7 = 14, 5 × 7 = 35 and 6 × 7 = 42. Check: 14 + 35 + 42 = 91 ✓.",
            markScheme: ["14, 35, 42", "13 parts", "7", "14", "35", "42"],
            commonError:
              "Dividing 91 by 3 (the number of children) instead of by 13 (the number of parts).",
            guideRef: "Ratios: sharing, combining, and fractions",
            difficulty: "warmup",
          },
          {
            id: "rat-qa-p1-q02",
            question: "Jo buys shares for £1,250 and later sells them for £1,437.50. Calculate her percentage profit.",
            modelAnswer:
              "Profit = 1437.50 − 1250 = £187.50. Percentage profit = 187.50 ÷ 1250 × 100 = 15%.",
            markScheme: ["15%", "187.50", "divide by 1250", "original"],
            commonError:
              "Dividing the profit by the SELLING price (187.50/1437.50 ≈ 13%) — percentage profit is measured against what she paid.",
            guideRef: "Percentage multipliers and percentage change",
            difficulty: "core",
            hints: [
              "Find the actual profit in pounds first.",
              "Percentage profit compares the profit with the amount originally paid.",
              "187.50 ÷ 1250, then ×100.",
            ],
            strategy: "original as denominator",
          },
          {
            id: "rat-qa-p1-q03",
            question:
              "A metal cuboid measures 4 cm by 5 cm by 10 cm and has mass 1.58 kg. Work out the density of the metal in g/cm³.",
            modelAnswer:
              "Volume = 4 × 5 × 10 = 200 cm³. Convert the mass to grams: 1.58 kg = 1580 g. Density = mass ÷ volume = 1580 ÷ 200 = 7.9 g/cm³.",
            markScheme: ["7.9 g/cm³", "200", "1580", "mass ÷ volume"],
            commonError:
              "Forgetting to convert kilograms to grams and giving 0.0079 — the answer's units (g/cm³) demand the mass in grams.",
            guideRef: "Compound measures, best value and exchange rates",
            difficulty: "core",
            hints: [
              "You need the volume of the cuboid first.",
              "The answer must be in g/cm³ — are your mass units right?",
              "1.58 kg = 1580 g; divide by the volume.",
            ],
            strategy: "let the units dictate the formula",
          },
          {
            id: "rat-qa-p1-q04",
            question:
              "A booking fee of 6% is added to the price of concert tickets. Kim pays £3,392 in total. What was the price before the fee was added?",
            modelAnswer:
              "Total = price × 1.06, so price = 3392 ÷ 1.06 = £3,200. Check: 3200 × 1.06 = 3392 ✓.",
            markScheme: ["£3,200", "1.06", "divide", "3200"],
            commonError:
              "Subtracting 6% of £3,392 (giving £3,188.48) — the 6% fee was calculated on the pre-fee price, so divide by 1.06 instead.",
            guideRef: "Reverse percentages: working backwards",
            difficulty: "core",
            hints: [
              "£3,392 already includes the fee — it is the AFTER value.",
              "Write: before × 1.06 = 3392.",
              "Divide by 1.06 and check your answer forwards.",
            ],
            strategy: "work backwards",
          },
          {
            id: "rat-qa-p1-q05",
            question:
              "The extension e cm of a spring is directly proportional to the mass m grams hung from it. When m = 300, e = 7.2. (a) Find a formula for e in terms of m. (b) Find e when m = 450. (c) Find the mass that gives an extension of 12 cm.",
            modelAnswer:
              "(a) e = km. Substituting: 7.2 = 300k, so k = 0.024 and e = 0.024m. (b) e = 0.024 × 450 = 10.8 cm. (c) 12 = 0.024m, so m = 12 ÷ 0.024 = 500 g.",
            markScheme: ["e = 0.024m", "k = 0.024", "10.8", "500"],
            commonError:
              "Skipping the k step and trying to spot the answers by feel — write e = km, find k, and every part becomes a one-line substitution.",
            guideRef: "Direct and inverse proportion",
            difficulty: "core",
            hints: [
              "Direct proportion means e = km for some constant k.",
              "Use the pair (m, e) = (300, 7.2) to find k.",
              "For (c), substitute e = 12 and solve for m.",
            ],
            strategy: "introduce a variable (find k)",
            solutions: [
              {
                label: "Constant of proportionality (standard method)",
                steps: [
                  "Write e = km since e ∝ m.",
                  "Substitute m = 300, e = 7.2: k = 7.2 ÷ 300 = 0.024, so e = 0.024m.",
                  "(b) e = 0.024 × 450 = 10.8 cm.",
                  "(c) 12 = 0.024m gives m = 500 g.",
                ],
              },
              {
                label: "Scaling method (elegant for parts b and c)",
                steps: [
                  "Direct proportion means scaling m scales e by the same factor.",
                  "(b) 450 is 1.5 × 300, so e = 1.5 × 7.2 = 10.8 cm — no formula needed.",
                  "(c) 12 is 12 ÷ 7.2 = 5/3 of the known extension, so m = 5/3 × 300 = 500 g.",
                  "The scaling view is quicker here, but the k-formula (a) is still needed for the 'find a formula' part.",
                ],
              },
            ],
          },
          {
            id: "rat-qa-p1-q06",
            question:
              "Ava drives 30 km to town at an average speed of 60 km/h and drives the same 30 km home at an average speed of 40 km/h. Show that her average speed for the whole journey is NOT 50 km/h, and find the correct average speed.",
            modelAnswer:
              "Time to town = 30 ÷ 60 = 0.5 h. Time home = 30 ÷ 40 = 0.75 h. Total time = 1.25 h and total distance = 60 km. Average speed = 60 ÷ 1.25 = 48 km/h. It is not 50 km/h because she spends longer travelling at the slower speed, so 40 km/h counts for more of the journey time — the mean of speeds only works when the TIMES are equal.",
            markScheme: ["48 km/h", "1.25", "total distance", "total time", "0.75"],
            commonError:
              "Averaging the two speeds to get 50 km/h — average speed is total distance over total time, and here more time is spent at 40 km/h.",
            guideRef: "Compound measures, best value and exchange rates",
            difficulty: "challenge",
            hints: [
              "Average speed is defined as total distance ÷ total time — nothing else.",
              "Find the time for each leg separately.",
              "30 ÷ 60 = 0.5 h and 30 ÷ 40 = 0.75 h — notice these are not equal.",
              "Divide the full 60 km by the full 1.25 h.",
            ],
            strategy: "return to the definition / consider extremes",
          },
        ],
      },
      {
        id: "rat-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "rat-qa-p2-q01",
            question: "Without a calculator, work out 35% of £280.",
            modelAnswer:
              "10% of 280 = £28, so 30% = £84 and 5% = £14. Then 35% = 84 + 14 = £98.",
            markScheme: ["£98", "10%", "28", "14"],
            commonError:
              "Slips when combining blocks — build from 10% and 5% and add carefully: 30% + 5%.",
            guideRef: "Percentage multipliers and percentage change",
            difficulty: "warmup",
          },
          {
            id: "rat-qa-p2-q02",
            question: "Given that x:y = 2:3 and y:z = 9:7, find the ratio x:z in its simplest form.",
            modelAnswer:
              "Make the y values match: lcm(3, 9) = 9, so scale x:y = 2:3 by 3 to get 6:9. Now x:y:z = 6:9:7, so x:z = 6:7 (already in simplest form).",
            markScheme: ["6:7", "6:9:7", "lcm", "scale"],
            commonError:
              "Comparing x and z directly as 2:7 without first making the two y values equal.",
            guideRef: "Ratios: sharing, combining, and fractions",
            difficulty: "core",
            hints: [
              "y links the two ratios, but appears as 3 in one and 9 in the other.",
              "Scale the first ratio so its y becomes 9.",
              "Read x and z from the combined ratio 6:9:7.",
            ],
            strategy: "work with one part (common y)",
          },
          {
            id: "rat-qa-p2-q03",
            question:
              "Priya invests £3,500 at 2.4% per annum compound interest. Work out the value of her investment after 5 years, to the nearest penny.",
            modelAnswer:
              "Yearly multiplier = 1.024. Value = 3500 × 1.024⁵ = 3500 × 1.1258999... = £3,940.65 (to the nearest penny).",
            markScheme: ["£3,940.65", "1.024", "1.024⁵", "3940.65"],
            commonError:
              "Rounding the multiplier power too early (e.g. using 1.13) — keep full calculator accuracy until the final answer.",
            guideRef: "Compound interest and depreciation",
            difficulty: "core",
            hints: [
              "Write the multiplier for a 2.4% increase.",
              "Compound for 5 years means the multiplier is raised to the power 5.",
              "3500 × 1.024⁵ — round only at the end.",
            ],
            strategy: "repeated multiplier with an index",
          },
          {
            id: "rat-qa-p2-q04",
            question:
              "The time taken to build a wall is inversely proportional to the number of bricklayers. 6 bricklayers take 10 days to build the wall. How long would 4 bricklayers take, assuming they all work at the same rate?",
            modelAnswer:
              "t = k/n. With n = 6, t = 10: k = 60 (the job is '60 bricklayer-days'). For n = 4: t = 60 ÷ 4 = 15 days.",
            markScheme: ["15 days", "k = 60", "t = k/n", "60 ÷ 4"],
            commonError:
              "Setting up DIRECT proportion (fewer workers, less time — giving 6.67 days). Fewer workers must mean MORE time; the product n × t stays fixed.",
            guideRef: "Direct and inverse proportion",
            difficulty: "core",
            hints: [
              "Should 4 bricklayers take more or less time than 6? Decide before calculating.",
              "Inverse proportion: t = k/n, so n × t is constant.",
              "The whole job is 6 × 10 = 60 bricklayer-days.",
            ],
            strategy: "look for invariants (total work constant)",
          },
          {
            id: "rat-qa-p2-q05",
            question:
              "A shop increases all its prices by 8%. A month later it advertises '10% off everything'. What is the overall percentage change from the original prices? State whether it is an increase or a decrease.",
            modelAnswer:
              "The combined multiplier is 1.08 × 0.90 = 0.972. Since 0.972 = 97.2% of the original, the overall change is a 2.8% DECREASE.",
            markScheme: ["2.8% decrease", "0.972", "1.08 × 0.9", "multiply"],
            commonError:
              "Adding the changes (+8% − 10% = −2%) — successive percentage changes multiply, and the 10% cut applies to the already-raised prices.",
            guideRef: "Percentage multipliers and percentage change",
            difficulty: "core",
            hints: [
              "Write each change as a multiplier.",
              "Apply them one after the other — what operation combines them?",
              "Compare 1.08 × 0.90 with 1.",
            ],
            strategy: "multiply multipliers",
            solutions: [
              {
                label: "Multiplier method (elegant)",
                steps: [
                  "+8% is ×1.08; −10% is ×0.90.",
                  "Overall: 1.08 × 0.90 = 0.972.",
                  "0.972 means the final price is 97.2% of the original — a 2.8% decrease.",
                ],
              },
              {
                label: "Pick £100 (concrete check)",
                steps: [
                  "Start a price at £100.",
                  "After +8%: £108. After 10% off: 108 − 10.80 = £97.20.",
                  "£97.20 from £100 is a fall of £2.80, i.e. 2.8% — matching the multiplier method, and showing WHY: the 10% was taken of the bigger £108.",
                ],
              },
            ],
          },
          {
            id: "rat-qa-p2-q06",
            question:
              "y is directly proportional to x². If x is increased by 20%, find the percentage increase in y. (Hint: no numbers for x or y are needed.)",
            modelAnswer:
              "Let y = kx². Replace x with 1.2x: new y = k(1.2x)² = 1.44kx² = 1.44y. So y is multiplied by 1.44, a 44% increase.",
            markScheme: ["44%", "1.44", "(1.2)²", "kx²"],
            commonError:
              "Doubling the percentage (guessing 40%) — squaring the multiplier gives 1.2² = 1.44, and the cross-term is why it exceeds 40%.",
            guideRef: "Direct and inverse proportion",
            difficulty: "challenge",
            hints: [
              "Introduce a variable: write y = kx² and don't pick numbers.",
              "A 20% increase in x means x becomes 1.2x.",
              "Substitute 1.2x into the formula — what happens to the 1.2 when it is squared?",
              "Compare the new y with the old y as a multiplier.",
            ],
            strategy: "introduce a variable / exploit structure",
          },
        ],
      },
      {
        id: "rat-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "rat-qa-p3-q01",
            question: "A cyclist travels 36 km in 1 hour 30 minutes. Work out her average speed in km/h.",
            modelAnswer:
              "1 h 30 min = 1.5 hours. Average speed = 36 ÷ 1.5 = 24 km/h.",
            markScheme: ["24 km/h", "1.5", "36 ÷ 1.5"],
            commonError:
              "Using 1.3 hours for 1 h 30 min — 30 minutes is half an hour, so the time is 1.5 h.",
            guideRef: "Compound measures, best value and exchange rates",
            difficulty: "warmup",
          },
          {
            id: "rat-qa-p3-q02",
            question:
              "Bank A pays 5% per annum SIMPLE interest. Bank B pays 4.6% per annum COMPOUND interest. Leo invests £2,000 for 3 years. Which bank gives him more money at the end, and by how much?",
            modelAnswer:
              "Bank A: interest = 2000 × 0.05 × 3 = £300, total £2,300. Bank B: 2000 × 1.046³ = 2000 × 1.144445... = £2,288.89. Bank A gives more, by 2300 − 2288.89 = £11.11.",
            markScheme: ["Bank A", "£11.11", "2300", "2288.89", "1.046³"],
            commonError:
              "Assuming compound always wins — over only 3 years, the lower compound rate hasn't had time to catch the higher simple rate.",
            guideRef: "Compound interest and depreciation",
            difficulty: "core",
            hints: [
              "Work out each bank's final amount separately.",
              "Bank A: the same interest every year. Bank B: multiplier 1.046 cubed.",
              "Compare the two totals and give the difference to the nearest penny.",
            ],
            strategy: "compute both cases and compare",
          },
          {
            id: "rat-qa-p3-q03",
            question:
              "In a closing-down sale, every price is reduced by 35%. The sale price of a sofa is £747.50. Work out the original price of the sofa.",
            modelAnswer:
              "Sale price = original × 0.65, so original = 747.50 ÷ 0.65 = £1,150. Check: 1150 × 0.65 = 747.50 ✓.",
            markScheme: ["£1,150", "0.65", "divide", "747.50 ÷ 0.65"],
            commonError:
              "Dividing by 0.35 instead of 0.65 — after a 35% reduction, 65% of the price REMAINS, so 0.65 is the multiplier to undo.",
            guideRef: "Reverse percentages: working backwards",
            difficulty: "core",
            hints: [
              "What multiplier takes the original price to the sale price?",
              "Reducing by 35% leaves 65%.",
              "Divide the sale price £747.50 by 0.65.",
            ],
            strategy: "work backwards",
          },
          {
            id: "rat-qa-p3-q04",
            question:
              "A camera costs $312 in New York and £245 in London. The exchange rate is £1 = $1.30. How much cheaper, in pounds, is the cheaper option?",
            modelAnswer:
              "Convert the dollar price to pounds: 312 ÷ 1.30 = £240. London costs £245, so New York is cheaper by 245 − 240 = £5.",
            markScheme: ["£5", "240", "divide by 1.30", "New York"],
            commonError:
              "Multiplying $312 by 1.30 (getting £405.60) — dollars convert to FEWER pounds, so divide by the rate.",
            guideRef: "Compound measures, best value and exchange rates",
            difficulty: "core",
            hints: [
              "Convert both prices into the same currency first.",
              "Each pound is worth 1.30 dollars — so should $312 become more or fewer pounds?",
              "312 ÷ 1.30, then compare with £245.",
            ],
            strategy: "convert to a common unit",
          },
          {
            id: "rat-qa-p3-q05",
            question:
              "y is directly proportional to √x. When x = 9, y = 6. (a) Find a formula for y in terms of x. (b) Find y when x = 64. (c) Find x when y = 10.",
            modelAnswer:
              "(a) y = k√x. Substituting: 6 = k√9 = 3k, so k = 2 and y = 2√x. (b) y = 2√64 = 2 × 8 = 16. (c) 10 = 2√x, so √x = 5 and x = 25.",
            markScheme: ["y = 2√x", "k = 2", "16", "25"],
            commonError:
              "In part (c), stopping at √x = 5 and answering x = 5 — remember to square to recover x.",
            guideRef: "Direct and inverse proportion",
            difficulty: "core",
            hints: [
              "Write y = k√x and substitute the given pair.",
              "√9 = 3, so 6 = 3k.",
              "For (c): isolate √x first, then square.",
            ],
            strategy: "introduce a variable (find k)",
          },
          {
            id: "rat-qa-p3-q06",
            question:
              "A car is bought for £18,000 and depreciates by 12% each year. After how many complete years is the car first worth less than HALF its purchase price? You must show your working.",
            modelAnswer:
              "We need the smallest n with 0.88^n < 0.5 (the £18,000 cancels — only the multiplier matters). Testing powers: 0.88⁵ = 0.52773 (still above 0.5, value £9,499.17) and 0.88⁶ = 0.46440 (below 0.5, value £8,359.27). So the car first drops below half price after 6 complete years.",
            markScheme: ["6 years", "0.88", "0.5277", "0.4644"],
            commonError:
              "Reasoning '12% a year, so half (50%) takes about 4 years' — the 12% is of a shrinking value, so the fall slows down and it takes 6 years, not 50 ÷ 12 ≈ 4.",
            guideRef: "Compound interest and depreciation",
            difficulty: "challenge",
            hints: [
              "Write the value after n years with a multiplier and a power.",
              "You want 18000 × 0.88^n < 9000 — divide both sides by 18000.",
              "Test 0.88^n for n = 4, 5, 6 and show the values either side of 0.5.",
              "State the first n that dips below 0.5, with both bracketing values shown.",
            ],
            strategy: "look for invariants (the principal cancels) / bracket the target",
          },
        ],
      },
    ],
  },
};

export default topic;
