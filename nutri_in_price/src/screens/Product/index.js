import React, { useState, useContext,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import { Image } from 'react-native';

//views
import {
    Container,
    Scroller,
    PageBody,
    ProductInfoArea,
    ProductImage,
    ProductInfo,
    ProductInfoName,
    InfoArea,
    InfoText,
    InfoText2,
    ProductPrice,
    ContainerPreco,
    TabelaArea,
    AreaTitle,
    ListArea,
    ItemArea,
    TabelaHead,
    TextTabelaHead,
    Coluna
} from './styles';

import carne_moida from '../../assets/carne_moida.jpg';


export const Product = ({route}) => {

    const [nutrientes,setNutrientes] = useState([]);

    useEffect(  () => {
        fetch(`http://200.131.52.34:3000/alimento_nutriente/${route.params.paramKey.codigo}`).then((res) => res.json().then(data => setNutrientes(data)))
    },[nutrientes]);

    return(
        <Container>
            <Scroller>
                <PageBody key={route.params.paramKey}>

                    <ProductInfoArea>

                        <ProductImage source={carne_moida}></ProductImage>

                        <ProductInfo>
                            <ProductInfoName>{route.params.paramKey.produto}</ProductInfoName>
                        </ProductInfo>

                    </ProductInfoArea>

                    <InfoArea>
                        <ContainerPreco>
                            <InfoText>Custo-benefício:</InfoText>
                            <ProductPrice>R${route.params.paramKey.preco_medio_nutriente}</ProductPrice>
                        </ContainerPreco>
                        <InfoText2>
                            O preço apresentado equivale ao custo-benefício do nutriente 
                            para cada 100g da {route.params.paramKey.produto}.
                        </InfoText2>
                    </InfoArea>

                    <TabelaArea>

                        <AreaTitle>
                            <ProductInfoName>Informações Nutricionais</ProductInfoName>
                        </AreaTitle>

                        <ListArea>
                            <TabelaHead>
                                <Coluna>
                                    <TextTabelaHead>Nutrientes</TextTabelaHead>
                                </Coluna>
                                <Coluna>
                                    <TextTabelaHead>Quantidade</TextTabelaHead>
                                </Coluna> 
                            </TabelaHead>
                            {nutrientes.map((nutriente) => 
                                <ItemArea key={nutriente.nutriente_id}>
                                    <TabelaHead>
                                        <Coluna>
                                            <TextTabelaHead>
                                                {nutriente.nome}
                                            </TextTabelaHead>
                                        </Coluna>
                                        <Coluna>
                                            <TextTabelaHead>{nutriente.quantidade}{nutriente.unidade}</TextTabelaHead>
                                        </Coluna>
                                    </TabelaHead>
                                </ItemArea>
                            )}
                        </ListArea>

                    </TabelaArea>

                </PageBody>
            </Scroller>
        </Container>
    );
    
}

export default Product;