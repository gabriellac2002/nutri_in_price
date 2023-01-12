import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #006F35;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #005529;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const SingMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    aling-itens: center;
    margin-top: 50px;
    margin-bottom: 20px; 
`;

export const SingMessageButtonText = styled.Text`
    font-size: 16px;
    color: #FFF;
`;

export const SingMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
    margin-left: 5px;
`;

