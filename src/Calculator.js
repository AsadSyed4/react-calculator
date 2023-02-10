import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    const value = e.target.value;
    switch (value) {
      case 'C':
        setInput('');
        setResult(null);
        setError(null);
        break;
      case '=':
        try {
          setResult(eval(input));
          setError(null);
        } catch (err) {
          setError('Error: Invalid Expression');
        }
        break;
      default:
        setInput(input + value);
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="input">
        {error ? error : result ? result : input}
      </div>
      <div className="buttons">
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="+" onClick={handleClick}>+</button>
        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="-" onClick={handleClick}>-</button>
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="*" onClick={handleClick}>x</button>
        <button value="C" onClick={handleClick}>C</button>
        <button value="0" onClick={handleClick}>0</button>
        <button value="=" onClick={handleClick}>=</button>
        <button value="/" onClick={handleClick}>÷</button>
      </div>
    </div>
  );
}

export default Calculator;
