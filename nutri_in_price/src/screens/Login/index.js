import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


import { 
    Container,
    InputArea ,
    CustomButton,
    CustomButtonText,
    SingMessageButton,
    SingMessageButtonText,
    SingMessageButtonTextBold
} from './styles';

//componentes
import SingInput from "../../components/SingInput";
import Logo from '../../components/Logo/index';

//assets
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import LogoEmbrapa from '../../assets/Logomarca-Embrapa.svg'

export const Login = () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    function singUp(){
        auth().createUserWithEmailAndPassword(emailField,passwordField).then();
    }

    function singIn(){
        auth().signInWithEmailAndPassword(emailField,passwordField)
        .then(() => {
            logar();
        })
    }


    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Cadastro'}]
        });
    }

    const logar = () => {
        navigation.reset({
            routes: [{name: 'Home'}]
        });
    }



    return(
        <Container>

            <Logo/>

            <InputArea>
                <SingInput 
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={setEmailField}

                />
                <SingInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={setPasswordField}

                />

                <CustomButton onPress={singIn}>
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
