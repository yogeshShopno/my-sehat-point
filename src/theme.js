import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#031B4E', // Navy Blue
    },
    secondary: {
      main: '#0CC0DF', // Cyan
    },
    background: {
      default: '#F8F9FA',
    },
  },
  typography: {
    fontFamily: '"Sora", "Noto Serif", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 600,
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

export default theme;
