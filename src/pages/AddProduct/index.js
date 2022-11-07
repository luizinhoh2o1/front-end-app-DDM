import {
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import CurrencyInput from 'react-native-currency-input';

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
    const baseURL = 'http://192.168.0.190:7188';

    const objectProduct = {
        descricao: productDescription,
        marca: productBrand,
        preco: productPrice,
        tipo: productType,
        quantidade: productAmount,
        codigoDeBarra: productBarCode
    }

    function cleanFields() {
        setProductAmount();
        setProductBarCode("");
        setProductBrand("");
        setProductDescription("");
        setProductPrice(0.01);
        setProductType("");
    }

    async function requestPost() {
        try {
            await fetch(`${baseURL}/produto/criar-produto`, {
                method: 'POST',
                headers: {
                    Accept: '*/*',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(objectProduct)
            });

            cleanFields();

        } catch(err) {
            console.log(err);
        }
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="padding" enabled style={styles.keyboardView}>

                <Container>

                    <Background>

                    <Title>Cadastro de Produto</Title>

                    <ContainerInput>
                        <Label>Marca</Label>
                        <InputText
                            onChangeText={setProductBrand}
                            value={productBrand}
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Tipo</Label>
                        <InputText
                            onChangeText={setProductType}
                            value={productType}
                        />
                    </ContainerInput>

                    <ContainerInput>
                        <Label>Descrição</Label>
                        <InputText
                            onChangeText={setProductDescription}
                            value={productDescription}
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
                                value={productAmount}
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
                                keyboardType="numeric"
                                value={productBarCode}
                                onChangeText={(value) => setProductBarCode(value)}
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
    },
    keyboardView: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    }
});

export default AddProductPage;