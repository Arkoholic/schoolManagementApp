import styled from "styled-components";
import { StatusBarHeight, ScreenWidth } from "./shared";
import { colors } from "../colors";

const {background} = colors;

const StyledView  = styled.View`
    flex:1;
    background-color: ${background};
    padding: 30px;

`

const MainContainer = (props) => {
    return (
        <StyledView {...props}>{props.children}</StyledView>
    )
};


export default MainContainer;