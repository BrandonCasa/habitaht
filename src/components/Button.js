import styled, { css } from "styled-components";
import darkTheme from "../theme/DarkTheme";

const Button = styled.button`
  ${(props) =>
    css`
      & {
        background: ${darkTheme.background};
        border-radius: 5px;
        box-shadow: 2px 2px 4px ${darkTheme.boxShadowA}, -2px -2px 4px ${darkTheme.boxShadowB}, inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00;
        border: none;
        padding: 0.25em 1em;
        color: ${darkTheme.textNormal};
        transition: box-shadow 300ms ease-in-out;
      }
      & span {
        font-weight: 800;
        font-size: large;
        border-radius: 2.5px;
        padding: 0px 6px;
      }
      &:hover {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 4px ${darkTheme.boxShadowA}, inset -2px -2px 4px ${darkTheme.boxShadowB};
        transition: box-shadow 85ms ease-in-out;
      }
      &:active {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 2px ${darkTheme.boxShadowActiveA}, inset -2px -2px 2px ${darkTheme.boxShadowActiveB};
        transition: box-shadow 85ms ease-in-out;
      }
    `}

  ${(props) =>
    props.bumpedin &&
    css`
      & {
        background: linear-gradient(145deg, ${darkTheme.backgroundGradientColorA}, ${darkTheme.backgroundGradientColorB});
      }
    `}

  ${(props) =>
    props.bumpedout &&
    css`
      & {
        background: linear-gradient(145deg, ${darkTheme.backgroundGradientColorB}, ${darkTheme.backgroundGradientColorA});
      }
    `}

  ${(props) =>
    props.indent &&
    css`
      & {
        background: ${darkTheme.background};
        box-shadow: inset 2px 2px 4px ${darkTheme.boxShadowA}, inset -2px -2px 4px ${darkTheme.boxShadowB}, 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00;
        transition: box-shadow 300ms ease-in-out;
      }
      &:hover {
        box-shadow: inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00, 2px 2px 4px ${darkTheme.boxShadowA}, -2px -2px 4px ${darkTheme.boxShadowB};
        transition: box-shadow 85ms ease-in-out;
      }
      &:active {
        box-shadow: inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00, 2px 2px 2px ${darkTheme.boxShadowActiveA}, -2px -2px 2px ${darkTheme.boxShadowActiveB};
        transition: box-shadow 85ms ease-in-out;
      }
    `}

  ${(props) =>
    props.alert &&
    css`
      & {
        color: ${darkTheme.textAlert};
      }
    `}

  ${(props) =>
    props.confirm &&
    css`
      & {
        color: ${darkTheme.textConfirm};
      }
    `}
`;

export default Button;
