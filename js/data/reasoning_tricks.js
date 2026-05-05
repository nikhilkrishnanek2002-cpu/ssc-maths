// MASSIVE CONTENT EXPANSION FOR REASONING TOPICS

const reasoningData = {
    reasoning_logical_sequence: {
        category: "Reasoning: Logical Reasoning",
        title: "Logical Sequence & Series - Complete Deep Dive",
        subtitle: "Number Series, Alphabetic Series, Mixed Series",
        blocks: [
            {
                title: "1. NUMBER SERIES - Arithmetic Progressions",
                text: "Numbers follow a PATTERN. Find the common difference (d) or ratio (r).",
                examples: [
                    "Arithmetic: 2, 5, 8, 11, 14... (Common Difference = +3) -> Next: 17",
                    "Geometric: 2, 6, 18, 54, 162... (Common Ratio = ×3) -> Next: 486",
                    "Fibonacci-like: 1, 1, 2, 3, 5, 8... (Each term = sum of previous two) -> Next: 13",
                    "Squares: 1, 4, 9, 16, 25... (1², 2², 3², 4², 5²) -> Next: 36",
                    "Cubes: 1, 8, 27, 64, 125... (1³, 2³, 3³, 4³, 5³) -> Next: 216",
                    "Prime Numbers: 2, 3, 5, 7, 11, 13... -> Next: 17"
                ],
                shortcut: "EXAM STRATEGY: Look at differences between consecutive terms. If constant = Arithmetic. If ratio is constant = Geometric.",
                commonMistakes: [
                    "Assuming linear progression when it's quadratic",
                    "Missing factorial patterns (1!, 2!, 3!, 4!, ...)"
                ],
                practiceProblems: [
                    "Find next: 1, 4, 9, 16, 25, __ [ANSWER: 36 (perfect squares)]",
                    "Find next: 2, 3, 5, 8, 12, __ [ANSWER: 17 (differences increase by 1: +1, +2, +3, +4, +5)]"
                ]
            },
            {
                title: "2. MIXED PATTERNS - Complex Series",
                text: "Patterns involving both arithmetic AND geometric elements.",
                examples: [
                    "Multiply then Add: 2, 3, 6, 7, 14, 15... (×2, +1, ×2, +1)",
                    "Alternate Operations: 1, 2, 4, 5, 10, 11... (×2, +1, ×2, +1)",
                    "Position-based: 1, 2, 6, 24, 120... (1!, 2!, 3!, 4!, 5!)",
                    "Two interleaved series: 1, 3, 2, 5, 3, 7... (Odd positions: 1,2,3; Even: 3,5,7)"
                ],
                shortcut: "Check if odd and even positions follow different patterns."
            }
        ]
    },

    reasoning_statement_conclusion: {
        category: "Reasoning: Logic",
        title: "Statement & Conclusion - Complete Strategy",
        subtitle: "Logically Valid Deductions",
        blocks: [
            {
                title: "1. BASIC LOGIC RULES",
                text: "These rules must be MEMORIZED for accuracy.",
                examples: [
                    "Universal Statements: 'All A are B' means EVERY member of A is in B.",
                    "'Some A are B' means AT LEAST ONE member of A is in B.",
                    "'No A are B' means NO member of A is in B.",
                    "Contrapositive: 'All A are B' = 'All NOT B are NOT A'",
                    "Reversal NOT Valid: 'All A are B' does NOT mean 'All B are A'",
                    "Immediate Inference: From 'All A are B', we can conclude 'Some A are B' (weak inference)"
                ],
                shortcut: "EXAM HACK: If conclusion is TOO STRONG or BEYOND the statement, it's INVALID."
            },
            {
                title: "2. VENN DIAGRAM ANALYSIS",
                text: "Visual representation of statements.",
                examples: [
                    "All A are B: Circle A completely inside Circle B",
                    "Some A are B: Circles A and B partially overlap",
                    "No A are B: Circles A and B do NOT overlap",
                    "Conclusion from diagram must be POSSIBLE (not just possible, but always true)"
                ]
            },
            {
                title: "3. COMMON ERRORS IN CONCLUSIONS",
                text: "Mistakes that appear frequently in exams.",
                examples: [
                    "WRONG: 'All A are B' -> 'All B are A' (Reverse)",
                    "WRONG: 'Some A are B' -> 'Some B are A' (Generally True, but not always)",
                    "WRONG: 'No A are B' -> Assuming 'All A are NOT B' (Same meaning, but poorly phrased)",
                    "RIGHT: 'All A are B' and 'All B are C' -> 'All A are C' (Transitivity)"
                ],
                shortcut: "If the conclusion GOES BEYOND the statement, it's INVALID."
            }
        ]
    },

    reasoning_syllogism: {
        category: "Reasoning: Logic",
        title: "Syllogism & Deductive Reasoning - Complete Guide",
        subtitle: "Two Premises to Conclusion",
        blocks: [
            {
                title: "1. BASIC SYLLOGISM STRUCTURE",
                text: "Two premises leading to ONE valid conclusion.",
                examples: [
                    "Premise 1: All humans are mortal",
                    "Premise 2: Socrates is a human",
                    "Conclusion: Therefore, Socrates is mortal (VALID)",
                    "Rule: Middle term must appear in BOTH premises",
                    "Rule: Conclusion terms must appear ONCE in premises (not introducing new terms)"
                ],
                shortcut: "EXAM STRATEGY: Check 3 points: (1) Is middle term in both premises? (2) Are new terms introduced? (3) Does conclusion logically follow?"
            },
            {
                title: "2. IMMEDIATE & MEDIATE INFERENCES",
                text: "Deductions from one or two premises.",
                examples: [
                    "Immediate (One premise): 'All A are B' -> 'Some A are B' is valid (weaker inference)",
                    "Mediate (Two premises): 'All A are B. All B are C' -> 'All A are C' (valid)"
                ]
            }
        ]
    },

    reasoning_blood_relations: {
        category: "Reasoning: Relationships",
        title: "Blood Relations - Complete Mastery",
        subtitle: "Family Puzzles, Generational Links",
        blocks: [
            {
                title: "1. BASIC RELATIONSHIPS",
                text: "Understanding family structure.",
                examples: [
                    "Father's father = Grandfather",
                    "Father's mother = Grandmother",
                    "Father's brother = Uncle",
                    "Mother's sister = Aunt",
                    "Father's sister's son = Cousin",
                    "Sister's son = Nephew",
                    "Sister's daughter = Niece",
                    "Wife's mother = Mother-in-law",
                    "Husband's brother = Brother-in-law"
                ],
                shortcut: "Create a simple family tree on paper for complex puzzles."
            },
            {
                title: "2. SOLVING COMPLEX PUZZLES",
                text: "Multi-step relationship questions.",
                examples: [
                    "If A's father is B's son, what is B to A? Solution: B's son is A's father. So B is A's father's father = A's grandfather. Therefore, B is A's GRANDFATHER.",
                    "If A is the son of B, and C is the wife of A, then what is B to C's son? Son of C and A = B's grandson. So B is the great-grandfather."
                ],
                shortcut: "EXAM TRICK: Start from the given person and trace backwards step-by-step. Draw diagrams!"
            }
        ]
    },

    reasoning_direction_distance: {
        category: "Reasoning: Spatial Reasoning",
        title: "Direction & Distance - Complete Strategy",
        subtitle: "North-South-East-West, Shortest Paths",
        blocks: [
            {
                title: "1. DIRECTION BASICS",
                text: "Understanding compass directions.",
                examples: [
                    "Facing North: Right = East, Left = West, Behind = South",
                    "Facing South: Right = West, Left = East, Behind = North",
                    "Facing East: Right = South, Left = North, Behind = West",
                    "Facing West: Right = North, Left = South, Behind = East",
                    "Diagonal: NE (North-East), SE (South-East), SW (South-West), NW (North-West)"
                ],
                shortcut: "Use the acronym NO·DE·WS (North, East, South, West) in order. Clockwise from North."
            },
            {
                title: "2. DISTANCE CALCULATIONS",
                text: "Finding shortest distance using Pythagoras theorem.",
                examples: [
                    "If someone goes 3 units North and 4 units East: Shortest distance = √(3² + 4²) = √(9 + 16) = 5 units",
                    "If someone goes 5 units North, 3 units East, 2 units West, 4 units South: Net = 5-4=1 North, 3-2=1 East. Distance = √(1²+1²) = √2"
                ],
                shortcut: "Always calculate NET displacement in each direction, then use Pythagoras."
            }
        ]
    },

    reasoning_analogy: {
        category: "Reasoning: Analogical Reasoning",
        title: "Analogy & Similarity - Complete Reference",
        subtitle: "Finding Relationships, Object Properties",
        blocks: [
            {
                title: "1. COMMON ANALOGY TYPES",
                text: "Understanding the relationship pattern.",
                examples: [
                    "Function: Pen : Write :: Knife : Cut",
                    "Cause & Effect: Fire : Smoke :: Noise : Disturbance",
                    "Whole & Part: Book : Pages :: Car : Wheels",
                    "Material & Object: Iron : Rod :: Wood : Table",
                    "Synonym: Happy : Joyful :: Sad : Melancholy",
                    "Antonym: Hot : Cold :: Big : Small",
                    "Category: Rose : Flower :: Tiger : Animal"
                ],
                shortcut: "EXAM STRATEGY: Identify the RELATIONSHIP in the first pair. Apply the SAME relationship to find the answer."
            },
            {
                title: "2. SOLVING ANALOGY QUESTIONS",
                text: "Step-by-step approach.",
                examples: [
                    "Question: Bird : Feather :: Fish : ?",
                    "Relationship: Bird has Feather as covering",
                    "Answer: Fish has Scales (same category of covering)",
                    "NOT correct: Fish : Water (that's habitat, not covering)"
                ]
            }
        ]
    },

    reasoning_classification: {
        category: "Reasoning: Classification",
        title: "Classification & Odd One Out - Complete Guide",
        subtitle: "Finding the Exception",
        blocks: [
            {
                title: "1. CLASSIFICATION BY CATEGORY",
                text: "Things belong to the same group based on shared properties.",
                examples: [
                    "Category-based: Rose, Tulip, Lily, Daisy (All are flowers). Odd one: Car (not a flower)",
                    "Property-based: 2, 4, 6, 8 (All are even). Odd one: 5 (odd number)",
                    "Logic-based: 1, 3, 5, 9 (All are odd). Odd one: 8 (even)"
                ],
                shortcut: "EXAM TRICK: Find what FOUR things have in common. The fifth is the odd one out."
            }
        ]
    },

    reasoning_matrix_reasoning: {
        category: "Reasoning: Spatial",
        title: "Matrix Reasoning - Image Pattern Recognition",
        subtitle: "3x3 and 2x2 Grids",
        blocks: [
            {
                title: "1. PATTERN IDENTIFICATION IN 3x3 GRID",
                text: "Each row and column follows a pattern.",
                examples: [
                    "Row-wise pattern: 1st row all triangles, 2nd row all squares, 3rd row all circles. Missing cell follows the 3rd row pattern.",
                    "Column-wise pattern: Similar analysis column by column",
                    "Diagonal pattern: Sometimes diagonals have a pattern",
                    "Transformation pattern: Each cell transforms the previous (rotation, reflection, color change)"
                ],
                shortcut: "Check ROWS first. If row pattern is unclear, check COLUMNS. Finally, check DIAGONALS."
            }
        ]
    },

    reasoning_seating_ranking: {
        category: "Reasoning: Arrangement",
        title: "Seating Arrangement and Ranking",
        subtitle: "Linear, Circular, and Position-Based Questions",
        blocks: [
            {
                title: "1. Linear Arrangement",
                text: "Place fixed constraints first, then fill relative positions step-by-step.",
                examples: [
                    "If A is second to the left of B, write pair as A B with exact spacing.",
                    "If C is at one end, lock that position first.",
                    "For facing north in a row: left and right are direct.",
                    "For mixed directions, mark arrows above names to avoid side mistakes."
                ],
                shortcut: "Create slots first (1 to n), then place absolute clues before relative clues."
            },
            {
                title: "2. Circular Arrangement",
                text: "In circular seating, fix one person to remove rotational ambiguity.",
                examples: [
                    "If all face center: left is clockwise, right is anti-clockwise.",
                    "If all face outward: left and right reverse.",
                    "Opposite position in 8-person circle is 4 seats away.",
                    "Adjacent means immediate left or immediate right."
                ],
                shortcut: "Always write 'center-facing' or 'outward-facing' at top of rough diagram before solving clues."
            },
            {
                title: "3. Ranking and Ordering",
                text: "Use total count relation: if rank from top and bottom are known, total = top + bottom - 1.",
                examples: [
                    "If A is 7th from top and 12th from bottom, total = 7 + 12 - 1 = 18",
                    "If B is just above C, then B rank is one less than C from top.",
                    "Middle position in odd count n is (n+1)/2"
                ],
                shortcut: "Translate words like 'just before', 'immediately after', 'between' into exact position equations."
            }
        ]
    },

    reasoning_coding_decoding_advanced: {
        category: "Reasoning: Tier 2",
        title: "Coding-Decoding Advanced Patterns",
        subtitle: "Letter shifts, alpha-numeric rules, and matrix-style coding",
        blocks: [
            {
                title: "1. Letter Position and Shift Coding",
                text: "Most coding questions are based on letter position values from A=1 to Z=26.",
                examples: [
                    "If CAT -> DBU, each letter shifted by +1",
                    "If BACK -> YZXP, reverse alphabet mapping is applied",
                    "If code uses +2, -1 alternating pattern, track each position separately"
                ],
                shortcut: "Write alphabet with positions once on rough sheet to reduce repeated counting.",
                practiceProblems: [
                    "If PARK is coded as RCTM, how is HOME coded?",
                    "Using opposite alphabet coding, what is code of SUN?"
                ],
                miniQuiz: [
                    { q: "In reverse alphabet coding, A maps to?", answer: "Z", explanation: "Mirror coding maps first to last." },
                    { q: "If each letter is shifted +1, DOG becomes?", answer: "EPH", explanation: "D->E, O->P, G->H." }
                ]
            },
            {
                title: "2. Word and Number Pattern Coding",
                text: "Some SSC sets encode full words via arithmetic operations on letter sums.",
                examples: [
                    "Sum coding: CODE -> 3+15+4+5 = 27",
                    "Product coding can use first and last letter values",
                    "Repeated letters may be counted once or multiple times depending on rule"
                ],
                shortcut: "First identify whether rule is per-letter transformation or whole-word arithmetic.",
                practiceProblems: [
                    "Find coded value of TEAM if coding is sum of letter positions.",
                    "If BAT=23 and CAT=24 in a pattern, find HAT."
                ],
                miniQuiz: [
                    { q: "Letter value of Z is?", answer: "26", explanation: "Standard alpha numbering." },
                    { q: "If coding uses sum, CAT equals?", answer: "24", explanation: "3+1+20 = 24." }
                ]
            },
            {
                title: "3. Matrix and Symbol Substitution Coding",
                text: "Advanced sets provide symbol maps where one symbol can represent multiple conditions.",
                examples: [
                    "A 3x3 matrix may map letters by row and column indices",
                    "Symbol coding can hide vowels with one symbol and consonants with another",
                    "Position parity (odd/even place) often changes code rule"
                ],
                shortcut: "Decode one known word first, then apply same transformation to target word.",
                practiceProblems: [
                    "In a matrix coding table, decode given pair for target word.",
                    "If odd positions are +2 and even are -1, decode TABLE."
                ],
                miniQuiz: [
                    { q: "In parity coding, odd/even usually refer to?", answer: "Letter position in the word", explanation: "Rule changes by index location." },
                    { q: "Best first step in unknown code set?", answer: "Decode a sample with known mapping", explanation: "Anchor mapping avoids guesswork." }
                ]
            }
        ]
    },

    reasoning_nonverbal_series: {
        category: "Reasoning: Tier 2 Spatial",
        title: "Non-Verbal Figure Series and Mirror Logic",
        subtitle: "Rotation, reflection, counting elements, and embedded shape patterns",
        blocks: [
            {
                title: "1. Rotation and Reflection Patterns",
                text: "Figure-series questions often rotate by fixed angles or mirror around an axis.",
                examples: [
                    "Clockwise rotation by 90 degrees each step",
                    "Alternate reflection around vertical and horizontal axes",
                    "Rotation with symbol inversion (filled to hollow)"
                ],
                shortcut: "Track one unique marker (dot/corner) to detect direction quickly.",
                practiceProblems: [
                    "Identify next figure in a 90-degree rotation series.",
                    "Find figure after alternating mirror reflections."
                ],
                miniQuiz: [
                    { q: "Mirror image across vertical axis swaps which sides?", answer: "Left and right", explanation: "Vertical mirror flips horizontal orientation." },
                    { q: "After four 90-degree rotations, figure returns to?", answer: "Original orientation", explanation: "360-degree total rotation." }
                ]
            },
            {
                title: "2. Element Count and Progressive Addition",
                text: "Many figure series increment lines, dots, or regions in a numeric pattern.",
                examples: [
                    "Dots increase by +1 each step",
                    "Lines increase in odd sequence: +1, +3, +5",
                    "Shaded regions follow alternate fill/unfill logic"
                ],
                shortcut: "Count elements in each frame first; shape complexity can hide simple arithmetic growth.",
                practiceProblems: [
                    "Find next frame where triangles increase in arithmetic sequence.",
                    "Choose missing figure where shaded zones alternate."
                ],
                miniQuiz: [
                    { q: "If dots are 2,4,6,8 then next count?", answer: "10", explanation: "Common difference is +2." },
                    { q: "If shading alternates black/white, next after white?", answer: "Black", explanation: "Alternating binary pattern." }
                ]
            },
            {
                title: "3. Embedded Figure and Completion",
                text: "Candidates must detect hidden base shape among distractors with extra lines.",
                examples: [
                    "Triangle hidden inside intersecting line network",
                    "Square completion by adding one edge",
                    "Missing-part puzzle where orientation is preserved"
                ],
                shortcut: "Ignore decorative lines and trace only closed boundaries of target shape.",
                practiceProblems: [
                    "Find option containing exact embedded pentagon.",
                    "Pick the figure that completes the pattern with least additions."
                ],
                miniQuiz: [
                    { q: "Best method for embedded figure question?", answer: "Trace target boundary first", explanation: "Boundary-tracing avoids distraction by noise lines." },
                    { q: "In completion puzzles, first check?", answer: "Orientation and edge continuity", explanation: "Correct fit preserves existing direction flow." }
                ]
            }
        ]
    },

    reasoning_data_sufficiency: {
        category: "Reasoning: Tier 2 Analytical",
        title: "Data Sufficiency Mastery",
        subtitle: "Statement adequacy, minimal information, and elimination strategy",
        blocks: [
            {
                title: "1. Adequacy Decision Framework",
                text: "Data sufficiency asks whether statements are enough, not the final numerical value.",
                examples: [
                    "Statement I alone sufficient",
                    "Statement II alone sufficient",
                    "Both together sufficient",
                    "Even both together insufficient"
                ],
                shortcut: "Do not solve fully if adequacy can be determined early.",
                practiceProblems: [
                    "Check if two statements are enough to find age difference.",
                    "Determine adequacy for ratio value question."
                ],
                miniQuiz: [
                    { q: "Main target in data sufficiency?", answer: "Sufficiency, not exact answer", explanation: "Question tests adequacy of information." },
                    { q: "If I and II each insufficient but together sufficient, choose?", answer: "Both together sufficient", explanation: "Combined data resolves unknown." }
                ]
            },
            {
                title: "2. Common Traps",
                text: "Candidates lose marks by assuming hidden conditions not present in statements.",
                examples: [
                    "Assuming integer values when not specified",
                    "Assuming positive values for variables by default",
                    "Ignoring possibility of multiple valid outcomes"
                ],
                shortcut: "Test at least two value cases; if both satisfy statement but give different outcomes, statement is insufficient.",
                practiceProblems: [
                    "Is x positive? I: x^2=9 II: x>0",
                    "Can triangle be formed? I: two sides given II: angle relation given"
                ],
                miniQuiz: [
                    { q: "From x^2=16, can x be uniquely determined?", answer: "No", explanation: "x can be 4 or -4." },
                    { q: "Need of multiple case testing in DS?", answer: "To avoid false sufficiency", explanation: "Single-case checking can mislead." }
                ]
            }
        ]
    },

    reasoning_statement_assumption: {
        category: "Reasoning: Critical Logic",
        title: "Statement and Assumption",
        subtitle: "Implicit beliefs, argument support, and logical necessity",
        blocks: [
            {
                title: "1. What is an Assumption",
                text: "An assumption is an unstated premise that must hold true for statement/argument to make sense.",
                examples: [
                    "Statement: Buy this water purifier for pure water",
                    "Assumption: Impure water is harmful",
                    "Assumption: Audience seeks safer water"
                ],
                shortcut: "Use negation test: if negating option destroys argument, it is likely an assumption.",
                practiceProblems: [
                    "Find assumption in advertisement statement.",
                    "Identify implicit belief in policy recommendation."
                ],
                miniQuiz: [
                    { q: "Assumption is usually stated explicitly?", answer: "No", explanation: "It is generally implicit." },
                    { q: "Best test for assumption?", answer: "Negation test", explanation: "Negate candidate and check argument collapse." }
                ]
            },
            {
                title: "2. Weak vs Strong Assumptions",
                text: "Strong assumptions are necessary and directly linked; weak ones are peripheral or optional.",
                examples: [
                    "Strong: directly required for argument validity",
                    "Weak: may be true but not necessary",
                    "Extreme generalizations are usually weak assumptions"
                ],
                shortcut: "Prefer minimal necessary support over broad social or moral claims.",
                practiceProblems: [
                    "Classify given assumptions as strong/weak.",
                    "Choose necessary assumption for given conclusion."
                ],
                miniQuiz: [
                    { q: "Can a true statement still be a weak assumption?", answer: "Yes", explanation: "Truth alone does not ensure necessity." },
                    { q: "Assumption must be what for argument?", answer: "Necessary", explanation: "Without it, argument loses force." }
                ]
            }
        ]
    },

    reasoning_calendar_clock: {
        category: "Reasoning: Calendar and Clock",
        title: "Calendar and Clock Reasoning",
        subtitle: "Odd days, day-date mapping, and angle-based clock logic",
        blocks: [
            {
                title: "1. Calendar and Odd Days",
                text: "Day-date questions are solved by counting odd days across years and months.",
                examples: [
                    "Normal year has 365 days = 1 odd day",
                    "Leap year has 366 days = 2 odd days",
                    "Century leap condition: divisible by 400"
                ],
                shortcut: "Memorize month day counts and leap year rule for quick day shifts.",
                practiceProblems: [
                    "Find day of 1 Jan for a given year from known reference.",
                    "Count odd days between two dates."
                ],
                miniQuiz: [
                    { q: "Leap year among 1900, 2000, 2100?", answer: "2000", explanation: "Century year must be divisible by 400." },
                    { q: "Odd days in 730 days?", answer: "2", explanation: "730 mod 7 = 2." }
                ]
            },
            {
                title: "2. Clock Angle Basics",
                text: "Clock questions involve relative speeds of hour and minute hands.",
                examples: [
                    "Minute hand speed = 6 degrees per minute",
                    "Hour hand speed = 0.5 degree per minute",
                    "Angle formula at h:m = |30h - 5.5m|"
                ],
                shortcut: "For coincidence (overlap), use relative speed 5.5 degrees per minute.",
                practiceProblems: [
                    "Find angle at 3:20",
                    "How many times hands overlap in 12 hours?"
                ],
                miniQuiz: [
                    { q: "At 6:00, angle between hands?", answer: "180 degrees", explanation: "Hands opposite each other." },
                    { q: "Overlaps in 12 hours?", answer: "11", explanation: "Hands coincide every ~65.45 minutes." }
                ]
            }
        ]
    }
};
