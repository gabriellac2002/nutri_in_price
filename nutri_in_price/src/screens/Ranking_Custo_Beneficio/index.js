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
    CategoryArea
} from './styles';

//componentes
import CategoriaRanking from '../../components/CategoriaRanking';

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

    const voltarHome = () => {
        navigation.reset({
            routes: [{name: 'Home'}]
        });
    }

    return(
        <Container>
            <Scroller>
                
                <HeaderArea>
                    <Image
                        source={back}
                        style={styles.tinyLogo}
                        onPress={voltarHome} 
                    />
                    <HeaderTitle> Ranking de Custo Benefício Nutricional</HeaderTitle>
                        <Image
                            source={money}
                            style={styles.tinyLogo} 
                        />
                </HeaderArea>
                
                <CategoryArea onPress={irParaHankingProteina}>
                    <CategoriaRanking  nomeCategoria = {"Proteina"}/>
                </CategoryArea>
               
                <CategoriaRanking nomeCategoria = {"Carboidratos"}/>
                <CategoriaRanking nomeCategoria = {"Lactose"}/>
                <CategoriaRanking nomeCategoria = {"Proteina"}/>
                
            </Scroller>
        </Container>
    );
}

export default RankingCustoBeneficio;