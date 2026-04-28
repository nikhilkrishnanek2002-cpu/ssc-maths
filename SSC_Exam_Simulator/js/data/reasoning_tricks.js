const reasoningData = {
    // CATEGORY: VERBAL REASONING
    reasoning_series: {
        category: "Reasoning: Verbal",
        title: "Number Series: Deep Dive",
        subtitle: "Advanced Step & Pattern Recognition",
        blocks: [
            {
                title: "1. The Step Method (Universal Trick)",
                text: "If you cannot immediately spot a square/cube/prime pattern, ALWAYS use the Step Method.",
                examples: [
                    "Series: 2, 9, 28, 65, 126",
                    "Step 1 (Find Differences): 7, 19, 37, 61",
                    "Step 2 (Differences of Differences): 12, 18, 24",
                    "Step 3 (Third level): 6, 6 (Constant!)",
                    "Now work upwards: 24+6=30. 61+30=91. 126+91 = 217."
                ],
                shortcut: "The Step Method works for 90% of series that don't involve pure multiplication. Draw it quickly like a pyramid."
            },
            {
                title: "2. The 'Half-Pattern' Decimal Trick",
                text: "Whenever a series drops suddenly and then rises, or has .5 in it.",
                examples: [
                    "Series: 10, 5, 5, 7.5, 15",
                    "Pattern: ×0.5, ×1, ×1.5, ×2",
                    "Next is 15 × 2.5 = 37.5."
                ],
                shortcut: "If you see the second number is EXACTLY HALF of the first, it is a ×0.5 series. Don't waste time on differences."
            },
            {
                title: "3. Alternating Series",
                text: "When numbers go up and down repeatedly.",
                examples: [
                    "Series: 50, 5, 45, 10, 40, 15, ?",
                    "Pattern 1 (Odd positions): 50 -> 45 -> 40 -> (35)",
                    "Pattern 2 (Even positions): 5 -> 10 -> 15"
                ],
                shortcut: "If the series is unusually long (more than 5 or 6 numbers), it is almost always an alternating twin series."
            }
        ]
    },
    reasoning_syllogism: {
        category: "Reasoning: Verbal",
        title: "Syllogism: Possibilities Deep Dive & Speed Hacks",
        subtitle: "The 100-50 Method (No Pen Trick)",
        blocks: [
            {
                title: "1. The 100-50 Method (Solve in 3 seconds)",
                text: "Never draw a Venn diagram for simple Syllogism again. Assign values to words.",
                examples: [
                    "ALL = 100/50 (+)",
                    "NO = 100/100 (-)",
                    "SOME = 50/50 (+)",
                    "SOME NOT = 50/100 (-)"
                ],
                shortcut: "SPEED HACK: If Statements are positive, Conclusions MUST be positive. Income (Statement) must be >= Expense (Conclusion). E.g., if a word has 50 in Statement, it CANNOT have 100 in Conclusion. If you see a violation, instantly eliminate it!"
            },
            {
                title: "2. Venn Diagrams for 'Possibility'",
                text: "Use Venn Diagrams ONLY when the conclusion ends with 'is a possibility'.",
                examples: [
                    "If two circles have NO direct or indirect connection in the statements, then ANY possibility between them is TRUE.",
                    "If 'Some A are B' is given, then 'All A can be B is a possibility' is TRUE."
                ],
                shortcut: "Possibility trick: If you can redraw the Venn diagram to satisfy the conclusion WITHOUT violating any original statements, the possibility is true."
            },
            {
                title: "3. 'Only' and 'Only a few'",
                text: "The newest TCS pattern questions.",
                examples: [
                    "'Only A are B' means exactly the same as 'All B are A' (Draw B inside A). BUT B cannot interact with any other element.",
                    "'Only a few A are B' means TWO things simultaneously: 'Some A are B' AND 'Some A are not B'."
                ],
                shortcut: "For 'Only a few A are B', you can never say 'All A are B is a possibility' (it's false), but you CAN say 'All B are A is a possibility' (it's true)."
            }
        ]
    },
    reasoning_blood: {
        category: "Reasoning: Verbal",
        title: "Blood Relations: Deep Dive",
        subtitle: "Family Tree & Coded Relations",
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
                shortcut: "Never assume the gender of a person based purely on their name (e.g., 'Kiran' could be male or female) unless explicitly stated."
            },
            {
                title: "2. Pointing to a Photograph",
                text: "The trickiest type of blood relation.",
                examples: [
                    "Example: Pointing to a man, a woman said, 'His mother is the only daughter of my mother.'",
                    "Breakdown: 'my mother's only daughter' = the woman herself. So, 'His mother = the woman'. Thus, the woman is his mother."
                ],
                shortcut: "Always start solving backwards from the word 'My'. Find out who 'My' refers to, and work your way to the start of the sentence."
            },
            {
                title: "3. Coded Blood Relations",
                text: "A + B means A is father of B, etc.",
                examples: [
                    "Don't draw the whole tree if you can eliminate options.",
                    "If the question asks 'Which of the following shows P is the aunt of Q?', P MUST be female. Check the symbol immediately after P. If it represents a male relation, eliminate that option instantly!"
                ],
                shortcut: "Check gender first to eliminate 2 options. Then check generation gap (+1 for father, 0 for brother). You don't even need to draw the tree!"
            }
        ]
    },
    reasoning_direction: {
        category: "Reasoning: Verbal",
        title: "Direction & Distance: Deep Dive",
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
        title: "Visual Reasoning: Deep Dive",
        subtitle: "Counting Figures & Mirror Images",
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
                title: "2. Counting Triangles (Advanced)",
                text: "Don't count manually. Use standard formula tricks.",
                examples: [
                    "A triangle divided by 'n' vertical lines from the top vertex: Number of triangles = n(n+1)/2",
                    "A square with both diagonals drawn: 8 triangles. Two such squares joined: 8+8+2(common vertices) = 18 triangles.",
                    "A square with a cross and a plus drawn (8 parts): 8 * 2 = 16 triangles."
                ],
                shortcut: "Symmetric Triangle Rule: If a large triangle has smaller identical triangles inside, count the number of base segments (n). Total = [n(n+2)(2n+1)]/8 (if n is even). Ignore remainder if odd."
            },
            {
                title: "3. Counting Squares and Rectangles",
                text: "Grids of squares.",
                examples: [
                    "For a symmetric grid (n × n): Total squares = 1² + 2² + 3² ... + n².",
                    "For an asymmetric grid (m × n): Total squares = (m×n) + ((m-1)×(n-1)) ... until one becomes 1.",
                    "Total Rectangles in any grid (m × n): (Sum of row numbers) × (Sum of column numbers)."
                ],
                shortcut: "Every square is a rectangle, but not every rectangle is a square. If a question asks for 'rectangles', you MUST include the squares in your count unless it says 'rectangles only'."
            }
        ]
    },
    // CATEGORY: ADDITIONAL NON-VERBAL
    reasoning_embedded: {
        category: "Reasoning: Non-Verbal",
        title: "Embedded Figures: Deep Dive",
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
        title: "Space Visualization & Word Building: Deep Dive",
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
        title: "Analogies & Classification: Deep Dive",
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
        title: "Coding and Decoding: Deep Dive",
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
        title: "Indexing & Address Matching: Deep Dive",
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
        title: "Punched Hole & Paper Folding: Deep Dive",
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
    },
    // MASSIVE EXPANSION: ADVANCED LOGICAL & ANALYTICAL REASONING
    reasoning_clocks: {
        category: "Reasoning: Logical",
        title: "Clocks and Time: Massive Deep Dive",
        subtitle: "Angle Formulas and Mirror Time",
        blocks: [
            {
                title: "1. The Angle Formula",
                text: "To find the angle between the hour and minute hand at any given time H:M.",
                examples: [
                    "Angle = |30H - 11M/2|"
                ],
                shortcut: "SPEED HACK: If the ratio of minutes to hours is exactly 1:5 (e.g., 4:20, 5:25, 8:40), the angle is exactly HALF the minutes! (Angle for 4:20 is 20/2 = 10 degrees)."
            },
            {
                title: "2. Mirror and Water Images of Clocks",
                text: "Finding what time a clock shows when reflected.",
                examples: [
                    "Mirror Image: Subtract the given time from 11:60 (or 23:60).",
                    "Water Image: Subtract the given time from 18:30 (or 17:90 if minutes > 30)."
                ],
                shortcut: "If the given time is 8:20, mirror image is 11:60 - 8:20 = 3:40."
            }
        ]
    },
    reasoning_calendars: {
        category: "Reasoning: Logical",
        title: "Calendars: Massive Deep Dive",
        subtitle: "Odd Days and Leap Years",
        blocks: [
            {
                title: "1. Odd Days Concept",
                text: "An odd day is the remainder when the total number of days is divided by 7.",
                examples: [
                    "Ordinary Year (365 days): 52 weeks + 1 odd day.",
                    "Leap Year (366 days): 52 weeks + 2 odd days.",
                    "100 Years: 5 odd days. 200 Years: 3 odd days. 300 Years: 1 odd day. 400 Years: 0 odd days."
                ],
                shortcut: "A century year is a leap year ONLY if it is divisible by 400 (e.g., 2000 is leap, 1900 is NOT)."
            },
            {
                title: "2. Finding the Day of the Week",
                text: "To find the day on a specific date.",
                examples: [
                    "Sum = Date + Month Code + Year + Leap Years in that Century + Century Code.",
                    "Divide Sum by 7. The remainder gives the day (0=Sunday, 1=Monday...)."
                ],
                shortcut: "If a date falls on Monday this year, it will fall on Tuesday next year (if ordinary year) or Wednesday (if leap year)."
            }
        ]
    },
    reasoning_dice: {
        category: "Reasoning: Non-Verbal",
        title: "Dice and Cubes: Massive Deep Dive",
        subtitle: "Unfolding and Hidden Faces",
        blocks: [
            {
                title: "1. Standard vs General Dice",
                text: "Standard dice always follow a strict rule for opposite faces.",
                examples: [
                    "Standard Dice: Sum of opposite faces is ALWAYS 7 (1 opposite 6, 2 opposite 5, 3 opposite 4).",
                    "General Dice: No strict rule. Any face can be opposite any other face."
                ],
                shortcut: "SPEED HACK: If you see two visible adjacent faces summing to 7 (e.g., 3 and 4 are visible together), it CANNOT be a Standard Dice. It's a General Dice."
            },
            {
                title: "2. The Common Number Rule",
                text: "When two different positions of the SAME dice are shown.",
                examples: [
                    "Rule of 1: If exactly ONE number is common in both positions, write the numbers starting from the common number in clockwise direction. The numbers that align vertically are opposites.",
                    "Rule of 2: If exactly TWO numbers are common, the third unseen numbers on both dice are opposites."
                ],
                shortcut: "If a number is present on multiple dice views, its opposite is the number that is NEVER seen adjacent to it in any view."
            }
        ]
    },
    reasoning_seating: {
        category: "Reasoning: Analytical",
        title: "Seating Arrangement: Massive Deep Dive",
        subtitle: "Circular and Linear Layouts",
        blocks: [
            {
                title: "1. Circular Arrangement",
                text: "People sitting around a circular table facing the center or outside.",
                examples: [
                    "Facing Center: Left = Clockwise, Right = Anti-clockwise.",
                    "Facing Outside: Left = Anti-clockwise, Right = Clockwise."
                ],
                shortcut: "Always start drawing with the most definite statement (e.g., 'A sits exactly opposite to B' or 'C sits 2nd to the right of D'). Never start with a negative statement ('A is not next to B')."
            },
            {
                title: "2. The 'And/Who' Conjunction Rule",
                text: "Crucial grammar for puzzles.",
                examples: [
                    "A is to the right of B AND sits opposite C -> 'And' refers to the FIRST person (A).",
                    "A is to the right of B WHO sits opposite C -> 'Who' refers to the SECOND person (B)."
                ],
                shortcut: "'And/But' points to the far subject. 'Who/Whom/Which' points to the immediate subject. Messing this up ruins the entire puzzle!"
            }
        ]
    },
    reasoning_statement: {
        category: "Reasoning: Critical",
        title: "Statement & Assumptions: Massive Deep Dive",
        subtitle: "Implicit vs Explicit Logic",
        blocks: [
            {
                title: "1. Assumptions Rules",
                text: "An assumption is something the author SUPPOSES is true before making the statement.",
                examples: [
                    "Statement: 'Please switch off phones during the meeting.'",
                    "Assumption 1: People have phones (Implicit).",
                    "Assumption 2: People can read/hear the instruction (Implicit)."
                ],
                shortcut: "Eliminate any assumption that contains extreme words like 'All', 'Always', 'Never', 'None', or 'Only'. They are almost always invalid."
            },
            {
                title: "2. Statement and Course of Action",
                text: "Choosing the correct reaction to a problem.",
                examples: [
                    "Statement: A severe drought has hit the state.",
                    "Action 1: Government should provide immediate relief (Valid).",
                    "Action 2: Government should permanently ban farming (Invalid - too extreme)."
                ],
                shortcut: "A valid course of action must be PRACTICAL, LOGICAL, and directly SOLVE the problem without creating a bigger problem."
            }
        ]
    }
};
