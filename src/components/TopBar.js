import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../redux/theme/themeSlice";
import styled from "styled-components";
import TextButton from "./TextButton";
import SwitchButton from "./SwitchButton";
import { colord } from "colord";
import { MdDarkMode } from "react-icons/md";

const TopBar = styled.div`
  background: ${(props) => props.theme.backgrounds.background};
  box-shadow: 2px 2px 8px ${(props) => props.theme.boxShadows.boxShadowA}, -2px -2px 8px ${(props) => props.theme.boxShadows.boxShadowB};
  border: none;
  height: 42px;
  width: 100%;
  padding: 8px 0px;
  display: flex;
  color: ${(props) => props.theme.textColors.textNormal};
`;

function TopBarComponent() {
  const currentTitle = useSelector((state) => state.themeState.title);
  const dispatch = useDispatch();

  const [showSwapTheme, setShowSwapTheme] = React.useState(false);

  return (
    <TopBar>
      <div style={{ flexGrow: "1" }} />
      <TextButton
        style={{ height: "100%", margin: "0px 8px" }}
        onClick={() => {
          dispatch(switchTheme());
        }}
        noEndTransition
      >
        <span>{currentTitle === "dark" ? "Light" : "Dark"}</span>
        <MdDarkMode />
      </TextButton>
      <TextButton style={{ height: "100%", margin: "0px 8px" }} onClick={() => {}}>
        <span>Login</span>
      </TextButton>
      <div style={{ marginRight: "8px" }} />
    </TopBar>
  );
}

export default TopBarComponent;
