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
    height: 600px;
    margin-top:40%;
    flex-direction: row;
`;

export const TextHeather = styled.Text`
    width: 250px;
    font-size: 20px;
    font-weight: bold;
    color: #004521;
    margin-top: 5%;
    margin-left: 5px;
`;

export const ImageArea = styled.View`
    background-color: #BEB6B6;
    border-radius: 10px;
    width: 30%;
    height: 100px;
    flex-direction: row;
    aling-itens:center;
    justify-content:center;
    margin-left: 15px;
    margin-top:-10%;
    padding: 20px;
`;

export const RankingArea = styled.View`
    flex-direction: column;
`;
