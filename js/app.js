// Main Application Logic

let currentSection = 'reasoning';
const SECTIONS = {
    'reasoning': { id: 'reasoning', name: 'General Intelligence', count: 25 },
    'gk': { id: 'gk', name: 'General Awareness', count: 25 },
    'math': { id: 'math', name: 'Quantitative Aptitude', count: 25 },
    'english': { id: 'english', name: 'English Comprehension', count: 25 },
    'computer': { id: 'computer', name: 'Computer Knowledge', count: 20 }
};

let currentPattern = 'tier1'; // 'tier1' or 'tier2'

// Exam State
let examState = {
    timeLeft: 3600, // 60 minutes
    currentQuestionIndex: 0,
    questions: {
        'reasoning': [],
        'gk': [],
        'math': [],
        'english': [],
        'computer': []
    },
    answers: {},
    status: {}, // visited, answered, review, review-answered
    timerInterval: null
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    console.log("Eduquity Exam Simulator Initialized");
    
    // Check if generators exist, if not, create mock data for testing UI
    generateMockQuestions();

    // Start Exam Timer
    startTimer();

    // Load initial section
    switchSection('reasoning');
});

function generateMockQuestions() {
    // Generate questions using our dynamic modules
    examState.questions['math'] = MathGenerator.generateQuestions(currentPattern === 'tier2' ? 30 : 25);
    examState.questions['reasoning'] = ReasoningGenerator.generateQuestions(currentPattern === 'tier2' ? 30 : 25);
    examState.questions['english'] = EnglishBank.generateQuestions(currentPattern === 'tier2' ? 45 : 25);
    examState.questions['gk'] = GKBank.generateQuestions(currentPattern === 'tier2' ? 25 : 25);
    examState.questions['computer'] = ComputerGenerator.generateQuestions(20);

    // Initialize/Reset status array and answers
    examState.answers = {};
    Object.keys(SECTIONS).forEach(section => {
        const count = examState.questions[section].length;
        for(let i=0; i<count; i++) {
            const qId = examState.questions[section][i].id;
            examState.status[qId] = 'not-visited';
        }
    });
}

function refreshQP() {
    if(confirm("Are you sure you want to generate a new question paper? Your current progress will be lost.")) {
        generateMockQuestions();
        examState.currentQuestionIndex = 0;
        switchSection(currentSection); // Re-renders the current section
        alert(`New ${currentPattern.toUpperCase()} Question Paper Generated! Difficulty: Randomized`);
    }
}

function switchPattern(pattern) {
    if(currentPattern === pattern) return;
    
    if(confirm(`Switch to ${pattern.toUpperCase()} Pattern? Your current exam progress will be lost.`)) {
        currentPattern = pattern;
        
        // Update Buttons UI
        document.querySelectorAll('.btn-pattern').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`btn-${pattern}`).classList.add('active');
        
        // Update counts in SECTIONS for display
        if(pattern === 'tier2') {
            SECTIONS['math'].count = 30;
            SECTIONS['reasoning'].count = 30;
            SECTIONS['english'].count = 45;
        } else {
            SECTIONS['math'].count = 25;
            SECTIONS['reasoning'].count = 25;
            SECTIONS['english'].count = 25;
        }

        generateMockQuestions();
        examState.currentQuestionIndex = 0;
        switchSection('reasoning'); // Reset to first section
    }
}

function startTimer() {
    const timeDisplay = document.getElementById('time-left');
    
    examState.timerInterval = setInterval(() => {
        if(examState.timeLeft <= 0) {
            clearInterval(examState.timerInterval);
            submitExam();
            return;
        }
        
        examState.timeLeft--;
        const m = Math.floor(examState.timeLeft / 60);
        const s = examState.timeLeft % 60;
        timeDisplay.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        
    }, 1000);
}

function switchSection(sectionId) {
    currentSection = sectionId;
    
    // Update Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });

    // Reset to first question of that section
    examState.currentQuestionIndex = 0;
    
    // Render
    renderQuestionGrid();
    loadQuestion(0);
}

// Calculator Logic
let calcVisible = false;
let calcValue = '';
function toggleCalculator() {
    const modal = document.getElementById('calculator-modal');
    calcVisible = !calcVisible;
    if(calcVisible) {
        modal.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
    }
}

function calcInput(val) {
    const display = document.getElementById('calc-display');
    if (val === 'Clear') {
        calcValue = '';
    } else if (val === 'Back') {
        calcValue = calcValue.slice(0, -1);
    } else if (val === '=') {
        try {
            calcValue = eval(calcValue).toString();
        } catch(e) {
            calcValue = 'Error';
        }
    } else {
        if(calcValue === 'Error') calcValue = '';
        calcValue += val;
    }
    display.innerText = calcValue || '0';
}
