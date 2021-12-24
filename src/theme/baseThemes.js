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
    background: darkReference,
    backgroundGradientColorA: colord(darkReference)
      .darken(darkLightnessMultGradient)
      .toHex(),
    backgroundGradientColorB: colord(darkReference)
      .lighten(darkLightnessMultGradient)
      .toHex(),
  },
  boxShadows: {
    boxShadowA: colord(darkReference)
      .darken(darkLightnessMultShadow)
      .toHex(),
    boxShadowActiveA: colord(darkReference)
      .darken(darkLightnessMultShadow)
      .darken(0.02)
      .toHex(),
    boxShadowB: colord(darkReference)
      .lighten(darkLightnessMultShadow)
      .toHex(),
    boxShadowActiveB: colord(darkReference)
      .lighten(darkLightnessMultShadow)
      .lighten(0.02)
      .toHex(),
  },
  textColors: {
    textNormal: darkTextNormalColor,
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
    background: lightReference,
    backgroundGradientColorA: colord(lightReference)
      .darken(lightLightnessMultGradient)
      .toHex(),
    backgroundGradientColorB: colord(lightReference)
      .lighten(lightLightnessMultGradient)
      .toHex(),
  },
  boxShadows: {
    boxShadowA: colord(lightReference)
      .darken(lightLightnessMultShadow)
      .toHex(),
    boxShadowActiveA: colord(lightReference)
      .darken(lightLightnessMultShadow)
      .darken(0.02)
      .toHex(),
    boxShadowB: colord(lightReference)
      .lighten(lightLightnessMultShadow)
      .toHex(),
    boxShadowActiveB: colord(lightReference)
      .lighten(lightLightnessMultShadow)
      .lighten(0.02)
      .toHex(),
  },
  textColors: {
    textNormal: lightTextNormalColor,
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
