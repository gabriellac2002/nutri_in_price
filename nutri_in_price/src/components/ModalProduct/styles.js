import React from "react";
import styled from "styled-components/native";

export const ProductItem = styled.TouchableOpacity`
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
    color: #003c1d;
`;
export const ProductPrice = styled.Text`
    font-size: 14px;
    color: #000000;
`;

export const RankingButton = styled.TouchableOpacity`
    background-color: #006F35;
    border-radius: 10px;
    padding: 10px 15px;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`;
export const RankingBtnText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFFFFF;
`;

