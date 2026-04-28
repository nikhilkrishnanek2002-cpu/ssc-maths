import React, { useState } from 'react';
import './Guide.css';
import { MATHS_TOPICS } from '../data/topics';
import { REASONING_TOPICS } from '../data/reasoning-topics';

function Guide({ subject = 'maths' }) {
  const [activeSection, setActiveSection] = useState(subject === 'maths' ? 'numbers' : 'analogy');
  
  const topics = subject === 'maths' ? MATHS_TOPICS : REASONING_TOPICS;
  const currentTopic = topics.find(t => t.id === activeSection) || topics[0];
  const title = subject === 'maths' ? 'SSC Maths Complete Guide' : 'SSC Reasoning Complete Guide';

  return (
    <div className="guide-container">
      <div className="guide-header">
        <h1>📚 {title}</h1>
        <p>Master every topic with formulas, shortcuts, and tricks</p>
      </div>

      <div className="guide-layout">
        <div className="guide-sidebar">
          <h3>Topics ({topics.length})</h3>
          <ul className="topic-list">
            {topics.map(topic => (
              <li key={topic.id}>
                <button 
                  className={`topic-btn ${activeSection === topic.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(topic.id)}
                >
                  {topic.emoji} {topic.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="guide-content">
          <div className="topic-header">
            <h2>{currentTopic.emoji} {currentTopic.name}</h2>
            <p className="topic-desc">{currentTopic.description}</p>
          </div>

          <div className="content-sections">
            {currentTopic.sections && currentTopic.sections.map((section, idx) => (
              <div key={idx} className="content-section">
                <h3>{section.title}</h3>
                
                {section.content && (
                  <div className="section-text">
                    {section.content}
                  </div>
                )}
                {section.formulas && (
                  <div className="formulas-box">
                    <h4>📐 Key Formulas</h4>
                    <ul>
                      {section.formulas.map((formula, i) => (
                        <li key={i}>
                          <code>{formula}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.shortcuts && (
                  <div className="shortcuts-box">
                    <h4>⚡ Shortcuts & Tricks</h4>
                    <ul>
                      {section.shortcuts.map((shortcut, i) => (
                        <li key={i}>{shortcut}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.examples && (
                  <div className="examples-box">
                    <h4>📝 Solved Examples</h4>
                    {section.examples.map((example, i) => (
                      <div key={i} className="example">
                        <p><strong>Q:</strong> {example.question}</p>
                        <p><strong>A:</strong> {example.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Reference Table */}
          {currentTopic.reference && (
            <div className="reference-section">
              <h3>📊 Quick Reference</h3>
              <div className="reference-table">
                <table>
                  <thead>
                    <tr>
                      {currentTopic.reference.headers.map((h, i) => (
                        <th key={i}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentTopic.reference.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="tips-section">
        <h3>💡 Teacher's Tips for This Topic</h3>
        {currentTopic.teacherTips && (
          <ul>
            {currentTopic.teacherTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Guide;
