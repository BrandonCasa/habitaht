import styled, { css } from "styled-components";

const TextButton = styled.button`
  ${(props) =>
    css`
      & {
        background: ${props.theme.backgrounds.background};
        border-radius: 5px;
        box-shadow: 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, -2px -2px 4px ${props.theme.boxShadows.boxShadowB}, inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00;
        border: none;
        padding: 0.25em 1em;
        color: ${props.theme.textColors.textNormal};
      }
      & span {
        font-weight: 800;
        font-size: large;
        border-radius: 2.5px;
        padding: 0px 6px;
      }
      &:hover {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, inset -2px -2px 4px ${props.theme.boxShadows.boxShadowB};
      }
      &:active {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 2px ${props.theme.boxShadows.boxShadowActiveA}, inset -2px -2px 2px ${props.theme.boxShadows.boxShadowActiveB};
      }
    `}

  ${(props) =>
    props.bumpedin &&
    css`
      & {
        background: linear-gradient(145deg, ${props.theme.backgrounds.backgroundGradientColorA}, ${props.theme.backgrounds.backgroundGradientColorB});
      }
    `}

  ${(props) =>
    props.bumpedout &&
    css`
      & {
        background: linear-gradient(145deg, ${props.theme.backgrounds.backgroundGradientColorB}, ${props.theme.backgrounds.backgroundGradientColorA});
      }
    `}

  ${(props) =>
    props.indent &&
    css`
      & {
        background: ${props.theme.backgrounds.background};
        box-shadow: inset 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, inset -2px -2px 4px ${props.theme.boxShadows.boxShadowB}, 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00;
      }
      &:hover {
        box-shadow: inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00, 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, -2px -2px 4px ${props.theme.boxShadows.boxShadowB};
      }
      &:active {
        box-shadow: inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00, 2px 2px 2px ${props.theme.boxShadows.boxShadowActiveA}, -2px -2px 2px ${props.theme.boxShadows.boxShadowActiveB};
      }
    `}

  ${(props) =>
    props.alert &&
    css`
      & {
        color: ${props.theme.textColors.textAlert};
      }
    `}

  ${(props) =>
    props.confirm &&
    css`
      & {
        color: ${props.theme.textColors.textConfirm};
      }
    `}
`;

export default TextButton;
