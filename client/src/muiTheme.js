import { grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const dark = '#4F4F4F'
// const grey

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      dark,
    },
    action: {
      disabledBackground: grey[300],
      disabled: dark,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          fontSize: '3rem',
          padding: '5rem 3rem',
          boxShadow: '0px 0px 4px 2px rgba(0,0,0,0.30)',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          // disabledBackground: ,
          justifyContent: 'center',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            background: 'red',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(', '),
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: '3rem',
      color: dark,
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      color: dark,
      fontWeight: 600,
      textTransform: 'uppercase',
      fontFamily: 'cursive',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 500,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.85rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },

    body1: {
      fontSize: '1.6rem',
      fontWeight: 500,
      lineHeight: 1.7,
      color: dark,
    },
    body2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: 1.85,
    },
    button: {
      fontSize: '2.5rem',
      fontFamily: 'cursive',
      textTransform: 'none',
      height: '4.5rem',
      borderRadius: 10,
      padding: '2px 3px',
      boxShadow: '0px 0px 4px -1px rgba(71,64,71,0.63)',
    },
  },
})
