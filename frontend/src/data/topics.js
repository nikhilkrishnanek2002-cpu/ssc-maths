export const MATHS_TOPICS = [
  {
    "id": "numbers",
    "name": "Number System & HCF/LCM",
    "emoji": "🔢",
    "description": "Divisibility rules, shortcuts and fast calculation tricks",
    "sections": [
      {
        "title": "🔢Divisibility Rules — Learn Once, Use Forever",
        "content": "Divisible by | Rule | Example\n2 | Last digit even (0,2,4,6,8) | 234 ✓\n3 | Sum of all digits divisible by 3 | 132 → 1+3+2=6 ✓\n4 | Last 2 digits divisible by 4 | 1124 → 24/4=6 ✓\n5 | Last digit 0 or 5 | 345 ✓\n6 | Divisible by both 2 AND 3 | 126 ✓\n7 | Double last digit, subtract from rest. Repeat. | 203 → 20-(2×3)=14 ✓\n8 | Last 3 digits divisible by 8 | 1256 → 256/8=32 ✓\n9 | Sum of digits divisible by 9 | 729 → 7+2+9=18 ✓\n11 | (Odd position sum) - (Even position sum) = 0 or 11 | 121 → (1+1)-2=0 ✓\n12 | Divisible by both 4 AND 3 | 144 ✓\n25 | Last 2 digits divisible by 25 | 1275 → 75/25=3 ✓",
        "formulas": [],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "📐HCF — Fast Methods",
        "content": "",
        "formulas": [
          "HCF of fractions = HCF of Numerators / LCM of Denominators"
        ],
        "shortcuts": [
          "METHOD 1 (Factorization): Find common prime factors, take lowest power of each.",
          "METHOD 2 (Division): Divide bigger by smaller, then smaller by remainder. Keep dividing until remainder = 0. Last divisor = HCF."
        ],
        "examples": []
      },
      {
        "title": "📊LCM — Fast Methods",
        "content": "",
        "formulas": [
          "LCM of fractions = LCM of Numerators / HCF of Denominators",
          "HCF × LCM = Product of two numbers (only for 2 numbers)"
        ],
        "shortcuts": [
          "METHOD: Find all prime factors, take HIGHEST power of each."
        ],
        "examples": []
      },
      {
        "title": "⚡Number Tricks for SSC Speed",
        "content": "n | n² | n | n² | n | n²\n11 | 121 | 16 | 256 | 21 | 441\n12 | 144 | 17 | 289 | 22 | 484\n13 | 169 | 18 | 324 | 23 | 529\n14 | 196 | 19 | 361 | 24 | 576\n15 | 225 | 20 | 400 | 25 | 625",
        "formulas": [],
        "shortcuts": [
          "Rule: For n5² → multiply n×(n+1), attach 25 at end\n    75² → 7×8 = 56 → answer = 5625\n    85² → 8×9 = 72 → answer = 7225",
          "Rule: 97×96 → (100-3)(100-4) → 100×(97-4)+(3×4) = 100×93+12 = 9312"
        ],
        "examples": []
      },
      {
        "title": "🔍Remainders & Cyclicity Tricks",
        "content": "Last Digit | Cycle (power 1,2,3,4...repeats)\n2 | 2, 4, 8, 6 → cycle of 4\n3 | 3, 9, 7, 1 → cycle of 4\n4 | 4, 6 → cycle of 2\n7 | 7, 9, 3, 1 → cycle of 4\n8 | 8, 4, 2, 6 → cycle of 4\n9 | 9, 1 → cycle of 2",
        "formulas": [],
        "shortcuts": [
          "Trick: Find (power ÷ cycle length) → use remainder to get position in cycle\n    Last digit of 7²³ → cycle of 4 → 23÷4 = remainder 3 → 3rd in cycle = 3",
          "When dividing aⁿ by (a+1): Remainder is always 1 (if n is even) or a (if n is odd)\n    Example: 7⁵ ÷ 8 → 7 is odd power → remainder = 7"
        ],
        "examples": []
      },
      {
        "title": "📋Important Number System Facts",
        "content": "• Natural: 1,2,3... (No 0)\n• Whole: 0,1,2,3...\n• Integers: ...-2,-1,0,1,2...\n• Rational: p/q form (q≠0)\n• Prime: Only 1 and itself as factors\n• Co-prime: HCF = 1",
        "formulas": [
          "Sum of 1 to n = n(n+1)/2\nSum of odd numbers 1 to n = ((n+1)/2)²\nSum of squares = n(n+1)(2n+1)/6\nSum of cubes = [n(n+1)/2]²"
        ],
        "shortcuts": [],
        "examples": []
      }
    ]
  },
  {
    "id": "percentage",
    "name": "Percentage & Ratio/Proportion",
    "emoji": "💯",
    "description": "The most important topics — used in every other chapter",
    "sections": [
      {
        "title": "%Percentage — Key Conversions (Memorize!)",
        "content": "Fraction | % | Fraction | % | Fraction | %\n1/2 | 50% | 1/7 | 14.28% | 1/12 | 8.33%\n1/3 | 33.33% | 1/8 | 12.5% | 1/13 | 7.69%\n1/4 | 25% | 1/9 | 11.11% | 1/14 | 7.14%\n1/5 | 20% | 1/10 | 10% | 1/15 | 6.66%\n1/6 | 16.66% | 1/11 | 9.09% | 1/16 | 6.25%",
        "formulas": [],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "⬆️% Increase/Decrease",
        "content": "",
        "formulas": [
          "% Change = (Change/Original) × 100\n\nIf A is x% more than B:\nB is x/(100+x) × 100% less than A\n\nIf A is x% less than B:\nB is x/(100-x) × 100% more than A"
        ],
        "shortcuts": [
          "Shortcut: 20% more → multiply by 1.2\n      20% less → multiply by 0.8\n      30% more then 10% less → 1.3 × 0.9 = 1.17 = 17% net increase"
        ],
        "examples": []
      },
      {
        "title": "🔄Successive % Change",
        "content": "",
        "formulas": [
          "Net % = a + b + (ab/100)\nwhere a, b are the two percentages\n(use – for decrease)"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "📉Population & Depreciation",
        "content": "",
        "formulas": [
          "Population after n years = P × (1 + r/100)ⁿ\nDepreciation after n years = P × (1 - r/100)ⁿ"
        ],
        "shortcuts": [
          "Fast: For small r and n=2: use successive % formula twice. Saves time."
        ],
        "examples": []
      },
      {
        "title": "Ratio & Proportion Shortcuts",
        "content": "",
        "formulas": [
          "If a:b = m:n and b:c = p:q\nThen a:b:c = mp : np : nq\n\nComponendo: (a+b)/(a-b) = (c+d)/(c-d) if a/b = c/d\n\nFourth Proportional to a, b, c = bc/a\nThird Proportional to a, b = b²/a\nMean Proportional to a, b = √(ab)"
        ],
        "shortcuts": [
          "Alligation Cross:\n      Cheaper ——— Mean ——— Dearer\n      Ratio = (Dearer - Mean) : (Mean - Cheaper)\nExample: Mix milk at ₹20/L and ₹30/L to get ₹24/L\n      Ratio = (30-24):(24-20) = 6:4 = 3:2"
        ],
        "examples": []
      },
      {
        "title": "💰Partnership Problems",
        "content": "",
        "formulas": [
          "Profit share ∝ Capital × Time\n\nIf A invests Ca for Ta months and B invests Cb for Tb months:\nRatio of profits = Ca×Ta : Cb×Tb"
        ],
        "shortcuts": [],
        "examples": []
      }
    ]
  },
  {
    "id": "profit",
    "name": "Profit, Loss & Discount",
    "emoji": "📘",
    "description": "Every formula you need with fast-solving tricks",
    "sections": [
      {
        "title": "💹Core Formulas",
        "content": "",
        "formulas": [
          "Profit = SP - CP\nLoss = CP - SP\nProfit% = (Profit/CP) × 100\nLoss% = (Loss/CP) × 100\n\nSP = CP × (100+P%)/100  [Profit]\nSP = CP × (100-L%)/100  [Loss]\nCP = SP × 100/(100+P%)  [find CP from SP]\nCP = SP × 100/(100-L%)  [find CP from SP]"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "🎯Dishonest Trader Trick",
        "content": "",
        "formulas": [
          "If trader uses false weight w instead of true weight W:\nProfit% = (W-w)/w × 100"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "🔁Two Article Trick",
        "content": "",
        "formulas": [
          "Sell 2 items at same price, one at x% profit, one at x% loss:\nNet Result = ALWAYS LOSS\nLoss% = x²/100"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "🏷️Discount & Marked Price",
        "content": "",
        "formulas": [
          "Discount = MP - SP\nDiscount% = (Discount/MP) × 100\nSP = MP × (100 - D%)/100\n\nSuccessive discounts of a% and b%:\nNet discount = a + b - ab/100"
        ],
        "shortcuts": [
          "Fast Trick: MP = SP × 100/(100-D%)\n    CP to MP with P% profit after D% discount:\n    MP/CP = (100+P%)/(100-D%)"
        ],
        "examples": []
      },
      {
        "title": "📦Buying & Selling More/Less Trick",
        "content": "",
        "formulas": [
          "Buy n items at price of m (i.e., sell m, get n):\nProfit% = (n-m)/m × 100 (if n > m)"
        ],
        "shortcuts": [
          "If buy x items for ₹ and sell x items for ₹ (different amounts):"
        ],
        "examples": []
      }
    ]
  },
  {
    "id": "interest",
    "name": "Simple & Compound Interest",
    "emoji": "📘",
    "description": "Most formula-heavy topic — master these shortcuts to save time",
    "sections": [
      {
        "title": "🏦Simple Interest",
        "content": "",
        "formulas": [
          "SI = P×R×T / 100\nA = P + SI = P(1 + RT/100)\n\nP = SI×100/(R×T)\nR = SI×100/(P×T)\nT = SI×100/(P×R)"
        ],
        "shortcuts": [
          "Trick: If SI on a sum for 3 years is ₹X and for 5 years is ₹Y, then Rate = (Y-X)/(P×2) × 100. Just find extra SI for 2 years → get principal."
        ],
        "examples": []
      },
      {
        "title": "📈Compound Interest",
        "content": "",
        "formulas": [
          "A = P × (1 + R/100)ⁿ\nCI = A - P\n\nHalf-yearly: A = P × (1 + R/200)²ⁿ\nQuarterly: A = P × (1 + R/400)⁴ⁿ"
        ],
        "shortcuts": [
          "For 2 years: CI = P × [R²/10000 + 2R/100]\nDifference: CI - SI (2 years) = PR²/10000 = SI × R/100"
        ],
        "examples": []
      },
      {
        "title": "⚡CI vs SI Shortcuts",
        "content": "Year | SI (per year) | CI | Difference\n1st | PR/100 | PR/100 | 0\n2nd | PR/100 | PR/100 + PR²/10000 | PR²/10000\n3 years | 3PR/100 | P[(1+R/100)³-1] | 3PR²/10000 + PR³/1000000",
        "formulas": [],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "💡Installment Problems",
        "content": "",
        "formulas": [
          "For equal installments x paying off P at R% SI over n years:\nP = x×n - SI on [x×n(n-1)/2] at rate R\n\nFor CI: Each installment = A/(1+R/100) + A/(1+R/100)² + ..."
        ],
        "shortcuts": [
          "Rule of 72: Time to double money at R% = 72/R years (approximate)\n    At 8% → doubles in ≈ 9 years\n    At 12% → doubles in ≈ 6 years"
        ],
        "examples": []
      }
    ]
  },
  {
    "id": "timework",
    "name": "Time & Work + Pipes & Cisterns",
    "emoji": "📘",
    "description": "Think in terms of \"work done per day\" — always use fractions",
    "sections": [
      {
        "title": "🔧Time & Work — Core Approach",
        "content": "",
        "formulas": [
          "If A does in a days, B does in b days:\nTogether = ab/(a+b) days\n\nA, B, C together = 1/(1/a + 1/b + 1/c) days\n\nIf A is twice as fast as B: ratio of work = 2:1, ratio of time = 1:2"
        ],
        "shortcuts": [
          "GOLDEN RULE: If A does work in n days → A's 1 day work = 1/n\n      If A and B together → (1/a + 1/b) work per day → Together complete in ab/(a+b) days"
        ],
        "examples": []
      },
      {
        "title": "👥Work & Wages",
        "content": "",
        "formulas": [
          "Wages are divided in ratio of work done (= ratio of efficiency)"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "🏗️Men × Days × Hours",
        "content": "",
        "formulas": [
          "M₁×D₁×H₁/W₁ = M₂×D₂×H₂/W₂\nM=Men, D=Days, H=Hours, W=Work"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "🚰Pipes & Cisterns",
        "content": "",
        "formulas": [
          "Two inlets (a and b hours) + one outlet (c hours):\nNet filling rate = 1/a + 1/b - 1/c\nTime to fill = 1/(net rate)"
        ],
        "shortcuts": [
          "Inlet pipe fills: Work = +1/n per hour\nOutlet pipe empties: Work = -1/n per hour\n      Net work = Sum of all (with signs)"
        ],
        "examples": []
      },
      {
        "title": "⚡Alternate Work Tricks",
        "content": "",
        "formulas": [],
        "shortcuts": [
          "If A alone takes 'a' days and A+B takes 't' days:\n    B alone = at/(a-t) days",
          "Efficiency Method (LCM trick): Assume total work = LCM of all days. Then work per day = LCM/days. Fastest method for SSC!",
          "If A and B work alternately (A starts):\n    Find work in 2 days → how many complete pairs? Then check remaining."
        ],
        "examples": []
      }
    ]
  },
  {
    "id": "speed",
    "name": "Speed, Distance & Time + Trains + Boats",
    "emoji": "📘",
    "description": "Three topics, one core idea — master all cases",
    "sections": [
      {
        "title": "🚗Core Formula & Conversions",
        "content": "",
        "formulas": [
          "Speed = Distance / Time\nDistance = Speed × Time\nTime = Distance / Speed\n\nkm/h → m/s: multiply by 5/18\nm/s → km/h: multiply by 18/5"
        ],
        "shortcuts": [
          "Quick conversions: 18 km/h = 5 m/s | 36 km/h = 10 m/s | 54 km/h = 15 m/s | 72 km/h = 20 m/s"
        ],
        "examples": []
      },
      {
        "title": "Average Speed",
        "content": "",
        "formulas": [
          "If same distance at speeds a and b:\nAvg Speed = 2ab/(a+b) [Harmonic Mean]\n\nIf same TIME at speeds a and b:\nAvg Speed = (a+b)/2 [Arithmetic Mean]"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "🏃Relative Speed",
        "content": "",
        "formulas": [
          "Same direction: Relative Speed = |S₁ - S₂|\nOpposite direction: Relative Speed = S₁ + S₂"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "🚂Trains — All Cases",
        "content": "Case | Formula\nTrain crosses a pole / person | Time = Length of train / Speed of train\nTrain crosses a platform / bridge | Time = (Length of train + Length of platform) / Speed\nTwo trains, opposite direction | Time = (L₁+L₂) / (S₁+S₂)\nTwo trains, same direction | Time = (L₁+L₂) / |S₁-S₂|\nTrain crosses a man running | Relative speed = Train speed ± Man speed",
        "formulas": [],
        "shortcuts": [
          "Key tip: A \"person\" has zero length. A \"stationary object\" has zero speed."
        ],
        "examples": []
      },
      {
        "title": "🚣Boats & Streams",
        "content": "",
        "formulas": [
          "U = Speed of boat in still water\nV = Speed of stream (current)\n\nDownstream speed = U + V\nUpstream speed = U - V\n\nU = (Downstream + Upstream) / 2\nV = (Downstream - Upstream) / 2"
        ],
        "shortcuts": [
          "Trick: If boat covers same distance upstream in time t₁ and downstream in t₂:\n      U:V = (t₁+t₂):(t₁-t₂)"
        ],
        "examples": []
      },
      {
        "title": "📍Meeting Point Problems",
        "content": "",
        "formulas": [
          "Two people A(speed a) & B(speed b) start from opposite ends (dist D):\nMeeting time = D/(a+b)\nAt meeting: A covers = D×a/(a+b), B covers = D×b/(a+b)"
        ],
        "shortcuts": [
          "Shortcut: Ratio of distances covered = Ratio of speeds (when time is same)"
        ],
        "examples": []
      }
    ]
  },
  {
    "id": "algebra",
    "name": "Algebra — Identities & Shortcuts",
    "emoji": "✖️",
    "description": "Know all algebraic identities cold — they're SSC's favourite",
    "sections": [
      {
        "title": "🔣Must-Know Algebraic Identities",
        "content": "",
        "formulas": [
          "(a+b)² = a² + 2ab + b²\n(a-b)² = a² - 2ab + b²\na² - b² = (a+b)(a-b)\n(a+b)³ = a³ + b³ + 3ab(a+b)\n(a-b)³ = a³ - b³ - 3ab(a-b)\na³ + b³ = (a+b)(a² - ab + b²)\na³ - b³ = (a-b)(a² + ab + b²)\n(a+b+c)² = a²+b²+c²+2ab+2bc+2ca"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "🎯If x + 1/x = k (Very Common in SSC!)",
        "content": "",
        "formulas": [
          "x + 1/x = k\nx² + 1/x² = k² - 2\nx³ + 1/x³ = k³ - 3k  [or k(k²-3)]\nx⁴ + 1/x⁴ = (x²+1/x²)² - 2 = (k²-2)² - 2\n\nx - 1/x = √(k²-4) [if k>2]\nx² - 1/x² = k × √(k²-4)"
        ],
        "shortcuts": [
          "If x - 1/x = k: x² + 1/x² = k² + 2 | x³ - 1/x³ = k³ + 3k"
        ],
        "examples": []
      },
      {
        "title": "🧮Linear Equations Shortcuts",
        "content": "",
        "formulas": [],
        "shortcuts": [
          "Cramer's Rule (2 equations):\n    a₁x + b₁y = c₁ and a₂x + b₂y = c₂\n    x = (c₁b₂ - c₂b₁)/(a₁b₂ - a₂b₁)\n    y = (a₁c₂ - a₂c₁)/(a₁b₂ - a₂b₁)",
          "No Solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂\nInfinite Solutions: a₁/a₂ = b₁/b₂ = c₁/c₂"
        ],
        "examples": []
      },
      {
        "title": "📊Surds & Indices",
        "content": "",
        "formulas": [
          "aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ / aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁰ = 1 (a≠0)\na⁻ⁿ = 1/aⁿ\naˡ/ⁿ = ⁿ√a"
        ],
        "shortcuts": [
          "To rationalize 1/(√a + √b): Multiply by (√a - √b)/(√a - √b)\n    Result = (√a - √b)/(a - b)"
        ],
        "examples": []
      }
    ]
  },
  {
    "id": "geometry",
    "name": "Geometry — Lines, Triangles & Circles",
    "emoji": "📐",
    "description": "Key theorems that SSC loves to test — with direct application",
    "sections": [
      {
        "title": "📐Lines & Angles — Key Theorems",
        "content": "• Alternate angles = equal\n• Corresponding angles = equal\n• Co-interior angles = supplementary (add to 180°)\n• Vertically opposite angles = equal\n• Linear pair = 180°\n• Sum of angles around a point = 360°\n• Exterior angle = sum of two non-adjacent interior angles",
        "formulas": [],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "△Triangle Theorems",
        "content": "Theorem | Statement\nAngle Sum | Sum of all angles = 180°\nExterior Angle | Exterior angle = sum of opposite interior angles\nPythagoras | In right triangle: a² + b² = c² (c = hypotenuse)\nMid-Point | Line joining mid-points of 2 sides = half of 3rd side and parallel to it\nBasic Proportionality (BPT) | If line || base, it divides other two sides proportionally\nAngle Bisector | Bisector divides opposite side in ratio of adjacent sides\nCentroid | Divides median in 2:1 from vertex",
        "formulas": [
          "3-4-5 | 5-12-13 | 8-15-17 | 7-24-25\n6-8-10 | 9-12-15 | 10-24-26 | 20-21-29\nMultiples also work: 6-8-10, 9-12-15, etc."
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "⭕Circle Theorems — SSC Favorites",
        "content": "Theorem | Rule\nAngle at centre | = 2 × angle at circumference (same arc)\nAngle in semicircle | = 90° (angle in semicircle is always right angle)\nAngles in same segment | = equal (subtend same arc)\nCyclic quadrilateral | Opposite angles add to 180°\nTangent ⊥ radius | Tangent is perpendicular to radius at point of contact\nTwo tangents from external point | Equal in length\nChord bisector | Perpendicular from centre to chord bisects the chord",
        "formulas": [],
        "shortcuts": [
          "Tangent-Secant Rule: If tangent PT and secant PAB from external point P:\n    PT² = PA × PB (Power of a point)"
        ],
        "examples": []
      },
      {
        "title": "🔷Quadrilaterals & Polygons",
        "content": "Shape | Key Property | Area\nSquare | All sides equal, all angles 90° | side²\nRectangle | Opp sides equal, all 90° | l × b\nParallelogram | Opp sides equal & parallel | base × height\nRhombus | All sides equal, diagonals bisect at 90° | d₁×d₂/2\nTrapezium | One pair of parallel sides | ½(a+b)×h",
        "formulas": [
          "Sum of interior angles of n-gon = (n-2) × 180°\nEach interior angle of regular n-gon = (n-2)×180°/n\nNumber of diagonals = n(n-3)/2"
        ],
        "shortcuts": [],
        "examples": []
      }
    ]
  },
  {
    "id": "mensuration",
    "name": "Mensuration — 2D & 3D",
    "emoji": "📏",
    "description": "All area, perimeter, volume and surface area formulas in one place",
    "sections": [
      {
        "title": "📏2D Shapes — Area & Perimeter",
        "content": "Shape | Area | Perimeter\nTriangle | ½ × base × height | a+b+c\nEquilateral △ | (√3/4)a² | 3a\nRight △ | ½ × base × height | a+b+c\nCircle | πr² | 2πr\nSemi-circle | πr²/2 | πr + 2r\nSector | (θ/360)×πr² | (θ/360)×2πr + 2r\nSquare | a² | 4a\nRectangle | l×b | 2(l+b)\nRhombus | d₁×d₂/2 | 4a (a = side)\nTrapezium | ½(a+b)h | Sum of all sides",
        "formulas": [
          "Triangle by Heron's Formula (when 3 sides given):\ns = (a+b+c)/2\nArea = √[s(s-a)(s-b)(s-c)]"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "📦3D Shapes — Volume & Surface Area",
        "content": "Shape | Volume | LSA | TSA\nCube (side a) | a³ | 4a² | 6a²\nCuboid (l,b,h) | lbh | 2h(l+b) | 2(lb+bh+lh)\nCylinder (r,h) | πr²h | 2πrh | 2πr(r+h)\nCone (r,h,l) | πr²h/3 | πrl | πr(r+l)\nSphere (r) | 4πr³/3 | 4πr² | 4πr²\nHemisphere (r) | 2πr³/3 | 2πr² | 3πr²",
        "formulas": [
          "Slant height of cone: l = √(h² + r²)\nDiagonal of cuboid = √(l²+b²+h²)\nDiagonal of cube = a√3"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "⚡Mensuration Tricks",
        "content": "",
        "formulas": [],
        "shortcuts": [
          "Room problems: Floor area = l×b | 4 walls area = 2h(l+b) | Ceiling = l×b",
          "When a square is converted to circle (same perimeter):\n    4a = 2πr → r = 2a/π → Area increases (circle has more area)",
          "When area increases by x%:\n    Each side increases by: (√(100+x) - 10) × 10% approximately"
        ],
        "examples": []
      },
      {
        "title": "📐Important Values & Shortcuts",
        "content": "",
        "formulas": [
          "π ≈ 22/7 ≈ 3.14\n√2 ≈ 1.414\n√3 ≈ 1.732\n√5 ≈ 2.236",
          "If side doubles → area × 4\nIf side triples → area × 9\nRatio of areas = ratio of (sides)²"
        ],
        "shortcuts": [],
        "examples": []
      }
    ]
  },
  {
    "id": "trigonometry",
    "name": "Trigonometry & Height/Distance",
    "emoji": "🔺",
    "description": "Values table + identities + application problems",
    "sections": [
      {
        "title": "📐Trigonometric Values Table (Must Memorize!)",
        "content": "Angle | sin | cos | tan | cosec | sec | cot\n0° | 0 | 1 | 0 | ∞ | 1 | ∞\n30° | 1/2 | √3/2 | 1/√3 | 2 | 2/√3 | √3\n45° | 1/√2 | 1/√2 | 1 | √2 | √2 | 1\n60° | √3/2 | 1/2 | √3 | 2/√3 | 2 | 1/√3\n90° | 1 | 0 | ∞ | 1 | ∞ | 0",
        "formulas": [],
        "shortcuts": [
          "Memory trick for sin values: 0°→90° → √0/2, √1/2, √2/2, √3/2, √4/2 = 0, 1/2, 1/√2, √3/2, 1\n    cos values are exactly sin in REVERSE order!"
        ],
        "examples": []
      },
      {
        "title": "🔗Fundamental Identities",
        "content": "",
        "formulas": [
          "sin²θ + cos²θ = 1  →  sin²θ = 1-cos²θ\n1 + tan²θ = sec²θ  →  sec²θ - tan²θ = 1\n1 + cot²θ = cosec²θ →  cosec²θ - cot²θ = 1\n\nsec²θ - tan²θ = 1  →  (secθ+tanθ)(secθ-tanθ) = 1\nIf secθ + tanθ = k, then secθ - tanθ = 1/k"
        ],
        "shortcuts": [
          "Complementary angles:\n    sin(90°-θ) = cosθ | cos(90°-θ) = sinθ\n    tan(90°-θ) = cotθ | sec(90°-θ) = cosecθ"
        ],
        "examples": []
      },
      {
        "title": "🏔️Heights & Distances",
        "content": "Scenario | Key Formula\nAngle of elevation (looking UP) | tan θ = Height / Horizontal distance\nAngle of depression (looking DOWN) | tan θ = Height / Horizontal distance\nTower & shadow | Height/Shadow = tan(angle)\nTwo angles from same line | Set up two tan equations, solve simultaneously",
        "formulas": [],
        "shortcuts": [
          "Standard results:\n    If angle of elevation = 30° → Height = Distance/√3\n    If angle of elevation = 45° → Height = Distance\n    If angle of elevation = 60° → Height = Distance × √3"
        ],
        "examples": []
      },
      {
        "title": "📊Trig Simplification Tricks",
        "content": "",
        "formulas": [
          "sin θ × cosec θ = 1\ncos θ × sec θ = 1\ntan θ × cot θ = 1\ntan θ = sin θ / cos θ"
        ],
        "shortcuts": [
          "Step 1: Convert everything to sin and cos\nStep 2: Use identities to simplify\nStep 3: Look for (sin²+cos²=1) pattern",
          "If sinθ + cosθ = k:\n    sin²θ + cos²θ = 1 (always)\n    sinθ × cosθ = (k²-1)/2\n    sin³θ + cos³θ = k(1 - sinθcosθ) = k(1-(k²-1)/2)"
        ],
        "examples": []
      }
    ]
  },
  {
    "id": "statistics",
    "name": "Statistics & Data Interpretation",
    "emoji": "📘",
    "description": "Mean, Median, Mode + DI shortcuts for quick calculation",
    "sections": [
      {
        "title": "📊Mean, Median, Mode",
        "content": "",
        "formulas": [
          "Mean = Sum of observations / n\n\nWeighted Mean = Σ(w×x) / Σw\n\nIf all values increase by k: Mean increases by k\nIf all values multiplied by k: Mean multiplies by k",
          "Arrange in order:\nIf n is odd: Median = ((n+1)/2)th term\nIf n is even: Median = avg of (n/2)th and (n/2+1)th\n\nMode = most frequent value\nRelation: Mode = 3×Median - 2×Mean"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "📈Data Interpretation Speed Tricks",
        "content": "What you need | Shortcut\n% of a number | Find 1% first, then scale\nRatio comparison | Cross-multiply to compare\nGrowth rate | Check if values double, triple, etc.\nApprox answers | Round to nearest 5 or 10",
        "formulas": [],
        "shortcuts": [
          "For ratio questions: If A:B = x:y and total = T → A = T×x/(x+y)",
          "For percentage questions on DI:\n    Always find 10% first, then build up (20%=2×10%, 5%=10%÷2, 15%=10%+5%)",
          "% change in DI: (New - Old)/Old × 100\n    If old≈new, use approximation to save time"
        ],
        "examples": []
      },
      {
        "title": "📉Range, Variance & Standard Deviation",
        "content": "",
        "formulas": [
          "Range = Maximum - Minimum\n\nVariance = Σ(x - mean)² / n\nStandard Deviation (SD) = √Variance\n\nSD is never negative.\nSD = 0 means all values are equal.\nIf each value increased by k: SD unchanged (only mean changes)\nIf each value multiplied by k: SD multiplies by |k|"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "🎯SSC Exam Strategy — Last Minute Tips",
        "content": "• 🏆 Do easy questions FIRST — Percentage, SI/CI, Ratio are fastest\n• ⏱️ Time limit per question: 1.5 minutes max — skip if stuck\n• 📐 Geometry & Mensuration — draw diagrams always, helps spot patterns\n• 🔢 Use option elimination — plug in options for algebra problems\n• ✅ Approximation in DI — never calculate exactly unless needed\n• 🧠 LCM method for Time & Work — fastest approach\n• 📊 Trig identities — convert to sin/cos first\n• 🎯 Mark and review — come back to geometry theorems if uncertain",
        "formulas": [],
        "shortcuts": [],
        "examples": []
      }
    ]
  },
  {
    "id": "sequence",
    "name": "Sequence & Series — AP, GP & Special Series",
    "emoji": "📘",
    "description": "SSC regularly tests AP/GP formulas and number pattern recognition",
    "sections": [
      {
        "title": "🔢Arithmetic Progression (AP)",
        "content": "",
        "formulas": [
          "AP: a, a+d, a+2d, a+3d, ...\nnth term:  Tₙ = a + (n-1)d\nSum of n terms: Sₙ = n/2 × [2a + (n-1)d]\n                   = n/2 × (First + Last)\nMiddle term of AP = Arithmetic Mean of extremes\nd = Common Difference = T₂ - T₁"
        ],
        "shortcuts": [
          "Trick — 3 numbers in AP: Take them as (a-d), a, (a+d). Sum = 3a.\n4 numbers in AP: Take as (a-3d), (a-d), (a+d), (a+3d). Sum = 4a.",
          "Sum of first n natural numbers: n(n+1)/2\nSum of first n odd numbers: n² (1+3+5+...+2n-1 = n²)\nSum of first n even numbers: n(n+1) (2+4+6+...+2n = n(n+1))"
        ],
        "examples": []
      },
      {
        "title": "📈Geometric Progression (GP)",
        "content": "",
        "formulas": [
          "GP: a, ar, ar², ar³, ...\nnth term: Tₙ = a × rⁿ⁻¹\nSum of n terms: Sₙ = a(rⁿ-1)/(r-1)  [if r≠1, r>1]\n                   = a(1-rⁿ)/(1-r)  [if r<1]\nSum of infinite GP (|r|<1): S∞ = a/(1-r)\nCommon Ratio: r = T₂/T₁"
        ],
        "shortcuts": [
          "Trick — 3 numbers in GP: Take them as a/r, a, ar. Product = a³.\n    Geometric Mean of a and b = √(ab)"
        ],
        "examples": []
      },
      {
        "title": "🧩Number Series — Pattern Recognition",
        "content": "Type | Example | Logic\nPerfect Squares | 1, 4, 9, 16, 25... | n²\nPerfect Cubes | 1, 8, 27, 64, 125... | n³\nFibonacci | 1,1,2,3,5,8,13,21... | Each = sum of prev 2\nTriangular Nos | 1,3,6,10,15,21... | n(n+1)/2\nPrime Nos | 2,3,5,7,11,13,17... | No factor except 1 & itself\nDifference series | 2,5,10,17,26... | Diff: 3,5,7,9 (odd nos)\nMultiplication | 3,6,12,24,48... | ×2 each time (GP, r=2)\nMixed pattern | 1,2,6,24,120... | ×1, ×2, ×3, ×4 (factorial!)",
        "formulas": [],
        "shortcuts": [
          "Step 1: Check if differences form a pattern (AP or GP)\nStep 2: If not, check ratios (GP series)\nStep 3: If not, check squares/cubes ± constant"
        ],
        "examples": []
      },
      {
        "title": "🔁Important Special Sums",
        "content": "",
        "formulas": [
          "Sum of squares: 1²+2²+3²+...+n² = n(n+1)(2n+1)/6\nSum of cubes:  1³+2³+3³+...+n³ = [n(n+1)/2]²\nNote: 1³+2³+...+n³ = (1+2+...+n)²\n\nSum of squares of first n EVEN numbers = 2n(n+1)(2n+1)/3\nSum of squares of first n ODD numbers = n(2n-1)(2n+1)/3"
        ],
        "shortcuts": [],
        "examples": []
      }
    ]
  },
  {
    "id": "simplification",
    "name": "Simplification & Approximation",
    "emoji": "📘",
    "description": "BODMAS, fractions, decimals, and fast calculation techniques",
    "sections": [
      {
        "title": "🧮BODMAS Rule — Order of Operations",
        "content": "",
        "formulas": [],
        "shortcuts": [
          "B — Brackets (solve innermost first: small → curly → square)\nO — Orders (powers and roots)\nD — Division (left to right)\nM — Multiplication (left to right)\nA — Addition\nS — Subtraction"
        ],
        "examples": []
      },
      {
        "title": "⚡Fast Calculation Tricks",
        "content": "",
        "formulas": [
          "(a+b)² = a² + 2ab + b²\nNear 50: n² = (50±x)² = 2500 ± 100x + x²\nExample: 53² = 2500+300+9 = 2809\nNear 100: 97² = (100-3)² = 10000-600+9 = 9409"
        ],
        "shortcuts": [
          "× 11: Write first digit, then add adjacent pairs, write last digit\n    47 × 11 → 4, (4+7), 7 → 4, 11, 7 → carry 1 → 517",
          "× 5: Divide by 2, shift decimal (or ×10÷2)\n    246 × 5 = 2460/2 = 1230",
          "× 25: Divide by 4 then ×100\n    36 × 25 = 3600/4 = 900",
          "× 125: Divide by 8 then ×1000\n    56 × 125 = 56000/8 = 7000",
          "× 99: ×100 - original number\n    37 × 99 = 3700 - 37 = 3663"
        ],
        "examples": []
      },
      {
        "title": "🔢Fractions & Decimals Speed Methods",
        "content": "",
        "formulas": [
          "0.ā = a/9         [single digit repeat]\n0.ab̄ = (ab-a)/90   [one non-repeating, one repeating]\n0.āb̄ = ab/99       [two digit repeat]\n0.abcabc... = abc/999\n\nExamples:\n0.3333... = 3/9 = 1/3\n0.142857... = 1/7 (recognise this!)\n0.16̄ = (16-1)/90 = 15/90 = 1/6"
        ],
        "shortcuts": [
          "Cross-multiply to compare: a/b vs c/d → compare ad vs bc\n    3/7 vs 4/9 → 3×9=27 vs 4×7=28 → 4/9 is bigger"
        ],
        "examples": []
      },
      {
        "title": "🎯Approximation Techniques for SSC",
        "content": "Value | Approx | Value | Approx\n√2 | 1.414 | √3 | 1.732\n√5 | 2.236 | √6 | 2.449\n√7 | 2.646 | √8 | 2.828\n√10 | 3.162 | √11 | 3.317\n∛2 | 1.26 | ∛3 | 1.44",
        "formulas": [
          "√(n²±x) ≈ n ± x/(2n)  [for small x]\n\n√50 → √(49+1) ≈ 7 + 1/14 ≈ 7.07\n√99 → √(100-1) ≈ 10 - 1/20 ≈ 9.95"
        ],
        "shortcuts": [
          "Rule: For options 5+ apart, round aggressively. For close options, calculate carefully.",
          "Mental Math: 17% of 350 → 10%=35, 5%=17.5, 2%=7 → 17% ≈ 59.5"
        ],
        "examples": []
      },
      {
        "title": "🃏Vedic Maths Tricks",
        "content": "",
        "formulas": [],
        "shortcuts": [
          "Example 43 × 47: (Tens same=4, Units add to 10: 3+7=10)\n    Left part: 4×(4+1) = 20 | Right part: 3×7 = 21\n    Answer: 2021",
          "92 × 96:\n    Deficiencies: 100-92=8, 100-96=4\n    Left: 92-4 = 88 (or 96-8=88) | Right: 8×4=32\n    Answer: 8832",
          "Rule: 123 ÷ 9 → Bring down 1, add to next: 1, 1+2=3, 3+3=6 → quotient 13, remainder 6\n    Check: 9×13+6 = 117+6 = 123 ✓"
        ],
        "examples": []
      }
    ]
  },
  {
    "id": "coordinate",
    "name": "Coordinate Geometry",
    "emoji": "📘",
    "description": "Straight lines, distances, midpoints and slopes — SSC asks 2–4 questions",
    "sections": [
      {
        "title": "📍Distance, Midpoint & Section Formula",
        "content": "",
        "formulas": [
          "Distance between (x₁,y₁) and (x₂,y₂):\nd = √[(x₂-x₁)² + (y₂-y₁)²]\n\nMidpoint of two points:\nM = ((x₁+x₂)/2 , (y₁+y₂)/2)\n\nSection formula (divides in m:n internally):\nP = ((mx₂+nx₁)/(m+n) , (my₂+ny₁)/(m+n))\n\nCentroid of triangle (x₁,y₁)(x₂,y₂)(x₃,y₃):\nG = ((x₁+x₂+x₃)/3 , (y₁+y₂+y₃)/3)"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "📏Straight Lines — Everything",
        "content": "",
        "formulas": [
          "Slope (m) = (y₂-y₁)/(x₂-x₁) = tan θ\n\nEquation forms:\nSlope-intercept: y = mx + c  (c = y-intercept)\nPoint-slope: y-y₁ = m(x-x₁)\nTwo-point: (y-y₁)/(y₂-y₁) = (x-x₁)/(x₂-x₁)\nIntercept form: x/a + y/b = 1\n\nParallel lines: m₁ = m₂ (same slope)\nPerpendicular lines: m₁ × m₂ = -1"
        ],
        "shortcuts": [
          "Angle between two lines: tan θ = |m₁-m₂|/|1+m₁m₂|"
        ],
        "examples": []
      },
      {
        "title": "📐Distance from a Point to a Line",
        "content": "",
        "formulas": [
          "Distance from point (x₁,y₁) to line ax+by+c=0:\nd = |ax₁+by₁+c| / √(a²+b²)",
          "Area = ½ |x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|"
        ],
        "shortcuts": [
          "Collinear points check: Area = 0 means all 3 points lie on same line"
        ],
        "examples": []
      },
      {
        "title": "⭕Circles in Coordinate Geometry",
        "content": "",
        "formulas": [
          "Standard circle (centre at origin): x² + y² = r²\nGeneral circle (centre h,k): (x-h)² + (y-k)² = r²\nGeneral form: x²+y²+2gx+2fy+c = 0\nCentre = (-g,-f) | Radius = √(g²+f²-c)"
        ],
        "shortcuts": [],
        "examples": []
      },
      {
        "title": "🗺️Coordinate Geometry Quick Facts",
        "content": "Fact | Value/Formula\nOrigin | (0,0)\nSlope of x-axis | 0\nSlope of y-axis | Undefined (∞)\nSlope of line y=x | 1 (45°)\nSlope of y=-x | -1 (135°)\nQuadrant I | x>0, y>0\nQuadrant II | x<0, y>0\nQuadrant III | x<0, y<0\nQuadrant IV | x>0, y<0\nReflection in x-axis | (x,y) → (x,-y)\nReflection in y-axis | (x,y) → (-x,y)\nReflection in origin | (x,y) → (-x,-y)",
        "formulas": [],
        "shortcuts": [],
        "examples": []
      }
    ]
  },
  {
    "id": "mixtures",
    "name": "Mixtures, Alligation & Average",
    "emoji": "📘",
    "description": "Alligation — the most powerful shortcut in SSC Maths",
    "sections": [
      {
        "title": "⚗️Alligation Rule — The Cross Method",
        "content": "",
        "formulas": [],
        "shortcuts": [
          "THE CROSS:\n          Cheaper (c)           Dearer (d)\n                   \\           /\n                     Mean (m)\n                   /           \\\n          (d-m)                 (m-c)\nRatio of quantities = (d-m) : (m-c)"
        ],
        "examples": []
      },
      {
        "title": "🧪Replacement Problems",
        "content": "",
        "formulas": [
          "If from a vessel of volume V containing liquid A,\nx litres are removed and replaced with liquid B,\ndone n times:\n\nRemaining A = V × (1 - x/V)ⁿ\nFraction of A remaining = ((V-x)/V)ⁿ"
        ],
        "shortcuts": [
          "Ratio of milk:water finally = (V-x)ⁿ : Vⁿ - (V-x)ⁿ"
        ],
        "examples": []
      },
      {
        "title": "📊Average — All Formulas",
        "content": "",
        "formulas": [
          "Average = Sum of all terms / Number of terms\nSum = Average × Number of terms\n\nAverage of consecutive natural nos from a to b = (a+b)/2\nAverage of first n natural nos = (n+1)/2\nAverage of first n even nos = n+1\nAverage of first n odd nos = n\nAverage of consecutive nos = middle number"
        ],
        "shortcuts": [
          "Weighted Average: If group 1 (n₁ people) has avg A₁ and group 2 (n₂) has avg A₂:\n    Combined avg = (n₁A₁ + n₂A₂)/(n₁+n₂)"
        ],
        "examples": []
      },
      {
        "title": "⚡Average Shortcut Tricks",
        "content": "",
        "formulas": [],
        "shortcuts": [
          "If wrong value used:\n    Correct avg = Wrong avg + (Correct - Wrong)/n",
          "If one number added/removed:\n    New sum = Old sum ± new number\n    New avg = New sum / New count",
          "Cricket batting average trick:\n    Avg increases by x runs → total extra runs = x × (no. of innings)\n    Example: Avg goes from 40 to 42 after 10th innings → 10th innings score = old total + extra = 40×9 + extra\n    New total = 42×10=420 | Old total = 40×9=360 | 10th innings = 420-360 = 60"
        ],
        "examples": []
      },
      {
        "title": "🎂Age Problems",
        "content": "",
        "formulas": [
          "Present age = x\nAge n years ago = x - n\nAge n years later = x + n\n\nIf A is n years older than B: A = B + n\nRatio of ages: Set up equation with ratio → solve"
        ],
        "shortcuts": [
          "Golden tip: Always assume present age as variable. Write equations for past/future directly."
        ],
        "examples": []
      }
    ]
  }
];
