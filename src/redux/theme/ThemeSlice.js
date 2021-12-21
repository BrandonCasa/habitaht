import { createSlice } from "@reduxjs/toolkit";
import themeBase from "../../theme/ThemeBase";

const intialDarkTheme = themeBase;

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    title: "base",
    currentTheme: intialDarkTheme,
    savedThemes: {
      base: intialDarkTheme,
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
