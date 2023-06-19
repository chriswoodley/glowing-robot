import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body.standard.default.backgroundColor};
    color: ${({ theme }) => theme.body.standard.default.color};
  }

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

  // TODO: this should be a part of design system utils
  // bootstrap includes this as a utility class...
  .text-decoration-none {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
