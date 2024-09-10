import { TextInput, TextInputProps } from "react-native"
import { heightDim } from "./Helper"

export interface CustomTextInputProps extends TextInputProps {

}
export const CustomTextInput: React.FC<CustomTextInputProps> = (props) => {
    return (
        <TextInput
            placeholderTextColor={props.placeholderTextColor}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            cursorColor={props.cursorColor}

            style={{
                color: 'black',
                borderColor: '1F41BB',
                borderWidth: 2,
                borderRadius: 10,
                width: '100%',
                height: heightDim / 15,
                paddingHorizontal: 10,
                marginVertical: 10,
            }}></TextInput>
    )
}