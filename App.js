import { StatusBar } from 'expo-status-bar';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

import Login from "./pages/Login"
import Register from './pages/Register';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="register"
            component={Register}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>


  );
}

