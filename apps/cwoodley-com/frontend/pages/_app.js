import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/global-styles'

const theme = {}

export default function App({ Component, pageProps }) {
  return <>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
</>
}
