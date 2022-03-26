import * as React from 'react'
import type { NextPage } from 'next'
import Alert from '@mui/material/Alert'
import BottomNavbar from 'components/BottomNavbar'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'

const Dashboard: NextPage = () => {
	return (
		<div>
			<Alert severity="error">This is an error alert — check it out!</Alert>
			<Alert severity="warning">This is a warning alert — check it out!</Alert>
			<Alert severity="info">This is an info alert — check it out!</Alert>
			<Alert severity="success">This is a success alert — check it out!</Alert>
			<Typography variant="h1">h1. Heading example</Typography>;
			<Button color="primary" variant="contained">
				Primary Contained
			</Button>
			<Button color="secondary" variant="contained">
				Contained Secondary
			</Button>
			<Button color="primary">primary</Button>
			<Button color="secondary">secondary</Button>
			<Button color="success" variant="contained">
				Success
			</Button>
			<Button color="warning" variant="contained">
				warning
			</Button>
			<BottomNavbar />
		</div>
	)
}

export default Dashboard
