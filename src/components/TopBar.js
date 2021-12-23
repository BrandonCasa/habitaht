import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../redux/theme/themeSlice";
import styled from "styled-components";
import Button from "./Button";
import ButtonText from "./ButtonText";
import { colord } from "colord";

const TopBar = styled.div`
  background: ${(props) => props.theme.backgrounds.background};
  box-shadow: 2px 2px 8px ${(props) => props.theme.boxShadows.boxShadowA}, -2px -2px 8px ${(props) => props.theme.boxShadows.boxShadowB};
  border: none;
  height: 42px;
  padding: 8px 16px;
  display: flex;
  color: ${(props) => props.theme.textColors.textNormal};
`;

function TopBarComponent() {
  const currentTitle = useSelector((state) => state.themeState.title);
  const dispatch = useDispatch();

  const [showSwapTheme, setShowSwapTheme] = React.useState(false);

  return (
    <TopBar>
      <Button
        style={{ height: "100%", marginLeft: "auto" }}
        onClick={() => {
          dispatch(switchTheme());
        }}
        noEndTransition
      >
        <ButtonText>{currentTitle === "dark" ? "Light" : "Dark"}</ButtonText>
      </Button>
      <Button style={{ height: "100%", marginLeft: "16px" }} onClick={() => {}}>
        <ButtonText>Login</ButtonText>
      </Button>
    </TopBar>
  );
}

export default TopBarComponent;
