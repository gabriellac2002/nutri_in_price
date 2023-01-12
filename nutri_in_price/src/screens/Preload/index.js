import React, { useEffect } from "react";
import { Container,TextTiTle } from './styles';

import LogoEmbrapa from '../../assets/Logomarca-Embrapa.svg'
import Logo from '../../assets/logo.svg'

export const Preload = () => {
    return(
        <Container> 
            <Logo 
                width="100%"
                heigth="10"
            />
            <TextTiTle> Nutri in Price </TextTiTle>
            <LogoEmbrapa 
                width="32.8%" 
                // margin-top="10px" 
            />
        </Container>
    );
} 

export default Preload;