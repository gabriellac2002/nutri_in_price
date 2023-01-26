import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet} from 'react-native';

import {
    Container,
    CategoryTitle
    
} from './styles';

import egg from "../../assets/egg.png";

export const CategoriaRanking = () => {

    const styled = StyleSheet.create({
        tinyLogo: {
          width: 40,
          height: 30,
        },
        
    });

    const irParaHankingProteina = () => {
        navigation.reset({
            routes: [{name: 'Proteina'}]
        });
    }

    return(
        <Container onPress={irParaHankingProteina}>
            <Image
                source={egg}
                style={styled.tinyLogo} 
            />
            <CategoryTitle>Proteina</CategoryTitle>
        </Container>
    );
}

export default CategoriaRanking;