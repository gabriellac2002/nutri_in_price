import React from "react";
import { Text } from "react-native";
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
    return(
        <Container>

            {/* <LogoEmbrapa 
                width="32.8%" 
            /> */}

            <InputArea>
                <SingInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                />
                <SingInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                />

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SingMessageButton>
                <SingMessageButtonText>Ainda não possui um aconta?</SingMessageButtonText>
                <SingMessageButtonTextBold>Cadastre-se</SingMessageButtonTextBold>
            </SingMessageButton>

        </Container>
    );
}

export default Login;
