import * as React from 'react'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login'
import InputIcon from '@mui/icons-material/Input'
import { ROUTES } from 'utils/routes'
import { useSession } from 'next-auth/react'

export default function Iconsbar() {
	const { data: session } = useSession()
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
				{session ? (
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
				) : (
					<Button
						variant="contained"
						color="primary"
						disableElevation
						disableRipple
						disableFocusRipple
						href={ROUTES.LOGIN}
						startIcon={<LoginIcon />}
					>
						Login
					</Button>
				)}
			</Grid>

			{!session ? (
				<Grid item>
					<Button
						variant="contained"
						color="primary"
						disableElevation
						disableRipple
						disableFocusRipple
						href={ROUTES.SIGNUP}
						startIcon={<InputIcon />}
					>
						Signup
					</Button>
				</Grid>
			) : null}
		</Grid>
	)
}
