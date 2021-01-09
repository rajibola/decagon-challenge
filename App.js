/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigations/stack-navigation';

const App: () => React$Node = () => {
  return <AppNavigator />;
};

export default App;
