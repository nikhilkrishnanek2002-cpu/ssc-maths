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

    // Render Tabs based on Tier
    renderTabs();

    // Load initial section
    switchSection('reasoning');
});

function renderTabs() {
    const tabContainer = document.querySelector('.section-tabs');
    tabContainer.innerHTML = '';
    
    let visibleSections = ['reasoning', 'gk', 'math', 'english'];
    if (currentPattern === 'tier2') visibleSections.push('computer');
    
    // In sectional mode, only show the active subject
    if (window.isSectionalMode && window.sectionalSubject) {
        visibleSections = [window.sectionalSubject];
    }
    
    visibleSections.forEach(sid => {
        const s = SECTIONS[sid];
        if (!s) return;
        const btn = document.createElement('button');
        btn.className = 'tab-btn' + (currentSection === sid ? ' active' : '');
        btn.dataset.section = sid;
        btn.innerText = s.name;
        btn.onclick = () => switchSection(sid);
        tabContainer.appendChild(btn);
    });
}

function generateMockQuestions() {
    // Generate questions using our dynamic modules
    examState.questions['math'] = MathGenerator.generateQuestions(currentPattern === 'tier2' ? 25 : 20);
    examState.questions['reasoning'] = ReasoningGenerator.generateQuestions(currentPattern === 'tier2' ? 30 : 25);
    examState.questions['english'] = EnglishBank.generateQuestions(currentPattern === 'tier2' ? 40 : 20);
    examState.questions['gk'] = GKBank.generateQuestions(25);
    examState.questions['computer'] = ComputerGenerator.generateQuestions(20);

    // Inject 1 DI set (5 questions) into Math
    if (typeof DI_BANK !== 'undefined' && DI_BANK.length > 0) {
        const diSet = DI_BANK[Math.floor(Math.random() * DI_BANK.length)];
        diSet.questions.forEach(q => {
            q._diSet = diSet; // attach table reference
            examState.questions['math'].push(q);
        });
    }

    // Inject 1 RC passage (5 questions) into English
    if (typeof RC_BANK !== 'undefined' && RC_BANK.length > 0) {
        const rcSet = RC_BANK[Math.floor(Math.random() * RC_BANK.length)];
        rcSet.questions.forEach(q => {
            q._rcPassage = rcSet.passage; // attach passage
            examState.questions['english'].push(q);
        });
    }

    // Fully reset status, answers, and section maps
    examState.answers = {};
    examState.status = {};
    examState._sectionMap = {};
    Object.keys(SECTIONS).forEach(section => {
        (examState.questions[section] || []).forEach(q => {
            examState.status[q.id] = 'not-visited';
        });
    });
}

function goHome() {
    if(confirm("Are you sure you want to leave the exam? Your current progress will be lost.")) {
        window.location.href = 'index.html';
    }
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
    console.log("Switching pattern to:", pattern);
    if(currentPattern === pattern) return;
    
    // Auto-save state or just reset
    currentPattern = pattern;
    
    // Update Buttons UI
    document.querySelectorAll('.btn-pattern').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${pattern}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // Update exam title
    const titleEl = document.getElementById('exam-title');
    if (titleEl) {
        titleEl.innerText = `SSC CGL ${pattern === 'tier2' ? 'TIER-II' : 'TIER-I'} Exam`;
    }

    // Update counts in SECTIONS for display
    if(pattern === 'tier2') {
        SECTIONS['math'].count = 30;
        SECTIONS['reasoning'].count = 30;
        SECTIONS['english'].count = 45;
        SECTIONS['computer'].count = 20;
    } else {
        SECTIONS['math'].count = 25;
        SECTIONS['reasoning'].count = 25;
        SECTIONS['english'].count = 25;
        delete SECTIONS['computer'].count; // Hide or reset
    }

    // Reset timer and clear old interval
    if (examState.timerInterval) clearInterval(examState.timerInterval);
    examState.timeLeft = (pattern === 'tier2') ? 7200 : 3600;

    // Reset whole exam state
    examState.answers = {};
    examState.status = {};
    examState.currentQuestionIndex = 0;
    
    generateMockQuestions();
    renderTabs();
    startTimer();
    
    // Switch to first section
    const firstSection = pattern === 'tier2' ? 'reasoning' : 'reasoning'; 
    switchSection(firstSection);
    
    console.log("Pattern switch complete.");
}

function startSectionalPractice() {
    const subjects = ['math', 'reasoning', 'english', 'gk'];
    const rawChoice = prompt("Select Subject for Sectional Practice:\n1. Math\n2. Reasoning\n3. English\n4. GK\n(Enter number or name)");
    if (rawChoice === null) return;
    const choice = rawChoice.trim().toLowerCase();
    
    let selected = '';
    if (choice === '1' || choice.includes('math')) selected = 'math';
    else if (choice === '2' || choice.includes('reas')) selected = 'reasoning';
    else if (choice === '3' || choice.includes('eng')) selected = 'english';
    else if (choice === '4' || choice.includes('gk')) selected = 'gk';
    
    if (selected) {
        // Reset state
        examState.questions = { [selected]: [] };
        
        // Generate only for selected
        if (selected === 'math') examState.questions['math'] = MathGenerator.generateQuestions(25);
        if (selected === 'reasoning') examState.questions['reasoning'] = ReasoningGenerator.generateQuestions(25);
        if (selected === 'english') examState.questions['english'] = EnglishBank.generateQuestions(25);
        if (selected === 'gk') examState.questions['gk'] = GKBank.generateQuestions(25);
        
        examState.answers = {};
        examState.status = {};
        examState.timeLeft = 900; // 15 minutes
        examState.currentQuestionIndex = 0;
        
        // Global flag for UI
        window.isSectionalMode = true;
        window.sectionalSubject = selected;
        
        // Show Concept Explainer before starting
        showConceptExplainer(selected);
    } else {
        alert('Please choose a valid subject: 1, 2, 3, or 4.');
    }
}

// Concept Explainer Logic
const subjectExplainers = {
    'math': [
        { title: "Golden Rule of Math", text: "Always look for the unit digit or use digital sum when options are widely spaced. It saves 50% of calculation time!" },
        { title: "Time & Work Trick", text: "If A takes x days and B takes y days, together they take (x*y)/(x+y) days. No need for LCM for just two people." },
        { title: "Geometry Hack", text: "If a circle is inscribed in a quadrilateral ABCD, then AB + CD = BC + AD. Always." }
    ],
    'reasoning': [
        { title: "Syllogism Approach", text: "Always draw Venn Diagrams. 'Some A are B' means they overlap. 'No A is B' means they are strictly separated." },
        { title: "Coding-Decoding", text: "Write A-M and N-Z backwards below it. It instantly gives you opposite letters (A-Z, B-Y, etc.)." }
    ],
    'english': [
        { title: "Para-jumbles Trick", text: "Look for transition words (However, Moreover, Therefore). They almost NEVER start a paragraph." },
        { title: "Active/Passive Rule", text: "The tense NEVER changes when converting from Active to Passive voice. Only the verb form changes (e.g. is eating -> is being eaten)." }
    ],
    'gk': [
        { title: "Elimination Strategy", text: "In GK, if two options are complete opposites, one of them is usually the answer." },
        { title: "Polity Quick Tip", text: "Fundamental Rights are in Part III (Articles 12-35). Duties are in Part IVA (Article 51A)." }
    ]
};

let currentConceptSlides = [];
let currentConceptIndex = 0;

function showConceptExplainer(subject) {
    currentConceptSlides = subjectExplainers[subject] || [
        { title: "Get Ready", text: "Read the questions carefully and manage your time." }
    ];
    currentConceptIndex = 0;
    
    document.getElementById('concept-title').innerText = `${SECTIONS[subject].name} - Quick Primer`;
    document.getElementById('concept-modal').classList.remove('hidden');
    
    // Dim the timer
    if (examState.timerInterval) clearInterval(examState.timerInterval);
    
    renderConceptSlide();
}

function renderConceptSlide() {
    const slide = currentConceptSlides[currentConceptIndex];
    document.getElementById('concept-content').innerHTML = `
        <h3 style="color: #0b5ed7; margin-bottom: 15px; font-size: 18px;">${slide.title}</h3>
        <p style="font-size: 16px;">${slide.text}</p>
    `;
    
    document.getElementById('concept-prev').style.display = currentConceptIndex > 0 ? 'block' : 'none';
    
    if (currentConceptIndex === currentConceptSlides.length - 1) {
        document.getElementById('concept-next').style.display = 'none';
        document.getElementById('concept-start').style.display = 'block';
    } else {
        document.getElementById('concept-next').style.display = 'block';
        document.getElementById('concept-start').style.display = 'none';
    }
}

function changeConceptSlide(dir) {
    currentConceptIndex += dir;
    renderConceptSlide();
}

function closeConceptModal() {
    document.getElementById('concept-modal').classList.add('hidden');
}

function startAfterConcept() {
    closeConceptModal();
    const selected = window.sectionalSubject;
    
    alert(`Starting ${selected.toUpperCase()} Sectional Practice (25 Qs / 15 Mins)`);
    
    renderTabs(); // Will only show one tab now
    startTimer();
    switchSection(selected);
}

function startTimer() {
    const timeDisplay = document.getElementById('time-left');
    const timerBox = document.querySelector('.timer-box') || document.querySelector('.timer');
    
    examState.timerInterval = setInterval(() => {
        if(examState.timeLeft <= 0) {
            clearInterval(examState.timerInterval);
            timeDisplay.innerText = '00:00';
            alert('⏰ Time is up! Submitting your exam...');
            submitExam();
            return;
        }
        
        examState.timeLeft--;
        const m = Math.floor(examState.timeLeft / 60);
        const s = examState.timeLeft % 60;
        timeDisplay.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        
        // Flash red in the last 10 minutes
        if (examState.timeLeft <= 600 && timerBox) {
            timerBox.style.color = '#dc3545';
            timerBox.style.fontWeight = '900';
        }
        // Flash border in last 5 minutes
        if (examState.timeLeft <= 300 && timerBox) {
            timerBox.style.animation = 'none';
            timerBox.style.border = '2px solid #dc3545';
        }
        
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

function renderResults(score, stats) {
    const modal = document.getElementById('results-modal');
    modal.classList.remove('hidden');
    document.getElementById('total-score').innerText = score.toFixed(1);
    
    // Save to Local History
    if (typeof StorageManager !== 'undefined') {
        StorageManager.saveScore(currentPattern, score);
    }

    // Breakdown Table
    let tableHtml = `<div style="margin-bottom:15px; font-weight:bold; border-bottom:1px solid #ccc;">Subject-wise Accuracy</div>
        <table style="width:100%; border-collapse:collapse; font-size:12px;">
        <thead><tr style="border-bottom:2px solid #0b5ed7; text-align:left;"><th>Subject</th><th style="color:green;">C</th><th style="color:red;">W</th></tr></thead>
        <tbody>`;
    
    const labels = [];
    const data = [];

    Object.keys(stats).forEach(sId => {
        const s = SECTIONS[sId];
        const stat = stats[sId];
        if (!examState.questions[sId] || examState.questions[sId].length === 0) return;

        tableHtml += `<tr style="border-bottom:1px solid #eee; height:30px;">
            <td style="font-weight:bold;">${s.name.split(' ')[0]}</td>
            <td style="color:green; font-weight:bold;">${stat.correct}</td>
            <td style="color:red;">${stat.wrong}</td>
        </tr>`;
        
        labels.push(s.name.split(' ')[0]);
        const accuracy = stat.correct + stat.wrong > 0 
            ? (stat.correct / (stat.correct + stat.wrong)) * 100 
            : 0;
        data.push(accuracy);
    });
    
    tableHtml += `</tbody></table>`;
    
    // Add Personal Best/History to the UI
    if (typeof StorageManager !== 'undefined') {
        tableHtml += `<div style="margin-top:20px; margin-bottom:10px; font-weight:bold; border-bottom:1px solid #ccc;">Your Recent Mock History</div>`;
        tableHtml += StorageManager.renderLeaderboard();
    }

    document.getElementById('subject-breakdown').innerHTML = tableHtml;

    // Chart.js Radar Chart
    const ctx = document.getElementById('performanceChart').getContext('2d');
    if (window.myPerfChart) window.myPerfChart.destroy();

    window.myPerfChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Accuracy %',
                data: data,
                backgroundColor: 'rgba(11, 94, 215, 0.2)',
                borderColor: '#0b5ed7',
                pointBackgroundColor: '#0b5ed7',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: { display: false }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function closeResults() {
    document.getElementById('results-modal').classList.add('hidden');
}

function shareScore() {
    const score = document.getElementById('total-score').innerText;
    const text = `🚀 I just completed an authentic SSC CGL Mock Exam on the SSC Preparation Platform!\n\n🏆 My Score: ${score} / 200.0\n📈 My Pattern: ${currentPattern.toUpperCase()}\n\nTry it yourself and beat my score: ${window.location.href}`;
    
    navigator.clipboard.writeText(text).then(() => {
        alert("Performance Summary copied to clipboard! Share it with your friends.");
    }).catch(err => {
        alert("Failed to copy. Here is your score: " + score);
    });
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
            // Fix brackets if they are unclosed
            let expression = calcValue;
            const openBrackets = (expression.match(/\(/g) || []).length;
            const closeBrackets = (expression.match(/\)/g) || []).length;
            for(let i=0; i < openBrackets - closeBrackets; i++) expression += ')';
            
            calcValue = eval(expression).toString();
        } catch(e) {
            calcValue = 'Error';
        }
    } else {
        if(calcValue === 'Error') calcValue = '';
        calcValue += val;
    }
    
    // Formatting for display
    let displayValue = calcValue
        .replace(/Math\.sqrt\(/g, '√(')
        .replace(/Math\.PI/g, 'π')
        .replace(/\*\*/g, '^');
    
    display.innerText = displayValue || '0';
}
