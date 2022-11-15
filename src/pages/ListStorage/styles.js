import styled from "styled-components";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const Title = styled.Text`
    color: black;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
`;

export const InputText = styled.TextInput`
    width: 87%;
    height: 40px;
    background-color: white;
    border-radius: 16px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Trace = styled.View`
    width: 100%;
    height: 2px;
    background-color: #9a9a9a;
    border-radius: 10px;
`;
export const SmallTrace = styled.View`
    width: 60%;
    height: 2px;
    background-color: #9a9a9a;
    border-radius: 10px;
`;