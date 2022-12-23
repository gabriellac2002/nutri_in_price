import styled from "styled-components/native";

export  const Keyboard = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #006F35;
`

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  width: 90%;
`

export const Input = styled.TextInput`
  border: 1px solid #F5F5F5;
  background-color: #F5F5F5;
  margin-bottom: 20px;
  padding: 15px 20px;
  color: #006F35;
  font-size: 15px;
  border-radius: 30px;
  width: 97%;
  heigth:5%;
`

export const BtnSubmit = styled.TouchableOpacity`
  background-color: #003c1d;
  border-radius: 30px;
  width: 90%;
  padding: 20px;
  align-items: center;
`

export const BtnGoogle = styled.TouchableOpacity`
  background-color: #E44133;
  border-radius: 30px;
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  align-items: center;
`

export const TextButton = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`