import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, count: state.count + 1 };
    case 'DECREASE':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const handleIncrease = () => {
    dispatch({ type: 'INCREASE' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREASE' });
  };

  return (
    <div>
      <h1>Counter with useReducer</h1>
      <p>Count: {state.count}</p>

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
