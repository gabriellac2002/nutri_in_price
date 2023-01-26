import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet} from 'react-native';

import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    BellBotton,
    SearchArea,
    SearchInput,
    SearchBotton,
    RankingArea,
    ButtonCustoBeneficio,
    ButtonDensidade,
    MessageRankingButton,
    MessageRankingButtonDens,
} from './styles';

import BellIcon from "../../assets/notifications.png";
import SearchIcon from "../../assets/search.png";

import money from "../../assets/money.png";
import garfo from "../../assets/comida.png";
import account from "../../assets/account_circle.png";

export const Home = () => {

    const styles = StyleSheet.create({
        tinyLogo: {
          width: 30,
          height: 30,
        },
        
    });

    const navigation = useNavigation();

    const irParaHankingCustoBeneficio = () => {
        navigation.reset({
            routes: [{name: 'Ranking_custo_beneficio'}]
        });
    }


    return(
        <Container>
            <Scroller>

                <HeaderArea>
                    <Image
                        source={account}
                        style={styles.tinyLogo} 
                    />
                    <HeaderTitle>Olá, nome do usuario</HeaderTitle>
                    <BellBotton>
                        <Image
                            source={BellIcon}
                            style={styles.tinyLogo} 
                        />
                    </BellBotton>
                </HeaderArea>

                <SearchArea>
                    <SearchInput/>
                    <SearchBotton>
                        <Image
                            source={SearchIcon}
                            style={styles.tinyLogo} 
                        />
                    </SearchBotton>
                </SearchArea>

                <RankingArea>
                    <ButtonCustoBeneficio onPress={irParaHankingCustoBeneficio}>
                        <Image
                            source={money}
                            style={styles.tinyLogo} 
                        />
                        <MessageRankingButton>Custo Benefício Nutricional</MessageRankingButton>
                    </ButtonCustoBeneficio>
                    <ButtonDensidade>
                        <Image
                            source={garfo}
                            style={styles.tinyLogo} 
                        />
                        <MessageRankingButtonDens>Densidade Nutricional</MessageRankingButtonDens>
                    </ButtonDensidade>
                </RankingArea>
            </Scroller>
        </Container>
    );
}

export default Home;