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
	}
}

export default responsiveFontSizes(createTheme(theme))
