import React, { useState, useContext,useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView,Button, Text} from 'react-native';
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

import ModalAlimento from '../../components/ModalAlimento/index';



export const RankingDensidadeNutricional = () => {

    const [alimentos,setAlimentos] = useState([]);
    


    useEffect(  () => {
        fetch('http://200.131.52.34:3000/densidade_nutricional').then((res) => res.json().then(data => setAlimentos(data)))
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
            routes: [{name: 'Home'}]
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

    const [alimento, setAlimento] = useState('DeveloperPlus');


    let lugar_ranking = 0 ;

    const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);


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
                                    <TextHeather>Ranking densidade nutricional</TextHeather>
                                    <AreaBackButton onPress={infoButton}>
                                        <Image
                                            source={info}
                                            style={styles.tinyLogo}
                                            
                                        />
                                    </AreaBackButton>
                                </AreaTitle>
                                

                                <RankingArea>
                                    
                                    {alimentos.map((alimento) => <ModalAlimento 
                                        key={alimento.codigo}
                                        value={alimento.codigo}

                                        lugar_ranking = {++lugar_ranking}

                                        nome = {alimento.nome}
                                        densidade = {alimento.densidade}
                                        // imagem = {alimento.imagem}
                                        
                                        onPress={() => 
                                            {
                                                navigation.navigate('Product', {
                                                paramKey: alimento
                                            })
                                           
                                        }
                                            
                                            
                                        }

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

export default RankingDensidadeNutricional;