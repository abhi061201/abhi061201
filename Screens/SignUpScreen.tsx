import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Routes } from "../Navigation/Routes"
import { NativeStackScreenProps } from "../node_modules/react-native-screens/lib/typescript/native-stack/types"
import { CustomButton } from "../utils/CustomButton"
import { CustomTextInput } from "../utils/CustomTextInput"
import { widthDim } from "../utils/Helper"

type SignUpProps = NativeStackScreenProps<RootStackParamList, Routes.SignUpScreen>
export const SignUpScreen: React.FC<SignUpProps> = ({ route, navigation }) => {
    return (<ScrollView style={{ width: widthDim, paddingHorizontal: 40 }}>
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
                Create Account
            </Text>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'black',
                    alignSelf: 'center',
                    textAlign: 'center',
                    paddingHorizontal: 20,
                    marginBottom: 50,
                }}>
                Create an account so you can explore all the existing jobs
            </Text>

            <CustomTextInput
                placeholder={'Email'}
                placeholderTextColor={'#626262'}
            // value={email}
            // onChangeText={setEmail}
            />
            <CustomTextInput placeholder={'Password'} placeholderTextColor={'#626262'} />
            <CustomTextInput placeholder={'Confirm Password'} placeholderTextColor={'#626262'} />


            <TouchableOpacity>
                <View
                    style={{
                        marginTop: 30,
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
                        Sign Up
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginVertical: 30 }} onPress={() => {
                navigation.navigate(Routes.LoginScreen)
            }}>
                <Text style={{
                    fontSize: 14,
                    color: '#494949',
                    alignSelf: 'center',
                }}>
                    Already have an Account?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 40 }}>
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
    </ScrollView>)
}