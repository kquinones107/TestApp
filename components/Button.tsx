import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
    label: string;
};

export default function Button({ label }: Props) {
    return (
        <View style={styles.buttoncontainer}>
            <Pressable style={styles.button}  onPress={() => alert('Presionaste un Boton')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
   );
}

const styles = StyleSheet.create({
    buttoncontainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});