import * as React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import HotelIcon from '@mui/icons-material/Hotel'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'
import { ROUTES } from 'utils/routes'

interface DescriptionProps {
	description: string
	destiny: string
}

const Description = ({ description, destiny }: DescriptionProps) => {
	return (
		<Box
			sx={{
				py: 1,
				px: 2,
				maxWidth: 768,
				width: '100%',
				margin: '0 auto'
			}}
		>
			<Typography variant="h5" color="primary" sx={{ mb: 2 }}>
				<strong>Descrição</strong>
			</Typography>
			<Typography variant="subtitle1">{description}</Typography>
			<Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>
				<strong>Inclusos</strong>
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					mb: 1
				}}
			>
				<Box sx={{ marginRight: 1 }}>
					<HotelIcon color="secondary" />{' '}
				</Box>
				<Box>
					<Typography variant="subtitle1" color="primary">
						Hospedagem
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					mb: 1
				}}
			>
				<Box sx={{ marginRight: 1 }}>
					<AirplanemodeActiveIcon color="secondary" />{' '}
				</Box>
				<Box>
					<Typography variant="subtitle1" color="primary">
						Hospedagem
					</Typography>
				</Box>
			</Box>
			<Grid container spacing={2} sx={{ py: 4 }}>
				<Grid item xs={12} md={6}>
					<Button
						variant="contained"
						color="primary"
						href={ROUTES.CONTACT_SALLES}
						size="medium"
						disableElevation
						disableRipple
						disableFocusRipple
						fullWidth
					>
						Comprar esse pacote
					</Button>
				</Grid>
				<Grid item xs={12} md={6}>
					<Button
						variant="outlined"
						color="primary"
						href={ROUTES.NEW_GROUP}
						size="medium"
						disableElevation
						disableRipple
						disableFocusRipple
						fullWidth
					>
						Criar um grupo a partir desse destino
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Description
