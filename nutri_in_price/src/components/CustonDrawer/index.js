//libs
import react from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import styled from "styled-components/native";

//assets
import user from '../../assets/account_circle.png';

const CustonDrawer = (props) => {

    //estilos
    const HeatherDrawer = styled.View`
        background-color: #00843F;
        flex-direction: row;
        aling-itens:center;
        
        height: 60%;
    `;

    const UserImage = styled.Image`
        width: 50px;
        height: 50px;
        border-radius: 30px;

        margin-left: 10px;
        margin-top: 25px;

        border-width: 2px;
        border-color: #FFFFFF;
    `;

    const HeatherTitle = styled.Text`
        color: #FFFFFF;
        margin-top: 40px;
        margin-left: 10px;
        font-weight: bold;
        font-size: 15px;
    `;

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView 
                {...props}
                contentContainerStyle={{backgroundColor: '#FFFFFF'}}
            >
                <HeatherDrawer>
                    <UserImage source={user}/>
                    <HeatherTitle>Nome do usuario</HeatherTitle>
                </HeatherDrawer>
                <DrawerItemList {...props}></DrawerItemList>
            </DrawerContentScrollView>
            <View>
                <Text>Teste</Text>
            </View>
        </View>
    );
}

export default CustonDrawer;