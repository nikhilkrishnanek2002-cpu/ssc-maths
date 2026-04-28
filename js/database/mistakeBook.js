// Mistake Book — Saves wrong answers to localStorage for later review
// No API key needed, pure browser storage

const MistakeBook = {
    STORAGE_KEY: 'ssc_mistake_book',

    // Add a wrong answer to the book
    addMistake: function(question, userAnswer, section) {
        const book = this.getAll();
        // Don't add duplicates
        if (book.some(m => m.id === question.id)) {
            this.updateMistake(question.id, userAnswer);
            return;
        }
        book.push({
            id: question.id,
            text: question.text,
            options: question.options,
            correctAnswer: question.correctAnswer,
            userAnswer: userAnswer,
            explanation: question.explanation,
            section: section,
            difficulty: question.difficulty || 'MEDIUM',
            date: new Date().toLocaleDateString(),
            attempts: 1,
            lastResult: 'wrong'
        });
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(book));
    },

    // Mark a mistake as corrected
    markCorrect: function(qId) {
        const book = this.getAll();
        const idx = book.findIndex(m => m.id === qId);
        if (idx !== -1) {
            book[idx].lastResult = 'correct';
            book[idx].attempts++;
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(book));
        }
    },

    // Update wrong attempts count
    updateMistake: function(qId, userAnswer) {
        const book = this.getAll();
        const idx = book.findIndex(m => m.id === qId);
        if (idx !== -1) {
            book[idx].attempts++;
            book[idx].userAnswer = userAnswer;
            book[idx].lastResult = 'wrong';
            book[idx].date = new Date().toLocaleDateString();
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(book));
        }
    },

    // Get all mistakes
    getAll: function() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    },

    // Get only unresolved mistakes
    getPending: function() {
        return this.getAll().filter(m => m.lastResult === 'wrong');
    },

    // Clear all
    clear: function() {
        localStorage.removeItem(this.STORAGE_KEY);
    },

    // Get count badge info
    getCounts: function() {
        const all = this.getAll();
        return {
            total: all.length,
            pending: all.filter(m => m.lastResult === 'wrong').length,
            resolved: all.filter(m => m.lastResult === 'correct').length
        };
    }
};
