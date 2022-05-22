import * as React from 'react'
import CardPack from 'components/CardPack'
import Slider from 'react-slick'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ROUTES } from 'utils/routes'

interface CarouselWithCardsProps {
	maxWidth?: number
	slideToShow?: {
		default?: number
		moreThenMd?: number
	}
}

const CarouselWithCards = ({
	maxWidth = 768,
	slideToShow = { default: 1, moreThenMd: 3 }
}: CarouselWithCardsProps) => {
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
			<Slider {...settings}>
				{[1, 2, 3, 4, 5, 6].map((item) => (
					<div key={item} style={{ width: 300, padding: '0 0' }}>
						<CardPack link={`${ROUTES.GO_TO_DESTINY(1)}`} />
					</div>
				))}
			</Slider>
		</div>
	)
}

export default CarouselWithCards
