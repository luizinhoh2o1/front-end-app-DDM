import {
    View,
    FlatList
} from 'react-native';

import {
    useState,
    useEffect
} from 'react';

import {
    Container,
    InputText,
    Title,
    Trace
} from './styles';

import api from '../../api/Product';

import { useNavigation } from '@react-navigation/native';

import ButtonBarCode from '../../components/buttonBarCode';
import ButtonAddProduct from '../../components/buttonAddProduct';
import Product from './Product';

export default function ListStorage({route}) {

    const navigation = useNavigation();

    const [ productList, setProductList ] = useState([]);
    const [ productsData, setProductsData ] = useState([]);
    const [ searchText, setSearchText ] = useState("");

    useEffect(() => {
        setProductList(
            productsData.filter(
                (product) => {
                    return (
                        product.descricao.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                        ||
                        product.codigoDeBarra.indexOf(searchText) > -1
                        ||
                        product.marca.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                    )
                }
            )
        );
    }, [searchText]);

    useEffect(() => {
        requestGetProductList();
    }, []);

    /**
     * useEffect para setar o valor do seachText para 
     * pesquisar por codigo de barras
    */ 
    useEffect(() => {
        if (route.params?.barcode) {
            setSearchText(route.params.barcode);
            route.params.barcode = "";
        }
    }, [route.params?.barcode]);

    // scannerEANPage abre pagina de Scanner
    function scannerEANPage() {
        navigation.navigate('ScannerEAN', { pageReturn: 'ListStorage' });
    }

    // addProductPage abre pagina de Cadastro de Produto
    function addProductPage() {
        navigation.navigate('AddProduct', { pageReturn: 'ListStorage' });
    }


    function productEditor() {
        navigation.navigate('AddProduct', { pageReturn: 'ListStorage' });
    }
    
    function requestGetProductList() {
        api.get('/produto/listar-todos-produtos')
        .then((response) => {
            setProductsData(response.data.produtos);
            setProductList(response.data.produtos);
        }, (error) => {
            console.log(error);
        });
    }
    
    return(
        <Container>

            <View style={{justifyContent: 'space-around',flexDirection: 'row', marginBottom: 30}}>
                <InputText
                    placeholder="Procurar"
                    onChangeText={(text) => setSearchText(text)}
                    value={searchText}
                />
                <ButtonBarCode
                    eventHandler={scannerEANPage}
                />
            </View>

            <View style={{justifyContent: 'space-between',flexDirection: 'row', width: '100%'}}>
                <Title>Estoque</Title>
                <ButtonAddProduct
                    eventHandler={addProductPage}
                />
            </View>

            <Trace/>

            <FlatList 
                style={{marginBottom: 50}}
                data={productList}
                renderItem={({ item }) => (
                    <Product data={item}/>
                )}
            />
        </Container>
        
    );
}