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

const MyAccount: NextPage = () => {
	const [local, setAge] = React.useState('')

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<Box
			component="form"
			sx={{
				flexGrow: 1
			}}
			noValidate
			autoComplete="off"
		>
			<Grid container spacing={2}>
				<Typography variant="h4" component="h4">
					Minha conta
				</Typography>
				;
				<Grid item xs={12} md={6} lg={4}>
					<TextField
						id="outlined-basic"
						label="Nome completo"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<TextField
						id="outlined-basic"
						label="E-mail"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<TextField
						id="outlined-basic"
						label="Celular"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
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
				<Grid item xs={12} md={6} lg={4}>
					<Stack spacing={2} direction="row">
						<Button fullWidth size={'large'} variant="contained">
							Salvar
						</Button>
					</Stack>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Stack spacing={2} direction="row">
						<Button fullWidth size={'large'} variant="outlined">
							Sair da conta
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	)
}

export default MyAccount
