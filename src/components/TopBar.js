import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../redux/theme/themeSlice";
import styled, { css } from "styled-components";
import TextButton from "./TextButton";
import IconButton from "./IconButton";
import { colord } from "colord";
import { MdDarkMode, MdAccountCircle } from "react-icons/md";
import TopBarButton from "./TopBarButton";

const TopBar = styled.div`
  ${(props) =>
    css`
      & {
        background: ${(props) => props.theme.backgrounds.background};
        box-shadow: 2px 2px 8px ${(props) => props.theme.boxShadows.boxShadowA}, -2px -2px 8px ${(props) => props.theme.boxShadows.boxShadowB};
        border: none;
        width: 100%;
        height: ${props.theme.componentCustomization.topBar.self.height};
        padding-top: ${props.theme.componentCustomization.topBar.self.paddingTop};
        padding-bottom: ${props.theme.componentCustomization.topBar.self.paddingBottom};
        display: flex;
        color: ${(props) => props.theme.textColors.textNormal};
      }
      & .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        top: 50px;
        padding: 12px 16px;
        z-index: 1;
      }
    `}
`;

function TopBarComponent(props) {
  const currentTitle = useSelector((state) => state.themeState.title);
  const dispatch = useDispatch();

  const [showSwapTheme, setShowSwapTheme] = React.useState(false);
  // <span>{currentTitle === "dark" ? "Light" : "Dark"}</span>
  /*
  <TextButton style={{ height: "100%", margin: "0px 8px" }} onClick={() => {}}>
    <span>Login</span>
  </TextButton>
  */
  return (
    <TopBar>
      <div style={{ flexGrow: "1" }} />
      <TopBarButton size={"2.25em"} />
      <div style={{ marginRight: "8px" }} />
    </TopBar>
  );
}

export default TopBarComponent;
