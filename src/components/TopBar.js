import { useDispatch, useSelector } from "react-redux";
import { setTheme, addTheme } from "../redux/theme/themeSlice";
import styled from "styled-components";
import darkTheme from "../theme/DarkTheme";
import Button from "./Button";
import ButtonText from "./ButtonText";
import { colord } from "colord";

const TopBar = styled.div`
  background: ${(props) => props.theme.backgrounds.background};
  box-shadow: 2px 2px 8px ${(props) => props.theme.boxShadows.boxShadowA}, -2px -2px 8px ${(props) => props.theme.boxShadows.boxShadowB};
  border: none;
  height: 42px;
  padding: 8px 16px;
  display: flex;
  color: ${darkTheme.textColors.textNormal};
`;

function TopBarComponent() {
  const currentThemeTitle = useSelector((state) => state.themeState.title);
  const currentTheme = useSelector((state) => state.themeState.currentTheme);
  const dispatch = useDispatch();

  const lightenTheme = () => {
    const newReference = colord(currentTheme.backgrounds.background).lighten(0.05).toHex();
    const lightnessMultShadow = (colord(newReference).toHsl().l / 100) * 0.35;
    const lightnessMultGradient = (colord(newReference).toHsl().l / 100) * 0.3;

    const newTheme = {
      name: "Lighter Theme",
      backgrounds: {
        background: newReference,
        backgroundGradientColorA: colord(newReference).darken(lightnessMultGradient).toHex(),
        backgroundGradientColorB: colord(newReference).lighten(lightnessMultGradient).toHex(),
      },
      boxShadows: {
        boxShadowA: colord(newReference).darken(lightnessMultShadow).toHex(),
        boxShadowActiveA: colord(newReference).darken(lightnessMultShadow).darken(0.02).toHex(),
        boxShadowB: colord(newReference).lighten(lightnessMultShadow).toHex(),
        boxShadowActiveB: colord(newReference).lighten(lightnessMultShadow).lighten(0.02).toHex(),
      },
      textColors: currentTheme.textColors,
    };
    const addPayload = {
      title: "lightened",
      themeSettings: newTheme,
      setThemeAfter: true,
    };
    dispatch(addTheme(addPayload));
  };

  return (
    <TopBar>
      {currentTheme.name}
      <Button style={{ height: "100%", marginLeft: "auto" }} onClick={lightenTheme}>
        <ButtonText>Lighten</ButtonText>
      </Button>
    </TopBar>
  );
}

export default TopBarComponent;
