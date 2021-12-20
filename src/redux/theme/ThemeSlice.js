import { createSlice } from "@reduxjs/toolkit";

const intialDarkTheme = {
  name: "Dark Theme",
  backgrounds: {
    background: "#323232",
    backgroundGradientColorA: "#252525",
    backgroundGradientColorB: "#3f3f3f",
  },
  textColors: {
    textNormal: "#b7b7b7",
    textAlert: "#fe6e6e",
    textConfirm: "#7eff9c",
  },
  boxShadows: {
    boxShadowA: "#202020",
    boxShadowActiveA: "#1b1b1b",
    boxShadowB: "#414141",
    boxShadowActiveB: "#464646",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    title: "dark",
    currentTheme: intialDarkTheme,
    savedThemes: {
      dark: intialDarkTheme,
    },
  },
  reducers: {
    setTheme: (state, action) => {
      state.title = action.payload;
      state.currentTheme = state.savedThemes[action.payload];
    },
    addTheme: {
      reducer: (state, action) => {
        state.savedThemes[action.payload.title] = action.payload.themeSettings;
        // Whether to set the theme after adding it.
        if (action.payload.setThemeAfter) {
          state.title = action.payload.title;
          state.currentTheme = action.payload.themeSettings;
        }
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme, addTheme } = themeSlice.actions;

export default themeSlice.reducer;
