import React, { useEffect, useState } from "react";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer";
import { useTranslation } from "react-i18next";
import createAppTheme from "./jss/appTheme";

export default function App({ children }) {
  const theme = createAppTheme(true);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div
          style={{
            backgroundColor: "black",
            textAlign: "center",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div>{children}</div>
          <Footer />
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}
