// General Awareness Data Bank
// Focuses on most asked SSC CGL topics: Polity, History, Science, Static GK

const GKBank = {
    questions: [
        {
            id: 'gk_1',
            text: "Which Article of the Indian Constitution is related to the Right to Equality?",
            options: ["Article 14", "Article 19", "Article 21", "Article 32"],
            correctAnswer: 0,
            explanation: { detailed: "Article 14 of the Indian Constitution ensures equality before the law and equal protection of the laws within the territory of India. Article 19 is freedom of speech, Article 21 is Right to life, and Article 32 is Right to constitutional remedies." }
        },
        {
            id: 'gk_2',
            text: "Who was the first Governor-General of independent India?",
            options: ["C. Rajagopalachari", "Lord Mountbatten", "Dr. Rajendra Prasad", "Jawaharlal Nehru"],
            correctAnswer: 1,
            explanation: { detailed: "Lord Mountbatten was the first Governor-General of independent India. C. Rajagopalachari was the first and last *Indian* Governor-General. Dr. Rajendra Prasad was the first President, and Nehru was the first Prime Minister." }
        },
        {
            id: 'gk_3',
            text: "What is the SI unit of electric current?",
            options: ["Volt", "Ohm", "Ampere", "Watt"],
            correctAnswer: 2,
            explanation: { detailed: "The SI unit of electric current is Ampere (A). Volt is the unit of electric potential, Ohm is the unit of electrical resistance, and Watt is the unit of power." }
        },
        {
            id: 'gk_4',
            text: "Which of the following passes connects Srinagar to Leh?",
            options: ["Rohtang Pass", "Nathu La Pass", "Zoji La Pass", "Jelep La Pass"],
            correctAnswer: 2,
            explanation: { detailed: "Zoji La is a high mountain pass in the Himalayas in the Indian union territory of Ladakh. It connects Srinagar and Leh. Rohtang Pass is in Himachal Pradesh. Nathu La and Jelep La are in Sikkim." }
        },
        {
            id: 'gk_5',
            text: "The term 'Bull and Bear' are associated with which commercial activity?",
            options: ["Foreign Trade", "Banking", "Share Market", "Manufacturing"],
            correctAnswer: 2,
            explanation: { detailed: "Bull (expecting prices to rise) and Bear (expecting prices to fall) are terms used in the Stock/Share Market to describe the general trend of the market." }
        }
    ],

    generateQuestions: function(count) {
        let shuffled = [...this.questions].sort(() => Math.random() - 0.5);
        
        while(shuffled.length < count) {
            shuffled = shuffled.concat([...this.questions].sort(() => Math.random() - 0.5));
        }
        
        return shuffled.slice(0, count).map((q, index) => {
            return { ...q, id: `gk_${index}` };
        });
    }
};
