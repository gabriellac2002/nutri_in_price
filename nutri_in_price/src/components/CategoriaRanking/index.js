import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    CategoryTitle
    
} from './styles';



export const CategoriaRanking = ( props ) => {

    const irParaHankingProteina = () => {
        navigation.reset({
            routes: [{name: 'Proteina'}]
        });
    }

    return(
        <Container onPress={irParaHankingProteina}>
            <CategoryTitle>{props.nomeCategoria}</CategoryTitle>
        </Container>
    );
}

export default CategoriaRanking;