export const theme = {
  colors: {
    primary: '#224390',
    primaryHover: '#224390E5',
    secondary: '#606060',
    accent: '#f0f0f0',
    white: '#FFFFFF',
    black: '#000000',
    text: '#2a2b2d',
    textMuted: '#606060',
    border: '#ebebeb',
    background: '#FFF',
  },
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Open Sans', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  transitions: {
    fast: '150ms ease-in-out',
    base: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
};

export type Theme = typeof theme;
