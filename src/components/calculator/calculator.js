import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const MyCalculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const myValueButton = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const inputValue = calculatorData.next || calculatorData.total || '0';
  return (
    <>
      <center>
        <div className="container">
          <input type="number" value={inputValue} id="calculator-input" readOnly />
          <button type="button" onClick={() => myValueButton('AC')}>AC</button>
          <button type="button" onClick={() => myValueButton('+')}>+/-</button>
          <button type="button" onClick={() => myValueButton('%')}>%</button>
          <button type="button" className="divide orange" onClick={() => myValueButton('÷')}>÷</button>
          <button type="button" onClick={() => myValueButton('7')}>7</button>
          <button type="button" onClick={() => myValueButton('8')}>8</button>
          <button type="button" onClick={() => myValueButton('9')}>9</button>
          <button type="button" className="multply orange" onClick={() => myValueButton('x')}>x</button>
          <button type="button" onClick={() => myValueButton('4')}>4</button>
          <button type="button" onClick={() => myValueButton('5')}>5</button>
          <button type="button" onClick={() => myValueButton('6')}>6</button>
          <button type="button" className="sub orange" onClick={() => myValueButton('-')}>-</button>
          <button type="button" onClick={() => myValueButton('1')}>1</button>
          <button type="button" onClick={() => myValueButton('2')}>2</button>
          <button type="button" onClick={() => myValueButton('3')}>3</button>
          <button type="button" className="plus orange" onClick={() => myValueButton('+')}>+</button>
          <button type="button" className="Zero" onClick={() => myValueButton('0')}>0</button>
          <button type="button" onClick={() => myValueButton('.')}>.</button>
          <button type="button" className="isqual orange" onClick={() => myValueButton('=')}>=</button>
        </div>
      </center>
    </>
  );
};

export default MyCalculator;
