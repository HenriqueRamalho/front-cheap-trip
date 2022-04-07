import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'theme'
import GlobalStyles from '@mui/material/GlobalStyles'
import globalCss from 'styles/globalCss'
import Footer from 'components/Footer'
import Header from 'components/header-component'
import Topbar from 'components/Topbar'

const MyApp = (props: AppProps) => {
	const { Component, pageProps } = props
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles)
		}
		console.log('theme', theme)
	}, [])

	return (
		<React.Fragment>
			<Head>
				<title>Cheap trip</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles styles={globalCss} />
				<Topbar></Topbar>
				<main>
					<Component {...pageProps} />
				</main>
				<Footer></Footer>
			</ThemeProvider>
		</React.Fragment>
	)
}

export default MyApp
