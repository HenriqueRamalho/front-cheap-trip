import { Box, Grid, Button, Typography, Modal } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import HotelIcon from '@mui/icons-material/Hotel'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'
import { ROUTES } from 'utils/routes'
import { useState } from 'react'

interface DescriptionProps {
	description: string
}
const Description = ({ description }: DescriptionProps) => {
	const [isOpenModalEnterOnGroup, setIsOpenModalEnterOnGroup] = useState(false)
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
						onClick={() => setIsOpenModalEnterOnGroup(true)}
						size="medium"
						disableElevation
						disableRipple
						disableFocusRipple
						fullWidth
					>
						Entrar nesse grupo
					</Button>
				</Grid>
				<Grid item xs={12} md={6}>
					<Button
						variant="outlined"
						color="primary"
						href={ROUTES.MY_ACCOUNT}
						size="medium"
						disableElevation
						disableRipple
						disableFocusRipple
						fullWidth
					>
						Compartilhar
					</Button>
				</Grid>
				<Grid item xs={12}>
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
			<Modal
				open={isOpenModalEnterOnGroup}
				onClose={() => setIsOpenModalEnterOnGroup(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 400,
					bgcolor: 'background.paper',
					boxShadow: 24,
					pt: 2,
					px: 4,
					pb: 3,
					height: 250
				}}
				hideBackdrop
			>
				<Box display="flex" flexDirection="column" sx={{ height: '100%' }}>
					<Box>
						<Typography id="modal-modal-title" variant="h6" component="h2">
							Entrar nesse grupo
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							Um pedido de entrada no grupo foi realizado.
						</Typography>
					</Box>

					<Box style={{ marginTop: 'auto' }}>
						<Button
							variant="contained"
							color="primary"
							onClick={() => setIsOpenModalEnterOnGroup(false)}
							size="medium"
							disableElevation
							disableRipple
							disableFocusRipple
							fullWidth
						>
							Continuar
						</Button>
					</Box>
				</Box>
			</Modal>
		</Box>
	)
}

interface FormProps {
	destiny: string
	price: number
	participants: number
	departureDate: string
	returnDate: string
	description?: string
}

const Form = ({
	destiny,
	price,
	participants,
	departureDate,
	returnDate,
	description = ''
}: FormProps) => {
	console.log()
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
					<Description description={description} />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Form
