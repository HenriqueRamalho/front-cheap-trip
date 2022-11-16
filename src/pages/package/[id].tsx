import * as React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, Typography } from '@mui/material'
import SimilarDestinations from 'components/SimilarDestinations'
import { getPackageById } from 'services/package'
import Description from './Description'
import Form from './Form'
import { getBackgroundImageByDestination } from 'utils/images'
import OthersPackages from './OthersPackages'
import CovidRecommendation from './CovidRecommendation'

interface PackageTrip {
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
}

interface PackageProps {
	packageTrip: PackageTrip
}

const Destiny: NextPage<PackageProps> = ({ packageTrip }) => {
	return (
		<div>
			<Box
				component="div"
				sx={{
					margin: '0 auto',
					width: '100%',
					height: 222,
					backgroundImage: `url("${getBackgroundImageByDestination(
						packageTrip.destination
					)}")`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'top center',
					backgroundSize: 'cover',
					display: 'flex',
					flexDirection: 'column-reverse'
				}}
			>
				<Box
					component="div"
					sx={{
						py: 1,
						px: 2,
						maxWidth: 768,
						width: '100%',
						margin: '0 auto'
					}}
				>
					<Typography variant="h4" color="white">
						<strong>{packageTrip.title}</strong>
					</Typography>
				</Box>
			</Box>
			<Form
				destiny={packageTrip.destination}
				departureDate={packageTrip.departureDate}
				returnDate={packageTrip.returnDate}
				price={packageTrip.price}
			/>
			<Description
				description={packageTrip.description}
				destiny={packageTrip.destination}
			/>
			<CovidRecommendation destiny={packageTrip.destination} />
			<OthersPackages />
			<Box>
				<SimilarDestinations />
			</Box>
			<BottomNavbar />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const idSingle = context.params?.id?.toString() ?? ''
	const packageTrip = await getPackageById(idSingle)
	console.log(packageTrip)

	return { props: { packageTrip } }
}

export default Destiny
