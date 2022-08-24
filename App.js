
import React from 'react';
import { Provider } from 'react-redux';
import store,{persistor} from './src/redux/Store';
import MainStackNavigator from './src/navigations/MainStackNavigator';
import { PersistGate } from 'redux-persist/integration/react';
const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <MainStackNavigator />
      </PersistGate>
    </Provider>
  );

};

export default App;
