export const REASONING_QUIZ_QUESTIONS = [
  {
    id: 'analogy-quiz',
    name: 'Analogy',
    emoji: '🔗',
    level: 'Easy',
    questions: [
      {
        question: 'Odometer : Speed :: Barometer : ?',
        options: ['Pressure', 'Temperature', 'Humidity', 'Wind'],
        correct: 'Pressure',
        hint: 'Both are measuring instruments. What does each measure?'
      },
      {
        question: 'Pen : Write :: Knife : ?',
        options: ['Eat', 'Cut', 'Sharp', 'Metal'],
        correct: 'Cut',
        hint: 'Tool to its function relationship'
      },
      {
        question: '6 : 216 :: 5 : ?',
        options: ['125', '150', '100', '75'],
        correct: '125',
        hint: '6 × 6 × 6 = 216. Apply the same operation'
      }
    ]
  },

  {
    id: 'classification-quiz',
    name: 'Classification — Odd One Out',
    emoji: '🎯',
    level: 'Medium',
    questions: [
      {
        question: 'Find the odd one: 13, 17, 23, 27, 31',
        options: ['13', '17', '23', '27'],
        correct: '27',
        hint: '27 = 3³. Others are prime numbers. 27 is not prime.'
      },
      {
        question: 'Find odd one: Dog, Cat, Parrot, Tiger',
        options: ['Dog', 'Cat', 'Parrot', 'Tiger'],
        correct: 'Parrot',
        hint: 'Parrot is the only bird. Others are mammals.'
      },
      {
        question: 'Find odd one: 8, 27, 64, 100, 125',
        options: ['8', '100', '27', '64'],
        correct: '100',
        hint: '8=2³, 27=3³, 64=4³, 125=5³ are perfect cubes. 100 is only a square.'
      }
    ]
  },

  {
    id: 'series-quiz',
    name: 'Series — Number & Letter',
    emoji: '📈',
    level: 'Medium',
    questions: [
      {
        question: 'Find the missing number: 2, 6, 12, 20, 30, ?',
        options: ['40', '42', '45', '48'],
        correct: '42',
        hint: 'Differences are 4, 6, 8, 10, 12... Next difference = 12. So 30 + 12 = 42'
      },
      {
        question: 'Find next in series: 1, 4, 9, 16, 25, ?',
        options: ['35', '36', '40', '42'],
        correct: '36',
        hint: 'These are perfect squares: 1², 2², 3², 4², 5², 6²'
      },
      {
        question: 'Find next: 3, 10, 29, 66, 127, ?',
        options: ['216', '218', '220', '222'],
        correct: '218',
        hint: 'Pattern: n³ + 2. Check: 1³+2=3, 2³+2=10, 3³+2=29... 6³+2=218'
      }
    ]
  },

  {
    id: 'coding-quiz',
    name: 'Coding — Decoding',
    emoji: '🔐',
    level: 'Hard',
    questions: [
      {
        question: 'If BOOK = DQQM, then COOL = ?',
        options: ['EQQN', 'DPPM', 'EQQL', 'CPPL'],
        correct: 'EQQN',
        hint: 'Each letter is shifted by +2 positions. B→D, O→Q, O→Q, K→M'
      },
      {
        question: 'If ARMY = ZYNB, then NAVY = ?',
        options: ['MZEB', 'MZFB', 'NZEA', 'LZDA'],
        correct: 'MZEB',
        hint: 'Mirror alphabet rule: A↔Z, R↔I, M↔N, Y↔B'
      },
      {
        question: 'If CAT = 3120, then DOG = ?',
        options: ['41507', '41597', '42508', '41506'],
        correct: '41507',
        hint: 'Position numbers concatenated: C=3, A=1, T=20 → 3120. So D=4, O=15, G=7'
      }
    ]
  },

  {
    id: 'blood-quiz',
    name: 'Blood Relations',
    emoji: '👨‍👩‍👧‍👦',
    level: 'Hard',
    questions: [
      {
        question: 'Pointing to a boy, Ram said "He is the son of my grandfather\'s only son." Who is the boy to Ram?',
        options: ['Father', 'Brother', 'Cousin', 'Uncle'],
        correct: 'Brother',
        hint: 'My grandfather\'s only son = my father. Father\'s son = my brother'
      },
      {
        question: 'A says: "This girl\'s mother is the only daughter of my mother." Who is the girl to A?',
        options: ['Sister', 'Daughter', 'Niece', 'Cousin'],
        correct: 'Niece',
        hint: 'Only daughter of A\'s mother = A\'s sister. So girl is A\'s niece'
      },
      {
        question: 'How is X related to Y if X\'s mother\'s brother is Y\'s father?',
        options: ['Cousin', 'Brother', 'Uncle', 'Nephew'],
        correct: 'Cousin',
        hint: 'X\'s mother\'s brother = X\'s uncle. That uncle is Y\'s father = Y is X\'s cousin'
      }
    ]
  },

  {
    id: 'direction-quiz',
    name: 'Direction & Distance',
    emoji: '🧭',
    level: 'Medium',
    questions: [
      {
        question: 'A walks 3 km North, then 4 km East. How far from start?',
        options: ['5 km', '6 km', '7 km', '8 km'],
        correct: '5 km',
        hint: 'L-shaped path. Distance = √(3² + 4²) = √25 = 5 km'
      },
      {
        question: 'A faces North. Turns right (90°), walks. Turns right (90°), walks. Which direction now facing?',
        options: ['North', 'South', 'East', 'West'],
        correct: 'South',
        hint: 'North → Right turn → East. East → Right turn → South'
      },
      {
        question: 'Shadow falls to the West. What time of day is it? (India)',
        options: ['Morning', 'Noon', 'Afternoon', 'Cannot determine'],
        correct: 'Morning',
        hint: 'Morning: Sun in East → shadow falls West. Afternoon: Sun in West → shadow falls East'
      }
    ]
  },

  {
    id: 'ranking-quiz',
    name: 'Ranking & Order',
    emoji: '🏆',
    level: 'Easy',
    questions: [
      {
        question: 'Ritu is 12th from top and 18th from bottom. Total students?',
        options: ['28', '29', '30', '31'],
        correct: '29',
        hint: 'Total = Top + Bottom - 1 = 12 + 18 - 1 = 29'
      },
      {
        question: 'In a row of 40, Ram is 15th from left. Position from right?',
        options: ['25', '26', '24', '27'],
        correct: '26',
        hint: 'From right = Total - From left + 1 = 40 - 15 + 1 = 26'
      },
      {
        question: 'In a line of 30 people, how many sit between 5th and 10th from left?',
        options: ['3', '4', '5', '6'],
        correct: '4',
        hint: 'Between means: positions 6, 7, 8, 9 = 4 people'
      }
    ]
  },

  {
    id: 'arrangement-quiz',
    name: 'Sitting Arrangement',
    emoji: '🪑',
    level: 'Hard',
    questions: [
      {
        question: 'In circular arrangement of 6 people facing center, B is 2 to right of A. C is 3 to right of B. A is at position 1. Where is C?',
        options: ['Position 6', 'Position 2', 'Position 3', 'Position 4'],
        correct: 'Position 6',
        hint: 'A at 1, B at 1+2=3, C at 3+3=6 (wrap around in circle of 6)'
      },
      {
        question: 'In a linear arrangement, D is to the left of E, F is to the right of E. Order?',
        options: ['D-E-F', 'D-F-E', 'E-D-F', 'Cannot determine'],
        correct: 'D-E-F',
        hint: 'D is left of E, F is right of E. Therefore: D-E-F'
      }
    ]
  },

  {
    id: 'syllogism-quiz',
    name: 'Syllogism',
    emoji: '🔵',
    level: 'Hard',
    questions: [
      {
        question: 'All cats are animals. All animals are mortal. Conclusion: All cats are mortal.',
        options: ['Follows', 'Does not follow', 'Cannot determine', 'Incomplete'],
        correct: 'Follows',
        hint: 'All+All=All. Cats → Animals → Mortal. Valid chain.'
      },
      {
        question: 'All flowers are plants. Some plants are trees. Conclusion: Some flowers are trees.',
        options: ['Follows', 'Does not follow', 'Cannot determine', 'Incomplete'],
        correct: 'Does not follow',
        hint: 'All+Some = Some, but direction matters. Flowers inside Plants. Trees only partially in Plants. No overlap guaranteed.'
      },
      {
        question: 'No dog is a cat. All cats are animals. Conclusion: Some animals are not dogs.',
        options: ['Follows', 'Does not follow', 'Cannot determine', 'Incomplete'],
        correct: 'Follows',
        hint: 'No+All = Some not. Cats are animals, dogs are not cats, so some animals (cats) are not dogs.'
      }
    ]
  },

  {
    id: 'venn-quiz',
    name: 'Venn Diagrams',
    emoji: '⭕',
    level: 'Medium',
    questions: [
      {
        question: 'In a class of 100: 60 play Cricket, 50 play Football, 30 play both. How many play neither?',
        options: ['20', '30', '40', '50'],
        correct: '20',
        hint: 'n(C∪F) = 60+50-30 = 80. Neither = 100-80 = 20'
      },
      {
        question: '70 students: 37 like Maths, 32 like Science, 28 like English, 14 like M&S, 11 like S&E, 10 like M&E, 5 like all three. None?',
        options: ['1', '2', '3', '4'],
        correct: '3',
        hint: 'n(M∪S∪E) = 37+32+28-14-11-10+5 = 67. None = 70-67 = 3'
      }
    ]
  },

  {
    id: 'mathematical-quiz',
    name: 'Mathematical Operations',
    emoji: '🔣',
    level: 'Hard',
    questions: [
      {
        question: 'If + means ×, × means ÷, ÷ means -, - means +. Calculate: 8 + 4 - 3 × 6 ÷ 2',
        options: ['27.5', '30.5', '32.5', '35.5'],
        correct: '30.5',
        hint: 'Replace: 8×4 + 3÷6 - 2 = 32 + 0.5 - 2 = 30.5'
      },
      {
        question: 'P@Q#R$S (@ means >, # means =, $ means <). P>Q=R<S. Conclusion I: P>R. Conclusion II: S>Q.',
        options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
        correct: 'Both follow',
        hint: 'P>Q=R means P>R ✓. S>R=Q means S>Q ✓'
      }
    ]
  },

  {
    id: 'statement-quiz',
    name: 'Statement & Conclusions',
    emoji: '💬',
    level: 'Medium',
    questions: [
      {
        question: '"Many students who study hard still fail." Conclusion I: Hard work guarantees success. II: Other factors besides hard work matter.',
        options: ['I only', 'II only', 'Both', 'Neither'],
        correct: 'II only',
        hint: '"Still fail" means I is wrong. Multiple factors are implied → II follows'
      },
      {
        question: '"All winners are motivated." Can we conclude: "All motivated people are winners"?',
        options: ['Yes', 'No', 'Maybe', 'Cannot determine'],
        correct: 'No',
        hint: 'Winners→Motivated does NOT mean Motivated→Winners. Converse is invalid.'
      }
    ]
  },

  {
    id: 'nonverbal-quiz',
    name: 'Non-Verbal — Figure Series',
    emoji: '🔷',
    level: 'Medium',
    questions: [
      {
        question: 'In a figure series where circles increase by 1 each step, and shading rotates (white→grey→black→white). 1st figure: 1 white circle. Next?',
        options: ['2 grey circles', '2 white circles', '1 grey circle', '1 black circle'],
        correct: '2 grey circles',
        hint: 'Circles: 1→2. Shading: white→grey'
      },
      {
        question: 'A square rotates 90° clockwise each step. After 4 steps, orientation is?',
        options: ['Original', '90° rotated', '180° rotated', 'Cannot determine'],
        correct: 'Original',
        hint: '90° × 4 = 360° = full rotation → back to original'
      }
    ]
  },

  {
    id: 'mirror-quiz',
    name: 'Mirror Image & Water Image',
    emoji: '🪞',
    level: 'Easy',
    questions: [
      {
        question: 'Clock shows 4:30. Mirror image (vertical mirror) shows?',
        options: ['7:30', '3:30', '8:30', '5:30'],
        correct: '7:30',
        hint: 'Mirror time = 11:60 - 4:30 = 7:30'
      },
      {
        question: 'Which letter looks the SAME in a vertical mirror?',
        options: ['b', 'A', 'd', 'p'],
        correct: 'A',
        hint: 'A is symmetric about vertical axis (left-right). Letters b,d,p are not.'
      },
      {
        question: 'Paper folded once vertically, punch on right. Holes when unfolded?',
        options: ['1 hole', '2 holes', '3 holes', '4 holes'],
        correct: '2 holes',
        hint: '1 fold = 2¹ = 2 holes'
      }
    ]
  },

  {
    id: 'puzzle-quiz',
    name: 'Puzzles & Logic',
    emoji: '🧩',
    level: 'Hard',
    questions: [
      {
        question: 'A, B, C like different colors: Red, Blue, Green. A doesn\'t like Red. B likes Green. What color does C like?',
        options: ['Red', 'Blue', 'Green', 'Cannot determine'],
        correct: 'Red',
        hint: 'B=Green, A≠Red so A=Blue, therefore C=Red'
      }
    ]
  },

  {
    id: 'calendar-quiz',
    name: 'Calendar & Clock',
    emoji: '📅',
    level: 'Medium',
    questions: [
      {
        question: 'If today is Monday, what day will it be after 100 days?',
        options: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
        correct: 'Wednesday',
        hint: '100 ÷ 7 = 14 remainder 2. Monday + 2 days = Wednesday'
      },
      {
        question: 'Clock shows 3:20. Angle between hour and minute hands?',
        options: ['15°', '20°', '25°', '30°'],
        correct: '20°',
        hint: 'Minute = 20×6 = 120°. Hour = 3×30 + 20×0.5 = 100°. Angle = 120-100 = 20°'
      },
      {
        question: '2000 is a leap year. Is 1900?',
        options: ['Yes', 'No', 'Cannot determine', 'Not relevant'],
        correct: 'No',
        hint: 'Leap if divisible by 4, BUT if divisible by 100, must also divide by 400. 1900 ÷ 400 ≠ whole number'
      }
    ]
  },

  {
    id: 'matrix-quiz',
    name: 'Matrix Coding',
    emoji: '🔢',
    level: 'Medium',
    questions: [
      {
        question: 'In a 5×5 matrix (0-4 indexing), letter at (1,3) is W. Code for W?',
        options: ['13', '31', '14', '41'],
        correct: '13',
        hint: 'Position (row, column) = (1, 3) → code = 13'
      }
    ]
  }
];
