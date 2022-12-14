import styled from "styled-components";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
`;

export const ProductImage = styled.Image`
    height: 120px;
    width: 120px;
    margin-bottom: 20px;
`;

export const Label = styled.Text`
    font-size: 18px;
    color: black;
    font-weight: 600;
    margin-left: 4px;
    width: 100%;
`;

export const TextData = styled.Text`
    font-size: 18px;
    color: #959595;
    margin-left: 4px;
    width: 100%;
`;

export const SmallTrace = styled.View`
    width: 80%;
    height: 2px;
    background-color: #d7d7d7;
    border-radius: 10px;
`;