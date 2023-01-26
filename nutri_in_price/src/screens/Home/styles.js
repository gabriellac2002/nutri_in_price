import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFFFFF;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
    margin-top:20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    align-items: center;
    height: 60px;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 20px;
    font-weight: bold;
    color: #004521;
    margin-left: 3%;
   
`;
export const BellBotton = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    
`;
export const SearchArea = styled.View`
    background-color: #004521;
    height: 60px;
    border-radius: 30px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;
export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #FFFFFF;
`;
export const SearchBotton = styled.TouchableOpacity`
    color: #FFFFFF;
`;
export const RankingArea = styled.View`
    width: 90%;
    padding: 40px;
    margin-left: 5%;
    margin-right:5%;
    margin-top: 20px;
    background-color: #F5F2F2 ;
    border-radius: 30px;
    
`;
export const ButtonCustoBeneficio = styled.TouchableOpacity`
    width: 100%;
    background-color: #FFFFFF;
    padding: 15px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
`;
export const ButtonDensidade = styled.TouchableOpacity`
    width: 100%;
    background-color: #FFFFFF;
    padding: 15px;
    border-radius: 10px;
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
`;
export const MessageRankingButton = styled.Text`
    font-size: 14px;
    color: #004521;
    font-weight: bold;
    margin-left: 5%;
`;

export const MessageRankingButtonDens = styled.Text`
    font-size: 14px;
    color: #004521;
    font-weight: bold;
    margin-left: 1%;
`;