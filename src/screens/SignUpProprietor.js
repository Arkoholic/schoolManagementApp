import { useState } from "react";
import { View, } from "react-native";
import { colors } from "../../assets/colors";
import {AntDesign,} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { BigText, MediumText, RegularText, SmallText } from "../components/Texts";

import MainContainer from "../../assets/Shared/MainContainer";
import RegularButton from "../components/Buttons/RegularButton";
import KeyboardAvoidingContainer from "../../assets/Shared/KeyboardAvoidingContainer";
import StyledTextInput from "../components/Inputs/StyledTextInput";


const {primary, background,inputText,inputBorders, white, black} =colors;


const SignUpProprietor = () => {
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <KeyboardAvoidingContainer>
            <View>
            <StatusBar backgroundColor={primary} translucent={true} style="light" />
            <View style={{ paddingVertical: 43, paddingLeft: 20, backgroundColor: primary, borderBottomRightRadius: 100 }}>
                    <BigText style={{ textAlign: 'left', color: "white" }}>Sign Up</BigText>
            </View>
            <MainContainer style={{ marginVertical: 10 }}>
                    <View style={{ borderWidth: 1, borderColor: inputBorders, height: 48, marginBottom: 30, borderRadius: 4, }}>
                        <Picker
                            selectedValue={selectedOption}
                            onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
                            mode="dialog"
                        >
                            <Picker.Item label='Select a category to sign up' value='' style={{ color: "red" }} />
                            <Picker.Item label='Proprietor' value='proprietor' style={{ color: inputText, fontSize: 16 }} />
                            <Picker.Item label='Parent' value='parent' style={{ color: inputText }} />
                            
                        </Picker>
                    </View>

                    <StyledTextInput
                        label={"Email"}
                        keyboardType={"email-address"}
                    />
                    <StyledTextInput
                        label={"Fullname"}
                        keyboardType={"default"}
                        autoCapitalize={"words"}
                    />
                    <StyledTextInput
                        label={"Contact"}
                        keyboardType={"numeric"}
                    />
                    <RegularButton style={{ width: '100%', marginTop: 40 }}>Next</RegularButton>

                    
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 118, height: 1, backgroundColor: inputBorders, marginVertical: 50 }}></View>
                            <SmallText style={{ flex: 1, textAlign: 'center', textAlignVertical: 'center' }}>OR</SmallText>
                            <View style={{ width: 118, height: 1, backgroundColor: inputBorders, marginTop: 50 }}></View>
                            </View>
                        <View>
                        <RegularButton style={{ width: '100%', backgroundColor: white, elevation: 2, justifyContent: 'center', alignItems: 'center' }}>
                                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <AntDesign name={'google'} size={24} color={'#777775'} />
                                    <RegularText style={{ color: '#777775', fontSize: 20, marginLeft: 10,fontWeight:'bold' }}>Continue with Google</RegularText>
                                 </View>
                        </RegularButton>

                        </View>
                        </View>
                        
                    

                </MainContainer>
            </View>
        </KeyboardAvoidingContainer>
    )
}

export default SignUpProprietor;