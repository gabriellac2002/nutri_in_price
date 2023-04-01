import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import { Image } from 'react-native';

//views
import {
    Container,
    Scroller,
    PageBody,
    ProductInfoArea,
    ProductImage,
    ProductInfo,
    ProductInfoName,
    InfoArea,
    InfoText,
    InfoText2,
    ProductPrice,
    ContainerPreco
} from './styles';

import carne_moida from "../../assets/carne_moida.jpg";


export const Product = ({route}) => {

    return(
        <Container>
            <Scroller>
                <PageBody key={route.params.paramKey}>

                    <ProductInfoArea>

                        <ProductImage source={carne_moida}></ProductImage>

                        <ProductInfo>
                            <ProductInfoName>{route.params.paramKey.produto}</ProductInfoName>
                        </ProductInfo>

                    </ProductInfoArea>

                    <InfoArea>
                        <ContainerPreco>
                            <InfoText>Preço:</InfoText>
                            <ProductPrice>R${route.params.paramKey.preco_medio_nutriente}</ProductPrice>
                        </ContainerPreco>
                        <InfoText2>
                            O preço apresentado equivale ao custo-benefício do nutriente 
                            para cada 100g da {route.params.paramKey.produto}.
                        </InfoText2>
                    </InfoArea>

                </PageBody>
            </Scroller>
        </Container>
    );
    
}

export default Product;