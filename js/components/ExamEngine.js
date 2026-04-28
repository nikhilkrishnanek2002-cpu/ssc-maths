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
    
    // DI Table or RC Passage prefix
    let prefixHtml = '';
    if (q._diSet) {
        const di = q._diSet;
        prefixHtml = `<div style="background:#f8f9fa; border:1px solid #dee2e6; border-radius:6px; padding:12px; margin-bottom:12px; font-size:12px; overflow-x:auto;">
            <div style="font-weight:700; margin-bottom:8px; color:#0b5ed7;">📊 ${di.tableTitle}</div>
            <table style="width:100%; border-collapse:collapse; font-size:11px;">
                <thead><tr>${di.headers.map(h => `<th style="background:#0b5ed7;color:white;padding:6px 8px;text-align:left;">${h}</th>`).join('')}</tr></thead>
                <tbody>${di.rows.map((row, i) => `<tr style="background:${i%2===0?'#fff':'#f8f9fa'}">${row.map(cell => `<td style="padding:5px 8px;border-bottom:1px solid #dee2e6;">${cell}</td>`).join('')}</tr>`).join('')}</tbody>
            </table>
        </div>`;
    } else if (q._rcPassage) {
        prefixHtml = `<div style="background:#fff9e6; border-left:4px solid #f59e0b; padding:12px; margin-bottom:12px; font-size:13px; line-height:1.6; max-height:150px; overflow-y:auto; border-radius:0 6px 6px 0;">
            <div style="font-weight:700; margin-bottom:6px; color:#b45309;">📖 Read the passage carefully:</div>
            <div style="color:#444;">${q._rcPassage}</div>
        </div>`;
    } else if (q.type === 'parajumble') {
        prefixHtml = `<div style="background:#f0f7ff; border:1px solid #cfe2ff; padding:12px; margin-bottom:12px; border-radius:6px;">
            <div style="font-weight:700; color:#084298; margin-bottom:10px;">🧩 Rearrange the following sentences (P, Q, R, S):</div>
            <div style="display:flex; flex-direction:column; gap:8px;">
                ${q.jumbled ? q.jumbled.map((s, i) => `<div style="background:white; padding:8px 12px; border-radius:4px; border:1px solid #dee2e6; font-size:13px;"><strong style="color:#0b5ed7;">${['P','Q','R','S'][i]}:</strong> ${s}</div>`).join('') : ''}
            </div>
        </div>`;
    }

    document.getElementById('question-text').innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            ${difficultyHtml}
        </div>
        ${prefixHtml}
        <p>${q.text}</p>`;

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

    // Trigger KaTeX for beautiful math formulas if available
    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('question-text'), {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false
        });
    }
}

function selectAnswer(qId, optionIndex) {
    examState.answers[qId] = optionIndex;
    
    // In practice mode, reveal solution immediately once an answer is selected
    if(isPracticeMode) {
        document.getElementById('btn-view-solution').classList.remove('hidden');
        showSolution(); // Auto-show solution for immediate feedback
    }
    
    // Update question status
    const prevStatus = examState.status[qId];
    if(prevStatus === 'review') {
        examState.status[qId] = 'review-answered';
    } else {
        examState.status[qId] = 'answered';
    }

    // Store which section this question belongs to (for MistakeBook)
    examState._sectionMap = examState._sectionMap || {};
    examState._sectionMap[qId] = currentSection;
    
    renderQuestionGrid();
    updateLegend();

    // Scroll palette button into view
    const palBtn = document.querySelector(`#question-grid button[data-id="${qId}"]`);
    if (palBtn) palBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
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
    clearInterval(examState.timerInterval);
    
    let totalCorrect = 0;
    let totalWrong = 0;
    let subjectStats = {};

    Object.keys(SECTIONS).forEach(sId => {
        let correct = 0;
        let wrong = 0;
        let unanswered = 0;
        
        if (examState.questions[sId]) {
            examState.questions[sId].forEach(q => {
                const userAns = examState.answers[q.id];
                if (userAns === undefined) unanswered++;
                else if (parseInt(userAns) === q.correctAnswer) {
                    correct++;
                    // If previously wrong, mark as corrected
                    if (typeof MistakeBook !== 'undefined') {
                        MistakeBook.markCorrect(q.id);
                    }
                } else {
                    wrong++;
                    // Save to Mistake Book
                    if (typeof MistakeBook !== 'undefined') {
                        MistakeBook.addMistake(q, parseInt(userAns), sId);
                    }
                }
            });
        }

        subjectStats[sId] = { correct, wrong, unanswered };
        totalCorrect += correct;
        totalWrong += wrong;
    });

    const marksPerCorrect = currentPattern === 'tier2' ? 3 : 2;
    const marksPerWrong = currentPattern === 'tier2' ? 1 : 0.5;
    const finalScore = (totalCorrect * marksPerCorrect) - (totalWrong * marksPerWrong);

    // Call dynamic result renderer in app.js
    if (typeof renderResults === 'function') {
        renderResults(finalScore, subjectStats);
    } else {
        alert(`Exam Submitted!\nScore: ${finalScore.toFixed(2)}\nCorrect: ${totalCorrect}\nWrong: ${totalWrong}`);
    }
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
