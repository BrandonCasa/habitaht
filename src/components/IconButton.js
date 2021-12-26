import styled, { css } from "styled-components";

const IconButton = styled.button`
  ${(props) =>
    css`
      & {
        background: ${props.theme.backgrounds.background};
        border-radius: 5px;
        box-shadow: 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, -2px -2px 4px ${props.theme.boxShadows.boxShadowB}, inset 2px 2px 4px #ffffff00, inset -2px -2px 4px #ffffff00;
        border: none;
        padding: 0px 0px;
        color: ${props.theme.textColors.textNormal};
      }
      &:hover {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 4px ${props.theme.boxShadows.boxShadowA}, inset -2px -2px 4px ${props.theme.boxShadows.boxShadowB};
      }
      &:active {
        box-shadow: 2px 2px 4px #ffffff00, -2px -2px 4px #ffffff00, inset 2px 2px 2px ${props.theme.boxShadows.boxShadowActiveA}, inset -2px -2px 2px ${props.theme.boxShadows.boxShadowActiveB};
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

export default IconButton;
