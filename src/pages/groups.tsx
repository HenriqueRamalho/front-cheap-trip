import * as React from 'react'
import type { NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, Typography } from '@mui/material'
import CarouselWithCardsGroups from 'components/CarouselWithCardsGroups'

const ListGroups: NextPage = () => {
	return (
		<div>
			<Box
				sx={{
					maxWidth: 768,
					margin: '0 auto',
					paddingX: 2
				}}
			>
				<Typography variant="h2">Todos os grupos</Typography>
			</Box>

			<Box sx={{ py: 1, paddingTop: 3 }}>
				<CarouselWithCardsGroups />
			</Box>
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
		</div>
	)
}

export default ListGroups
