import type { Topic } from "../types";

const topic: Topic = {
  id: "statistics",
  title: "Statistics",
  subject: "Maths",
  icon: "📊",
  intro:
    "Statistics is the art of turning a pile of numbers into an honest story. In this topic you will master the three averages (and learn when each one lies), estimate means from grouped data, read medians and quartiles straight off cumulative frequency graphs, build histograms where AREA — not height — tells the truth, and interpret scatter graphs without falling into the correlation-equals-causation trap. Everything here is pure 4MA1 Higher: expect at least one of these questions on every paper.",

  guide: [
    {
      heading: "The three faces of average",
      body:
        "An 'average' is a single number chosen to represent a whole data set. The trap: there are three different averages, and they can tell three different stories about the same data.\n\n- **Mean** = (sum of all values) ÷ (number of values). Uses every value, so one extreme value drags it.\n- **Median** = the middle value once the data is **in order**. For n values the median sits at position (n+1)/2; with an even count, average the middle two.\n- **Mode** = the most common value. The only average that works for non-numeric data (favourite colour, shoe size sold).\n- **Range** = largest − smallest. It measures **spread**, not average — never call the range an average.\n\nChoosing well: use the **median** when the data has outliers (salaries, house prices), the **mode** for 'most popular', and the **mean** when you want every value to count (and there are no wild extremes).",
      discovery: {
        problem:
          "A small firm has 8 employees. Five earn £18,000, two earn £24,000 and the owner pays herself £95,000. A job advert claims 'average salary £29,125'. The union claims 'the average worker earns £18,000'. A newspaper prints 'typical salary: £18,000'. Who is lying?",
        idea:
          "Nobody! Mean = £233,000 ÷ 8 = £29,125. Median = £18,000 (the 4th and 5th of the ordered salaries are both £18,000). Mode = £18,000. All three are defensible 'averages' — which is exactly why exam questions ask you to choose the appropriate one and justify it. The owner's £95,000 is an outlier that inflates the mean but leaves the median untouched.",
      },
      whyItWorks:
        "The mean is the 'fair shares' number: if the total were shared out equally, each value would be the mean. Equivalently it is the balance point of the data — the deviations below the mean exactly cancel the deviations above it, which is why one huge value tips the balance so far. The median only cares about the ORDER of values, so you can move the top value from £95,000 to £95 million and the median does not budge.",
      strategies: [
        "Order the data first — every median error starts with unordered data",
        "Consider extremes: ask 'what happens to each average if the biggest value doubles?'",
        "Work backwards: from a given mean, recover the total (total = mean × n) before doing anything else",
      ],
      keyPoints: [
        "Mean = Σx ÷ n; median = middle of ORDERED data at position (n+1)/2; mode = most frequent",
        "Range = largest − smallest is a measure of spread, not an average",
        "Outliers drag the mean but barely affect the median or mode",
        "total = mean × n is the key that unlocks almost every 'find the missing value' problem",
      ],
      thinkDeeper:
        "Can the mean of a set of positive whole numbers be smaller than every value in the set? Try to build an example or explain why it is impossible. (Balance-point thinking settles it in one line: some deviation must be ≤ 0.)",
    },
    {
      heading: "Averages from frequency tables",
      body:
        "When data comes as a frequency table (value x, frequency f), you do not need to write out the raw list.\n\n- **Mean** = Σfx ÷ Σf. Add an fx column: each row contributes value × frequency to the total.\n- **Median**: find the position (n+1)/2 where n = Σf, then run a **cumulative total** down the frequency column until you pass that position.\n- **Mode**: the value with the largest frequency — NOT the largest frequency itself.\n\nExample: goals per match 0, 1, 2, 3, 4 with frequencies 4, 7, 5, 3, 1. Then n = 20 and Σfx = 0 + 7 + 10 + 9 + 4 = 30, so mean = 30 ÷ 20 = 1.5 goals. The median position is 10.5; cumulative frequencies run 4, 11, ... so the 10th and 11th values are both 1: median = 1.",
      discovery: {
        problem:
          "You roll a dice 100 times and record the results in a tally chart. Your friend insists the only way to find the mean is to write out all 100 rolls and add them. Can you find the mean in under a minute without ever writing the list?",
        idea:
          "Multiplication is repeated addition. If '4' was rolled 17 times, those rolls contribute 4 × 17 = 68 to the grand total in one step. That is the whole idea of the fx column: Σfx rebuilds the total of the raw list without writing it out.",
      },
      whyItWorks:
        "The table is just a compressed list. Frequency 7 for the value 1 means the raw list contains 1+1+1+1+1+1+1, which is 1 × 7. So Σfx equals the sum of the raw data exactly — no information is lost, and the mean from a frequency table of single values is EXACT (unlike grouped data, coming next).",
      strategies: [
        "Draw a diagram: add fx and cumulative frequency columns to the table before calculating anything",
        "Sense-check: the mean must lie between the smallest and largest value in the table",
      ],
      keyPoints: [
        "Mean from a table: Σfx ÷ Σf — divide by the TOTAL FREQUENCY, never by the number of rows",
        "Median: locate position (n+1)/2 using a running (cumulative) total of frequencies",
        "Mode = the value with the highest frequency (a value, not a frequency)",
        "A frequency table of exact values loses nothing: the mean is exact",
      ],
    },
    {
      heading: "Estimating the mean from grouped data",
      body:
        "Continuous data is usually grouped into classes like 150 < h ≤ 160. Now the exact values are hidden — all we know is how many fell in each class. To estimate the mean:\n\n- Take the **midpoint** of each class as the stand-in value for everyone in that class.\n- Estimated mean = Σ(f × midpoint) ÷ Σf.\n\nThis is an **estimate** — and 4MA1 loves asking WHY. The one-sentence answer: *because the exact data values are unknown, so we assume every value in a class equals the class midpoint.* Also useful:\n\n- **Modal class** = the class with the highest frequency (for equal widths) — say 'modal class', not 'mode'.\n- **Class containing the median**: run cumulative frequencies to the n/2 position and name the class (you cannot give an exact median).",
      discovery: {
        problem:
          "Play the estimate-the-mean game: I tell you only that 10 people each took 'between 20 and 30 minutes'. You must guess one time to write down for all ten of them, and you lose points for every minute you are off. What single guess minimises your risk — 20, 25, or 30?",
        idea:
          "Guess 25, the midpoint. If people are roughly evenly spread through the class, guesses that are too high and too low cancel out. Choosing the midpoint for every class is exactly the assumption behind the estimated mean — and it is why the answer is an estimate, not the true mean.",
      },
      whyItWorks:
        "Suppose the true values in the class 20 < t ≤ 30 are evenly spread. The ones below 25 pull the total down by about as much as the ones above 25 push it up, so replacing each by 25 leaves the class total roughly unchanged. The method only misleads when values bunch at one end of a class — which is why it is an estimate and not exact.",
      strategies: [
        "Try small cases: test the midpoint idea on a class you invent, e.g. values 21, 24, 29",
        "Draw a diagram: add midpoint and f × midpoint columns before touching the calculator",
        "Sense-check against extremes: the estimate must sit between the smallest lower boundary and largest upper boundary",
      ],
      keyPoints: [
        "Estimated mean = Σ(f × midpoint) ÷ Σf",
        "Midpoint = (lower boundary + upper boundary) ÷ 2",
        "It is an estimate BECAUSE the actual values are unknown — we assume each equals its class midpoint",
        "Classic slips: using upper boundaries instead of midpoints, or dividing by the number of classes instead of Σf",
      ],
      thinkDeeper:
        "If every value in every class happened to sit at the very top of its class, would the midpoint method over-estimate or under-estimate the true mean? By at most how much, in terms of the class widths? Thinking about this worst case shows the estimate's error is bounded by half the largest class width.",
    },
    {
      heading: "Cumulative frequency graphs",
      body:
        "Cumulative frequency (CF) means a **running total** of frequencies: 'how many values are less than or equal to this?'.\n\nTo draw a CF graph:\n\n- Add a running-total column to the grouped frequency table.\n- Plot each cumulative frequency at the **upper class boundary** of its class (the running total is only complete at the top of the class).\n- Join the points with a smooth curve (or straight segments) starting from the lower boundary of the first class at cf = 0.\n\nTo read the graph (n = total frequency):\n\n- **Median**: go across from cf = n/2, then down to the axis.\n- **Lower quartile Q1**: read from cf = n/4. **Upper quartile Q3**: read from cf = 3n/4.\n- 'How many were more than 40?': read cf at 40 and subtract from n.",
      discovery: {
        problem:
          "80 runners finish a race and their times are grouped in a table. Writing out and ordering 80 times to find the median would take all lesson. Can a single picture hand you the median, both quartiles and 'how many beat 35 minutes?' — each in five seconds flat?",
        idea:
          "The cumulative frequency graph is that picture. Because it plots 'how many finished by time t' against t, finding the median is just asking 'what time had 40 finishers?' — one horizontal read-off. The graph turns order statistics into geometry.",
      },
      whyItWorks:
        "Why the UPPER boundary? The cumulative frequency 24 for the class 10 < t ≤ 20 counts everyone up to 20 minutes. That count is only guaranteed once t reaches 20 — at t = 15 some of those runners may not have finished. Plotting at the midpoint or lower boundary would claim knowledge we do not have. On a CF graph we use n/2 (not (n+1)/2): the curve is a continuous model of the data, and n/2 is the standard read-off for it.",
      strategies: [
        "Draw a diagram: rule dashed read-off lines with a ruler — examiners award marks for visible method lines",
        "Look for invariants: the CF curve can never go down — if yours does, a running total is wrong",
      ],
      keyPoints: [
        "Plot cumulative frequency at the UPPER class boundary of each class",
        "The curve starts at cf = 0 at the lower boundary of the first class and never decreases",
        "Median at cf = n/2; Q1 at n/4; Q3 at 3n/4 — read across, then down",
        "'More than x' questions: n minus the cf reading at x",
      ],
      diagrams: [
        {
          id: "sta-diag-01",
          title: "Cumulative frequency curve with median read-off",
          caption:
            "Times of 80 runners. Points are plotted at upper class boundaries: (10, 6), (20, 24), (30, 54), (40, 70), (50, 80). Reading across from cf = 40 (half of 80) gives a median of about 25 minutes.",
          svg: `<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency graph of 80 runners' times with dashed lines showing the median read-off at cumulative frequency 40, giving a median of about 25 minutes">
  <line x1="60" y1="340" x2="620" y2="340" stroke="#64748b" stroke-width="2"/>
  <line x1="60" y1="20" x2="60" y2="340" stroke="#64748b" stroke-width="2"/>
  <line x1="168" y1="336" x2="168" y2="344" stroke="#64748b" stroke-width="2"/>
  <line x1="276" y1="336" x2="276" y2="344" stroke="#64748b" stroke-width="2"/>
  <line x1="384" y1="336" x2="384" y2="344" stroke="#64748b" stroke-width="2"/>
  <line x1="492" y1="336" x2="492" y2="344" stroke="#64748b" stroke-width="2"/>
  <line x1="600" y1="336" x2="600" y2="344" stroke="#64748b" stroke-width="2"/>
  <text x="164" y="362" font-size="14" fill="#64748b">10</text>
  <text x="272" y="362" font-size="14" fill="#64748b">20</text>
  <text x="380" y="362" font-size="14" fill="#64748b">30</text>
  <text x="488" y="362" font-size="14" fill="#64748b">40</text>
  <text x="596" y="362" font-size="14" fill="#64748b">50</text>
  <line x1="56" y1="265" x2="64" y2="265" stroke="#64748b" stroke-width="2"/>
  <line x1="56" y1="190" x2="64" y2="190" stroke="#64748b" stroke-width="2"/>
  <line x1="56" y1="115" x2="64" y2="115" stroke="#64748b" stroke-width="2"/>
  <line x1="56" y1="40" x2="64" y2="40" stroke="#64748b" stroke-width="2"/>
  <text x="30" y="270" font-size="14" fill="#64748b">20</text>
  <text x="30" y="195" font-size="14" fill="#64748b">40</text>
  <text x="30" y="120" font-size="14" fill="#64748b">60</text>
  <text x="30" y="45" font-size="14" fill="#64748b">80</text>
  <text x="44" y="345" font-size="14" fill="#64748b">0</text>
  <text x="480" y="392" font-size="15" fill="#64748b">Time (minutes)</text>
  <text x="20" y="16" font-size="15" fill="#64748b">Cumulative frequency</text>
  <path d="M 60 340 L 168 317.5 L 276 250 L 384 137.5 L 492 77.5 L 600 40" fill="none" stroke="#2563eb" stroke-width="3"/>
  <circle cx="168" cy="317.5" r="4" fill="#2563eb"/>
  <circle cx="276" cy="250" r="4" fill="#2563eb"/>
  <circle cx="384" cy="137.5" r="4" fill="#2563eb"/>
  <circle cx="492" cy="77.5" r="4" fill="#2563eb"/>
  <circle cx="600" cy="40" r="4" fill="#2563eb"/>
  <line x1="60" y1="190" x2="334" y2="190" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="334" y1="190" x2="334" y2="340" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="70" y="182" font-size="14" fill="#dc2626">cf = 40 (half of 80)</text>
  <text x="300" y="330" font-size="15" font-weight="bold" fill="#dc2626">median is about 25</text>
</svg>`,
        },
      ],
    },
    {
      heading: "Quartiles, IQR and comparing distributions",
      body:
        "The quartiles split ordered data into four equal parts:\n\n- **Q1 (lower quartile)**: one quarter of the way up — read at cf = n/4 on a CF graph.\n- **Q2 (median)**: halfway — cf = n/2.\n- **Q3 (upper quartile)**: three quarters — cf = 3n/4.\n- **Interquartile range (IQR) = Q3 − Q1**: the spread of the middle 50% of the data.\n\nThe IQR beats the range because it ignores the top and bottom quarters, so a single freak value cannot distort it.\n\n**Comparing two distributions** (a guaranteed exam question) needs exactly two sentences, both in context:\n\n- One about **average**: 'Class A's median (64) is higher than Class B's (58), so Class A scored better on average.'\n- One about **spread**: 'Class A's IQR (12) is smaller than Class B's (20), so Class A's scores were more consistent.'\n\nAlways name the statistic, quote both values, compare, and interpret in the context of the question.",
      whyItWorks:
        "Why is the IQR 'resistant'? Change the largest value to a million: Q3 is still the value three-quarters of the way up the ordered list — the same data point as before — so the IQR does not move. The range, which uses the extreme values themselves, explodes. Any statistic defined by POSITION in the ordered list (median, quartiles) is immune to how extreme the extremes are.",
      strategies: [
        "Use the two-sentence compare formula: median sentence + IQR sentence, each ending in context",
        "Consider extremes: to test whether a statistic is robust, imagine sending one value to a million",
      ],
      keyPoints: [
        "IQR = Q3 − Q1 measures the spread of the middle half of the data",
        "On a CF graph: Q1 at n/4, median at n/2, Q3 at 3n/4",
        "Smaller IQR = more consistent; higher median = better on average (say it in context)",
        "A comparison must name the measure, quote values, and interpret — 'A is better' alone scores nothing",
      ],
      thinkDeeper:
        "Two classes can have identical medians and identical IQRs yet wildly different marks. Sketch two such data sets. What extra statistic would expose the difference? This is why examiners sometimes give you the range as well — and why no single pair of numbers tells the whole story.",
    },
    {
      heading: "Histograms: when tall bars lie",
      body:
        "A histogram displays continuous grouped data. When the class widths are **unequal**, bar height must be **frequency density**, not frequency:\n\n- **frequency density = frequency ÷ class width**\n- so **frequency = frequency density × class width = area of the bar**\n\nIn a histogram, **AREA represents frequency**. The bars touch (continuous data), and there are no gaps.\n\nBoth directions matter on 4MA1:\n\n- **Drawing**: compute fd for each class, then draw bars to those heights.\n- **Reading**: measure a bar's height (fd) and multiply by its width to recover the frequency. Some questions give you one bar's frequency and make you deduce the scale for the others.",
      discovery: {
        problem:
          "A magazine plots journey times with bars showing raw frequency: 45 people took 0–30 minutes (one wide bar) and 30 people took 30–35 minutes (one narrow bar). The 0–30 bar towers over the other, so the headline reads 'most journeys are short'. But think about how CROWDED each interval is. Is the headline fair?",
        idea:
          "No — the 0–30 class packs 45 people into 30 minutes (1.5 people per minute) while 30–35 packs 30 people into 5 minutes (6 people per minute). The narrow class is four times as crowded! Height alone lies when widths differ; dividing by class width — frequency density — makes bars comparable. That is the entire reason histograms exist.",
      },
      whyItWorks:
        "In a bar chart with equal widths, height is a fair proxy for frequency because every bar has the same base — so area and height tell the same story. Once widths differ, only AREA can be shared out fairly: area = height × width = fd × width = frequency. A histogram is just a bar chart that has been made honest by dividing out the width.",
      strategies: [
        "Look for invariants: area = frequency is the invariant that solves every histogram puzzle, including unlabelled axes",
        "Work backwards: given a bar's frequency and its area on paper, find 'people per cm²' first, then convert every other bar",
      ],
      keyPoints: [
        "frequency density = frequency ÷ class width; frequency = fd × width",
        "Area of bar = frequency — height alone means nothing when widths differ",
        "Label the vertical axis 'frequency density', and make bars touch",
        "For unequal widths, the modal class is the one with the highest frequency DENSITY, not the highest frequency",
      ],
      thinkDeeper:
        "A histogram has no numbers on the frequency density axis, but you are told the whole graph represents 240 people. Explain how the total area lets you calibrate the axis and find the frequency of any single bar. (Total area corresponds to 240 — everything else is proportion.)",
      diagrams: [
        {
          id: "sta-diag-02",
          title: "Histogram with unequal class widths",
          caption:
            "Waiting times with classes of width 5, 10, 5 and 20 minutes. The 15–20 bar is the tallest (fd = 4) even though the 5–15 class has the most people (3 × 10 = 30): area, not height, gives frequency.",
          svg: `<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of waiting times with unequal class widths. Bars: 0 to 5 minutes with frequency density 2, 5 to 15 with density 3, 15 to 20 with density 4, and 20 to 40 with density 1. The area of each bar gives its frequency.">
  <line x1="60" y1="340" x2="620" y2="340" stroke="#64748b" stroke-width="2"/>
  <line x1="60" y1="20" x2="60" y2="340" stroke="#64748b" stroke-width="2"/>
  <rect x="60" y="200" width="65" height="140" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
  <rect x="125" y="130" width="130" height="210" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
  <rect x="255" y="60" width="65" height="280" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
  <rect x="320" y="270" width="260" height="70" fill="#2563eb" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
  <line x1="56" y1="270" x2="64" y2="270" stroke="#64748b" stroke-width="2"/>
  <line x1="56" y1="200" x2="64" y2="200" stroke="#64748b" stroke-width="2"/>
  <line x1="56" y1="130" x2="64" y2="130" stroke="#64748b" stroke-width="2"/>
  <line x1="56" y1="60" x2="64" y2="60" stroke="#64748b" stroke-width="2"/>
  <text x="42" y="275" font-size="14" fill="#64748b">1</text>
  <text x="42" y="205" font-size="14" fill="#64748b">2</text>
  <text x="42" y="135" font-size="14" fill="#64748b">3</text>
  <text x="42" y="65" font-size="14" fill="#64748b">4</text>
  <text x="44" y="345" font-size="14" fill="#64748b">0</text>
  <text x="120" y="362" font-size="14" fill="#64748b">5</text>
  <text x="245" y="362" font-size="14" fill="#64748b">15</text>
  <text x="312" y="362" font-size="14" fill="#64748b">20</text>
  <text x="570" y="362" font-size="14" fill="#64748b">40</text>
  <text x="470" y="392" font-size="15" fill="#64748b">Time (minutes)</text>
  <text x="20" y="16" font-size="15" fill="#64748b">Frequency density</text>
  <text x="132" y="118" font-size="14" font-weight="bold" fill="#16a34a">area = 3 x 10 = 30 people</text>
  <line x1="190" y1="122" x2="190" y2="132" stroke="#16a34a" stroke-width="2"/>
  <text x="330" y="260" font-size="14" fill="#dc2626">wide but shallow: 1 x 20 = 20</text>
</svg>`,
        },
      ],
    },
    {
      heading: "Scatter graphs, correlation and sampling",
      body:
        "A **scatter graph** plots two variables per data point to hunt for a relationship.\n\n- **Positive correlation**: points rise from left to right (revision hours vs score).\n- **Negative correlation**: points fall (age of car vs value).\n- **No correlation**: shapeless cloud.\n- Describe strength too: strong (tight to a line) or weak (loose).\n\nA **line of best fit** is a ruled straight line following the trend, with roughly equal numbers of points on each side. It need not pass through any point or the origin. Use it to estimate:\n\n- **Interpolation** (inside the data range): reliable.\n- **Extrapolation** (outside the data range): UNRELIABLE — the trend may not continue; say so in exam answers.\n\nAn **outlier** is a point far from the trend — identify it by saying it does not fit the pattern.\n\n**Sampling** (4MA1 basics): a **population** is the whole group; a **sample** is the part you actually survey. In a **random sample** every member of the population has an equal chance of selection (e.g. number everyone, pick with a random number generator). A sample is **biased** if part of the population is over- or under-represented — asking only gym members about exercise, or only early arrivals about punctuality.",
      discovery: {
        problem:
          "In seaside towns, days with high ice-cream sales are also days with more swimming rescues — a genuinely strong positive correlation. A councillor proposes banning ice cream to make beaches safer. What has gone wrong?",
        idea:
          "Correlation is not causation. Hot weather causes both more ice-cream sales and more swimmers (hence more rescues). A hidden third variable can create a correlation between two things that have no direct link — so a scatter graph can suggest a relationship, but never proves cause and effect.",
      },
      whyItWorks:
        "Why is extrapolation dangerous? The line of best fit is a summary of the data you HAVE. Between your smallest and largest x-values, the line is anchored by real points. Beyond them there is no evidence the straight-line pattern continues — a plant's growth levels off, a car's value cannot go below zero. The line does not know that; you must.",
      strategies: [
        "Draw a diagram: sketch the cloud of points before naming the correlation",
        "Consider extremes: push the line of best fit far beyond the data and ask if its prediction is physically possible",
      ],
      keyPoints: [
        "Correlation: positive / negative / none, plus strong or weak — describe the real-life meaning in context",
        "Line of best fit: follows the trend, roughly equal points each side; it need not hit the origin",
        "Interpolation (within the data) is reliable; extrapolation (beyond the data) is not — always say why",
        "Random sample: every member equally likely to be chosen; bias = some group over- or under-represented",
        "Correlation never proves causation — a third factor may drive both variables",
      ],
      thinkDeeper:
        "A line of best fit for height vs age fits children aged 5 to 10 beautifully. Predict the height of a 40-year-old with it and you get a 3-metre giant. Where exactly does the reasoning break — the data, the line, or the assumption? Pinning this down is the difference between using statistics and being used by them.",
      diagrams: [
        {
          id: "sta-diag-03",
          title: "Scatter graph with line of best fit and an outlier",
          caption:
            "Hours revised against test score: strong positive correlation. The line of best fit follows the trend with points balanced either side. The red point is an outlier — it does not fit the pattern. Predictions beyond 12 hours would be extrapolation.",
          svg: `<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Scatter graph of hours revised against test score showing strong positive correlation, a blue line of best fit, and one red outlier point at 10 hours but a score of only 35">
  <line x1="60" y1="340" x2="620" y2="340" stroke="#64748b" stroke-width="2"/>
  <line x1="60" y1="20" x2="60" y2="340" stroke="#64748b" stroke-width="2"/>
  <line x1="140" y1="336" x2="140" y2="344" stroke="#64748b" stroke-width="2"/>
  <line x1="220" y1="336" x2="220" y2="344" stroke="#64748b" stroke-width="2"/>
  <line x1="300" y1="336" x2="300" y2="344" stroke="#64748b" stroke-width="2"/>
  <line x1="380" y1="336" x2="380" y2="344" stroke="#64748b" stroke-width="2"/>
  <line x1="460" y1="336" x2="460" y2="344" stroke="#64748b" stroke-width="2"/>
  <line x1="540" y1="336" x2="540" y2="344" stroke="#64748b" stroke-width="2"/>
  <text x="136" y="362" font-size="14" fill="#64748b">2</text>
  <text x="216" y="362" font-size="14" fill="#64748b">4</text>
  <text x="296" y="362" font-size="14" fill="#64748b">6</text>
  <text x="376" y="362" font-size="14" fill="#64748b">8</text>
  <text x="452" y="362" font-size="14" fill="#64748b">10</text>
  <text x="532" y="362" font-size="14" fill="#64748b">12</text>
  <line x1="56" y1="284" x2="64" y2="284" stroke="#64748b" stroke-width="2"/>
  <line x1="56" y1="228" x2="64" y2="228" stroke="#64748b" stroke-width="2"/>
  <line x1="56" y1="172" x2="64" y2="172" stroke="#64748b" stroke-width="2"/>
  <line x1="56" y1="116" x2="64" y2="116" stroke="#64748b" stroke-width="2"/>
  <line x1="56" y1="60" x2="64" y2="60" stroke="#64748b" stroke-width="2"/>
  <text x="30" y="289" font-size="14" fill="#64748b">20</text>
  <text x="30" y="233" font-size="14" fill="#64748b">40</text>
  <text x="30" y="177" font-size="14" fill="#64748b">60</text>
  <text x="30" y="121" font-size="14" fill="#64748b">80</text>
  <text x="22" y="65" font-size="14" fill="#64748b">100</text>
  <text x="440" y="392" font-size="15" fill="#64748b">Hours revised</text>
  <text x="20" y="16" font-size="15" fill="#64748b">Test score</text>
  <line x1="80" y1="250" x2="520" y2="91" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="100" cy="247.6" r="5" fill="#16a34a"/>
  <circle cx="140" cy="222.4" r="5" fill="#16a34a"/>
  <circle cx="180" cy="205.6" r="5" fill="#16a34a"/>
  <circle cx="220" cy="208.4" r="5" fill="#16a34a"/>
  <circle cx="260" cy="177.6" r="5" fill="#16a34a"/>
  <circle cx="300" cy="180.4" r="5" fill="#16a34a"/>
  <circle cx="340" cy="155.2" r="5" fill="#16a34a"/>
  <circle cx="380" cy="135.6" r="5" fill="#16a34a"/>
  <circle cx="420" cy="138.4" r="5" fill="#16a34a"/>
  <circle cx="460" cy="110.4" r="5" fill="#16a34a"/>
  <circle cx="500" cy="93.6" r="5" fill="#16a34a"/>
  <circle cx="460" cy="242" r="6" fill="#dc2626"/>
  <text x="474" y="248" font-size="14" font-weight="bold" fill="#dc2626">outlier</text>
  <text x="330" y="70" font-size="14" fill="#2563eb">line of best fit</text>
</svg>`,
        },
      ],
    },
  ],

  learn: {
    flashcards: [
      {
        front: "How do you find the mean of a list?",
        back: "Add all the values and divide by how many there are: mean = Σx ÷ n. It uses every value, so outliers drag it.",
      },
      {
        front: "How do you find the median of a list?",
        back: "Order the data, then take the value at position (n+1)/2. For an even count, average the middle two values.",
      },
      {
        front: "What are the mode and the range?",
        back: "Mode = the most frequent value (the only average usable for non-numeric data). Range = largest − smallest — a measure of SPREAD, not an average.",
      },
      {
        front: "Mean from a frequency table?",
        back: "Mean = Σfx ÷ Σf. Multiply each value by its frequency, total those, and divide by the TOTAL FREQUENCY (never by the number of rows).",
      },
      {
        front: "Why is the mean from grouped data only an estimate?",
        back: "Because the actual data values are unknown — we assume every value in a class equals the class MIDPOINT.",
      },
      {
        front: "Which average should you use when the data has an extreme outlier?",
        back: "The median — it depends only on position in the ordered list, so outliers cannot drag it. The mean would be pulled towards the outlier.",
      },
      {
        front: "Where do you plot points on a cumulative frequency graph?",
        back: "At the UPPER class boundary of each class, because the running total is only complete at the top of the class. Start the curve at cf = 0 at the first lower boundary.",
      },
      {
        front: "How do you read the median and quartiles from a CF graph?",
        back: "Median: read across from cf = n/2. Lower quartile: cf = n/4. Upper quartile: cf = 3n/4. Then read down to the data axis.",
      },
      {
        front: "What is the interquartile range and why is it useful?",
        back: "IQR = Q3 − Q1, the spread of the middle 50%. It ignores the top and bottom quarters, so outliers cannot distort it — unlike the range.",
      },
      {
        front: "What is frequency density?",
        back: "frequency density = frequency ÷ class width. Reversing: frequency = fd × class width = AREA of the histogram bar.",
      },
      {
        front: "In a histogram with unequal class widths, what represents frequency?",
        back: "The AREA of each bar, not its height. A tall narrow bar can hold fewer people than a short wide one.",
      },
      {
        front: "How do you compare two distributions for full marks?",
        back: "Two sentences in context: compare the MEDIANS (who is better on average, quoting both values) and compare the IQRs (who is more consistent).",
      },
      {
        front: "Interpolation vs extrapolation on a scatter graph?",
        back: "Interpolation = predicting INSIDE the data range using the line of best fit (reliable). Extrapolation = predicting OUTSIDE it (unreliable — the trend may not continue).",
      },
      {
        front: "What makes a sample random, and what makes one biased?",
        back: "Random: every member of the population has an equal chance of selection. Biased: some group is over- or under-represented (e.g. surveying only gym members about exercise).",
      },
    ],
    keyFacts: [
      "Mean = Σx ÷ n; median at position (n+1)/2 of the ORDERED list; mode = most frequent; range = largest − smallest",
      "total = mean × n — the key to every 'find the missing value' and combined-mean problem",
      "Mean from a frequency table: Σfx ÷ Σf; grouped data: use midpoints, and the answer is an ESTIMATE",
      "The median resists outliers; the mean is dragged by them; the range is wrecked by them",
      "CF graphs: plot at upper class boundaries; read median at n/2, Q1 at n/4, Q3 at 3n/4",
      "IQR = Q3 − Q1 = spread of the middle half; smaller IQR means more consistent",
      "Histogram: frequency density = frequency ÷ class width, so AREA = frequency",
      "With unequal widths, the modal class has the highest frequency density, not the highest frequency",
      "Line of best fit: follow the trend, balance the points; interpolate with confidence, extrapolate at your peril",
      "Correlation is not causation — a third variable may drive both quantities",
    ],
    formulaSheet: [
      { name: "Mean of a list", formula: "mean = Σx ÷ n" },
      {
        name: "Mean from a frequency table",
        formula: "mean = Σfx ÷ Σf",
        note: "Divide by total frequency, not the number of rows.",
      },
      {
        name: "Estimated mean (grouped data)",
        formula: "mean ≈ Σ(f × midpoint) ÷ Σf",
        note: "An estimate: actual values are unknown, so midpoints stand in.",
      },
      {
        name: "Median position (list)",
        formula: "(n + 1) ÷ 2",
        note: "On a CF graph use n/2 (and n/4, 3n/4 for quartiles).",
      },
      { name: "Interquartile range", formula: "IQR = Q3 − Q1" },
      { name: "Range", formula: "range = largest − smallest" },
      {
        name: "Frequency density",
        formula: "fd = frequency ÷ class width",
        note: "So frequency = fd × class width = area of the bar.",
      },
    ],
  },

  quiz: {
    mcq: [
      {
        id: "sta-quiz-mcq-01",
        question: "Find the mean of 4, 6, 6, 9, 15.",
        options: ["8", "6", "11", "10"],
        answerIndex: 0,
        explanation:
          "Mean = (4 + 6 + 6 + 9 + 15) ÷ 5 = 40 ÷ 5 = 8. Watch the traps: 6 is the median AND the mode, and 11 is the range (15 − 4) — none of those is the mean.",
        guideRef: "The three faces of average",
        difficulty: "warmup",
      },
      {
        id: "sta-quiz-mcq-02",
        question: "Find the median of 12, 5, 9, 3, 20, 7.",
        options: ["6", "8", "9", "7"],
        answerIndex: 1,
        explanation:
          "Order first: 3, 5, 7, 9, 12, 20. Six values, so the median is the mean of the 3rd and 4th: (7 + 9) ÷ 2 = 8. Choosing 6 comes from averaging the middle of the UNORDERED list — the classic slip.",
        guideRef: "The three faces of average",
        difficulty: "warmup",
      },
      {
        id: "sta-quiz-mcq-03",
        question:
          "Goals scored per match: 0 goals in 4 matches, 1 goal in 7, 2 goals in 5, 3 goals in 3, 4 goals in 1. What is the mean number of goals per match?",
        options: ["1.5", "2", "6", "1"],
        answerIndex: 0,
        explanation:
          "Σfx = 0×4 + 1×7 + 2×5 + 3×3 + 4×1 = 30 and Σf = 20, so mean = 30 ÷ 20 = 1.5. Answer 6 comes from dividing 30 by the 5 rows; 2 is the mean of the values 0–4 ignoring frequencies; 1 is the mode (and median).",
        guideRef: "Averages from frequency tables",
        difficulty: "core",
        hints: [
          "You cannot just average 0, 1, 2, 3, 4 — some happened more often than others.",
          "Add an fx column: multiply each number of goals by its frequency.",
          "Divide Σfx by the TOTAL number of matches, Σf = 20.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "sta-quiz-mcq-04",
        question:
          "Grouped data: 0 < x ≤ 10 (f = 5), 10 < x ≤ 20 (f = 8), 20 < x ≤ 30 (f = 7). What is the estimated mean?",
        options: ["16", "21", "15", "10.7"],
        answerIndex: 0,
        explanation:
          "Midpoints are 5, 15, 25. Σ(f × mid) = 25 + 120 + 175 = 320 and Σf = 20, so estimated mean = 320 ÷ 20 = 16. Using upper boundaries gives 21; 15 is just the middle midpoint; 10.7 comes from dividing by 30 instead of 20.",
        guideRef: "Estimating the mean from grouped data",
        difficulty: "core",
        hints: [
          "The exact values are unknown — what single value best represents each class?",
          "Use the midpoint of each class: 5, 15 and 25.",
          "Compute Σ(f × midpoint) and divide by Σf = 20.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "sta-quiz-mcq-05",
        question: "Why is a mean calculated from grouped data only an estimate?",
        options: [
          "Because the actual data values are unknown, so each is assumed to equal its class midpoint",
          "Because the answer has to be rounded",
          "Because the frequencies are only estimates",
          "Because the mean is always less accurate than the median",
        ],
        answerIndex: 0,
        explanation:
          "Grouping hides the exact values — we only know how many fell in each class, so we assume everyone sits at the midpoint. The frequencies are exact counts, rounding is not the issue, and the mean is not inherently less accurate than the median.",
        guideRef: "Estimating the mean from grouped data",
        difficulty: "core",
        hints: [
          "Think about what information the grouped table has thrown away.",
          "If a class is 20 < t ≤ 30 with frequency 10, what do you actually know about those 10 values?",
          "The method must invent a stand-in value for each class — which one, and why is that an assumption?",
        ],
        strategy: "consider extremes",
      },
      {
        id: "sta-quiz-mcq-06",
        question: "When drawing a cumulative frequency graph, each point is plotted at the...",
        options: [
          "upper class boundary",
          "midpoint of the class",
          "lower class boundary",
          "class width",
        ],
        answerIndex: 0,
        explanation:
          "Cumulative frequency counts everything up to the END of the class, so the running total is only complete at the upper boundary. Plotting at midpoints is the single most common CF error (it is what you do for frequency POLYGONS, not CF graphs).",
        guideRef: "Cumulative frequency graphs",
        difficulty: "core",
        hints: [
          "Cumulative frequency answers 'how many values are less than or equal to...?'",
          "For the class 10 < t ≤ 20 with running total 24, at what t-value are you certain all 24 have occurred?",
          "Only at the very top of the class — plot there.",
        ],
        strategy: "look for invariants",
      },
      {
        id: "sta-quiz-mcq-07",
        question:
          "A cumulative frequency graph shows the marks of 60 students. To estimate the median you read across from which cumulative frequency?",
        options: ["30", "30.5", "15", "45"],
        answerIndex: 0,
        explanation:
          "On a CF graph the median is read at cf = n/2 = 60 ÷ 2 = 30. The (n+1)/2 = 30.5 rule is for listed data, not graph read-offs; 15 and 45 are the quartile positions (n/4 and 3n/4).",
        guideRef: "Cumulative frequency graphs",
        difficulty: "core",
        hints: [
          "The median splits the data in half.",
          "On a CF graph you use n/2, not (n+1)/2.",
          "Half of 60 students is...",
        ],
      },
      {
        id: "sta-quiz-mcq-08",
        question:
          "On a histogram, the class 20 < x ≤ 35 has frequency density 1.6. What is its frequency?",
        options: ["24", "1.6", "16", "32"],
        answerIndex: 0,
        explanation:
          "frequency = fd × class width = 1.6 × (35 − 20) = 1.6 × 15 = 24. Using width 10 gives 16; using the upper boundary 20 gives 32; 1.6 is the density itself, not a count of people.",
        guideRef: "Histograms: when tall bars lie",
        difficulty: "core",
        hints: [
          "Frequency density = frequency ÷ class width. Rearrange it.",
          "What is the width of the class 20 < x ≤ 35?",
          "Multiply the density by that width.",
        ],
        strategy: "work backwards",
      },
      {
        id: "sta-quiz-mcq-09",
        question: "A data set has lower quartile 14 and upper quartile 26. What is the interquartile range?",
        options: ["12", "20", "40", "6"],
        answerIndex: 0,
        explanation:
          "IQR = Q3 − Q1 = 26 − 14 = 12. Adding gives 40; 20 is the midpoint of the quartiles (roughly where the median might be); 6 is half the IQR.",
        guideRef: "Quartiles, IQR and comparing distributions",
        difficulty: "core",
        hints: [
          "The IQR measures the spread of the middle half of the data.",
          "It is the gap between the two quartiles.",
          "Subtract the lower quartile from the upper quartile.",
        ],
      },
      {
        id: "sta-quiz-mcq-10",
        question:
          "Seven positive integers have mode 5, median 5 and mean 6. What is the largest possible value of an integer in the set?",
        options: ["20", "19", "25", "15"],
        answerIndex: 0,
        explanation:
          "The total is 7 × 6 = 42 and the 4th value must be 5. To make one value huge, shrink the rest — but the mode must stay 5. The set 1, 1, 5, 5, 5, 5, 20 works: median 5, mode 5, sum 42. Pushing the small values to 1, 1, 1 would force a tie in the mode, and any other choice leaves less than 20 for the top value. 19 comes from the near-miss 1, 1, 5, 5, 5, 6, 19.",
        guideRef: "The three faces of average",
        difficulty: "challenge",
        hints: [
          "Convert the mean into a total: the seven numbers add to 42.",
          "To maximise one value, make all the others as small as the conditions allow.",
          "The median forces the 4th ordered value to be 5, and the mode forces 5 to appear more often than anything else — check how many 1s you can get away with.",
          "Try sets of the form 1, 1, 5, 5, 5, ?, ? and give the spare total to one number.",
        ],
        strategy: "consider extremes",
      },
    ],
    qa: [
      {
        id: "sta-quiz-qa-01",
        question:
          "For the data set 2, 4, 4, 7, 9, 10 find (a) the mean, (b) the median, (c) the mode, (d) the range.",
        modelAnswer:
          "(a) Mean = (2 + 4 + 4 + 7 + 9 + 10) ÷ 6 = 36 ÷ 6 = 6.\n(b) The data is already ordered; with 6 values the median is the mean of the 3rd and 4th values: (4 + 7) ÷ 2 = 5.5.\n(c) Mode = 4 (it appears twice, more than any other value).\n(d) Range = 10 − 2 = 8.",
        markScheme: ["6", "5.5", "mode 4", "range 8"],
        commonError:
          "Taking the median as 4 or 7 instead of averaging the two middle values, and mixing up mode (most common VALUE) with its frequency.",
        guideRef: "The three faces of average",
        difficulty: "warmup",
      },
      {
        id: "sta-quiz-qa-02",
        question:
          "The table shows the number of pets owned by 25 students: 0 pets (6 students), 1 pet (9), 2 pets (7), 3 pets (2), 4 pets (1). Calculate the mean number of pets per student.",
        modelAnswer:
          "Σfx = 0×6 + 1×9 + 2×7 + 3×2 + 4×1 = 0 + 9 + 14 + 6 + 4 = 33.\nΣf = 25.\nMean = 33 ÷ 25 = 1.32 pets.",
        markScheme: ["1.32", "33", "25", "fx"],
        commonError:
          "Dividing by 5 (the number of rows) instead of 25 (the total frequency), giving 6.6 — always divide by Σf.",
        guideRef: "Averages from frequency tables",
        difficulty: "core",
        hints: [
          "The table is a compressed list of 25 numbers.",
          "Add an fx column: each row contributes (value × frequency) to the total.",
          "Divide the grand total by the total number of students.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "sta-quiz-qa-03",
        question:
          "Heights of 30 plants: 140 < h ≤ 150 (f = 4), 150 < h ≤ 160 (f = 11), 160 < h ≤ 170 (f = 9), 170 < h ≤ 180 (f = 6). (a) Calculate an estimate for the mean height, to 1 decimal place. (b) Explain why your answer is an estimate.",
        modelAnswer:
          "(a) Midpoints: 145, 155, 165, 175.\nΣ(f × mid) = 145×4 + 155×11 + 165×9 + 175×6 = 580 + 1705 + 1485 + 1050 = 4820.\nEstimated mean = 4820 ÷ 30 = 160.666... = 160.7 cm (1 dp).\n(b) It is an estimate because the actual heights are unknown — each plant is assumed to be at the midpoint of its class.",
        markScheme: ["160.7", "4820", "midpoint", "actual values unknown"],
        commonError:
          "Using class boundaries instead of midpoints, or explaining 'because it is rounded' in part (b) — the estimate comes from the midpoint assumption, not rounding.",
        guideRef: "Estimating the mean from grouped data",
        difficulty: "core",
        hints: [
          "You cannot know the exact total height — but you can approximate it class by class.",
          "Use the midpoint of each class as the stand-in height: 145, 155, 165, 175.",
          "Total the f × midpoint values and divide by 30.",
        ],
        strategy: "draw a diagram",
      },
      {
        id: "sta-quiz-qa-04",
        question:
          "A histogram shows journey times. The class 0 < t ≤ 10 has frequency 8. The class 10 < t ≤ 25 has frequency 36. The class 25 < t ≤ 30 is drawn with frequency density 3.2. Find (a) the frequency density of the 0 < t ≤ 10 class, (b) the frequency density of the 10 < t ≤ 25 class, (c) the frequency of the 25 < t ≤ 30 class.",
        modelAnswer:
          "(a) fd = 8 ÷ 10 = 0.8.\n(b) fd = 36 ÷ 15 = 2.4.\n(c) frequency = fd × width = 3.2 × 5 = 16.",
        markScheme: ["2.4", "0.8", "16", "frequency density"],
        commonError:
          "Dividing by 10 for every class regardless of its actual width — the middle class is 15 wide and the last only 5 wide.",
        guideRef: "Histograms: when tall bars lie",
        difficulty: "core",
        hints: [
          "One formula does everything: fd = frequency ÷ class width.",
          "Work out each class width first: 10, 15 and 5.",
          "For part (c) rearrange: frequency = fd × width.",
        ],
        strategy: "work backwards",
      },
      {
        id: "sta-quiz-qa-05",
        question:
          "Class A's test scores: median 62, IQR 15. Class B's scores: median 55, IQR 28. Compare the two distributions. (Two marks: one comparison of average, one of spread, both in context.)",
        modelAnswer:
          "Class A's median (62) is higher than Class B's median (55), so on average Class A scored better on the test.\nClass A's IQR (15) is smaller than Class B's IQR (28), so Class A's scores were more consistent (less spread out) than Class B's.",
        markScheme: ["median", "IQR", "higher", "more consistent"],
        commonError:
          "Writing 'Class A is better' with no statistic named, or comparing the numbers without interpreting them in context — both lose marks. You must name the measure, compare, and interpret.",
        guideRef: "Quartiles, IQR and comparing distributions",
        difficulty: "core",
        hints: [
          "Full marks needs exactly two sentences — one per statistic.",
          "Sentence 1: compare the medians and say what that means about the classes' performance.",
          "Sentence 2: compare the IQRs and say which class was more consistent.",
        ],
        strategy: "use the two-sentence compare formula",
      },
      {
        id: "sta-quiz-qa-06",
        question:
          "Five DISTINCT positive integers have mean 10 and median 12. Find the greatest possible value of the largest integer.",
        modelAnswer:
          "The five numbers total 5 × 10 = 50, and the middle (3rd) number is 12.\nWrite them in order: a < b < 12 < d < e.\nTo make e as large as possible, make a, b and d as small as possible: a = 1, b = 2 (smallest distinct values below 12) and d = 13 (smallest allowed above 12).\nThen e = 50 − 1 − 2 − 12 − 13 = 22.\nCheck: 1, 2, 12, 13, 22 — distinct, median 12, sum 50, mean 10. Greatest possible largest integer = 22.",
        markScheme: ["22", "50", "minimise", "13"],
        commonError:
          "Forgetting the DISTINCT condition (taking d = 12 gives e = 23 but repeats 12), or forgetting that d must exceed the median.",
        guideRef: "The three faces of average",
        difficulty: "challenge",
        hints: [
          "Turn the mean into a total straight away.",
          "Fix the middle value at 12 and think about the two numbers on each side.",
          "One number gets whatever total the other four leave behind — so make the other four as small as the rules allow.",
          "'Distinct' bites twice: below 12 you need two different small numbers, above 12 the fourth number cannot equal 12.",
        ],
        strategy: "consider extremes",
      },
    ],
  },

  questionBank: {
    mcqPapers: [
      {
        id: "sta-mcq-paper-1",
        title: "Practice Paper 1 (Multiple Choice)",
        questions: [
          {
            id: "sta-mcq-p1-q01",
            question: "What is the mode of 3, 5, 5, 6, 7, 7, 7, 9?",
            options: ["7", "5", "6.5", "6"],
            answerIndex: 0,
            explanation:
              "7 appears three times — more than any other value. 6.5 is the median (mean of 6 and 7), 6 is the range (9 − 3), and 5 only appears twice.",
            guideRef: "The three faces of average",
            difficulty: "warmup",
          },
          {
            id: "sta-mcq-p1-q02",
            question: "What is the range of 12, 3, 8, 15, 6?",
            options: ["12", "15", "3", "9"],
            answerIndex: 0,
            explanation:
              "Range = largest − smallest = 15 − 3 = 12. Choosing 15 or 3 quotes an extreme instead of subtracting; 9 comes from 15 − 6, misreading the smallest value.",
            guideRef: "The three faces of average",
            difficulty: "warmup",
          },
          {
            id: "sta-mcq-p1-q03",
            question:
              "Shoe sizes sold: size 4 (8 pairs), size 5 (6 pairs), size 6 (9 pairs), size 7 (2 pairs). What is the median shoe size?",
            options: ["5", "6", "5.5", "4"],
            answerIndex: 0,
            explanation:
              "n = 25, so the median is the 13th value. Cumulative frequencies: 8, then 14 — the 13th value falls in the size-5 group. Size 6 is the MODE (highest frequency, 9); 5.5 wrongly averages sizes; 4 is just the first group.",
            guideRef: "Averages from frequency tables",
            difficulty: "core",
            hints: [
              "There are 25 pairs in total. Which position is the middle one?",
              "Use (n+1)/2 = 13 and run a cumulative total: 8, 14, 23, 25.",
              "Find which size the 13th pair belongs to.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "sta-mcq-p1-q04",
            question: "One value in a data set is replaced by a much larger value. Which average is most affected?",
            options: ["The mean", "The median", "The mode", "All three equally"],
            answerIndex: 0,
            explanation:
              "The mean uses the actual size of every value, so an extreme value drags the total (and the mean) with it. The median depends only on position in the ordered list, and the mode only on repetition — both barely move.",
            guideRef: "The three faces of average",
            difficulty: "core",
            hints: [
              "Try it on a small set: 1, 2, 3, 4, 5 — replace the 5 with 500.",
              "Recalculate all three averages for the new set.",
              "Which one changed dramatically, and why does it use the value's actual size?",
            ],
            strategy: "try small cases",
          },
          {
            id: "sta-mcq-p1-q05",
            question:
              "Times: 0 < t ≤ 4 (f = 6), 4 < t ≤ 8 (f = 10), 8 < t ≤ 16 (f = 4). What is the estimated mean?",
            options: ["6", "6.67", "8.4", "5"],
            answerIndex: 0,
            explanation:
              "Midpoints 2, 6, 12. Σ(f × mid) = 12 + 60 + 48 = 120; Σf = 20; estimate = 120 ÷ 20 = 6. 6.67 is the unweighted mean of the midpoints (ignoring frequencies); 8.4 uses upper boundaries; 5 ignores the last class.",
            guideRef: "Estimating the mean from grouped data",
            difficulty: "core",
            hints: [
              "Note the classes have different widths — find each midpoint carefully.",
              "Midpoints: 2, 6 and 12.",
              "Weight each midpoint by its frequency, then divide by 20.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "sta-mcq-p1-q06",
            question:
              "A cumulative frequency graph shows data for 100 runners. The lower quartile is read from which cumulative frequency?",
            options: ["25", "26", "50", "75"],
            answerIndex: 0,
            explanation:
              "Q1 is read at cf = n/4 = 100 ÷ 4 = 25. Reading at 50 gives the median and at 75 gives the upper quartile; 26 misapplies the (n+1)-style rule, which is not used for CF graph read-offs.",
            guideRef: "Cumulative frequency graphs",
            difficulty: "core",
            hints: [
              "The lower quartile is one quarter of the way through the data.",
              "On a CF graph, quartiles are read at n/4 and 3n/4.",
              "A quarter of 100 is...",
            ],
          },
          {
            id: "sta-mcq-p1-q07",
            question:
              "On a scatter graph of a car's age against its value, the points fall from left to right, lying close to a straight line. The correlation is:",
            options: ["strong negative", "weak negative", "strong positive", "no correlation"],
            answerIndex: 0,
            explanation:
              "Falling from left to right means as age increases, value decreases: negative. Points close to a line means strong. 'Weak negative' would be a loose, scattered fall; 'positive' would rise.",
            guideRef: "Scatter graphs, correlation and sampling",
            difficulty: "core",
            hints: [
              "Two things to describe: direction and strength.",
              "Falling points = one variable decreases as the other increases.",
              "Tight to a line = strong; loose cloud = weak.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "sta-mcq-p1-q08",
            question:
              "The mean of n numbers is m. The number 2m is added to the set. What is the new mean?",
            options: ["m(n + 2)/(n + 1)", "m", "m + 2", "2m/(n + 1)"],
            answerIndex: 0,
            explanation:
              "Old total = nm. New total = nm + 2m = m(n + 2), shared among n + 1 numbers: mean = m(n + 2)/(n + 1). It is NOT m: 2m is above the old mean, so the mean must rise a little. Check with n = 2, m = 3: numbers total 6, add 6, new mean 12/3 = 4 = 3 × 4/3. ✓",
            guideRef: "The three faces of average",
            difficulty: "challenge",
            hints: [
              "Introduce a variable: write the old TOTAL in terms of n and m.",
              "The new total is nm + 2m — factorise it.",
              "How many numbers share the new total?",
              "Test your formula with a tiny case like n = 2, m = 3.",
            ],
            strategy: "introduce a variable",
          },
        ],
      },
      {
        id: "sta-mcq-paper-2",
        title: "Practice Paper 2 (Multiple Choice)",
        questions: [
          {
            id: "sta-mcq-p2-q01",
            question: "The mean of 6 numbers is 9. What is the total of the 6 numbers?",
            options: ["54", "15", "1.5", "45"],
            answerIndex: 0,
            explanation:
              "total = mean × n = 9 × 6 = 54. Adding (15) or dividing (1.5) confuses the relationship; 45 is 9 × 5, a miscount.",
            guideRef: "The three faces of average",
            difficulty: "warmup",
          },
          {
            id: "sta-mcq-p2-q02",
            question:
              "Grouped data (equal widths): 0 < x ≤ 10 (f = 7), 10 < x ≤ 20 (f = 12), 20 < x ≤ 30 (f = 9), 30 < x ≤ 40 (f = 5). What is the modal class?",
            options: ["10 < x ≤ 20", "0 < x ≤ 10", "20 < x ≤ 30", "30 < x ≤ 40"],
            answerIndex: 0,
            explanation:
              "With equal class widths, the modal class is simply the one with the highest frequency: 12, for 10 < x ≤ 20. (With UNEQUAL widths you would compare frequency densities instead.)",
            guideRef: "Estimating the mean from grouped data",
            difficulty: "warmup",
          },
          {
            id: "sta-mcq-p2-q03",
            question:
              "A class has 12 boys with mean score 58 and 18 girls with mean score 63. What is the mean score of the whole class?",
            options: ["61", "60.5", "60", "62"],
            answerIndex: 0,
            explanation:
              "Totals: 12 × 58 = 696 and 18 × 63 = 1134, so the class total is 1830 over 30 students: 1830 ÷ 30 = 61. 60.5 is the unweighted average of 58 and 63 — wrong because the groups are different sizes; the correct mean sits closer to the girls' 63 since there are more girls.",
            guideRef: "The three faces of average",
            difficulty: "core",
            hints: [
              "You cannot just average 58 and 63 — the groups have different sizes.",
              "Work backwards from each mean to each group's TOTAL score.",
              "Combine the totals and divide by the total number of students, 30.",
            ],
            strategy: "work backwards",
          },
          {
            id: "sta-mcq-p2-q04",
            question:
              "On a histogram, the bar for 30 < x ≤ 50 has frequency density 0.9. How many data values are in that class?",
            options: ["18", "0.045", "45", "9"],
            answerIndex: 0,
            explanation:
              "frequency = fd × width = 0.9 × 20 = 18. 45 uses the upper boundary 50 as the width; 9 uses width 10; 0.045 divides instead of multiplying.",
            guideRef: "Histograms: when tall bars lie",
            difficulty: "core",
            hints: [
              "Area gives frequency on a histogram.",
              "The class width is 50 − 30.",
              "Multiply density by width.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "sta-mcq-p2-q05",
            question:
              "A cumulative frequency graph shows the marks of 60 students. The cumulative frequency at 45 marks is 51. How many students scored MORE than 45 marks?",
            options: ["9", "51", "15", "6"],
            answerIndex: 0,
            explanation:
              "cf = 51 means 51 students scored 45 or fewer, so 60 − 51 = 9 scored more. Answering 51 reads the graph but forgets to subtract; 15 subtracts the mark value 45 from 60, mixing up the axes.",
            guideRef: "Cumulative frequency graphs",
            difficulty: "core",
            hints: [
              "What does the cumulative frequency 51 actually count?",
              "It counts students at or BELOW 45 marks.",
              "Everyone else scored more — subtract from the total.",
            ],
            strategy: "work backwards",
          },
          {
            id: "sta-mcq-p2-q06",
            question:
              "A cumulative frequency graph shows 120 values. At which cumulative frequencies do you read off the lower and upper quartiles?",
            options: ["30 and 90", "40 and 80", "30.25 and 90.75", "25 and 75"],
            answerIndex: 0,
            explanation:
              "Q1 at n/4 = 30 and Q3 at 3n/4 = 90. 40 and 80 split into thirds; 25 and 75 confuse percentages with positions (they would be right only if n = 100); the decimal positions belong to listed-data rules, not CF graphs.",
            guideRef: "Quartiles, IQR and comparing distributions",
            difficulty: "core",
            hints: [
              "Quartiles split the data into four equal parts.",
              "For a CF graph use n/4 and 3n/4.",
              "n = 120 here — not 100.",
            ],
          },
          {
            id: "sta-mcq-p2-q07",
            question: "Which statement about a line of best fit is correct?",
            options: [
              "It follows the trend of the points with roughly equal numbers of points on each side",
              "It must pass through as many points as possible",
              "It must pass through the origin",
              "It must join the first point to the last point",
            ],
            answerIndex: 0,
            explanation:
              "A line of best fit summarises the trend: draw it through the middle of the cloud, balancing points either side. It need not touch ANY point, need not start at the origin, and joining first-to-last lets two possibly-freak points dictate the whole line.",
            guideRef: "Scatter graphs, correlation and sampling",
            difficulty: "core",
            hints: [
              "The line summarises ALL the points, not any particular ones.",
              "Think about what 'balancing' the points either side achieves.",
              "Ask what goes wrong if two extreme points fully determine the line.",
            ],
          },
          {
            id: "sta-mcq-p2-q08",
            question:
              "On a histogram drawn on paper, the bar for 20 < x ≤ 30 is 3 cm tall and represents 45 people. The bar for 30 < x ≤ 55 is 1.2 cm tall. How many people does the second bar represent?",
            options: ["45", "18", "112.5", "30"],
            answerIndex: 0,
            explanation:
              "Height is proportional to frequency density. First bar: fd = 45 ÷ 10 = 4.5, so 3 cm ↔ 4.5, i.e. 1 cm ↔ 1.5. Second bar: fd = 1.2 × 1.5 = 1.8 over width 25, so frequency = 1.8 × 25 = 45 — the same as the first bar despite being much shorter, because it is much wider. 18 forgets the width; 112.5 wrongly reuses 4.5 as the second bar's density.",
            guideRef: "Histograms: when tall bars lie",
            difficulty: "challenge",
            hints: [
              "The vertical scale is unknown — use the first bar to find it.",
              "First bar: frequency 45, width 10, so its frequency density is 4.5, drawn as 3 cm.",
              "Convert 1.2 cm into a frequency density using that scale.",
              "Multiply by the second bar's width — which is 25, not 10.",
            ],
            strategy: "look for invariants",
          },
        ],
      },
      {
        id: "sta-mcq-paper-3",
        title: "Practice Paper 3 (Multiple Choice)",
        questions: [
          {
            id: "sta-mcq-p3-q01",
            question: "What is the median of 4, 9, 11, 15, 21?",
            options: ["11", "12", "15", "17"],
            answerIndex: 0,
            explanation:
              "Five ordered values: the median is the 3rd, which is 11. 12 is the mean (60 ÷ 5) and 17 is the range (21 − 4).",
            guideRef: "The three faces of average",
            difficulty: "warmup",
          },
          {
            id: "sta-mcq-p3-q02",
            question:
              "To study the nation's exercise habits, a researcher questions the first 30 people entering one gym. Why is this sample biased?",
            options: [
              "Gym-goers are not representative of the whole population",
              "30 people is always too small a sample",
              "She should have questioned 50 people",
              "Surveys are always biased",
            ],
            answerIndex: 0,
            explanation:
              "People entering a gym almost certainly exercise more than the general population, so one group is heavily over-represented — that is bias. Sample size is a separate issue (a bigger sample of gym-goers would still be biased).",
            guideRef: "Scatter graphs, correlation and sampling",
            difficulty: "warmup",
          },
          {
            id: "sta-mcq-p3-q03",
            question: "In a simple random sample of a population:",
            options: [
              "every member of the population has an equal chance of being selected",
              "every possible answer is equally likely",
              "the sample must contain at least 10% of the population",
              "members are chosen so the sample looks like the researcher expects",
            ],
            answerIndex: 0,
            explanation:
              "Random sampling is defined by equal selection chance for every member — e.g. numbering the population and using a random number generator. There is no fixed percentage rule, and hand-picking a sample to 'look right' is exactly what randomness prevents.",
            guideRef: "Scatter graphs, correlation and sampling",
            difficulty: "core",
            hints: [
              "The definition is about the CHANCE of selection, not the results.",
              "Think of how you would actually do it: numbered list plus random numbers.",
              "Which option describes each member's selection probability?",
            ],
          },
          {
            id: "sta-mcq-p3-q04",
            question:
              "Weights: 0 < w ≤ 2 (f = 5), 2 < w ≤ 5 (f = 12), 5 < w ≤ 10 (f = 3). What is the estimated mean weight?",
            options: ["3.475", "4", "5", "1.95"],
            answerIndex: 0,
            explanation:
              "Midpoints 1, 3.5, 7.5. Σ(f × mid) = 5 + 42 + 22.5 = 69.5; Σf = 20; estimate = 69.5 ÷ 20 = 3.475. 4 is the unweighted mean of the midpoints; 5 uses upper boundaries; 1.95 uses lower boundaries.",
            guideRef: "Estimating the mean from grouped data",
            difficulty: "core",
            hints: [
              "These classes have widths 2, 3 and 5 — find each midpoint separately.",
              "Midpoints: 1, 3.5 and 7.5.",
              "Weight by frequency and divide by the total frequency, 20.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "sta-mcq-p3-q05",
            question:
              "A cumulative frequency graph shows 200 plant heights. The upper quartile is read from which cumulative frequency?",
            options: ["150", "151", "100", "50"],
            answerIndex: 0,
            explanation:
              "Q3 is read at 3n/4 = 3 × 200 ÷ 4 = 150. Reading at 100 gives the median and at 50 the lower quartile; 151 misapplies a listed-data position rule to a graph.",
            guideRef: "Quartiles, IQR and comparing distributions",
            difficulty: "core",
            hints: [
              "The upper quartile is three quarters of the way through the data.",
              "Use 3n/4 for a CF graph.",
              "Three quarters of 200 is...",
            ],
          },
          {
            id: "sta-mcq-p3-q06",
            question:
              "Ice-cream sales and swimming rescues are strongly positively correlated. What is the best conclusion?",
            options: [
              "A third factor, such as hot weather, may cause both to increase",
              "Buying ice cream causes swimming accidents",
              "Swimming rescues cause people to buy ice cream",
              "The data must have been recorded wrongly",
            ],
            answerIndex: 0,
            explanation:
              "Correlation does not prove causation. Hot weather plausibly drives both variables up together. The data can be perfectly correct and strongly correlated without either variable causing the other.",
            guideRef: "Scatter graphs, correlation and sampling",
            difficulty: "core",
            hints: [
              "Correlation tells you two things move together — not WHY.",
              "Ask: is there something that would push both variables up at the same time?",
              "Think about what kind of day produces both high ice-cream sales and busy beaches.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "sta-mcq-p3-q07",
            question:
              "A line of best fit is drawn for data on children aged 5 to 10. Why would using it to predict a value for an 18-year-old be unreliable?",
            options: [
              "It is extrapolation — 18 is outside the range of the data, where the trend may not continue",
              "Lines of best fit can never be used for predictions",
              "The sample of children was too small",
              "Because 18-year-olds were not asked permission",
            ],
            answerIndex: 0,
            explanation:
              "Predicting outside the data range is extrapolation: the straight-line trend is only evidenced between ages 5 and 10, and growth patterns change beyond it. Predictions INSIDE the range (interpolation) are legitimate uses of the line.",
            guideRef: "Scatter graphs, correlation and sampling",
            difficulty: "core",
            hints: [
              "Where does the line have actual data points backing it up?",
              "18 lies well beyond the largest age in the data set.",
              "Name the technical term for predicting beyond the data.",
            ],
            strategy: "consider extremes",
          },
          {
            id: "sta-mcq-p3-q08",
            question:
              "Seven cards each show a number. The mean of all seven is 10. The mean of the three smallest is 6 and the mean of the three largest is 15. What number is on the middle card?",
            options: ["7", "10", "9", "13"],
            answerIndex: 0,
            explanation:
              "Totals: all seven sum to 70; the three smallest sum to 18; the three largest sum to 45. The middle card is 70 − 18 − 45 = 7. Answering 10 assumes the middle card equals the mean — averages do not work like that.",
            guideRef: "The three faces of average",
            difficulty: "challenge",
            hints: [
              "Means hide totals — convert every mean into a total.",
              "All seven cards: total 70. Three smallest: total 18. Three largest: total 45.",
              "The three groups (smallest three, middle one, largest three) together make all seven cards.",
              "Subtract to isolate the middle card.",
            ],
            strategy: "work backwards",
          },
        ],
      },
    ],
    qaPapers: [
      {
        id: "sta-qa-paper-1",
        title: "Practice Paper 1 (Written)",
        questions: [
          {
            id: "sta-qa-p1-q01",
            question:
              "Five friends' times (minutes) to solve a puzzle: 14, 9, 21, 9, 17. Find (a) the mode, (b) the median, (c) the mean, (d) the range.",
            modelAnswer:
              "(a) Mode = 9 (appears twice).\n(b) Ordered: 9, 9, 14, 17, 21 — the middle (3rd) value is 14, so median = 14 minutes.\n(c) Mean = (14 + 9 + 21 + 9 + 17) ÷ 5 = 70 ÷ 5 = 14 minutes.\n(d) Range = 21 − 9 = 12 minutes.",
            markScheme: ["14", "9", "12", "ordered"],
            commonError:
              "Finding the median without ordering the data first — the middle of the ORIGINAL list is 21, which is wrong.",
            guideRef: "The three faces of average",
            difficulty: "warmup",
          },
          {
            id: "sta-qa-p1-q02",
            question:
              "The number of siblings of 30 students: 0 siblings (5 students), 1 (12), 2 (8), 3 (4), 4 (1). Find (a) the mean number of siblings, to 2 decimal places, and (b) the median number of siblings.",
            modelAnswer:
              "(a) Σfx = 0×5 + 1×12 + 2×8 + 3×4 + 4×1 = 0 + 12 + 16 + 12 + 4 = 44.\nMean = 44 ÷ 30 = 1.4666... = 1.47 (2 dp).\n(b) n = 30, so the median is the mean of the 15th and 16th values. Cumulative frequencies: 5, 17, ... — the 15th and 16th values both lie in the '1 sibling' group. Median = 1.",
            markScheme: ["1.47", "median 1", "44", "cumulative"],
            commonError:
              "Dividing Σfx by 5 (the number of rows) instead of 30, or reading the median as the middle ROW of the table rather than the middle STUDENT.",
            guideRef: "Averages from frequency tables",
            difficulty: "core",
            hints: [
              "Add an fx column and total it.",
              "For the median of 30 values you need the 15th and 16th — use a running total of frequencies.",
              "The running total passes 15 inside which group?",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "sta-qa-p1-q03",
            question:
              "Masses of 40 parcels: 0 < m ≤ 1 (f = 8), 1 < m ≤ 2 (f = 15), 2 < m ≤ 4 (f = 12), 4 < m ≤ 6 (f = 5). (a) Calculate an estimate of the mean mass in kg, to 2 decimal places. (b) Explain why it is an estimate. (c) State the class containing the median.",
            modelAnswer:
              "(a) Midpoints: 0.5, 1.5, 3, 5.\nΣ(f × mid) = 0.5×8 + 1.5×15 + 3×12 + 5×5 = 4 + 22.5 + 36 + 25 = 87.5.\nEstimated mean = 87.5 ÷ 40 = 2.1875 = 2.19 kg (2 dp).\n(b) The exact masses are unknown — each parcel is assumed to weigh the midpoint of its class, so the answer is an estimate.\n(c) The median is around the 20th value. Cumulative frequencies: 8, 23, ... so the 20th value is in the class 1 < m ≤ 2.",
            markScheme: ["2.19", "1 < m ≤ 2", "midpoint", "87.5"],
            commonError:
              "Careless midpoints when class widths change: the class 2 < m ≤ 4 has midpoint 3, not 2.5. Also writing an exact 'median = ...' — grouped data only lets you name the median CLASS.",
            guideRef: "Estimating the mean from grouped data",
            difficulty: "core",
            hints: [
              "The class widths are 1, 1, 2 and 2 — midpoints are not evenly spaced.",
              "Set out columns for midpoint and f × midpoint, then total.",
              "For (c), run cumulative frequencies until you pass position 20.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "sta-qa-p1-q04",
            question:
              "A cumulative frequency graph shows the masses of 80 apples. From the graph: cf = 20 at 96 g, cf = 40 at 108 g, cf = 60 at 121 g, and cf = 68 at 130 g. Use these readings to estimate (a) the median mass, (b) the interquartile range, (c) the number of apples heavier than 130 g.",
            modelAnswer:
              "(a) Median at cf = n/2 = 40, so median ≈ 108 g.\n(b) Q1 at cf = 20 gives 96 g; Q3 at cf = 60 gives 121 g. IQR = 121 − 96 = 25 g.\n(c) cf = 68 at 130 g means 68 apples weigh 130 g or less, so 80 − 68 = 12 apples are heavier.",
            markScheme: ["108", "25", "12", "quartile"],
            commonError:
              "In (c), answering 68 (the graph reading) instead of subtracting from 80 — the question asks for MORE than 130 g.",
            guideRef: "Cumulative frequency graphs",
            difficulty: "core",
            hints: [
              "With n = 80: which cf values correspond to Q1, the median and Q3?",
              "They are 20, 40 and 60 — match them to the given readings.",
              "For (c), the reading counts apples AT OR BELOW 130 g.",
            ],
            strategy: "work backwards",
          },
          {
            id: "sta-qa-p1-q05",
            question:
              "A histogram shows call lengths. The class 0 < t ≤ 10 has frequency 20. The class 10 < t ≤ 15 is drawn with frequency density 3.6. The class 15 < t ≤ 30 has frequency 21. Find (a) the frequency density of the 0 < t ≤ 10 class, (b) the frequency of the 10 < t ≤ 15 class, (c) the frequency density of the 15 < t ≤ 30 class, and (d) the total number of calls in these three classes.",
            modelAnswer:
              "(a) fd = 20 ÷ 10 = 2.\n(b) frequency = 3.6 × 5 = 18.\n(c) fd = 21 ÷ 15 = 1.4.\n(d) Total = 20 + 18 + 21 = 59 calls.",
            markScheme: ["18", "2", "1.4", "59"],
            commonError:
              "Using the same width for every class: the widths here are 10, 5 and 15. Frequency density must use each class's OWN width.",
            guideRef: "Histograms: when tall bars lie",
            difficulty: "core",
            hints: [
              "Write each class width down first: 10, 5, 15.",
              "fd = frequency ÷ width converts one way; frequency = fd × width converts back.",
              "Part (d) just totals the three frequencies — two given, one from (b).",
            ],
            strategy: "work backwards",
          },
          {
            id: "sta-qa-p1-q06",
            question:
              "The mean of eight numbers is 41. The mean of the six smallest of them is 38. The two remaining numbers are in the ratio 3 : 2. Find the larger of the two remaining numbers.",
            modelAnswer:
              "Total of all eight = 8 × 41 = 328. Total of the six smallest = 6 × 38 = 228.\nSo the two remaining numbers sum to 328 − 228 = 100.\nRatio 3 : 2 means 5 parts = 100, so 1 part = 20.\nThe larger number = 3 × 20 = 60.",
            markScheme: ["60", "328", "100", "5 parts"],
            commonError:
              "Averaging 41 and 38 somewhere, or splitting 100 in half — the ratio 3 : 2 must be applied to the PAIR'S total, not the overall total.",
            guideRef: "The three faces of average",
            difficulty: "challenge",
            hints: [
              "Every mean in the question is a total in disguise.",
              "Find the total of all eight, then the total of the six smallest.",
              "The difference belongs to the remaining two numbers.",
              "Share that difference in the ratio 3 : 2.",
            ],
            strategy: "work backwards",
            solutions: [
              {
                label: "Totals method",
                steps: [
                  "Total of all eight numbers = 8 × 41 = 328.",
                  "Total of the six smallest = 6 × 38 = 228.",
                  "The remaining two numbers sum to 328 − 228 = 100.",
                  "Ratio 3 : 2 → 5 parts = 100 → 1 part = 20 → larger number = 60.",
                ],
              },
              {
                label: "Balancing (deviation) method — the elegant one",
                steps: [
                  "Measure everything from the overall mean, 41.",
                  "The six smallest average 38, i.e. 3 below the mean each: a total deficit of 6 × 3 = 18.",
                  "Deviations must balance, so the two remaining numbers sit a combined 18 ABOVE two 'fair shares' of 41: their sum = 2 × 41 + 18 = 100.",
                  "Split 100 in the ratio 3 : 2 to get 60 and 40; the larger is 60.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "sta-qa-paper-2",
        title: "Practice Paper 2 (Written)",
        questions: [
          {
            id: "sta-qa-p2-q01",
            question:
              "State which average — mean, median or mode — is most appropriate in each case, with a brief reason: (a) a shoe shop deciding which size to stock most of; (b) the typical salary at a firm where the owner earns far more than everyone else; (c) finding each person's equal share of a restaurant bill.",
            modelAnswer:
              "(a) Mode — the shop wants the MOST POPULAR size; means and medians of shoe sizes may not even be sizes that exist.\n(b) Median — the owner's salary is an outlier that would drag the mean upwards; the median is unaffected and represents a typical worker.\n(c) Mean — sharing the total equally is exactly what the mean calculates (total ÷ number of people).",
            markScheme: ["mode", "median", "mean", "outlier"],
            commonError:
              "Choosing the mean in (b): one huge salary inflates the mean so it represents nobody — the classic outlier trap.",
            guideRef: "The three faces of average",
            difficulty: "warmup",
          },
          {
            id: "sta-qa-p2-q02",
            question:
              "Test scores. Class A: median 64, range 30, IQR 12. Class B: median 58, range 45, IQR 20. Compare the two distributions, making two statements in context.",
            modelAnswer:
              "Class A's median (64) is higher than Class B's (58), so on average Class A performed better on the test.\nClass A's IQR (12) is smaller than Class B's (20), so Class A's scores were more consistent (less spread out). (Comparing ranges, 30 < 45, supports the same conclusion, but the IQR is more reliable because it ignores extreme values.)",
            markScheme: ["median", "IQR", "higher", "consistent"],
            commonError:
              "Comparing only the numbers ('64 > 58') without interpreting in context, or using the word 'accurate' instead of 'consistent' for spread.",
            guideRef: "Quartiles, IQR and comparing distributions",
            difficulty: "core",
            hints: [
              "One sentence about average, one about spread — both must mention the test context.",
              "Which statistic measures average here? Quote both classes' values.",
              "Smaller IQR means what, in words a non-mathematician would understand?",
            ],
            strategy: "use the two-sentence compare formula",
          },
          {
            id: "sta-qa-p2-q03",
            question:
              "Lengths of 30 leaves: 20 < l ≤ 30 (f = 6), 30 < l ≤ 40 (f = 11), 40 < l ≤ 50 (f = 8), 50 < l ≤ 60 (f = 5). Calculate an estimate for the mean length.",
            modelAnswer:
              "Midpoints: 25, 35, 45, 55.\nΣ(f × mid) = 25×6 + 35×11 + 45×8 + 55×5 = 150 + 385 + 360 + 275 = 1170.\nEstimated mean = 1170 ÷ 30 = 39 mm.",
            markScheme: ["39", "1170", "midpoint", "30"],
            commonError:
              "Dividing by 4 (the number of classes) instead of 30, or using boundaries instead of midpoints.",
            guideRef: "Estimating the mean from grouped data",
            difficulty: "core",
            hints: [
              "Every class is 10 wide — the midpoints are easy: 25, 35, 45, 55.",
              "Multiply each midpoint by its frequency and total.",
              "Divide by the total frequency.",
            ],
            strategy: "draw a diagram",
            solutions: [
              {
                label: "Standard midpoint table",
                steps: [
                  "Midpoints: 25, 35, 45, 55.",
                  "f × midpoint: 150, 385, 360, 275.",
                  "Σ(f × mid) = 1170 and Σf = 30.",
                  "Estimated mean = 1170 ÷ 30 = 39 mm.",
                ],
              },
              {
                label: "Assumed mean (coding) — the elegant one",
                steps: [
                  "Guess a convenient 'assumed mean' of 40 and record each midpoint's deviation from it: −15, −5, +5, +15.",
                  "Weight by frequency: 6×(−15) + 11×(−5) + 8×(+5) + 5×(+15) = −90 − 55 + 40 + 75 = −30.",
                  "Average deviation = −30 ÷ 30 = −1.",
                  "Estimated mean = 40 + (−1) = 39 mm — tiny numbers, no big multiplications.",
                ],
              },
            ],
          },
          {
            id: "sta-qa-p2-q04",
            question:
              "Sixty students' times: 0 < t ≤ 10 (f = 8), 10 < t ≤ 20 (f = 20), 20 < t ≤ 30 (f = 22), 30 < t ≤ 40 (f = 10). (a) Write down the four cumulative frequencies. (b) State exactly where the four points should be plotted for a cumulative frequency graph. (c) At which cumulative frequency would you read off to estimate the median, and between which two times must the median therefore lie?",
            modelAnswer:
              "(a) Running totals: 8, 28, 50, 60.\n(b) At the upper class boundaries: (10, 8), (20, 28), (30, 50), (40, 60) — with the curve starting at (0, 0).\n(c) Read at cf = 60 ÷ 2 = 30. Since cf = 28 at t = 20 and cf = 50 at t = 30, the median lies between 20 and 30 minutes.",
            markScheme: ["28", "50", "upper", "between 20 and 30"],
            commonError:
              "Plotting at midpoints (5, 15, 25, 35) — that is the rule for frequency polygons, not cumulative frequency graphs.",
            guideRef: "Cumulative frequency graphs",
            difficulty: "core",
            hints: [
              "Cumulative frequency is a running total — keep adding.",
              "Ask: at what time value is each running total guaranteed complete?",
              "For (c): n/2 = 30 — trap it between two of your cumulative frequencies.",
            ],
            strategy: "look for invariants",
          },
          {
            id: "sta-qa-p2-q05",
            question:
              "A scatter graph shows hours revised (from 2 to 12 hours) against test score for 15 students, with a line of best fit drawn. (a) The points rise from left to right, close to the line. Describe the correlation and what it means here. (b) A student uses the line to predict the score of someone who revised 30 hours. Comment on the reliability. (c) Would a prediction for 8 hours of revision be more reliable? Why?",
            modelAnswer:
              "(a) Strong positive correlation: the more hours a student revised, the higher their test score tended to be.\n(b) Unreliable — 30 hours is far outside the range of the data (2 to 12 hours), so this is extrapolation; there is no evidence the trend continues (scores cannot rise for ever, e.g. past 100%).\n(c) Yes — 8 hours lies within the data range, so this is interpolation, and the line is supported by actual data points around that value.",
            markScheme: ["positive", "extrapolation", "outside", "interpolation"],
            commonError:
              "Saying (b) is unreliable 'because the line might be wrong' — the specific reason required is that 30 hours is OUTSIDE the data range (extrapolation).",
            guideRef: "Scatter graphs, correlation and sampling",
            difficulty: "core",
            hints: [
              "Describe both the direction and the strength of the correlation, in context.",
              "Compare 30 hours with the smallest and largest x-values in the data.",
              "Name the two technical terms: one for predicting inside the range, one for outside.",
            ],
            strategy: "consider extremes",
          },
          {
            id: "sta-qa-p2-q06",
            question:
              "A histogram is drawn on paper with no vertical scale. The bar for 20 < x ≤ 40 is 4 cm wide and 2 cm tall and represents 32 people. The bar for 40 < x ≤ 45 is 1 cm wide and 3 cm tall. How many people does the 40 < x ≤ 45 bar represent?",
            modelAnswer:
              "In a histogram, area represents frequency.\nFirst bar's area on paper = 4 × 2 = 8 cm², representing 32 people, so 1 cm² represents 32 ÷ 8 = 4 people.\nSecond bar's area = 1 × 3 = 3 cm², so it represents 3 × 4 = 12 people.",
            markScheme: ["12", "area", "4 people per cm²", "frequency"],
            commonError:
              "Comparing heights only (3 cm vs 2 cm gives 48 — wrong) — the bars have different widths, so only AREA converts fairly.",
            guideRef: "Histograms: when tall bars lie",
            difficulty: "challenge",
            hints: [
              "No scale on the axis? The invariant 'area = frequency' still holds.",
              "Find the paper area of the first bar and what each cm² is worth in people.",
              "Apply that exchange rate to the second bar's paper area.",
            ],
            strategy: "look for invariants",
          },
        ],
      },
      {
        id: "sta-qa-paper-3",
        title: "Practice Paper 3 (Written)",
        questions: [
          {
            id: "sta-qa-p3-q01",
            question: "The mean of the five numbers 3, 7, x, 11, 14 is 9. Find the value of x.",
            modelAnswer:
              "Total needed = 5 × 9 = 45.\nSum of the known numbers = 3 + 7 + 11 + 14 = 35.\nSo x = 45 − 35 = 10.",
            markScheme: ["10", "45", "35", "total"],
            commonError:
              "Setting the total to 9 instead of 45 — remember total = mean × n.",
            guideRef: "The three faces of average",
            difficulty: "warmup",
          },
          {
            id: "sta-qa-p3-q02",
            question:
              "A frequency table shows values 1, 2, 3, 4 with frequencies 4, x, 6, 2. The mean of the data is 2.4. Find x.",
            modelAnswer:
              "Σfx = 1×4 + 2x + 3×6 + 4×2 = 30 + 2x. Σf = 12 + x.\nMean: (30 + 2x)/(12 + x) = 2.4.\n30 + 2x = 2.4(12 + x) = 28.8 + 2.4x\n30 − 28.8 = 2.4x − 2x\n1.2 = 0.4x, so x = 3.\nCheck: Σf = 15, Σfx = 36, mean = 36 ÷ 15 = 2.4 ✓",
            markScheme: ["x = 3", "30 + 2x", "12 + x", "2.4"],
            commonError:
              "Forgetting that x appears in BOTH the total Σfx and the count Σf — writing (30 + 2x)/12 = 2.4 loses the equation.",
            guideRef: "Averages from frequency tables",
            difficulty: "core",
            hints: [
              "Introduce the variable properly: write Σfx and Σf, both involving x.",
              "Mean = Σfx ÷ Σf — set that equal to 2.4.",
              "Multiply both sides by (12 + x) and solve the linear equation.",
            ],
            strategy: "introduce a variable",
          },
          {
            id: "sta-qa-p3-q03",
            question:
              "Times of 120 swimmers: 0 < t ≤ 20 (f = 12), 20 < t ≤ 40 (f = 28), 40 < t ≤ 60 (f = 42), 60 < t ≤ 80 (f = 30), 80 < t ≤ 100 (f = 8). (a) Calculate an estimate of the mean time. (b) State the class that contains the median.",
            modelAnswer:
              "(a) Midpoints: 10, 30, 50, 70, 90.\nΣ(f × mid) = 120 + 840 + 2100 + 2100 + 720 = 5880.\nEstimated mean = 5880 ÷ 120 = 49 seconds.\n(b) The median is around the 60th value. Cumulative frequencies: 12, 40, 82, ... — position 60 falls in the class 40 < t ≤ 60.",
            markScheme: ["49", "40 < t ≤ 60", "5880", "midpoints"],
            commonError:
              "In (b), giving '50' (the midpoint) as 'the median' — grouped data only justifies naming the CLASS containing the median.",
            guideRef: "Estimating the mean from grouped data",
            difficulty: "core",
            hints: [
              "Equal widths of 20, so midpoints step 10, 30, 50, 70, 90.",
              "Build the f × midpoint column and total it.",
              "For (b), run cumulative frequencies until you pass 60.",
            ],
            strategy: "draw a diagram",
          },
          {
            id: "sta-qa-p3-q04",
            question:
              "Eighty boys solved a puzzle. Their cumulative frequency graph gives Q1 = 32 seconds, median = 45 seconds, Q3 = 62 seconds. For eighty girls: median = 41 seconds and IQR = 18 seconds. (a) Find the IQR for the boys. (b) Compare the boys' and girls' times, making two statements in context.",
            modelAnswer:
              "(a) Boys' IQR = 62 − 32 = 30 seconds.\n(b) The girls' median (41 s) is lower than the boys' (45 s), so the girls solved the puzzle faster on average.\nThe girls' IQR (18 s) is smaller than the boys' (30 s), so the girls' times were more consistent.",
            markScheme: ["30", "median", "IQR", "consistent"],
            commonError:
              "Saying 'the girls are better' without connecting LOWER median to FASTER times — in time data, smaller is better, and you must make that link explicitly.",
            guideRef: "Quartiles, IQR and comparing distributions",
            difficulty: "core",
            hints: [
              "The IQR only needs the two quartiles.",
              "Careful with context: for times, is a lower median better or worse?",
              "Give one median sentence and one IQR sentence, each interpreted for the puzzle context.",
            ],
            strategy: "use the two-sentence compare formula",
          },
          {
            id: "sta-qa-p3-q05",
            question:
              "A school has 1200 students. The head teacher wants a sample of 60 students' opinions on the new timetable. (a) Describe how to select a simple random sample of 60 students. (b) She considers instead asking the first 60 students who arrive at school one morning. Give one reason why this sample would be biased.",
            modelAnswer:
              "(a) Obtain a list of all 1200 students and number them 1 to 1200. Use a random number generator (or draw numbers from a hat) to pick 60 different numbers, ignoring repeats, and survey those students. Every student then has an equal chance of selection.\n(b) The first arrivals are not representative — e.g. they may all travel on the same early bus or be keener students, so some groups are over-represented and others (late arrivals) are excluded.",
            markScheme: ["random number", "number the students", "equal chance", "not representative"],
            commonError:
              "Describing (a) as 'pick 60 students at random' with no method — you must say HOW: numbered list plus random numbers, ignoring repeats.",
            guideRef: "Scatter graphs, correlation and sampling",
            difficulty: "core",
            hints: [
              "A random sample needs a concrete mechanism, not just the word 'random'.",
              "Start with a numbered list of the whole population.",
              "For (b), ask: who is systematically missing from the first 60 arrivals?",
            ],
            strategy: "consider extremes",
          },
          {
            id: "sta-qa-p3-q06",
            question:
              "Five positive integers have median 7, mean 6 and range 8. Find the largest possible value of the mode.",
            modelAnswer:
              "The five integers total 5 × 6 = 30, the middle one is 7, and (largest) − (smallest) = 8.\nWrite them in order: a ≤ b ≤ 7 ≤ d ≤ e with e = a + 8.\nTo push the mode high, try making the two largest values equal: d = e = a + 8.\nThen a + b + 7 + 2(a + 8) = 30, so 3a + b = 7.\nWith a = 1: b = 4, giving 1, 4, 7, 9, 9 — total 30 ✓, median 7 ✓, range 9 − 1 = 8 ✓, mode 9.\nCould the mode be 10? That needs e = 10 twice, so a = 2 (range 8) and d = e = 10: then a + b = 30 − 27 = 3, forcing b = 1 < a. Impossible.\nLargest possible mode = 9.",
            markScheme: ["9", "30", "1, 4, 7, 9, 9", "range 8"],
            commonError:
              "Ignoring the link e = a + 8: making the top value bigger forces the bottom value bigger too, which eats into the fixed total of 30.",
            guideRef: "The three faces of average",
            difficulty: "challenge",
            hints: [
              "Convert the mean to a total (30) and write the five integers in order around the median 7.",
              "The range ties the largest value to the smallest: e = a + 8.",
              "A mode needs a repeat — the biggest possible mode repeats the LARGEST value: set d = e.",
              "Substitute into the total and see which small values of a give a valid ordered set; then rule out mode 10 by showing it breaks the total.",
            ],
            strategy: "consider extremes",
          },
        ],
      },
    ],
  },
};

export default topic;
