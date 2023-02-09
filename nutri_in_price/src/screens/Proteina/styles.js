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

export const PageBody = styled.ScrollView`
    background-color: #FFFFFF;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    margin-top:20%;
  
`;

export const TextHeather = styled.Text`
    width: 250px;
    font-size: 20px;
    font-weight: bold;
    color: #004521;
    margin-top: 5%;
    margin-left: 20px;
`;


export const RankingArea = styled.ScrollView`
    flex-direction: column;
    margin-left: 15px;
`;
