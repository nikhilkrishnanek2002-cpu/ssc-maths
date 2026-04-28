const mathData = {
    // CATEGORY: ARITHMETIC
    math_number_system: {
        category: "Math: Arithmetic",
        title: "Number Systems: Deep Dive",
        subtitle: "Divisibility, Remainders, and Factors",
        blocks: [
            {
                title: "1. Comprehensive Divisibility Rules",
                text: "Divisibility rules help in identifying factors instantly without long division.",
                examples: [
                    "Rule of 3: Sum of digits is a multiple of 3 (e.g., 123 -> 1+2+3 = 6).",
                    "Rule of 4: Last two digits form a number divisible by 4 (e.g., 512 -> 12 is div by 4).",
                    "Rule of 7: Double the last digit and subtract it from the rest of the number. Repeat until small. If 0 or multiple of 7, it's divisible.",
                    "Rule of 8: Last three digits form a number divisible by 8.",
                    "Rule of 9: Sum of digits is a multiple of 9.",
                    "Rule of 11: (Sum of digits in odd positions) - (Sum of digits in even positions) = 0 or multiple of 11.",
                    "Rule of 13: Multiply last digit by 4 and add to the rest. If divisible by 13, the number is."
                ],
                shortcut: "Composite rules: For 72, check both 8 and 9. For 88, check both 8 and 11."
            },
            {
                title: "2. Unit Digit & Cyclicity",
                text: "To find the unit digit of an exponent base^power, use the concept of cyclicity (pattern repetition).",
                examples: [
                    "Cyclicity of 0, 1, 5, 6 is 1: They always end in themselves.",
                    "Cyclicity of 4 and 9 is 2: 4^odd = 4, 4^even = 6. 9^odd = 9, 9^even = 1.",
                    "Cyclicity of 2, 3, 7, 8 is 4: Divide the power by 4. The remainder determines the position in the cycle.",
                    "Cycle for 2: 2^1=2, 2^2=4, 2^3=8, 2^4=6."
                ],
                shortcut: "If the power is perfectly divisible by 4 (remainder 0), use the 4th power in the cycle."
            },
            {
                title: "3. Remainder Theorem & Fermat's Little Theorem",
                text: "Advanced techniques for finding remainders of large expressions.",
                examples: [
                    "Polynomial Remainder: If f(x) is divided by (x - a), the remainder is f(a).",
                    "Fermat's Theorem: a^(p-1) / p leaves a remainder of 1 (where p is prime and 'a' is not a multiple of p).",
                    "Wilson's Theorem: (p-1)! / p leaves a remainder of (p-1) or -1."
                ],
                shortcut: "Negative Remainder Trick: 15 / 16 leaves a remainder of 15, which can be written as -1. So (15)^100 / 16 = (-1)^100 = +1 remainder."
            },
            {
                title: "4. Number of Factors & Prime Factorization",
                text: "Any number N can be expressed as p^a * q^b * r^c.",
                examples: [
                    "Total number of factors = (a+1)(b+1)(c+1)",
                    "Sum of factors = [(p^(a+1)-1)/(p-1)] * [(q^(b+1)-1)/(q-1)]",
                    "Number of odd factors: Ignore the power of 2 entirely and calculate."
                ],
                shortcut: "A number has an ODD number of total factors ONLY if it is a Perfect Square."
            }
        ]
    },
    math_percentages: {
        category: "Math: Arithmetic",
        title: "Percentages, Profit & Loss: Deep Dive",
        subtitle: "Fractions to Percentages Mastery",
        blocks: [
            {
                title: "1. Fraction to Percentage Table",
                text: "Memorize these to avoid calculations. Essential for Data Interpretation.",
                examples: [
                    "1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%",
                    "1/5 = 20%, 1/6 = 16.66%, 1/7 = 14.28%",
                    "1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%"
                ],
                shortcut: "If A is x% more than B, then B is [x / (100+x)] * 100% less than A."
            },
            {
                title: "2. Successive Discount & Profit",
                text: "When multiple discounts or profits are applied sequentially.",
                examples: [
                    "Successive discounts of a% and b%: Single equivalent discount = a + b - (ab/100).",
                    "Three successive discounts: Apply formula to first two, then apply formula to the result and the third discount."
                ],
                shortcut: "Dishonest Dealer Trick: Profit % = [(True Weight - False Weight) / False Weight] * 100"
            },
            {
                title: "3. Simple Interest (SI) and Compound Interest (CI)",
                text: "Core arithmetic formulas.",
                examples: [
                    "SI = (P * R * T) / 100",
                    "Amount = P + SI",
                    "CI = P(1 + R/100)^T - P",
                    "Difference between CI and SI for 2 years: D = P(R/100)²",
                    "Difference between CI and SI for 3 years: D = P(R/100)² * (3 + R/100)"
                ],
                shortcut: "Effective Rate for 2 years CI = R + R + (R²/100). If R=10%, CI=21%."
            }
        ]
    },
    math_time_work: {
        category: "Math: Arithmetic",
        title: "Time, Work, Speed & Distance: Deep Dive",
        subtitle: "Efficiency & Proportionality",
        blocks: [
            {
                title: "1. Time & Work (LCM Method)",
                text: "Never use fractions (1/x). Use LCM to find total work.",
                examples: [
                    "If A does work in 10 days, B in 15 days. LCM(10,15) = 30 units (Total Work).",
                    "A's efficiency = 3 units/day. B's efficiency = 2 units/day.",
                    "Time together = 30 / (3+2) = 6 days.",
                    "If A leaves after 2 days: Work done = (3+2)*2 = 10 units. Remaining = 20 units. Time for B = 20/2 = 10 days."
                ],
                shortcut: "MDH Formula: (M1 * D1 * H1) / W1 = (M2 * D2 * H2) / W2"
            },
            {
                title: "2. Pipes & Cisterns",
                text: "Same as Time & Work, but leakage/emptying pipe has NEGATIVE efficiency.",
                examples: [
                    "Pipe A fills in 10 hrs (+3 eff). Pipe B empties in 15 hrs (-2 eff). Total cap = 30.",
                    "Net efficiency = 3 - 2 = +1 unit/hr. Time to fill = 30/1 = 30 hrs."
                ],
                shortcut: "If a pipe fills a tank in x hours, and due to a leak it takes y hours, the leak empties the tank in (x*y)/(y-x) hours."
            },
            {
                title: "3. Time, Speed & Distance",
                text: "Distance = Speed * Time. Remember units!",
                examples: [
                    "To convert km/hr to m/s: multiply by 5/18.",
                    "To convert m/s to km/hr: multiply by 18/5."
                ],
                shortcut: "Average Speed (equal distance): 2xy / (x+y). Early/Late Concept: Distance = (S1*S2)/(S1-S2) * (Time Difference in hrs)."
            },
            {
                title: "4. Trains and Relative Speed",
                text: "When two bodies are moving.",
                examples: [
                    "Moving in opposite directions: Add speeds (S1 + S2).",
                    "Moving in same direction: Subtract speeds (S1 - S2).",
                    "Train crossing a platform: Total distance = Length of train + Length of platform."
                ],
                shortcut: "Train crossing a pole/man: Distance = Length of train. Time = L / Speed."
            }
        ]
    },
    // CATEGORY: ALGEBRA
    math_algebra: {
        category: "Math: Advance (Algebra)",
        title: "Algebraic Identities: Deep Dive",
        subtitle: "School Algebra & Value Putting",
        blocks: [
            {
                title: "1. The Big 3 Identities",
                text: "These are directly asked in Tier-I and Tier-II.",
                examples: [
                    "(a+b+c)² = a² + b² + c² + 2(ab + bc + ca)",
                    "a³ + b³ + c³ - 3abc = (a+b+c)(a² + b² + c² - ab - bc - ca)",
                    "a³ + b³ + c³ - 3abc = (1/2)(a+b+c)[(a-b)² + (b-c)² + (c-a)²]"
                ],
                shortcut: "If a+b+c = 0, then a³ + b³ + c³ = 3abc. This is a very common Tier-1 question."
            },
            {
                title: "2. Reciprocal Equations (x + 1/x)",
                text: "The most frequent pattern in SSC CGL.",
                examples: [
                    "If x + 1/x = a, then x² + 1/x² = a² - 2",
                    "If x - 1/x = a, then x² + 1/x² = a² + 2",
                    "If x + 1/x = a, then x³ + 1/x³ = a³ - 3a",
                    "If x - 1/x = a, then x³ - 1/x³ = a³ + 3a",
                    "If x + 1/x = a, then x⁴ + 1/x⁴ = (a²-2)² - 2"
                ],
                shortcut: "Special Cases: If x + 1/x = 1, then x³ = -1. If x + 1/x = √3, then x^6 = -1. If x + 1/x = 2, then x = 1. If x + 1/x = -2, then x = -1."
            },
            {
                title: "3. Value Putting Method",
                text: "For complex algebraic expressions with multiple variables.",
                examples: [
                    "If number of equations < number of variables, put extra variables as 0 or 1.",
                    "Example: a + b + c = 0. Put c = 0, b = 1, a = -1.",
                    "WARNING: Never put a value that makes the denominator ZERO (1/0 is undefined)."
                ],
                shortcut: "Symmetric expressions: If an expression is completely symmetric for a, b, c, you can put a = b = c = 1 to find the answer."
            }
        ]
    },
    // CATEGORY: GEOMETRY
    math_geometry: {
        category: "Math: Advance (Geometry)",
        title: "Geometry: Comprehensive Deep Dive",
        subtitle: "Triangles, Circles, and Polygons",
        blocks: [
            {
                title: "1. Centers of a Triangle",
                text: "Every triangle has four main centers. Their locations vary based on the triangle type.",
                examples: [
                    "Incenter (Intersection of Angle Bisectors): Center of the inscribed circle. Radius r = Area / semi-perimeter. Angle BIC = 90° + (A/2).",
                    "Circumcenter (Intersection of Perpendicular Bisectors): Center of circumscribed circle. Radius R = (abc) / (4 × Area). Angle BOC = 2A.",
                    "Orthocenter (Intersection of Altitudes): Angle BOC = 180° - A.",
                    "Centroid (Intersection of Medians): Divides each median in a 2:1 ratio (vertex to base). Divides triangle into 6 equal area triangles."
                ],
                shortcut: "Euler Line: The Orthocenter, Centroid, and Circumcenter always lie on a straight line in the ratio 2:1."
            },
            {
                title: "2. Triangle Properties & Inequalities",
                text: "Fundamental rules governing side lengths and angles.",
                examples: [
                    "Sum of any two sides must be strictly greater than the third side (a + b > c).",
                    "Difference of any two sides must be strictly less than the third side (|a - b| < c).",
                    "Sine Rule: a/sinA = b/sinB = c/sinC = 2R.",
                    "Cosine Rule: cosA = (b² + c² - a²) / 2bc."
                ],
                shortcut: "To check if a triangle is acute, right, or obtuse: If a²+b² > c² (Acute), a²+b² = c² (Right), a²+b² < c² (Obtuse) where c is the longest side."
            },
            {
                title: "3. Circle Theorems (Chords & Secants)",
                text: "Relationships between lines intersecting circles.",
                examples: [
                    "A perpendicular from the center to a chord bisects the chord.",
                    "Equal chords subtend equal angles at the center.",
                    "Angle in a semicircle is always 90°.",
                    "Angles in the same segment of a circle are equal.",
                    "Intersecting Chords: If chords AB and CD intersect at P inside, then PA × PB = PC × PD."
                ],
                shortcut: "Alternate Segment Theorem: The angle between a tangent and a chord is equal to the angle subtended by the chord in the alternate segment."
            },
            {
                title: "4. Regular Polygons",
                text: "A polygon with 'n' sides where all sides and interior angles are equal.",
                examples: [
                    "Sum of interior angles = (n - 2) × 180°.",
                    "Each interior angle = [(n - 2) × 180°] / n.",
                    "Sum of exterior angles is ALWAYS 360°, regardless of the number of sides.",
                    "Number of diagonals = n(n - 3) / 2."
                ],
                shortcut: "To find the number of sides quickly if given the exterior angle: n = 360° / Exterior Angle."
            }
        ]
    },
    // CATEGORY: MENSURATION
    math_mensuration: {
        category: "Math: Advance (Mensuration)",
        title: "Mensuration 2D & 3D: Deep Dive & Speed Hacks",
        subtitle: "Areas, Volumes, and Option Elimination",
        blocks: [
            {
                title: "1. The Rule of 11 (3-Second Hack)",
                text: "Whenever finding Area or Volume of circles, cylinders, cones, or spheres.",
                examples: [
                    "Since π = 22/7, the final answer involves multiplication by 22.",
                    "Therefore, the final answer MUST be a multiple of 11."
                ],
                shortcut: "SPEED HACK: Don't calculate! Just check which option is divisible by 11. (Sum of odd places - Sum of even places = 0 or 11). If only one option works, click it and move on!"
            },
            {
                title: "2. 2D Figures Formulas",
                text: "Area and Perimeters.",
                examples: [
                    "Equilateral Triangle: Area = (√3/4)a², Height = (√3/2)a",
                    "Right Triangle: Area = 1/2 × Base × Height",
                    "Rectangle: Area = l × b, Perimeter = 2(l+b), Diagonal = √(l² + b²)",
                    "Square: Area = a² or d²/2, Perimeter = 4a, Diagonal = a√2",
                    "Circle: Area = πr², Circumference = 2πr",
                    "Sector Area = (θ/360) × πr²"
                ],
                shortcut: "Area of a triangle when all 3 sides are given: Heron's Formula: Area = √[s(s-a)(s-b)(s-c)], where s is semi-perimeter."
            },
            {
                title: "3. 3D Figures Formulas",
                text: "Memorize these for direct calculation.",
                examples: [
                    "Cube: Volume = a³, Surface Area = 6a², Diagonal = a√3",
                    "Cuboid: Volume = lbh, Surface Area = 2(lb + bh + hl)",
                    "Cylinder: Volume = πr²h, CSA = 2πrh",
                    "Cone: Volume = 1/3πr²h, CSA = πrl (where l is slant height)",
                    "Sphere: Volume = 4/3πr³, Surface Area = 4πr²",
                    "Hemisphere: Volume = 2/3πr³, CSA = 2πr², TSA = 3πr²"
                ],
                shortcut: "When a 3D figure is melted and recast into another, their VOLUMES are always equal. When wire is drawn from a cylinder, equate volumes."
            }
        ]
    },
    // CATEGORY: TRIGONOMETRY
    math_trigonometry: {
        category: "Math: Advance (Trig/Stat)",
        title: "Trigonometry & Heights",
        subtitle: "Ratios and Identities",
        blocks: [
            {
                title: "1. Basic Identities & Values",
                text: "Know the values of 0, 30, 45, 60, and 90 degrees.",
                examples: [
                    "sin²θ + cos²θ = 1",
                    "sec²θ - tan²θ = 1",
                    "cosec²θ - cot²θ = 1"
                ],
                shortcut: "Value Putting Method: If an expression is independent of θ, put θ = 0° or 90° for sin/cos, and θ = 45° for tan/cot to get the answer instantly."
            },
            {
                title: "2. Heights and Distances",
                text: "Use standard ratio triangles instead of calculating sin/tan every time.",
                examples: [
                    "For a 30°-60°-90° triangle, the sides are in the ratio 1 : √3 : 2.",
                    "For a 45°-45°-90° triangle, the sides are in the ratio 1 : 1 : √2."
                ],
                shortcut: "If elevation angle changes from 30° to 60° while moving distance 'd' towards a tower of height 'h', then d = 2h/√3."
            }
        ]
    },
    // CATEGORY: STATISTICS
    math_statistics: {
        category: "Math: Advance (Trig/Stat)",
        title: "Statistics & Data Interpretation: Deep Dive",
        subtitle: "Mean, Median, Mode (Tier-II Focus)",
        blocks: [
            {
                title: "1. Central Tendency",
                text: "Basic formulas for grouped and ungrouped data.",
                examples: [
                    "Mean: Average of all data points. (Sum/Count)",
                    "Median: Middle value when sorted. If even, average of two middle values.",
                    "Mode: Most frequently occurring value."
                ],
                shortcut: "Empirical Formula (Extremely Important): Mode = 3(Median) - 2(Mean)"
            },
            {
                title: "2. Dispersion & Standard Deviation",
                text: "Measuring how spread out the data is.",
                examples: [
                    "Range = Max Value - Min Value.",
                    "Variance (σ²) = Average of squared differences from the Mean.",
                    "Standard Deviation (σ) = Square root of Variance."
                ],
                shortcut: "If every observation in a dataset is increased by 'k', the Mean increases by 'k', but the Standard Deviation and Variance REMAIN UNCHANGED."
            }
        ]
    },
    // CATEGORY: ADDITIONAL ARITHMETIC
    math_mixture: {
        category: "Math: Arithmetic",
        title: "Mixture and Alligation: Deep Dive",
        subtitle: "Cross Method Technique & Replacements",
        blocks: [
            {
                title: "1. The Alligation Rule",
                text: "Used when two ingredients are mixed to form a mixture of a mean value.",
                examples: [
                    "Quantity of Cheaper / Quantity of Dearer = (Cost of Dearer - Mean Price) / (Mean Price - Cost of Cheaper)"
                ],
                shortcut: "Always draw the 'Cross'. Put the cheaper price on top left, dearer on top right, mean in the middle. Subtract diagonally to get the ratio."
            },
            {
                title: "2. Successive Replacement Formula",
                text: "When liquid is repeatedly removed and replaced with water.",
                examples: [
                    "Final quantity of original liquid = Original Volume × (1 - Replacement Volume/Total Volume)^n",
                    "Where 'n' is the number of times the process is repeated."
                ],
                shortcut: "This is exactly the same formula as Compound Interest depreciation!"
            }
        ]
    },
    // CATEGORY: ADDITIONAL ADVANCE
    math_graphs: {
        category: "Math: Advance (Algebra)",
        title: "Graphs of Linear Equations: Deep Dive",
        subtitle: "Slopes, Intercepts, and Visuals",
        blocks: [
            {
                title: "1. Equation of a Line",
                text: "Standard form: y = mx + c, where m is slope and c is y-intercept.",
                examples: [
                    "If lines are parallel: m1 = m2",
                    "If lines are perpendicular: m1 × m2 = -1"
                ],
                shortcut: "The coordinates of the point where the line crosses the X-axis is found by putting y=0. For Y-axis, put x=0."
            },
            {
                title: "2. Visual Representation",
                text: "A visual example of a linear graph crossing the axes.",
                examples: [
                    `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <line x1="100" y1="0" x2="100" y2="200" stroke="black" stroke-width="2"/> <!-- Y-axis -->
                        <line x1="0" y1="100" x2="200" y2="100" stroke="black" stroke-width="2"/> <!-- X-axis -->
                        <line x1="20" y1="160" x2="180" y2="40" stroke="blue" stroke-width="2"/> <!-- Line y = -3/4x + c -->
                        <circle cx="100" cy="100" r="3" fill="red"/> <!-- Origin -->
                        <text x="105" y="15" font-size="12">Y</text>
                        <text x="185" y="115" font-size="12">X</text>
                    </svg>`
                ],
                shortcut: "In a system of linear equations (a1x+b1y=c1, a2x+b2y=c2), if a1/a2 = b1/b2 = c1/c2, there are infinite solutions (overlapping lines)."
            }
        ]
    },
    math_congruence: {
        category: "Math: Advance (Geometry)",
        title: "Congruence and Similarity: Deep Dive",
        subtitle: "Rules for Triangles",
        blocks: [
            {
                title: "1. Congruence Rules",
                text: "Two triangles are congruent if they are exactly the same size and shape.",
                examples: [
                    "SSS: All 3 sides are equal.",
                    "SAS: Two sides and the included angle.",
                    "ASA: Two angles and the included side.",
                    "RHS: Right angle, Hypotenuse, and one Side."
                ],
                shortcut: "AAA is a rule for SIMILARITY, not congruence. If two triangles are similar, the ratio of their AREAS is equal to the square of the ratio of their corresponding sides."
            }
        ]
    },
    // CATEGORY: ADVANCED MENSURATION & TRIGONOMETRY
    math_mensuration_adv: {
        category: "Math: Advance (Mensuration)",
        title: "Advanced 3D Shapes: Deep Dive",
        subtitle: "Prisms, Pyramids, and Frustums",
        blocks: [
            {
                title: "1. Prism and Pyramid",
                text: "A prism has identical base and top. A pyramid has a base and converges to a point.",
                examples: [
                    "Prism Volume = Area of Base × Height",
                    "Prism LSA = Perimeter of Base × Height",
                    "Pyramid Volume = 1/3 × Area of Base × Height",
                    "Pyramid LSA = 1/2 × Perimeter of Base × Slant Height"
                ],
                shortcut: "A cylinder is just a circular prism, and a cone is just a circular pyramid! The formulas are exactly the same."
            },
            {
                title: "2. Frustum of a Cone",
                text: "A cone with the top cut off.",
                examples: [
                    "Volume = 1/3 πh(R² + r² + Rr)",
                    "Slant Height l = √[h² + (R-r)²]"
                ],
                shortcut: "The volume formula is very similar to the sum of cubes formula: a³-b³ = (a-b)(a²+ab+b²)."
            }
        ]
    },
    math_trig_adv: {
        category: "Math: Advance (Trig/Stat)",
        title: "Radian Measures & Max/Min: Deep Dive",
        subtitle: "Advanced Trigonometry",
        blocks: [
            {
                title: "1. Degree and Radian Measure",
                text: "Converting between degrees and radians.",
                examples: [
                    "π radians = 180°",
                    "To convert Degree to Radian: Multiply by (π/180)",
                    "To convert Radian to Degree: Multiply by (180/π)"
                ],
                shortcut: "Remember 1 radian ≈ 57.3°"
            },
            {
                title: "2. Maximum and Minimum Values",
                text: "Finding the range of trigonometric functions.",
                examples: [
                    "Max value of a·sinθ + b·cosθ = √(a² + b²)",
                    "Min value of a·sinθ + b·cosθ = -√(a² + b²)"
                ],
                shortcut: "For sin²θ + cos²θ type questions, the max/min depends heavily on whether the powers are even or odd."
            }
        ]
    },
    // MASSIVE EXPANSION: ADDITIONAL TIER 1 & TIER 2 TOPICS
    math_coordinate: {
        category: "Math: Advance (Coordinate Geo)",
        title: "Coordinate Geometry: Massive Deep Dive",
        subtitle: "Slopes, Intercepts, and Reflections",
        blocks: [
            {
                title: "1. Distance and Midpoint Formula",
                text: "The foundation of coordinate geometry.",
                examples: [
                    "Distance between (x1, y1) and (x2, y2) = √[(x2 - x1)² + (y2 - y1)²]",
                    "Midpoint = ((x1 + x2)/2, (y1 + y2)/2)"
                ],
                shortcut: "SPEED HACK: If finding distance from the origin (0,0), it's simply √(x² + y²). This is just the Pythagorean theorem!"
            },
            {
                title: "2. Slope and Equation of Line",
                text: "Understanding how lines behave on the Cartesian plane.",
                examples: [
                    "Slope (m) = (y2 - y1) / (x2 - x1)",
                    "Slope-Intercept Form: y = mx + c (where c is y-intercept).",
                    "Parallel lines: m1 = m2. Perpendicular lines: m1 * m2 = -1."
                ],
                shortcut: "If the equation is in the form Ax + By + C = 0, the slope is instantly found as (-A / B)."
            },
            {
                title: "3. Reflection of a Point",
                text: "A very frequently asked TCS pattern question.",
                examples: [
                    "Reflection of (x, y) in X-axis: (x, -y)",
                    "Reflection of (x, y) in Y-axis: (-x, y)",
                    "Reflection in the origin: (-x, -y)",
                    "Reflection in the line y = x: (y, x)"
                ],
                shortcut: "Trick: Whatever axis you are reflecting 'in', that coordinate remains EXACTLY the same. The other coordinate changes its sign."
            }
        ]
    },
    math_probability_perm: {
        category: "Math: Advance (Probability)",
        title: "Permutations, Combinations & Probability: Deep Dive",
        subtitle: "Card Tricks and Dice Rolling",
        blocks: [
            {
                title: "1. Permutations vs Combinations",
                text: "Knowing when to arrange and when to select.",
                examples: [
                    "Permutation (Arrangement matters): nPr = n! / (n-r)!",
                    "Combination (Selection only, order doesn't matter): nCr = n! / [r! * (n-r)!]"
                ],
                shortcut: "SPEED HACK: nC0 = 1, nC1 = n, nCn = 1. Also, nCr = nC(n-r). So 100C98 is exactly the same as 100C2!"
            },
            {
                title: "2. Dice and Cards Probability",
                text: "The two most common probability scenarios.",
                examples: [
                    "Rolling 2 Dice: Total outcomes = 36. Sum ranges from 2 to 12.",
                    "Deck of 52 Cards: 4 suits (Spades, Clubs = Black; Hearts, Diamonds = Red). 13 cards per suit. Face cards = J, Q, K (Total 12 face cards)."
                ],
                shortcut: "Dice Sum Trick: The number of ways to get a sum on 2 dice goes up to 7, then down. (Sum of 7 = 6 ways, Sum of 8 = 5 ways, Sum of 9 = 4 ways)."
            }
        ]
    },
    math_surds_indices: {
        category: "Math: Arithmetic",
        title: "Surds and Indices: Deep Dive",
        subtitle: "Power Rules and Rationalization",
        blocks: [
            {
                title: "1. Laws of Indices",
                text: "Basic operations on exponents.",
                examples: [
                    "a^m * a^n = a^(m+n)",
                    "a^m / a^n = a^(m-n)",
                    "(a^m)^n = a^(mn)"
                ],
                shortcut: "Any number to the power of 0 is 1 (a^0 = 1). A negative power means reciprocal (a^-n = 1 / a^n)."
            },
            {
                title: "2. Infinite Surd Series",
                text: "A classic pattern question.",
                examples: [
                    "If x = √(A + √(A + √(A...))): The answer is the positive root of the quadratic equation y² - y - A = 0.",
                    "If x = √(A * √(A * √(A...))): The answer is simply A."
                ],
                shortcut: "SPEED HACK: For √(A + √(A...)), find two consecutive integers whose product is A. The larger integer is the answer. (e.g., √(12 + √(12...)) -> 12 = 3*4. Answer is 4)."
            }
        ]
    },
    math_boats_streams: {
        category: "Math: Arithmetic",
        title: "Boats and Streams: Deep Dive",
        subtitle: "Upstream and Downstream Speed",
        blocks: [
            {
                title: "1. Core Formulas",
                text: "Speed of boat = u, Speed of stream = v.",
                examples: [
                    "Downstream Speed (D) = u + v",
                    "Upstream Speed (U) = u - v"
                ],
                shortcut: "If you are given Downstream and Upstream speeds, finding the individual speeds is instant: Speed of Boat = (D + U) / 2. Speed of Stream = (D - U) / 2."
            }
        ]
    },
    math_ratio_proportion: {
        category: "Math: Arithmetic",
        title: "Ratio, Proportion & Partnerships: Massive Deep Dive",
        subtitle: "Comparative Relations and Distribution",
        blocks: [
            {
                title: "1. Ratio Basics",
                text: "Comparing two quantities expressed in the simplest form.",
                examples: [
                    "If A:B = 3:5 and B:C = 2:7, find A:B:C. LCM(5,2)=10. A:B = 6:10, B:C = 10:35. So A:B:C = 6:10:35.",
                    "Continued Ratio: If A:B:C = 2:3:4 and total = 180, then A = (2/9)*180 = 40.",
                    "Compound Ratio: (A:B) × (C:D) = (AC):(BD)"
                ],
                shortcut: "When comparing multiple ratios, always find LCM of the common term to align them. Use this for partnership questions."
            },
            {
                title: "2. Proportion Concepts",
                text: "When one quantity depends directly or inversely on another.",
                examples: [
                    "Direct Proportion: If a ∝ b, then a = kb (constant k). Writing: a:b = c:d means ad = bc.",
                    "Inverse Proportion: If a ∝ 1/b, then ab = k (constant).",
                    "If a:b = 2:3 and b:c = 4:5, find a:b:c by finding LCM of common term."
                ],
                shortcut: "In proportion, the cross products are always equal: a:b = c:d means a×d = b×c. Use this to find missing terms instantly."
            },
            {
                title: "3. Partnership & Profit Distribution",
                text: "Dividing profits based on capital or time invested.",
                examples: [
                    "Equal Capital, Different Time: Profit shares are in the ratio of times: P₁:P₂ = T₁:T₂.",
                    "Equal Time, Different Capital: Profit shares are in the ratio of capitals: P₁:P₂ = C₁:C₂.",
                    "Both Different: Profit shares are in ratio of (Capital × Time): P₁:P₂ = (C₁×T₁):(C₂×T₂)."
                ],
                shortcut: "Always multiply Capital with Time for each partner to find the share coefficient, then divide the total profit accordingly."
            },
            {
                title: "4. Mean Proportional & Continued Proportion",
                text: "Special ratios with specific properties.",
                examples: [
                    "If a:b = b:c, then b is the mean proportional. Also, b² = ac.",
                    "If a:b = b:c = c:d, it's a continued proportion. Common method: Let a/b = b/c = c/d = k, then a=k³d (after solving)."
                ],
                shortcut: "If x is the mean proportional between a and b, then x = √(ab). Also, if a, b, c are in continued proportion, then b²=ac and c²/a=b."
            },
            {
                title: "5. Worked Examples",
                text: "Complex scenario-based problems.",
                examples: [
                    "A:B:C = 2:3:4. If total = 1800, find A+B. Solution: A = (2/9)*1800 = 400, B = (3/9)*1800 = 600. A+B = 1000.",
                    "Three partners: A invested 5000 for 12 months, B invested 6000 for 8 months, C invested 4000 for 10 months. Profit = 5000. Find C's share. Solution: Ratio = 5000*12 : 6000*8 : 4000*10 = 60:48:40 = 15:12:10. C's share = (10/37)*5000 ≈ 1351.35.",
                    "If a:b = 5:3 and a = 100, find b. Solution: 100:b = 5:3, so b = (3*100)/5 = 60."
                ],
                shortcut: "Always check the time/period dimension in partnership questions. Capital alone won't determine shares if time is different."
            }
        ]
    },
    math_mixture_alligation: {
        category: "Math: Arithmetic",
        title: "Mixture & Alligation: Deep Dive & Shortcuts",
        subtitle: "Mixing Quantities, Milk-Water Problems",
        blocks: [
            {
                title: "1. The Alligation Rule",
                text: "Finding average cost or concentration when mixing substances.",
                examples: [
                    "If substance A of price p₁ and quantity q₁ is mixed with substance B of price p₂ and quantity q₂, the mixture's price = (p₁q₁ + p₂q₂)/(q₁+q₂).",
                    "Alligation Method: Arrange prices in order. Mean price (middle). Differences from mean form ratio of quantities. If p₁ < mean < p₂, then q₁:q₂ = (mean-p₁):(p₂-mean)."
                ],
                shortcut: "SPEED TRICK: If the mean is exactly between two prices, the quantities are in ratio 1:1. For any other position, use the criss-cross method instantly."
            },
            {
                title: "2. Milk-Water Replacement Problem",
                text: "The classic 'remove and replace' scenario.",
                examples: [
                    "Initial concentration of milk = a/(a+b). After removing x units and replacing with water: New concentration = a(a+b-x)/(a+b)².",
                    "If 'x' liters are removed 'n' times: Final milk = a[1 - x/(a+b)]ⁿ.",
                    "Example: 100L of milk, remove 20L and replace with water, repeat 3 times. Final milk = 100 * (80/100)³ = 100 * 0.512 = 51.2L."
                ],
                shortcut: "Key Formula: If 'x' units are removed 'n' times from a quantity 'a', the remaining = a[1 - x/a]ⁿ. Apply this directly for instant solution."
            },
            {
                title: "3. Worked Examples",
                text: "Complex mixture scenarios.",
                examples: [
                    "Merchant has tea at ₹40/kg and ₹60/kg. How much of each to make 50kg at ₹50/kg? Solution: Using alligation: (60-50):(50-40) = 10:10 = 1:1. So 25kg each.",
                    "A container has 90L of acid solution (30% acid). How much pure acid must be added to make it 50% acid? Solution: 90*30 + x*100 = (90+x)*50. 2700 + 100x = 4500 + 50x. 50x = 1800. x = 36L.",
                    "In 1 liter of 80% alcohol solution, how much water is needed to dilute it to 50%? Solution: 0.8 + 0 = (1+x)*0.5. x = 0.6L."
                ],
                shortcut: "Always set up the concentration equation: (Initial Quantity × Initial %) + (Added Quantity × Added %) = (Final Quantity × Final %)."
            }
        ]
    },
    math_quadratic_equations: {
        category: "Math: Algebra",
        title: "Quadratic Equations & Functions: Deep Dive",
        subtitle: "Roots, Discriminant, Vieta's Formulas",
        blocks: [
            {
                title: "1. Nature of Roots (Discriminant)",
                text: "For ax² + bx + c = 0, Discriminant (D) = b² - 4ac.",
                examples: [
                    "If D > 0: Two distinct real roots.",
                    "If D = 0: Two equal real roots (x = -b/2a).",
                    "If D < 0: No real roots (complex roots exist)."
                ],
                shortcut: "If a question asks 'for what value of 'k' does the equation have equal roots?', set D=0 and solve for k."
            },
            {
                title: "2. Vieta's Formulas (Sum & Product of Roots)",
                text: "For ax² + bx + c = 0 with roots α and β:",
                examples: [
                    "Sum of roots: α + β = -b/a",
                    "Product of roots: αβ = c/a",
                    "If α² + β² is required: α² + β² = (α+β)² - 2αβ = (b²-2ac)/a²."
                ],
                shortcut: "To form a quadratic with roots r₁ and r₂: x² - (r₁+r₂)x + r₁r₂ = 0. This is faster than expanding (x-r₁)(x-r₂)."
            },
            {
                title: "3. Complex Root Scenarios",
                text: "When roots have specific relationships.",
                examples: [
                    "If one root is 'k' times the other: Let roots be r and kr. Then α+β = r(1+k) and αβ = kr². Use Vieta's formulas to set up equations.",
                    "If roots are α and 1/α (reciprocals): α + 1/α and α × 1/α = 1.",
                    "If roots differ by a constant 'd': Let roots be α and α+d. Then (α+d) - α = d and α(α+d) = c/a."
                ],
                shortcut: "For reciprocal roots, the coefficient of x² equals coefficient of constant term (a = c). For equal roots differing from each other by 0."
            },
            {
                title: "4. Worked Examples",
                text: "Full solutions to common question types.",
                examples: [
                    "Solve 2x² + 5x - 3 = 0. Solution: Using formula, x = [-5 ± √(25+24)]/4 = [-5 ± 7]/4. x = 1/2 or x = -3.",
                    "Find k such that 4x² - 6x + k = 0 has equal roots. Solution: D = 0, so 36 - 16k = 0, k = 9/4.",
                    "If the roots of x² - 2px + q = 0 are in ratio 1:2, find p in terms of q. Solution: Let roots be r and 2r. Sum = 3r = 2p, Product = 2r² = q. So r = √(q/2). Thus p = (3√(q/2))/2."
                ],
                shortcut: "Always check if factorization is possible before using the quadratic formula. Many SSC problems have integer roots."
            }
        ]
    },
    math_logarithms: {
        category: "Math: Algebra",
        title: "Logarithms & Exponentials: Deep Dive & Speed Hacks",
        subtitle: "Properties, Change of Base, Applications",
        blocks: [
            {
                title: "1. Logarithm Definition & Basic Properties",
                text: "If aˣ = b, then x = logₐ(b). Remember: log base must be > 0 and ≠ 1, argument must be > 0.",
                examples: [
                    "logₐ(mn) = logₐ(m) + logₐ(n)",
                    "logₐ(m/n) = logₐ(m) - logₐ(n)",
                    "logₐ(mⁿ) = n × logₐ(m)",
                    "logₐ(1) = 0 (any base)",
                    "logₐ(a) = 1"
                ],
                shortcut: "TRICK: log₂(8) is instantly 3 because 2³=8. For complex logs, convert to the same base using change of base formula."
            },
            {
                title: "2. Change of Base Formula",
                text: "Converting log from one base to another.",
                examples: [
                    "logₐ(b) = log₁₀(b) / log₁₀(a) = ln(b) / ln(a)",
                    "Special: logₐ(b) × logᵦ(a) = 1"
                ],
                shortcut: "When bases are different, always convert to base 10 (common log) or base 'e' (natural log) for calculation."
            },
            {
                title: "3. Solving Logarithmic Equations",
                text: "Standard techniques for equations containing logs.",
                examples: [
                    "If logₐ(x) = b, then x = aᵇ (convert to exponential form).",
                    "If logₐ(x) + logₐ(y) = logₐ(z), then xy = z.",
                    "Always CHECK: The argument of each log must be positive in the final solution."
                ],
                shortcut: "Always convert logarithmic equations to exponential form first. It's faster than manipulating logs directly."
            },
            {
                title: "4. Common Logarithm Values (Base 10)",
                text: "These appear frequently in SSC Tier-2 Data Interpretation.",
                examples: [
                    "log₁₀(2) ≈ 0.301",
                    "log₁₀(3) ≈ 0.477",
                    "log₁₀(5) ≈ 0.699",
                    "log₁₀(10) = 1"
                ],
                shortcut: "log₁₀(5) = log₁₀(10/2) = 1 - log₁₀(2) ≈ 1 - 0.301 = 0.699. Use these derived values to solve quickly."
            }
        ]
    },
    math_data_interpretation_basics: {
        category: "Math: Data Interpretation",
        title: "Data Interpretation Fundamentals: Deep Dive",
        subtitle: "Reading Tables, Graphs, Calculations",
        blocks: [
            {
                title: "1. Types of Data Presentations",
                text: "Understanding different graph types and when to use them.",
                examples: [
                    "Table (Tabular Data): Exact numbers, best for precision. Look for row totals, column totals, percentages.",
                    "Bar Graph: Comparing categories. Heights represent values. Easy to compare multiple bars at a glance.",
                    "Pie Chart: Parts of a whole. Each slice = (component/total) × 360°. For percentages: (component/total) × 100%.",
                    "Line Graph: Trends over time. Useful for identifying increases, decreases, stability.",
                    "Stacked Bar: Multiple data sets combined. Each segment shows a portion."
                ],
                shortcut: "SPEED HACK: In pie charts, if a slice appears to be about 1/4 of the circle, it's 25% or 90°. Use mental estimation for quick approximations."
            },
            {
                title: "2. Calculation Tricks for DI",
                text: "Fast arithmetic without a calculator.",
                examples: [
                    "Percentage: (Part/Total) × 100. If total = 200, part = 50: Percentage = 50/200 × 100 = 25%.",
                    "Ratio: Always simplify. 40:60 = 2:3 after dividing by 20.",
                    "Average: Sum / Count. If average is 25 and count is 8, sum = 200.",
                    "Percentage change: [(New - Old) / Old] × 100."
                ],
                shortcut: "Use the 'fraction-to-percentage' table from the Percentages topic. Know that 1/8 = 12.5%, 1/6 ≈ 16.67%, 1/7 ≈ 14.29%."
            },
            {
                title: "3. Common DI Question Patterns",
                text: "What SSC typically asks in Data Interpretation.",
                examples: [
                    "Read from graph: 'What is the value in 2020?' -> Find the bar/point for 2020 and read the y-axis.",
                    "Comparison: 'By what % did A increase from 2019 to 2020?' -> Calculate percentage change.",
                    "Totals: 'What is the combined revenue of all regions?' -> Sum all bars or sections.",
                    "Ranking: 'Which year had the highest sales?' -> Find the tallest bar or largest value."
                ],
                shortcut: "80% of DI questions can be solved by careful reading and basic arithmetic. Don't overthink; read the graph carefully first."
            },
            {
                title: "4. Worked DI Example",
                text: "Step-by-step solution to a complex DI scenario.",
                examples: [
                    "Given: Pie chart showing sales by region. North = 120°, South = 90°, East = 100°, West = 50°. Total sales = ₹36,000. Find East sales. Solution: East = (100/360) × 36000 = (5/18) × 36000 = 10000.",
                    "Given: Bar graph of quarterly sales (Q1=100, Q2=120, Q3=140, Q4=130). Q1 to Q2 % increase = (120-100)/100 × 100 = 20%.",
                    "Given: Table with rows for different products. Total sales = 5000. Product A = 1250. % share = (1250/5000) × 100 = 25%."
                ],
                shortcut: "For percentage in pie charts, multiply the angle by 100/360 = by 5/18. For bar graphs, use the (new-old)/old formula."
            }
        ]
    },
    math_permutation_combinations_expanded: {
        category: "Math: Combinatorics",
        title: "Permutations & Combinations: Massive Deep Dive & Speed Hacks",
        subtitle: "Advanced Patterns, Restrictions, Circular Arrangements",
        blocks: [
            {
                title: "1. Advanced Permutation Patterns",
                text: "Beyond basic nPr calculations.",
                examples: [
                    "Permutations with Restrictions: If 'A' must come first, fix A in position 1. Arrange remaining (n-1) items. Total = (n-1)!",
                    "Permutations where items cannot be together: Total - (arrangements where they are together).",
                    "Circular Permutations: (n-1)! instead of n! (because rotations are identical). For distinct positions, use (n-1)!",
                    "Permutations with repetition: n = nⁿ (e.g., arranging 5 objects in 5 places with no restriction = 5⁵)."
                ],
                shortcut: "TRICK: If k specific items must not be adjacent, first arrange the remaining (n-k) items, creating (n-k+1) gaps. Then place the k items in those gaps."
            },
            {
                title: "2. Combination Patterns & Restrictions",
                text: "Selecting items with conditions.",
                examples: [
                    "Combinations with minimum/maximum: If at least 3 items must be selected from 5: ⁵C₃ + ⁵C₄ + ⁵C₅.",
                    "Combinations with restrictions (e.g., at least one specific item): Subtract cases without that item from total.",
                    "Division into groups: If dividing n items into groups of size a, b, c: n! / (a! × b! × c!)"
                ],
                shortcut: "For 'at least' problems, it's faster to calculate the complement (all minus cases to exclude) than to sum multiple terms."
            },
            {
                title: "3. Worked Examples with Explanations",
                text: "Complete solutions to complex P&C problems.",
                examples: [
                    "In how many ways can 5 people sit in a row if 2 specific people must sit together? Solution: Treat the 2 people as 1 unit. Now arrange 4 units in 4! = 24 ways. Within the unit, 2 people can arrange in 2! = 2 ways. Total = 24 × 2 = 48.",
                    "How many 3-letter words can be formed from letters A,B,C,D,E if no repetition is allowed? Solution: ⁵P₃ = 5!/(5-3)! = 5×4×3 = 60.",
                    "How many ways to choose 3 red balls from 5 and 2 blue balls from 4? Solution: ⁵C₃ × ⁴C₂ = 10 × 6 = 60."
                ],
                shortcut: "Always identify: (1) Are order/arrangement matters? (P vs C) (2) Are there restrictions? (Treat related items as units) (3) Is repetition allowed?"
            }
        ]
    },
    math_set_theory: {
        category: "Math: Algebra",
        title: "Set Theory Basics: Deep Dive",
        subtitle: "Sets, Venn Diagrams, Logic",
        blocks: [
            {
                title: "1. Set Operations",
                text: "Union, Intersection, Complement, Difference.",
                examples: [
                    "Union (A ∪ B): All elements in A or B or both. |A ∪ B| = |A| + |B| - |A ∩ B|.",
                    "Intersection (A ∩ B): Only elements common to both A and B.",
                    "Complement (A'): All elements in universal set U but not in A.",
                    "Difference (A - B): Elements in A but not in B."
                ],
                shortcut: "KEY FORMULA: |A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |B ∩ C| - |A ∩ C| + |A ∩ B ∩ C|. Use this for 3-set problems."
            },
            {
                title: "2. Venn Diagram Problem Solving",
                text: "Visual representation for logical reasoning.",
                examples: [
                    "2 circles: Label A, A∩B, B, Outside both. Given any 3, find the 4th using set relations.",
                    "3 circles: 7 regions. Always label from center outwards (A∩B∩C, then pairwise intersections, then single sets, then outside).",
                    "Example: Of 100 students, 60 know English, 50 know Hindi, 30 know both. Know only English = 60-30 = 30. Know only Hindi = 50-30 = 20. Know neither = 100 - 30 - 30 - 20 = 20."
                ],
                shortcut: "For Venn diagrams, always start with the intersection (center) and work outwards. This prevents counting errors."
            },
            {
                title: "3. De Morgan's Laws",
                text: "Relationships between complementation and operations.",
                examples: [
                    "(A ∪ B)' = A' ∩ B'",
                    "(A ∩ B)' = A' ∪ B'",
                    "These are critical for logic problems in Reasoning section as well."
                ],
                shortcut: "Memorize: 'Break the line, change the sign.' For union, change to intersection and vice versa when complementing."
            }
        ]
    },
    math_linear_equations_systems: {
        category: "Math: Algebra",
        title: "Linear Equations & Systems: Deep Dive",
        subtitle: "Two Variables, Three Variables, Graphical Methods",
        blocks: [
            {
                title: "1. Solving Systems of Linear Equations",
                text: "Methods: Substitution, Elimination, Cross-Multiplication.",
                examples: [
                    "Substitution: From one equation, express one variable. Substitute in the other.",
                    "Elimination: Multiply equations to make one variable's coefficient equal. Add/Subtract to eliminate.",
                    "Cross-Multiplication (for 2 equations): a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0. Then x/(b₁c₂ - b₂c₁) = y/(c₁a₂ - c₂a₁) = 1/(a₁b₂ - a₂b₁)."
                ],
                shortcut: "Elimination is usually fastest. Choose to eliminate the variable with the smallest LCM of coefficients."
            },
            {
                title: "2. Three Variable Systems",
                text: "Solving equations with x, y, z simultaneously.",
                examples: [
                    "Method: Reduce to 2 equations by eliminating one variable from pairs. Then solve the 2-equation system. Finally, substitute back.",
                    "Example: 2x + y - z = 5; x - y + 2z = 3; 3x + 2y + z = 12. Eliminate z from eq1 and eq2, then eq2 and eq3, giving 2 equations in x,y."
                ],
                shortcut: "For 3 variables, always first try to eliminate the variable that appears in the simplest form."
            },
            {
                title: "3. Graphical Interpretation",
                text: "Understanding solutions geometrically.",
                examples: [
                    "Unique solution: Lines intersect at one point (independent, consistent).",
                    "Infinite solutions: Lines are identical (dependent, consistent).",
                    "No solution: Lines are parallel (inconsistent).",
                    "Check consistency: If a₁/a₂ = b₁/b₂ ≠ c₁/c₂, then no solution (parallel lines)."
                ],
                shortcut: "For quick consistency check: Calculate the ratio of coefficients. Same ratios = dependent or inconsistent. Different ratios = unique solution."
            }
        ]
    }
};
