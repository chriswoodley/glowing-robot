import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/global-styles';
import '@cw/design-system/dist/styles.css';

const theme = {};

export default function App({ Component, pageProps }) {
  return <>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
</>;
}
