import "./App.css";
import TopBarComponent from "./components/TopBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopBarComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
