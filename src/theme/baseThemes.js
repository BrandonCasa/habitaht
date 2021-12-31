const componentCustomization = {
  general: {
    paddingA: "8px",
  },
  topBar: {
    self: {
      height: "36px",
    },
    iconButton: {
      marginLeft: "8px",
      marginRight: "8px",
    },
  },
};

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
  componentCustomization: componentCustomization,
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
  componentCustomization: componentCustomization,
};
