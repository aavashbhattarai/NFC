import React from 'react';
import Router from './src/router/MainRouter';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();
  return <Router />;
};

export default App;
