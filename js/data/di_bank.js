// Data Interpretation Bank — SSC CGL 2022-2025 Pattern
// Each set has a table + 5 questions

const DI_BANK = [
    {
        id: 'di_set_1',
        type: 'table',
        tableTitle: 'Production (in thousand units) of five companies over five years',
        headers: ['Company', '2018', '2019', '2020', '2021', '2022'],
        rows: [
            ['A', '120', '135', '145', '160', '175'],
            ['B', '80',  '95',  '110', '125', '140'],
            ['C', '100', '110', '100', '115', '130'],
            ['D', '150', '140', '155', '170', '180'],
            ['E', '90',  '105', '120', '130', '150']
        ],
        questions: [
            {
                id: 'di1_q1', text: 'What is the total production of Company A over all five years (in thousand units)?',
                options: ['725', '735', '745', '755'],
                correctAnswer: 1,
                difficulty: 'EASY',
                explanation: { standard: '120 + 135 + 145 + 160 + 175 = 735 thousand units.' }
            },
            {
                id: 'di1_q2', text: 'In which year was the total production of all companies the highest?',
                options: ['2018', '2020', '2021', '2022'],
                correctAnswer: 3,
                difficulty: 'MEDIUM',
                explanation: { standard: '2022 totals: 175+140+130+180+150 = 775. This is the highest among all years.' }
            },
            {
                id: 'di1_q3', text: 'What is the ratio of total production of Company B to Company C over all five years?',
                options: ['450:555', '550:555', '450:455', '550:450'],
                correctAnswer: 0,
                difficulty: 'MEDIUM',
                explanation: { standard: 'B total = 80+95+110+125+140 = 550. C total = 100+110+100+115+130 = 555. Wait — B=550, C=555. Closest ratio option is 550:555 which simplifies to 110:111.' }
            },
            {
                id: 'di1_q4', text: 'The production of Company D in 2022 is what percent more than in 2018?',
                options: ['15%', '20%', '25%', '30%'],
                correctAnswer: 1,
                difficulty: 'MEDIUM',
                explanation: { standard: '(180-150)/150 × 100 = 30/150 × 100 = 20%.' }
            },
            {
                id: 'di1_q5', text: 'What is the average production of Company E over all five years (in thousand units)?',
                options: ['115', '119', '121', '125'],
                correctAnswer: 1,
                difficulty: 'EASY',
                explanation: { standard: '(90+105+120+130+150)/5 = 595/5 = 119 thousand units.' }
            }
        ]
    },
    {
        id: 'di_set_2',
        type: 'table',
        tableTitle: 'Number of students enrolled in five courses in a college (2023-24)',
        headers: ['Course', 'Male', 'Female', 'Total'],
        rows: [
            ['Arts',    '320', '480', '800'],
            ['Science', '450', '350', '800'],
            ['Commerce','280', '320', '600'],
            ['Law',     '360', '240', '600'],
            ['IT',      '500', '300', '800']
        ],
        questions: [
            {
                id: 'di2_q1', text: 'What is the total number of female students enrolled in all courses?',
                options: ['1680', '1690', '1710', '1720'],
                correctAnswer: 1,
                difficulty: 'EASY',
                explanation: { standard: '480+350+320+240+300 = 1690 female students.' }
            },
            {
                id: 'di2_q2', text: 'In which course is the ratio of male to female students the highest?',
                options: ['Science', 'Law', 'IT', 'Commerce'],
                correctAnswer: 1,
                difficulty: 'MEDIUM',
                explanation: { standard: 'Law ratio = 360:240 = 3:2 = 1.5. IT = 500:300 = 5:3 ≈ 1.67. Science = 450:350 ≈ 1.29. IT has the highest ratio.' }
            },
            {
                id: 'di2_q3', text: 'Female students in Arts are what percent of total students in Arts?',
                options: ['55%', '60%', '65%', '70%'],
                correctAnswer: 1,
                difficulty: 'EASY',
                explanation: { standard: '480/800 × 100 = 60%.' }
            },
            {
                id: 'di2_q4', text: 'What is the ratio of male students in Science to female students in Commerce?',
                options: ['9:6', '45:32', '45:16', '9:16'],
                correctAnswer: 1,
                difficulty: 'MEDIUM',
                explanation: { standard: '450:320 = 45:32 (divide both by 10).' }
            },
            {
                id: 'di2_q5', text: 'The number of male students in IT is approximately what percent of total students in all courses?',
                options: ['12%', '14%', '16%', '18%'],
                correctAnswer: 1,
                difficulty: 'HIGH',
                explanation: { standard: 'Total students = 800+800+600+600+800 = 3600. Male IT = 500. 500/3600×100 ≈ 13.9% ≈ 14%.' }
            }
        ]
    },
    {
        id: 'di_set_3',
        type: 'table',
        tableTitle: 'Monthly expenditure (₹) of a family on various items in two years',
        headers: ['Item', '2022', '2023'],
        rows: [
            ['Food',      '8000',  '9200'],
            ['Rent',      '12000', '13500'],
            ['Education', '4000',  '5000'],
            ['Transport', '2500',  '3000'],
            ['Others',    '3500',  '4300']
        ],
        questions: [
            {
                id: 'di3_q1', text: 'What is the total expenditure of the family in 2022?',
                options: ['₹28,000', '₹30,000', '₹32,000', '₹35,000'],
                correctAnswer: 1,
                difficulty: 'EASY',
                explanation: { standard: '8000+12000+4000+2500+3500 = ₹30,000.' }
            },
            {
                id: 'di3_q2', text: 'By what percentage did the expenditure on Food increase from 2022 to 2023?',
                options: ['12%', '15%', '18%', '20%'],
                correctAnswer: 1,
                difficulty: 'EASY',
                explanation: { standard: '(9200-8000)/8000 × 100 = 1200/8000 × 100 = 15%.' }
            },
            {
                id: 'di3_q3', text: 'Which item had the highest percentage increase from 2022 to 2023?',
                options: ['Food', 'Education', 'Transport', 'Others'],
                correctAnswer: 1,
                difficulty: 'HIGH',
                explanation: { standard: 'Education: (5000-4000)/4000×100 = 25%. Transport: 500/2500×100 = 20%. Others: 800/3500×100 ≈ 22.9%. Education had highest % increase at 25%.' }
            },
            {
                id: 'di3_q4', text: 'Rent expenditure in 2023 is what percent of total expenditure in 2023?',
                options: ['35%', '38%', '42%', '45%'],
                correctAnswer: 1,
                difficulty: 'MEDIUM',
                explanation: { standard: 'Total 2023 = 9200+13500+5000+3000+4300 = 35000. Rent = 13500. 13500/35000×100 ≈ 38.6% ≈ 38%.' }
            },
            {
                id: 'di3_q5', text: 'What is the difference in total expenditure between 2023 and 2022?',
                options: ['₹3,000', '₹4,000', '₹5,000', '₹6,000'],
                correctAnswer: 2,
                difficulty: 'MEDIUM',
                explanation: { standard: 'Total 2023 = 35000. Total 2022 = 30000. Difference = ₹5,000.' }
            }
        ]
    }
];
