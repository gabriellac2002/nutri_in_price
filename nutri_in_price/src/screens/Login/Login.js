import React from 'react';
import {Keyboard,Container,Input,BtnSubmit,TextButton, BtnGoogle} from './login_styles';
import LogoApp from '../../components/LogoApp/LogoApp';
import Icon from 'react-native-vector-icons/AntDesign';


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
                    <TextButton>Entrar</TextButton>
                </BtnSubmit>
                <BtnGoogle>
                    <Icon name='googleplus' size={20} color='#fff'/>
                    <TextButton>Entrar com o Google</TextButton>
                </BtnGoogle>
            </Container>
        </Keyboard>
    )
}

export default Login;