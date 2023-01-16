import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login/index';
import Cadastro from '../screens/Cadastro/index';
import QuestionOne from '../screens/Questions/QuestionOne';

const Stack = createStackNavigator();   

export default () => (
    <Stack.Navigator
        initialRouteName="Login"
        // screenOptions={{
        //     headerShown: false
        // }}

    >
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Preload" component={Preload} /> */}
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="QuestionOne" component={QuestionOne} />
        {/* <Stack.Screen name="MainTab" component={MainTab} /> */}
    </Stack.Navigator>
);