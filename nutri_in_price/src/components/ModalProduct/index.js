import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {StyleSheet,Text} from 'react-native';

import {
    ProductItem,
    ProductInfo,
    ProductName,
    ProductPrice,
    RankingButton,
    RankingBtnText
    
} from './styles';


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

    const infoProduct = () => {
        navigation.reset({
            routes: [{name: 'Product'}]
        });
    }

    
   

    return(
       <ProductItem onClick={infoProduct} key={props.codigo} >
            <RankingButton>
                <RankingBtnText>{props.lugar_ranking}</RankingBtnText>
            </RankingButton>

           <Image
                source={carne_moida}
                style={styled.tinyLogo} 
            />

            <ProductInfo>
                <ProductName>{props.produto}</ProductName>
                <ProductPrice>R${props.preco_medio_nutriente}</ProductPrice>
            </ProductInfo>
       </ProductItem>
    );
}

export default ModalProduct;