import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../config/firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
   
} from "react-native";

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
import Logo from '../../components/Logo/index';

//assets
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import LogoEmbrapa from '../../assets/Logomarca-Embrapa.svg'

export default function Login({ navigation }){

    //const navigation = useNavigation();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'Cadastro'}]
        });
    }

    const loginFirebase = ()=>{

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            let user = userCredential.user;
            console.log('logou')
            //navigation.navigate('Home')
            console.log(user)
            navigation.reset({
                routes: [{name: 'Home'}]
            });
   
        })
        
        .catch((error) => {
            setErrorLogin(true)
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(email)
            console.log(senha)
            console.log(errorMessage)
        
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
                style={style.input}
                />

                <TextInput
                secureTextEntry={true}
                placeholder = "Insira sua senha"
                type = "text"
                onChangeText = {(text) => setSenha(text)}
                value={senha}
                style={style.input}
                />

                

                <CustomButton onPress={loginFirebase}>
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

import { StyleSheet } from "react-native";

const style = StyleSheet.create(
{

    input:{
        marginTop:10,
        marginBottom:25,
        padding:10,
        height:50,
        width:250,
        borderBottomWidth:1,
        borderBottomColor: "#fff",
        marginLeft:10,
        marginRight:20,
        color:"#89c289"
    }

});