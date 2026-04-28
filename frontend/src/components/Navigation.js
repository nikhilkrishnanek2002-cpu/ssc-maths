import React from 'react';
import './Navigation.css';

function Navigation({ currentView, setCurrentView, userRole, setUserRole, subject, setSubject }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>📊 SSC Master Hub</h1>
          <p className="subtitle">Maths & Reasoning Learning Platform</p>
        </div>
        
        <ul className="nav-menu">
          <li>
            <button 
              className={`nav-btn ${currentView === 'guide' ? 'active' : ''}`}
              onClick={() => setCurrentView('guide')}
            >
              📚 Study Guide
            </button>
          </li>
          {subject === 'maths' && (
            <li>
              <button 
                className={`nav-btn ${currentView === 'calculator' ? 'active' : ''}`}
                onClick={() => setCurrentView('calculator')}
              >
                🧮 Calculator
              </button>
            </li>
          )}
          <li>
            <button 
              className={`nav-btn ${currentView === 'quiz' ? 'active' : ''}`}
              onClick={() => setCurrentView('quiz')}
            >
              ✅ Quiz
            </button>
          </li>
          {userRole === 'teacher' && (
            <li>
              <button 
                className={`nav-btn ${currentView === 'dashboard' ? 'active' : ''}`}
                onClick={() => setCurrentView('dashboard')}
              >
                📈 Dashboard
              </button>
            </li>
          )}
        </ul>

        <div className="user-section">
          <select 
            className="subject-select"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="maths">📐 Maths</option>
            <option value="reasoning">🧠 Reasoning</option>
          </select>
          <select 
            className="role-select"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="teacher">👨‍🏫 Teacher</option>
            <option value="student">👨‍🎓 Student</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
