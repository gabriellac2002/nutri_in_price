import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login/index';

const Stack = createStackNavigator();   

export default () => (
    <Stack.Navigator
        // initialRouteName="SingIn"
        // screenOptions={{
        //     headerShown: false
        // }}

    >
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Preload" component={Preload} /> */}
        {/* <Stack.Screen name="SignUp" component={SingUp} /> */}
        {/* <Stack.Screen name="MainTab" component={MainTab} /> */}
    </Stack.Navigator>
);