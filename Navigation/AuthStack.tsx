import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import HomeScreen from "../Screens/HomeScreen";
import OnboardingScreen from "../Screens/OnboardingScreen";
import LoginScreen from "../Screens/LoginScreen";
import { SignUpScreen } from "../Screens/SignUpScreen";

const Stack = createNativeStackNavigator();


const AuthStack = ({ initialScreen }: { initialScreen: string }) => {
    return (
        <Stack.Navigator initialRouteName={initialScreen} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Routes.HomeScreen} component={HomeScreen}>

            </Stack.Screen>
            <Stack.Screen name={Routes.OnbardingScreen} component={OnboardingScreen}></Stack.Screen>
            <Stack.Screen name={Routes.LoginScreen} component={LoginScreen}></Stack.Screen>
            <Stack.Screen name={Routes.SignUpScreen} component={SignUpScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthStack;