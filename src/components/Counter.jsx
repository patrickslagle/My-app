import React from 'react';

const Counter = ({ count, handleCount }) => (
  <div className="counter-container">
    <h1>{count}</h1>
    <button name="add" className="counter-button" onClick={handleCount}>++</button>
    <button name="subtract" className="counter-button" onClick={handleCount}>--</button>
  </div>
);

export default Counter;
