import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../redux/theme/themeSlice";
import styled, { css, useTheme } from "styled-components";
import TextButton from "./TextButton";
import IconButton from "./IconButton";
import { colord } from "colord";
import { MdDarkMode, MdAccountCircle } from "react-icons/md";

const TopBarButtonContainer = styled.div`
  ${(props) =>
    css`
      & {
        display: flex;
      }
      & .iconButton {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props.theme.backgrounds.background};
        border-radius: 5px;
        box-shadow: 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, -2px -2px 4px ${props.theme.boxShadows.boxShadowB}, inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00;
        border: none;
        padding: 0px calc(calc(${props.theme.componentCustomization.topBar.self.height} - ${props.size}) / 2);
        margin-left: ${props.theme.componentCustomization.topBar.iconButton.marginLeft};
        margin-right: ${props.theme.componentCustomization.topBar.iconButton.marginRight};
        color: ${props.theme.textColors.textNormal};
      }
      & .iconButton:hover {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, inset -2px -2px 4px ${props.theme.boxShadows.boxShadowB};
      }
      & .iconButton:active {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 2px ${props.theme.boxShadows.boxShadowActiveA}, inset -2px -2px 2px ${props.theme.boxShadows.boxShadowActiveB};
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

function TopBarButton(props) {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <TopBarButtonContainer size={props.size}>
      <button className="iconButton">
        <MdAccountCircle size={props.size} />
      </button>
      <div class="dropdown-content" style={{}}></div>
    </TopBarButtonContainer>
  );
}

export default TopBarButton;
/*<IconButton
        onClick={() => {
          dispatch(switchTheme());
        }}
        className="IconButton"
        noEndTransition
        onMouseEnter={() => {}}
      >
        <MdAccountCircle size="2.25em" />
        <div class="dropdown-content" style={{}}>
          lol
        </div>
      </IconButton>
      */
