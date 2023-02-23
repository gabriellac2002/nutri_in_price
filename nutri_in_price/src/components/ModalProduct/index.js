import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet,Text} from 'react-native';

import {
    Container,
    ProductTitle,
    AreaProduct,
    ProductPrice,
    ConatinerImage
    
} from './styles';

import ovos from "../../assets/egg.png";
import carne_moida from "../../assets/carne_moida.jpg";

export const ModalProduct = (props) => {


    const styled = StyleSheet.create({
        tinyLogo: {
          width: 60,
          height: 50,
          borderRadius: 5,
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
            <ConatinerImage>
                <Image
                    source={{ uri: props.imagem }}
                    style={styled.tinyLogo} 
                />
            </ConatinerImage>
            <AreaProduct>
                <ProductTitle>{props.produto}</ProductTitle>
                <ProductPrice>A cada 100g: ${props.preco_medio_nutriente}</ProductPrice>
            </AreaProduct>
            
        </Container>
    );
}

export default ModalProduct;