import { ThemeProvider } from "styled-components";

import Header from "../Header/index.js";
import theme from "./theme";
import Welcome from "../Welcome/index.js";
import Waver from "../Waver/index.js";
import WeAre from "../WeAre/index.js";
import Metric from "../Metric/index.js";
import Donut from "../Donut/index.js";



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Welcome />
      <Waver />
      <WeAre />
      <Metric />
      <Donut />



    </ThemeProvider>
  );
}

