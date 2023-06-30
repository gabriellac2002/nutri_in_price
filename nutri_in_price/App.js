import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//screens
import Home from './src/screens/Home/index';
import RankingCustoBeneficio from './src/screens/Ranking_Custo_Beneficio/index';
import MainStack from './src/stacks/MainStack';

import DrawerNavigator from './src/stacks/DrawerNavigator'

export default function App() {

  

  return (
    <NavigationContainer>
      <DrawerNavigator/>  
    </NavigationContainer>
  );
}


