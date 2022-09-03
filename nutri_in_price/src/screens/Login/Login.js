import React from 'react';
import {Keyboard,Container,Input,BtnSubmit,TextButton, BtnGoogle} from './login_styles';
import LogoApp from '../../components/LogoApp/LogoApp';

function Login(){
    return(
        
        <Keyboard>
            
            <Container>
            <LogoApp/> 
                <Input
                    placeholder="E-mail"
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry
                />
                <BtnSubmit>
                    <TextButton>Logar</TextButton>
                </BtnSubmit>
                <BtnGoogle>
                    <TextButton>Entre com o email do Google</TextButton>
                </BtnGoogle>
            </Container>
        </Keyboard>
    )
}

export default Login;