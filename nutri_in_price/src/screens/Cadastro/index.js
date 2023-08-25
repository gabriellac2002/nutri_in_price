import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea ,
    CustomButton,
    CustomButtonText,
} from './styles';

import {View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
   
} from "react-native";

import app from '../../config/firebase';

import SingInput from "../../components/SingInput";
import Logo from '../../components/Logo/index';

import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import PersonIcon from "../../assets/person.svg"
import LogoEmbrapa from '../../assets/Logomarca-Embrapa.svg'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const Cadastro = ({navigation}) => {

    

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    

    const registerFirebase = ()=>{

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
         console.log('cadastrou')
          const user = userCredential.user;
          navigation.reset({
            routes: [{name: 'Home'}]
        });
            //console.log(user);
        })
 
        .catch((error) => {
            setErrorRegister(true)

            let errorCode = error.code;
            let errorMessage = error.message;
         console.log(errorMessage);
        });
    }

    useEffect(()=>{

    }, []);

    return(
        <Container>

            <Logo/>

            <InputArea>
                <TextInput 
                
                placeholder = "Insira seu e-mail"
                type = "text"
                onChangeText = {(text) => setEmail(text)}
                value={email}
                />

                <TextInput
               
                secureTextEntry={true}
                placeholder = "Insira sua senha"
                type = "text"
                onChangeText = {(text) => setSenha(text)}
                value={senha}
                />

                <CustomButton onPress={registerFirebase}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

        </Container>
    );
}

export default Cadastro;
