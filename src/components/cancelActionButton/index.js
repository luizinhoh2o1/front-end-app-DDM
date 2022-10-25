import {
    Pressable,
    Text,
    StyleSheet
} from 'react-native';

function CancelActionButton(props) {

    return (
        <Pressable style={styles.button}>

            <Text style={styles.text}>
                {props.text}
            </Text>

        </Pressable>
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

export default CancelActionButton;