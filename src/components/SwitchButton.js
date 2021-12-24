import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { colord } from "colord";

const SwitchLabelStyled = styled.label`
  ${(props) =>
    css`
      input[type="checkbox"] + div div {
        box-shadow: 0 0 5px 1px
          ${colord(props.theme.baseColors.green)
            .lighten(0.1)
            .toHex()};
        outline: 1.5px solid
          ${colord(props.theme.baseColors.green)
            .lighten(0.1)
            .toHex()};
        position: absolute;
        height: 22px;
        width: 22px;
        background: none;
        border-radius: 7.5px;
        left: 9px;
        top: 9px;
        transition: 250ms ease-in-out;
      }

      input[type="checkbox"]:checked + div div {
        box-shadow: 0 0 10px 2px
          ${colord(props.theme.baseColors.green)
            .lighten(0.05)
            .toHex()};
        outline: 1.5px solid
          ${colord(props.theme.baseColors.green)
            .lighten(0.05)
            .toHex()};
        position: absolute;
        height: 28px;
        width: 28px;
        background: ${props.theme.baseColors.green};
        border-radius: 7.5px;
        left: 43px;
        top: 6px;
        transition: 250ms ease-in-out;
      }
    `}
`;
const SwitchInnerDivStyled = styled.div``;

const SwitchDivStyled = styled.div`
  ${(props) =>
    css`
      & {
        border-radius: 15px;
        width: 80px;
        height: 40px;
        background: ${props.theme.backgrounds.background};
        position: relative;
        box-shadow: 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, -2px -2px 4px ${props.theme.boxShadows.boxShadowB}, inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00;
      }
      &:hover {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, inset -2px -2px 4px ${props.theme.boxShadows.boxShadowB};
      }
      &:active {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 2px ${props.theme.boxShadows.boxShadowActiveA}, inset -2px -2px 2px ${props.theme.boxShadows.boxShadowActiveB};
      }
    `}
`;

function SwitchButton() {
  const dispatch = useDispatch();

  const [isOn, setIsOn] = React.useState(false);

  return (
    <SwitchLabelStyled class="switch">
      <input type="checkbox" hidden></input>
      <SwitchDivStyled>
        <SwitchInnerDivStyled isOn={isOn}></SwitchInnerDivStyled>
      </SwitchDivStyled>
    </SwitchLabelStyled>
  );
}

export default SwitchButton;
