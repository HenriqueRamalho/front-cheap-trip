import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, Grid, Typography } from '@mui/material'
import CarouselWithCardsGroups from 'components/CarouselWithCardsGroups'
import { getGroups } from 'services/groups'
import CardPack from 'components/CardPack'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ROUTES } from 'utils/routes'
import { ResponseGetGroups } from 'services/groups/types'

const getImageByDestination = (destination: string) => {
	const defaultImage = 'https://via.placeholder.com/500'
	const images = new Map()
	images.set(
		'gramado',
		'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg'
	)
	images.set(
		'rio_de_janeiro',
		'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg'
	)
	images.set(
		'salvador',
		'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg'
	)
	return images.has(destination) ? images.get(destination) : defaultImage
}

const ListGroups: NextPage = () => {
	const [groups, setGroups] = useState<ResponseGetGroups[]>([])
	useEffect(() => {
		const fetchGroups = async () => {
			const data = await getGroups()
			console.log(data)
			if (data) {
				setGroups(data)
			}
		}
		fetchGroups()
	}, [])

	const theme = useTheme()
	const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))

	return (
		<div>
			<Box
				sx={{
					maxWidth: 768,
					margin: '0 auto',
					paddingX: 2
				}}
			>
				<Typography variant="h2" sx={{ marginBottom: 4 }}>
					Todos os grupos
				</Typography>

				{isMoreThenMd ? (
					<Grid container>
						{groups.map((item, key) => (
							<Grid item key={`${item}-${key}`} sx={{ marginBottom: 3 }}>
								<CardPack
									imageUrl={getImageByDestination(item.destination)}
									link={ROUTES.GO_TO_GROUP(item._id)}
									tags={[
										`${item.nights} noites`,
										`${item.participants} pessoas`
									]}
									title={item.title}
									price={1200}
								/>
							</Grid>
						))}
					</Grid>
				) : (
					<Box sx={{ py: 1, paddingTop: 3 }}>
						<CarouselWithCardsGroups items={groups} />
					</Box>
				)}

				<Box sx={{ py: 1 }}>
					<CarouselWithCardsGroups />
				</Box>
				<Box sx={{ py: 1 }}>
					<CarouselWithCardsGroups />
				</Box>
				<Box sx={{ py: 1 }}>
					<CarouselWithCardsGroups />
				</Box>
				<BottomNavbar />
			</Box>
		</div>
	)
}

export default ListGroups
