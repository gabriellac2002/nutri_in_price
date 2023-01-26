import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet} from 'react-native';

import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle
} from './styles';

import CategoriaRanking from '../../components/CategoriaRanking';

import money from "../../assets/money.png";

export const RankingCustoBeneficio = () => {

    const styles = StyleSheet.create({
        tinyLogo: {
          width: 40,
          height: 40,
        },
        
    });

    const irParaHankingProteina = () => {
        navigation.reset({
            routes: [{name: 'Proteina'}]
        });
    }

    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle> Ranking de Custo Benefício Nutrícional</HeaderTitle>
                        <Image
                            source={money}
                            style={styles.tinyLogo} 
                        />
                </HeaderArea>
                <CategoriaRanking onPress={irParaHankingProteina}/>
                <CategoriaRanking />
                <CategoriaRanking />
                <CategoriaRanking />
                
            </Scroller>
        </Container>
    );
}

export default RankingCustoBeneficio;