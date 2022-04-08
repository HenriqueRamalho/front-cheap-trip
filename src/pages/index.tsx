import * as React from 'react'
import type { NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, InputAdornment, Typography } from '@mui/material'
import CarouselWithCards from 'components/CarouselWithCards'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import DiscoveryDestinations from 'components/DiscoveryDestinations'
import DontYouFindYourDestiny from 'components/DontYouFindYourDestiny'

const Index: NextPage = () => {
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
				<Typography variant="h2">Pacotes de viagem em destaque</Typography>
			</Box>

			<Box sx={{ py: 1, paddingTop: 3 }}>
				<CarouselWithCards />
			</Box>
			<Box sx={{ py: 1 }}>
				<CarouselWithCards />
			</Box>
			<Box>
				<DiscoveryDestinations />
			</Box>
			<DontYouFindYourDestiny />
			<BottomNavbar />
		</div>
	)
}

export default Index
