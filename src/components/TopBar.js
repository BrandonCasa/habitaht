import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../redux/theme/themeSlice";
import styled, { css } from "styled-components";
import TextButton from "./TextButton";
import IconButton from "./IconButton";
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
  ${(props) =>
    css`
      & .IconButton {
        width: calc(2.97em);
        height: auto;
      }
    `}
`;

function TopBarComponent() {
  const currentTitle = useSelector((state) => state.themeState.title);
  const dispatch = useDispatch();

  const [showSwapTheme, setShowSwapTheme] = React.useState(false);
  // <span>{currentTitle === "dark" ? "Light" : "Dark"}</span>
  return (
    <TopBar>
      <div style={{ flexGrow: "1" }} />
      <IconButton
        style={{
          margin: "0px 8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          float: "left",
        }}
        onClick={() => {
          dispatch(switchTheme());
        }}
        className="IconButton"
        noEndTransition
      >
        <MdDarkMode size="1.75em" />
      </IconButton>
      <TextButton style={{ height: "100%", margin: "0px 8px" }} onClick={() => {}}>
        <span>Login</span>
      </TextButton>
      <div style={{ marginRight: "8px" }} />
    </TopBar>
  );
}

export default TopBarComponent;
