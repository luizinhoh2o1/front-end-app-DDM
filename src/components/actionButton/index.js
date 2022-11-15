import {
    Pressable,
    Text,
    StyleSheet
} from 'react-native';

function SaveActionButton( props ) {

    return (
        <Pressable
            style={styles.button}
            onPress={props.eventHandler}
        >
            <Text style={styles.text}>
                {props.text}
            </Text>
        </Pressable>
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

export default SaveActionButton;