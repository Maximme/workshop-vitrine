import { ThemeProvider } from "styled-components";

import Header from "../Header/index.js";
import theme from "./theme";
import Welcome from "../Welcome/index.js";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Welcome />


    </ThemeProvider>
  );
}
