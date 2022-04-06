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
	typography: {
		fontFamily: "'Nunito', 'sans-serif'",

		h2: {
			color: '#006BA8',
			fontWeight: 900,
			fontSize: '2rem'
		},

		h6: {
			color: '#006BA8',
			fontWeight: 900,
			fontSize: '1rem'
		},

		button: {
			textTransform: 'none',
			fontWeight: 700
		}
	}
}

export default responsiveFontSizes(createTheme(theme))
