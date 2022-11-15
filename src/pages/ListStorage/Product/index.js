import {
    View
} from 'react-native';

import {
    Container,
    ProductImage,
    Label,
    TextData
} from './styles';

import productIMG from '../../../../assets/img-product.png';

import ButtonEdit from '../../../components/buttonEdit';

export function Product( props ) {

    return (
        <Container>

            <View style={{alignItems: 'center', width: '45%'}}>
                <ProductImage
                    source={productIMG}
                />
                <ButtonEdit/>
            </View>

            <View style={{alignItems: 'flex-start', width: '55%'}}>
                <Label>Marca</Label>
                <TextData>{props.data.productBrand}</TextData>

                <Label>Tipo</Label>
                <TextData>{props.data.productType}</TextData>

                <Label>Quantidade</Label>
                <TextData>{props.data.productAmount}</TextData>

                <Label>Valor</Label>
                <TextData>{props.data.productPrice}</TextData>

                <Label>Descrição</Label>
                <TextData>{props.data.productDescription}</TextData>

                <Label>Código de Barras</Label>
                <TextData>{props.data.productBarCode}</TextData>
            </View>
            
        </Container>
    );
}

export default Product;