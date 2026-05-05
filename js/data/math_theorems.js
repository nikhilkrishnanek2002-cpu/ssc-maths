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
    },

    math_probability_basics: {
        category: "Math: Arithmetic",
        title: "Probability Basics for SSC",
        subtitle: "Events, Dice, Cards, Coins, and Selection Logic",
        blocks: [
            {
                title: "1. Core Formula and Event Types",
                text: "Probability of an event E is P(E) = Favorable outcomes / Total outcomes.",
                examples: [
                    "Range: 0 <= P(E) <= 1",
                    "Sure event: P(E)=1, impossible event: P(E)=0",
                    "Complement rule: P(not E) = 1 - P(E)",
                    "Example: Probability of getting an even number on a fair die = 3/6 = 1/2"
                ],
                shortcut: "If a question asks 'at least one', often solve 'none' first and subtract from 1."
            },
            {
                title: "2. Dice, Coins, and Cards",
                text: "Most SSC probability questions are direct counting with simple sample spaces.",
                examples: [
                    "Two coins sample space: {HH, HT, TH, TT} => total 4 outcomes",
                    "P(exactly one head in two coins) = 2/4 = 1/2",
                    "Two dice total outcomes = 36",
                    "P(sum is 7 with two dice) = 6/36 = 1/6",
                    "Cards: deck has 52 cards, 4 suits, 13 cards each suit"
                ],
                shortcut: "For cards, first classify by suit/rank, then count carefully before dividing by 52 (or 51, 50 in successive draws)."
            },
            {
                title: "3. Conditional and Without Replacement",
                text: "When one item is removed, total outcomes reduce for the next draw.",
                examples: [
                    "Bag has 5 red, 3 blue. P(first red then blue without replacement) = (5/8)*(3/7) = 15/56",
                    "If replacement is allowed, denominator stays same in next step",
                    "P(A and B for independent events) = P(A)*P(B)",
                    "P(A or B for mutually exclusive events) = P(A)+P(B)"
                ],
                shortcut: "Write each stage as a fraction line-by-line; avoid mental shortcuts in without-replacement questions."
            }
        ]
    },

    math_algebra_quadratic: {
        category: "Math: Algebra (Tier 2)",
        title: "Quadratic Equations and Algebraic Identities",
        subtitle: "Roots, factorization, discriminant, and expression simplification",
        blocks: [
            {
                title: "1. Standard Form and Nature of Roots",
                text: "A quadratic equation is ax^2 + bx + c = 0 where a != 0.",
                examples: [
                    "Discriminant D = b^2 - 4ac",
                    "If D > 0, roots are real and distinct",
                    "If D = 0, roots are real and equal",
                    "If D < 0, roots are complex"
                ],
                shortcut: "Before solving fully, check discriminant to identify the root type quickly.",
                practiceProblems: [
                    "Find nature of roots: x^2 - 6x + 9 = 0",
                    "For 2x^2 + x - 3 = 0, find D and classify roots"
                ],
                miniQuiz: [
                    { q: "For x^2 - 4x + 4 = 0, what is D?", answer: "0", explanation: "b^2 - 4ac = 16 - 16 = 0" },
                    { q: "If D is negative, are roots real?", answer: "No", explanation: "Negative D gives non-real complex roots." }
                ]
            },
            {
                title: "2. Sum and Product of Roots",
                text: "For ax^2 + bx + c = 0, sum of roots = -b/a and product = c/a.",
                examples: [
                    "Equation x^2 - 7x + 12 = 0 has sum = 7 and product = 12",
                    "If roots are alpha and beta, equation is x^2 - (alpha+beta)x + alpha*beta = 0",
                    "If one root is known, second root = sum - first"
                ],
                shortcut: "Use sum-product to build equations from root conditions without solving by formula.",
                practiceProblems: [
                    "Find equation whose roots are 3 and 5",
                    "If sum of roots is 8 and product is 15, write the quadratic"
                ],
                miniQuiz: [
                    { q: "If roots are 2 and 9, what is coefficient of x in monic equation?", answer: "-11", explanation: "x^2 - (2+9)x + 18 = x^2 - 11x + 18" },
                    { q: "For x^2 + 5x + 6 = 0, product of roots is?", answer: "6", explanation: "For monic equation, product = constant term." }
                ]
            },
            {
                title: "3. High-Frequency Algebraic Identities",
                text: "Identity-based expansion and reduction saves time in simplification questions.",
                examples: [
                    "(a+b)^2 = a^2 + 2ab + b^2",
                    "(a-b)^2 = a^2 - 2ab + b^2",
                    "a^2 - b^2 = (a-b)(a+b)",
                    "(a+b+c)^2 = a^2+b^2+c^2+2(ab+bc+ca)"
                ],
                shortcut: "When expression matches an identity pattern, avoid full multiplication.",
                practiceProblems: [
                    "Simplify: 99^2 using identity",
                    "Find value of a^2+b^2 if a+b=10 and ab=21"
                ],
                miniQuiz: [
                    { q: "99^2 equals?", answer: "9801", explanation: "(100-1)^2 = 10000 - 200 + 1" },
                    { q: "If a+b=8 and ab=12, then a^2+b^2=?", answer: "40", explanation: "a^2+b^2 = (a+b)^2 - 2ab = 64 - 24" }
                ]
            }
        ]
    },

    math_geometry_mensuration: {
        category: "Math: Geometry (Tier 2)",
        title: "Geometry and Mensuration Essentials",
        subtitle: "Triangles, circles, area-volume formulas, and exam shortcuts",
        blocks: [
            {
                title: "1. Triangle Properties and Rules",
                text: "Triangle angle sum is 180 degrees and exterior angle equals sum of opposite interior angles.",
                examples: [
                    "Pythagoras theorem: in right triangle, h^2 = p^2 + b^2",
                    "Area of triangle = 1/2 * base * height",
                    "Equilateral triangle area = (sqrt(3)/4)*a^2"
                ],
                shortcut: "If sides are in 3:4:5 ratio, triangle is right-angled.",
                practiceProblems: [
                    "Find hypotenuse when other sides are 9 and 12",
                    "Find area of equilateral triangle with side 8"
                ],
                miniQuiz: [
                    { q: "A triangle has angles 40 and 65. Third angle?", answer: "75 degrees", explanation: "Sum of interior angles is 180." },
                    { q: "In a 3-4-5 triangle, longest side corresponds to?", answer: "Hypotenuse", explanation: "Largest side in right triangle is hypotenuse." }
                ]
            },
            {
                title: "2. Circle and Sector Basics",
                text: "Circumference and area formulas are frequently used in SSC mensuration questions.",
                examples: [
                    "Circumference = 2*pi*r",
                    "Area of circle = pi*r^2",
                    "Area of sector = (theta/360)*pi*r^2",
                    "Arc length = (theta/360)*2*pi*r"
                ],
                shortcut: "For comparative questions, keep pi common and compare radius terms first.",
                practiceProblems: [
                    "Find circumference of circle of radius 7",
                    "Find area of 90-degree sector for radius 14"
                ],
                miniQuiz: [
                    { q: "If radius doubles, area becomes how many times?", answer: "4 times", explanation: "Area proportional to r^2." },
                    { q: "Which formula gives arc length?", answer: "(theta/360)*2*pi*r", explanation: "Arc is proportional part of full circumference." }
                ]
            },
            {
                title: "3. Surface Area and Volume",
                text: "Cube, cuboid, cylinder, cone, and sphere formulas are high-frequency in Tier 2.",
                examples: [
                    "Cube: TSA = 6a^2, Volume = a^3",
                    "Cuboid: TSA = 2(lb+bh+hl), Volume = l*b*h",
                    "Cylinder: CSA = 2*pi*r*h, Volume = pi*r^2*h",
                    "Sphere: Surface area = 4*pi*r^2, Volume = (4/3)*pi*r^3"
                ],
                shortcut: "Convert all dimensions to same unit before applying formulas.",
                practiceProblems: [
                    "Find volume of cylinder with r=3 and h=10",
                    "A cube has side 5. Find its TSA and volume"
                ],
                miniQuiz: [
                    { q: "Volume of cube with side 4?", answer: "64", explanation: "a^3 = 4^3" },
                    { q: "Sphere surface area formula?", answer: "4*pi*r^2", explanation: "Standard mensuration identity." }
                ]
            }
        ]
    },

    math_trigonometry_basics: {
        category: "Math: Trigonometry (Tier 2)",
        title: "Trigonometry Fast Revision",
        subtitle: "Standard values, identities, and height-distance shortcuts",
        blocks: [
            {
                title: "1. Standard Ratios and Identities",
                text: "Memorizing standard trig values removes most calculation burden in exam questions.",
                examples: [
                    "sin 0=0, sin 30=1/2, sin 45=1/sqrt(2), sin 60=sqrt(3)/2, sin 90=1",
                    "cos 0=1, cos 30=sqrt(3)/2, cos 45=1/sqrt(2), cos 60=1/2, cos 90=0",
                    "tan theta = sin theta / cos theta",
                    "sin^2 theta + cos^2 theta = 1"
                ],
                shortcut: "Use complementary rule: sin(90-theta)=cos(theta) and cos(90-theta)=sin(theta).",
                practiceProblems: [
                    "Find value of tan 45 + sin 30",
                    "Evaluate sin^2 60 + cos^2 60"
                ],
                miniQuiz: [
                    { q: "tan 45 equals?", answer: "1", explanation: "Standard trigonometric value." },
                    { q: "sin^2 theta + cos^2 theta equals?", answer: "1", explanation: "Core identity." }
                ]
            },
            {
                title: "2. Heights and Distances",
                text: "Questions usually involve right triangles with angle of elevation/depression.",
                examples: [
                    "If angle is 45 degree, height = horizontal distance",
                    "If angle is 30 degree, height = distance/sqrt(3)",
                    "If angle is 60 degree, height = sqrt(3)*distance"
                ],
                shortcut: "Convert word problem to right triangle first, then apply tan theta = opposite/adjacent.",
                practiceProblems: [
                    "A pole casts shadow 10m at 45 degree elevation. Find pole height.",
                    "From a point 20m away, angle of elevation is 30 degree. Find height."
                ],
                miniQuiz: [
                    { q: "At 45 degree, opposite and adjacent are?", answer: "Equal", explanation: "tan 45 = 1." },
                    { q: "Angle of depression is measured from?", answer: "Horizontal line", explanation: "It is downward from observer's horizontal." }
                ]
            }
        ]
    },

    math_coordinate_geometry: {
        category: "Math: Coordinate Geometry (Tier 2)",
        title: "Coordinate Geometry Essentials",
        subtitle: "Distance, section formula, slope, and line basics",
        blocks: [
            {
                title: "1. Distance and Midpoint",
                text: "Coordinate formulas are direct-scoring if recalled correctly.",
                examples: [
                    "Distance between (x1,y1) and (x2,y2) = sqrt((x2-x1)^2 + (y2-y1)^2)",
                    "Midpoint = ((x1+x2)/2, (y1+y2)/2)",
                    "Origin distance from (a,b) = sqrt(a^2+b^2)"
                ],
                shortcut: "For perpendicular axes movement, use Pythagoras on coordinate differences.",
                practiceProblems: [
                    "Distance between (2,3) and (8,11)",
                    "Midpoint of (-4,6) and (10,2)"
                ],
                miniQuiz: [
                    { q: "Distance from origin to (3,4)?", answer: "5", explanation: "sqrt(3^2+4^2)=5." },
                    { q: "Midpoint x-coordinate of 2 and 10?", answer: "6", explanation: "Average of x values." }
                ]
            },
            {
                title: "2. Slope and Equation of Line",
                text: "Slope determines inclination; line equations appear in multiple forms.",
                examples: [
                    "Slope m=(y2-y1)/(x2-x1)",
                    "Point-slope form: y-y1 = m(x-x1)",
                    "Slope-intercept form: y=mx+c",
                    "Parallel lines have equal slopes; perpendicular lines have m1*m2=-1"
                ],
                shortcut: "If line is horizontal, slope=0; if vertical, slope is undefined.",
                practiceProblems: [
                    "Find slope through points (1,2) and (5,10)",
                    "Equation of line with slope 2 through (3,4)"
                ],
                miniQuiz: [
                    { q: "Slope of horizontal line?", answer: "0", explanation: "No change in y." },
                    { q: "Condition for perpendicular slopes?", answer: "Product = -1", explanation: "m1*m2=-1." }
                ]
            }
        ]
    },

    math_permutation_combination: {
        category: "Math: PnC (Tier 2)",
        title: "Permutation and Combination",
        subtitle: "Counting methods, arrangement logic, and selection shortcuts",
        blocks: [
            {
                title: "1. Core Formulas",
                text: "Permutation is arrangement; combination is selection.",
                examples: [
                    "nPr = n!/(n-r)!",
                    "nCr = n!/(r!(n-r)!)",
                    "nCr = nC(n-r)",
                    "Number of arrangements of word with repeated letters = n!/(p!q!... )"
                ],
                shortcut: "If order matters use permutation, else use combination.",
                practiceProblems: [
                    "How many ways to select 3 from 8?",
                    "Arrange 5 different books on a shelf."
                ],
                miniQuiz: [
                    { q: "Formula for 6C2?", answer: "6!/(2!4!)", explanation: "Standard nCr formula." },
                    { q: "Order matters in team selection?", answer: "No", explanation: "Selection uses combinations." }
                ]
            },
            {
                title: "2. Circular and Restricted Arrangements",
                text: "Circular seating and restriction-based arrangements are common advanced questions.",
                examples: [
                    "Circular arrangement of n distinct persons = (n-1)!",
                    "If two people must sit together, treat them as one unit first",
                    "If two people must not sit together, subtract together-cases from total"
                ],
                shortcut: "Break restriction problems into total minus forbidden cases.",
                practiceProblems: [
                    "Number of circular arrangements of 7 persons",
                    "Arrange 6 persons in row if A and B must be together"
                ],
                miniQuiz: [
                    { q: "Circular arrangements of 5 persons?", answer: "24", explanation: "(5-1)! = 4!" },
                    { q: "Method for 'not together' cases?", answer: "Total - together cases", explanation: "Complement counting." }
                ]
            }
        ]
    }
};
