import React, { useState } from 'react'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
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

const MyAccount: NextPage = () => {
	const [local, setAge] = useState('')
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			// The user is not authenticated, handle it here.
		}
	})

	console.log('session: ', session)

	if (status === 'loading') {
		return <div>Loading or not authenticated...</div>
	}

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<div
			style={{
				maxWidth: 500,
				margin: '0 auto'
			}}
		>
			<Box>
				<Grid container>
					<Grid item xs={12} pb={4}>
						<Typography variant="h2" align="center">
							Minha conta
						</Typography>
					</Grid>
				</Grid>
			</Box>

			<Box component="form" noValidate autoComplete="off">
				<Grid container direction="column" spacing={2}>
					<Grid item xs={12}>
						<TextField
							id="outlined-basic"
							label="Nome completo"
							variant="outlined"
							fullWidth
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							id="outlined-basic"
							label="E-mail"
							variant="outlined"
							fullWidth
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							id="outlined-basic"
							label="Celular"
							variant="outlined"
							fullWidth
						/>
					</Grid>

					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-autowidth-label">
								Localização
							</InputLabel>
							<Select
								labelId="demo-simple-select-autowidth-label"
								id="demo-simple-select-autowidth"
								value={local}
								label="Localização"
								fullWidth
								onChange={handleChange}
							>
								<MenuItem value={10}>Belo Horizonte</MenuItem>
								<MenuItem value={20}>São Paulo</MenuItem>
								<MenuItem value={30}>Rio de Janeiro</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12}>
						<Stack spacing={2} direction="row">
							<Button fullWidth size={'large'} variant="contained">
								Salvar
							</Button>
						</Stack>
					</Grid>

					<Grid item xs={12}>
						<Stack spacing={2} direction="row">
							<Button fullWidth size={'large'} variant="outlined">
								Sair da conta
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</div>
	)
}

export default MyAccount
