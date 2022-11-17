import * as React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, Grid, Typography } from '@mui/material'
import { getPackages } from 'services/package'
import CardPack from 'components/CardPack'
import { getImageByDestination } from 'utils/images'
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

interface ListDestiniesProps {
	packages: Package[]
}

const ListDestinies: NextPage<ListDestiniesProps> = ({ packages }) => {
	return (
		<div>
			<Box
				sx={{
					maxWidth: 768,
					margin: '0 auto',
					paddingX: 2
				}}
			>
				<Typography variant="h2">Todos os destinos</Typography>

				<Box sx={{ py: 1, paddingTop: 3 }}>
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
				</Box>
			</Box>
			<BottomNavbar />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const packages = await getPackages()
	return { props: { packages } }
}

export default ListDestinies
