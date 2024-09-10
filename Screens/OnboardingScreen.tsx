import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from 'react-navigation/native-stack'
import { Routes } from '../Navigation/Routes'
import Onboarding from 'react-native-onboarding-swiper';
type onbaodinProps = NativeStackScreenProps<RootStackParamList, Routes.OnbardingScreen>
const OnboardingScreen: React.FC<onbaodinProps> = ({ route, navigation }) => {
  return (
    <Onboarding
      DoneButtonComponent={DoneButtonComponent}
      onDone={() => navigation.replace(Routes.LoginScreen)}
      onSkip={() => navigation.navigate(Routes.LoginScreen)}
      pages={[
        {
          backgroundColor: '#a6dfe0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Connect to the world',
          subtitle: 'A new way to connect with world',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Share your favourite',
          subtitle: 'Share your thougths with others',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Become the Star',
          subtitle: 'Let the spotlight capture you',
        },

      ]}
    />
  )
}

const DoneButtonComponent = ({ ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <View style={{ marginEnd: 20 }}>
        <Text style={{ fontSize: 16 }}>Done</Text>
      </View>
    </TouchableOpacity>

  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})