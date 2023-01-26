import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login/index';
import Cadastro from '../screens/Cadastro/index';
import QuestionOne from '../screens/Questions/QuestionOne';
import Home from '../screens/Home/index';
import { RankingCustoBeneficio } from '../screens/Ranking_Custo_Beneficio/index';
import Proteina from '../screens/Proteina/index';

const Stack = createStackNavigator();   

export default () => (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false
        }}

    >
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Home" component={Home} />


        <Stack.Screen name="Ranking_custo_beneficio" component={RankingCustoBeneficio} />
        <Stack.Screen name="Proteina" component={Proteina} />

        {/* <Stack.Screen name="Preload" component={Preload} /> */}

        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="QuestionOne" component={QuestionOne} />


        {/* <Stack.Screen name="MainTab" component={MainTab} /> */}
    </Stack.Navigator>
);