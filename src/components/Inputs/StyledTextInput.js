import { useState } from "react";
import styled from "styled-components";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { View } from "react-native";
import { RegularText } from "../Texts";
import { colors } from "../../../assets/colors";

const {inputBorders, background, inputText} = colors;

const InputField = styled.TextInput`
background-color: ${inputBorders};
align-items: center;
padding: 10px;
borderWidth: 1px;
border-radius: 4px;
font-size: 16px;
height: 48px;
margin-top: 3px;
margin-bottom: 30px;
color: ${inputText};
border-color: ${inputBorders};
width: 100%;
`;

const EyeIcon = styled.TouchableOpacity`
    position: absolute;
    top:14px;
    right:5%;
    z-index: 1;
`

const StyledTextInput = ({label, isPassword,icon, width,...props}) => {
    const [inputBackgroundColor, setInputBackgroundColor]=useState(background);
    //this is for the password visibility...the default is set to true
    const [hidePassword,sethidePassword] = useState(true);
    
    const customOnBlur = () => {
        props?.onBlur;
        setInputBackgroundColor(background);
    }

    const customOnFocus = () => {
        props?.onFocus;
        setInputBackgroundColor(background);
    }

    return (
        <View>
<InputField
    {...props}
    style={{backgroundColor: inputBackgroundColor, width: width, ...props?.style}}
    cursorColor={inputText}
    placeholder={label}
    onBlur={customOnBlur}
    onFocus={customOnFocus}
    //this line below will enable secured entry of the password
    secureTextEntry={isPassword && hidePassword}
/>
{isPassword && <EyeIcon onPress={() => {
    sethidePassword(!hidePassword);
}}>
        <MaterialCommunityIcons name={hidePassword ? 'eye' : 'eye-off'} size={25} color={inputText}/>
    </EyeIcon>}
        </View>
    )
}

export default StyledTextInput;