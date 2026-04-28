// English Comprehension Data Bank
// Contains Static Questions for SSC CGL (TCS 2025 Pattern)

const EnglishBank = {
    questions: [
        {
            text: "Select the most appropriate synonym of the given word: ABANDON",
            options: ["Retain", "Forsake", "Support", "Protect"],
            correctAnswer: 1,
            explanation: { 
                standard: "ABANDON means to leave completely and finally. 'Forsake' is its exact synonym.",
                trick: "Root/Tone Trick: ABANDON is a negative word (leaving something). 'Retain', 'Support', and 'Protect' are positive words. 'Forsake' is the only negative word." 
            }
        },
        {
            text: "Identify the segment in the sentence which contains a grammatical error: 'He is one of the best writer that has ever lived.'",
            options: ["He is", "one of the best", "writer that", "has ever lived"],
            correctAnswer: 2,
            explanation: { 
                standard: "Grammar Rule: The phrase 'one of the' is always followed by a plural noun. It should be 'one of the best writers'.",
                trick: "Always check 'One of the'. It MUST be followed by a plural noun and a singular verb (if it's the subject). Here, 'writer' -> 'writers'." 
            }
        },
        {
            text: "Select the most appropriate meaning of the given idiom: 'A piece of cake'",
            options: ["A hidden enemy", "A very easy task", "A sweet reward", "An unexpected event"],
            correctAnswer: 1,
            explanation: { standard: "'A piece of cake' is a common idiom meaning something that is very easy to do, requiring little or no effort." }
        },
        {
            text: "Select the correctly spelt word.",
            options: ["Accomodation", "Acommodation", "Accommodation", "Accomodasion"],
            correctAnswer: 2,
            explanation: { 
                standard: "The correct spelling is 'Accommodation'.",
                trick: "Spelling Trick: 'Accommodation' is a big word, it needs a lot of room! It needs TWO 'c's and TWO 'm's (Two cots, two mattresses)." 
            }
        },
        {
            text: "Select the correct active form of the given sentence: 'The thief was caught by the police.'",
            options: ["The police catches the thief.", "The police is catching the thief.", "The police caught the thief.", "The police has caught the thief."],
            correctAnswer: 2,
            explanation: { 
                standard: "The sentence is in Simple Past tense passive voice (was + V3). The active form must be in Simple Past tense (V2).",
                trick: "Voice Trick: In Voice, tense NEVER changes. 'Was caught' = Past. Options 1, 2, 4 are Present. Option 3 is Past. Solved in 2 seconds!" 
            }
        },
        {
            text: "Select the correct indirect form of the given sentence: He said, 'I have finished my work.'",
            options: ["He said that he had finished his work.", "He said that he has finished his work.", "He said that I have finished my work.", "He told that he finished his work."],
            correctAnswer: 0,
            explanation: { 
                standard: "Reporting verb is in past tense ('said'). 'Have finished' (Present Perfect) changes to 'had finished' (Past Perfect). 'I' changes to 'he' and 'my' to 'his'.",
                trick: "Narration Trick: Present changes to Past. 'Have' must become 'Had'. Only option 1 has 'had'." 
            }
        },
        {
            text: "Select the word which means the same as the group of words given: 'A person who is indifferent to pleasure or pain.'",
            options: ["Stoic", "Ascetic", "Cynic", "Misanthrope"],
            correctAnswer: 0,
            explanation: { 
                standard: "Stoic means a person who can endure pain or hardship without showing their feelings or complaining. Ascetic is a monk. Cynic distrusts motives. Misanthrope hates humans.",
                trick: "Root Word: 'Misanthrope' = Mis (Hate) + Anthrope (Human). 'Stoic' comes from Stoicism, a philosophy of enduring pain. Learn roots to eliminate options." 
            }
        },
        {
            text: "Select the most appropriate antonym of the given word: DILIGENT",
            options: ["Hardworking", "Lethargic", "Careful", "Attentive"],
            correctAnswer: 1,
            explanation: { 
                standard: "DILIGENT means having or showing care and conscientiousness in one's work or duties. 'Lethargic' means sluggish and apathetic, which is the exact opposite.",
                trick: "Synonym Elimination: 'Hardworking', 'Careful', and 'Attentive' are all synonyms of Diligent. We need an Antonym. The odd one out is 'Lethargic'." 
            }
        },
        {
            text: "Fill in the blank with the most appropriate word: The manager was pleased _____ the performance of his team.",
            options: ["at", "with", "for", "about"],
            correctAnswer: 1,
            explanation: { 
                standard: "Fixed Preposition: The adjective 'pleased' takes the preposition 'with' when referring to a person or their performance/actions.",
                trick: "Phrasal Memory: We always say 'I am angry WITH you' or 'pleased WITH you'. Emotions directed at people usually take 'with'." 
            }
        },
        {
            text: "Improve the bracketed part of the sentence: He is (more smarter) than his brother.",
            options: ["smart", "smarter", "most smartest", "No improvement"],
            correctAnswer: 1,
            explanation: { 
                standard: "Double comparatives are grammatically incorrect. 'Smarter' is already the comparative form of 'smart', so adding 'more' is redundant.",
                trick: "Rule of Double: Never use 'more' with words ending in '-er' (more better, more taller are ALWAYS wrong)." 
            }
        }
    ],

    generateQuestions: function(count) {
        let shuffled = [...this.questions].sort(() => Math.random() - 0.5);
        
        while(shuffled.length < count) {
            shuffled = shuffled.concat([...this.questions].sort(() => Math.random() - 0.5));
        }
        
        return shuffled.slice(0, count).map((q, index) => {
            return { ...q, id: `english_${index}` };
        });
    }
};
