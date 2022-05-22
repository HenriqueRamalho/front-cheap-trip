import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, CardActionArea } from '@mui/material'
import HotelIcon from '@mui/icons-material/Hotel'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'
import ExpenseScale from './ExpenseScale'

interface CardPackProps {
	link?: string
}

export default function CardPack({ link = '' }: CardPackProps) {
	return (
		<Box sx={{ paddingX: 1 }}>
			<Card sx={{ width: '100%' }}>
				<CardActionArea href={link}>
					<CardMedia
						component="img"
						height="140"
						image="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg"
						alt="Salvador"
					/>
					<CardContent>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								gap: 2
							}}
						>
							<Box
								sx={{
									bgcolor: 'warning.main',
									color: 'warning.contrastText',
									py: 0.5,
									px: 1,
									borderRadius: 1
								}}
							>
								6 Noites
							</Box>
							<Box
								sx={{
									bgcolor: 'warning.main',
									color: 'warning.contrastText',
									py: 0.5,
									px: 1
								}}
							>
								4 pessoas
							</Box>
						</Box>
						<Typography
							gutterBottom
							variant="subtitle1"
							color="grey.900"
							mt={1}
							mb={2}
						>
							<strong>Pacote para Pelourinho</strong>
						</Typography>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								mb: 1
							}}
						>
							<ExpenseScale rating={3} />
						</Box>
						<Typography variant="body2" color="primary.main">
							Inclusos
						</Typography>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								mb: 1
							}}
						>
							<HotelIcon color="secondary" />
							<AirplanemodeActiveIcon color="secondary" />
						</Box>
						<Typography variant="body2" color="primary.main">
							Preço por pessoa
						</Typography>
						<Typography variant="h5" color="primary.main">
							<strong>R$ 1.200</strong>
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	)
}
