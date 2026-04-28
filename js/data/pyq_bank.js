// Comprehensive PYQ Data Bank (Extracted from 2019-2024 Papers)
// These are authentic SSC CGL questions with detailed solutions

const PYQ_BANK = {
    math: [
        {
            text: "The simple interest on an amount for 6 years at 4% p.a. is ₹7,500 less than the simple interest on the same amount for 11 years. Find the amount.",
            options: ["₹38,000", "₹37,500", "₹37,000", "₹38,500"],
            correctAnswer: 1,
            difficulty: "MEDIUM",
            explanation: { standard: "Diff in SI = P * R * (T2 - T1) / 100. 7500 = P * 4 * 5 / 100 => P = 7500 * 5 = 37,500." }
        },
        {
            text: "A grocer professes to sell rice at cost price, but uses a fake weight of 870 g for 1 kg. Find his profit percentage (correct to 2 decimal places).",
            options: ["11.11%", "14.94%", "15.11%", "18.21%"],
            correctAnswer: 1,
            difficulty: "HIGH",
            explanation: { standard: "Profit % = (Error / Used Weight) * 100. Error = 1000 - 870 = 130g. Profit = (130 / 870) * 100 = 14.94%." }
        },
        {
            text: "In a circular race of 840 m, A and B start running in the same direction from the same point at speeds of 6 m/s and 12 m/s respectively. After how much time will they meet next?",
            options: ["140 s", "40 s", "70 s", "20 s"],
            correctAnswer: 0,
            difficulty: "HIGH",
            explanation: { standard: "Meeting time = Track length / Relative Speed. Relative Speed = 12 - 6 = 6 m/s. Time = 840 / 6 = 140 s." }
        },
        {
            text: "If cos² 29° + cos² 61° is evaluated, what is the result?",
            options: ["√3/2", "2", "0", "1"],
            correctAnswer: 3,
            difficulty: "EASY",
            explanation: { standard: "cos² 61° = sin²(90-61) = sin² 29°. Since sin²θ + cos²θ = 1, the result is 1." }
        },
        {
            text: "A thief is 1150 m away from the police. The thief starts running at 6 km/h and the police starts chasing at 11 km/h. How much distance (in meters) will the thief run before being caught?",
            options: ["1485", "1380", "1125", "1280"],
            correctAnswer: 1,
            difficulty: "HIGH",
            explanation: { standard: "Relative speed = 11 - 6 = 5 km/h. Time to catch = Dist / Rel Speed = 1.15 / 5 = 0.23 hours. Dist by thief = Speed * Time = 6 * 0.23 = 1.38 km = 1380 m." }
        },
        {
            text: "Simplify: (x³ + 15x² + 75x + 125) / (x² - 25) * (x - 5)",
            options: ["x² + 5x + 25", "x² - 25", "x² + 10x + 25", "x² + 25"],
            correctAnswer: 2,
            difficulty: "VERY HIGH",
            explanation: { standard: "Numerator is (x + 5)³. Denominator is (x + 5)(x - 5). Result = [(x+5)³ / (x+5)(x-5)] * (x-5) = (x+5)² = x² + 10x + 25." }
        }
    ],
    english: [
        {
            text: "Select the most appropriate synonym of the word: FATAL",
            options: ["Additional", "Easy", "Deadly", "Jovial"],
            correctAnswer: 2,
            difficulty: "EASY",
            explanation: { standard: "Fatal means causing death; synonym is Deadly." }
        },
        {
            text: "Identify the segment containing a grammatical error: 'Mr. Abhilash and his family have received no informations about the incident.'",
            options: ["about the incident.", "Mr. Abhilash and his family", "have received", "no informations"],
            correctAnswer: 3,
            difficulty: "MEDIUM",
            explanation: { standard: "'Information' is an uncountable noun and does not have a plural form 'informations'." }
        },
        {
            text: "Select the most appropriate meaning of the idiom: 'To have bigger fish to fry'",
            options: ["To have bigger things to take care of", "To take calculated risks", "To know different kinds of fishing", "To have an interest in cooking"],
            correctAnswer: 0,
            difficulty: "EASY",
            explanation: { standard: "The idiom means having more important matters to attend to." }
        },
        {
            text: "Identify the INCORRECTLY spelled word in the options below:",
            options: ["Bureaucracy", "Embarrass", "Connoisseur", "Relevent"],
            correctAnswer: 3,
            difficulty: "MEDIUM",
            explanation: { standard: "The correct spelling is 'Relevant'." }
        },
        {
            text: "Select the most appropriate synonym of the word: TOXIC",
            options: ["Lethal", "Licit", "Laudatory", "Lanky"],
            correctAnswer: 0,
            difficulty: "EASY",
            explanation: { standard: "Toxic means poisonous or deadly. Lethal is the correct synonym." }
        }
    ],
    reasoning: [
        {
            text: "31 is related to 152 in the same way 47 is related to 168. To which number is 66 related?",
            options: ["180", "187", "185", "190"],
            correctAnswer: 1,
            difficulty: "HIGH",
            explanation: { standard: "Logic: Number + 11² = Result. 31 + 121 = 152. 47 + 121 = 168. 66 + 121 = 187." }
        },
        {
            text: "In a code language, 'NAME' is written as 'FNBO'. How will 'NAIL' be written?",
            options: ["MOBJ", "MJOB", "MOJB", "MJBO"],
            correctAnswer: 3,
            difficulty: "MEDIUM",
            explanation: { standard: "Logic: Reverse the word and add +1 to each letter. NAME -> EMAN + 1 = FNBO. NAIL -> LIAN + 1 = MJBO." }
        },
        {
            text: "Find the next number in the series: 1, 3, 10, 41, ?, 1237",
            options: ["202", "210", "200", "206"],
            correctAnswer: 3,
            difficulty: "HIGH",
            explanation: { standard: "Logic: (n * i) + 1 where i starts from 2. (1*2)+1=3, (3*3)+1=10, (10*4)+1=41, (41*5)+1=206." }
        }
    ],
    gk: [
        {
            text: "Which article of the Indian Constitution deals with the writ jurisdiction of High Courts?",
            options: ["Article 228", "Article 227", "Article 226", "Article 225"],
            correctAnswer: 2,
            difficulty: "MEDIUM",
            explanation: { standard: "Article 226 empowers High Courts to issue writs. Article 32 is for the Supreme Court." }
        },
        {
            text: "In which year was Project Tiger launched in India?",
            options: ["1973", "1970", "1972", "1985"],
            correctAnswer: 0,
            difficulty: "EASY",
            explanation: { standard: "Project Tiger was launched on April 1, 1973, to protect Bengal tigers." }
        },
        {
            text: "Which country will host the FIFA World Cup 2026?",
            options: ["Canada, USA and Mexico", "Brazil", "Argentina", "USA and Chile"],
            correctAnswer: 0,
            difficulty: "EASY",
            explanation: { standard: "FIFA World Cup 2026 will be jointly hosted by Canada, USA, and Mexico." }
        }
    ]
};
