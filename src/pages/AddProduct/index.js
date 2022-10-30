import {
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import CurrencyInput from 'react-native-currency-input';
import axios from 'axios';

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

    // States da pagina
    const [productBrand, setProductBrand] = useState("");
    const [productType, setProductType] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(0.01);
    const [productAmount, setProductAmount] = useState(0);
    const [productBarCode, setProductBarCode] = useState("");


    // useEffect para setar o valor do productBarCode
    useEffect(() => {
        if (route.params?.barcode) {
            setProductBarCode(route.params.barcode);
        }
    }, [route.params?.barcode]);


    // scannerEANPage abre pagina de Scanner
    function scannerEANPage() {
       navigation.navigate('ScannerEAN', { pageReturn: 'AddProduct' });
    }

    // Request POST
    const baseUrl = 'https://estoqueapi.azurewebsites.net';
    
    async function requestPost() {
        try {
            const response = await axios.post(`${baseUrl}/produto/criar-produto`,
            {
                nome: {productDescription},
                marca: {productBrand},
                preco: {productPrice},
                quantidade: {productAmount},
                codigoDeBarra: {productBarCode}
            });
            
            if (response.status === 200) {
                setProductAmount(0);
                setProductBarCode("");
                setProductBrand("");
                setProductDescription("");
                setProductPrice(0.01);
                setProductType("");
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="padding" enabled>

                <Container>

                    <Background>

                    <Title>Cadastro de Produto</Title>

                    <ContainerInput>
                        <Label>Marca</Label>
                        <InputText
                            onChangeText={setProductBrand}
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Tipo</Label>
                        <InputText
                            onChangeText={setProductType}
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Descrição</Label>
                        <InputText
                            onChangeText={setProductDescription}
                        />
                    </ContainerInput>

                    {/* View para alinhar os dois componentes de input */}
                    <View style={{justifyContent: 'space-between',flexDirection: 'row'}}>
                    
                        <ContainerInput>
                            <Label>Preço R$</Label>
                            
                            <CurrencyInput
                                style={styles.currencyInput}
                                value={productPrice}
                                onChangeValue={setProductPrice}
                                prefix=""
                                delimiter=","
                                separator="."
                                precision={2}
                                minValue={0.01}
                                maxValue={10000000}
                            />
                        </ContainerInput>
                        
                        <ContainerInput>
                            <Label>Quantidade</Label>
                            <InputValue
                                keyboardType="numeric"
                                onChangeText={(value) => {
                                    setProductAmount(value * 1)
                                }}
                            />
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
                        <SaveActionButton
                            text="Salvar"
                            eventHandler={requestPost}
                        />

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
    },
    currencyInput: {
        width: 120,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 16,
        paddingLeft: 15,
        paddingRight: 15
    }
});

export default AddProductPage;