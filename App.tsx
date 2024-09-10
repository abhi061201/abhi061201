import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppNavigation from './Navigation/AppNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Routes } from './Navigation/Routes'

const App = () => {

  const [isFirstLaunch, setFirstLaunch] = useState('');

  useEffect(() => {
    AsyncStorage.getItem("firstLaunch").then((item) => {
      if (item == null) {
        AsyncStorage.setItem("firstLaunch", "true");
        setFirstLaunch('true')
      }
      else {
        setFirstLaunch('false');
      }
    })
  }, [])


  if (isFirstLaunch == '') {
    return null;

  }
  else if (isFirstLaunch == 'true') {
    return <AppNavigation initialScreen={Routes.OnbardingScreen} />
  }

  else {
    return <AppNavigation initialScreen={Routes.LoginScreen}></AppNavigation>
  }

}

export default App

const styles = StyleSheet.create({})