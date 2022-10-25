import { Image } from 'react-native';

import {
    Container,
    ButtomImage
} from './styles';

import buttonIMG from '../../../assets/img-product.png'

function ButtonAddImage() {
    return (
        <Container>
            <ButtomImage
                source={buttonIMG}
            />
        </Container>
    );
}

export default ButtonAddImage;