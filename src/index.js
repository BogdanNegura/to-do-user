import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./component/app/app.component";

import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import GlobalStyle from "./utils/global";

const here = document.querySelector("#here");

render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <App />
        <GlobalStyle></GlobalStyle>
      </>
    </ThemeProvider>
  </BrowserRouter>,
  here
);
