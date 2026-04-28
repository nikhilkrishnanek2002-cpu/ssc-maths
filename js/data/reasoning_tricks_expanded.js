// MASSIVE CONTENT EXPANSION FOR REASONING TOPICS

const reasoningDataExpanded = {
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
    }
};
