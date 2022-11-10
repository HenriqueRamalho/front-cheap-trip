import { Button, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { deleteGroup } from 'services/groups'
import { ROUTES } from 'utils/routes'

interface ModalDeleGroupProps {
	isOpen?: boolean
	idGroup: string
	handleClose?: () => void
}

const ModalDeleGroup = ({
	isOpen = false,
	handleClose = () => null,
	idGroup
}: ModalDeleGroupProps) => {
	const handleConfirmDeleteGroup = () => {
		deleteGroup(idGroup)
		window.location.href = ROUTES.ALL_GROUPS
	}

	return (
		<Modal
			open={isOpen}
			onClose={handleClose}
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
						Grupo
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Tem certeza que deseja deletar este grupo?
					</Typography>
				</Box>

				<Box sx={{ mt: 'auto', display: 'flex' }}>
					<Button
						variant="contained"
						color="error"
						onClick={handleConfirmDeleteGroup}
						size="medium"
						disableElevation
						disableRipple
						disableFocusRipple
						fullWidth
						sx={{ mr: 1 }}
					>
						Sim
					</Button>
					<Button
						variant="outlined"
						color="info"
						onClick={handleClose}
						size="medium"
						disableElevation
						disableRipple
						disableFocusRipple
						fullWidth
						sx={{ ml: 1 }}
					>
						Cancelar
					</Button>
				</Box>
			</Box>
		</Modal>
	)
}

export default ModalDeleGroup
