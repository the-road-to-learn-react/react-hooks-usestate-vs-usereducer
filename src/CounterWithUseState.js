import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count => count + 1);
  };

  const handleDecrease = () => {
    setCount(count => count - 1);
  };

  return (
    <div>
      <h1>Counter with useState</h1>
      <p>Count: {count}</p>

      <div>
        <button type="button" onClick={handleIncrease}>
          +
        </button>
        <button type="button" onClick={handleDecrease}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
