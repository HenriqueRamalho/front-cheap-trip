import {
	createTheme,
	responsiveFontSizes,
	ThemeOptions
} from '@mui/material/styles'

const theme: ThemeOptions = {
	palette: {
		primary: {
			main: '#006BA8'
		},
		secondary: {
			main: '#FFBC48'
		}
	},
	components: {
		MuiBottomNavigation: {
			styleOverrides: {
				root: {
					backgroundColor: '#006BA8'
				}
			}
		},
		MuiBottomNavigationAction: {
			styleOverrides: {
				root: {
					color: 'white'
				},
				label: {
					color: '#ffffff',
					fontSize: 12
				}
			}
		}
	}
}

export default responsiveFontSizes(createTheme(theme))
