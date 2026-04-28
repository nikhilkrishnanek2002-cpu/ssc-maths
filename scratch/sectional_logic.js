function startSectionalPractice() {
    const subjects = ['math', 'reasoning', 'english', 'gk'];
    const choice = prompt("Select Subject for Sectional Practice:\n1. Math\n2. Reasoning\n3. English\n4. GK\n(Enter number or name)").toLowerCase();
    
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
        
        alert(`Starting ${selected.toUpperCase()} Sectional Practice (25 Qs / 15 Mins)`);
        
        renderTabs(); // Will only show one tab now
        if (examState.timerInterval) clearInterval(examState.timerInterval);
        startTimer();
        switchSection(selected);
    }
}
