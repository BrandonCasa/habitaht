import { colord } from "colord";

const darkReference = colord({ h: 0, s: 0, l: 20 }).toHex();
const lightReference = colord({ h: 0, s: 0, l: 80 }).toHex();

const darkLightnessMultShadow = (colord(darkReference).toHsl().l / 100) * 0.35;
const darkLightnessMultGradient = (colord(darkReference).toHsl().l / 100) * 0.3;
const lightLightnessMultShadow = (colord(lightReference).toHsl().l / 100) * 0.35;
const lightLightnessMultGradient = (colord(lightReference).toHsl().l / 100) * 0.3;

let darkTextNormalColor = colord(darkReference).toHsl().l;
darkTextNormalColor = colord({ h: 0, s: 0, l: 20 })
  .invert()
  .toHex();
let lightTextNormalColor = colord(lightReference).toHsl().l;
lightTextNormalColor = colord({ h: 0, s: 0, l: 80 })
  .invert()
  .toHex();

export const darkTheme = {
  name: "Dark",
  backgrounds: {
    background: "#333333",
    backgroundGradientColorA: "#242424",
    backgroundGradientColorB: "#424242",
  },
  boxShadows: {
    boxShadowA: "#212121",
    boxShadowActiveA: "#1c1c1c",
    boxShadowB: "#454545",
    boxShadowActiveB: "#4a4a4a",
  },
  textColors: {
    textNormal: "#cccccc",
    textAlert: "#fe6e6e",
    textConfirm: "#7eff9c",
  },
  baseColors: {
    primary: "#009B9B",
    secondary: "#D80032",
    green: "#009B32",
    red: "#7F001D",
  },
};

export const lightTheme = {
  name: "Light",
  backgrounds: {
    background: "#cccccc",
    backgroundGradientColorA: "#8f8f8f",
    backgroundGradientColorB: "#ffffff",
  },
  boxShadows: {
    boxShadowA: "#858585",
    boxShadowActiveA: "#808080",
    boxShadowB: "#ffffff",
    boxShadowActiveB: "#ffffff",
  },
  textColors: {
    textNormal: "#333333",
    textAlert: "#fe6e6e",
    textConfirm: "#7eff9c",
  },
  baseColors: {
    primary: "#009B9B",
    secondary: "#D80032",
    green: "#009B32",
    red: "#7F001D",
  },
};
