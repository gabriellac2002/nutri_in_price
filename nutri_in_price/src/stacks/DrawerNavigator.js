//libs
import * as React from 'react';
import { Button, View,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


//screens
import Home from '../screens/Home/index';
import Ranking from '../screens/Ranking_Custo_Beneficio/index';
import RankingDensidade from '../screens/RankingDensidadeNutricional/index'

//stack
import MainStack from './MainStack';

//components
import CustonDrawer from '../components/CustonDrawer/index';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home" drawerContent={props => <CustonDrawer {...props}></CustonDrawer>} screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen name="Ranking" component={Ranking} />
      <Drawer.Screen name="RankingDensidade" component={RankingDensidade} />
      
    </Drawer.Navigator>
    
    

  );
}

export default DrawerNavigator;
