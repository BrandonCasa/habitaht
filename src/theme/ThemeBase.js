import { colord } from "colord";

const newReference = colord({ h: 0, s: 0, l: 20 }).toHex();
const lightnessMultShadow = (colord(newReference).toHsl().l / 100) * 0.35;
const lightnessMultGradient = (colord(newReference).toHsl().l / 100) * 0.3;
let textNormalColor = colord(newReference).toHsl().l;
textNormalColor = colord({ h: 0, s: 0, l: 20 }).invert().toHex();
console.log(textNormalColor);

const themeBase = {
  name: "ThemeBase",
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
  textColors: {
    textNormal: textNormalColor,
    textAlert: "#fe6e6e",
    textConfirm: "#7eff9c",
  },
};

export default themeBase;
