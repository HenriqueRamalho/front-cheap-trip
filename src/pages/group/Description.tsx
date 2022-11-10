import { Box, Grid, Button, Typography, Modal } from '@mui/material'
import HotelIcon from '@mui/icons-material/Hotel'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'
import { ROUTES } from 'utils/routes'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import ModalDelete from './Delete'

interface DescriptionProps {
	description: string
	idGroup: string
	isUserAdmin?: boolean
}
const Description = ({
	description,
	isUserAdmin = false,
	idGroup
}: DescriptionProps) => {
	const [isOpenModalEnterOnGroup, setIsOpenModalEnterOnGroup] = useState(false)
	const [isOpenModalDeleteGroup, setIsOpenModalDeleteGroup] = useState(false)
	const handleOpenModalEnterOnGroup = () => setIsOpenModalEnterOnGroup(true)
	const handleOpenModalDeleteGroup = () => setIsOpenModalDeleteGroup(true)
	const handleCloseModalDeleteGroup = () => setIsOpenModalDeleteGroup(false)
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
						onClick={handleOpenModalEnterOnGroup}
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
						href={ROUTES.CONTACT_GROUP}
						size="medium"
						disableElevation
						disableRipple
						disableFocusRipple
						fullWidth
					>
						Contactar
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
				{isUserAdmin && (
					<Grid item xs={12}>
						<Button
							variant="outlined"
							startIcon={<DeleteIcon />}
							color="error"
							onClick={handleOpenModalDeleteGroup}
						>
							Deletar
						</Button>
					</Grid>
				)}
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

			<ModalDelete
				isOpen={isOpenModalDeleteGroup}
				handleClose={handleCloseModalDeleteGroup}
				idGroup={idGroup}
			/>
		</Box>
	)
}
export default Description
