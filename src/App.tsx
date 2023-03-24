import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Navbar />
      <GlobalStyle />
    </ThemeProvider>
  );
}
