import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #006F35;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 10px;
    margin-top:1%;
    aling-itens:flex-end;
`;

export const PageBody = styled.View`
    background-color: #FFFFFF;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    margin-top:40%;
`;

export const ProductInfoArea = styled.View`
    flex-direction: row;
    margin-top: -30px;
`;

export const ProductImage = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFFFFF;
`;

export const ProductInfo = styled.View`
    flex: 1;
    justify-content: flex-end;
`;

export const ProductInfoName = styled.Text`
    color: #004521;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const InfoArea = styled.View`
    margin-top: 30px;
    padding: 5%;
`;

export const ContainerPreco = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ProductPrice = styled.Text`
    font-size: 14px;
    color: #000000;
    margin-left: 1%;
`;

export const InfoText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #000000;
`;

export const InfoText2 = styled.Text`
    font-size: 14px;
    color: #000000;
`;