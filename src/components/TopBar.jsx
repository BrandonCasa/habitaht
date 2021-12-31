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
        background: ${(props) => props.theme.backgrounds.background};
        box-shadow: 2px 2px 8px ${(props) => props.theme.boxShadows.boxShadowA}, -2px -2px 8px ${(props) => props.theme.boxShadows.boxShadowB};
        border: none;
        width: 100%;
        height: ${props.theme.componentCustomization.topBar.self.height};
        padding-top: ${props.theme.componentCustomization.general.paddingA};
        padding-bottom: ${props.theme.componentCustomization.general.paddingA};
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
  const currentTheme = useSelector((state) => state.themeState.currentTheme);
  const dispatch = useDispatch();

  //const [showSwapTheme, setShowSwapTheme] = React.useState(false);
  const [sliderMouseDown, setSliderMouseDown] = React.useState(false);
  const [sliderVal, setSliderVal] = React.useState(currentTheme.componentCustomization.topBar.self.height.replace("px", ""));

  const adjustCustomizationEvent = () => {
    setSliderMouseDown(false);
    let newCustomization = JSON.parse(JSON.stringify(currentTheme.componentCustomization));
    newCustomization.topBar.self.height = `${sliderVal}px`;
    newCustomization.general.paddingA = `${sliderVal * 0.22222222222}px`;
    dispatch(adjustCustomization({ newCustomization }));
    return;
  };
  const sliderMove = (event) => {
    setSliderVal(event.target.value);
    return;
  };

  return (
    <TopBar>
      <div style={{ width: currentTheme.componentCustomization.general.paddingA }} />
      <span style={{ height: "24px" }}>General Scale: </span>
      <div style={{ width: currentTheme.componentCustomization.general.paddingA }} />
      <input
        type="range"
        min="22"
        max="72"
        value={sliderMouseDown ? sliderVal : currentTheme.componentCustomization.topBar.self.height.replace("px", "")}
        onChange={sliderMove}
        onMouseUpCapture={adjustCustomizationEvent}
        onMouseDownCapture={() => setSliderMouseDown(true)}
        style={{ height: "22px" }}
      />
      <div style={{ width: "32px" }} />
      <span style={{ height: "24px" }}>Theme: {currentTitle === "dark" ? "Dark" : "Light"}</span>
      <div style={{ width: "16px" }} />
      <div style={{ flexGrow: "1" }} />
      <TopBarButton iconComp={<MdDarkMode size={`calc(${currentTheme.componentCustomization.general.paddingA} * 2)`} />} onClick={() => dispatch(switchTheme())} />
      <TopBarButton iconComp={<MdAccountCircle size={`calc(${currentTheme.componentCustomization.general.paddingA} * 4)`} />} />
      <div style={{ marginRight: currentTheme.componentCustomization.general.paddingA }} />
    </TopBar>
  );
}

export default TopBarComponent;
