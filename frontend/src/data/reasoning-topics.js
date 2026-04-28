export const REASONING_TOPICS = [
  {
    id: 'analogy',
    name: 'Analogy',
    emoji: '🔗',
    description: 'Find the relationship between a pair and apply the same logic to find the missing term',
    sections: [
      {
        title: 'Types of Analogies',
        content: 'Analogies can be word-based, number-based, or letter-based. The key is to identify the EXACT relationship in the first pair.',
        formulas: [
          'Word Analogy: Find relationship type (tool→user, part→whole, cause→effect, etc.)',
          'Number Analogy: 4:16 means 4² = 16 (apply same operation)',
          'Letter Analogy: AC:FH means A+5=F, C+5=H (position shift rule)'
        ],
        shortcuts: [
          'THE GOLDEN RULE: Decode first pair completely, then test each option',
          'Common relationships: function, part-whole, synonym-antonym, cause-effect, place-object',
          'For numbers: check squares, cubes, multiples, differences'
        ],
        examples: [
          {
            question: 'Odometer : Speed :: Barometer : ?',
            answer: 'Odometer measures speed → Barometer measures PRESSURE (both measuring instruments)'
          },
          {
            question: '6 : 216 :: 5 : ?',
            answer: '6³ = 216 → 5³ = 125 (cube relationship)'
          },
          {
            question: 'ACE : FHJ :: BDF : ?',
            answer: 'Each letter +5 positions → GIK'
          }
        ]
      },
      {
        title: 'Important GK Analogies',
        content: 'Science, geography, and language analogies frequently appear in SSC',
        shortcuts: [
          'Science: Ophthalmology:Eyes :: Cardiology:Heart',
          'Country: India:Rupee :: Japan:Yen',
          'Practice with: Bird:Nest :: Fish:Water',
          'Author:Book :: Sculptor:Statue'
        ]
      }
    ],
    teacherTips: [
      'Create analogies from daily objects for student engagement',
      'Teach relationship categories systematically',
      'Use sports and animals for relatable examples',
      'Always ask "what connects these two?" before looking at options'
    ]
  },

  {
    id: 'classification',
    name: 'Classification — Odd One Out',
    emoji: '🎯',
    description: 'Find the item that does NOT belong to the same group as the others',
    sections: [
      {
        title: 'Types of Classification',
        content: 'Look for category/group membership, mathematical properties, or common associations',
        formulas: [
          'Word-based: category membership (Dog, Cat, Parrot, Tiger → Parrot is bird)',
          'Number-based: mathematical property (4,9,16,25,35 → 35 is not perfect square)',
          'Letter-based: letter pattern (AZ, BY, CX, DE → DE has no mirror pair)',
          'GK-based: common association (Violin, Guitar, Flute, Sitar → Flute is wind instrument)'
        ],
        shortcuts: [
          'Always check ALL properties: category, prime/composite, even/odd, perfect square/cube',
          'Watch for SSC traps: 3 obvious items of one type, but real pattern is different',
          'Check: number of factors, digit sum, palindrome, consecutive digits'
        ],
        examples: [
          {
            question: 'Find odd one: 13, 17, 23, 27, 31',
            answer: '13,17,23,31 are PRIME; 27=3³ NOT prime → 27 is odd one'
          },
          {
            question: 'Find odd one: 8, 27, 64, 100, 125',
            answer: '8=2³, 27=3³, 64=4³, 125=5³ are perfect cubes; 100=10² is only square'
          }
        ]
      },
      {
        title: 'Common Categories to Know',
        content: 'Instruments, Animals, Sports, Medical terms, Countries',
        shortcuts: [
          'String Instruments: Violin, Guitar, Sitar, Veena',
          'Wind Instruments: Flute, Trumpet, Clarinet',
          'Animals: Mammals, Reptiles, Birds (check classifications)',
          'Sports: Bat+Ball, Goal-based, Swimming (categories differ)'
        ]
      }
    ],
    teacherTips: [
      'Teach property-checking systematically',
      'Create quizzes with numerical properties',
      'Use category-based exercises from textbooks',
      'Make students list reasons WHY one is odd'
    ]
  },

  {
    id: 'series',
    name: 'Series — Number, Letter & Mixed',
    emoji: '📈',
    description: 'Identify the pattern and find the missing or wrong term in a sequence',
    sections: [
      {
        title: 'Number Series Patterns',
        content: 'Master the 3-step attack: differences, ratios, then special patterns',
        formulas: [
          'Addition: 3,7,11,15 (+4 each)',
          'Subtraction: 50,45,40,35 (-5 each)',
          'Multiplication: 2,6,18,54 (×3 each)',
          'Fibonacci: 1,1,2,3,5,8,13 (sum of previous two)',
          'n²: 1,4,9,16,25,36',
          'n³: 1,8,27,64,125',
          'Difference AP: 2,5,10,17 (differences: 3,5,7→arithmetic)'
        ],
        shortcuts: [
          'Step 1: Check differences → if constant → AP found',
          'Step 2: If differences are AP → second order pattern',
          'Step 3: Check ratios → if constant → GP found',
          'Step 4: Check if terms are n², n³, n²±1, n³±1'
        ],
        examples: [
          {
            question: '2, 6, 12, 20, 30, ?',
            answer: 'Differences: 4,6,8,10 → +2 each. Next diff=12 → 30+12=42'
          },
          {
            question: '3, 10, 29, 66, 127, ?',
            answer: 'Pattern: n³+2 → 1³+2=3, 2³+2=10, 3³+2=29... → 6³+2=218'
          }
        ]
      },
      {
        title: 'Letter Series',
        content: 'Always convert letters to position numbers first (A=1, Z=26)',
        shortcuts: [
          'B,E,H,K,N → positions 2,5,8,11,14 → +3 each time',
          'Skip pattern: AZ,CX,EV,GT → first +2, second -2 each',
          'Position method: identify start position and gap between letters'
        ]
      }
    ],
    teacherTips: [
      'Teach the 3-step method religiously',
      'Have students write position numbers for letters',
      'Create series worksheets progressing in difficulty',
      'Emphasize: always verify pattern works for ALL terms'
    ]
  },

  {
    id: 'coding',
    name: 'Coding — Decoding',
    emoji: '🔐',
    description: 'Find the rule used to code words, then apply to encode or decode',
    sections: [
      {
        title: 'Letter Substitution Methods',
        content: 'Common coding rules: position shift, mirror alphabet, word reversal, or conditional coding',
        formulas: [
          'Shift +N: Each letter shifted by N positions (BOOK→DQQM is +2)',
          'Mirror: A↔Z, B↔Y, C↔X... (A,Z,Y,N are pairs)',
          'Reverse word: ARMY → YMRA',
          'Consonants only: Shift only consonants, keep vowels',
          'Position based: Each letter replaced by position number (A=1, B=2...)'
        ],
        shortcuts: [
          'Identify the EXACT rule from first example',
          'Mirror alphabet pairs: A=Z, B=Y, C=X, D=W, E=V, F=U, G=T, H=S, I=R, J=Q, K=P, L=O, M=N',
          'Always test rule against given example first'
        ],
        examples: [
          {
            question: 'If BOOK = DQQM, then COOL = ?',
            answer: 'Each letter +2: C→E, O→Q, O→Q, L→N = EQQN'
          },
          {
            question: 'If ARMY = ZYNB, then NAVY = ?',
            answer: 'Mirror rule: A→Z, R→I, M→N, Y→B. So N→M, A→Z, V→E, Y→B = MZEB'
          }
        ]
      },
      {
        title: 'Number & Conditional Coding',
        content: 'Digits coded as symbols, with conditions for odd/even or position-based changes',
        shortcuts: [
          'Number coding: Each digit mapped to a letter (2→M, 3→K...)',
          'Conditions: "If first digit even → use #, if last digit odd → use *"',
          'Sentence coding: Find word codes through elimination'
        ]
      }
    ],
    teacherTips: [
      'Write alphabet with position numbers on board',
      'Show mirror pairs systematically',
      'Use real-world examples: Caesar cipher, postal codes',
      'Make decoding exercises progressive'
    ]
  },

  {
    id: 'blood',
    name: 'Blood Relations',
    emoji: '👨‍👩‍👧‍👦',
    description: 'Solve family tree relationships by drawing diagrams, never mentally',
    sections: [
      {
        title: 'Key Relations',
        content: 'Direct relations (parent, sibling, spouse, child) and in-law relations',
        formulas: [
          'Father\'s father = Paternal Grandfather',
          'Mother\'s father = Maternal Grandfather',
          'Father\'s brother = Paternal Uncle',
          'Mother\'s brother = Maternal Uncle',
          'Uncle\'s/Aunt\'s child = Cousin',
          'Son\'s wife = Daughter-in-law',
          'Sister\'s husband = Brother-in-law'
        ],
        shortcuts: [
          'GOLDEN RULE: Never assume gender unless stated',
          'Family tree symbols: □=Male, ○=Female, marriage line horizontal, child line vertical',
          'Use + for male, × for female when drawing fast'
        ],
        examples: [
          {
            question: 'Pointing to a boy, Ram said "He is the son of my grandfather\'s only son." Who is the boy to Ram?',
            answer: 'My grandfather\'s only son = my father. Father\'s son = me or my brother. Since pointing to someone else → BROTHER'
          },
          {
            question: 'A says "This girl\'s mother is the only daughter of my mother." Who is the girl?',
            answer: 'Only daughter of my mother = my sister. Girl\'s mother = my sister. So girl = my NIECE'
          }
        ]
      },
      {
        title: 'Coded Relations',
        content: 'Use symbols: A+B = A is father of B, A-B = A is mother of B, A×B = A is brother of B, A÷B = A is sister of B',
        shortcuts: [
          'Decode step by step: trace through generations',
          'Build the family tree as you decode',
          'Watch for "only" in statements → restricts to 1 child'
        ]
      }
    ],
    teacherTips: [
      'Insist on drawing diagrams, no mental solving allowed',
      'Use real family examples from class',
      'Create coded relation exercises',
      'Teach "only son/daughter" implications clearly'
    ]
  },

  {
    id: 'direction',
    name: 'Direction & Distance',
    emoji: '🧭',
    description: 'Draw paths on paper using compass directions and calculate final position',
    sections: [
      {
        title: 'The Compass & Directions',
        content: 'North, South, East, West are fixed. Master turns and angles.',
        formulas: [
          'Right turn (90°): N→E, E→S, S→W, W→N (clockwise)',
          'Left turn (90°): N→W, W→S, S→E, E→N (anticlockwise)',
          'Pythagorean distance: If path is L-shaped, distance = √(horizontal² + vertical²)',
          'Shadow rule: Morning (sunrise East) → shadow falls West'
        ],
        shortcuts: [
          'ALWAYS draw the path on paper, never solve mentally',
          'Mark N/S/E/W directions clearly before starting',
          '3-4-5 triangle: most common Pythagorean triplet in SSC',
          'Shadow at noon points North (in Northern hemisphere)'
        ],
        examples: [
          {
            question: 'A walks 3km North, then 4km East. Final distance from start?',
            answer: 'L-shaped path → √(3²+4²) = √25 = 5 km (3-4-5 triplet!)'
          },
          {
            question: 'A faces North. Turns right, walks. Turns right, walks. Final direction?',
            answer: 'N→Right→E, E→Right→S. Facing South'
          }
        ]
      },
      {
        title: 'Shadow & Sun Problems',
        content: 'Sun position changes throughout day, affecting shadow direction',
        shortcuts: [
          'Morning (6AM-12PM): Sun in East → shadow falls West',
          'Afternoon (12PM-6PM): Sun in West → shadow falls East',
          'Noon: Sun roughly South → shadow points North'
        ]
      }
    ],
    teacherTips: [
      'Make direction questions a class exercise with actual directions',
      'Use playground to demonstrate right/left turns',
      'Create maps with fixed landmarks',
      'Use compass apps for real-world context'
    ]
  },

  {
    id: 'ranking',
    name: 'Ranking & Order',
    emoji: '🏆',
    description: 'Position from top, bottom, left, right — use the master formula',
    sections: [
      {
        title: 'The Master Formula',
        content: 'One formula solves ALL ranking problems instantly',
        formulas: [
          'Total = Rank from Top + Rank from Bottom - 1',
          'Rank from Top = Total - Rank from Bottom + 1',
          'Rank from Bottom = Total - Rank from Top + 1'
        ],
        shortcuts: [
          'The -1 is crucial: don\'t forget it!',
          'Works for any linear arrangement: rows, queues, lines',
          'Same formula works for left/right positions'
        ],
        examples: [
          {
            question: 'Ritu is 12th from top and 18th from bottom. Total students?',
            answer: 'Total = 12 + 18 - 1 = 29 students'
          },
          {
            question: 'In a row of 40, Ram is 15th from left. Position from right?',
            answer: 'From right = 40 - 15 + 1 = 26th'
          }
        ]
      },
      {
        title: 'Swapping Problems',
        content: 'When two people swap positions or between people',
        shortcuts: [
          'When A and B swap: A takes B\'s old position, B takes A\'s old position',
          'Between X and Y: Count how many people sit between them'
        ]
      }
    ],
    teacherTips: [
      'Drill the formula repeatedly until muscle memory',
      'Create quick-fire ranking questions',
      'Use classroom seating for examples',
      'Emphasize: subtract 1 from sum'
    ]
  },

  {
    id: 'arrangement',
    name: 'Sitting Arrangement',
    emoji: '🪑',
    description: 'Linear, Circular, and Square arrangements — different rules for each',
    sections: [
      {
        title: 'Linear Arrangement',
        content: 'All face same direction. Use coordinates to track positions.',
        formulas: [
          'If all face North: Left = West, Right = East',
          'Immediate left/right = adjacent seat',
          'Two rows facing each other: X\'s left = Y\'s right (mirror rule)'
        ],
        shortcuts: [
          'THE MOST COMMON TRAP: Left-right reverses when facing each other',
          'Draw the line with people\'s names before solving',
          'Use definite clues first (exact positions), then relative clues'
        ],
        examples: [
          {
            question: 'A,B,C,D,E sit in a row. B is 2nd from left. D is immediate right of B. A is immediate left of B. E not adjacent to D. Where is C?',
            answer: 'B at position 2: A B _ _ _ | D is immediate right: A B D _ _ | E not adjacent to D (position 3) → E at position 5 → C at position 4. Answer: A B D C E'
          }
        ]
      },
      {
        title: 'Circular Arrangement',
        content: 'Facing center or outside changes left/right completely',
        formulas: [
          'Facing CENTRE: Your left = anticlockwise, right = clockwise',
          'Facing OUTSIDE: Your left = clockwise, right = anticlockwise',
          'Key fact: If A is Kth to the left of B, then A is (N-K)th to the right of B'
        ],
        shortcuts: [
          'Always specify: facing center or outside?',
          'In circle of N people, Kth from left = (N-K+1)th from right'
        ]
      }
    ],
    teacherTips: [
      'Use classroom seating to demonstrate arrangement',
      'Draw shapes on board and place names systematically',
      'Teach process: draw → place fixed people → use relative clues → verify',
      'Create multi-scenario practice problems'
    ]
  },

  {
    id: 'syllogism',
    name: 'Syllogism',
    emoji: '🔵',
    description: 'All + Some + No statements — master Venn diagrams for 100% accuracy',
    sections: [
      {
        title: 'The 4 Statement Types',
        content: 'Universal/Particular × Positive/Negative = 4 types',
        formulas: [
          'All A are B (Universal Positive): Every A is inside B',
          'No A is B (Universal Negative): A and B completely separate',
          'Some A are B (Particular Positive): Part of A overlaps with B',
          'Some A are not B (Particular Negative): Part of A is outside B'
        ],
        shortcuts: [
          'All+All = All conclusion valid',
          'All+No = No conclusion valid',
          'Some+All = Some conclusion valid',
          'Some+No = Some not conclusion valid',
          'Some+Some = No conclusion (too vague)',
          'No+Some = Some not (reversed)'
        ]
      },
      {
        title: 'Drawing Venn Diagrams',
        content: 'Draw circles for each statement, check where conclusion fits',
        shortcuts: [
          'Always draw the premises first (two diagrams)',
          'Then check if conclusion is TRUE in ALL possible arrangements',
          'If conclusion not always true → doesn\'t follow'
        ],
        examples: [
          {
            question: 'All cats are animals. Some animals are dogs. Conclusion: Some cats are dogs.',
            answer: 'Cats fully inside Animals. Dogs partially inside Animals. Cats may not overlap with Dogs → Conclusion DOESN\'T FOLLOW'
          }
        ]
      }
    ],
    teacherTips: [
      'Insist on drawing Venn diagrams, no mental logic',
      'Teach conversion rules systematically',
      'Create syllogism worksheets with diagrams',
      'Use real examples: categories (students, athletes, etc.)'
    ]
  },

  {
    id: 'venn',
    name: 'Venn Diagrams',
    emoji: '⭕',
    description: 'Represent relationships between groups, calculate set operations',
    sections: [
      {
        title: 'Venn Diagram Types',
        content: '6 main types: nested, overlapping, separate, complex 3-set arrangements',
        shortcuts: [
          'Completely inside: All X are Y',
          'Partially overlapping: Some X are Y',
          'No overlap: No X is Y',
          'Nested three circles: All X are Y, All Y are Z'
        ]
      },
      {
        title: 'Set Calculations',
        content: 'Use formulas to find overlaps and totals',
        formulas: [
          'n(A∪B) = n(A) + n(B) - n(A∩B)',
          'n(A∪B∪C) = n(A) + n(B) + n(C) - n(A∩B) - n(B∩C) - n(A∩C) + n(A∩B∩C)',
          'Only A = n(A) - n(A∩B) - n(A∩C) + n(A∩B∩C)',
          'Neither = Total - n(A∪B)'
        ],
        examples: [
          {
            question: 'Class of 100: 60 play Cricket, 50 play Football, 30 play both. Neither?',
            answer: 'n(C∪F) = 60+50-30 = 80. Neither = 100-80 = 20'
          }
        ]
      }
    ],
    teacherTips: [
      'Use real class data (students in clubs, sports, etc.)',
      'Create Venn diagram visualization exercises',
      'Teach set notation clearly before formulas',
      'Use color coding for different sets'
    ]
  },

  {
    id: 'mathematical',
    name: 'Mathematical Operations',
    emoji: '🔣',
    description: 'Symbol substitution and coded inequalities — mechanical and tricky',
    sections: [
      {
        title: 'Symbol Substitution',
        content: 'Replace symbols with operations, then solve using BODMAS',
        shortcuts: [
          'Step 1: Write what each symbol means',
          'Step 2: Replace all symbols in the expression',
          'Step 3: Apply BODMAS (Brackets, Orders, Division, Multiplication, Addition, Subtraction)',
          'Step 4: Match with options'
        ],
        examples: [
          {
            question: 'If + means ×, × means ÷, ÷ means -, - means +. Solve: 8 + 4 - 3 × 6 ÷ 2',
            answer: 'Replace: 8×4 + 3÷6 - 2 = 32 + 0.5 - 2 = 30.5'
          }
        ]
      },
      {
        title: 'Coded Inequalities',
        content: 'Common code: A@B means A>B, A#B means A=B, A$B means A<B',
        shortcuts: [
          'Chain rule: If A>B and B>C then A>C (transitive)',
          'If chain breaks: Cannot compare',
          'Avoid trap: A>B and B<C doesn\'t let us compare A and C'
        ]
      }
    ],
    teacherTips: [
      'Create symbol worksheets and drill BODMAS',
      'Use color coding for replaced symbols',
      'Teach chain inequality rules with visual arrows',
      'Common mistake check: verify BODMAS application'
    ]
  },

  {
    id: 'statement',
    name: 'Statement, Assumptions, Conclusions',
    emoji: '💬',
    description: 'Critical thinking — identify logical flow and hidden assumptions',
    sections: [
      {
        title: 'Statement & Conclusions',
        content: 'A conclusion FOLLOWS if it logically stems from the statement without going beyond it',
        shortcuts: [
          'Conclusion FOLLOWS if: directly deduced, within scope, logical necessity',
          'Conclusion DOESN\'T FOLLOW if: uses outside info, too broad/narrow, contradicts',
          'Watch out: similar-sounding conclusions that don\'t actually follow'
        ],
        examples: [
          {
            question: '"Many students who study hard still fail." Conclusion: Hard work guarantees success.',
            answer: 'FALSE. "Still fail" means hard work doesn\'t guarantee. Conclusion DOESN\'T FOLLOW'
          }
        ]
      },
      {
        title: 'Assumptions & Implications',
        content: 'What is taken for granted (implicit) vs what could be stated differently',
        shortcuts: [
          'Implicit assumption: necessary for statement to make sense',
          'NOT implicit: if too broad, requires outside info, or optional'
        ]
      }
    ],
    teacherTips: [
      'Teach students to question every statement',
      'Create exercises distinguishing similar conclusions',
      'Use debate format for critical thinking',
      'Highlight common assumption traps'
    ]
  },

  {
    id: 'nonverbal',
    name: 'Non-Verbal Reasoning',
    emoji: '🔷',
    description: 'Figure series, matrices, counting shapes — systematic visual analysis',
    sections: [
      {
        title: 'Figure Series Patterns',
        content: 'Check 6 properties: number, size, position, shading, shape, orientation',
        shortcuts: [
          'Property 1: Number of elements increasing/decreasing?',
          'Property 2: Size growing/shrinking?',
          'Property 3: Position rotating/shifting?',
          'Property 4: Shading alternating?',
          'Property 5: Shape changing?',
          'Property 6: Orientation/flipping?',
          'Rotation angles: 45°, 90°, 135°, 180° (note direction)'
        ]
      },
      {
        title: 'Figure Matrix',
        content: '3×3 grid where each cell has a figure. Find pattern and missing piece.',
        shortcuts: [
          'Check rows left-to-right',
          'Check columns top-to-bottom',
          'Look for: same shapes in different positions, rotation, element addition, shading rotation'
        ]
      },
      {
        title: 'Counting Figures',
        content: 'Count all triangles, squares, rectangles systematically',
        formulas: [
          'Squares in n×n grid: n² + (n-1)² + ... + 1²',
          'For 3×3: 9 + 4 + 1 = 14 total squares',
          'Triangles: label each region, list all possible combinations'
        ]
      }
    ],
    teacherTips: [
      'Use PowerPoint for animated figure rotations',
      'Create pattern-finding worksheets',
      'Teach systematic checking (not random guessing)',
      'Use puzzle-based activities for engagement'
    ]
  },

  {
    id: 'mirror',
    name: 'Mirror Image, Water Image & Paper Folding',
    emoji: '🪞',
    description: 'Reflection rules are fixed — learn once and never get these wrong',
    sections: [
      {
        title: 'Mirror Image Rules',
        content: 'Vertical mirror: left and right swap. Horizontal mirror (water): up and down swap.',
        formulas: [
          'Mirror (vertical): Left ↔ Right, Up/Down same',
          'Water image (horizontal): Up ↔ Down, Left/Right same',
          'Mirror time: 11:60 - Original time',
          'Letters same in mirror: A, H, I, M, O, T, U, V, W, X, Y',
          'Letters same in water: B, C, D, E, H, I, K, O, X'
        ],
        shortcuts: [
          'Think: mirror shows you upside-down horizontally',
          'b ↔ d in mirror, b ↔ q in water'
        ]
      },
      {
        title: 'Paper Folding',
        content: 'When paper is folded and punched/cut, holes appear symmetrically',
        formulas: [
          'n folds → 2ⁿ holes when unfolded',
          '1 fold → 2 holes | 2 folds → 4 holes | 3 folds → 8 holes'
        ],
        shortcuts: [
          'Identify fold line',
          'For each fold, punch appears REFLECTED across that line',
          'Unfold in REVERSE order to trace path'
        ]
      }
    ],
    teacherTips: [
      'Use actual mirrors and paper folding demonstrations',
      'Create interactive mirror activities',
      'Use folding exercises with origami',
      'Visual demonstrations > verbal explanations'
    ]
  },

  {
    id: 'puzzle',
    name: 'Puzzles & Logical Deduction',
    emoji: '🧩',
    description: 'Complex multi-variable puzzles — always use tabular method',
    sections: [
      {
        title: 'Tabular Method',
        content: 'Works for ALL puzzles. Make a grid, use elimination systematically.',
        shortcuts: [
          'Step 1: Identify all variables (persons, items, positions, ages)',
          'Step 2: Draw table: persons as rows, attributes as columns',
          'Step 3: Mark definite info with ✓, contradictions with ✗',
          'Step 4: Use elimination (if 4 filled, 5th is auto)',
          'Step 5: Verify against ALL conditions'
        ]
      },
      {
        title: 'Puzzle Types',
        content: 'Floor arrangements, profession assignments, age-based, scheduling, comparative',
        shortcuts: [
          'Floor puzzle: Use vertical grid',
          'Profession: Use matrix method',
          'Age-based: Set up equations',
          'Ordering: Build chain from comparisons'
        ]
      }
    ],
    teacherTips: [
      'Start with simple 3×3 puzzles, progress to 5×5',
      'Teach systematic elimination (no random guessing)',
      'Create logic puzzle worksheets graded by difficulty',
      'Use online logic puzzle games as practice'
    ]
  },

  {
    id: 'calendar',
    name: 'Calendar & Clock',
    emoji: '📅',
    description: 'Day finding and angle problems — formulas make it instant',
    sections: [
      {
        title: 'Calendar — Odd Days',
        content: 'Regular year has 1 odd day, leap year has 2 odd days',
        formulas: [
          'Regular year: 365 days = 52 weeks + 1 day',
          'Leap year: 366 days = 52 weeks + 2 days',
          'Leap if: divisible by 4, BUT not by 100 unless also by 400',
          'Odd days table: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat'
        ],
        shortcuts: [
          'Shortcut for months (non-leap): Jan=3, Feb=0, Mar=3, Apr=2, May=3, Jun=2, Jul=3, Aug=3, Sep=2, Oct=3, Nov=2, Dec=3',
          'After N days: Divide by 7, remainder is days ahead'
        ]
      },
      {
        title: 'Clock — Angle Calculations',
        content: 'Minute hand: 6°/min, Hour hand: 0.5°/min',
        formulas: [
          'Minute hand position: M × 6° (from 12 o\'clock)',
          'Hour hand position: H × 30° + M × 0.5°',
          'Angle between = |Hour position - Minute position|',
          'If > 180°, subtract from 360°'
        ],
        examples: [
          {
            question: 'Angle at 3:20?',
            answer: 'Minute = 20×6 = 120°, Hour = 3×30 + 20×0.5 = 100°. Angle = |120-100| = 20°'
          }
        ]
      }
    ],
    teacherTips: [
      'Use real calendars and clocks for reference',
      'Create calendar worksheets with historical dates',
      'Demonstrate clock hand movements with models',
      'Connect calendar knowledge to actual events'
    ]
  },

  {
    id: 'matrix',
    name: 'Matrix Coding',
    emoji: '🔢',
    description: 'Use row-column coordinates to decode letters from a 5×5 matrix',
    sections: [
      {
        title: 'How Matrix Coding Works',
        content: 'Each cell identified by (Row, Column). Code = cell coordinates of the letter.',
        shortcuts: [
          'Letter position coded as (Row, Column) or sometimes just row-col concatenated',
          'Rows/columns numbered 0-4 typically',
          'Multiple codes possible if letter appears multiple times'
        ]
      },
      {
        title: 'Encoding & Decoding',
        content: 'Forward: find letter, give coordinates. Reverse: given coordinates, find letter.',
        shortcuts: [
          'For encoding: locate letter, write its (row, column)',
          'For decoding: given (r, c), find cell at row r column c, read letter',
          'Watch out: row/column numbering from 0 or 1 (read question carefully)'
        ]
      }
    ],
    teacherTips: [
      'Practice with actual matrix grids on board',
      'Create encoding/decoding pairs for practice',
      'Use spreadsheet-like coordinates to teach concept',
      'Progress from 3×3 to 5×5 matrices'
    ]
  }
];
