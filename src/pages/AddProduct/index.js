import { View, StyleSheet } from 'react-native';

import {
    Title,
    Label,
    Container,
    ContainerInput,
    InputText,
    InputValue,
    InputBarCode,
    Background
} from './styles';

import ButtonBarCode from '../../components/buttonBarCode';
import ButtonAddImage from '../../components/buttonAddImage';
import CancelActionButton from '../../components/cancelActionButton';

function AddProductPage() {
    return (
        <Container>
            <Background>

            <Title>Cadastro de Produto</Title>

            <ContainerInput>
                <Label>Marca</Label>
                <InputText/>
            </ContainerInput>

            <ContainerInput>
                <Label>Tipo</Label>
                <InputText/>
            </ContainerInput>

            <ContainerInput>
                <Label>Descrição</Label>
                <InputText/>
            </ContainerInput>

            <View style={styles.precoQuantidade}>
               
                <ContainerInput>
                    <Label>Preço R$</Label>
                    <InputValue/>
                </ContainerInput>
                
                <ContainerInput>
                    <Label>Quantidade</Label>
                    <InputValue/>
                </ContainerInput>

            </View>

            <ContainerInput>

                <Label>Código de barras</Label>

                <View style={{flexDirection: 'row'}}>
                    <InputBarCode />
                    <ButtonBarCode/>
                </View>

            </ContainerInput>
            
            <View style={styles.buttomAddImg}>
                <ButtonAddImage/>
            </View>

            <CancelActionButton text="Cancelar"/>
            
            </Background>
        </Container>
    );
}

const styles = StyleSheet.create({
    precoQuantidade: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttomAddImg: {
        alignItems: 'center',
        marginTop: 20
    }
});

export default AddProductPage;