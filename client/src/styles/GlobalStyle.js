import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.colors.primary};
    --secondary: ${({ theme }) => theme.colors.secondary};
    --accent: ${({ theme }) => theme.colors.accent};
    --success: ${({ theme }) => theme.colors.success};
    --danger: ${({ theme }) => theme.colors.danger};
    --warning: ${({ theme }) => theme.colors.warning};
    --info: ${({ theme }) => theme.colors.info};
    --light: ${({ theme }) => theme.colors.light};
    --dark: ${({ theme }) => theme.colors.dark};
    --white: ${({ theme }) => theme.colors.white};
    --black: ${({ theme }) => theme.colors.black};
    --background: ${({ theme }) => theme.colors.light};
    --text: ${({ theme }) => theme.colors.dark};
  }

  [data-theme='dark'] {
    --background: ${({ theme }) => theme.colors.dark};
    --text: ${({ theme }) => theme.colors.light};
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: var(--background);
    color: var(--text);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: ${({ theme }) => theme.motion.transition};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: var(--primary);
    transition: ${({ theme }) => theme.motion.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  button {
    cursor: pointer;
    border: none;
    font-family: ${({ theme }) => theme.fonts.main};
    transition: ${({ theme }) => theme.motion.transition};
  }
`;

export default GlobalStyle;
