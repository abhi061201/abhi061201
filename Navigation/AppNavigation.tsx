import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import OnboardingScreen from '../Screens/OnboardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import { Routes } from './Routes';
import AuthStack from './AuthStack';



const AppNavigation = ({ initialScreen }: { initialScreen: string }) => {
    return (
        <NavigationContainer>
            <AuthStack initialScreen={initialScreen}></AuthStack>
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})