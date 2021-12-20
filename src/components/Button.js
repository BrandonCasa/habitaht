import styled, { css } from "styled-components";
import darkTheme from "../theme/DarkTheme";

const Button = styled.button`
  ${(props) =>
    css`
      & {
        background: ${(props) => props.theme.backgrounds.background};
        border-radius: 5px;
        box-shadow: 2px 2px 4px ${(props) => props.theme.boxShadows.boxShadowA}, -2px -2px 4px ${(props) => props.theme.boxShadows.boxShadowB}, inset 2px 2px 4px #ffffff00,
          inset -2px -2px 4px #ffffff00;
        border: none;
        padding: 0.25em 1em;
        color: ${(props) => props.theme.textColors.textNormal};
        transition: box-shadow 300ms ease-in-out;
      }
      & span {
        font-weight: 800;
        font-size: large;
        border-radius: 2.5px;
        padding: 0px 6px;
      }
      &:hover {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 4px ${(props) => props.theme.boxShadows.boxShadowA},
          inset -2px -2px 4px ${(props) => props.theme.boxShadows.boxShadowB};
        transition: box-shadow 85ms ease-in-out;
      }
      &:active {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 2px ${(props) => props.theme.boxShadows.boxShadowActiveA},
          inset -2px -2px 2px ${(props) => props.theme.boxShadows.boxShadowActiveB};
        transition: box-shadow 85ms ease-in-out;
      }
    `}

  ${(props) =>
    props.bumpedin &&
    css`
      & {
        background: linear-gradient(145deg, ${(props) => props.theme.backgrounds.backgroundGradientColorA}, ${(props) => props.theme.backgrounds.backgroundGradientColorB});
      }
    `}

  ${(props) =>
    props.bumpedout &&
    css`
      & {
        background: linear-gradient(145deg, ${(props) => props.theme.backgrounds.backgroundGradientColorB}, ${(props) => props.theme.backgrounds.backgroundGradientColorA});
      }
    `}

  ${(props) =>
    props.indent &&
    css`
      & {
        background: ${(props) => props.theme.backgrounds.background};
        box-shadow: inset 2px 2px 4px ${(props) => props.theme.boxShadows.boxShadowA}, inset -2px -2px 4px ${(props) => props.theme.boxShadows.boxShadowB}, 2px 2px 4px #ffffff00,
          -2px -2px 4px #ffffff00;
        transition: box-shadow 300ms ease-in-out;
      }
      &:hover {
        box-shadow: inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00, 2px 2px 4px ${(props) => props.theme.boxShadows.boxShadowA},
          -2px -2px 4px ${(props) => props.theme.boxShadows.boxShadowB};
        transition: box-shadow 85ms ease-in-out;
      }
      &:active {
        box-shadow: inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00, 2px 2px 2px ${(props) => props.theme.boxShadows.boxShadowActiveA},
          -2px -2px 2px ${(props) => props.theme.boxShadows.boxShadowActiveB};
        transition: box-shadow 85ms ease-in-out;
      }
    `}

  ${(props) =>
    props.alert &&
    css`
      & {
        color: ${(props) => props.theme.textColors.textAlert};
      }
    `}

  ${(props) =>
    props.confirm &&
    css`
      & {
        color: ${(props) => props.theme.textColors.textConfirm};
      }
    `}
`;

export default Button;
