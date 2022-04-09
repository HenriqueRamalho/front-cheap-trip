import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import HomeIcon from '@mui/icons-material/Home'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import SearchIcon from '@mui/icons-material/Search'
import { ROUTES } from 'utils/routes'

export default function FixedBottomNavigation() {
	const [value, setValue] = React.useState(0)
	const ref = React.useRef<HTMLDivElement>(null)

	return (
		<Box sx={{ pb: 7, display: { md: 'none' } }} ref={ref}>
			<Paper
				sx={{
					position: 'fixed',
					bottom: 0,
					left: 0,
					right: 0,
					'& .MuiBottomNavigationAction-root, .Mui-selected, svg': {
						color: 'white'
					}
				}}
				elevation={3}
			>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue)
					}}
				>
					<BottomNavigationAction
						label="Início"
						href={ROUTES.HOME}
						icon={<HomeIcon fontSize="small" />}
					/>
					<BottomNavigationAction
						label="Notificações"
						href={ROUTES.HOME}
						icon={<NotificationsIcon fontSize="small" />}
					/>
					<BottomNavigationAction
						href={ROUTES.HOME}
						icon={<SearchIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						label="Salvos"
						href={ROUTES.HOME}
						icon={<BookmarkIcon fontSize="small" />}
					/>
					<BottomNavigationAction
						label="Conta"
						href={ROUTES.MY_ACCOUNT}
						icon={<AccountCircleIcon fontSize="small" />}
					/>
				</BottomNavigation>
			</Paper>
		</Box>
	)
}
