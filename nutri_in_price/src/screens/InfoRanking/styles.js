import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #006F35;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const TextArea = styled.View`
    width: 90%;
    padding: 40px;
    margin-left: 5%;
    margin-right:5%;
    background-color: #FFF;
    border-radius: 30px;
`;

export const ModalArea = styled.TouchableOpacity`
    justify-content: center;
    aling-itens: center;
`;

export const ButtonClose = styled.TouchableOpacity`
    background-color: #FFF;
    border-radius: 30px;
    margin-top:10%;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: #006F35;
    font-weight: bold;
`;