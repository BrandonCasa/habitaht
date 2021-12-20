import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "dark",
    savedThemes: {
      dark: {
        name: "Dark Theme",
        backgrounds: {
          background: "#323232",
        },
        textColors: {
          textNormal: "#b7b7b7",
          textAlert: "#fe6e6e",
          textConfirm: "#7eff9c",
        },
      },
    },
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    addTheme: {
      reducer: (state, action) => {
        const themeSettings = {
          name: action.payload.name,
          backgrounds: {
            background: action.payload.colors.background,
          },
          textColors: {
            textNormal: action.payload.colors.textNormal,
            textAlert: action.payload.colors.textAlert,
            textConfirm: action.payload.colors.textConfirm,
          },
        };
        state.savedThemes[action.payload.ID] = themeSettings;
        // Whether to set the theme after adding it.
        if (action.payload.setThemeAfter) {
          state.theme = action.payload.ID;
        }
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
