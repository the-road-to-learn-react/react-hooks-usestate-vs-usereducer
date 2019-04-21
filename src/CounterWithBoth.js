import React, { useState, useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + action.payload.increaseBy;
    case 'DECREASE':
      return state - action.payload.decreaseBy;
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [value, setValue] = useState(1);
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleChange = event => {
    setValue(+event.target.value);
  };

  const handleIncrease = () => {
    dispatch({ type: 'INCREASE', payload: { increaseBy: value } });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREASE', payload: { decreaseBy: value } });
  };

  return (
    <div>
      <h1>Counter with useState and useReducer</h1>
      <p>Count: {count}</p>

      <label>
        Increase/Decrease By:
        <input type="number" value={value} onChange={handleChange} />
      </label>

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
