import '@cw/design-system/dist/styles.css';
import { applyTheme } from '@cw/design-system';
import { ThemeProvider } from 'styled-components';
import appTheme from '../utils/app-theme';
import GlobalLayout from 'components/global-layout';
import GlobalStyle from '../components/global-styles';
import StyledComponentsRegistry from 'lib/styled-component-registry';

const theme = applyTheme(appTheme);

export default function App({ Component, pageProps }) {
  return <>
  <StyledComponentsRegistry>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ThemeProvider>
  </StyledComponentsRegistry>
</>;
}
