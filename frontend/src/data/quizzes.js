export const QUIZ_QUESTIONS = [
  {
    id: 'numbers-quiz',
    name: 'Number System & HCF/LCM',
    emoji: '🔢',
    level: 'Easy',
    questions: [
      {
        question: 'What is the HCF of 24 and 36?',
        options: ['6', '8', '12', '18'],
        correct: '12',
        hint: 'Find common factors: 24 = 2³×3, 36 = 2²×3²'
      },
      {
        question: 'Which number is divisible by 11?',
        options: ['1234', '5643', '1221', '9876'],
        correct: '1221',
        hint: 'Apply rule: (sum of odd digits) - (sum of even digits) = 0 or 11'
      },
      {
        question: 'LCM of 12 and 18 is?',
        options: ['24', '36', '48', '54'],
        correct: '36',
        hint: '12 = 2²×3, 18 = 2×3²'
      }
    ]
  },
  {
    id: 'percentage-quiz',
    name: 'Percentage & Ratio',
    emoji: '%',
    level: 'Easy',
    questions: [
      {
        question: '25% of 400 = ?',
        options: ['80', '100', '120', '150'],
        correct: '100',
        hint: 'Multiply 400 × 25/100'
      },
      {
        question: 'If a number is increased by 20%, what is the multiplier?',
        options: ['1.2', '1.02', '0.8', '0.2'],
        correct: '1.2',
        hint: 'Increase by 20% means 100% + 20% = 120%'
      },
      {
        question: 'If A:B = 3:4 and total is 70, find A',
        options: ['30', '40', '35', '28'],
        correct: '30',
        hint: 'A = 70 × 3/(3+4)'
      }
    ]
  },
  {
    id: 'profit-quiz',
    name: 'Profit & Loss',
    emoji: '💹',
    level: 'Medium',
    questions: [
      {
        question: 'CP = 100, SP = 125. Profit% = ?',
        options: ['20%', '25%', '30%', '33%'],
        correct: '25%',
        hint: 'Profit% = (Profit/CP) × 100 = (25/100) × 100'
      },
      {
        question: 'If MP = 500 and discount = 20%, what is SP?',
        options: ['300', '350', '400', '450'],
        correct: '400',
        hint: 'SP = 500 × (80/100)'
      },
      {
        question: 'Two items at ₹100 each - 20% profit and 20% loss. Net result?',
        options: ['4% profit', '4% loss', '20% loss', 'No profit/loss'],
        correct: '4% loss',
        hint: 'Formula: Loss% = x²/100 where x=20'
      }
    ]
  },
  {
    id: 'interest-quiz',
    name: 'Simple & Compound Interest',
    emoji: '🏦',
    level: 'Medium',
    questions: [
      {
        question: 'SI on ₹1000 at 10% for 2 years?',
        options: ['₹100', '₹200', '₹210', '₹220'],
        correct: '₹200',
        hint: 'SI = (P×R×T)/100 = (1000×10×2)/100'
      },
      {
        question: 'CI on ₹1000 at 10% for 2 years?',
        options: ['₹200', '₹205', '₹210', '₹220'],
        correct: '₹210',
        hint: 'A = 1000 × (1.1)² = 1210'
      }
    ]
  },
  {
    id: 'speed-quiz',
    name: 'Speed, Distance & Time',
    emoji: '🚗',
    level: 'Easy',
    questions: [
      {
        question: 'Speed = 60 km/h, Time = 2 hours. Distance?',
        options: ['30 km', '60 km', '90 km', '120 km'],
        correct: '120 km',
        hint: 'Distance = Speed × Time'
      },
      {
        question: 'Convert 90 km/h to m/s',
        options: ['15 m/s', '25 m/s', '35 m/s', '45 m/s'],
        correct: '25 m/s',
        hint: 'Multiply by 5/18'
      }
    ]
  },
  {
    id: 'geometry-quiz',
    name: 'Geometry',
    emoji: '📐',
    level: 'Medium',
    questions: [
      {
        question: 'In a circle, angle at centre = 80°. Angle at circumference (same arc)?',
        options: ['20°', '40°', '80°', '160°'],
        correct: '40°',
        hint: 'Angle at circumference = Half of angle at centre'
      },
      {
        question: 'Pythagorean triplet - 3:4:?',
        options: ['5', '6', '7', '8'],
        correct: '5',
        hint: 'The famous 3-4-5 triplet'
      }
    ]
  },
  {
    id: 'algebra-quiz',
    name: 'Algebra',
    emoji: '🔣',
    level: 'Medium',
    questions: [
      {
        question: '(a+b)² = ?',
        options: [
          'a² + b²',
          'a² + 2ab + b²',
          'a² - 2ab + b²',
          'a² - b²'
        ],
        correct: 'a² + 2ab + b²',
        hint: 'One of the most common identities'
      },
      {
        question: 'a² - b² = ?',
        options: [
          '(a+b)²',
          '(a-b)²',
          '(a+b)(a-b)',
          '(a+b)(a+b)'
        ],
        correct: '(a+b)(a-b)',
        hint: 'Difference of squares formula'
      }
    ]
  },
  {
    id: 'trig-quiz',
    name: 'Trigonometry',
    emoji: '📐',
    level: 'Hard',
    questions: [
      {
        question: 'sin 30° = ?',
        options: ['0', '1/2', '√3/2', '1'],
        correct: '1/2',
        hint: 'Learn the standard values table'
      },
      {
        question: 'tan 45° = ?',
        options: ['0', '1/√3', '1', '√3'],
        correct: '1',
        hint: 'At 45°, sin = cos, so tan = 1'
      }
    ]
  },
  {
    id: 'timework-quiz',
    name: 'Time & Work',
    emoji: '🔧',
    level: 'Medium',
    questions: [
      {
        question: 'A does work in 6 days, B in 12 days. Together?',
        options: ['4 days', '4.5 days', '5 days', '6 days'],
        correct: '4 days',
        hint: 'Together = (6 × 12) / (6 + 12) = 72/18 = 4'
      },
      {
        question: 'A does 1/3 work in 2 days. Full work in?',
        options: ['4 days', '5 days', '6 days', '8 days'],
        correct: '6 days',
        hint: 'If 1/3 takes 2 days, then 3/3 takes 6 days'
      }
    ]
  }
];
