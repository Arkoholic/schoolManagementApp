import { KeyboardAvoidingView, Keyboard, ScrollView, Pressable, TouchableWithoutFeedback } from "react-native";
import { colors } from "../colors";

const {background} = colors;

const KeyboardAvoidingContainer = ({children}) => {
return (
    <KeyboardAvoidingView
        style={{flex:1, backgroundColor:background}}
    behavior="padding"
    keyboardVerticalOffset={-300} >
      
   <ScrollView  showsVerticalScrollIndicator={false}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    {children}
    </TouchableWithoutFeedback>
   </ScrollView>
    </KeyboardAvoidingView>
);
}

export default KeyboardAvoidingContainer;