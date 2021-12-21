import { useDispatch, useSelector } from "react-redux";
//import { setTheme, addTheme } from "./theme/themeSlice";
import { ThemeProvider } from "styled-components";
import TopBarComponent from "./components/TopBar";

function App() {
  const currentThemeTitle = useSelector((state) => state.themeState.title);
  const currentTheme = useSelector((state) => state.themeState.currentTheme);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App" style={{ height: "100vh", width: "100vw", background: currentTheme.backgrounds.background }}>
        <TopBarComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
