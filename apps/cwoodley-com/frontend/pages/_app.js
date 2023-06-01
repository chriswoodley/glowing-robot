import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/global-styles';
import { applyTheme } from '@cw/design-system';
import appTheme from '../utils/app-theme';
import '@cw/design-system/dist/styles.css';

const theme = applyTheme(appTheme);

export default function App({ Component, pageProps }) {
  return <>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
</>;
}
