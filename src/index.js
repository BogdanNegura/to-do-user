import React from "react";
import { render } from "react-dom";
import { App } from "./component/app/app.component";

import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import GlobalStyle from "./utils/global";

const here = document.querySelector("#here");

render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyle></GlobalStyle>
    </>
  </ThemeProvider>,
  here
);
