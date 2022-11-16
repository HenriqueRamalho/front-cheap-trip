import * as React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, Grid, InputAdornment, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import DiscoveryDestinations from 'components/DiscoveryDestinations'
import DontYouFindYourDestiny from 'components/DontYouFindYourDestiny'
import { getPackages } from 'services/package'
import CardPack from 'components/CardPack'
import { ROUTES } from 'utils/routes'

interface Package {
	_id: string
	title: string
	participants: number
	destination: string
	description: string
	imageAddress: string
	departureDate: string
	returnDate: string
	price: number
	idUser: string
	nights: number
}

interface PackageProps {
	packages: Package[]
}

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

const Index: NextPage<PackageProps> = ({ packages }) => {
	return (
		<div>
			<Box
				sx={{
					maxWidth: 768,
					margin: '0 auto',
					paddingTop: 4,
					paddingX: 2,
					paddingBottom: 4
				}}
			>
				<Typography variant="h2">Procure por destinos ou grupos</Typography>
				<TextField
					id="input-with-icon-textfield"
					variant="outlined"
					fullWidth
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						)
					}}
					sx={{
						marginTop: 2
					}}
				/>
			</Box>
			<Box
				sx={{
					maxWidth: 768,
					margin: '0 auto',
					paddingX: 2
				}}
			>
				<Grid container>
					{packages.map((item, key) => (
						<Grid
							item
							key={`${item}-${key}`}
							sx={{ marginBottom: 3 }}
							xs={12}
							md={4}
						>
							<CardPack
								imageUrl={getImageByDestination(item.destination)}
								link={ROUTES.GO_TO_PACKAGE(item._id)}
								tags={[`${item.nights} noites`, `${item.participants} pessoas`]}
								title={item.title}
								price={1200}
							/>
						</Grid>
					))}
				</Grid>
			</Box>

			<Box>
				<DiscoveryDestinations />
			</Box>
			<DontYouFindYourDestiny />
			<BottomNavbar />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const packages = await getPackages()
	return { props: { packages } }
}

export default Index
