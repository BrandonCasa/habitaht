import styled, { css } from "styled-components";
import Button from "./Button";
import darkTheme from "../theme/DarkTheme";
import ButtonText from "./ButtonText";

const TopBar = styled.div`
  background: ${darkTheme.backgrounds.background};
  box-shadow: 2px 2px 8px ${darkTheme.boxShadows.boxShadowA}, -2px -2px 8px ${darkTheme.boxShadows.boxShadowB};
  border: none;
  height: 42px;
  padding: 8px 16px;
  display: flex;
  color: ${darkTheme.textColors.textNormal};
`;

function TopBarComponent() {
  return (
    <TopBar>
      <Button style={{ height: "100%", marginLeft: "auto" }} confirm>
        <ButtonText>Confirm</ButtonText>
      </Button>
      <Button style={{ height: "100%", marginLeft: "16px" }} alert>
        <ButtonText>Alert</ButtonText>
      </Button>
      <Button style={{ height: "100%", marginLeft: "16px" }}>
        <ButtonText>Normal</ButtonText>
      </Button>
    </TopBar>
  );
}

export default TopBarComponent;
