const englishData = {
    // CATEGORY: GRAMMAR
    english_grammar_nouns: {
        category: "English: Grammar Core",
        title: "Parts of Speech: Nouns & Pronouns: Deep Dive & Speed Hacks",
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
        title: "Subject-Verb Agreement: Deep Dive & Speed Hacks",
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
        title: "Active & Passive Voice: Deep Dive & Speed Hacks",
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
        title: "Direct & Indirect Speech: Deep Dive & Speed Hacks",
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
        title: "High-Frequency Vocab & Roots: Deep Dive & Speed Hacks",
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
        title: "Top 50 Idioms & Phrases: Deep Dive & Speed Hacks",
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
        title: "Cloze Test & Passage: Deep Dive & Speed Hacks",
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
        title: "Spelling Rules: Deep Dive & Speed Hacks",
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
        title: "Voice & Narration: Deep Dive & Speed Hacks",
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
        title: "Synonyms, Antonyms & Roots: Deep Dive & Speed Hacks",
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
        title: "Sentence Shuffling (PQRS): Deep Dive & Speed Hacks",
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
    },
    english_tenses_comprehensive: {
        category: "English: Grammar",
        title: "Tenses Comprehensive Deep Dive",
        subtitle: "All 12 Tenses with Structures, Uses, and Examples",
        blocks: [
            {
                title: "1. Present Tenses (4 types)",
                text: "Used for current situations, general truths, and habitual actions.",
                examples: [
                    "Simple Present (V1): He plays cricket. Structure: S + V1/V1-s. Use: Habit, general truth, fixed schedule.",
                    "Present Continuous (am/is/are + V-ing): He is playing cricket. Use: Action happening RIGHT NOW.",
                    "Present Perfect (have/has + V3): He has played cricket. Use: Action completed recently with present relevance.",
                    "Present Perfect Continuous (have/has + been + V-ing): He has been playing for 2 hours. Use: Action started in past, continuing to present."
                ],
                shortcut: "Simple Present = NOW (permanent). Continuous = NOW (temporary). Perfect = JUST NOW. Perfect Continuous = DURATION from past to NOW."
            },
            {
                title: "2. Past Tenses (4 types)",
                text: "Used for completed actions, historical events.",
                examples: [
                    "Simple Past (V2): He played cricket yesterday. Use: Single completed action in definite past time.",
                    "Past Continuous (was/were + V-ing): He was playing when I arrived. Use: Action ongoing when something else happened.",
                    "Past Perfect (had + V3): He had played before I came. Use: Action completed BEFORE another past action. (Past of Past)",
                    "Past Perfect Continuous (had + been + V-ing): He had been playing for 2 hours when I arrived. Use: Duration of action in past."
                ],
                shortcut: "Past Perfect is ALWAYS used when two actions happen in the past. Use Past Perfect for the action that happened FIRST."
            },
            {
                title: "3. Future Tenses (4 types)",
                text: "Used for predictions, plans, intentions.",
                examples: [
                    "Simple Future (will + V1): He will play tomorrow. Use: Simple prediction or decision made at the moment of speaking.",
                    "Future Continuous (will + be + V-ing): He will be playing tomorrow. Use: Action will be ongoing at a specific future time.",
                    "Future Perfect (will + have + V3): He will have played by tomorrow. Use: Action will be completed by a specific future time.",
                    "Future Perfect Continuous (will + have + been + V-ing): He will have been playing for 2 hours by the time I arrive."
                ],
                shortcut: "Future Perfect = WILL COMPLETE. Future Perfect Continuous = WILL HAVE COMPLETED (WITH DURATION)."
            },
            {
                title: "4. Tense Selection Shortcuts",
                text: "Quick decision-making in exams.",
                examples: [
                    "Key Words for Present Perfect: Just, Already, Recently, Ever, Never, Yet, Still.",
                    "Key Words for Past Perfect: After, Before, When, As soon as (use past perfect for the earlier action).",
                    "Key Words for Future: Tomorrow, Next week, will, is going to.",
                    "Sequence: 'After he had eaten, he left.' (After = action 1 completed, then action 2 happened)."
                ],
                shortcut: "If you see 'After' in a sentence, the action after 'After' must be in Past Perfect."
            }
        ]
    },
    english_prepositions_mastery: {
        category: "English: Grammar",
        title: "Prepositions: Deep Dive & Common Fixed Phrases",
        subtitle: "In, On, At, By + Phrasal Prepositions",
        blocks: [
            {
                title: "1. Prepositions of Time",
                text: "When to use In, On, At for time.",
                examples: [
                    "In: Months (In January), Years (In 2024), Seasons (In summer), Parts of day (In the morning). BUT NOT 'at the morning'.",
                    "On: Specific dates (On 5th), Days (On Monday), Special days (On Christmas).",
                    "At: Specific times (At 5 PM), Night (At night), Festivals (At Diwali), Specific moments (At midnight).",
                    "Since: Starting point (I have worked since 2020). Duration WITH starting time.",
                    "For: Duration only (I have worked for 4 years). NO starting point mentioned."
                ],
                shortcut: "IN = Large time unit. ON = Date/Day. AT = Specific time. SINCE = Starting point (Perfect tense). FOR = Duration (Perfect tense)."
            },
            {
                title: "2. Prepositions of Place",
                text: "Location prepositions.",
                examples: [
                    "In: Inside enclosed spaces (In the room). Region/City (In Mumbai).",
                    "On: Surface (On the table). Direction (On the street, On the river).",
                    "At: Specific points (At the station). Specific locations (At home, At work). Address (At 5 Main Street).",
                    "Between: Two distinct items (Between A and B). Choose Between two options.",
                    "Among: Groups/Multiple items (Among many students)."
                ],
                shortcut: "IN = INSIDE. ON = SURFACE. AT = POINT. Between = 2 things. Among = Many things."
            },
            {
                title: "3. Phrasal Prepositions & Fixed Pairs",
                text: "Verbs/Adjectives paired with specific prepositions.",
                examples: [
                    "Agree WITH (person), Agree TO (plan/proposal).",
                    "Angry WITH (person), Angry AT (action/behavior).",
                    "Compare TO (similarities), Compare WITH (differences).",
                    "Different FROM, Grateful TO, Interested IN, Tired OF, Suitable FOR.",
                    "Reason FOR, Emphasis ON, Focus ON, Consist OF, Insist ON."
                ],
                shortcut: "When in doubt, try the preposition that sounds most natural when you read it aloud. Native speakers use 'feel' more than logic."
            },
            {
                title: "4. Phrasal Verbs (Verb + Preposition Combinations)",
                text: "Verbs that change meaning when paired with prepositions.",
                examples: [
                    "Look: Look at (observe), Look for (search), Look after (care for), Look down on (despise).",
                    "Put: Put on (wear), Put off (postpone), Put up (tolerate), Put aside (ignore).",
                    "Take: Take on (assume), Take off (remove), Take up (start hobby), Take after (resemble).",
                    "Run: Run across (meet by chance), Run away (flee), Run into (encounter), Run out (exhaust)."
                ],
                shortcut: "Phrasal verbs change the meaning entirely. 'Put on' ≠ 'Put off'. Memorize in context, not in isolation."
            }
        ]
    },
    english_adjectives_adverbs: {
        category: "English: Grammar",
        title: "Adjectives & Adverbs: Comparative & Superlative Deep Dive",
        subtitle: "Irregular Forms, Double Comparatives, Placement",
        blocks: [
            {
                title: "1. Formation of Comparatives & Superlatives",
                text: "Rules for -er/-est, more/most, and irregular forms.",
                examples: [
                    "One-syllable adjectives: ADD -er/-est. (fast → faster, fastest).",
                    "Two-syllable adjectives: Some add -er/-est (easy → easier), some use more/most (famous → more famous).",
                    "Three+ syllables: Use more/most. (beautiful → more beautiful, most beautiful).",
                    "Irregular: Good (better, best), Bad (worse, worst), Much/Many (more, most), Little (less, least), Far (farther/further, farthest/furthest)."
                ],
                shortcut: "If in doubt, use 'more/most'. It's NEVER wrong. But -er/-est is slightly more natural for one-syllable and most two-syllable words."
            },
            {
                title: "2. Double Comparatives (NEVER USE)",
                text: "A common error in SSC exams.",
                examples: [
                    "WRONG: 'more taller', 'more bigger', 'more smarter'.",
                    "RIGHT: Use either '-er' OR 'more', never both.",
                    "WRONG: He is 'more kinder' than you.",
                    "RIGHT: He is 'kinder' than you. OR He is 'more kind' than you."
                ],
                shortcut: "IF YOU SEE MORE + -ER, IT'S ALWAYS WRONG. Eliminate those options immediately."
            },
            {
                title: "3. Adverbs: Formation & Position",
                text: "How adverbs modify verbs, adjectives, or sentences.",
                examples: [
                    "Formation: Usually add -ly to adjective (happy → happily, quick → quickly).",
                    "Position in sentence: (1) After the main verb: 'He speaks slowly.' (2) Before the adjective: 'Extremely intelligent.' (3) At start/end of sentence: 'Unfortunately, he missed it.'",
                    "IMPORTANT: 'Slow' can be adjective (slow car) OR adverb in phrases (go slow, slow down). 'Well' is the adverb form of 'good'."
                ],
                shortcut: "If modifying a noun, use adjective. If modifying a verb/adj/adverb, use adverb. 'He runs fast' (adv). 'He is fast' (adj)."
            },
            {
                title: "4. Degrees of Adjectives in Context",
                text: "Choosing the right comparative form in sentences.",
                examples: [
                    "Equality: 'as...as'. He is as tall as me. (NOT 'as tall than')",
                    "Comparative: 'than'. He is taller than me.",
                    "Superlative: 'the' + superlative. He is the tallest in the class.",
                    "Worked example: 'Among the three, Priya is ___ student. (a) More intelligent (b) Most intelligent (c) Intelligent (d) Intelligently. Answer: (b) Most intelligent (superlative among three)."
                ],
                shortcut: "AS...AS = Equality. THAN = Comparing 2 things. THE + SUPERLATIVE = Best/Worst of group."
            }
        ]
    },
    english_articles_deep_dive: {
        category: "English: Grammar",
        title: "Articles (A, An, The): Deep Dive & SSC Patterns",
        subtitle: "Usage Rules and Exception Handling",
        blocks: [
            {
                title: "1. A vs An (Indefinite Articles)",
                text: "Use 'a' before consonant sounds, 'an' before vowel sounds.",
                examples: [
                    "'A' before consonant sound: a book, a cat, a university (sounds like 'you').",
                    "'An' before vowel sound: an apple, an elephant, an hour (sounds like 'ow').",
                    "Exception: 'An' before silent H (an honest man, an honor)."
                ],
                shortcut: "Listen to the SOUND, not the letter. 'University' starts with 'U' but sounds like 'you' (consonant), so 'a university'."
            },
            {
                title: "2. The (Definite Article)",
                text: "Use 'the' for specific, known things. Omit 'the' for general statements.",
                examples: [
                    "With specific things: The book on the table (I know which one). The person you mentioned.",
                    "With unique things: The sun, The moon, The Prime Minister, The capital of India.",
                    "NO article with: Plural general nouns (Dogs are animals). Abstract nouns (Honesty is good). Proper nouns (India, Priya, January).",
                    "With superlatives: She is the best teacher. The highest mountain."
                ],
                shortcut: "If you can replace the noun with 'which one?', use 'the'. If it's general, omit it."
            },
            {
                title: "3. Article Omission Rules",
                text: "When NOT to use articles.",
                examples: [
                    "Proper nouns: Priya, India, Monday, Shakespeare (NO 'the' unless geographic: 'the Himalayas', 'the USA').",
                    "Plural nouns (general): Cats are animals. (NOT: 'The cats are animals' - that's specific).",
                    "Uncountable nouns: Water is essential. Poetry is beautiful. (NO article for general use).",
                    "After possessives: My book (NOT: 'the my book'). His house (NOT: 'the his house')."
                ],
                shortcut: "Possessive already marks the noun as specific. Don't add 'the'."
            },
            {
                title: "4. Article in Fixed Phrases",
                text: "Idiomatic uses of articles.",
                examples: [
                    "'By the way' (not 'by way'). 'In the end' (not 'in end'). 'At the moment' (not 'at moment').",
                    "'Go to the hospital' (as patient), 'Go to hospital' (as worker).",
                    "'In the morning' (general), 'In morning' (not used in English).",
                    "'Have a good time'. 'Have a nice day'."
                ],
                shortcut: "These are fixed phrases. Memorize them as complete chunks."
            }
        ]
    },
    english_error_spotting_comprehensive: {
        category: "English: Grammar",
        title: "Error Spotting: Comprehensive Patterns & Speed Hacks",
        subtitle: "The Most Common Error Types in SSC CGL",
        blocks: [
            {
                title: "1. Subject-Verb Disagreement (Most Common)",
                text: "The verb doesn't match the subject in number or person.",
                examples: [
                    "Collective nouns take singular verb: The team is ready. (NOT 'are')",
                    "'None of' with plural: None of the books are useful. (Verb is PLURAL because 'books' is plural).",
                    "Phrase between subject and verb: 'A series of books is available.' (Series = singular)",
                    "'Majority of' rules: The majority of people are happy. (People = plural, so 'are')"
                ],
                shortcut: "Ignore all phrases between subject and verb. Just match subject and verb directly."
            },
            {
                title: "2. Tense Inconsistency",
                text: "Mixing tenses wrongly in the same sentence.",
                examples: [
                    "WRONG: 'He went to the shop and buy a book.' (went = past, buy = present).",
                    "RIGHT: 'He went to the shop and bought a book.' (Both past).",
                    "Timeline Consistency: If describing past events, maintain past tense throughout."
                ],
                shortcut: "Check the tense of the FIRST verb. All subsequent verbs in the same action should match (unless explicitly changing time)."
            },
            {
                title: "3. Pronoun Errors",
                text: "Wrong case, number, or person.",
                examples: [
                    "Case: 'Between you and I are many reasons.' (WRONG - should be 'me'). Prepositions always take objective case.",
                    "Number: 'Each student brought their own books.' (WRONG - 'Each' is singular, so 'his/her books'). But: 'All students brought their books.' (RIGHT - 'All' is plural).",
                    "Antecedent mismatch: 'The book lost its pages.' (RIGHT - 'it' refers to singular 'book')."
                ],
                shortcut: "For pronouns after prepositions, ALWAYS use objective case (me, him, her, us, them). Never subjective (I, he, she, we, they)."
            },
            {
                title: "4. Noun-Adjective-Adverb Errors",
                text: "Using the wrong form modifying nouns or verbs.",
                examples: [
                    "WRONG: 'He works very hard daily.' (Should be 'He works very hardly' is also wrong. Use 'He works hard and daily.') ",
                    "Adjective with noun: 'A quick decision' (RIGHT). 'A quickly decision' (WRONG).",
                    "Adverb with verb: 'Speak clearly' (RIGHT). 'Speak clear' (WRONG).",
                    "Exception: Link verbs (is, feels, appears) take adjective: 'He feels sad' (NOT 'sadly')."
                ],
                shortcut: "Nouns + Adjectives. Verbs + Adverbs. Link verbs + Adjectives."
            },
            {
                title: "5. Parallelism Errors",
                text: "Structures should be grammatically similar when listed.",
                examples: [
                    "WRONG: 'He likes reading, writing, and to play.'",
                    "RIGHT: 'He likes reading, writing, and playing.' (All gerunds).",
                    "WRONG: 'She is intelligent, hardworking, and behaves honestly.'",
                    "RIGHT: 'She is intelligent, hardworking, and honest.' (All adjectives)."
                ],
                shortcut: "When items are in a list (A, B, and C), they must all be the same grammatical form."
            }
        ]
    }
};
