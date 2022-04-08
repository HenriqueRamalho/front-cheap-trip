import * as React from 'react'
import Slider from 'react-slick'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CardDestination from 'components/CardDestination'
import { Box, Button, Typography } from '@mui/material'

const DiscoveryDestinations = () => {
	const theme = useTheme()
	const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
	const settings = {
		className: 'center',
		centerMode: !isMoreThenMd,
		infinite: true,
		centerPadding: '60px',
		slidesToShow: isMoreThenMd ? 5 : 1,
		speed: 500
	}

	return (
		<div
			style={{
				padding: 0,
				maxWidth: 768,
				margin: '0 auto'
			}}
		>
			<Box sx={{ paddingBottom: 4, paddingTop: 4 }}>
				<Typography variant="h2" align="center">
					Pacotes de viagem em destaque
				</Typography>
			</Box>
			<Slider {...settings}>
				{[1, 2, 3, 4, 5, 6].map((item) => (
					<div key={item} style={{ width: 300, padding: '0 0' }}>
						<CardDestination />
					</div>
				))}
			</Slider>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					paddingBottom: 3,
					paddingTop: 3
				}}
			>
				<Button size={'large'} variant="contained" onClick={() => null}>
					Ver todos os destinos
				</Button>
			</Box>
		</div>
	)
}

export default DiscoveryDestinations
