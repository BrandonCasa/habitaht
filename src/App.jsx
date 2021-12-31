import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
//import { setTheme, addTheme } from "./theme/themeSlice";
import { ThemeProvider } from "styled-components";
import TopBarComponent from "./components/TopBar";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const currentThemeTitle = useSelector((state) => state.themeState.title);
  const currentTheme = useSelector((state) => state.themeState.currentTheme);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <div
          className="App"
          style={{
            height: "100%",
            width: "100%",
            background: currentTheme.backgrounds.background,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TopBarComponent />
          <div
            className="MainAppContent"
            style={{
              padding: currentTheme.componentCustomization.general.paddingA,
              flexGrow: "1",
              color: currentTheme.textColors.textNormal,
            }}
          >
            <Routes>
              <Route exact path="/" element={<Homepage />} />

              <Route path="*" element={<>unkown</>} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
//<Route path="/" element={<div>Landing Page</div>} />
