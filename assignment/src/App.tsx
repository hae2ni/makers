import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/globalStyle";
import { Theme } from "./styles/theme";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./styles/layout/Layout";
import Current from "./pages/Current";
import Forecast from "./pages/Forecast";
import Future from "./pages/Future";
import Home from "./pages/Home";
import "@sopt-makers/ui/dist/index.css";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="current" element={<Current />} />
              <Route path="forecast" element={<Forecast />} />
              <Route path="future" element={<Future />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
