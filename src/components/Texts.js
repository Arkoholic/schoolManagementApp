import styled from "styled-components";
import { colors } from "../../assets/colors";
const {primary, black} = colors;

const StyledTextLarge = styled.Text`
font-size: 34px;
font-weight: 900;
color: ${primary};
text-align: center;
`
const StyledTextMedium = styled.Text`
font-size: 20px;
color: ${black};
text-align: left;
`
const StyledTextRegular = styled.Text`
font-size: 15px;
color: ${black};
text-align: left;
`
const StyledTextSmall = styled.Text`
font-size: 12px;
color: ${black};
text-align: left;
`
const SmallText = (props) => {
    return (
        <StyledTextSmall{...props}>{props.children}</StyledTextSmall>
    )
};

const BigText = (props) => {
    return (
        <StyledTextLarge{...props}>{props.children}</StyledTextLarge>
    )
};

const RegularText = (props) => {
    return (
        <StyledTextRegular{...props}>{props.children}</StyledTextRegular>
    )
};

const MediumText = (props) => {
    return (
        <StyledTextMedium{...props}>{props.children}</StyledTextMedium>
    )
};


export {SmallText, BigText, RegularText,MediumText};