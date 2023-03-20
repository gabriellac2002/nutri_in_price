//bibliotecas
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet} from 'react-native';

//views
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    CategoryArea, 
    ContainerTypeRanking,
    CategoryTitle,
    ContainerBack
} from './styles';

//componentes


//assets
import money from "../../assets/money.png";
import back from "../../assets/voltar.png";

export const RankingCustoBeneficio = () => {

    const styles = StyleSheet.create({
        tinyLogo: {
          width: 40,
          height: 40,
        },
        
    });

    const navigation = useNavigation();

    const irParaHankingProteina = () => {
        navigation.reset({
            routes: [{name: 'Proteina'}]
        });
    }

    const irParaHankingCalcio = () => {
        navigation.reset({
            routes: [{name: 'Calcio'}]
        });
    }

    const irParaHankingFerro = () => {
        navigation.reset({
            routes: [{name: 'Ferro'}]
        });
    }

    const irParaHankingFibra = () => {
        navigation.reset({
            routes: [{name: 'Fibra'}]
        });
    }

    const irParaHankingVitaminaA = () => {
        navigation.reset({
            routes: [{name: 'VitaminaA'}]
        });
    }

    const irParaHankingVitaminaC = () => {
        navigation.reset({
            routes: [{name: 'VitaminaC'}]
        });
    }

    const irParaHankingVitaminaD = () => {
        navigation.reset({
            routes: [{name: 'VitaminaD'}]
        });
    }

    const irParaHankingVitaminaE = () => {
        navigation.reset({
            routes: [{name: 'VitaminaE'}]
        });
    }

    const irParaHankingAcucar = () => {
        navigation.reset({
            routes: [{name: 'Acucar'}]
        });
    }

    const irParaHankingSodio = () => {
        navigation.reset({
            routes: [{name: 'Sodio'}]
        });
    }

    const voltarHome = () => {
        navigation.reset({
            routes: [{name: 'Home'}]
        });
    }

    return(
        <Container>
            <Scroller>
                
                <HeaderArea>
                    <ContainerBack onPress={voltarHome}>
                        <Image
                            source={back}
                            style={styles.tinyLogo}
                            
                        />
                    </ContainerBack>
                    
                    <HeaderTitle> Ranking de Custo Benefício Nutricional</HeaderTitle>
                        <Image
                            source={money}
                            style={styles.tinyLogo} 
                        />
                </HeaderArea>
                
                <CategoryArea>
                    <ContainerTypeRanking onPress={irParaHankingProteina}>
                        <CategoryTitle>Proteína</CategoryTitle>
                    </ContainerTypeRanking>

                    <ContainerTypeRanking onPress={irParaHankingCalcio}>
                        <CategoryTitle>Cálcio</CategoryTitle>
                    </ContainerTypeRanking>

                    <ContainerTypeRanking onPress={irParaHankingFerro}>
                        <CategoryTitle>Ferro</CategoryTitle>
                    </ContainerTypeRanking>

                    <ContainerTypeRanking onPress={irParaHankingFibra}>
                        <CategoryTitle>Fibra</CategoryTitle>
                    </ContainerTypeRanking>

                    <ContainerTypeRanking onPress={irParaHankingVitaminaA}>
                        <CategoryTitle>Vitamina A</CategoryTitle>
                    </ContainerTypeRanking>

                    <ContainerTypeRanking onPress={irParaHankingVitaminaC}>
                        <CategoryTitle>Vitamina C</CategoryTitle>
                    </ContainerTypeRanking>

                    <ContainerTypeRanking onPress={irParaHankingVitaminaD}>
                        <CategoryTitle>Vitamina D</CategoryTitle>
                    </ContainerTypeRanking>

                    <ContainerTypeRanking onPress={irParaHankingVitaminaE}>
                        <CategoryTitle>Vitamina E</CategoryTitle>
                    </ContainerTypeRanking>

                    <ContainerTypeRanking onPress={irParaHankingAcucar}>
                        <CategoryTitle>Açúcar</CategoryTitle>
                    </ContainerTypeRanking>

                    <ContainerTypeRanking onPress={irParaHankingSodio}>
                        <CategoryTitle>Sódio</CategoryTitle>
                    </ContainerTypeRanking>

                </CategoryArea>
               
                
                
            </Scroller>
        </Container>
    );
}

export default RankingCustoBeneficio;