const mathData = {
    // CATEGORY: ARITHMETIC - NUMBER SYSTEMS
    math_number_system: {
        category: "Math: Arithmetic",
        title: "Number Systems: Massive Deep Dive",
        subtitle: "Divisibility, Remainders, Factors & Advanced Patterns",
        blocks: [
            {
                title: "1. Comprehensive Divisibility Rules - The Complete Reference",
                text: "Divisibility rules help in identifying factors instantly without long division. These are TIME-SAVERS in timed exams.",
                examples: [
                    "Rule of 2: Last digit is even (0,2,4,6,8)",
                    "Rule of 3: Sum of all digits is divisible by 3. Example: 243 -> 2+4+3=9, divisible by 3 ✓",
                    "Rule of 4: Last TWO digits form a number divisible by 4. Example: 5316 -> 16 is divisible by 4 ✓",
                    "Rule of 5: Last digit is 0 or 5",
                    "Rule of 6: Divisible by both 2 and 3",
                    "Rule of 7: Double the last digit and subtract from the rest. Repeat. If result is 0 or divisible by 7, number is divisible. Example: 343 -> 34 - (2×3) = 28 (divisible by 7) ✓",
                    "Rule of 8: Last THREE digits form a number divisible by 8. Example: 2624 -> 624 ÷ 8 = 78 ✓",
                    "Rule of 9: Sum of all digits is divisible by 9. Example: 729 -> 7+2+9=18 (divisible by 9) ✓",
                    "Rule of 10: Ends in 0",
                    "Rule of 11: (Sum of digits at ODD places) - (Sum of digits at EVEN places) = 0 or multiple of 11. Example: 5896 -> (5+9)-(8+6)=14-14=0 ✓",
                    "Rule of 13: Multiply last digit by 4, add to rest. If divisible by 13, number is. Example: 221 -> 22 + (1×4) = 26 (not div by 13) ✗"
                ],
                shortcut: "COMPOSITE RULES: For 12, check 3 and 4. For 72, check 8 and 9. For 15, check 3 and 5. For 66, check 6 and 11.",
                commonMistakes: [
                    "Mistake: Thinking divisibility by 7 uses only the last digit. WRONG! You need to process the entire number sequentially.",
                    "Mistake: For rule of 11, counting positions from right to left sometimes. Remember: ODD positions = 1st, 3rd, 5th from RIGHT.",
                    "Mistake: Confusing rule of 8 (last 3 digits) with rule of 4 (last 2 digits)."
                ],
                practiceProblems: [
                    "Is 4,536 divisible by 8? Hint: Check last 3 digits (536). 536 ÷ 8 = 67 ✓",
                    "Is 12,573 divisible by 11? Hint: (1+5+3) - (2+7) = 9-9 = 0 ✓",
                    "Find the smallest number to add to 2341 to make it divisible by 9. Hint: 2+3+4+1=10. Need sum to be 18. Add 8."
                ]
            },
            {
                title: "2. Unit Digit & Cyclicity Mastery - The Power Pattern",
                text: "Finding the unit digit of exponents is a FREQUENCY PATTERN in SSC. Master this = guaranteed points.",
                examples: [
                    "Unit digit of 2^1=2, 2^2=4, 2^3=8, 2^4=6, 2^5=2... Cycle = {2,4,8,6}, repeats every 4",
                    "Unit digit of 3^1=3, 3^2=9, 3^3=7, 3^4=1, 3^5=3... Cycle = {3,9,7,1}, repeats every 4",
                    "Unit digit of 0,1,5,6: Always themselves regardless of power",
                    "Unit digit of 4: 4^odd=4, 4^even=6",
                    "Unit digit of 9: 9^odd=9, 9^even=1",
                    "FOR 7: 7^1=7, 7^2=9, 7^3=3, 7^4=1, repeats every 4",
                    "FOR 8: 8^1=8, 8^2=4, 8^3=2, 8^4=6, repeats every 4"
                ],
                shortcut: "SPEED TRICK: Divide the power by the cycle length. Remainder tells you the position in the cycle. If remainder=0, use the LAST element. Example: 2^47. 47÷4=11 rem 3. So take 3rd in cycle {2,4,8,6}=8.",
                commonMistakes: [
                    "Mistake: Using remainder=0 as the 0th element. NO! remainder=0 means use the 4th (or last) element of cycle.",
                    "Mistake: Forgetting that 5^any = 5, not calculating each time."
                ],
                practiceProblems: [
                    "Find unit digit of 7^245. Hint: 245÷4=61 rem 1. First element of {7,9,3,1}=7",
                    "Find unit digit of 3^1000. Hint: 1000÷4=250 rem 0. Fourth (last) element of {3,9,7,1}=1"
                ]
            },
            {
                title: "3. Remainder Theorem & Advanced Techniques",
                text: "For competitive exams, finding remainders is crucial. These formulas save massive time.",
                examples: [
                    "Fermat's Little Theorem: If p is prime and gcd(a,p)=1, then a^(p-1) ≡ 1 (mod p). Example: 2^6 ≡ 1 (mod 7)",
                    "Wilson's Theorem: (p-1)! ≡ -1 (mod p) for prime p. Example: 4! ≡ -1 (mod 5)",
                    "NEGATIVE REMAINDER TRICK: 15 ÷ 16 leaves remainder 15 or -1. So 15^100 ÷ 16 = (-1)^100 ≡ 1 (mod 16)",
                    "MODULAR ARITHMETIC: (a+b) mod n = (a mod n + b mod n) mod n. (a×b) mod n = (a mod n × b mod n) mod n"
                ],
                shortcut: "When finding large power remainders, use Fermat's theorem to reduce the exponent, then calculate."
            },
            {
                title: "4. Number of Factors & Prime Factorization Deep Dive",
                text: "Any number N = p₁^a₁ × p₂^a₂ × p₃^a₃",
                examples: [
                    "Total factors = (a₁+1)(a₂+1)(a₃+1). Example: 72 = 2^3 × 3^2. Factors = (3+1)(2+1) = 12",
                    "Sum of factors = [(p₁^(a₁+1)-1)/(p₁-1)] × [(p₂^(a₂+1)-1)/(p₂-1)]... Example: For 12 = 2^2×3: [(2^3-1)/(2-1)] × [(3^2-1)/(3-1)] = 7 × 4 = 28",
                    "Number of ODD factors: Exclude all powers of 2, calculate rest. Example: 72 = 2^3 × 3^2. Odd factors = (2+1) = 3 (which are 1,3,9)",
                    "Perfect square has ODD number of factors. Perfect cube has ≡ 1 (mod 3) factors"
                ],
                shortcut: "A number is a perfect square IFF it has an ODD number of factors. A number is a perfect cube IFF all exponents in prime factorization are divisible by 3.",
                practiceProblems: [
                    "How many factors does 360 have? 360 = 2^3 × 3^2 × 5. Factors = 4×3×2 = 24",
                    "What is the sum of factors of 28? 28 = 2^2 × 7. Sum = (2^3-1)/1 × (7^2-1)/6 = 7 × 8 = 56"
                ]
            }
        ]
    },

    // CATEGORY: ARITHMETIC - PERCENTAGES & PROFIT/LOSS
    math_percentages: {
        category: "Math: Arithmetic",
        title: "Percentages, Profit & Loss: Complete Mastery",
        subtitle: "Fractions, Successive Changes, Dishonest Dealers",
        blocks: [
            {
                title: "1. The ESSENTIAL Fraction-to-Percentage Table (Memorize This!)",
                text: "These conversions appear in EVERY DATA INTERPRETATION section. Knowing them = no calculation needed.",
                examples: [
                    "1/2=50%, 1/3≈33.33%, 1/4=25%, 1/5=20%, 1/6≈16.67%, 1/7≈14.29%, 1/8=12.5%, 1/9≈11.11%, 1/10=10%",
                    "1/11≈9.09%, 1/12≈8.33%, 2/3≈66.67%, 3/4=75%, 3/5=60%, 5/8=62.5%, 7/8=87.5%",
                    "DERIVED: 1/20=5%, 1/25=4%, 1/40=2.5%, 1/50=2%, 3/10=30%, 7/10=70%"
                ],
                shortcut: "GOLDEN RULE: If A is x% more than B, then B is [x/(100+x)]×100% less than A. And vice versa!"
            },
            {
                title: "2. Successive Percentage Changes - The Formula Everyone Misses",
                text: "When multiple discounts or increases are applied sequentially.",
                examples: [
                    "Successive discounts of a% and b%: Single equivalent = a + b - (ab/100). Example: 20% then 10% discount = 20+10-2 = 28% total discount",
                    "For 3 discounts a%, b%, c%: Find equivalent of first two, then apply to third",
                    "Percentage increase/decrease: [(New-Old)/Old]×100",
                    "Compound percentage change: (1 + r/100)^n - 1, where r is rate and n is time"
                ],
                shortcut: "For successive 10%, 10%, 10%: NOT 30%! It's 10+10-(1)=19%, then 19+10-(1.9)≈26.9% total.",
                commonMistakes: [
                    "Mistake: Adding percentages directly instead of using successive formula. 20% + 20% ≠ 40%! It's 20+20-(4)=36%",
                    "Mistake: Forgetting the (ab/100) term in successive formula"
                ]
            },
            {
                title: "3. Profit & Loss Fundamentals",
                text: "The backbone of commercial arithmetic.",
                examples: [
                    "Cost Price (CP), Selling Price (SP), Marked Price (MP)",
                    "Profit = SP - CP. Profit% = (Profit/CP)×100",
                    "Loss = CP - SP. Loss% = (Loss/CP)×100",
                    "Discount = MP - SP. Discount% = (Discount/MP)×100",
                    "MP = CP + Markup. Profit% = Markup% - Discount% (when profit is positive)"
                ],
                practiceProblems: [
                    "CP=500, Profit=20%. Find SP. Answer: SP = 500 × 1.20 = 600",
                    "MP=1000, Discount=15%, Profit=10%. Find CP. Hint: SP = 1000 × 0.85 = 850. CP = 850/1.10 = 772.73"
                ]
            },
            {
                title: "4. Dishonest Dealer Problems - The Classic Trick",
                text: "A dealer uses false weights. These problems test your understanding of ratio.",
                examples: [
                    "Dealer claims to sell at CP but uses false weight. Profit% = [(True Weight - False Weight)/False Weight]×100",
                    "Example: Using 900g for 1kg weight while selling at CP. Profit% = [(1000-900)/900]×100 = 11.11%",
                    "If giving false weight AND false price: Profit% = [(True W × True P) - (False W × False P)] / (False W × False P) × 100"
                ],
                shortcut: "When using light weights while claiming standard weight: The gain is on quantity. Profit% = [(Standard-False)/False]×100"
            },
            {
                title: "5. Simple Interest & Compound Interest",
                text: "The formulas for money growth.",
                examples: [
                    "SI = (P × R × T)/100. Amount = P + SI",
                    "CI = P(1 + R/100)^T - P",
                    "For 2 years: CI - SI = P(R/100)^2",
                    "For 3 years: CI - SI = P(R/100)^2 × (3 + R/100)",
                    "When interest is compounded quarterly: CI = P(1 + R/400)^(4T) - P",
                    "When compounded half-yearly: CI = P(1 + R/200)^(2T) - P"
                ],
                shortcut: "Effective rate for 2 years at R% = R + R + R²/100. If R=10%, effective = 10+10+1=21%"
            }
        ]
    },

    // CATEGORY: ARITHMETIC - TIME, WORK, SPEED
    math_time_work: {
        category: "Math: Arithmetic",
        title: "Time, Work, Speed & Distance: Mastery Guide",
        subtitle: "LCM Method, Efficiency, Relative Speed",
        blocks: [
            {
                title: "1. Time & Work - The LCM Method (Never Use Fractions!)",
                text: "The FASTEST way to solve work problems is using LCM.",
                examples: [
                    "If A completes work in 10 days, B in 15 days. LCM(10,15) = 30 units (total work)",
                    "A's efficiency = 30/10 = 3 units/day. B's efficiency = 30/15 = 2 units/day",
                    "Working together: (3+2) = 5 units/day. Time = 30/5 = 6 days",
                    "If A works 2 days alone, then B joins: Work by A = 3×2 = 6 units. Remaining = 24 units. Time for both = 24/5 = 4.8 days"
                ],
                shortcut: "Always use LCM! Never calculate 1/10 + 1/15 = 1/6. Instead: 3+2 = 5 out of 30, so 1/6 of work/day",
                commonMistakes: [
                    "Mistake: Using fractions. Work with whole numbers (LCM)!",
                    "Mistake: Forgetting to subtract already completed work"
                ]
            },
            {
                title: "2. M-D-H Formula for Work with Multiple Parameters",
                text: "When men, days, and hours are variable.",
                examples: [
                    "(M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2",
                    "Example: 10 men working 8 hours/day for 5 days complete 100 units. How long for 15 men working 10 hours/day? (10×5×8)/100 = (15×D×10)/X. If same work X=100: D = (100×10×8)/(100×15×10) = 5.33 days"
                ]
            },
            {
                title: "3. Pipes & Cisterns - Work + Negative Efficiency",
                text: "Same as time & work, but emptying pipes reduce capacity.",
                examples: [
                    "Pipe A fills tank in 10 hrs (efficiency +3). Pipe B empties in 15 hrs (efficiency -2). Total capacity = 30 units",
                    "Net efficiency = 3 - 2 = 1 unit/hr. Time to fill = 30/1 = 30 hours",
                    "If A fills, B empties, and there's a leak: All negative efficiencies are subtracted"
                ],
                shortcut: "If leak empties a full tank in Y hours, and with supply it takes X hours: Leak empties in (X×Y)/(Y-X) hours when alone"
            },
            {
                title: "4. Speed, Distance & Time - Conversions & Averages",
                text: "Fundamental relationship: Distance = Speed × Time",
                examples: [
                    "km/hr to m/s: Multiply by 5/18. m/s to km/hr: Multiply by 18/5",
                    "Average speed = Total Distance / Total Time",
                    "For EQUAL distances at speeds S1 and S2: Average speed = 2S1S2/(S1+S2)",
                    "For EQUAL time periods: Average speed = (S1+S2)/2"
                ],
                shortcut: "Always check units! km/hr vs m/s is a common trap"
            },
            {
                title: "5. Trains, Boats, and Relative Speed",
                text: "When multiple moving bodies are involved.",
                examples: [
                    "Train crossing a pole: Distance = Length of train",
                    "Train crossing a platform: Distance = Length of train + Length of platform",
                    "Two trains approaching each other: Relative speed = S1 + S2",
                    "Two trains in same direction: Relative speed = S1 - S2",
                    "Boat downstream: Effective speed = (Speed of boat) + (Speed of stream)",
                    "Boat upstream: Effective speed = (Speed of boat) - (Speed of stream)"
                ],
                practiceProblems: [
                    "A train of length 150m passes a pole in 10 sec. Find speed. Answer: Speed = 150/10 = 15 m/s = 15 × 18/5 = 54 km/hr",
                    "Two trains 200m each, speeds 40 km/hr and 60 km/hr, moving towards each other. Time to cross each other? Relative speed = 100 km/hr = 250/9 m/s. Total distance = 400m. Time = 400/(250/9) = 14.4 sec"
                ]
            }
        ]
    },

    // CATEGORY: ALGEBRA
    math_algebra: {
        category: "Math: Algebra",
        title: "Algebraic Identities & Manipulations: Comprehensive Guide",
        subtitle: "The Big 3 Identities, Reciprocals, Value Putting",
        blocks: [
            {
                title: "1. The Big 3 Identities - ABSOLUTELY CRITICAL",
                text: "These appear in almost EVERY exam. Memorize perfectly.",
                examples: [
                    "(a+b)² = a² + b² + 2ab",
                    "(a-b)² = a² + b² - 2ab",
                    "(a+b)(a-b) = a² - b²",
                    "(a+b+c)² = a² + b² + c² + 2(ab + bc + ca)",
                    "(a+b)³ = a³ + b³ + 3ab(a+b)",
                    "(a-b)³ = a³ - b³ - 3ab(a-b)",
                    "a³ + b³ + c³ - 3abc = (a+b+c)(a² + b² + c² - ab - bc - ca)"
                ],
                shortcut: "If a+b+c = 0, then a³ + b³ + c³ = 3abc. This is FREQUENTLY ASKED!"
            },
            {
                title: "2. Reciprocal Expressions - x + 1/x Pattern",
                text: "The MOST FREQUENT pattern in SSC CGL Tier-I & II.",
                examples: [
                    "If x + 1/x = a, then x² + 1/x² = a² - 2",
                    "If x - 1/x = a, then x² + 1/x² = a² + 2",
                    "If x + 1/x = a, then x³ + 1/x³ = a³ - 3a",
                    "If x - 1/x = a, then x³ - 1/x³ = a³ + 3a",
                    "If x + 1/x = a, then x⁴ + 1/x⁴ = (a² - 2)² - 2 = a⁴ - 4a² + 2"
                ],
                shortcut: "SPECIAL CASES: If x + 1/x = 2, then x = 1. If x + 1/x = -2, then x = -1. If x + 1/x = √3, then x^6 = -1",
                practiceProblems: [
                    "If x + 1/x = 5, find x² + 1/x². Answer: 5² - 2 = 23",
                    "If x - 1/x = 2, find x² + 1/x². Answer: 2² + 2 = 6"
                ]
            },
            {
                title: "3. Value Putting Method - For Complex Expressions",
                text: "When you have more variables than equations.",
                examples: [
                    "If a + b + c = 0, put c = 0, b = 1, a = -1 to verify expression",
                    "If ab + bc + ca = 0, try a = 1, b = 1, c = -2",
                    "If a completely symmetric expression: a = b = c = 1 works"
                ],
                shortcut: "Put values that satisfy ALL constraints. Check that denominators are NON-ZERO before substituting."
            }
        ]
    },

    // ADDING MORE TOPICS FOR MASSIVE EXPANSION
    math_coordinate: {
        category: "Math: Coordinate Geometry",
        title: "Coordinate Geometry: Complete Deep Dive",
        subtitle: "Distance, Slope, Equations, Reflections",
        blocks: [
            {
                title: "1. Distance and Section Formulas",
                text: "The foundation of coordinate geometry.",
                examples: [
                    "Distance between (x₁,y₁) and (x₂,y₂) = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Distance from origin = √(x² + y²)",
                    "Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)",
                    "Section formula (m:n): ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))"
                ],
                shortcut: "For distance from origin, no need for formula - it's just Pythagorean theorem!"
            },
            {
                title: "2. Slope and Equation of Line",
                text: "Understanding linear equations.",
                examples: [
                    "Slope m = (y₂-y₁)/(x₂-x₁)",
                    "Slope-intercept form: y = mx + c",
                    "Point-slope form: y - y₁ = m(x - x₁)",
                    "Two-point form: (y - y₁)/(x - x₁) = (y₂ - y₁)/(x₂ - x₁)",
                    "Standard form: Ax + By + C = 0, slope = -A/B",
                    "Parallel lines: m₁ = m₂",
                    "Perpendicular lines: m₁ × m₂ = -1"
                ],
                shortcut: "For Ax + By + C = 0: X-intercept = -C/A, Y-intercept = -C/B"
            },
            {
                title: "3. Reflections - Points and Lines",
                text: "A frequently asked coordinate geometry concept.",
                examples: [
                    "Reflection in X-axis: (x, y) → (x, -y)",
                    "Reflection in Y-axis: (x, y) → (-x, y)",
                    "Reflection in origin: (x, y) → (-x, -y)",
                    "Reflection in line y = x: (x, y) → (y, x)",
                    "Reflection in line y = -x: (x, y) → (-y, -x)",
                    "Reflection in line x = a: (x, y) → (2a - x, y)",
                    "Reflection in line y = b: (x, y) → (x, 2b - y)"
                ],
                shortcut: "Axis of reflection stays the same. Other coordinate changes sign or reflects."
            }
        ]
    },

    math_geometry: {
        category: "Math: Geometry",
        title: "Geometry: Triangles, Circles, Polygons - Complete Reference",
        subtitle: "Centers, Properties, Theorems",
        blocks: [
            {
                title: "1. Four Centers of a Triangle",
                text: "Every triangle has FOUR special centers with unique properties.",
                examples: [
                    "Incenter (I): Intersection of angle bisectors. Center of inscribed circle. Radius r = Area/s (s = semi-perimeter). Angle BIC = 90° + A/2",
                    "Circumcenter (O): Intersection of perpendicular bisectors. Center of circumscribed circle. Radius R = abc/(4×Area). Angle BOC = 2A",
                    "Centroid (G): Intersection of medians. Divides each median in 2:1 ratio. Divides triangle into 6 equal areas",
                    "Orthocenter (H): Intersection of altitudes. In obtuse triangle, lies outside. In right triangle, at the right angle vertex"
                ],
                shortcut: "Euler Line: H, G, O are collinear with G dividing HO in 2:1 ratio (HG:GO = 2:1)"
            },
            {
                title: "2. Triangle Inequalities and Properties",
                text: "Rules governing triangle construction and relations.",
                examples: [
                    "Triangle inequality: a + b > c, b + c > a, c + a > b",
                    "Reverse triangle inequality: |a - b| < c",
                    "Sine rule: a/sinA = b/sinB = c/sinC = 2R",
                    "Cosine rule: cosA = (b² + c² - a²)/(2bc)",
                    "For acute triangle: a² + b² > c² (all sides)",
                    "For right triangle: a² + b² = c²",
                    "For obtuse triangle: a² + b² < c²"
                ],
                shortcut: "To quickly identify triangle type: Compare a² + b² with c² (where c is longest side)"
            },
            {
                title: "3. Circle Theorems - Chords and Secants",
                text: "Fundamental relationships in circles.",
                examples: [
                    "Perpendicular from center to chord bisects the chord",
                    "Equal chords subtend equal angles at center",
                    "Angle in semicircle = 90°",
                    "Angles in same segment are equal",
                    "Alternate segment theorem: Angle between tangent and chord = angle in alternate segment",
                    "Intersecting chords: If chords AB and CD intersect at P, then PA × PB = PC × PD"
                ],
                shortcut: "Remember: Tangent is perpendicular to radius at point of contact"
            },
            {
                title: "4. Regular Polygons and Their Properties",
                text: "Polygon with n equal sides and equal angles.",
                examples: [
                    "Sum of interior angles = (n - 2) × 180°",
                    "Each interior angle = [(n - 2) × 180°]/n",
                    "Sum of exterior angles = 360° (always!)",
                    "Each exterior angle = 360°/n",
                    "Number of diagonals = n(n - 3)/2",
                    "For regular polygon inscribed in circle of radius R: Side length = 2R × sin(180°/n)"
                ],
                shortcut: "To find 'n' from exterior angle: n = 360°/Exterior Angle"
            }
        ]
    },

    math_mensuration: {
        category: "Math: Mensuration",
        title: "Mensuration 2D & 3D: Complete with Speed Hacks",
        subtitle: "Areas, Volumes, The Rule of 11",
        blocks: [
            {
                title: "1. THE RULE OF 11 - 3-Second Speed Hack!",
                text: "When finding area/volume of circles, cylinders, cones, spheres - the answer has 22 (not π)!",
                examples: [
                    "Since π ≈ 22/7, final answers are multiples of 11 (because 22 is in numerator)",
                    "Circle area π r² = (22/7) r² → numerator has 22, so answer divisible by 11",
                    "Sphere volume (4/3)πr³ → contains 22, so divisible by 11"
                ],
                shortcut: "EXAM HACK: Don't calculate! Check which multiple-choice option is divisible by 11. Usually only one will be!"
            },
            {
                title: "2. 2D Figures - Areas and Perimeters",
                text: "Essential formulas for all 2D shapes.",
                examples: [
                    "Square: Area = a², Perimeter = 4a, Diagonal = a√2",
                    "Rectangle: Area = l×b, Perimeter = 2(l+b), Diagonal = √(l²+b²)",
                    "Triangle: Area = (1/2)×base×height",
                    "Equilateral triangle: Area = (√3/4)a², Perimeter = 3a, Height = (√3/2)a",
                    "Circle: Area = πr², Circumference = 2πr, Sector area = (θ/360)×πr²",
                    "Semicircle: Area = (1/2)πr², Perimeter = πr + 2r"
                ],
                shortcut: "Heron's formula for any triangle: Area = √[s(s-a)(s-b)(s-c)], where s = (a+b+c)/2"
            },
            {
                title: "3. 3D Figures - Volumes and Surface Areas",
                text: "Complete formulas for all 3D shapes.",
                examples: [
                    "Cube: Volume = a³, Surface Area = 6a², Diagonal = a√3",
                    "Cuboid: Volume = lbh, Surface Area = 2(lb + bh + hl)",
                    "Cylinder: Volume = πr²h, Curved SA = 2πrh, Total SA = 2πr(r+h)",
                    "Cone: Volume = (1/3)πr²h, Curved SA = πrl, Total SA = πr(r+l)",
                    "Sphere: Volume = (4/3)πr³, Surface Area = 4πr²",
                    "Hemisphere: Volume = (2/3)πr³, Curved SA = 2πr², Total SA = 3πr²"
                ],
                shortcut: "When a 3D shape is melted and recast: VOLUMES ARE EQUAL! Use this principle for transformation problems."
            }
        ]
    },

    math_trigonometry: {
        category: "Math: Trigonometry",
        title: "Trigonometry & Heights/Distances: Practical Guide",
        subtitle: "Ratios, Identities, Applications",
        blocks: [
            {
                title: "1. Trigonometric Ratios & Special Angles",
                text: "Know the values for 0°, 30°, 45°, 60°, 90° perfectly!",
                examples: [
                    "30°-60°-90° triangle: Sides in ratio 1 : √3 : 2",
                    "45°-45°-90° triangle: Sides in ratio 1 : 1 : √2",
                    "sin² θ + cos² θ = 1",
                    "1 + tan² θ = sec² θ",
                    "1 + cot² θ = cosec² θ"
                ],
                shortcut: "For sin(θ) and cos(θ) values: Create a sequence 0, 1, 2, 3, 4 for angles 0°, 30°, 45°, 60°, 90°. For sine: √(n/4), for cosine: √((4-n)/4)"
            },
            {
                title: "2. Heights and Distances - Practical Applications",
                text: "These problems test your ability to form equations from word descriptions.",
                examples: [
                    "For angle of elevation changing from 30° to 60° while moving distance 'd': Height h = d×√3/2",
                    "Two observers at distance 'd' apart, angles of elevation α and β: Height = d/(cot α - cot β)",
                    "Angle of depression from tower equals angle of elevation from ground to same point"
                ],
                shortcut: "Always draw a diagram! Right-angled triangles are hidden in these problems."
            }
        ]
    },

    math_probability: {
        category: "Math: Probability",
        title: "Probability & Permutations: Comprehensive Deep Dive",
        subtitle: "Combinations, Arrangements, Card/Dice Tricks",
        blocks: [
            {
                title: "1. Permutations vs Combinations - The Key Distinction",
                text: "Order matters for permutations, doesn't for combinations.",
                examples: [
                    "nPr = n!/(n-r)! (arrangement)",
                    "nCr = n!/(r!(n-r)!) (selection)",
                    "nCr = nC(n-r) (symmetry property)",
                    "nC0 = 1, nC1 = n, nCn = 1"
                ],
                shortcut: "For quick calculation: nC2 = n(n-1)/2, nC3 = n(n-1)(n-2)/6"
            },
            {
                title: "2. Probability Fundamentals",
                text: "Basic definitions and rules.",
                examples: [
                    "Probability = Favorable outcomes / Total outcomes",
                    "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
                    "P(A|B) = P(A ∩ B) / P(B) (conditional probability)",
                    "P(A and B) = P(A) × P(B) (if independent)"
                ]
            },
            {
                title: "3. Dice and Cards - Common Scenarios",
                text: "The two most tested probability scenarios.",
                examples: [
                    "Two dice: Total outcomes = 36",
                    "Sum of 7: 6 ways (1-6, 2-5, 3-4, 4-3, 5-2, 6-1)",
                    "Sum of 8: 5 ways. Sum of 6: 5 ways. Sum of 12: 1 way",
                    "Deck of 52 cards: 4 suits, 13 cards each, 12 face cards, 40 number cards",
                    "Probability of drawing specific card = 1/52",
                    "Probability of drawing face card = 12/52 = 3/13"
                ],
                shortcut: "Dice sum goes up to 7, then down: Max frequency at 7, decreasing outward"
            }
        ]
    },

    math_surds_indices: {
        category: "Math: Surds & Indices",
        title: "Surds and Indices: Complete Reference",
        subtitle: "Power Rules, Rationalization, Infinite Series",
        blocks: [
            {
                title: "1. Laws of Indices - Basic Operations on Exponents",
                text: "Fundamental rules for all exponent manipulation.",
                examples: [
                    "a^m × a^n = a^(m+n)",
                    "a^m / a^n = a^(m-n)",
                    "(a^m)^n = a^(mn)",
                    "(ab)^n = a^n × b^n",
                    "(a/b)^n = a^n / b^n",
                    "a^0 = 1 (for any a ≠ 0)",
                    "a^(-n) = 1/a^n"
                ]
            },
            {
                title: "2. Infinite Surd Series - Pattern Recognition",
                text: "These appear frequently in exams.",
                examples: [
                    "If x = √(A + √(A + √(A...))): Solve y² - y - A = 0, take positive root",
                    "If x = √(A × √(A × √(A...))): Answer = A",
                    "Special case √(12 + √(12 + ...)): 12 = 3×4, so answer = 4"
                ],
                shortcut: "SPEED TRICK: Find two consecutive integers whose product is A. Larger integer is answer."
            }
        ]
    },

    math_ratio_proportion: {
        category: "Math: Ratio & Proportion",
        title: "Ratio, Proportion & Partnerships: Massive Deep Dive",
        subtitle: "Comparative Relations, Distributions, Profit Sharing",
        blocks: [
            {
                title: "1. Compound Ratios and Multiple Comparisons",
                text: "When comparing three or more quantities.",
                examples: [
                    "If A:B = 2:3, B:C = 4:5, find A:B:C. LCM(3,4)=12. A:B = 8:12, B:C = 12:15. So A:B:C = 8:12:15",
                    "Continued ratio: (A:B) × (C:D) = (A×C):(B×D)",
                    "Inverse ratio: If A:B = m:n, then 1/A : 1/B = n:m"
                ],
                shortcut: "Always align the common term by finding LCM"
            },
            {
                title: "2. Partnership - Profit Distribution",
                text: "How to divide profits based on capital and time.",
                examples: [
                    "Equal time, different capital: Profit ratio = Capital ratio",
                    "Equal capital, different time: Profit ratio = Time ratio",
                    "Both different: Profit ratio = (Capital₁ × Time₁) : (Capital₂ × Time₂)",
                    "Example: A invested 5000 for 12 months, B invested 6000 for 8 months. Ratio = (5000×12):(6000×8) = 60000:48000 = 5:4"
                ],
                shortcut: "ALWAYS multiply capital with time for each partner"
            }
        ]
    },

    math_mixture_alligation_adv: {
        category: "Math: Mixture & Alligation",
        title: "Mixture & Alligation: Advanced Scenarios",
        subtitle: "Cross Method, Replacements, Concentration Problems",
        blocks: [
            {
                title: "1. Alligation Cross Method - Fast Calculation",
                text: "Visual technique for mixing problems.",
                examples: [
                    "If mixing at ₹40/kg and ₹60/kg to get ₹50/kg. Draw cross: (60-50)=10, (50-40)=10. Ratio = 10:10 = 1:1",
                    "For ₹30/kg and ₹70/kg to get ₹46/kg. (70-46)=24, (46-30)=16. Ratio = 24:16 = 3:2"
                ],
                shortcut: "Always subtract diagonally from the mean"
            },
            {
                title: "2. Milk-Water Replacement Formula",
                text: "When liquid is repeatedly removed and replaced.",
                examples: [
                    "Formula: Final amount = Original × [1 - (removed/total)]^n",
                    "Example: 100L milk, remove 20L and replace with water, repeat 3 times. Final = 100 × (80/100)³ = 51.2L milk"
                ],
                shortcut: "This formula is identical to compound interest depreciation!"
            }
        ]
    },

    math_averages: {
        category: "Math: Arithmetic",
        title: "Averages: Concept & Shortcut Techniques",
        subtitle: "Weighted Average, Consecutive Numbers, Group Changes",
        blocks: [
            {
                title: "1. Basic Formula & Weighted Average",
                text: "Average = Sum of observations / Number of observations.",
                examples: [
                    "Average of first n natural numbers = (n+1)/2",
                    "Average of first n even numbers = n+1",
                    "Average of first n odd numbers = n",
                    "Weighted Average = (n1*A1 + n2*A2) / (n1 + n2)"
                ],
                shortcut: "Deviation Method: Assume an average, calculate deviations of each term, find their average, and add to assumed average."
            },
            {
                title: "2. Group Inclusion/Exclusion Traps",
                text: "When a person joins or leaves a group.",
                examples: [
                    "New person's weight = New Avg + (Number of old members × Change in Avg)",
                    "Example: Avg of 10 students is 40kg. One new student joins and avg becomes 41kg. New student = 41 + (10 * 1) = 51kg."
                ],
                shortcut: "New Value = New Average + (Old Count × Change)"
            }
        ]
    },

    math_problem_ages: {
        category: "Math: Arithmetic",
        title: "Problem of Ages: Ratio & Equation Mastery",
        subtitle: "Past-Present-Future Relations, Ratio Method",
        blocks: [
            {
                title: "1. The Ratio Method (Fastest!)",
                text: "If ratio of A:B is 3:4 and after 5 years it becomes 4:5.",
                examples: [
                    "The difference between A and B stays constant regardless of years.",
                    "If gap in ratios is same (4-3=1, 5-4=1), then 1 unit = 5 years.",
                    "So A = 3*5=15, B = 4*5=20."
                ],
                shortcut: "Always check if the ratio difference between two people is the same across time. If not, multiply to make them equal!"
            },
            {
                title: "2. Algebraic Setup for Ages",
                text: "Let present ages be x and y.",
                examples: [
                    "n years ago: (x-n) and (y-n)",
                    "n years hence: (x+n) and (y+n)",
                    "Common trap: Forgetting to add/subtract 'n' from BOTH people."
                ]
            }
        ]
    },

    math_data_interpretation: {
        category: "Math: Data Interpretation",
        title: "Data Interpretation: Graphs & Tables",
        subtitle: "Pie Charts, Bar Graphs, Line Graphs, Tabulation",
        blocks: [
            {
                title: "1. Pie Chart Calculations",
                text: "Relating degrees to percentages.",
                examples: [
                    "360° = 100%",
                    "1% = 3.6°",
                    "10% = 36°",
                    "To find value: (Angle / 360) * Total Value"
                ],
                shortcut: "Memorize: 18° = 5%, 54° = 15%, 72° = 20%."
            },
            {
                title: "2. Growth Rate & Percentage Change",
                text: "Frequent in Bar and Line graphs.",
                examples: [
                    "% Growth = [(Current - Previous) / Previous] * 100",
                    "Average growth = Total growth / Number of years"
                ],
                shortcut: "Visual estimation: Check slopes in line graphs to find maximum growth instantly without calculation."
            }
        ]
    }
};
