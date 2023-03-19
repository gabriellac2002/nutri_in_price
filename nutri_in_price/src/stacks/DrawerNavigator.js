import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../screens/Home/index';

export default function MyDrawer() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
      initialRouteName="Home"
    >
      
      component={Home}
      options={{ drawerLabel: 'Home' }}
    </Drawer.Navigator>
  );
}