import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './src/screens/Login/Login';

export default function App() {
  return (
    <> 
      <Login/>
      <StatusBar style="light" />
    </>
  );
}


