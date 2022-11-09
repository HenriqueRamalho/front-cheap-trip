import * as React from 'react'
import CardPack, { CardPackProps } from 'components/CardPack'
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
	items?: CardPackProps[]
}

const CarouselWithCardsGroups = ({
	maxWidth = 768,
	slideToShow = { default: 1, moreThenMd: 3 },
	items = []
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
				{items.map((item, key) => (
					<div
						key={`${item.title}-${key}`}
						style={{ width: 300, padding: '0 0' }}
					>
						<CardPack
							imageUrl="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg"
							link={ROUTES.GO_TO_GROUP('1')}
							tags={['6 noites', '5 pessoas']}
							title={item.title}
							price={1200}
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default CarouselWithCardsGroups
