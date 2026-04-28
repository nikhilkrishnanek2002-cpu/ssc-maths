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
    
    const visibleSections = ['reasoning', 'gk', 'math', 'english'];
    if (currentPattern === 'tier2') visibleSections.push('computer');
    
    visibleSections.forEach(sid => {
        const s = SECTIONS[sid];
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
    if(currentPattern === pattern) return;
    
    if(confirm(`Switch to ${pattern.toUpperCase()} Pattern? Your current exam progress will be lost.`)) {
        currentPattern = pattern;
        
        // Update Buttons UI
        document.querySelectorAll('.btn-pattern').forEach(btn => btn.classList.remove('active'));
        document.getElementById(`btn-${pattern}`).classList.add('active');
        
        // Update exam title
        const titleEl = document.getElementById('exam-title');
        if (titleEl) titleEl.innerText = `SSC CGL ${pattern === 'tier2' ? 'TIER-II' : 'TIER-I'} Exam`;

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

        // Reset timer
        clearInterval(examState.timerInterval);
        examState.timeLeft = pattern === 'tier2' ? 7200 : 3600;

        generateMockQuestions();
        examState.currentQuestionIndex = 0;
        renderTabs();
        startTimer();
        switchSection('reasoning'); // Reset to first section
    }
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
