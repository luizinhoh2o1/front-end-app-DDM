import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Background = styled.View`
    margin-top: 80px;
    width: 95%;
    height: 700px;
    background-color: #F4F4F4;
    border-radius: 10px;
`;

export const ContainerInput = styled.View`
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const InputText = styled.TextInput`
    width: 100%;
    height: 40px;
    background-color: white;
    border-radius: 16px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const InputBarCode = styled.TextInput`
    width: 85%;
    height: 40px;
    background-color: #CCCCCC;
    border-radius: 16px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const InputValue = styled.TextInput`
    width: 120px;
    height: 40px;
    background-color: white;
    border-radius: 16px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Title = styled.Text`
    color: black;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 25px;
    font-weight: bold;
`;

export const Label = styled.Text`
    font-size: 18px;
    color: black;
    margin-left: 4px;
    width: 100%;
`;