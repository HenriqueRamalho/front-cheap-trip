import * as React from 'react'
import type { NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, Typography } from '@mui/material'
import CarouselWithCards from 'components/CarouselWithCards'

const ListDestinies: NextPage = () => {
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
			</Box>

			<Box sx={{ py: 1, paddingTop: 3 }}>
				<CarouselWithCards />
			</Box>
			<Box sx={{ py: 1 }}>
				<CarouselWithCards />
			</Box>
			<Box sx={{ py: 1 }}>
				<CarouselWithCards />
			</Box>
			<Box sx={{ py: 1 }}>
				<CarouselWithCards />
			</Box>
			<BottomNavbar />
		</div>
	)
}

export default ListDestinies
