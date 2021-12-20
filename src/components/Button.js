import styled, { css } from "styled-components";
import darkTheme from "../theme/DarkTheme";

const Button = styled.button`
  ${(props) =>
    css`
      & {
        background: ${darkTheme.backgrounds.background};
        border-radius: 5px;
        box-shadow: 2px 2px 4px ${darkTheme.boxShadows.boxShadowA}, -2px -2px 4px ${darkTheme.boxShadows.boxShadowB}, inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00;
        border: none;
        padding: 0.25em 1em;
        color: ${darkTheme.textColors.textNormal};
        transition: box-shadow 300ms ease-in-out;
      }
      & span {
        font-weight: 800;
        font-size: large;
        border-radius: 2.5px;
        padding: 0px 6px;
      }
      &:hover {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 4px ${darkTheme.boxShadows.boxShadowA}, inset -2px -2px 4px ${darkTheme.boxShadows.boxShadowB};
        transition: box-shadow 85ms ease-in-out;
      }
      &:active {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 2px ${darkTheme.boxShadows.boxShadowActiveA}, inset -2px -2px 2px ${darkTheme.boxShadows.boxShadowActiveB};
        transition: box-shadow 85ms ease-in-out;
      }
    `}

  ${(props) =>
    props.bumpedin &&
    css`
      & {
        background: linear-gradient(145deg, ${darkTheme.backgrounds.backgroundGradientColorA}, ${darkTheme.backgrounds.backgroundGradientColorB});
      }
    `}

  ${(props) =>
    props.bumpedout &&
    css`
      & {
        background: linear-gradient(145deg, ${darkTheme.backgrounds.backgroundGradientColorB}, ${darkTheme.backgrounds.backgroundGradientColorA});
      }
    `}

  ${(props) =>
    props.indent &&
    css`
      & {
        background: ${darkTheme.backgrounds.background};
        box-shadow: inset 2px 2px 4px ${darkTheme.boxShadows.boxShadowA}, inset -2px -2px 4px ${darkTheme.boxShadows.boxShadowB}, 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00;
        transition: box-shadow 300ms ease-in-out;
      }
      &:hover {
        box-shadow: inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00, 2px 2px 4px ${darkTheme.boxShadows.boxShadowA}, -2px -2px 4px ${darkTheme.boxShadows.boxShadowB};
        transition: box-shadow 85ms ease-in-out;
      }
      &:active {
        box-shadow: inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00, 2px 2px 2px ${darkTheme.boxShadows.boxShadowActiveA}, -2px -2px 2px ${darkTheme.boxShadows.boxShadowActiveB};
        transition: box-shadow 85ms ease-in-out;
      }
    `}

  ${(props) =>
    props.alert &&
    css`
      & {
        color: ${darkTheme.textColors.textAlert};
      }
    `}

  ${(props) =>
    props.confirm &&
    css`
      & {
        color: ${darkTheme.textColors.textConfirm};
      }
    `}
`;

export default Button;
