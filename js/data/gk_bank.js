// General Awareness Data Bank
// Focuses on most asked SSC CGL topics: Polity, History, Science, Static GK (TCS 2025 Pattern)

const GKBank = {
    questions: [
        {
            text: "Which Article of the Indian Constitution is related to the Right to Equality?",
            options: ["Article 14", "Article 19", "Article 21", "Article 32"],
            correctAnswer: 0,
            explanation: { 
                standard: "Article 14 of the Indian Constitution ensures equality before the law and equal protection of the laws.",
                trick: "Memory Trick: E-F-E-R. Equality(14-18), Freedom(19-22), Exploitation(23-24), Religion(25-28)." 
            }
        },
        {
            text: "Who was the first Governor-General of independent India?",
            options: ["C. Rajagopalachari", "Lord Mountbatten", "Dr. Rajendra Prasad", "Jawaharlal Nehru"],
            correctAnswer: 1,
            explanation: { 
                standard: "Lord Mountbatten was the first Governor-General of independent India. C. Rajagopalachari was the first and last *Indian* Governor-General.",
                trick: "Always check the wording! If it says 'First INDIAN', it's C. Rajagopalachari. If it just says 'First', it's the British Mountbatten." 
            }
        },
        {
            text: "What is the SI unit of electric current?",
            options: ["Volt", "Ohm", "Ampere", "Watt"],
            correctAnswer: 2,
            explanation: { standard: "The SI unit of electric current is Ampere (A). Volt is potential, Ohm is resistance, and Watt is power." }
        },
        {
            text: "Which of the following passes connects Srinagar to Leh?",
            options: ["Rohtang Pass", "Nathu La Pass", "Zoji La Pass", "Jelep La Pass"],
            correctAnswer: 2,
            explanation: { 
                standard: "Zoji La connects Srinagar and Leh in Ladakh. Rohtang is in HP. Nathu La and Jelep La are in Sikkim.",
                trick: "Geography Elimination: Nathu La and Jelep La are famous Sikkim passes. Rohtang is famous for Manali tourists (HP). That leaves Zoji La for Kashmir/Ladakh!" 
            }
        },
        {
            text: "The term 'Bull and Bear' are associated with which commercial activity?",
            options: ["Foreign Trade", "Banking", "Share Market", "Manufacturing"],
            correctAnswer: 2,
            explanation: { standard: "Bull (expecting prices to rise) and Bear (expecting prices to fall) are terms used in the Stock/Share Market." }
        },
        {
            text: "Which of the following vitamins is fat-soluble?",
            options: ["Vitamin B1", "Vitamin C", "Vitamin K", "Vitamin B12"],
            correctAnswer: 2,
            explanation: { 
                standard: "Vitamins A, D, E, and K are fat-soluble. Vitamins B and C are water-soluble.",
                trick: "Acronym Trick: KEDA is fat. (K, E, D, A). B and C wash away in water." 
            }
        },
        {
            text: "During which Five Year Plan was the slogan 'Garibi Hatao' given?",
            options: ["Third Plan", "Fourth Plan", "Fifth Plan", "Sixth Plan"],
            correctAnswer: 2,
            explanation: { 
                standard: "The slogan 'Garibi Hatao' (Poverty Alleviation) was the primary objective of the Fifth Five Year Plan (1974-1979).",
                trick: "Memory Trick: The Fifth plan was brought by Indira Gandhi with the 5-point 'Garibi Hatao' agenda." 
            }
        },
        {
            text: "Who among the following was the founder of the Slave Dynasty?",
            options: ["Iltutmish", "Qutb-ud-din Aibak", "Balban", "Alauddin Khalji"],
            correctAnswer: 1,
            explanation: { 
                standard: "Qutb-ud-din Aibak founded the Slave Dynasty in 1206 AD. He was a slave of Muhammad Ghori.",
                trick: "Dynasty Sequence: S-K-T-S-L. Slave (Aibak), Khalji (Jalaluddin), Tughlaq (Ghiyasuddin), Sayyid (Khizr Khan), Lodi (Bahlul)." 
            }
        },
        {
            text: "Which river is known as the 'Sorrow of Bihar'?",
            options: ["Ganga", "Kosi", "Son", "Gandak"],
            correctAnswer: 1,
            explanation: { standard: "The Kosi River is known as the Sorrow of Bihar because of its frequent and devastating floods." }
        },
        {
            text: "In computer terminology, what does HTTP stand for?",
            options: ["Hyper Text Transfer Protocol", "Hyper Text Transfer Process", "Higher Text Transmission Protocol", "Hyper Tool Transfer Program"],
            correctAnswer: 0,
            explanation: { standard: "HTTP stands for Hyper Text Transfer Protocol. It is the foundation of data communication for the World Wide Web." }
        }
    ],

    generateQuestions: function(count) {
        let shuffled = [...this.questions].sort(() => Math.random() - 0.5);
        
        while(shuffled.length < count) {
            shuffled = shuffled.concat([...this.questions].sort(() => Math.random() - 0.5));
        }
        
        return shuffled.slice(0, count).map((q, index) => {
            // Chance to swap with authentic PYQ
            let finalQ = q;
            if (Math.random() < 0.3 && typeof PYQ_BANK !== 'undefined' && PYQ_BANK.gk) {
                finalQ = PYQ_BANK.gk[Math.floor(Math.random() * PYQ_BANK.gk.length)];
            }
            
            const rand = Math.random();
            let difficulty = finalQ.difficulty || "MEDIUM";
            if (!finalQ.difficulty) {
                if (rand < 0.2) difficulty = "EASY";
                else if (rand > 0.8) difficulty = (Math.random() > 0.5 ? "VERY HIGH" : "HIGH");
            }
            
            return { ...finalQ, id: `gk_${index}`, difficulty: difficulty };
        });
    }
};
