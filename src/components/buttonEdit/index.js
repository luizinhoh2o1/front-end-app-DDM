import { TouchableOpacity } from 'react-native';

import {
    ButtomImage
} from './styles';

import buttonIMG from '../../../assets/button-edit.png'

function ButtonEdit( props ) {
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

export default ButtonEdit;