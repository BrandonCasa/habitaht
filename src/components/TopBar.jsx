import React from "react";
import { MdAccountCircle, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { adjustCustomization, switchTheme } from "../redux/theme/themeSlice";
import TopBarButton from "./TopBarButton";

const TopBar = styled.div`
  ${(props) =>
    css`
      & {
        background: ${props.theme.backgrounds.background};
        box-shadow: 2px 2px 8px ${props.theme.boxShadows.boxShadowA}, -2px -2px 8px ${props.theme.boxShadows.boxShadowB};
        border: none;
        width: 100%;
        height: 36px;
        padding-top: 8px;
        padding-bottom: 8px;
        display: flex;
        color: ${props.theme.textColors.textNormal};
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

const DarkLightSwitchCont = styled.div`
  ${(props) =>
    css`
      & {
        display: flex;
        width: 64px;
        height: 36px;
        margin: 0px 4px;
      }
      & .slidercontainer {
        display: flex;
        width: 100%;
        height: calc(100% - 4px);
        background: ${props.theme.backgrounds.background};
        box-shadow: 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, -2px -2px 4px ${props.theme.boxShadows.boxShadowB}, inset 1px 1px 2px ${props.theme.boxShadows.boxShadowA},
          inset -1px -1px 2px ${props.theme.boxShadows.boxShadowB};
        border-style: solid;
        border-color: ${props.theme.backgrounds.background};
        border-width: 2px;
        border-radius: 10px;
        padding: 0px 0px;
      }
      & .slidercontainer .innerslider {
        width: 20px;
        height: 20px;
        margin: auto 5px auto ${props.checked};
        border-radius: 6.66px;
        background: ${props.theme.backgrounds.background};
        box-shadow: 1px 1px 2px ${props.theme.boxShadows.boxShadowA}, -1px -1px 2px ${props.theme.boxShadows.boxShadowB};
        border-style: solid;
        border-color: ${props.theme.backgrounds.background};
        border-width: 1px;
        transition: margin 0.35s;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;

function DarkLightSwitch(props) {
  const currentThemeSwitch = useSelector((state) => state.themeState.title);
  const dispatch = useDispatch();

  return (
    <DarkLightSwitchCont checked={currentThemeSwitch === "dark" ? "5px" : "33px"} onClick={() => dispatch(switchTheme())}>
      <div className="slidercontainer">
        <div className="innerslider">
          <MdDarkMode />
        </div>
      </div>
    </DarkLightSwitchCont>
  );
}

function TopBarComponent(props) {
  const currentTitle = useSelector((state) => state.themeState.title);
  const currentTheme = useSelector((state) => state.themeState.currentTheme);
  const dispatch = useDispatch();

  return (
    <TopBar>
      <div style={{ width: "8px" }} />
      <span style={{ height: "24px", marginLeft: "4px" }}>Theme: {currentTitle === "dark" ? "Dark" : "Light"}</span>
      <div style={{ flexGrow: "1" }} />
      <DarkLightSwitch />
      <TopBarButton iconComp={<MdAccountCircle size={`calc(${currentTheme.componentCustomization.general.paddingA} * 4)`} />} />
      <div style={{ width: "8px" }} />
    </TopBar>
  );
}

export default TopBarComponent;
