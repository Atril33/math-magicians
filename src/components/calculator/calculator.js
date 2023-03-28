import React from 'react';
import './calculator.css';

const MyCalculator = () => (
  <>
    <center>
      <div className="container">
        <input type="number" value="0" id="calculator-input" readOnly />
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="divide orange">÷</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="multply orange">X</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="sub orange">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="plus orange">+</button>
        <button type="button" className="Zero">0</button>
        <button type="button">.</button>
        <button type="button" className="isqual orange">=</button>
      </div>
    </center>
  </>
);

export default MyCalculator;
