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
                    O preço apresentado para cada produto equivale ao custo-benefício do nutriente para cada 100g do alimento. O custo-benefício considera 30% da Recomendação Diária de um Nutriente, a quantidade do nutriente no alimento e o preço de 100 gramas do produto alimentício. Assim, para consumir 30% da recomendação diária do nutriente , deve-se consumir 100 gramas do alimento  e o custo para isso é o valor exibido. Esse ranking é exibido de forma a apresentar uma lista dos alimentos que possuem um melhor custo-benefício, de modo a permitir ao consumidor escolher um produto que se gaste menos para consumir o nutriente em questão.
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