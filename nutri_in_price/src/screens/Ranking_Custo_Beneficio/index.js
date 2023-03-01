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
                        <CategoryTitle>Proteinas</CategoryTitle>
                    </ContainerTypeRanking>
                </CategoryArea>
               
                
                
            </Scroller>
        </Container>
    );
}

export default RankingCustoBeneficio;