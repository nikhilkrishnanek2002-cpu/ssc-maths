import React, { useState } from 'react';
import './TeacherDashboard.css';

function TeacherDashboard({ subject = 'maths' }) {
  const [dashboardView, setDashboardView] = useState('overview');
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  // Mock student data
  const [students] = useState([
    { id: 1, name: 'Raj Kumar', quizzesCompleted: 5, avgScore: 78 },
    { id: 2, name: 'Priya Singh', quizzesCompleted: 8, avgScore: 85 },
    { id: 3, name: 'Amit Patel', quizzesCompleted: 3, avgScore: 62 },
  ]);

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, {
        id: Date.now(),
        topic: selectedTopic,
        content: newNote,
        date: new Date().toLocaleDateString()
      }]);
      setNewNote('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div className="dashboard-container">
      <h1>📈 Teacher Dashboard</h1>
      <p className="dashboard-subtitle">Manage your class, track progress, and create content</p>

      <div className="dashboard-tabs">
        <button 
          className={`tab-btn ${dashboardView === 'overview' ? 'active' : ''}`}
          onClick={() => setDashboardView('overview')}
        >
          📊 Overview
        </button>
        <button 
          className={`tab-btn ${dashboardView === 'students' ? 'active' : ''}`}
          onClick={() => setDashboardView('students')}
        >
          👥 Students
        </button>
        <button 
          className={`tab-btn ${dashboardView === 'notes' ? 'active' : ''}`}
          onClick={() => setDashboardView('notes')}
        >
          📝 My Notes
        </button>
        <button 
          className={`tab-btn ${dashboardView === 'analytics' ? 'active' : ''}`}
          onClick={() => setDashboardView('analytics')}
        >
          📉 Analytics
        </button>
      </div>

      <div className="dashboard-content">
        {/* Overview Tab */}
        {dashboardView === 'overview' && (
          <div className="overview-section">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <h3>Total Students</h3>
                <p className="stat-value">{students.length}</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <h3>Avg Quizzes Done</h3>
                <p className="stat-value">
                  {(students.reduce((acc, s) => acc + s.quizzesCompleted, 0) / students.length).toFixed(1)}
                </p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <h3>Class Avg Score</h3>
                <p className="stat-value">
                  {(students.reduce((acc, s) => acc + s.avgScore, 0) / students.length).toFixed(1)}%
                </p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <h3>Top Performer</h3>
                <p className="stat-value">
                  {students.reduce((prev, current) => prev.avgScore > current.avgScore ? prev : current).name}
                </p>
              </div>
            </div>

            <h3>Quick Actions</h3>
            <div className="quick-actions">
              <button className="action-btn">
                <span>📤 Upload Materials</span>
              </button>
              <button className="action-btn">
                <span>📋 Create Assignment</span>
              </button>
              <button className="action-btn">
                <span>📧 Send Message</span>
              </button>
              <button className="action-btn">
                <span>🎯 Create Custom Quiz</span>
              </button>
            </div>
          </div>
        )}

        {/* Students Tab */}
        {dashboardView === 'students' && (
          <div className="students-section">
            <h3>Student Progress</h3>
            <div className="students-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Quizzes Completed</th>
                    <th>Average Score</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.id}>
                      <td>{student.name}</td>
                      <td>{student.quizzesCompleted}</td>
                      <td>
                        <div className="score-bar">
                          <div 
                            className="score-fill" 
                            style={{ width: `${student.avgScore}%` }}
                          ></div>
                        </div>
                        {student.avgScore}%
                      </td>
                      <td>
                        {student.avgScore >= 80 && <span className="badge excellent">Excellent</span>}
                        {student.avgScore < 80 && student.avgScore >= 60 && <span className="badge good">Good</span>}
                        {student.avgScore < 60 && <span className="badge fair">Needs Help</span>}
                      </td>
                      <td>
                        <button className="action-link">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Notes Tab */}
        {dashboardView === 'notes' && (
          <div className="notes-section">
            <div className="notes-editor">
              <h3>📝 Add Teaching Notes</h3>
              <select 
                className="topic-select"
                onChange={(e) => setSelectedTopic(e.target.value)}
                value={selectedTopic}
              >
                <option value="">Select a topic...</option>
                <option value="numbers">Number System</option>
                <option value="percentage">Percentage & Ratio</option>
                <option value="profit">Profit & Loss</option>
                <option value="interest">Simple & Compound Interest</option>
                <option value="time-work">Time & Work</option>
                <option value="speed">Speed, Distance & Time</option>
                <option value="algebra">Algebra</option>
                <option value="geometry">Geometry</option>
                <option value="trigonometry">Trigonometry</option>
              </select>
              
              <textarea 
                className="note-input"
                placeholder="Add your teaching notes, important points, or custom tricks..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                rows="5"
              ></textarea>
              
              <button className="add-note-btn" onClick={addNote}>
                ➕ Add Note
              </button>
            </div>

            <div className="notes-list">
              <h3>Your Notes</h3>
              {notes.length === 0 ? (
                <p className="no-notes">No notes yet. Add one to get started!</p>
              ) : (
                notes.map(note => (
                  <div key={note.id} className="note-item">
                    <div className="note-header">
                      <h4>{note.topic}</h4>
                      <span className="note-date">{note.date}</span>
                    </div>
                    <p className="note-content">{note.content}</p>
                    <button 
                      className="delete-note"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {dashboardView === 'analytics' && (
          <div className="analytics-section">
            <h3>📊 Class Performance Analytics</h3>
            
            <div className="analytics-grid">
              <div className="analytics-card">
                <h4>Performance Distribution</h4>
                <div className="chart-placeholder">
                  <p>📊 Chart will show score distribution</p>
                  <div className="chart-bars">
                    <div className="bar" style={{ height: '60%' }}>80-100</div>
                    <div className="bar" style={{ height: '40%' }}>60-80</div>
                    <div className="bar" style={{ height: '20%' }}>40-60</div>
                  </div>
                </div>
              </div>

              <div className="analytics-card">
                <h4>Topic Wise Performance</h4>
                <ul className="topic-performance">
                  <li>
                    <span>Number System</span>
                    <div className="mini-bar" style={{ width: '85%' }}>85%</div>
                  </li>
                  <li>
                    <span>Percentage</span>
                    <div className="mini-bar" style={{ width: '72%' }}>72%</div>
                  </li>
                  <li>
                    <span>Geometry</span>
                    <div className="mini-bar" style={{ width: '68%' }}>68%</div>
                  </li>
                  <li>
                    <span>Trigonometry</span>
                    <div className="mini-bar" style={{ width: '55%' }}>55%</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeacherDashboard;
