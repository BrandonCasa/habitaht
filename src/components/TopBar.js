import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, switchTheme } from "../redux/theme/themeSlice";
import styled, { css } from "styled-components";
import TextButton from "./TextButton";
import IconButton from "./IconButton";
import { colord } from "colord";
import { MdDarkMode, MdAccountCircle } from "react-icons/md";
import TopBarButton from "./TopBarButton";
import { adjustCustomization } from "../redux/theme/themeSlice";

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
  const currentTheme = useSelector((state) => state.themeState.currentTheme);
  const dispatch = useDispatch();

  const [showSwapTheme, setShowSwapTheme] = React.useState(false);
  const [sliderMouseDown, setSliderMouseDown] = React.useState(false);
  const [sliderVal, setSliderVal] = React.useState(currentTheme.componentCustomization.topBar.self.height.replace("px", ""));

  const adjustCustomizationEvent = () => {
    setSliderMouseDown(false);
    let newCustomization = JSON.parse(JSON.stringify(currentTheme.componentCustomization));
    newCustomization.topBar.self.height = `${sliderVal}px`;
    dispatch(adjustCustomization({ newCustomization }));
    return;
  };
  const sliderMove = (event) => {
    setSliderVal(event.target.value);
    return;
  };

  return (
    <TopBar>
      <div style={{ width: "16px" }} />
      <span style={{ height: "24px" }}>{currentTitle === "dark" ? "Dark" : "Light"}</span>
      <div style={{ width: "16px" }} />
      <input
        type="range"
        min="24"
        max="72"
        value={sliderMouseDown ? sliderVal : currentTheme.componentCustomization.topBar.self.height.replace("px", "")}
        onChange={sliderMove}
        onMouseUpCapture={adjustCustomizationEvent}
        onMouseDownCapture={() => setSliderMouseDown(true)}
        style={{ height: "22px" }}
      />
      <div style={{ flexGrow: "1" }} />
      <TopBarButton iconComp={<MdDarkMode size={"1.25em"} />} onClick={() => dispatch(switchTheme())} />
      <TopBarButton iconComp={<MdAccountCircle size={"2.25em"} />} />
      <div style={{ marginRight: "8px" }} />
    </TopBar>
  );
}

export default TopBarComponent;
