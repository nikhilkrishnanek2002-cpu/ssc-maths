// Reading Comprehension Bank — SSC CGL 2022-2025 Pattern
// Each passage has 5 questions

const RC_BANK = [
    {
        id: 'rc_1',
        passage: `The concept of emotional intelligence (EI) has gained significant attention in recent decades. 
Unlike traditional intelligence, which is primarily measured through IQ tests, emotional intelligence 
refers to the ability to identify, understand, and manage one's own emotions, as well as the emotions 
of others. Researchers like Daniel Goleman have argued that EI is a better predictor of success in 
life than IQ. People with high emotional intelligence tend to have better interpersonal relationships, 
make more thoughtful decisions, and handle stress more effectively. 

In the workplace, emotionally intelligent leaders are seen as more effective because they can 
empathize with their team members, resolve conflicts constructively, and create a positive work 
environment. Studies have shown that companies led by emotionally intelligent managers tend to 
have higher employee satisfaction and lower turnover rates. However, critics argue that emotional 
intelligence is difficult to measure objectively and that its importance may be overstated compared 
to technical skills and domain knowledge.`,
        questions: [
            {
                id: 'rc1_q1', text: 'According to the passage, what distinguishes emotional intelligence from traditional intelligence?',
                options: [
                    'EI is measured through IQ tests',
                    'EI involves managing one\'s own and others\' emotions',
                    'EI depends solely on technical knowledge',
                    'EI is a newer concept than traditional IQ'
                ],
                correctAnswer: 1,
                difficulty: 'EASY',
                explanation: { standard: 'The passage clearly states EI refers to the ability to identify, understand, and manage emotions (own + others). Traditional IQ tests measure something different.' }
            },
            {
                id: 'rc1_q2', text: 'Which of the following is a claim made by critics of emotional intelligence in the passage?',
                options: [
                    'EI is more important than IQ',
                    'EI leads to high employee turnover',
                    'EI is difficult to measure objectively',
                    'EI was first described by Daniel Goleman'
                ],
                correctAnswer: 2,
                difficulty: 'EASY',
                explanation: { standard: 'The passage explicitly says "critics argue that emotional intelligence is difficult to measure objectively."' }
            },
            {
                id: 'rc1_q3', text: 'What does the author suggest about emotionally intelligent leaders in the workplace?',
                options: [
                    'They prioritize technical skills over empathy',
                    'They create higher turnover rates',
                    'They are better at resolving conflicts and empathizing',
                    'They rely on IQ tests to assess their team'
                ],
                correctAnswer: 2,
                difficulty: 'MEDIUM',
                explanation: { standard: 'The passage says emotionally intelligent leaders "can empathize with their team members, resolve conflicts constructively, and create a positive work environment."' }
            },
            {
                id: 'rc1_q4', text: 'What is the best title for this passage?',
                options: [
                    'Why IQ Tests Are Outdated',
                    'The Role of Emotional Intelligence in Success',
                    'Daniel Goleman\'s Life and Research',
                    'Technical Skills vs. Soft Skills in Business'
                ],
                correctAnswer: 1,
                difficulty: 'MEDIUM',
                explanation: { standard: 'The entire passage is about emotional intelligence — what it is, its importance, and the debate around it. Option B captures this perfectly.' }
            },
            {
                id: 'rc1_q5', text: 'The word "empathize" in the passage most nearly means:',
                options: [
                    'To give orders firmly',
                    'To measure performance',
                    'To share and understand feelings',
                    'To analyze data objectively'
                ],
                correctAnswer: 2,
                difficulty: 'EASY',
                explanation: { standard: 'Empathize means to understand and share the feelings of another person.' }
            }
        ]
    },
    {
        id: 'rc_2',
        passage: `India's space programme has undergone a remarkable transformation since its humble beginnings 
in 1962. Under the leadership of visionaries like Dr. Vikram Sarabhai and later Dr. A.P.J. Abdul Kalam, 
the Indian Space Research Organisation (ISRO) evolved from launching sounding rockets to successfully 
placing a spacecraft in Martian orbit on its first attempt — the Mars Orbiter Mission (Mangalyaan) in 2014. 

This was a monumental achievement not only for India but for the global scientific community, as India 
became the first nation to successfully complete a Mars mission on its maiden attempt and at a fraction 
of the cost of similar missions by NASA. The success of Chandrayaan-3 in 2023, which soft-landed a 
rover near the Moon's south pole, further established India's credentials as a serious space power. 

ISRO's commercial arm, Antrix Corporation, has also been launching satellites for foreign countries, 
generating revenue and demonstrating India's growing technological prowess. Critics, however, question 
whether a developing country with widespread poverty should prioritize costly space missions over 
immediate social needs.`,
        questions: [
            {
                id: 'rc2_q1', text: 'What was historically significant about the Mars Orbiter Mission (Mangalyaan)?',
                options: [
                    'It was the most expensive space mission ever',
                    'India was the first nation to succeed in a Mars mission on its first attempt',
                    'It was jointly conducted with NASA',
                    'It discovered water on Mars'
                ],
                correctAnswer: 1,
                difficulty: 'EASY',
                explanation: { standard: 'The passage states India "became the first nation to successfully complete a Mars mission on its maiden attempt."' }
            },
            {
                id: 'rc2_q2', text: 'According to the passage, what did Chandrayaan-3 achieve?',
                options: [
                    'It reached Martian orbit',
                    'It launched foreign satellites',
                    'It soft-landed a rover near the Moon\'s south pole',
                    'It was India\'s first space mission'
                ],
                correctAnswer: 2,
                difficulty: 'EASY',
                explanation: { standard: 'The passage explicitly mentions "Chandrayaan-3 in 2023, which soft-landed a rover near the Moon\'s south pole."' }
            },
            {
                id: 'rc2_q3', text: 'What is the commercial arm of ISRO mentioned in the passage?',
                options: ['Mangalyaan Inc.', 'Antrix Corporation', 'Chandrayaan Ltd.', 'SpaceIndia Co.'],
                correctAnswer: 1,
                difficulty: 'EASY',
                explanation: { standard: 'The passage clearly states "ISRO\'s commercial arm, Antrix Corporation."' }
            },
            {
                id: 'rc2_q4', text: 'What criticism of India\'s space programme is mentioned in the passage?',
                options: [
                    'ISRO lacks qualified scientists',
                    'The missions have all failed',
                    'A developing country should not prioritize space over social needs',
                    'India copies technology from other nations'
                ],
                correctAnswer: 2,
                difficulty: 'MEDIUM',
                explanation: { standard: 'The passage ends with: "Critics question whether a developing country with widespread poverty should prioritize costly space missions over immediate social needs."' }
            },
            {
                id: 'rc2_q5', text: 'The word "prowess" in the passage most nearly means:',
                options: ['Weakness', 'Skill and expertise', 'Financial loss', 'Organizational structure'],
                correctAnswer: 1,
                difficulty: 'MEDIUM',
                explanation: { standard: 'Prowess means exceptional skill, ability, or expertise in a particular area.' }
            }
        ]
    }
];
