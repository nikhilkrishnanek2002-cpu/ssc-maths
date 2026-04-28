const reasoningData = {
    // CATEGORY: VERBAL REASONING
    reasoning_series: {
        category: "Reasoning: Verbal",
        title: "Number & Alphabet Series",
        subtitle: "Pattern Recognition Masterclass",
        blocks: [
            {
                title: "1. Number Series Priorities",
                text: "When approaching a number series, check patterns in this priority order to save time:",
                examples: [
                    "Priority 1: Prime Numbers",
                    "Priority 2: Squares and Cubes (n², n³, n²±1, n³±1)",
                    "Priority 3: Multiplication/Division (×n ± 1)",
                    "Priority 4: Step Method (Difference of difference)"
                ],
                shortcut: "If numbers increase VERY rapidly, it's definitely a Multiplication or Cube series. If they increase slowly, it's an Addition/Difference series."
            },
            {
                title: "2. Alphabet Coding (EJOTY)",
                text: "To memorize the position values of English alphabets, remember the word EJOTY.",
                examples: [
                    "E = 5, J = 10, O = 15, T = 20, Y = 25"
                ],
                shortcut: "Reverse position = 27 - (Forward Position). Example: Reverse of A (1) is Z (27-1=26)."
            }
        ]
    },
    reasoning_syllogism: {
        category: "Reasoning: Verbal",
        title: "Syllogism: Venn Diagram Method",
        subtitle: "Visualizing Statements",
        blocks: [
            {
                title: "1. The 4 Basic Statements",
                text: "Always draw the Minimum Overlapping Venn Diagram. Don't assume extra relationships.",
                examples: [
                    "<b>All A are B:</b> Draw circle A completely inside circle B.",
                    "<b>Some A are B:</b> Draw circle A intersecting circle B.",
                    "<b>No A is B:</b> Draw circle A and circle B separated by a line with a cross (×).",
                    "<b>Some A are not B:</b> Draw circle A intersecting B, but shade a part of A and put a cross pointing to B."
                ],
                shortcut: "Possibility Cases: If there is no direct or indirect relation given between two elements, then ALL possibilities between them are TRUE."
            }
        ]
    },
    reasoning_blood: {
        category: "Reasoning: Verbal",
        title: "Blood Relations",
        subtitle: "Family Tree Generation",
        blocks: [
            {
                title: "1. Drawing the Family Tree",
                text: "Use standard symbols to draw a family tree quickly and accurately.",
                examples: [
                    "Male = Square or (+)",
                    "Female = Circle or (-)",
                    "Married Couple = Double line (=)",
                    "Siblings = Single horizontal line (-)",
                    "Generations = Vertical line (|)"
                ],
                shortcut: "In 'Pointing to a photograph' questions, always start solving from the end of the sentence or from the word 'My'."
            }
        ]
    },
    reasoning_direction: {
        category: "Reasoning: Verbal",
        title: "Direction & Distance",
        subtitle: "Pythagoras & Shadow Concepts",
        blocks: [
            {
                title: "1. Direction Rules",
                text: "Remember the basic compass points and Left/Right turns.",
                examples: [
                    "North -> Right Turn = East, Left Turn = West",
                    "South -> Right Turn = West, Left Turn = East"
                ],
                shortcut: "Always draw a tiny crosshair (+). Use Pythagoras Theorem (H² = P² + B²) if they ask for the 'shortest distance'."
            },
            {
                title: "2. Shadow Rules",
                text: "Shadows always form opposite to the source of light.",
                examples: [
                    "Morning (Sun in East): Shadow falls towards WEST.",
                    "Evening (Sun in West): Shadow falls towards EAST.",
                    "At exact 12:00 Noon: NO SHADOW."
                ],
                shortcut: "If a person is facing North in the morning, their shadow falls to their LEFT. If facing South, shadow falls to their RIGHT."
            }
        ]
    },
    // CATEGORY: NON-VERBAL REASONING
    reasoning_nonverbal: {
        category: "Reasoning: Non-Verbal",
        title: "Visual & Figural Reasoning",
        subtitle: "Paper Folding, Mirror Images",
        blocks: [
            {
                title: "1. Mirror and Water Images",
                text: "Visualize how objects flip based on the mirror's placement.",
                examples: [
                    "Mirror Image (Vertical Mirror): Left becomes Right, Right becomes Left. Top and Bottom remain the same.",
                    "Water Image (Horizontal Mirror): Top becomes Bottom, Bottom becomes Top. Left and Right remain the same."
                ],
                shortcut: "In an exam, you can literally turn your rough paper upside down or hold it against the light to see water/mirror images instantly without thinking!"
            },
            {
                title: "2. Counting Figures (Triangles)",
                text: "Don't count manually. Use standard tricks.",
                examples: [
                    "A triangle divided by 'n' vertical lines from the top vertex: Number of triangles = n(n+1)/2",
                    "A square with both diagonals drawn: 8 triangles.",
                    "A square with a cross and a plus drawn (8 parts): 8 * 2 = 16 triangles."
                ],
                shortcut: "Symmetric Triangle Rule: If a large triangle has smaller identical triangles inside, count the number of base segments (n). Total = [n(n+2)(2n+1)]/8 (if n is even). Ignore remainder if odd."
            }
        ]
    },
    // CATEGORY: ADDITIONAL NON-VERBAL
    reasoning_embedded: {
        category: "Reasoning: Non-Verbal",
        title: "Embedded Figures",
        subtitle: "Finding the hidden shape",
        blocks: [
            {
                title: "1. The Rotation Rule",
                text: "Sometimes the embedded figure is rotated. Unless the question explicitly says 'rotation is not allowed', you should consider rotated versions.",
                examples: [
                    "Focus on the most complex or unique junction of lines in the question figure and search for that exact junction in the options."
                ],
                shortcut: "Always check options with the SAME scale first. Then check rotated versions. Eliminate options that lack the specific unique line junction."
            },
            {
                title: "2. Visual Example: Embedded Triangle",
                text: "Look for the basic shape hidden inside complex lines.",
                examples: [
                    `<svg width="200" height="150" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
                        <!-- Complex Figure -->
                        <rect x="10" y="10" width="100" height="100" fill="none" stroke="black" stroke-width="2"/>
                        <line x1="10" y1="10" x2="110" y2="110" stroke="black" stroke-width="2"/>
                        <line x1="10" y1="110" x2="110" y2="10" stroke="black" stroke-width="2"/>
                        <line x1="60" y1="10" x2="60" y2="110" stroke="black" stroke-width="2"/>
                        <line x1="10" y1="60" x2="110" y2="60" stroke="black" stroke-width="2"/>
                        <!-- Highlighted Embedded Shape -->
                        <polygon points="60,60 110,60 110,10" fill="rgba(255,0,0,0.3)" stroke="red" stroke-width="3"/>
                        <text x="130" y="60" font-size="12" fill="red">Embedded Shape</text>
                    </svg>`
                ],
                shortcut: "Use the 'Crosshair method': Mentally drop a crosshair on the center of the option figure and align it with the center of the problem figure."
            }
        ]
    },
    // CATEGORY: ADVANCED REASONING
    reasoning_advanced: {
        category: "Reasoning: Advanced",
        title: "Space Visualization & Word Building",
        subtitle: "Spatial Orientation and Lexical Tasks",
        blocks: [
            {
                title: "1. Space Visualization",
                text: "Testing the ability to mentally manipulate 2D and 3D shapes.",
                examples: [
                    "Folding a 2D net into a 3D cube.",
                    "Identifying which pieces can be combined to form a target shape."
                ],
                shortcut: "For cube folding, opposite faces are always separated by exactly one square in a straight line on the net."
            },
            {
                title: "2. Word Building & Analysis",
                text: "Creating words or finding missing letters based on rules.",
                examples: [
                    "Rearranging jumbled letters to form a meaningful English word.",
                    "Finding a word that CANNOT be formed from the letters of a given word."
                ],
                shortcut: "Always check the frequency of letters. If the given word has one 'A', the answer cannot be a word that requires two 'A's."
            }
        ]
    },
    // CATEGORY: ADDITIONAL VERBAL REASONING
    reasoning_analogies: {
        category: "Reasoning: Verbal",
        title: "Analogies & Classification",
        subtitle: "Semantic, Symbolic, and Figural",
        blocks: [
            {
                title: "1. Analogies (A : B :: C : ?)",
                text: "Find the exact relationship between A and B, and apply the same to C.",
                examples: [
                    "Semantic: Doctor : Hospital :: Teacher : School",
                    "Symbolic/Number: 4 : 64 :: 5 : 125 (n : n³)",
                    "Figural: Triangle to Square :: Pentagon to Hexagon (+1 side)"
                ],
                shortcut: "For Number Analogies, the priority rule is: Prime -> Cube -> Square -> Multiply/Divide -> Add/Subtract."
            },
            {
                title: "2. Classification (Odd One Out)",
                text: "Find the one option that does not share the common property of the others.",
                examples: [
                    "Semantic: Apple, Mango, Banana, Potato (Potato is a vegetable/root).",
                    "Number: 121, 144, 169, 200 (200 is not a perfect square)."
                ],
                shortcut: "Always look for the 'rule of similarity' among three options, rather than just why one is different."
            }
        ]
    },
    reasoning_coding: {
        category: "Reasoning: Verbal",
        title: "Coding and Decoding",
        subtitle: "Letter, Number, and Symbol Coding",
        blocks: [
            {
                title: "1. Letter and Number Coding",
                text: "Words are encrypted by shifting alphabet positions or substituting values.",
                examples: [
                    "Forward Shift: CAT (+1) -> DBU",
                    "Reverse Shift: MAT (-1) -> LZS",
                    "Direct Number: A=1, B=2. CAT = 3+1+20 = 24"
                ],
                shortcut: "Write the alphabet with numbers (A-M 1-13 on top, N-Z 14-26 below it) on your rough sheet immediately when the exam starts."
            }
        ]
    },
    reasoning_clerical: {
        category: "Reasoning: Verbal",
        title: "Indexing & Address Matching",
        subtitle: "Clerical Aptitude Tasks",
        blocks: [
            {
                title: "1. Address & Date Matching",
                text: "You will be given a reference address and 4 options. You must find the EXACT match.",
                examples: [
                    "Look for tiny spelling changes (e.g., 'Street' vs 'Stret').",
                    "Check pin codes and dates closely (e.g., '1998' vs '1989')."
                ],
                shortcut: "Scan from right-to-left instead of left-to-right. Your brain catches errors at the end of words faster this way."
            },
            {
                title: "2. Classification of Center Codes",
                text: "Matching roll numbers or center codes according to a specific rule or table.",
                examples: [
                    "Usually requires basic attention to detail. No complex logic, just pure observation."
                ],
                shortcut: "Use the process of elimination. If the first digit of the code is wrong, immediately cross out that option."
            }
        ]
    },
    reasoning_paper: {
        category: "Reasoning: Non-Verbal",
        title: "Punched Hole & Paper Folding",
        subtitle: "Unfolding Patterns",
        blocks: [
            {
                title: "1. Paper Folding and Cutting",
                text: "A transparent paper is folded, cut, and then unfolded.",
                examples: [
                    "Treat every fold as a MIRROR. When you unfold, draw the mirror image of the cut.",
                    "If folded twice (into 1/4th), one cut will produce 4 identical cuts in the final shape."
                ],
                shortcut: "Work backwards. Look at the last fold and the final cut. Find the option that matches that exact quarter perfectly."
            }
        ]
    }
};
