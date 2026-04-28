// Local Storage Manager
// Acts as an offline database to save progress and mistakes

const LocalDB = {
    saveMistakes: function(questions, answers) {
        let mistakes = JSON.parse(localStorage.getItem('ssc_mistakes')) || [];
        let newMistakesCount = 0;

        Object.keys(questions).forEach(section => {
            questions[section].forEach(q => {
                const userAnswer = answers[q.id];
                // If answer is wrong or not attempted
                if(userAnswer !== q.correctAnswer) {
                    // Avoid duplicates
                    if(!mistakes.find(m => m.id === q.id)) {
                        mistakes.push({
                            id: q.id,
                            section: section,
                            text: q.text,
                            options: q.options,
                            correctAnswer: q.correctAnswer,
                            explanation: q.explanation,
                            userAnswer: userAnswer !== undefined ? userAnswer : null,
                            dateAdded: new Date().toISOString()
                        });
                        newMistakesCount++;
                    }
                }
            });
        });

        localStorage.setItem('ssc_mistakes', JSON.stringify(mistakes));
        return newMistakesCount;
    },

    getMistakes: function() {
        return JSON.parse(localStorage.getItem('ssc_mistakes')) || [];
    },

    clearMistakes: function() {
        localStorage.removeItem('ssc_mistakes');
    },

    saveAnalytics: function(timeSpent, score) {
        let analytics = JSON.parse(localStorage.getItem('ssc_analytics')) || [];
        analytics.push({
            date: new Date().toISOString(),
            timeSpent: timeSpent,
            score: score
        });
        localStorage.setItem('ssc_analytics', JSON.stringify(analytics));
    }
};

// Update the submitExam function in ExamEngine to use this
const originalSubmitExam = submitExam;
window.submitExam = function() {
    clearInterval(examState.timerInterval);
    
    // Calculate score
    let score = 0;
    let correct = 0;
    let wrong = 0;
    
    Object.keys(examState.questions).forEach(section => {
        examState.questions[section].forEach(q => {
            const userAnswer = examState.answers[q.id];
            if(userAnswer === q.correctAnswer) {
                score += 2;
                correct++;
            } else if (userAnswer !== undefined) {
                score -= 0.5;
                wrong++;
            }
        });
    });

    const newMistakes = LocalDB.saveMistakes(examState.questions, examState.answers);
    LocalDB.saveAnalytics(3600 - examState.timeLeft, score);

    alert(`Exam Submitted!\n\nScore: ${score} / 200\nCorrect: ${correct}\nWrong: ${wrong}\n\n${newMistakes} new mistakes saved to your offline Mistake Book.`);
    
    // In a full app, this would route to a result/analytics page.
    // For now, reload to restart
    window.location.reload();
};
