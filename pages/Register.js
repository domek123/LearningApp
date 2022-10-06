import { StyleSheet, Text, Button, View, Alert } from 'react-native'
import { useState } from 'react'
import Input from "../components/input"
export default Register = (props) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [validated, setValidated] = useState(false)
    const checkPasswords = () => {
        if (password == passwordCheck) {
            return true
        }
        return false;
    }
    const ButtonPressed = () => {
        if (login.length > 0 && password.length > 0 && passwordCheck.length > 0 && checkPasswords()) {
            props.navigation.navigate("login")
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.info}>Register</Text>
            <Input val={login} title="Login" setFunction={setLogin} />
            <Input val={password} title="Password" setFunction={setPassword} />
            <Input val={passwordCheck} title="Confirm Password" setFunction={setPasswordCheck} />
            <View style={{ width: 300, height: 100, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                <Button color="#EB356f" title="Sign up" width={300} onPress={() => ButtonPressed()} />
                <Button color="#EB356f" title="Sign in" width={300} onPress={() => props.navigation.navigate("login")} />
            </View>
        </View >
    )
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
    },
});