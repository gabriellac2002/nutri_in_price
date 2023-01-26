import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #006F35;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
    margin-top:1%;
    aling-itens:center;

`;

export const HeaderArea = styled.View`
    flex: 1;
    flex-direction:row;
    padding-top: 15%;
    aling-itens:center;
    width: 100%;
    margin-botton:10%;
    aling-itens:center;
    justify-content: space-around;
`;

export const HeaderTitle = styled.Text`
    width: 70%;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    
`;