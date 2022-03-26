import * as React from 'react'
import type { NextPage } from 'next'
import Alert from '@mui/material/Alert'
import BottomNavbar from 'components/BottomNavbar'

const Dashboard: NextPage = () => {
	return (
		<div>
			<Alert severity="error">This is an error alert — check it out!</Alert>
			<Alert severity="warning">This is a warning alert — check it out!</Alert>
			<Alert severity="info">This is an info alert — check it out!</Alert>
			<Alert severity="success">This is a success alert — check it out!</Alert>
			<BottomNavbar />
		</div>
	)
}

export default Dashboard
