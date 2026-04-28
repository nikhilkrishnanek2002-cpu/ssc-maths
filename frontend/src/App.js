import React, { useState, useEffect } from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Guide from './components/Guide';
import Quiz from './components/Quiz';
import TeacherDashboard from './components/TeacherDashboard';
import Navigation from './components/Navigation';

function App() {
  const [currentView, setCurrentView] = useState('guide');
  const [userRole, setUserRole] = useState('teacher'); // 'teacher' or 'student'
  const [subject, setSubject] = useState('maths'); // 'maths' or 'reasoning'

  return (
    <div className="app">
      <Navigation 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        userRole={userRole}
        setUserRole={setUserRole}
        subject={subject}
        setSubject={setSubject}
      />
      
      <div className="content">
        {currentView === 'guide' && <Guide subject={subject} />}
        {currentView === 'calculator' && subject === 'maths' && <Calculator />}
        {currentView === 'quiz' && <Quiz userRole={userRole} subject={subject} />}
        {currentView === 'dashboard' && userRole === 'teacher' && <TeacherDashboard subject={subject} />}
      </div>
    </div>
  );
}

export default App;
