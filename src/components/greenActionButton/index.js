import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

function GreenActionButton( props ) {

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
        backgroundColor: '#2FB176',
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

export default GreenActionButton;