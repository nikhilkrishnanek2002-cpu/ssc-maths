// MASSIVE CONTENT EXPANSION FOR ENGLISH - WITH WORKED EXAMPLES, PRACTICE PROBLEMS, COMMON MISTAKES

const englishData = {
    english_grammar_nouns: {
        category: "English: Grammar Core",
        title: "Parts of Speech: Nouns & Pronouns - Complete Mastery",
        subtitle: "Error Spotting, Common Mistakes, Practice Problems",
        blocks: [
            {
                title: "1. Uncountable Nouns (Always Singular)",
                text: "These nouns CANNOT take 's/es' or be counted. They always take singular verbs.",
                examples: [
                    "List: Scenery, Poetry, Furniture, Advice, Information, Hair, Business, Mischief, Bread, Stationery, Equipment, Luggage, Baggage, Machinery, Traffic, Work, Progress, Homework",
                    "WRONG: 'many advices' -> RIGHT: 'some advice' or 'pieces of advice'",
                    "WRONG: 'The sceneries of Kashmir are' -> RIGHT: 'The scenery of Kashmir is'",
                    "WRONG: 'Two furnitures' -> RIGHT: 'Two pieces of furniture'"
                ],
                shortcut: "EXAM HACK: Plural verb with uncountable noun = automatic WRONG. Never use A/An, always use 'A piece of' or 'Some'.",
                commonMistakes: [
                    "Using plural verb with uncountable noun",
                    "Adding -s to uncountable nouns",
                    "Saying 'many information' instead of 'much information'"
                ],
                practiceProblems: [
                    "Identify error: The furniture in the room are old. [ERROR: 'are' should be 'is']",
                    "Fill: The scenery _____ beautiful. [ANSWER: 'is' (singular verb)]",
                    "Find correct: (A) Two advices given (B) Much advice given (C) Several advices [ANSWER: B]"
                ]
            },
            {
                title: "2. Always Plural Nouns",
                text: "These nouns exist ONLY in plural form.",
                examples: [
                    "List: Scissors, Tongs, Pincers, Spectacles, Goggles, Binoculars, Pants, Trousers, Jeans, Shorts, Tights, Stockings, Shoes, Socks, Alms, Archives, Riches, Scales",
                    "WRONG: 'Where is my scissors?' -> RIGHT: 'Where are my scissors?'",
                    "To make singular: Use 'A pair of' -> 'A pair of scissors', 'A pair of trousers'",
                    "WRONG: 'Give me my pant' -> RIGHT: 'Give me my pants' OR 'Give me a pair of trousers'"
                ],
                shortcut: "If the noun naturally has TWO identical parts (scissors have 2 blades), it's ALWAYS plural. Use 'A pair of' + Singular Verb for singular meaning.",
                practiceProblems: [
                    "Correct: My scissors has broken. [CORRECT TO: My scissors have broken.]",
                    "MCQ: Choose correct option: (A) The pant is blue (B) The pants are blue (C) A pants is blue [ANSWER: B]"
                ]
            },
            {
                title: "3. Pronoun Order: Person Arrangement",
                text: "When multiple persons (I, You, He/She/They) appear, follow the CORRECT order.",
                examples: [
                    "POSITIVE CONTEXT (231 RULE): 'You, He/She, and I...' OR 'You, They, and I...'",
                    "Example: 'You, he, and I are friends.' (Not 'I, you, he are friends')",
                    "GUILT/BLAME CONTEXT (123 RULE): 'I, You, and He...' -> Used when confessing mistakes",
                    "Example: 'I, you, and he have made a serious mistake.'",
                    "PLURAL RULE (123): 'We, You, and They...'",
                    "Example: 'We, you, and they will participate in the meeting.'"
                ],
                shortcut: "Remember: 231 for NORMAL sentences. Use 123 ONLY if confessing guilt or using WE/plural pronouns.",
                practiceProblems: [
                    "Correct: I, you, and he should go. [SHOULD BE: You, he, and I should go.]",
                    "Fill: ______, they, and I are responsible. [ANSWER: You]"
                ]
            },
            {
                title: "4. Pronoun: Objective Case After Prepositions",
                text: "After prepositions and certain verbs, use OBJECTIVE pronouns (me, him, her, them, us, you).",
                examples: [
                    "After Prepositions: Between, Among, To, For, From, With, Without, About, During, At, In, On",
                    "After Verbs: Let, Like, Between, But (except), Except",
                    "WRONG: 'Let you and I go' -> RIGHT: 'Let you and ME go'",
                    "WRONG: 'Between you and I' -> RIGHT: 'Between you and ME'",
                    "WRONG: 'This is a gift for you and I' -> RIGHT: 'This is a gift for you and ME'"
                ],
                shortcut: "EXAM RULE: After 'Let', always use OBJECTIVE. 'Let me', 'Let him', 'Let us' (never 'Let I' or 'Let we').",
                practiceProblems: [
                    "Error in: 'This secret is between you and he.' [CORRECT: between you and him]",
                    "Fill: The teacher asked _______ students to solve the problem. [ANSWER: the] (If the blank suggests pronouns: 'He gave the assignment to you and _____' -> ME)"
                ]
            }
        ]
    },

    english_grammar_verbs: {
        category: "English: Grammar Core",
        title: "Subject-Verb Agreement - Most Tested Topic",
        subtitle: "The 'One of the' Rule, 'Along with', 'Either/Or'",
        blocks: [
            {
                title: "1. The Critical 'One of the' Rule",
                text: "SINGULAR verb but PLURAL noun. However, if 'who/which' follows, verb matches the noun BEFORE 'who/which'.",
                examples: [
                    "WRONG: 'One of the boys is playing' - Actually this is CORRECT! Singular verb is right.",
                    "TRAP: 'One of the boys WHO are playing...' - Here, 'who' refers to 'boys', so plural verb 'are'",
                    "Structure: One of the + PLURAL NOUN + Singular Verb",
                    "WRONG: 'One of the student is missing' -> RIGHT: 'One of the STUDENTS IS missing'",
                    "WITH WHO: 'One of the students WHO ARE here' (Who = students, plural)"
                ],
                shortcut: "EXAM HACK: 'One of the' = Singular verb ALWAYS... UNLESS 'who/which/that' follows. Then check what it refers to.",
                practiceProblems: [
                    "Spot error: One of the girls are going to the party. [ERROR: 'are' -> 'is']",
                    "Fill: One of the teachers who _____ here is my guide. [ANSWER: 'are' (because 'who' refers to teachers, plural)]"
                ]
            },
            {
                title: "2. 'Along with', 'As well as', 'Together with'",
                text: "Verb agrees with the FIRST subject. What comes after these phrases is IGNORED for verb agreement.",
                examples: [
                    "WRONG: 'The captain along with the sailors were drowned' -> RIGHT: 'The captain along with the sailors WAS drowned'",
                    "The captain is the MAIN subject. The sailors are ADDITIONAL info. So, SINGULAR verb.",
                    "Similar phrases: With, Besides, In addition to, Not, Except",
                    "WRONG: 'The principal with 50 teachers are present' -> RIGHT: 'The principal with 50 teachers IS present'"
                ],
                shortcut: "EXAM RULE: Whatever is between commas or after 'along with' IS IGNORED. Look at the FIRST word only.",
                practiceProblems: [
                    "Correct: Mr. Sharma, as well as his colleagues, are attending. [SHOULD BE: is attending]",
                    "Identify: The book, together with the notebooks, are on the table. [ERROR: 'are' -> 'is']"
                ]
            },
            {
                title: "3. Either/Or, Neither/Nor - The Nearest Subject Rule",
                text: "Verb agrees with the NEAREST subject to the verb.",
                examples: [
                    "WRONG: 'Neither the students nor the teacher are present' -> RIGHT: 'Neither the students nor the teacher IS present'",
                    "Why? 'Teacher' (singular) is nearest to the verb, so singular verb.",
                    "BUT: 'Neither the teacher nor the students ARE present' -> This is CORRECT because 'students' is nearest.",
                    "PATTERN: Either...or, Neither...nor"
                ],
                shortcut: "POSITION MATTERS! Place the PLURAL noun last if you want plural verb. Otherwise, singular noun at end = singular verb.",
                practiceProblems: [
                    "Spot: Either the doctor or the nurses is examining the patient. [Is this wrong? Check nearest: 'nurses' is plural, so should be 'are']",
                    "Rearrange: To use singular verb, write: Either the nurses or the doctor is examining..."
                ]
            }
        ]
    },

    english_voice: {
        category: "English: Grammar",
        title: "Active & Passive Voice - Tense Never Changes!",
        subtitle: "Conversion Rules, Modals, Exceptions",
        blocks: [
            {
                title: "1. Basic Voice Conversion Formulas",
                text: "CRITICAL: In voice conversion, TENSE NEVER CHANGES. Only add 'be + V3'.",
                examples: [
                    "Present Simple: 'He writes a letter' -> 'A letter IS written by him' (Present Simple stays Present Simple)",
                    "Past Simple: 'He wrote a letter' -> 'A letter WAS written by him'",
                    "Present Continuous: 'He is writing' -> 'A letter IS BEING written by him'",
                    "Past Continuous: 'He was writing' -> 'A letter WAS BEING written by him'",
                    "Present Perfect: 'He has written' -> 'A letter HAS BEEN written by him'",
                    "WRONG: 'He is writing' -> 'A letter was written' (This changes tense!)"
                ],
                shortcut: "Voice = Add BE + V3. Tense keyword (is/was/has/had) stays THE SAME. Only the auxiliary changes to its appropriate form.",
                practiceProblems: [
                    "Convert: 'They have completed the work.' -> [ANSWER: 'The work has been completed by them.']",
                    "Spot error: Active: 'She is doing the work.' Passive: 'The work was done by her.' [ERROR: 'is' should be 'is being']"
                ]
            },
            {
                title: "2. Modals in Passive Voice",
                text: "Modals (can, should, must, would, might) + be + V3.",
                examples: [
                    "Active: 'He can solve this problem' -> Passive: 'This problem CAN BE solved by him'",
                    "Active: 'They should complete the work' -> Passive: 'The work SHOULD BE completed by them'",
                    "Active: 'You must follow the rules' -> Passive: 'The rules MUST BE followed by you'",
                    "Note: Modal + BE (not 'is' or 'was')"
                ]
            },
            {
                title: "3. IMPORTANT: Exceptions - No 'By' Used",
                text: "Some verbs use SPECIFIC prepositions instead of 'by' in passive voice.",
                examples: [
                    "Known TO (not 'by'): 'He is known TO me' (WRONG: 'known by me')",
                    "Surprised AT: 'I was surprised AT the news' (WRONG: 'surprised by the news')",
                    "Contained IN: 'The treasure is contained IN the box' (Not 'by the box')",
                    "Satisfied WITH: 'I am satisfied WITH the result' (Not 'satisfied by')",
                    "Interested IN: 'I am interested IN the subject'",
                    "Ashamed OF: 'He is ashamed OF his behavior'"
                ],
                shortcut: "EXAM HACK: 'Known' almost always uses 'TO', not 'BY'. If you see 'known by me', it's almost always WRONG.",
                practiceProblems: [
                    "Error: I was surprised by her attitude. [Could be correct depending on context, but 'surprised at' is more common]",
                    "Correct: He is well-known _____ his colleagues. [ANSWER: 'to']"
                ]
            }
        ]
    },

    english_tenses_comprehensive: {
        category: "English: Grammar",
        title: "All 12 Tenses - Complete Reference & Practice",
        subtitle: "Structure, Usage, Examples, Common Errors",
        blocks: [
            {
                title: "1. PRESENT TENSES - 4 Types",
                text: "Used for NOW situations, habits, general truths.",
                examples: [
                    "Simple Present (S + V1): 'He plays cricket daily.' Use: Habit/General truth/Fixed schedule. Signal: Always, usually, daily, every day.",
                    "Present Continuous (am/is/are + V-ing): 'He is playing cricket now.' Use: Action happening RIGHT NOW. Signal: Now, at this moment, still.",
                    "Present Perfect (have/has + V3): 'He has played cricket.' Use: Action completed recently, result in present. Signal: Ever, never, just, recently, already, yet.",
                    "Present Perfect Continuous (have + been + V-ing): 'He has been playing for 2 hours.' Use: Duration from past to present. Signal: For, since."
                ],
                shortcut: "EXAM MEMORY: Simple = Habit. Continuous = Now. Perfect = Just now. Perfect Continuous = Duration.",
                practiceProblems: [
                    "Fill: I _____ my homework since morning. [ANSWER: have been doing]",
                    "Error: He is going to the market every day. [Should be: He GOES to the market every day (Simple Present)]"
                ]
            },
            {
                title: "2. PAST TENSES - 4 Types",
                text: "Used for completed actions, historical events.",
                examples: [
                    "Simple Past (V2): 'He played cricket yesterday.' Use: Single action completed in definite past. Signal: Yesterday, last week, ago.",
                    "Past Continuous (was/were + V-ing): 'He was playing when I arrived.' Use: Ongoing action interrupted by another. Signal: When, while.",
                    "Past Perfect (had + V3): 'He had played before I came.' Use: Past of Past. Two actions in past; one happened BEFORE the other.",
                    "Past Perfect Continuous (had + been + V-ing): 'He had been playing for 2 hours when I came.' Use: Duration of action in past."
                ],
                shortcut: "Simple = Single action DONE. Continuous = Was DOING when something happened. Perfect = Action BEFORE another past action.",
                practiceProblems: [
                    "Fill: When I reached, they _____ the meeting. [ANSWER: had finished]",
                    "Spot error: He goes to the market yesterday. [ERROR: 'goes' -> 'went' (Simple Past, not Present)]"
                ]
            },
            {
                title: "3. FUTURE TENSES - 3 Types (Commonly used)",
                text: "Used for planned or predicted future actions.",
                examples: [
                    "Simple Future (will + V1): 'He will play cricket tomorrow.' Use: Simple future action. Signal: Tomorrow, next week, will.",
                    "Future Continuous (will be + V-ing): 'He will be playing at 5 PM tomorrow.' Use: Action ongoing at specific future time.",
                    "Future Perfect (will have + V3): 'He will have played before you come.' Use: Action to be completed by a certain future time."
                ]
            }
        ]
    },

    english_speech: {
        category: "English: Grammar",
        title: "Direct & Indirect Speech (Narration) - Complete Guide",
        subtitle: "Tense Changes, Pronoun Changes, Time/Place Changes",
        blocks: [
            {
                title: "1. TENSE CHANGING RULE",
                text: "If reporting verb is PAST, reported speech tense steps back ONE step into the past.",
                examples: [
                    "Direct: He said, 'I am reading.' -> Indirect: He said that he WAS reading (Present -> Past).",
                    "Direct: She said, 'I have completed the work.' -> Indirect: She said that she HAD completed the work (Present Perfect -> Past Perfect).",
                    "Direct: They said, 'We will go tomorrow.' -> Indirect: They said that they WOULD go the next day (Future -> Would).",
                    "EXCEPTION: If the statement is an eternal truth, tense doesn't change. 'He said, \"Water boils at 100°C.\"' -> 'He said that water boils at 100°C.' (General truth)."
                ],
                shortcut: "EXAM HACK: Reporting verb in past = Tense steps back. But universal truths/facts DON'T change.",
                practiceProblems: [
                    "Convert: Direct: 'I am happy,' he said. Indirect: [He said that he WAS happy.]",
                    "Error: She said, 'I will do it tomorrow.' Indirect: She said that she would do it today. [ERROR: 'today' -> 'the next day']"
                ]
            },
            {
                title: "2. PRONOUN & REFERENCE CHANGES",
                text: "First person becomes third person from reporter's perspective.",
                examples: [
                    "I, We -> He, She, They (depending on who spoke)",
                    "You -> Speaker or the listener (depends on context)",
                    "He, She, They -> Remain same if referring to third party"
                ]
            },
            {
                title: "3. TIME & PLACE CHANGES",
                text: "Relative time/place words change based on when reported.",
                examples: [
                    "Now -> Then",
                    "Today -> That day",
                    "Tomorrow -> The next day / The following day",
                    "Yesterday -> The day before",
                    "This -> That",
                    "Here -> There (sometimes)",
                    "Ago -> Before"
                ],
                shortcut: "EXAM MEMORY: PRESENT TIME WORDS -> PAST TIME WORDS in indirect speech."
            }
        ]
    },

    english_vocab_roots: {
        category: "English: Vocabulary",
        title: "Root Words & Etymology - Complete Mastery",
        subtitle: "Build Vocabulary Through Roots, Prefixes, Suffixes",
        blocks: [
            {
                title: "1. 'CIDE' ROOT (To Kill)",
                text: "Extremely common in Word Meaning/One-Word Substitution questions.",
                examples: [
                    "Patricide: Killing of one's father (Pater = Father)",
                    "Matricide: Killing of one's mother (Mater = Mother)",
                    "Fratricide: Killing of one's brother (Frater = Brother)",
                    "Sororicide: Killing of one's sister (Soror = Sister)",
                    "Uxoricide: Killing of one's wife (Uxor = Wife)",
                    "Regicide: Killing of a king (Rex = King)",
                    "Genocide: Killing of a race/people (Genus = Kind/Race)",
                    "Suicide: Self-killing (Sui = Self)",
                    "Homicide: Killing of a human (Homo = Human)",
                    "Pesticide: Killing of pests",
                    "Herbicide: Killing of herbs/plants"
                ],
                shortcut: "Combine Root: [Person/Thing] + CIDE (Kill) = Death of that person/thing."
            },
            {
                title: "2. 'CRACY/ARCHY' ROOT (Rule/Government)",
                text: "Very frequently tested in SSC.",
                examples: [
                    "Democracy: Rule by the people (Demos = People) - Most common in exams",
                    "Autocracy: Rule by one person (Auto = Self)",
                    "Oligarchy: Rule by few (Oligo = Few)",
                    "Plutocracy: Rule by the wealthy (Pluto = Wealth/Planet of wealth)",
                    "Theocracy: Rule by religious leaders (Theo = God)",
                    "Bureaucracy: Rule by officials/Bureau",
                    "Gerontocracy: Rule by old people (Geront = Old)",
                    "Meritocracy: Rule by merit",
                    "Mobocracy: Rule by the mob"
                ],
                shortcut: "Memory Trick: Pluto = Planet of wealth -> Plutocracy = wealthy rule. Theo = Theology -> Theocracy = God rule."
            },
            {
                title: "3. 'PHOBIA' ROOT (Fear)",
                text: "Common in vocabulary sections.",
                examples: [
                    "Claustrophobia: Fear of closed/narrow spaces (Claustra = Enclosed)",
                    "Acrophobia: Fear of heights (Acron = Peak/Height)",
                    "Arachnophobia: Fear of spiders (Arachne = Spider)",
                    "Cynophobia: Fear of dogs",
                    "Hydrophobia: Fear of water (Also symptom of rabies)",
                    "Nyctophobia: Fear of darkness (Nyx = Night)",
                    "Xenophobia: Fear of foreigners (Xeno = Foreign)",
                    "Thanatophobia: Fear of death (Thanatos = Death)",
                    "Trypophobia: Fear of holes"
                ]
            },
            {
                title: "4. 'MORPH' ROOT (Shape/Form)",
                text: "Morphology = Study of form.",
                examples: [
                    "Metamorphosis: Change of form (Meta = Change)",
                    "Polymorphic: Many forms (Poly = Many)",
                    "Anthropomorphic: Human form (Anthropo = Human)",
                    "Amorphous: No definite form (A = Without)"
                ]
            }
        ]
    },

    english_idioms_phrases: {
        category: "English: Vocabulary",
        title: "Top 50 Idioms & Phrases - Complete Reference",
        subtitle: "Contextual Meanings & Usage",
        blocks: [
            {
                title: "1. Frequently Asked Idioms (Group 1)",
                text: "Do NOT translate idioms word-for-word. They have METAPHORICAL meanings.",
                examples: [
                    "To bite the dust: To be defeated or die. Example: 'After a long fight, the army had to bite the dust.'",
                    "A wild goose chase: A useless or hopeless search. Example: 'Looking for that lost document was a wild goose chase.'",
                    "Through thick and thin: Under all circumstances, through good and bad. Example: 'He stood by me through thick and thin.'",
                    "Once in a blue moon: Very rarely. Example: 'He visits his hometown once in a blue moon.'",
                    "To add fuel to the fire: To make a bad situation worse. Example: 'Your comment will only add fuel to the fire.'"
                ],
                shortcut: "EXAM HACK: If an option is the LITERAL meaning of the idiom, ELIMINATE IT. The answer is always metaphorical/figurative."
            },
            {
                title: "2. Frequently Asked Idioms (Group 2)",
                text: "More commonly tested phrases.",
                examples: [
                    "To let the cat out of the bag: To reveal a secret. Example: 'Don't let the cat out of the bag about the surprise.'",
                    "Raining cats and dogs: Heavy rain. Example: 'It's raining cats and dogs outside.'",
                    "A piece of cake: Something very easy. Example: 'The exam was a piece of cake for him.'",
                    "Break a leg: Good luck (especially before a performance). Example: 'Break a leg at the concert tomorrow!'",
                    "Hit the sack: To go to bed. Example: 'I'm tired; let me hit the sack.'",
                    "Under the weather: Feeling sick. Example: 'I'm under the weather today.'"
                ]
            }
        ]
    },

    english_cloze_passage: {
        category: "English: Comprehension",
        title: "Cloze Test & Reading Comprehension - Complete Strategy",
        subtitle: "Elimination Technique, Contextual Filling",
        blocks: [
            {
                title: "1. CLOZE TEST GOLDEN RULES",
                text: "Never fill the first blank without reading the ENTIRE passage.",
                examples: [
                    "Strategy 1: Read the entire passage ONCE to understand tone (Positive/Negative/Informative/Sarcastic).",
                    "Strategy 2: Check grammar before and after each blank. Example: 'has/have/had + ___' -> Need V3 (Past Participle)",
                    "Strategy 3: Look for collocation/fixed phrases. Example: 'accused OF' (not 'accused BY'), 'dependent ON', 'obsessed WITH'",
                    "Strategy 4: Eliminate obviously wrong options (tone mismatch, grammatical error, contextual error)",
                    "Strategy 5: Usually 2-3 options are contextually wrong, 1 is grammatically incorrect, 1 is correct"
                ],
                shortcut: "EXAM STRATEGY: Usually, only TWO options are viable after reading context. Then use grammar to decide between them."
            },
            {
                title: "2. READING COMPREHENSION - Best Approach",
                text: "Read strategically, not like a novel.",
                examples: [
                    "Step 1: READ QUESTIONS FIRST. This tells your brain what to look for.",
                    "Step 2: Scan passage for keywords that match the question.",
                    "Step 3: Re-read the specific paragraph containing those keywords.",
                    "Step 4: For 'Main Idea' questions, read first and last paragraphs carefully.",
                    "Step 5: For 'Author's Tone' questions, look for adjectives and emotional words."
                ],
                shortcut: "TIMING HACK: Read the passage title + first paragraph + last paragraph + questions to understand context in 2 minutes."
            },
            {
                title: "3. TRUE/FALSE BASED ON PASSAGE",
                text: "Answer ONLY based on explicit information in passage.",
                examples: [
                    "WRONG APPROACH: 'I think this is true' OR 'This could be true' OR 'This is logical'",
                    "RIGHT APPROACH: 'The passage explicitly states...'. If not stated, answer is FALSE or 'Not given'.",
                    "TRAP: A statement might be true in real life but FALSE in the passage context."
                ],
                shortcut: "EXAM RULE: For True/False/Not Given, always find the EXACT line in passage. If you can't quote it, it's likely FALSE or NOT GIVEN."
            }
        ]
    },

    english_error_spotting: {
        category: "English: Grammar",
        title: "Error Spotting - Complete Strategy & Common Errors",
        subtitle: "Sentence Correction Techniques",
        blocks: [
            {
                title: "1. TOP 10 ERRORS TO SPOT IN SSC",
                text: "These errors appear 80% of the time.",
                examples: [
                    "Error 1: Subject-Verb Disagreement (One of the boys are playing - WRONG)",
                    "Error 2: Tense Inconsistency (He goes to market and bought fruits - MIXED TENSE)",
                    "Error 3: Wrong Preposition (Good in, bad in - WRONG; good at, bad at - RIGHT)",
                    "Error 4: Pronoun Case (Let you and I go - WRONG; Let you and ME go - RIGHT)",
                    "Error 5: Articles (He is engineer - WRONG; He is an engineer - RIGHT)",
                    "Error 6: Wrong Verb Form (He prefer to study - WRONG; He prefers to study - RIGHT)",
                    "Error 7: Parallel Structure (Running and to jump - WRONG; Running and jumping - RIGHT)",
                    "Error 8: Double negatives (I don't know nothing - WRONG; I don't know anything - RIGHT)",
                    "Error 9: Misplaced modifier (Running in the garden, a dog was seen - MISPLACED)",
                    "Error 10: Comparative form (He is more faster - WRONG; He is faster - RIGHT)"
                ],
                shortcut: "EXAM HACK: Most errors are one of these 10 types. Train yourself to spot them instantly in 5 seconds per sentence."
            }
        ]
    },

    english_reading_comprehension: {
        category: "English: Comprehension",
        title: "Reading Comprehension: Advanced Strategies",
        subtitle: "Main Idea, Tone, Inference & Detail Questions",
        blocks: [
            {
                title: "1. Types of Questions & Strategies",
                text: "Understanding what the examiner is asking.",
                examples: [
                    "Direct Questions: Found explicitly in the text. Strategy: Keyword scanning.",
                    "Inference Questions: 'What can be inferred...' Strategy: Look for logical conclusions not explicitly stated.",
                    "Vocabulary-in-context: 'What does X mean in paragraph 2?' Strategy: Read 2 lines before and after.",
                    "Title/Main Theme: Strategy: First and last sentences of the passage usually hold the answer."
                ],
                shortcut: "DON'T read the passage first! Read the questions first to know what information is 'expensive' and what is 'cheap'."
            },
            {
                title: "2. The Tone of the Author",
                text: "Common tones in SSC passages.",
                examples: [
                    "Sarcastic: Mocking or ironical.",
                    "Didactic: Intended to teach or moralize.",
                    "Dogmatic: Asserting opinions in an arrogant way.",
                    "Laudatory: Expressing praise.",
                    "Objective: Factual and unbiased."
                ],
                shortcut: "Tone is determined by ADJECTIVES. If author uses 'disastrous', tone is negative/critical."
            }
        ]
    },

    english_cloze_parajumble: {
        category: "English: Practice",
        title: "Cloze Test and Para-Jumbles",
        subtitle: "Context Clues, Connectors, and Sequence Strategy",
        blocks: [
            {
                title: "1. Cloze Test Strategy",
                text: "Solve blanks using grammar + meaning + tone, not vocabulary alone.",
                examples: [
                    "Check tense consistency across sentence before filling verb blanks.",
                    "Use article logic: 'a' before consonant sound, 'an' before vowel sound.",
                    "Preposition pairs: interested in, depend on, good at, capable of.",
                    "Connector clues: however (contrast), therefore (result), moreover (addition)."
                ],
                shortcut: "First pass: fill easy grammar blanks. Second pass: solve vocabulary blanks using paragraph tone."
            },
            {
                title: "2. Para-Jumble Sequencing",
                text: "Find opening and closing lines first, then link middle sentences by flow.",
                examples: [
                    "Opening sentence usually introduces topic and has no backward reference.",
                    "Sentences starting with pronouns (this, that, they, such) are rarely first.",
                    "Look for mandatory pairs: cause-effect, question-answer, statement-example.",
                    "Chronological signals: first, then, later, finally."
                ],
                shortcut: "Identify transition words and noun-pronoun links to build anchor pairs before final ordering."
            },
            {
                title: "3. High-Frequency Trap Patterns",
                text: "Common traps are close-option synonyms and grammatically correct but context-wrong choices.",
                examples: [
                    "A word may fit grammar but fail tone (positive vs negative context).",
                    "In para-jumbles, a sentence with specific details usually cannot open the paragraph.",
                    "If two options look right, choose the one matching the central theme of surrounding lines."
                ],
                shortcut: "When stuck between two options, re-read one line before and after the blank for semantic fit."
            }
        ]
    },

    english_sentence_improvement: {
        category: "English: Tier 2 Practice",
        title: "Sentence Improvement and Error Correction",
        subtitle: "Grammar precision, conciseness, and exam elimination strategy",
        blocks: [
            {
                title: "1. Grammar-First Improvement Approach",
                text: "Sentence improvement questions reward strict grammar control more than vocabulary flair.",
                examples: [
                    "Check verb tense and subject-verb agreement first.",
                    "Then check pronoun case and reference clarity.",
                    "Finally evaluate preposition and article usage."
                ],
                shortcut: "Eliminate options with obvious tense/agreement errors before semantic comparison.",
                practiceProblems: [
                    "He do not knows the answer. Improve the underlined part.",
                    "Neither of the boys were present. Improve the underlined part."
                ],
                miniQuiz: [
                    { q: "Correct form: Neither of the players ___ selected.", answer: "was", explanation: "'Neither' is singular in standard exam grammar." },
                    { q: "Choose better sentence: She is senior than me / She is senior to me", answer: "She is senior to me", explanation: "Senior is followed by 'to', not 'than'." }
                ]
            },
            {
                title: "2. Concision and Redundancy Removal",
                text: "Many options are grammatically correct but wordy; SSC prefers concise correctness.",
                examples: [
                    "Return back -> return",
                    "Repeat again -> repeat",
                    "Discuss about -> discuss",
                    "More better -> better"
                ],
                shortcut: "When two options are both grammatical, choose the shorter and sharper expression.",
                practiceProblems: [
                    "He returned back to home late at night. Improve.",
                    "We discussed about the proposal yesterday. Improve."
                ],
                miniQuiz: [
                    { q: "Best correction: The meeting was postponed to next week.", answer: "The meeting was postponed until next week", explanation: "'Until next week' is clearer in time-bound expression." },
                    { q: "Correct expression: very unique / unique", answer: "unique", explanation: "Unique is absolute and does not usually take intensifiers." }
                ]
            },
            {
                title: "3. Modifier Placement and Parallelism",
                text: "Misplaced modifiers and broken parallel structure are common traps.",
                examples: [
                    "Incorrect: Walking down the road, the tree looked beautiful.",
                    "Correct: Walking down the road, I found the tree beautiful.",
                    "Incorrect: She likes singing, dancing, and to paint.",
                    "Correct: She likes singing, dancing, and painting."
                ],
                shortcut: "Keep list items in the same grammatical form (all verbs in -ing or all infinitives).",
                practiceProblems: [
                    "Correct the parallel error: He likes to swim, running, and to cycle.",
                    "Correct modifier placement in: Covered with dust, I cleaned the old books."
                ],
                miniQuiz: [
                    { q: "Which is parallel? to read, writing, and to speak / reading, writing, and speaking", answer: "reading, writing, and speaking", explanation: "All list elements follow same form." },
                    { q: "Misplaced modifier usually affects what?", answer: "Clarity of meaning", explanation: "Modifier may attach to wrong noun, changing meaning." }
                ]
            }
        ]
    },

    english_word_power_revision: {
        category: "English: Tier 2 Vocabulary",
        title: "Word Power Revision Capsules",
        subtitle: "Confusables, one-word substitutions, and phrase precision",
        blocks: [
            {
                title: "1. High-Frequency Confusables",
                text: "These pairs are repeatedly asked in vocabulary and sentence correction sections.",
                examples: [
                    "Affect (verb) vs Effect (noun)",
                    "Accept (receive) vs Except (exclude)",
                    "Principal (head/main) vs Principle (rule)",
                    "Stationary (still) vs Stationery (writing materials)"
                ],
                shortcut: "Link words with memory hooks: principal ends with 'pal' (your school pal).",
                practiceProblems: [
                    "Choose correct: The new policy had a positive _____ on exports.",
                    "Choose correct: All students were present _____ Rohan."
                ],
                miniQuiz: [
                    { q: "Which word means 'main or chief'?", answer: "Principal", explanation: "Principle means a rule or doctrine." },
                    { q: "Which one is writing paper material?", answer: "Stationery", explanation: "Stationary means not moving." }
                ]
            },
            {
                title: "2. One-Word Substitution (Exam Core)",
                text: "Replace long definitions with exact single-word expressions.",
                examples: [
                    "One who writes dictionary -> Lexicographer",
                    "One who studies plants -> Botanist",
                    "Government by the people -> Democracy",
                    "One who cannot read/write -> Illiterate"
                ],
                shortcut: "Break substitutions by domain: profession, government, behavior, medicine.",
                practiceProblems: [
                    "One who can speak many languages.",
                    "A person who hates mankind."
                ],
                miniQuiz: [
                    { q: "One who speaks many languages is called?", answer: "Polyglot", explanation: "Poly = many, glot = tongue/language." },
                    { q: "Hatred of humankind is?", answer: "Misanthropy", explanation: "A misanthrope dislikes humankind." }
                ]
            },
            {
                title: "3. Phrasal Verb Accuracy",
                text: "Phrasal verb meaning often differs from literal verb meaning.",
                examples: [
                    "Call off = cancel",
                    "Bring up = raise (a topic/child)",
                    "Look into = investigate",
                    "Put up with = tolerate"
                ],
                shortcut: "Treat phrasal verbs as fixed units; changing preposition usually changes meaning.",
                practiceProblems: [
                    "The event was called _____ due to rain.",
                    "Police will look _____ the matter."
                ],
                miniQuiz: [
                    { q: "'Put up with' means?", answer: "Tolerate", explanation: "It expresses endurance of unpleasant situations." },
                    { q: "'Call off the strike' means?", answer: "Cancel the strike", explanation: "Call off is a cancellation phrasal verb." }
                ]
            }
        ]
    },

    english_para_completion: {
        category: "English: Tier 2 Practice",
        title: "Paragraph Completion and Coherence",
        subtitle: "Sentence placement, logical flow, and transition matching",
        blocks: [
            {
                title: "1. Coherence Signals",
                text: "Paragraph completion requires meaning continuity and transition alignment.",
                examples: [
                    "Contrast markers: however, although, nevertheless",
                    "Result markers: therefore, thus, hence",
                    "Addition markers: moreover, furthermore, also",
                    "Example markers: for instance, for example"
                ],
                shortcut: "Pick option whose opening connector logically matches previous sentence tone.",
                practiceProblems: [
                    "Select best continuation after a contrasting statement.",
                    "Choose sentence that keeps formal tone in academic paragraph."
                ],
                miniQuiz: [
                    { q: "Best connector for contrast?", answer: "However", explanation: "However introduces opposing idea." },
                    { q: "Best connector for consequence?", answer: "Therefore", explanation: "It indicates logical result." }
                ]
            },
            {
                title: "2. Contextual Fit vs Grammatical Fit",
                text: "Many options are grammatical, but only one matches context progression.",
                examples: [
                    "Avoid options that repeat same idea without progression",
                    "Reject abrupt topic shifts in formal passage",
                    "Check pronoun references (this, these, such) for clear antecedent"
                ],
                shortcut: "Read one sentence before and one after blank; choose option that links both naturally.",
                practiceProblems: [
                    "Find line that best connects cause and policy recommendation.",
                    "Choose sentence that maintains neutral analytical tone."
                ],
                miniQuiz: [
                    { q: "Primary test in paragraph completion?", answer: "Logical continuity", explanation: "Grammar alone is insufficient." },
                    { q: "Pronoun without clear reference indicates?", answer: "Weak option", explanation: "Ambiguous antecedent breaks coherence." }
                ]
            }
        ]
    },

    english_advanced_reading: {
        category: "English: Tier 2 Comprehension",
        title: "Advanced Reading and Inference",
        subtitle: "Author intent, assumptions, and critical interpretation",
        blocks: [
            {
                title: "1. Inference vs Fact Distinction",
                text: "Fact is directly stated; inference is logically derived from clues.",
                examples: [
                    "Fact question asks what passage explicitly states",
                    "Inference question asks what follows logically",
                    "Assumption question asks unstated belief supporting argument"
                ],
                shortcut: "For inference, choose option with strongest support and least extra assumption.",
                practiceProblems: [
                    "Identify whether statement is fact or inference.",
                    "Select assumption behind policy argument in passage."
                ],
                miniQuiz: [
                    { q: "If line is directly present in passage, question type is?", answer: "Fact-based", explanation: "Directly retrievable information." },
                    { q: "Inference should be?", answer: "Supported but not explicitly stated", explanation: "Derived logically from text." }
                ]
            },
            {
                title: "2. Tone and Bias Detection",
                text: "Tone recognition helps eliminate close options in advanced RC.",
                examples: [
                    "Objective tone uses neutral and evidence-based language",
                    "Critical tone highlights flaws or limitations",
                    "Optimistic tone emphasizes positive outcomes",
                    "Skeptical tone questions certainty"
                ],
                shortcut: "Track adjectives/adverbs to detect emotional charge and author stance.",
                practiceProblems: [
                    "Determine tone from policy editorial excerpt.",
                    "Identify if passage is descriptive, argumentative, or analytical."
                ],
                miniQuiz: [
                    { q: "Tone with doubt and caution is?", answer: "Skeptical", explanation: "It questions validity or certainty." },
                    { q: "Tone in balanced data-led writing is?", answer: "Objective", explanation: "Minimal emotional coloring." }
                ]
            }
        ]
    },

    english_editing_omission: {
        category: "English: Tier 2 Editing",
        title: "Editing and Omission Drills",
        subtitle: "Error correction in short passages and line-by-line grammar repair",
        blocks: [
            {
                title: "1. Editing Workflow",
                text: "Editing passages should be solved in layers: grammar, vocabulary, then coherence.",
                examples: [
                    "Check determiners and articles first",
                    "Then verify verb tense consistency",
                    "Then inspect pronoun references",
                    "Finally refine prepositions and collocations"
                ],
                shortcut: "Do not over-correct; one line usually has one dominant error.",
                practiceProblems: [
                    "Correct article-preposition errors in a 5-line passage.",
                    "Find omission in subject-verb agreement sentence."
                ],
                miniQuiz: [
                    { q: "Best first check in editing set?", answer: "Subject-verb agreement and tense", explanation: "Most frequent high-impact errors." },
                    { q: "Can one line have multiple possible rewrites?", answer: "Yes, but exam expects one best correction", explanation: "Choose minimal and grammatically exact fix." }
                ]
            },
            {
                title: "2. Omission Pattern Recognition",
                text: "Omission questions usually drop articles, prepositions, auxiliaries, or pronouns.",
                examples: [
                    "She is best candidate -> missing article 'the'",
                    "He insisted go -> missing preposition 'on' and gerund form",
                    "They not ready -> missing auxiliary 'are'"
                ],
                shortcut: "Read sentence aloud mentally; missing function words usually reveal rhythm break.",
                practiceProblems: [
                    "Identify missing word in each line of given passage.",
                    "Insert omitted auxiliary in negative sentence."
                ],
                miniQuiz: [
                    { q: "In 'He interested mathematics', omitted preposition?", answer: "in", explanation: "Standard collocation is interested in." },
                    { q: "In 'They going now', omitted auxiliary?", answer: "are", explanation: "Present continuous requires be + V-ing." }
                ]
            }
        ]
    }
};
