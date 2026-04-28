// Local Storage Manager for saving personal bests and progress
// No API Keys needed, works in all modern browsers

const StorageManager = {
    saveScore: function(pattern, score) {
        let history = JSON.parse(localStorage.getItem('ssc_exam_history') || '[]');
        history.push({
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            pattern: pattern.toUpperCase(),
            score: score.toFixed(1)
        });
        // Keep only last 10
        if(history.length > 10) history.shift();
        localStorage.setItem('ssc_exam_history', JSON.stringify(history));
    },

    getBestScore: function(pattern) {
        let history = JSON.parse(localStorage.getItem('ssc_exam_history') || '[]');
        const scores = history
            .filter(h => h.pattern === pattern.toUpperCase())
            .map(h => parseFloat(h.score));
        return scores.length > 0 ? Math.max(...scores) : 0;
    },

    renderLeaderboard: function() {
        let history = JSON.parse(localStorage.getItem('ssc_exam_history') || '[]');
        if (history.length === 0) return "<p style='color:#999;'>No exams taken yet.</p>";

        let html = `<table style="width:100%; border-collapse:collapse; font-size:12px; margin-top:10px;">
            <thead><tr style="border-bottom:1px solid #ccc; text-align:left;"><th>Date</th><th>Tier</th><th>Score</th></tr></thead>
            <tbody>`;
        
        history.reverse().forEach(h => {
            html += `<tr style="border-bottom:1px solid #eee;">
                <td>${h.date}</td>
                <td>${h.pattern}</td>
                <td style="font-weight:bold; color:#0b5ed7;">${h.score}</td>
            </tr>`;
        });
        html += `</tbody></table>`;
        return html;
    }
};
