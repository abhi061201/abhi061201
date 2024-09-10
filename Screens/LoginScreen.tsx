import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CustomButton } from '../utils/CustomButton';
import { widthDim } from '../utils/Helper';
import { CustomTextInput } from '../utils/CustomTextInput';
import { NativeStackScreenProps } from '../node_modules/react-native-screens/lib/typescript/native-stack/types';
import { Routes } from '../Navigation/Routes';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, Routes.LoginScreen>
export const LoginScreen: React.FC<LoginScreenProps> = ({ route, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log(email);
  }, [email])
  return (
    // <ScrollView>
    <ScrollView style={{ width: widthDim, paddingHorizontal: 40 }}>
      <View >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#1F41BB',
            alignSelf: 'center',
            paddingBottom: 26,
            marginTop: 80
          }}>
          Login Here
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: 'black',
            alignSelf: 'center',
            textAlign: 'center',
            paddingHorizontal: 50,
            marginBottom: 50,
          }}>
          Welcome back you’ve been missed!
        </Text>

        <CustomTextInput
          placeholder={'Email'}
          placeholderTextColor={'#626262'}
          value={email}
          onChangeText={setEmail}
        />
        <CustomTextInput placeholder={'Password'} placeholderTextColor={'#626262'} />

        <TouchableOpacity style={{ marginVertical: 20 }}>
          <Text style={{
            fontSize: 14,
            color: '#1F41BB',
            alignSelf: 'flex-end',
          }}>
            Forgot your password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{

              backgroundColor: '#1F41BB',
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              paddingVertical: 10
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                alignSelf: 'center',


              }}>
              Sign in
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginVertical: 30 }}>
          <Text style={{
            fontSize: 14,
            color: '#494949',
            alignSelf: 'center',
          }}>
            Create new Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 40 }} onPress={() => {
          navigation.navigate(Routes.SignUpScreen)
        }}>
          <Text style={{
            fontSize: 14,
            color: '#1F41BB',
            alignSelf: 'center',
            fontWeight: '700'
          }}>
            Or continue with
          </Text>
        </TouchableOpacity>
        <View style={{

          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          width: '100%'
        }}>
          <CustomButton buttonName={'google'} callback={() => { console.warn("1") }} />
          <CustomButton buttonName={'facebook'} callback={() => { console.warn("2") }} />
          <CustomButton buttonName={'apple'} callback={() => { console.warn("3") }} />

        </View>



      </View>
    </ScrollView>
    // </ScrollView>
  );
}

export default LoginScreen

const styles = StyleSheet.create({})