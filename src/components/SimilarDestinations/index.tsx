import * as React from 'react'
import Slider from 'react-slick'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CardDestination from 'components/CardDestination'
import { Box, Typography } from '@mui/material'

interface SimilarDestinationsProps {
	maxWidth?: number
	slideToShow?: {
		default?: number
		moreThenMd?: number
	}
}

const SimilarDestinations = ({
	maxWidth = 768,
	slideToShow = { default: 1, moreThenMd: 5 }
}: SimilarDestinationsProps) => {
	const theme = useTheme()
	const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
	const settings = {
		className: 'center',
		centerMode: !isMoreThenMd,
		infinite: true,
		centerPadding: '60px',
		slidesToShow: isMoreThenMd ? slideToShow.moreThenMd : slideToShow.default,
		speed: 500
	}

	return (
		<div
			style={{
				padding: 0,
				maxWidth,
				margin: '0 auto'
			}}
		>
			<Box sx={{ py: 4, px: 2 }}>
				<Typography variant="h2">Destinos semelhantes</Typography>
			</Box>
			<Slider {...settings}>
				{[1, 2, 3, 4, 5, 6].map((item) => (
					<div key={item} style={{ width: 300, padding: '0 0' }}>
						<CardDestination />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default SimilarDestinations
