import {
    View,
    FlatList
} from 'react-native';

import {
    Container,
    InputText,
    Title,
    Trace,
    SmallTrace
} from './styles';

import ButtonBarCode from '../../components/buttonBarCode';
import ButtonAddProduct from '../../components/buttonAddProduct';
import Product from './Product';

export default function ListStorage() {

    const teste = {
        productBrand: 'aaaa',
        productType: '123',
        productAmount: 10,
        productPrice: 15.00,
        productDescription: 'alguma coisa',
        productBarCode: '5241341654654',
    };
    
    return(
        <Container>

            <View style={{justifyContent: 'space-around',flexDirection: 'row', marginBottom: 30}}>
                <InputText
                    placeholder="Procurar"
                />
                <ButtonBarCode
                    
                />
            </View>

            <View style={{justifyContent: 'space-between',flexDirection: 'row', width: '100%'}}>
                <Title>Estoque</Title>
                <ButtonAddProduct/>
            </View>

            <Trace/>
            

            <Product data={teste}/>

            <SmallTrace/>

            <FlatList

            >
                
            </FlatList>
        </Container>
        
    );
}