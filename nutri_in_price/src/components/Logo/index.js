import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles.js';

import {StyleSheet} from 'react-native';

import Logo from '../../assets/garfo_faca.png';

function LogoApp(){

    const styles = StyleSheet.create({
        tinyLogo: {
          width: 100,
          height: 100,
        },
        
    });

    return(
        <Container>
            <Image
                source={Logo}
                style={styles.tinyLogo}
            />
        </Container>
    )
}

export default LogoApp;