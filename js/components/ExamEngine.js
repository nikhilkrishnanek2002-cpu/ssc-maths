// Core Exam Engine for rendering questions and handling interactions

let isPracticeMode = false;

function togglePracticeMode() {
    isPracticeMode = document.getElementById('practice-mode-toggle').checked;
    if(!isPracticeMode) {
        document.getElementById('solution-box').classList.add('hidden');
        document.getElementById('btn-view-solution').classList.add('hidden');
    } else {
        const qId = examState.questions[currentSection][examState.currentQuestionIndex].id;
        if(examState.answers[qId] !== undefined) {
            document.getElementById('btn-view-solution').classList.remove('hidden');
        }
    }
}

function loadQuestion(index) {
    const sectionQs = examState.questions[currentSection];
    if(index < 0 || index >= sectionQs.length) return;

    examState.currentQuestionIndex = index;
    const q = sectionQs[index];

    // Mark as visited if not already answered or reviewed
    if(examState.status[q.id] === 'not-visited') {
        examState.status[q.id] = 'not-answered';
    }

    // Update UI
    document.getElementById('current-q-num').innerText = index + 1;
    
    // Add difficulty badge
    const difficultyHtml = q.difficulty ? `<span class="difficulty-badge ${q.difficulty.toLowerCase().replace(' ', '-')}">${q.difficulty}</span>` : '';
    document.getElementById('question-text').innerHTML = `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
        ${difficultyHtml}
    </div><p>${q.text}</p>`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, i) => {
        const isChecked = examState.answers[q.id] === i ? 'checked' : '';
        optionsContainer.innerHTML += `
            <label class="option-item">
                <input type="radio" name="answer" value="${i}" ${isChecked} onchange="selectAnswer('${q.id}', ${i})">
                <span>${opt}</span>
            </label>
        `;
    });

    renderQuestionGrid();
    updateLegend();

    // Reset solution box state for new question
    document.getElementById('solution-box').classList.add('hidden');
    if(isPracticeMode && examState.answers[q.id] !== undefined) {
        document.getElementById('btn-view-solution').classList.remove('hidden');
    } else {
        document.getElementById('btn-view-solution').classList.add('hidden');
    }
}

function selectAnswer(qId, optionIndex) {
    examState.answers[qId] = optionIndex;
    
    // In practice mode, reveal solution immediately once an answer is selected
    if(isPracticeMode) {
        document.getElementById('btn-view-solution').classList.remove('hidden');
        showSolution(); // Auto-show solution for immediate feedback
    }
}

function saveAndNext() {
    const qId = examState.questions[currentSection][examState.currentQuestionIndex].id;
    if(examState.answers[qId] !== undefined) {
        examState.status[qId] = 'answered';
    } else {
        examState.status[qId] = 'not-answered';
    }
    
    const sectionQs = examState.questions[currentSection];
    if(examState.currentQuestionIndex < sectionQs.length - 1) {
        loadQuestion(examState.currentQuestionIndex + 1);
    } else {
        renderQuestionGrid();
        updateLegend();
        alert("End of section reached!");
    }
}

function clearResponse() {
    const qId = examState.questions[currentSection][examState.currentQuestionIndex].id;
    delete examState.answers[qId];
    examState.status[qId] = 'not-answered';
    
    // Hide solution UI
    document.getElementById('btn-view-solution').classList.add('hidden');
    document.getElementById('solution-box').classList.add('hidden');
    
    loadQuestion(examState.currentQuestionIndex);
}

function markForReview() {
    const qId = examState.questions[currentSection][examState.currentQuestionIndex].id;
    if(examState.answers[qId] !== undefined) {
        examState.status[qId] = 'review-answered';
    } else {
        examState.status[qId] = 'review';
    }
    
    const sectionQs = examState.questions[currentSection];
    if(examState.currentQuestionIndex < sectionQs.length - 1) {
        loadQuestion(examState.currentQuestionIndex + 1);
    } else {
        renderQuestionGrid();
        updateLegend();
    }
}

function renderQuestionGrid() {
    const grid = document.getElementById('question-grid');
    grid.innerHTML = '';
    
    const sectionQs = examState.questions[currentSection];
    
    sectionQs.forEach((q, i) => {
        const status = examState.status[q.id] || 'not-visited';
        grid.innerHTML += `
            <button class="q-grid-btn ${status}" onclick="loadQuestion(${i})">
                ${i + 1}
            </button>
        `;
    });
}

function updateLegend() {
    const counts = {
        'answered': 0,
        'not-answered': 0,
        'not-visited': 0,
        'review': 0,
        'review-answered': 0
    };

    const sectionQs = examState.questions[currentSection];
    sectionQs.forEach(q => {
        const status = examState.status[q.id] || 'not-visited';
        counts[status]++;
    });

    document.querySelector('.legend-item .badge.answered').innerText = counts['answered'];
    document.querySelector('.legend-item .badge.not-answered').innerText = counts['not-answered'];
    document.querySelector('.legend-item .badge.not-visited').innerText = counts['not-visited'];
    document.querySelector('.legend-item .badge.review').innerText = counts['review'];
    document.querySelector('.legend-item .badge.review-answered').innerText = counts['review-answered'];
}

function submitExam() {
    // Phase 4 will handle Mistake Book and local storage
    clearInterval(examState.timerInterval);
    alert("Exam Submitted Successfully! Analyzing Results...");
}

function showSolution() {
    const q = examState.questions[currentSection][examState.currentQuestionIndex];
    const box = document.getElementById('solution-box');
    
    let html = ``;
    
    // Check what type of explanation it is
    if(typeof q.explanation === 'object') {
        if(q.explanation.standard && q.explanation.trick) {
            html = `
                <div class="solution-title">Standard Method:</div>
                <div style="margin-bottom:10px;">${q.explanation.standard}</div>
                <div class="solution-title" style="color:#d35400;"><i class="fa-solid fa-bolt"></i> Topper's Trick:</div>
                <div>${q.explanation.trick}</div>
            `;
        } else if(q.explanation.detailed) {
            html = `
                <div class="solution-title">Detailed Explanation:</div>
                <div>${q.explanation.detailed}</div>
            `;
        }
    } else {
        // Fallback for old string explanations if any
        html = `
            <div class="solution-title">Explanation:</div>
            <div>${q.explanation}</div>
        `;
    }

    // Highlight correct answer in explanation box for clarity
    const correctAnsText = q.options[q.correctAnswer];
    html = `<div style="margin-bottom:15px; font-weight:bold; color:#198754;">Correct Answer: ${correctAnsText}</div>` + html;

    box.innerHTML = html;
    box.classList.remove('hidden');
}
