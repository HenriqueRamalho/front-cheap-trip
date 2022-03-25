import {
  ThemeOptions,
  responsiveFontSizes
} from '@material-ui/core/styles'
import { createTheme } from '@material-ui/core/styles'

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#ff0000'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1170,
      xl: 1920
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff'
        },
        'b, strong': {
          fontWeight: 500
        },
        a: {
          color: '#e03936'
        }
      }
    }
  }
}

export default responsiveFontSizes(createTheme(theme))
