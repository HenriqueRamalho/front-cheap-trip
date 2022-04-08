import * as React from 'react'
import CardPack from 'components/CardPack'
import Slider from 'react-slick'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const CarouselWithCards = () => {
	const theme = useTheme()
	const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
	const settings = {
		className: 'center',
		centerMode: !isMoreThenMd,
		infinite: true,
		centerPadding: '60px',
		slidesToShow: isMoreThenMd ? 3 : 1,
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
			<Slider {...settings}>
				{[1, 2, 3, 4, 5, 6].map((item) => (
					<div key={item} style={{ width: 300, padding: '0 0' }}>
						<CardPack />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default CarouselWithCards
