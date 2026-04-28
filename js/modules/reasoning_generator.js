// Reasoning Generators
// Dynamically creates SSC CGL Reasoning questions (TCS 2025 Pattern)

const ReasoningGenerator = {
    generateQuestions: function(count) {
        let questions = [];
        const topics = [
            'numberSeries', 'codingDecoding', 'syllogism', 
            'bloodRelation', 'direction', 'analogy', 'pyq'
        ];
        for(let i=0; i<count; i++) {
            const topic = topics[Math.floor(Math.random() * topics.length)];
            const q = this[topic](i);
            
            // Randomly assign difficulty label for UI
            const rand = Math.random();
            if (rand < 0.2) q.difficulty = "EASY";
            else if (rand < 0.7) q.difficulty = "MEDIUM";
            else if (rand < 0.9) q.difficulty = "HIGH";
            else q.difficulty = "VERY HIGH";
            
            questions.push(q);
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
        options = [...new Set(options)];
        while(options.length < 4) options.push(options[0] + Math.floor(Math.random()*20)+1);
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
        const words = ["WATER", "MOUSE", "TIGER", "PLANT", "EARTH", "TRAIN"];
        const word = words[Math.floor(Math.random() * words.length)];
        const shift = Math.floor(Math.random() * 3) + 1; 
        
        let coded = "";
        for(let i=0; i<word.length; i++) {
            coded += String.fromCharCode(((word.charCodeAt(i) - 65 + shift) % 26) + 65);
        }

        const targetWords = ["TABLE", "CHAIR", "RIVER", "STONE"];
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
            },
            {
                text: "Statements:<br>1. No Book is a Pen.<br>2. All Pens are Pencils.<br><br>Conclusions:<br>I. No Book is a Pencil.<br>II. Some Pencils are Pens.",
                options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
                correct: 1,
                standard: "Draw Venn Diagram: Book and Pen are completely separate. Pen is fully inside Pencil. Book cannot touch Pen, but it CAN touch Pencil. So 'No Book is Pencil' is not definitely true. Since Pen is inside Pencil, 'Some Pencils are Pens' is true.",
                trick: "100-50 Rule: Book(100), Pen(100). Pen(100), Pencil(50).<br>Common term Pen has 100, so relation can form. But 'Pencil' is 50 in statement, so it CANNOT be 100 in Conclusion I ('No Book is a Pencil' requires Pencil=100). So I is eliminated instantly. II is a direct conversion of statement 2."
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
    },

    bloodRelation: function(index) {
        return {
            id: `reasoning_${index}`,
            text: `Pointing to a photograph of a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?`,
            options: ["Brother", "Uncle", "Cousin", "Father"],
            correctAnswer: 3,
            explanation: {
                standard: `Break it down backwards:<br>'my mother' = Suresh's mother.<br>'the only son of my mother' = Suresh himself.<br>'the son of (Suresh himself)' = Suresh's son.<br>Therefore, the boy in the photograph is Suresh's son. So, Suresh is the Father of the boy.`,
                trick: `Family Tree Mental Map: Replace 'my' with the speaker. 'Only son of my mother' is ALWAYS the speaker himself (if speaker is male). So 'He is the son of ME'. Instant answer: Father.`
            }
        };
    },

    direction: function(index) {
        const dist1 = Math.floor(Math.random() * 5) + 3; // 3 to 7
        const dist2 = Math.floor(Math.random() * 5) + 3; // 3 to 7
        
        return {
            id: `reasoning_${index}`,
            text: `A man walks ${dist1} km towards East, turns left and walks ${dist2} km. He again turns left and walks ${dist1} km. How far is he from his starting point?`,
            options: [`${dist2} km`, `${dist1} km`, `${dist1+dist2} km`, `${dist1*2} km`],
            correctAnswer: 0,
            explanation: {
                standard: `Draw the path: Starts at origin (0,0). Goes East to (${dist1}, 0). Turns left (North) to (${dist1}, ${dist2}). Turns left (West) and walks ${dist1} km, ending at (0, ${dist2}).<br>Distance from (0,0) to (0, ${dist2}) is ${dist2} km.`,
                trick: `N-E-S-W Method: Write directions in sequence (North, East, South, West).<br>East = ${dist1}. Left of East is North = ${dist2}. Left of North is West = ${dist1}.<br>East and West cancel each other out (${dist1} - ${dist1} = 0).<br>Only North is left: ${dist2} km.`
            }
        };
    },

    analogy: function(index) {
        const cases = [
            { q: "Oasis : Sand :: Island : ?", opts: ["River", "Sea", "Water", "Waves"], correct: 2, exp: "An oasis is a body of water surrounded by sand. An island is a body of land surrounded by water." },
            { q: "8 : 28 :: 27 : ?", opts: ["65", "82", "55", "64"], correct: 0, exp: "8 = 2³. 28 = 3³ + 1.<br>27 = 3³. So next is 4³ + 1 = 65." }
        ];
        const selected = cases[Math.floor(Math.random() * cases.length)];
        return {
            id: `reasoning_${index}`,
            text: `Find the related word/number: <br><b>${selected.q}</b>`,
            options: selected.opts,
            correctAnswer: selected.correct,
            explanation: {
                standard: selected.exp,
                trick: `Analogy Hack: Always look for squares and cubes first in number analogies. For word analogies, strictly define the relationship in a sentence: "X is surrounded by Y", then apply it exactly to the second pair.`
            }
        };
    },

    pyq: function(index) {
        // Pull from authentic PYQ Bank
        if (typeof PYQ_BANK !== 'undefined' && PYQ_BANK.reasoning) {
            const q = PYQ_BANK.reasoning[Math.floor(Math.random() * PYQ_BANK.reasoning.length)];
            return { ...q, id: `reasoning_pyq_${index}` };
        }
        return this.analogy(index); // Fallback
    }
};
