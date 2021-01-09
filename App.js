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
import {Text} from 'react-native';

const App = () => {
  return <AppNavigator />;
};

export default App;
