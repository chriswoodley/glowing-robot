import '@cw/design-system/dist/styles.css';

import React from 'react';
import StyledComponentsRegistry from 'lib/styled-component-registry';
import AppShell from 'components/app-shell';
import Theme from 'components/theme';

function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Chris Woodley</title>
          <meta name="description" content="Chris Woodley" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" href="/favicon.png"/>
        </head>
        <body>
          <StyledComponentsRegistry>
            <Theme>
              <AppShell>
                {children}
              </AppShell>
            </Theme>
          </StyledComponentsRegistry>
        </body>
      </html>
    );
}

export default RootLayout;
