// Study Engine
// Renders the study materials and handles sidebar generation & searching

const allStudyData = {
    ...mathData,
    ...reasoningData,
    ...englishData,
    ...gkData,
    ...computerData,
    ...statisticsData
};

document.addEventListener('DOMContentLoaded', () => {
    generateSidebar();
    
    // Load the first available content by default
    const firstKey = Object.keys(allStudyData)[0];
    if(firstKey) loadContent(firstKey);

    // Search functionality
    document.getElementById('search-bar').addEventListener('input', function(e) {
        const term = e.target.value.toLowerCase();
        filterSidebar(term);
    });

    // Topic Test
    const testBtn = document.getElementById('topic-test-btn');
    if(testBtn) {
        testBtn.addEventListener('click', () => {
            const activeItem = document.querySelector('.nav-item.active');
            if(activeItem) {
                // We'll store the topic intent in localStorage and redirect
                localStorage.setItem('ssc_test_intent', activeItem.getAttribute('data-key'));
                window.location.href = 'index.html?mode=exam';
            } else {
                alert("Please select a topic first.");
            }
        });
    }
    
    updateProgress();
});

function generateSidebar() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.innerHTML = '';

    // Group data by category
    const categories = {};
    for (const [key, data] of Object.entries(allStudyData)) {
        const cat = data.category || "Uncategorized";
        if (!categories[cat]) categories[cat] = [];
        categories[cat].push({ key, title: data.title });
    }

    // Generate HTML
    for (const [catName, items] of Object.entries(categories)) {
        let catHtml = `
            <div class="nav-category" data-cat="${catName.toLowerCase()}">
                <div class="category-title">${catName}</div>
        `;
        
        items.forEach(item => {
            const isMastered = localStorage.getItem(`mastered_${item.key}`) === 'true';
            const checkIcon = isMastered ? `<i class="fa-solid fa-check-circle" style="color: #10b981; float: right; margin-top: 3px;"></i>` : '';
            
            catHtml += `
                <div class="nav-item ${isMastered ? 'mastered' : ''}" data-key="${item.key}" data-title="${item.title.toLowerCase()}" onclick="loadContent('${item.key}')">
                    <i class="fa-solid fa-book-bookmark"></i> ${item.title} ${checkIcon}
                </div>
            `;
        });
        
        catHtml += `</div>`;
        navMenu.innerHTML += catHtml;
    }
}

function filterBySubject(subj) {
    // Update active button
    document.querySelectorAll('.subj-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-subj') === subj) {
            btn.classList.add('active');
        }
    });

    const categories = document.querySelectorAll('.nav-category');
    
    categories.forEach(cat => {
        const catName = cat.getAttribute('data-cat');
        // Simple matching logic based on the data we have
        const isMath = catName.includes('math');
        const isReasoning = catName.includes('reasoning');
        const isEnglish = catName.includes('english');
        const isGK = catName.includes('gk') || catName.includes('general');
        const isComputer = catName.includes('computer');

        let shouldShow = false;
        if (subj === 'all') shouldShow = true;
        else if (subj === 'math' && isMath) shouldShow = true;
        else if (subj === 'reasoning' && isReasoning) shouldShow = true;
        else if (subj === 'english' && isEnglish) shouldShow = true;
        else if (subj === 'gk' && isGK) shouldShow = true;
        else if (subj === 'computer' && isComputer) shouldShow = true;

        if (shouldShow) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });
    
    // Clear search bar when filtering by subject
    document.getElementById('search-bar').value = '';
}

function filterSidebar(term) {
    const categories = document.querySelectorAll('.nav-category');
    
    categories.forEach(cat => {
        let hasVisibleItem = false;
        const items = cat.querySelectorAll('.nav-item');
        
        items.forEach(item => {
            const title = item.getAttribute('data-title');
            if (title.includes(term) || term === '') {
                item.style.display = 'flex';
                hasVisibleItem = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        if (hasVisibleItem) {
            cat.style.display = 'block';
        } else {
            cat.style.display = 'none';
        }
    });
}

function loadContent(topicId) {
    // Update active state in sidebar
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-key') === topicId) {
            item.classList.add('active');
        }
    });

    // Get Data
    const data = allStudyData[topicId];
    if(!data) return;

    // Render Notebook Page
    const page = document.getElementById('notebook-page');
    let html = `
        <div class="page-header">
            <h1 class="page-title">${data.title}</h1>
            <div class="page-subtitle">${data.subtitle}</div>
        </div>
    `;

    data.blocks.forEach(block => {
        html += `
            <div class="content-block">
                <h2 class="block-title">${block.title}</h2>
                <p class="block-text">${block.text}</p>
        `;

        if(block.examples && block.examples.length > 0) {
            html += `
                <div class="example-box">
                    <div class="example-title">Key Points / Examples:</div>
                    <div class="example-content">
                        <ul>
                            ${block.examples.map(ex => `<li>${ex}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }

        if(block.shortcut) {
            html += `
                <div class="shortcut-box">
                    <div class="shortcut-title"><i class="fa-solid fa-bolt"></i> Topper's Shortcut</div>
                    <p>${block.shortcut}</p>
                </div>
            `;
        }

        html += `</div>`;
    });

    // Mastery Button
    const isMastered = localStorage.getItem(`mastered_${topicId}`) === 'true';
    html += `
        <div style="margin-top: 30px; text-align: center; padding: 20px; background: white; border-radius: 10px; border: 1px dashed #ccc;">
            <button onclick="toggleMastery('${topicId}')" class="mastery-btn ${isMastered ? 'mastered-btn' : ''}">
                ${isMastered ? '<i class="fa-solid fa-check-double"></i> Mastered (Click to Undo)' : '<i class="fa-solid fa-check"></i> Mark as Mastered'}
            </button>
        </div>
    `;

    page.innerHTML = html;

}

function toggleMastery(topicId) {
    const isMastered = localStorage.getItem(`mastered_${topicId}`) === 'true';
    if(isMastered) {
        localStorage.removeItem(`mastered_${topicId}`);
    } else {
        localStorage.setItem(`mastered_${topicId}`, 'true');
    }
    
    // Refresh UI
    generateSidebar();
    loadContent(topicId);
    updateProgress();
}

function updateProgress() {
    const totalTopics = Object.keys(allStudyData).length;
    let masteredCount = 0;
    
    for(let key of Object.keys(allStudyData)) {
        if(localStorage.getItem(`mastered_${key}`) === 'true') {
            masteredCount++;
        }
    }
    
    const percentage = totalTopics === 0 ? 0 : Math.round((masteredCount / totalTopics) * 100);
    
    const progText = document.getElementById('progress-text');
    const progFill = document.getElementById('progress-bar-fill');
    
    if(progText) progText.textContent = `${percentage}%`;
    if(progFill) progFill.style.width = `${percentage}%`;
}
