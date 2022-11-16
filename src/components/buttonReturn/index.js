import {
    TouchableOpacity,
    Image
} from 'react-native';
import buttonIMG from '../../../assets/button-return.png'

function ButtonReturn( props ) {
    return (
            <TouchableOpacity
                onPress={props.eventHandler}
                activeOpacity={0.5}
            >
                <Image
                    style={{width: 40, height: 40, resizeMode: 'contain'}}
                    source={buttonIMG}
                />
            </TouchableOpacity>
    );
}

export default ButtonReturn;