import React, { useState, useContext,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet} from 'react-native';

import {
    Container,
    Scroller,

    PageBody,
    TextHeather,

    RankingArea,

    
} from './styles';

import back from "../../assets/voltar.png";

import ModalProduct from '../../components/ModalProduct/index';


export const Proteina = () => {

    const [alimentos,setAlimentos] = useState([]);

    useEffect(  () => {
        fetch('http://192.168.2.102:8000/alimentos/1/33').then((res) => res.json().then(data => setAlimentos(data)))
    },[alimentos]);

    const styles = StyleSheet.create({
        tinyLogo: {
          width: 30,
          height: 30,
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
                <Image
                    source={back}
                    style={styles.tinyLogo}
                    mb={10}
                    onPress={irParaHankingProteina} 
                />

               <PageBody>   
                    <TextHeather>Ranking de Proteinas</TextHeather>
                    <RankingArea>
                        {alimentos.map((alimento) => <ModalProduct 
                            key={alimento.toString()}
                            value={alimento}
                            produto = {alimento.produto}
                            preco_medio_nutriente = {alimento.preco_medio_nutriente}
                        />)}
                        
                    </RankingArea>
               </PageBody> 
            </Scroller>
        </Container>
    );
}

export default Proteina;