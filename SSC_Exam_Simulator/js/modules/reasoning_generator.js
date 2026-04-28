// Reasoning Generators
// Dynamically creates SSC CGL Reasoning questions

const ReasoningGenerator = {
    generateQuestions: function(count) {
        let questions = [];
        for(let i=0; i<count; i++) {
            const topics = ['numberSeries', 'codingDecoding', 'syllogism'];
            const topic = topics[Math.floor(Math.random() * topics.length)];
            questions.push(this[topic](i));
        }
        return questions;
    },

    numberSeries: function(index) {
        const types = [
            () => {
                let s = Math.floor(Math.random() * 5) + 2; 
                let seq = [s*s+1, (s+1)*(s+1)+1, (s+2)*(s+2)+1, (s+3)*(s+3)+1];
                let ans = (s+4)*(s+4)+1;
                return { seq: seq.join(', '), ans: ans, standard: `Find differences: ${seq[1]-seq[0]}, ${seq[2]-seq[1]}... Notice the differences are odd numbers increasing. Add the next odd number to the last term to get ${ans}.`, trick: `Pattern Recognition: Notice that ${seq[0]} is near ${s*s}, ${seq[1]} is near ${(s+1)*(s+1)}. The exact pattern is n² + 1. So the next is ${(s+4)}² + 1 = ${ans}.` };
            },
            () => {
                let s = Math.floor(Math.random() * 10) + 2;
                let seq = [s, s*2+1, (s*2+1)*2+1, ((s*2+1)*2+1)*2+1];
                let ans = (((s*2+1)*2+1)*2+1)*2+1;
                return { seq: seq.join(', '), ans: ans, standard: `Calculate differences and try to find a mathematical relationship between consecutive terms. You will see Term2 = Term1 * 2 + 1.`, trick: `Multiplier Observation: Whenever a series grows rapidly but not like squares, test '×2' or '×3'. Here, every number is doubled and 1 is added. So, ${seq[3]} × 2 + 1 = ${ans}.` };
            }
        ];

        const selectedType = types[Math.floor(Math.random() * types.length)]();
        
        let options = [selectedType.ans, selectedType.ans+2, selectedType.ans-1, selectedType.ans+10];
        options = options.sort(() => Math.random() - 0.5);
        const correctIndex = options.indexOf(selectedType.ans);

        return {
            id: `reasoning_${index}`,
            text: `Find the next number in the series: ${selectedType.seq}, ?`,
            options: options.map(String),
            correctAnswer: correctIndex,
            explanation: {
                standard: selectedType.standard,
                trick: selectedType.trick
            }
        };
    },

    codingDecoding: function(index) {
        const words = ["WATER", "MOUSE", "TIGER", "PLANT"];
        const word = words[Math.floor(Math.random() * words.length)];
        const shift = Math.floor(Math.random() * 3) + 1; 
        
        let coded = "";
        for(let i=0; i<word.length; i++) {
            coded += String.fromCharCode(((word.charCodeAt(i) - 65 + shift) % 26) + 65);
        }

        const targetWords = ["TABLE", "CHAIR", "RIVER"];
        const target = targetWords[Math.floor(Math.random() * targetWords.length)];
        let targetCoded = "";
        for(let i=0; i<target.length; i++) {
            targetCoded += String.fromCharCode(((target.charCodeAt(i) - 65 + shift) % 26) + 65);
        }

        let wrongCoded1 = targetCoded.substring(0, targetCoded.length-1) + "Z";
        let wrongCoded2 = String.fromCharCode(((target.charCodeAt(0) - 65 + shift + 1) % 26) + 65) + targetCoded.substring(1);
        let wrongCoded3 = targetCoded.split('').reverse().join('');

        let options = [targetCoded, wrongCoded1, wrongCoded2, wrongCoded3];
        options = options.sort(() => Math.random() - 0.5);
        const correctIndex = options.indexOf(targetCoded);

        return {
            id: `reasoning_${index}`,
            text: `In a certain code language, '${word}' is written as '${coded}'. How will '${target}' be written in that language?`,
            options: options,
            correctAnswer: correctIndex,
            explanation: {
                standard: `Write down the alphabetical positions of ${word} and ${coded}. You will see that each letter's position is increased by ${shift}. Apply this +${shift} logic to ${target} to get ${targetCoded}.`,
                trick: `EJOTY Check: Instead of checking the whole word, just check the FIRST and LAST letters of '${word}' to find the shift (+${shift}). Then immediately apply +${shift} to the first and last letters of '${target}' and eliminate options. You don't need to decode the whole word!`
            }
        };
    },

    syllogism: function(index) {
        const cases = [
            {
                text: "Statements:<br>1. All Cats are Dogs.<br>2. Some Dogs are Rats.<br><br>Conclusions:<br>I. Some Cats are Rats.<br>II. Some Dogs are Cats.",
                options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
                correct: 1, 
                standard: "Draw Venn Diagram: Draw Cats completely inside Dogs. Draw Dogs intersecting Rats. Since Cats and Rats don't *have* to intersect, Conclusion I is false. Since Cats are inside Dogs, some Dogs must be Cats. Conclusion II is true.",
                trick: "100-50 Rule: All(100,50), Some(50,50).<br>Cat(100), Dog(50). Dog(50), Rat(50).<br>Since common term (Dog) is 50 in both, no relation can be formed between Cat and Rat (So I is wrong). 'All Cats are Dogs' directly converts to 'Some Dogs are Cats' (So II is right)."
            }
        ];

        const selected = cases[Math.floor(Math.random() * cases.length)];
        return {
            id: `reasoning_${index}`,
            text: selected.text,
            options: selected.options,
            correctAnswer: selected.correct,
            explanation: {
                standard: selected.standard,
                trick: selected.trick
            }
        };
    }
};
