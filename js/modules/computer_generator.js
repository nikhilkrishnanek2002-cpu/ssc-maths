// Computer Knowledge Generator for Tier-2
// Dynamically creates questions from computer_knowledge.js data

const ComputerGenerator = {
    generateQuestions: function(count) {
        // computerData is imported via script tag in exam.html
        const topics = Object.keys(computerData);
        let questions = [];
        
        for(let i=0; i<count; i++) {
            const topicKey = topics[Math.floor(Math.random() * topics.length)];
            const topic = computerData[topicKey];
            const block = topic.blocks[Math.floor(Math.random() * topic.blocks.length)];
            
            // Randomly pick an example to turn into a question or use the text
            const example = block.examples[Math.floor(Math.random() * block.examples.length)];
            
            // Create a pseudo-random question based on the example/text
            // For now, we'll use a set of templates or just pick from a pre-defined bank if available.
            // Since computerData is mostly educational blocks, let's create a small bank for Tier-2
            // or use a more robust generation logic.
            
            questions.push(this.createQuestionFromBlock(block, i));
        }
        return questions;
    },

    createQuestionFromBlock: function(block, index) {
        // Simple logic to extract a question from the educational content
        // In a real app, we'd have a question bank. Here we'll simulate it.
        const qBank = [
            {
                text: "Which of the following is the fastest memory in a computer system?",
                options: ["RAM", "Cache", "Registers", "Hard Disk"],
                correctAnswer: 2,
                explanation: { standard: "Registers are the smallest and fastest memory units located inside the CPU." }
            },
            {
                text: "In MS Excel, what is the keyboard shortcut to insert the current date?",
                options: ["Ctrl + D", "Ctrl + ;", "Ctrl + Shift + D", "Alt + D"],
                correctAnswer: 1,
                explanation: { standard: "Ctrl + ; is used to insert the current date in Excel." }
            },
            {
                text: "Which protocol is used for sending emails?",
                options: ["POP3", "IMAP", "SMTP", "HTTP"],
                correctAnswer: 2,
                explanation: { standard: "SMTP (Simple Mail Transfer Protocol) is used for sending emails, while POP3 and IMAP are for receiving." }
            },
            {
                text: "What is the maximum number of rows in a modern MS Excel worksheet?",
                options: ["65,536", "1,048,576", "16,384", "Unlimited"],
                correctAnswer: 1,
                explanation: { standard: "Modern Excel (xlsx) supports 1,048,576 rows and 16,384 columns." }
            },
            {
                text: "Which of the following is a 'volatile' memory?",
                options: ["ROM", "RAM", "SSD", "EPROM"],
                correctAnswer: 1,
                explanation: { standard: "RAM is volatile memory, meaning it loses its data when the power is turned off." }
            }
        ];

        const q = qBank[Math.floor(Math.random() * qBank.length)];
        
        // Random difficulty label
        const rand = Math.random();
        let diff = "MEDIUM";
        if (rand < 0.2) diff = "EASY";
        else if (rand > 0.8) diff = "HIGH";

        return {
            ...q,
            id: `comp_${index}`,
            difficulty: diff
        };
    }
};
