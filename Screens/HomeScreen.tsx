import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Routes } from '../Navigation/Routes'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList , Routes.HomeScreen>
const HomeScreen:React.FC<HomeScreenProps> = ({route, navigation}) => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 48}}>HomeScreen</Text>
      <Button title='Go to OnboardinUi' onPress={()=>{
        navigation.navigate(Routes.OnbardingScreen, {userId:'hello'})
      }}></Button>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})