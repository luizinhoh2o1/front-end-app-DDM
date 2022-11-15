import {
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { ButtomImage } from './styles'

import buttonIMG from '../../../assets/button-add.png'

function ButtonAddProduct(props) {
    return (
        <TouchableOpacity
            onPress={props.eventHandler}
            activeOpacity={0.5}
        >
            <ButtomImage
                source={buttonIMG}
            />
        </TouchableOpacity>
    );
}

export default ButtonAddProduct;