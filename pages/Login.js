import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import Input from "../components/input"
export default function Login(props) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.info}>Welcome to our English learning app</Text>
            <Input val={login} title="Login" setFunction={setLogin} />
            <Input val={password} title="Password" setFunction={setPassword} />
            <View style={{ width: 300, height: 100, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                <Button color="#EB356f" title="Sign in" width={300} />
                <Button color="#EB356f" title="Sign up" width={300} onPress={() => props.navigation.navigate("register")} />
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    info: {
        height: 100,
        fontSize: 30,
        textAlign: "center",
        color: "#EB356f",
        fontWeight: "bold",
        marginBottom: 50
    },
});
