import {
    View
} from 'react-native';

import {
    Container,
    ProductImage,
    Label,
    TextData,
    SmallTrace
} from './styles';

import productIMG from '../../../../assets/img-product.png';

import ButtonEdit from '../../../components/buttonEdit';

import { useNavigation } from '@react-navigation/native';

export function Product( props ) {

    const navigation = useNavigation();

    const objectProduct = {
        productId: props.data.id,
        productDescription: props.data.descricao,
        productBrand: props.data.marca,
        productPrice: props.data.preco,
        productType: props.data.tipo,
        productAmount: props.data.quantidade,
        productBarCode: props.data.codigoDeBarra
    }

    // productEditor abre pagina editor do produto
    function productEditor() {
        navigation.navigate('EditProduct', { pageReturn: 'ListStorage', dataEditProduct: objectProduct });
    }

    return (
        <View style={{alignItems: 'center'}}>
            <Container>

                <View style={{alignItems: 'center', width: '45%'}}>
                    <ProductImage
                        source={productIMG}
                    />
                    <ButtonEdit
                        eventHandler={productEditor}
                    />
                </View>

                <View style={{alignItems: 'flex-start', width: '55%'}}>
                    <Label>Marca</Label>
                    <TextData>{objectProduct.productBrand}</TextData>

                    <Label>Tipo</Label>
                    <TextData>{objectProduct.productType}</TextData>

                    <Label>Quantidade</Label>
                    <TextData>{objectProduct.productAmount}</TextData>

                    <Label>Valor</Label>
                    <TextData>R${objectProduct.productPrice.toFixed(2)}</TextData>

                    <Label>Descrição</Label>
                    <TextData>{objectProduct.productDescription}</TextData>

                    <Label>Código de Barras</Label>
                    <TextData>{objectProduct.productBarCode}</TextData>
                </View>
            </Container>

            <SmallTrace />
            
        </View>
    );
}

export default Product;