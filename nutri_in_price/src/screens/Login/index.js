import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';


import { 
    Container,
    InputArea ,
    CustomButton,
    CustomButtonText,
    SingMessageButton,
    SingMessageButtonText,
    SingMessageButtonTextBold
} from './styles';

import SingInput from "../../components/SingInput";

import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import LogoEmbrapa from '../../assets/Logomarca-Embrapa.svg'

export const Login = () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Cadastro'}]
        });
    }



    return(
        <Container>

            {/* <LogoEmbrapa 
                width="32.8%" 
            /> */}

            <InputArea>
                <SingInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}

                />
                <SingInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}

                />

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SingMessageButton onPress={handleMessageButtonClick}>
                <SingMessageButtonText>Ainda não possui um aconta?</SingMessageButtonText>
                <SingMessageButtonTextBold >Cadastre-se</SingMessageButtonTextBold>
            </SingMessageButton>

        </Container>
    );
}

export default Login;
