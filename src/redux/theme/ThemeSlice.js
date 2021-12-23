import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../theme/baseThemes";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    title: "dark",
    currentTheme: darkTheme,
    savedThemes: {
      dark: darkTheme,
      light: lightTheme,
    },
  },
  reducers: {
    setTheme: (state, action) => {
      state.title = action.payload;
      state.currentTheme = state.savedThemes[action.payload];
    },
    switchTheme: (state) => {
      console.log(state.title);
      state.title = state.title === "dark" ? "light" : "dark";
      state.currentTheme = state.savedThemes[state.title];
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme, switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
