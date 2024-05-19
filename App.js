import React from 'react';
import AppNavigator from './src/navigation/AppNavigator'; 
import store from './src/context/store';
import { Provider } from 'react-redux';
import {URL_MY_APPS} from '@env';
const App = () => {
  console.log('URL_MY_APPS',URL_MY_APPS)
  return(
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;