import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { colors } from "../../assets/colors";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { BigText, MediumText, RegularText, SmallText } from "../components/Texts";

import MainContainer from "../../assets/Shared/MainContainer";
import RegularButton from "../components/Buttons/RegularButton";
import KeyboardAvoidingContainer from "../../assets/Shared/KeyboardAvoidingContainer";
import StyledTextInput from "../components/Inputs/StyledTextInput";


const {primary, grey,inputText,inputBorders, white, black} =colors;


const SignUpProprietor2 = () => {
    const [selectedOption, setSelectedOption] = useState('');
    return (
        <KeyboardAvoidingContainer>
            <View>
            <StatusBar backgroundColor={primary} translucent={true} style="light" />
            <View style={{ paddingVertical: 30, backgroundColor: primary, borderBottomRightRadius: 25, borderBottomLeftRadius:25}}>
                    <BigText style={{ textAlign: 'center', color: "white" }}>Proprietor</BigText>
            </View>
            <MainContainer style={{ marginVertical: 15 }}>
                    <RegularText style={{textAlign:'center',marginBottom:15,color:inputText,marginTop:-10}}>Please provide us with more information</RegularText>
                    <View
                style={{
                backgroundColor: grey,
                width: 90,
                height: 90,
                borderRadius: 90 / 2,
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                alignSelf: 'center', // Center the entire view horizontally
                marginBottom: 15, // Add margin bottom to create space
                 }}
                    >
                    <MaterialCommunityIcons name='school-outline' size={50} color={white}/>
                    </View>
                    <View style={{alignItems:'center', marginVertical: 10,alignSelf:'center'}}>
                        <TouchableOpacity>
                        <RegularText style={{color:inputText,marginBottom:10}}>Add Image</RegularText>
                        </TouchableOpacity>
                    </View>
                    


                    <StyledTextInput
                        label={"School Name"}
                        keyboardType={"default"}
                        autoCapitalize={"words"}
                    />
                    <View style={{ borderWidth: 1, borderColor: inputBorders, height: 48, marginBottom: 30, borderRadius: 4, }}>
                        <Picker
                            selectedValue={selectedOption}
                            onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}
                            mode="dialog"
                        >
                            <Picker.Item label='School Type' value='' style={{ color: inputText }} />
                            <Picker.Item label='Primary' value='primary' style={{ color: inputText}} />
                            <Picker.Item label='High School' value='highSchool' style={{ color: inputText }} />
                            <Picker.Item label='College' value='college' style={{ color: inputText }} />
                            
                        </Picker>
                    </View>

                    <StyledTextInput
                        label={"School Email"}
                        keyboardType={"email-address"}
                    />
                    <StyledTextInput
                        label={"School Contact"}
                        keyboardType={"numeric"}
                    />
                    <RegularButton style={{ width: '100%', marginTop: 40 }}>Next</RegularButton>

                    
                        
                        
                    

                </MainContainer>
            </View>
        </KeyboardAvoidingContainer>
    )
}

export default SignUpProprietor2;