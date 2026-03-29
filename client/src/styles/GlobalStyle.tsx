import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.background};
    font-size: 12px;
    font-family: ${(props) => props.theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  img {
    border: none;
    outline: none;
    max-width: 100%;
    display: block;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    transition: color ${(props) => props.theme.transitions.base};

    &:hover {
      color: ${(props) => props.theme.colors.primaryHover};
      text-decoration: none;
    }
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    line-height: 22px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.text};
    margin-top: 0;
    margin-bottom: 0;
  }

  h1 {
    font-size: 45px;
    font-weight: 600;
  }

  h2 {
    font-size: 44px;
    font-weight: 300;
  }

  h3 {
    font-size: 28px;
    font-weight: 400;
  }

  h4 {
    font-weight: 400;
    font-size: 19.5px;

    a {
      color: ${(props) => props.theme.colors.text};
    }
  }

  h5 {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
  }

  h6 {
    font-size: 12px;
    font-weight: 700;
  }

  hr {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    border-bottom: solid 1px ${(props) => props.theme.colors.border};
  }

  ul {
    margin-bottom: 0;
  }

  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
    transition: all ${(props) => props.theme.transitions.base};
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      padding: 0 15px;
    }
  }

  .hidden {
    display: none !important;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    body {
      font-size: 14px;
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 24px;
    }
  }
`;

export default GlobalStyle;
