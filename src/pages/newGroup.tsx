import * as React from 'react'
import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Checkbox } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'

const NewGroup: NextPage = () => {
	const [local, setAge] = React.useState('')

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<>
			<div
				style={{
					maxWidth: 768,
					margin: '0 auto'
				}}
			>
				<Box>
					<Grid container>
						<Grid item xs={12} pb={4}>
							<Typography variant="h2" align="center">
								Criar um grupo
							</Typography>
						</Grid>
					</Grid>
				</Box>

				<Box component="form" noValidate autoComplete="off">
					<Grid container direction="column" spacing={2}>
						<Grid item xs={12}>
							<TextField
								id="outlined-basic"
								label="Nome do Grupo"
								variant="outlined"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="outlined-basic"
								label="Nº de participantes"
								variant="outlined"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="outlined-basic"
								label="Destino"
								variant="outlined"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="outlined-basic"
								label="Valor por pessoa"
								variant="outlined"
								fullWidth
							/>
						</Grid>
					</Grid>
				</Box>

				<Box>
					<Grid container lg={8}>
						<Grid item>
							<Typography variant="h6" pt={4}>
								Serviços inclusos:
							</Typography>
						</Grid>

						<Grid container direction="row" alignItems="center" pt={2}>
							<Grid item xs={4} sm={2} lg={3}>
								<Typography pr={2}>Hospedagem:</Typography>
							</Grid>
							<Grid item xs={8} sm={6} lg={9}>
								<TextField
									id="outline-basic"
									label="Valor por pessoa"
									variant="outlined"
									fullWidth
								/>
							</Grid>
						</Grid>
						<Grid container direction="row" alignItems="center" pt={2}>
							<Grid item xs={4} sm={2} lg={3}>
								<Typography pr={2}>Passagens:</Typography>
							</Grid>
							<Grid item xs={8} sm={6} lg={9}>
								<TextField
									id="outline-basic"
									label="Valor por pessoa"
									variant="outlined"
									fullWidth
								/>
							</Grid>
						</Grid>
						<Grid container direction="row" alignItems="center" pt={2}>
							<Grid item xs={4} sm={2} lg={3}>
								<Typography pr={2}>Passeios:</Typography>
							</Grid>
							<Grid item xs={8} sm={6} lg={9}>
								<TextField
									id="outline-basic"
									label="Valor por pessoa"
									variant="outlined"
									fullWidth
								/>
							</Grid>
						</Grid>
					</Grid>
				</Box>
				<Box>
					<Grid container pt={4}>
						<FormControlLabel
							control={
								<Checkbox
									sx={{ paddingRight: 1, paddingBottom: 0, paddingTop: 0 }}
									defaultChecked
								/>
							}
							label="Tornar grupo restrito para amigos?"
							sx={{ padding: 0 }}
						/>
					</Grid>
					<Grid container paddingLeft={4}>
						<Grid item>
							<Typography variant="caption">
								Somente poderão entrar no grupo pessoas com um convite.
							</Typography>
						</Grid>
					</Grid>
				</Box>
				<Box>
					<Grid container xs={12} pt={4}>
						<Grid item xs={6}>
							<Button fullWidth size={'large'} variant="contained">
								Criar grupo
							</Button>
						</Grid>
					</Grid>
				</Box>
			</div>
		</>
	)
}

export default NewGroup
