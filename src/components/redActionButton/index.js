import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

function RedActionButton(props) {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.eventHandler}
            activeOpacity={0.5}
        >

            <Text style={styles.text}>
                {props.text}
            </Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#B12F2F',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 40
        
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default RedActionButton;