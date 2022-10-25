import { Image } from 'react-native';

import {
    Container,
    ButtomImage
} from './styles';

import buttonIMG from '../../../assets/button-code.png'

function ButtonBarCode() {
    return (
        <Container>
            <ButtomImage
                source={buttonIMG}
            />
        </Container>
    );
}

export default ButtonBarCode;