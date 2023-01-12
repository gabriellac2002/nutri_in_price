import React from "react";
import styled from "styled-components/native";

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-ssize: 16px;
    color: #005529;
    margin-left: 10px;
`;

export const SingInput = ({IconSvg, placeholder}) => {
    return(
        <InputArea>
            <IconSvg width="24" heigth="24" fill="#005529" />
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#268596"
            />
        </InputArea>
    );
}

export default SingInput;