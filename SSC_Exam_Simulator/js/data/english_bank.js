// English Comprehension Data Bank
// Contains Static Questions for SSC CGL

const EnglishBank = {
    questions: [
        {
            id: 'eng_1',
            text: "Select the most appropriate synonym of the given word: ABANDON",
            options: ["Retain", "Forsake", "Support", "Protect"],
            correctAnswer: 1,
            explanation: { detailed: "ABANDON means to leave completely and finally. 'Forsake' is its exact synonym. 'Retain' is the antonym (to keep). 'Support' and 'Protect' are unrelated positive words." }
        },
        {
            id: 'eng_2',
            text: "Identify the segment in the sentence which contains a grammatical error: 'He is one of the best writer that has ever lived.'",
            options: ["He is", "one of the best", "writer that", "has ever lived"],
            correctAnswer: 2,
            explanation: { detailed: "Grammar Rule: The phrase 'one of the' is always followed by a plural noun. It should be 'one of the best writers'. The verb after 'that' will match 'writers', but 'one of the best writer' is the core error." }
        },
        {
            id: 'eng_3',
            text: "Select the most appropriate meaning of the given idiom: 'A piece of cake'",
            options: ["A hidden enemy", "A very easy task", "A sweet reward", "An unexpected event"],
            correctAnswer: 1,
            explanation: { detailed: "'A piece of cake' is a common idiom meaning something that is very easy to do, requiring little or no effort." }
        },
        {
            id: 'eng_4',
            text: "Select the correctly spelt word.",
            options: ["Accomodation", "Acommodation", "Accommodation", "Accomodasion"],
            correctAnswer: 2,
            explanation: { detailed: "The correct spelling is 'Accommodation'. It requires a double 'c' and a double 'm'. Remembering 'two cots and two mattresses' is a common trick for this word." }
        },
        {
            id: 'eng_5',
            text: "Fill in the blank: The manager was pleased _____ the performance of his team.",
            options: ["at", "with", "for", "about"],
            correctAnswer: 1,
            explanation: { detailed: "Fixed Preposition: The adjective 'pleased' takes the preposition 'with' when referring to a person or their performance/actions. Example: I am pleased with you." }
        }
        // Normally, we would have 100+ questions here. 
    ],

    generateQuestions: function(count) {
        // Shuffle and return requested count
        let shuffled = [...this.questions].sort(() => Math.random() - 0.5);
        
        // If we don't have enough, just repeat them for the sake of the mock test
        while(shuffled.length < count) {
            shuffled = shuffled.concat([...this.questions].sort(() => Math.random() - 0.5));
        }
        
        return shuffled.slice(0, count).map((q, index) => {
            return { ...q, id: `english_${index}` };
        });
    }
};
