
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import CounterView  from './CounterView';
const App = () => {
 

  return (
    <Provider store={store}>
      <CounterView/>
    </Provider>
  );
};


export default App;
