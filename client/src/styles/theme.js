export const theme = {
  colors: {
    primary: '#0A74DC',
    secondary: '#6c757d',
    accent: '#FFC107',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
    gray: {
      100: '#f8f9fa',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
  },
  fonts: {
    main: 'Open Sans, sans-serif',
  },
  spacing: {
    unit: 8,
    xs: '0.5rem', // 4px
    sm: '1rem',   // 8px
    md: '2rem',   // 16px
    lg: '3rem',   // 24px
    xl: '4rem',   // 32px
  },
  breakpoints: {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  motion: {
    transition: 'all 0.2s ease-in-out',
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    medium: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    large: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
  };

  export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#0A74DC',
    background: '#121212',
    surface: '#272727',
    text: '#ffffff',
    // Adjust other colors for dark mode as needed
    light: '#272727',
    dark: '#f8f9fa',
  },
};
