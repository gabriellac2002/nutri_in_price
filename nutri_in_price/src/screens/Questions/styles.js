import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #006F35;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const QuestionArea = styled.View`
    width: 90%;
    padding: 40px;
    margin-left: 5%;
    margin-right:5%;
    background-color: #FFF;
    border-radius: 30px;
`;

export const MessageQuestionArea = styled.TouchableOpacity`
    justify-content: center;
    aling-itens: center;
    margin-top: 50px;
    margin-bottom: 20px; 
`;

export const TextQuestion = styled.Text`
    font-size: 16px;
    color: #006F35;
    font-weight: bold;
`;

export const Input = styled.TextInput`
    flex: 1;
    font-ssize: 16px;
    color: #005529;
    margin-left: 10px;
    border-bottom: 3px solid #006F35;
`;