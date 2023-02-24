import React from 'react';
import MainRouter from './src/router/MainRouter';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();
  return <MainRouter />;
};

export default App;
