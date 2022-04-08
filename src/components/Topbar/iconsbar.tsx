import * as React from 'react'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { ROUTES } from 'utils/routes'

export default function Iconsbar() {
	return (
		<Grid
			container
			sx={{
				height: '100%',
				alignItems: 'center',
				paddingLeft: 5,
				justifyContent: 'space-between',
				paddingRight: 5,
				'& .MuiButton-root:hover, svg': {
					color: 'white',
					backgroundColor: 'transparent'
				}
			}}
		>
			<Grid item>
				<Button
					variant="contained"
					color="primary"
					disableElevation
					disableRipple
					disableFocusRipple
					href={ROUTES.HOME}
					startIcon={<NotificationsIcon />}
				>
					Notificações
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					color="primary"
					disableElevation
					disableRipple
					disableFocusRipple
					href={ROUTES.NEW_GROUP}
					startIcon={<BookmarkIcon />}
				>
					Salvos
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					color="primary"
					disableElevation
					disableRipple
					disableFocusRipple
					href={ROUTES.MY_ACCOUNT}
					startIcon={<AccountCircleIcon />}
				>
					Minha conta
				</Button>
			</Grid>
		</Grid>
	)
}
