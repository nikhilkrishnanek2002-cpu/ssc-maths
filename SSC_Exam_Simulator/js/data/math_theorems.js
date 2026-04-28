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
        title: "Percentages, Profit & Loss",
        subtitle: "Fractions to Percentages Mastery",
        blocks: [
            {
                title: "1. Fraction to Percentage Table",
                text: "Memorize these to avoid calculations:",
                examples: [
                    "1/2 = 50%", "1/3 = 33.33%", "1/4 = 25%",
                    "1/5 = 20%", "1/6 = 16.66%", "1/7 = 14.28%",
                    "1/8 = 12.5%", "1/9 = 11.11%", "1/11 = 9.09%"
                ],
                shortcut: "If A is x% more than B, then B is [x / (100+x)] * 100% less than A."
            },
            {
                title: "2. Successive Discount & Profit",
                text: "When multiple discounts or profits are applied.",
                examples: [
                    "Successive discounts of a% and b%: Single equivalent discount = a + b - (ab/100)."
                ],
                shortcut: "Dishonest Dealer Trick: Profit % = [(True Weight - False Weight) / False Weight] * 100"
            }
        ]
    },
    math_time_work: {
        category: "Math: Arithmetic",
        title: "Time, Work, Speed & Distance",
        subtitle: "Efficiency & Proportionality",
        blocks: [
            {
                title: "1. Time & Work (LCM Method)",
                text: "Never use fractions (1/x). Use LCM to find total work.",
                examples: [
                    "If A does work in 10 days, B in 15 days. LCM(10,15) = 30 units (Total Work).",
                    "A's efficiency = 3 units/day. B's efficiency = 2 units/day.",
                    "Time together = 30 / (3+2) = 6 days."
                ],
                shortcut: "MDH Formula: (M1 * D1 * H1) / W1 = (M2 * D2 * H2) / W2"
            },
            {
                title: "2. Time, Speed & Distance",
                text: "Distance = Speed * Time. Remember units!",
                examples: [
                    "To convert km/hr to m/s: multiply by 5/18.",
                    "To convert m/s to km/hr: multiply by 18/5."
                ],
                shortcut: "Average Speed (equal distance): 2xy / (x+y). Average Speed (three equal distances): 3xyz / (xy + yz + zx)."
            }
        ]
    },
    // CATEGORY: ALGEBRA
    math_algebra: {
        category: "Math: Advance (Algebra)",
        title: "Algebraic Identities",
        subtitle: "School Algebra & Value Putting",
        blocks: [
            {
                title: "1. Important Identities",
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
                    "If x + 1/x = a, then x³ + 1/x³ = a³ - 3a"
                ],
                shortcut: "If x + 1/x = 1, then x³ = -1.<br>If x + 1/x = √3, then x^6 = -1."
            }
        ]
    },
    // CATEGORY: GEOMETRY
    math_geometry: {
        category: "Math: Advance (Geometry)",
        title: "Geometry: Comprehensive Properties",
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
        title: "Mensuration 2D & 3D",
        subtitle: "Areas and Volumes",
        blocks: [
            {
                title: "1. 3D Figures Formulas",
                text: "Memorize these for direct calculation.",
                examples: [
                    "Cylinder: Volume = πr²h, CSA = 2πrh",
                    "Cone: Volume = 1/3πr²h, CSA = πrl (where l is slant height)",
                    "Sphere: Volume = 4/3πr³, Surface Area = 4πr²",
                    "Hemisphere: Volume = 2/3πr³, CSA = 2πr², TSA = 3πr²"
                ],
                shortcut: "When a 3D figure is melted and recast into another, their VOLUMES are always equal."
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
        title: "Statistics & Data Interpretation",
        subtitle: "Mean, Median, Mode (Tier-II Focus)",
        blocks: [
            {
                title: "1. Central Tendency",
                text: "Basic formulas for grouped and ungrouped data.",
                examples: [
                    "Mean: Average of all data points.",
                    "Median: Middle value when sorted. If even, average of two middle values.",
                    "Mode: Most frequently occurring value."
                ],
                shortcut: "Empirical Formula (Extremely Important): Mode = 3(Median) - 2(Mean)"
            }
        ]
    },
    // CATEGORY: ADDITIONAL ARITHMETIC
    math_mixture: {
        category: "Math: Arithmetic",
        title: "Mixture and Alligation",
        subtitle: "Cross Method Technique",
        blocks: [
            {
                title: "1. The Alligation Rule",
                text: "Used when two ingredients are mixed to form a mixture of a mean value.",
                examples: [
                    "Quantity of Cheaper / Quantity of Dearer = (Cost of Dearer - Mean Price) / (Mean Price - Cost of Cheaper)"
                ],
                shortcut: "Always draw the 'Cross'. Put the cheaper price on top left, dearer on top right, mean in the middle. Subtract diagonally to get the ratio."
            }
        ]
    },
    // CATEGORY: ADDITIONAL ADVANCE
    math_graphs: {
        category: "Math: Advance (Algebra)",
        title: "Graphs of Linear Equations",
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
        title: "Congruence and Similarity",
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
        title: "Advanced 3D Shapes",
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
        title: "Radian Measures & Max/Min Values",
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
    }
};
