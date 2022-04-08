import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, CardActionArea } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function CardDestination() {
	return (
		<Box sx={{ paddingX: 1 }}>
			<Card sx={{ width: '100%' }}>
				<CardActionArea>
					<CardMedia
						component="img"
						width="105"
						height="140"
						image="https://www.viagensecaminhos.com/wp-content/uploads/2021/02/bondinho-pao-de-acucar-pontos-turisticos-rio-de-janeiro.jpg"
						alt="Salvador"
					/>
					<Box
						sx={{
							position: 'absolute',
							bottom: 0,
							color: 'common.white',
							px: 1,
							py: 2,
							display: 'flex',
							alignItems: 'center'
						}}
					>
						<LocationOnIcon fontSize="small" />
						<Typography variant="subtitle2" color="white">
							Rio de Janeiro
						</Typography>
					</Box>
				</CardActionArea>
			</Card>
		</Box>
	)
}
