'use client';

import React, { useEffect, useState } from 'react';
import { applyTheme, Icons } from '@cw/design-system';
import { ThemeProvider } from 'styled-components';
import AppStyles from './app-styles';
import appTheme from 'utils/app-theme';

const theme = applyTheme(appTheme);

function Theme({ children }) {
  const [ shouldRender, setShouldRender ] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

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
