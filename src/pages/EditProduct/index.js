import {
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
import { useState, useEffect } from 'react';

import {
    Title,
    Label,
    Container,
    ContainerInput,
    InputText,
    InputBarCode,
    Background
} from './styles';

import { useNavigation } from '@react-navigation/native';
import api from '../../api/Product';
import CurrencyInput from 'react-native-currency-input';

import ButtonReturn from '../../components/buttonReturn';
import ButtonAddImage from '../../components/buttonAddImage';
import RedActionButton from '../../components/redActionButton';
import GreenActionButton from '../../components/greenActionButton';

function EditProductPage( {route} ) {

    const navigation = useNavigation();

    const [productId, setProductId] = useState();
    const [productBrand, setProductBrand] = useState("");
    const [productType, setProductType] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState(0.00);
    const [productAmount, setProductAmount] = useState(0);
    const [productBarCode, setProductBarCode] = useState("");

    // useEffect para setar o valor do productBarCode
    useEffect(() => {
        if (route.params?.dataEditProduct) {
            setProductId(route.params.dataEditProduct.productId);
            setProductBrand(route.params.dataEditProduct.productBrand);
            setProductType(route.params.dataEditProduct.productType);
            setProductDescription(route.params.dataEditProduct.productDescription);
            setProductPrice(route.params.dataEditProduct.productPrice);
            setProductAmount(route.params.dataEditProduct.productAmount);
            setProductBarCode(route.params.dataEditProduct.productBarCode);
        }
    }, [route.params?.dataEditProduct]);

    // return page
    function returnPage() {
        navigation.navigate('ListStorage');
    }

    function simpleAlert(message) {
        alert(message);
    }

    const objectProduct = {
        id: productId,
        descricao: productDescription,
        marca: productBrand,
        preco: productPrice,
        tipo: productType,
        quantidade: productAmount,
        codigoDeBarra: productBarCode
    }

    function requestProductUpdate() {
        api.post('/produto/editar-produto', objectProduct)
        .then((response) => {
            if (response.data.sucesso === true) {
                simpleAlert("Editado com sucesso!");
            } else {
                simpleAlert(`Erro!\n${response.data.mensagem}`);
            }
        }, (error) => {
            console.log(error);
        });
    }

    function requestProductDelete() {
        api.get('/produto/deletar-produto', {
            params: {
                id: objectProduct.id
            }
        })
        .then((response) => {

            if (response.data.sucesso === true) {
                simpleAlert("Excluido com sucesso!");
                returnPage();
            } else {
                simpleAlert(`Erro!\n${response.data.mensagem}`);
            }
            
        }, (error) => {
            console.log(error);
        });
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="padding" enabled style={styles.keyboardAvoidingView}>

                <Container>

                    <Background>

                        <ButtonReturn
                            eventHandler={returnPage}
                        />

                        <Title>Editor de Produto</Title>

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
                                <CurrencyInput
                                    style={styles.currencyInput}
                                    value={productAmount}
                                    onChangeValue={setProductAmount}
                                    prefix=""
                                    delimiter="."
                                    separator=","
                                    precision={0}
                                    minValue={0}
                                    maxValue={10000000}
                                />
                            </ContainerInput>

                        </View>

                        <ContainerInput>

                            <Label>Código de barras</Label>

                            <InputBarCode
                                keyboardType="numeric"
                                value={productBarCode}
                                onChangeText={(value) => setProductBarCode(value)}
                            />

                        </ContainerInput>
                        
                        <View style={styles.buttomAddImg}>
                            <ButtonAddImage/>
                        </View>

                        <View style={{justifyContent: 'space-around',flexDirection: 'row'}}>

                            <RedActionButton
                                text="Excluir"
                                eventHandler={requestProductDelete}
                            />
                            <GreenActionButton
                                text="Salvar"
                                eventHandler={requestProductUpdate}
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
    keyboardAvoidingView: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height - 50,
    }
});

export default EditProductPage;