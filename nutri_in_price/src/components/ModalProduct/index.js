import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet,Text} from 'react-native';

import {
    Container,
    ProductTitle,
    AreaProduct,
    ProductPrice,
    
} from './styles';

import ovos from "../../assets/egg.png";

export const ModalProduct = (props) => {


    const styled = StyleSheet.create({
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
   

    return(
        <Container>
            {/* <Image
                source={ovos}
                style={styled.tinyLogo} 
            /> */}
            <AreaProduct>
                <ProductTitle>{props.produto}</ProductTitle>
                <ProductPrice>A cada 100g: ${props.preco_medio_nutriente}</ProductPrice>
            </AreaProduct>
            
        </Container>
    );
}

export default ModalProduct;