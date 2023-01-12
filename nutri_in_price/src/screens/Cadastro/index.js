import React from "react";
import { 
    Container,
    InputArea ,
    CustomButton,
    CustomButtonText,
} from './styles';

import SingInput from "../../components/SingInput";

import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import PersonIcon from "../../assets/person.svg"
import LogoEmbrapa from '../../assets/Logomarca-Embrapa.svg'

export const Cadastro = () => {
    return(
        <Container>

            {/* <LogoEmbrapa 
                width="32.8%" 
            /> */}

            <InputArea>
                <SingInput
                    IconSvg={PersonIcon}
                    placeholder="Nome"
                />
                <SingInput 
                    IconSvg={EmailIcon}
                    placeholder="Email"
                />
                <SingInput
                    IconSvg={LockIcon}
                    placeholder="Senha"
                />

                <CustomButton>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

        </Container>
    );
}

export default Cadastro;
