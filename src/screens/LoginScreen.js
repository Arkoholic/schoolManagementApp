import { View } from "react-native";
import { colors } from "../../assets/colors";
import { StatusBar } from "expo-status-bar";
import { BigText, MediumText, RegularText, SmallText } from "../components/Texts";

import MainContainer from "../../assets/Shared/MainContainer";
import RegularButton from "../components/Buttons/RegularButton";
import KeyboardAvoidingContainer from "../../assets/Shared/KeyboardAvoidingContainer";
import StyledTextInput from "../components/Inputs/StyledTextInput";

const {primary, background} =colors;


const LoginScreen = () => {
return (
    <KeyboardAvoidingContainer>
    <View style={{display:'flex' , flex:1, backgroundColor:background}}>
    <StatusBar backgroundColor={primary} translucent={true}/>
    <View style={{paddingVertical:43, paddingLeft: 20, backgroundColor:primary, borderBottomRightRadius: 100}}>
    <BigText style={{textAlign:'left',color:"white"}}>Welcome Back!</BigText>
    </View>
    <MainContainer style={{marginVertical:15}}>
    <StyledTextInput
    label={"Proprietor"}
    />
    <StyledTextInput
    label={"Email"}
    keyboardType={"email-address"}
    />
    <StyledTextInput
    label={"Password"}
    isPassword={true}
    />
    <RegularButton style={{width:'100%', marginTop:40}}>Login</RegularButton>


    </MainContainer>
    </View>
    </KeyboardAvoidingContainer>
    
    
    
    
)
}

export default LoginScreen;