import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet} from 'react-native';

import {
    Container,
    Scroller,

    PageBody,
    ImageArea,
    TextHeather,

    RankingArea,

    
} from './styles';

import proteina from "../../assets/egg.png";

import ModalProduct from '../../components/ModalProduct/index';


export const Proteina = () => {

    const styles = StyleSheet.create({
        tinyLogo: {
          width: 70,
          height: 60,
        },

        
    });


    return(
        <Container>
            <Scroller>
               <PageBody>
                    <ImageArea>
                        <Image
                            source={proteina}
                            style={styles.tinyLogo} 
                        />
                    </ImageArea>  

                    <TextHeather>Ranking de Proteinas</TextHeather>

                    <RankingArea>
                        <ModalProduct/>
                    </RankingArea>
               </PageBody> 
            </Scroller>
        </Container>
    );
}

export default Proteina;