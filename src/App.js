import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { setTheme, addTheme } from "./theme/themeSlice";
import { ThemeProvider } from "styled-components";
import TopBarComponent from "./components/TopBar";
import SwitchButton from "./components/SwitchButton";

function App() {
  const currentThemeTitle = useSelector((state) => state.themeState.title);
  const currentTheme = useSelector((state) => state.themeState.currentTheme);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App" style={{ height: "100%", width: "100%", background: currentTheme.backgrounds.background, display: "flex", flexDirection: "column" }}>
        <TopBarComponent />
        <div className="MainAppContent" style={{ padding: "10px", height: "100%", width: "calc(100% - 20px)" }}></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
