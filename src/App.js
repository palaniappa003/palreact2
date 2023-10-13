import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleKeyPress = (key) => {
    if (key === 'C') {
      setInput('');
      setOutput('');
    } else if (key === '=') {
      try {
        setOutput(eval(input));
      } catch (error) {
        setOutput('Error');
      }
    } else {
      setInput((prevInput) => prevInput + key);
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          <div className="content">
            <div className="input">{input}</div>
            <div className="output">{output}</div>
          </div>
        </div>
        <div className="keys">
          <div className="key" onClick={() => handleKeyPress('7')}><span>7</span></div>
          <div className="key" onClick={() => handleKeyPress('8')}><span>8</span></div>
          <div className="key" onClick={() => handleKeyPress('9')}><span>9</span></div>
          <div className="key operator" onClick={() => handleKeyPress('+')}><span>+</span></div>
          <div className="key" onClick={() => handleKeyPress('4')}><span>4</span></div>
          <div className="key" onClick={() => handleKeyPress('5')}><span>5</span></div>
          <div className="key" onClick={() => handleKeyPress('6')}><span>6</span></div>
          <div className="key operator" onClick={() => handleKeyPress('-')}><span>-</span></div>
          <div className="key" onClick={() => handleKeyPress('1')}><span>1</span></div>
          <div className="key" onClick={() => handleKeyPress('2')}><span>2</span></div>
          <div className="key" onClick={() => handleKeyPress('3')}><span>3</span></div>
          <div className="key operator" onClick={() => handleKeyPress('*')}><span>*</span></div>
          <div className="key action" onClick={() => handleKeyPress('C')}><span>C</span></div>
          <div className="key" onClick={() => handleKeyPress('0')}><span>0</span></div>
          <div className="key" onClick={() => handleKeyPress('.')}><span>.</span></div>
          <div className="key operator" onClick={() => handleKeyPress('/')}><span>/</span></div>
          <div className="key action" onClick={() => handleKeyPress('=')}><span>=</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;
