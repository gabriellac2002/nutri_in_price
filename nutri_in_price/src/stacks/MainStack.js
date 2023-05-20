import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//
import Preload from '../screens/Preload';
import Login from '../screens/Login/index';
import Cadastro from '../screens/Cadastro/index';
import QuestionOne from '../screens/Questions/QuestionOne';
import Home from '../screens/Home/index';
import { RankingCustoBeneficio } from '../screens/Ranking_Custo_Beneficio/index';
import {RankingDensidadeNutricional } from '../screens/RankingDensidadeNutricional/index';

import InfoRanking from '../screens/InfoRanking/index.js';
import Product from '../screens/Product/index';

//nutrientes
import Proteina from '../screens/Proteina/index';
import Calcio from '../screens/Calcio/index';
import Ferro from '../screens/Ferro/index';
import Fibra from '../screens/Fibra/index';
import VitaminaA from '../screens/VitaminaA/index';
import VitaminaC from '../screens/VitaminaC/index';
import VitaminaD from '../screens/VitaminaD/index';
import VitaminaE from '../screens/VitaminaE/index';
import Acucar from '../screens/Acucar/index';
import Sodio from '../screens/Sodio/index';

const Stack = createStackNavigator();   

const MainStack = () => {
    return(
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}

        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen name="Info" component={InfoRanking} />

            <Stack.Screen name="Ranking_custo_beneficio" component={RankingCustoBeneficio} />
            <Stack.Screen name="RankingDensidadeNutricional" component={RankingDensidadeNutricional} />
            
            <Stack.Screen name="Product" component={Product} />


            {/* <Stack.Screen name="Preload" component={Preload} /> */}

            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="QuestionOne" component={QuestionOne} />


            {/* <Stack.Screen name="MainTab" component={MainTab} /> */}

            {/* Nutrientes */}
            <Stack.Screen name="Proteina" component={Proteina} />
            <Stack.Screen name="Calcio" component={Calcio} />
            <Stack.Screen name="Ferro" component={Ferro} />
            <Stack.Screen name="Fibra" component={Fibra} />
            <Stack.Screen name="VitaminaA" component={VitaminaA} />
            <Stack.Screen name="VitaminaC" component={VitaminaC} />
            <Stack.Screen name="VitaminaD" component={VitaminaD} />
            <Stack.Screen name="VitaminaE" component={VitaminaE} />
            <Stack.Screen name="Acucar" component={Acucar} />
            <Stack.Screen name="Sodio" component={Sodio} />
        </Stack.Navigator>
    );
}
    

export default MainStack;