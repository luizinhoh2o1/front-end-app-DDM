import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const Background = styled.View`
    margin-top: 30px;
    width: 95%;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #F4F4F4;
    border-radius: 10px;
`;

export const Title = styled.Text`
    color: black;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
    font-weight: bold;
`;

export const Label = styled.Text`
    font-size: 18px;
    color: black;
    margin-left: 4px;
    width: 100%;
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
    width: 100%;
    height: 40px;
    background-color: #CCCCCC;
    border-radius: 16px;
    padding-left: 15px;
    padding-right: 15px;
    font-weight: bold;
    color: #4F4F4F;
`;