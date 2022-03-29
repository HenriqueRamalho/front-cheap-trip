import * as React from 'react'
import Box from '@mui/material/Box'
import { Grid, Typography } from '@mui/material'
import Link from '@mui/material/Link'

export default function Footer() {
	return (
		<Box sx={{ bgcolor: 'grey.300' }}>
			<Grid container direction="column">
				<Grid item pt={4} pb={2}>
					<Typography align="center">
						CheapTrip é criado e desenvolvido por Atlas Tech.
					</Typography>
				</Grid>
				<Grid item pb={2}>
					<Typography align="center">
						Av. Afonso Pena, 258 -10° Andar
					</Typography>
				</Grid>
				<Grid item pb={2}>
					<Typography align="center">Belo Horizonte - MG.</Typography>
				</Grid>
				<Grid item>
					<Typography align="center" pb={4}>
						Dúvidas, reclamações e elogios entre em contato com:
						<Link href={'#'}> atende@cheaptrip.com.br</Link>
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}
