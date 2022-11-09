import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { getAboutMe, saveAboutMe } from 'services/users'
import { ROUTES } from 'utils/routes'

const MyAccount: NextPage = () => {
	useSession({
		required: true,
		onUnauthenticated() {
			window.location.href = ROUTES.LOGIN
		}
	})
	const validationSchema = yup.object({
		name: yup.string().required('Nome é obrigatório'),
		email: yup
			.string()
			.email('Informe um email válido')
			.required('Email é obrigatório')
	})

	const formik = useFormik({
		initialValues: {
			name: '',
			email: ''
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			saveAboutMe({
				name: values.name,
				email: values.email
			})
		},
		enableReinitialize: true
	})

	useEffect(() => {
		const fetchAboutMe = async () => {
			const data = await getAboutMe()
			formik.setValues({
				name: data?.name || '',
				email: data?.email || ''
			})
			console.log(data)
		}
		fetchAboutMe()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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

			<Box
				component="form"
				noValidate
				autoComplete="off"
				onSubmit={formik.handleSubmit}
			>
				<Grid container direction="column" spacing={2}>
					<Grid item xs={12}>
						<TextField
							id="outlined-basic"
							label="Nome completo"
							name="name"
							variant="outlined"
							fullWidth
							value={formik.values.name}
							onChange={formik.handleChange}
							error={formik.touched.name && Boolean(formik.errors.name)}
							helperText={formik.touched.name && formik.errors.name}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							id="outlined-basic"
							name="email"
							label="E-mail"
							variant="outlined"
							fullWidth
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
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
								label="Localização"
								fullWidth
							>
								<MenuItem value={10}>Belo Horizonte</MenuItem>
								<MenuItem value={20}>São Paulo</MenuItem>
								<MenuItem value={30}>Rio de Janeiro</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12}>
						<Stack spacing={2} direction="row">
							<Button
								fullWidth
								size={'large'}
								variant="contained"
								type="submit"
							>
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
