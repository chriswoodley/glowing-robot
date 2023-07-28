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

  return (
    <ThemeProvider theme={theme}>
      <AppStyles />
      <Icons />
      {shouldRender ? children : null}
    </ThemeProvider>
  );
}

export default Theme;
