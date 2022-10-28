import {
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';

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
import SaveActionButton from '../../components/saveActionButton';

function AddProductPage( {route} ) {

    const navigation = useNavigation();

    // scannerEANPage abre pagina de Scanner
    function scannerEANPage() {
        navigation.navigate('ScannerEAN', { pageReturn: 'AddProduct' });
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="padding" enabled>

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

                    {/* View para alinhar os dois componentes de input */}
                    <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
                    
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
                            <InputBarCode
                                editable={false}
                                value={route.params?.barcode}
                            />
                            <ButtonBarCode
                                eventHandler={scannerEANPage}
                            />
                        </View>

                    </ContainerInput>
                    
                    <View style={styles.buttomAddImg}>
                        <ButtonAddImage/>
                    </View>

                    <View style={{justifyContent: 'space-around',flexDirection: 'row'}}>

                        <CancelActionButton text="Cancelar"/>
                        <SaveActionButton text="Salvar"/>

                    </View>

                    </Background>
                </Container>

            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttomAddImg: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30
    }
});

export default AddProductPage;