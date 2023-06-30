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


export const ModalAlimento = ({onPress,...props}) => {


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
       <ProductItem  key={props.produto} onPress={onPress}>
            <RankingButton>
                <RankingBtnText>{props.lugar_ranking}</RankingBtnText>
            </RankingButton>

           <Image
                style={styled.tinyLogo} 
                source={{
                    uri: `${props.imagem}`+'.png',
                }}
            />

            <ProductInfo>
                <ProductName>{props.nome}</ProductName>
                <ProductPrice>{props.densidade}</ProductPrice>
            </ProductInfo>
       </ProductItem>
    );
}

export default ModalAlimento;