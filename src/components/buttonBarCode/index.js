import { Pressable } from 'react-native';

import {
    ButtomImage
} from './styles';

import buttonIMG from '../../../assets/button-code.png'

function ButtonBarCode( props ) {
    return (
            <Pressable
                onPress={props.eventHandler}
            >
                <ButtomImage
                    source={buttonIMG}
                />
            </Pressable>
    );
}

export default ButtonBarCode;