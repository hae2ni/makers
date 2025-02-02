import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyle";
import { Theme } from "./styles/theme";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
