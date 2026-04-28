import React, { useState } from 'react';
import './Quiz.css';
import { QUIZ_QUESTIONS } from '../data/quizzes';
import { REASONING_QUIZ_QUESTIONS } from '../data/reasoning-quizzes';

function Quiz({ userRole, subject = 'maths' }) {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [studentProgress, setStudentProgress] = useState({});

  const quizzes = subject === 'maths' ? QUIZ_QUESTIONS : REASONING_QUIZ_QUESTIONS;

  const startQuiz = (quizId) => {
    const quiz = quizzes.find(q => q.id === quizId);
    setSelectedQuiz(quiz);
    setCurrentQ(0);
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };

  const handleAnswer = (answer) => {
    const quiz = selectedQuiz;
    const question = quiz.questions[currentQ];
    const isCorrect = answer === question.correct;
    
    setUserAnswers([...userAnswers, {
      question: question.question,
      selected: answer,
      correct: question.correct,
      isCorrect: isCorrect
    }]);

    if (isCorrect) setScore(score + 1);

    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Quiz finished
      setShowResults(true);
      if (userRole === 'teacher') {
        recordProgress(quiz.id, (score + (isCorrect ? 1 : 0)) / quiz.questions.length);
      }
    }
  };

  const recordProgress = (quizId, percentage) => {
    setStudentProgress({
      ...studentProgress,
      [quizId]: percentage * 100
    });
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQ(0);
    setScore(0);
    setShowResults(false);
    setUserAnswers([]);
  };

  if (!selectedQuiz) {
    return (
      <div className="quiz-container">
        <h1>✅ Practice Quiz</h1>
        <p className="quiz-subtitle">Test your skills with interactive quizzes</p>
        
        <div className="quiz-grid">
          {quizzes.map(quiz => (
            <div key={quiz.id} className="quiz-card">
              <div className="quiz-emoji">{quiz.emoji}</div>
              <h3>{quiz.name}</h3>
              <p className="quiz-count">{quiz.questions.length} Questions</p>
              <p className="quiz-level">Level: {quiz.level}</p>
              <button 
                className="quiz-start-btn"
                onClick={() => startQuiz(quiz.id)}
              >
                Start Quiz
              </button>
              {studentProgress[quiz.id] && (
                <p className="progress-badge">
                  Score: {studentProgress[quiz.id].toFixed(0)}%
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (showResults) {
    const totalQuestions = selectedQuiz.questions.length;
    const percentage = (score / totalQuestions) * 100;

    return (
      <div className="quiz-container">
        <div className="results-panel">
          <h2>📊 Quiz Results</h2>
          
          <div className="score-display">
            <div className="score-circle">
              <div className="score-num">{score}</div>
              <div className="score-total">/ {totalQuestions}</div>
              <div className="score-percent">{percentage.toFixed(1)}%</div>
            </div>

            <div className="score-message">
              {percentage >= 80 && <p className="excellent">🎉 Excellent! Keep it up!</p>}
              {percentage >= 60 && percentage < 80 && <p className="good">👍 Good job! Review weak areas.</p>}
              {percentage >= 40 && percentage < 60 && <p className="fair">📚 Fair. Practice more!</p>}
              {percentage < 40 && <p className="poor">💪 Keep practicing!</p>}
            </div>
          </div>

          <h3>Answer Review</h3>
          <div className="answer-review">
            {userAnswers.map((answer, i) => (
              <div key={i} className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
                <div className="answer-status">
                  {answer.isCorrect ? '✅' : '❌'}
                </div>
                <div className="answer-details">
                  <p className="q-text">{i+1}. {answer.question}</p>
                  <p className="a-selected">Your answer: <strong>{answer.selected}</strong></p>
                  {!answer.isCorrect && (
                    <p className="a-correct">Correct: <strong>{answer.correct}</strong></p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="retry-btn" onClick={resetQuiz}>
            ← Back to Quizzes
          </button>
        </div>
      </div>
    );
  }

  const question = selectedQuiz.questions[currentQ];
  const progress = ((currentQ + 1) / selectedQuiz.questions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>{selectedQuiz.emoji} {selectedQuiz.name}</h2>
        <p>Question {currentQ + 1} of {selectedQuiz.questions.length}</p>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-panel">
        <h3>{question.question}</h3>
        
        <div className="options">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              className="option-btn"
              onClick={() => handleAnswer(option)}
            >
              <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
              <span className="option-text">{option}</span>
            </button>
          ))}
        </div>

        {question.hint && (
          <div className="hint-box">
            <p><strong>💡 Hint:</strong> {question.hint}</p>
          </div>
        )}
      </div>

      <div className="quiz-footer">
        <p>Score: <strong>{score}/{currentQ}</strong></p>
      </div>
    </div>
  );
}

export default Quiz;
