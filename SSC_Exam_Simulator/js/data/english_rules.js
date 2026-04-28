const englishData = {
    // CATEGORY: GRAMMAR
    english_grammar_nouns: {
        category: "English: Grammar Core",
        title: "Parts of Speech: Nouns & Pronouns",
        subtitle: "Exhaustive Error Spotting Rules",
        blocks: [
            {
                title: "1. Nouns: Uncountable Nouns",
                text: "Certain nouns are ALWAYS uncountable. They cannot take 's/es' and always take a singular verb.",
                examples: [
                    "Scenery, Poetry, Furniture, Advice, Information, Hair, Business, Mischief, Bread, Stationery.",
                    "Incorrect: He gave me many advices.",
                    "Correct: He gave me some advice (or pieces of advice).",
                    "Incorrect: The sceneries of Kashmir are beautiful.",
                    "Correct: The scenery of Kashmir is beautiful."
                ],
                shortcut: "Never use 'A/An' before these nouns. Use 'A piece of' or 'A lot of'."
            },
            {
                title: "2. Nouns: Always Plural",
                text: "Some nouns exist only in plural form and take a plural verb.",
                examples: [
                    "Scissors, Tongs, Pincers, Spectacles, Goggles, Binoculars, Pants, Trousers, Alms, Archives.",
                    "Incorrect: Where is my scissors?",
                    "Correct: Where are my scissors?"
                ],
                shortcut: "If it has two identical parts (like pants or scissors), it's plural. To make it singular, use 'A pair of'."
            },
            {
                title: "3. Pronouns: Order of Persons",
                text: "When 1st (I/We), 2nd (You), and 3rd (He/She/They) persons are used together.",
                examples: [
                    "Positive Context (Rule 231): You, He, and I are going to the party.",
                    "Negative/Guilt Context (Rule 123): I, You, and He have committed a crime.",
                    "Plural Pronouns (Rule 123): We, You, and They will play tomorrow."
                ],
                shortcut: "Always use 231 for normal sentences. Only use 123 if confessing a mistake or using plural pronouns (We)."
            },
            {
                title: "4. Pronouns: Objective Case",
                text: "After prepositions and certain verbs, always use the objective case (me, him, her, them).",
                examples: [
                    "Verbs: Let, Like, Between, But, Except.",
                    "Incorrect: Let you and I go there.",
                    "Correct: Let you and ME go there.",
                    "Incorrect: Between you and I, he is wrong.",
                    "Correct: Between you and ME, he is wrong."
                ],
                shortcut: "'Let' + Objective Case. Never 'Let I' or 'Let we'."
            }
        ]
    },
    english_grammar_verbs: {
        category: "English: Grammar Core",
        title: "Subject-Verb Agreement",
        subtitle: "The Most Tested Topic",
        blocks: [
            {
                title: "1. The 'One of the' Rule",
                text: "The phrase 'one of the' is always followed by a PLURAL noun but a SINGULAR verb.",
                examples: [
                    "Incorrect: One of the boy is missing.",
                    "Correct: One of the boys IS missing."
                ],
                shortcut: "One of the + Plural Noun + Singular Verb. HOWEVER, if 'who/which/that' comes after the noun: One of the boys WHO ARE missing (Verb matches the noun just before 'who')."
            },
            {
                title: "2. As well as / Along with",
                text: "When subjects are joined by these phrases, the verb agrees with the FIRST subject.",
                examples: [
                    "Phrases: as well as, with, along with, together with, and not, in addition to.",
                    "Incorrect: The captain along with the sailors were drowned.",
                    "Correct: The captain along with the sailors WAS drowned."
                ],
                shortcut: "Ignore whatever is between commas or after 'along with'. Just look at the very first word."
            },
            {
                title: "3. Either/Or, Neither/Nor",
                text: "When subjects are joined by these, the verb agrees with the NEAREST subject.",
                examples: [
                    "Incorrect: Neither the students nor the teacher are present.",
                    "Correct: Neither the students nor the teacher IS present.",
                    "Correct: Neither the teacher nor the students ARE present."
                ],
                shortcut: "Look at the noun exactly next to the verb. If it's plural, verb is plural. If singular, verb is singular."
            }
        ]
    },
    english_voice: {
        category: "English: Grammar Core",
        title: "Active & Passive Voice: Deep Dive",
        subtitle: "Direct Rule Conversions & Exceptions",
        blocks: [
            {
                title: "1. Basic Tense Conversion Rules",
                text: "The object of the active sentence becomes the subject of the passive sentence.",
                examples: [
                    "Present Simple (V1) -> is/am/are + V3",
                    "Past Simple (V2) -> was/were + V3",
                    "Present Continuous (is + V-ing) -> is + being + V3",
                    "Past Continuous (was + V-ing) -> was + being + V3",
                    "Present Perfect (has + V3) -> has + been + V3"
                ],
                shortcut: "Voice conversions NEVER change the tense entirely (e.g., Present doesn't become Past). If options change the tense, eliminate them instantly!"
            },
            {
                title: "2. Modals and Imperative Sentences",
                text: "Sentences with commands, requests, or modal verbs.",
                examples: [
                    "Modals (can/should/must + V1) -> can/should/must + be + V3",
                    "Command (Open the door) -> Let the door be opened.",
                    "Request (Please help me) -> You are requested to help me."
                ],
                shortcut: "For 'Let' sentences: Let + Object + be + V3."
            },
            {
                title: "3. Important Exceptions (No 'By')",
                text: "Some verbs take fixed prepositions instead of 'by' in passive voice.",
                examples: [
                    "Known TO (not known by)",
                    "Surprised AT (not surprised by)",
                    "Contained IN (not contained by)",
                    "Satisfied WITH (not satisfied by)"
                ],
                shortcut: "SSC loves 'Known'. Active: I know him. Passive: He is known TO me (If you mark 'known by me', it is wrong)."
            }
        ]
    },
    english_speech: {
        category: "English: Grammar Core",
        title: "Direct & Indirect Speech: Deep Dive",
        subtitle: "Narration Rules",
        blocks: [
            {
                title: "1. Tense Changing Rules",
                text: "If the reporting verb is in the PAST tense, the tense of the reported speech changes.",
                examples: [
                    "Present Simple -> Past Simple",
                    "Present Continuous -> Past Continuous",
                    "Present Perfect -> Past Perfect",
                    "Past Simple -> Past Perfect"
                ],
                shortcut: "Unlike Voice, Narration ALWAYS steps back one tense into the past if the reporting verb is 'said'. 'Now' becomes 'Then', 'Today' becomes 'That day'."
            }
        ]
    },
    // CATEGORY: VOCABULARY
    english_vocab: {
        category: "English: Vocabulary",
        title: "High-Frequency Vocab & Roots: Deep Dive",
        subtitle: "Most repeated in SSC CGL",
        blocks: [
            {
                title: "1. Root Word: 'Cide' (To kill)",
                text: "Many words end with 'cide', indicating killing.",
                examples: [
                    "Patricide: Killing of one's father.",
                    "Matricide: Killing of one's mother.",
                    "Fratricide: Killing of one's brother.",
                    "Uxoricide: Killing of one's wife."
                ],
                shortcut: "Memorize root words. 'Cide' = kill, 'Somn' = sleep (Somnambulist: sleepwalker), 'Loqu' = talk (Loquacious: talkative)."
            }
        ]
    },
    english_idioms: {
        category: "English: Vocabulary",
        title: "Top 50 Idioms & Phrases: Deep Dive",
        subtitle: "Contextual Meanings",
        blocks: [
            {
                title: "1. Frequent Idioms List 1",
                text: "Do not translate idioms literally.",
                examples: [
                    "To bite the dust: To be defeated or die.",
                    "A wild goose chase: A useless search.",
                    "Through thick and thin: Under all circumstances.",
                    "Once in a blue moon: Very rarely.",
                    "To add fuel to the fire: To make a bad situation worse."
                ],
                shortcut: "In MCQ options, eliminate the choice that translates the idiom literally word-for-word. The answer is almost always metaphorical."
            }
        ]
    },
    // CATEGORY: COMPREHENSION & CLOZE
    english_cloze: {
        category: "English: Comprehension",
        title: "Cloze Test & Passage: Deep Dive",
        subtitle: "Contextual Filling & Reading",
        blocks: [
            {
                title: "1. Cloze Test Golden Rules",
                text: "Never fill the first blank without reading the entire paragraph.",
                examples: [
                    "Read the whole passage first to get the TONE (Positive/Negative/Informative).",
                    "Check the grammar before and after the blank. If the blank is after 'has/have/had', you need a V3 verb.",
                    "Look for prepositional collocations (e.g., 'accused OF', 'fond OF', 'prevent FROM')."
                ],
                shortcut: "Elimination strategy: Usually 2 options are completely out of context. 1 option is grammatically incorrect. The remaining 1 is the answer."
            },
            {
                title: "2. Reading Comprehension Tricks",
                text: "Don't read the passage like a novel. Read like a detective.",
                examples: [
                    "Always read the QUESTIONS first. This tells your brain what to look for.",
                    "Identify keywords in the question and scan the passage for those exact keywords.",
                    "Be careful with questions asking for 'Central Theme' or 'Author's Tone'—these require understanding the first and last paragraphs."
                ],
                shortcut: "For 'True/False' questions based on the passage, the answer MUST be explicitly stated. If you have to assume it, it's False or 'Not Given'."
            }
        ]
    },
    // CATEGORY: SPELLINGS
    english_spellings: {
        category: "English: Vocabulary",
        title: "Spelling Rules: Deep Dive",
        subtitle: "Avoiding common mis-spelt words",
        blocks: [
            {
                title: "1. The 'I before E' Rule",
                text: "I before E, except after C, or when sounding like A (as in neighbor and weigh).",
                examples: [
                    "Receive, Deceive, Ceiling (After C, it is EI).",
                    "Believe, Chief, Grief (No C, it is IE).",
                    "Exceptions: Weird, Seize, Protein."
                ],
                shortcut: "Write down the word on your rough sheet. Muscle memory often kicks in and the correct spelling will 'look' right."
            }
        ]
    },
    // CATEGORY: ADVANCED GRAMMAR
    english_advanced: {
        category: "English: Grammar Advanced",
        title: "Voice & Narration: Deep Dive",
        subtitle: "Active/Passive and Direct/Indirect",
        blocks: [
            {
                title: "1. Active/Passive Voice",
                text: "The focus shifts from the 'doer' to the 'action'. Tense NEVER changes in voice.",
                examples: [
                    "Active: He writes a letter. (Present Simple)",
                    "Passive: A letter is written by him. (Present Simple: is + V3)"
                ],
                shortcut: "Voice conversion requires a V3 (Past Participle) form. Look for 'be + V3'."
            },
            {
                title: "2. Direct/Indirect Narration",
                text: "Reporting what someone said. Tense USUALLY changes to the past.",
                examples: [
                    "Direct: He said, 'I am reading.' (Present Cont.)",
                    "Indirect: He said that he was reading. (Past Cont.)"
                ],
                shortcut: "Narration Trick: 'Now' changes to 'then', 'today' to 'that day', 'tomorrow' to 'the next day'."
            }
        ]
    },
    // CATEGORY: VOCABULARY EXPANSION
    english_vocab_adv: {
        category: "English: Vocabulary",
        title: "Synonyms, Antonyms & Roots: Deep Dive",
        subtitle: "Word Power Mastery for Tier 1 & 2",
        blocks: [
            {
                title: "1. Etymology: Positive/Negative Roots",
                text: "Don't memorize blindly. Use Root Words, Prefixes, and Suffixes.",
                examples: [
                    "Root 'Bene/Eu' (Good): Benefactor, Benevolent, Eulogy (good speech), Euphony (good sound).",
                    "Root 'Mal/Dys' (Bad): Malicious, Dysfunctional, Dyspepsia.",
                    "Prefix 'A/An' (Without): Apathy (without feeling), Anarchy (without rule)."
                ],
                shortcut: "If you don't know the word, look at its prefix tone. Eliminate options that don't match the tone."
            },
            {
                title: "2. The 'Cracy/Archy' Root (Rule/Government)",
                text: "Extremely common in One-Word Substitution.",
                examples: [
                    "Democracy: Rule by people (Demos).",
                    "Autocracy: Rule by one (Auto).",
                    "Oligarchy: Rule by a few.",
                    "Plutocracy: Rule by the wealthy.",
                    "Theocracy: Rule by religious leaders (Theo = God).",
                    "Gerontocracy: Rule by old people."
                ],
                shortcut: "Pluto is a wealthy planet -> Plutocracy (wealthy). Theo means God (like Theology) -> Theocracy."
            },
            {
                title: "3. The 'Phobia' Root (Fear)",
                text: "Fears and phobias.",
                examples: [
                    "Claustrophobia: Fear of closed spaces.",
                    "Acrophobia: Fear of heights.",
                    "Hydrophobia: Fear of water (Rabies).",
                    "Nyctophobia: Fear of darkness."
                ],
                shortcut: "Acrobat works at a height -> Acrophobia."
            },
            {
                title: "4. The 'Cide' Root (Killing)",
                text: "Murder/Killing words.",
                examples: [
                    "Patricide (Father), Matricide (Mother), Fratricide (Brother), Sororicide (Sister).",
                    "Uxoricide (Wife), Mariticide (Husband).",
                    "Regicide (King), Genocide (Whole race)."
                ],
                shortcut: "Sorority girls = Sisters -> Sororicide. Regal = King -> Regicide."
            }
        ]
    },
    // CATEGORY: SENTENCE STRUCTURE
    english_shuffling: {
        category: "English: Comprehension",
        title: "Sentence Shuffling (PQRS): Deep Dive",
        subtitle: "Jumbled Sentences Tricks",
        blocks: [
            {
                title: "1. The PQRS Strategy",
                text: "Never try to read all 4 sentences first. Look for mandatory pairs.",
                examples: [
                    "Pronoun Rule: 'He/She/It' must come after the noun they refer to.",
                    "Conjunction Rule: Sentences starting with 'However', 'But', 'Therefore' are usually not the first sentence."
                ],
                shortcut: "Find the FIRST sentence. Look at the options. If only two options start with that sentence, you instantly eliminated 50% of the choices."
            }
        ]
    }
};
