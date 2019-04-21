import React, { Fragment } from 'react';

import CounterWithUseState from './CounterWithUseState';
import CounterWithUseReducer from './CounterWithUseReducer';
import CounterWithBoth from './CounterWithBoth';

const App = () => (
  <Fragment>
    <CounterWithUseState />
    <CounterWithUseReducer />
    <CounterWithBoth />
  </Fragment>
);

export default App;
