import * as React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, Typography } from '@mui/material'
import CarouselWithCards from 'components/CarouselWithCards'
import SimilarDestinations from 'components/SimilarDestinations'

import CovidRecommendation from './CovidRecommendation'
import Form from './Form'
import { getGroupById } from 'services/groups'
import { useSession } from 'next-auth/react'
interface Group {
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

interface GroupProps {
	group: Group
}

const Group: NextPage<GroupProps> = ({ group }) => {
	const { data: session } = useSession()
	return (
		<div>
			<Box
				component="div"
				sx={{
					margin: '0 auto',
					width: '100%',
					height: 222,
					backgroundImage: 'url("/images/salvador_pelourinho.jpeg")',
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
						maxWidth: 1200,
						width: '100%',
						margin: '0 auto'
					}}
				>
					<Typography variant="h4" color="white">
						<strong>{group.title}</strong>
					</Typography>
				</Box>
			</Box>
			<Form
				idGroup={group._id}
				destiny={group.destination}
				price={group.price}
				participants={group.participants}
				departureDate={group.departureDate}
				returnDate={group.returnDate}
				description={group.description}
				isUserAdmin={group.idUser === session?.user._id}
			/>
			<CovidRecommendation />
			<Box
				sx={{
					maxWidth: 1200,
					margin: '0 auto',
					paddingX: 2
				}}
			>
				<Typography variant="h2">Promoções semelhantes</Typography>
			</Box>
			<Box sx={{ py: 1, paddingTop: 3 }}>
				<CarouselWithCards maxWidth={1200} slideToShow={{ moreThenMd: 5 }} />
			</Box>
			<Box>
				<SimilarDestinations maxWidth={1200} slideToShow={{ moreThenMd: 6 }} />
			</Box>
			<BottomNavbar />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const idSingle = context.params?.id?.toString() ?? ''
	const group = await getGroupById(idSingle)

	return { props: { group } }
}

export default Group
