import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet} from 'react-native';

import {
    Container,
    Scroller,
    
} from './styles';


export const Proteina = () => {

    const styles = StyleSheet.create({
        tinyLogo: {
          width: 40,
          height: 40,
        },
        
    });

    const irParaHankingProteina = () => {
        navigation.reset({
            routes: [{name: 'Ranking_custo_beneficio'}]
        });
    }

    return(
        <Container>
            <Scroller>
               
                
            </Scroller>
        </Container>
    );
}

export default Proteina;