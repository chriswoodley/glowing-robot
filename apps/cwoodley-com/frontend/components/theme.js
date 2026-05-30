"use client";

import React, { useState } from "react";
import { Icons } from "@cw/design-system";
import { ThemeProvider } from "styled-components";
import AppStyles from "./app-styles";
import appTheme from "utils/app-theme";

const theme = appTheme;

function Theme({ children }) {
  const [shouldRender] = useState(() => true);

  if (shouldRender) {
    return (
      <ThemeProvider theme={theme}>
        <AppStyles />
        <Icons />
        {children}
      </ThemeProvider>
    );
  }
}

export default Theme;
