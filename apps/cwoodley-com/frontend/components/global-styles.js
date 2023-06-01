import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.headings.serif.default.family};
    font-weight: ${({ theme }) => theme.headings.serif.default.weight};
    color: ${({ theme }) => theme.headings.serif.default.color};
  }
`;

export default GlobalStyle;
