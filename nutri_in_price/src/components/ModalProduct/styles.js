import React from "react";
import styled from "styled-components/native";

export const ProductItem = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    margin-top: 20px;
`;
export const ProductInfo = styled.View`
    flex: 1;
    margin-left: 5%;
`;
export const ProductName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #006F35;
`;
export const ProductPrice = styled.Text`
    font-size: 14px;
    color: #006F35;
`;

export const ServiceChooseButton = styled.TouchableOpacity`
    background-color: #4EADBE;
    border-radius: 10px;
    padding: 10px 15px;
`;
export const ServiceChooseBtnText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
`;

