import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function Input({ setFunction, title, val }) {
    return (
        <>
            <Text style={styles.titles}>{title}<Text style={{ color: "red" }}>*</Text></Text>
            <TextInput
                style={styles.input}
                value={val}
                onChangeText={(text) => setFunction(text)}
            />
        </>
    )
}
const styles = StyleSheet.create({
    titles: {
        color: "#4a88f7",
        width: 300,
        fontSize: 20,
    },
    input: {
        height: 40,
        width: 300,
        borderWidth: 1,
        padding: 10,
        borderColor: "#4a88f7",
        marginBottom: 5
    },
});