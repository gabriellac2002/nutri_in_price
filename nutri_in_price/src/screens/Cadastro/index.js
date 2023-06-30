import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea ,
    CustomButton,
    CustomButtonText,
} from './styles';
import auth from '@react-native-firebase/auth';

import SingInput from "../../components/SingInput";
import Logo from '../../components/Logo/index';

import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import PersonIcon from "../../assets/person.svg"
import LogoEmbrapa from '../../assets/Logomarca-Embrapa.svg'

export const Cadastro = () => {

    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleButtonClick = () => {
        navigation.reset({
            routes: [{name: 'QuestionOne'}]
        });
    }

    return(
        <Container>

            <Logo/>

            <InputArea>
                <SingInput
                    IconSvg={PersonIcon}
                    placeholder="Nome"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                />
                <SingInput 
                    IconSvg={EmailIcon}
                    placeholder="Email"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />
                <SingInput
                    IconSvg={LockIcon}
                    placeholder="Senha"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                />

                <CustomButton onPress={handleButtonClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

        </Container>
    );
}

export default Cadastro;
