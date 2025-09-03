import { createTheme } from '@mui/material/styles';

// Therapeutic color palette inspired by calming, professional psychology practices
export const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90A4', // Calming teal-blue
      light: '#7BB3C0',
      dark: '#2F5F6F',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8B9DC3', // Soft periwinkle
      light: '#B4C7E7',
      dark: '#5A6B8D',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8FAFB', // Very light blue-gray
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50', // Dark blue-gray for readability
      secondary: '#546E7A',
    },
    success: {
      main: '#66BB6A', // Gentle green for positive feedback
    },
    warning: {
      main: '#FFA726', // Warm orange for gentle alerts
    },
    error: {
      main: '#EF5350', // Soft red for errors
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 12, // Softer, more welcoming rounded corners
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '10px 24px',
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#FFFFFF',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4A90A4',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#4A90A4',
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#4A90A4',
        },
      },
    },
  },
});