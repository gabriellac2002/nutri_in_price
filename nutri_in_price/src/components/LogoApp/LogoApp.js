import React from 'react';
import { Image } from 'react-native';
import { Container } from './logoapp_styles';
import Logo from '../../assets/Logo.png';

function LogoApp(){
    return(
        <Container>
            <Image
                source={Logo}
            />
        </Container>
    )
}

export default LogoApp;