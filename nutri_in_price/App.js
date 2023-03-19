import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';
import Drawer from './src/stacks/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      
      <Drawer></Drawer>
    </NavigationContainer>
  );
}


