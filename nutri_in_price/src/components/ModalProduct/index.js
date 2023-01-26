import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet} from 'react-native';

import {
    Container,
    ProductTitle
    
} from './styles';

import ovos from "../../assets/bandeja_ovos.jpg";

export const ModalProduct = () => {

    const styled = StyleSheet.create({
        tinyLogo: {
          width: 40,
          height: 30,
        },
        
    });

   

    return(
        <Container>
            {/* <Image
                source={ovos}
                style={styled.tinyLogo} 
            /> */}
            {/* <ProductTitle>Ovos</ProductTitle> */}
        </Container>
    );
}

export default ModalProduct;