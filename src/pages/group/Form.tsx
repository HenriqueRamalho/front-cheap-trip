import { Box, Grid, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Description from './Description'

interface FormProps {
	idGroup: string
	destiny: string
	price: number
	participants: number
	departureDate: string
	returnDate: string
	description?: string
	isUserAdmin?: boolean
}

const Form = ({
	idGroup,
	destiny,
	price,
	participants,
	departureDate,
	returnDate,
	description = '',
	isUserAdmin = false
}: FormProps) => {
	return (
		<Box
			sx={{
				py: 1,
				px: 2,
				maxWidth: 1200,
				width: '100%',
				margin: '0 auto'
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<LocationOnIcon fontSize="small" color="primary" />
					<Typography variant="subtitle1" color="primary">
						Destino: {destiny}
					</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Typography variant="subtitle1" color="primary">
								Preço por pessoa
							</Typography>
							<Typography variant="h4" color="primary">
								<strong>R$ {price}</strong>
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography variant="subtitle1" color="primary">
								Grupo para até:
							</Typography>
							<Typography variant="h4" color="primary">
								<strong>{participants} pessoas</strong>
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography variant="subtitle1" color="primary">
								Data de ida
							</Typography>
							<Typography variant="h5" color="primary">
								<strong>
									{new Date(departureDate)
										.toLocaleDateString('pt-BR')
										.toString()}
								</strong>
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography variant="subtitle1" color="primary">
								Data de ida
							</Typography>
							<Typography variant="h5" color="primary">
								<strong>
									{new Date(returnDate).toLocaleDateString('pt-BR').toString()}
								</strong>
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={6}>
					<Description
						description={description}
						isUserAdmin={isUserAdmin}
						idGroup={idGroup}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Form
