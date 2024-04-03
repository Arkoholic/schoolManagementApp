import styled from "styled-components";
import { colors } from "../../../assets/colors";
import { RegularText } from "../Texts";
import { Text } from "react-native";

const {primary} = colors;

const ButtonView = styled.TouchableOpacity`
padding: 10px 15px;
background-color: ${primary};
justify-content: center;
align-items: center;
border-radius: 15px;
height: 48px;
width: 135px;
`




const RegularButton = (props) => {
    return (
        <ButtonView onPress={props.onPress} {...props}>
    <RegularText style={[{color: 'white', fontWeight:'bold'},{...props?.textStyle}]}>{props.children}</RegularText>
        </ButtonView>
    )
}

export default RegularButton;