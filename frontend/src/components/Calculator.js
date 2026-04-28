import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  
  // Normal Calculator Logic
  const handleNum = (n) => setEquation(prev => prev === '0' ? String(n) : prev + String(n));
  const handleOp = (op) => setEquation(prev => prev + op);
  const clear = () => { setEquation('0'); setDisplay('0'); }
  const back = () => setEquation(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
  
  const compute = () => {
    try {
      // Safe eval equivalent
      const result = new Function('return ' + equation)();
      const final = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
      setDisplay(String(final));
      setEquation(String(final));
    } catch {
      setDisplay('Error');
      setTimeout(clear, 1500);
    }
  };

  return (
    <div className="calc-container">
      <div className="calc-card">
        <h2 className="calc-title">?? General Calculator</h2>
        <div className="calc-screen">
          <div className="calc-equation">{equation}</div>
          <div className="calc-result">{display}</div>
        </div>
        <div className="calc-grid">
          <button onClick={clear} className="calc-btn calc-clear">AC</button>
          <button onClick={back} className="calc-btn calc-func">?</button>
          <button onClick={() => handleOp('%')} className="calc-btn calc-func">%</button>
          <button onClick={() => handleOp('/')} className="calc-btn calc-op">÷</button>
          
          <button onClick={() => handleNum(7)} className="calc-btn">7</button>
          <button onClick={() => handleNum(8)} className="calc-btn">8</button>
          <button onClick={() => handleNum(9)} className="calc-btn">9</button>
          <button onClick={() => handleOp('*')} className="calc-btn calc-op">×</button>
          
          <button onClick={() => handleNum(4)} className="calc-btn">4</button>
          <button onClick={() => handleNum(5)} className="calc-btn">5</button>
          <button onClick={() => handleNum(6)} className="calc-btn">6</button>
          <button onClick={() => handleOp('-')} className="calc-btn calc-op">-</button>
          
          <button onClick={() => handleNum(1)} className="calc-btn">1</button>
          <button onClick={() => handleNum(2)} className="calc-btn">2</button>
          <button onClick={() => handleNum(3)} className="calc-btn">3</button>
          <button onClick={() => handleOp('+')} className="calc-btn calc-op">+</button>
          
          <button onClick={() => handleNum(0)} className="calc-btn calc-zero">0</button>
          <button onClick={() => handleNum('.')} className="calc-btn">.</button>
          <button onClick={compute} className="calc-btn calc-equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
