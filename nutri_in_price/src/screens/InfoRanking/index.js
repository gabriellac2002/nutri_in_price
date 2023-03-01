import React from "react";
import {StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

import closeButton from '../../assets/close.png';

import { 
    Container,
    TextArea,
    ModalArea,
    Text,
    ButtonClose
} from './styles';

export const InfoRanking = () => {

    
    const styles = StyleSheet.create({
        tinyLogo: {
          width: 50,
          height: 50,
        },

        
    });

    const navigation = useNavigation();

    const closeModal = () => {
        navigation.reset({
            routes: [{name: 'Proteina'}]
        });
    }

    return(
        <Container>
            <TextArea>
                <ModalArea>
                    <Text>
                        O preço mostrado ao lado dos produtos é equivalente ao custo-beneficio do nutriente
                        encontrado a cada 100 gramas.
                    </Text>
                </ModalArea>
            </TextArea>
            <ButtonClose onPress={closeModal}>
                <Image
                    source={closeButton}
                    style={styles.tinyLogo}
                />
            </ButtonClose>
        </Container>
    );
    
}

export default InfoRanking;