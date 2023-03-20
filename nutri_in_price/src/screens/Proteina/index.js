import React, { useState, useContext,useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView } from 'react-native';
import {StyleSheet} from 'react-native';

import {
    Container,
    Scroller,

    AreaBackButton,

    PageBody,
    TextHeather,
    AreaTitle,

    RankingArea,

    
} from './styles';

import back from "../../assets/voltar.png";
import info from "../../assets/info_asset.png";

import ModalProduct from '../../components/ModalProduct/index';



export const Proteina = () => {

    const [alimentos,setAlimentos] = useState([]);
    


    useEffect(  () => {
        fetch('http://200.131.52.34:3000/alimentos/1/33').then((res) => res.json().then(data => setAlimentos(data)))
    },[alimentos]);

    const styles = StyleSheet.create({
        tinyLogo: {
          width: 30,
          height: 30,
        },

        
    });

    const navigation = useNavigation();

    const backButtom = () => {
        navigation.reset({
            routes: [{name: 'Ranking_custo_beneficio'}]
        });
    }

    const infoButton = () => {
        navigation.reset({
            routes: [{name: 'Info'}]
        });
    }

    const productInfo = () => {
        navigation.reset({
            routes: [{name: 'Product'}]
        });
    }


    let lugar_ranking = 0 ;

    return(
        <Container>
            <ScrollView>
                <Scroller>
                    <AreaBackButton onPress={backButtom}>
                        <Image
                            source={back}
                            style={styles.tinyLogo}
                            mb={10}
                        />
                    </AreaBackButton>

                    <ScrollView>
                        <PageBody>  
                            <ScrollView>

                                <AreaTitle>
                                    <TextHeather>Ranking de Proteínas</TextHeather>
                                    <AreaBackButton onPress={productInfo}>
                                        <Image
                                            source={info}
                                            style={styles.tinyLogo}
                                            
                                        />
                                    </AreaBackButton>
                                </AreaTitle>
                                

                                <RankingArea>
                                    
                                    {alimentos.map((alimento) => <ModalProduct 
                                        key={alimento.codigo}
                                        value={alimento.codigo}

                                        lugar_ranking = {++lugar_ranking}

                                        produto = {alimento.produto}
                                        preco_medio_nutriente = {alimento.preco_medio_nutriente}
                                        
                                    />)}

                                    
                                    
                                </RankingArea>
                            </ScrollView> 
                        </PageBody> 
                    </ScrollView>
                </Scroller>
            </ScrollView>

        </Container>
    );
}

export default Proteina;