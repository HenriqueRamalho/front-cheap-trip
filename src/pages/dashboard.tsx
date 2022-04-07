import * as React from 'react'
import type { NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CarouselWithCards from 'components/CarouselWithCards'

const Dashboard: NextPage = () => {
	const theme = useTheme()
	const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))

	return (
		<div>
			<div>{`isMoreThenMd: ${isMoreThenMd}`}</div>
			<Typography variant="h2" align="center">
				Solicitar contato do vendedor
			</Typography>
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

export default Dashboard
