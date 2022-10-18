import { useState } from 'react'
import {
	Typography,
	Button,
	Stack,
	Grid,
	TextField,
	Box,
	Alert
} from '@mui/material'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { loginUser } from 'services/users'
import { ROUTES } from 'utils/routes'

const validationSchema = yup.object({
	email: yup
		.string('Digite seu email')
		.email('Informe um email válido')
		.required('Email é obrigatório'),
	password: yup.string('Digite uma senha').required('Senha é obrigatório')
})

function FormLogin() {
	const [isShowLoginErorMessage, setIsShowLoginErorMessage] = useState(false)
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			try {
				await loginUser({
					email: values.email,
					password: values.password
				})
				setIsShowLoginErorMessage(false)
			} catch (e) {
				console.error(e)
				setIsShowLoginErorMessage(true)
			}
		}
	})

	return (
		<Box
			sx={{
				maxWidth: 768,
				margin: '0 auto',
				paddingX: 2
			}}
		>
			<Box>
				<Grid container>
					<Grid item xs={12} pb={4}>
						<Typography variant="h2" align="center">
							Login
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
							id="email"
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
							id="password"
							label="Senha"
							variant="outlined"
							type="password"
							fullWidth
							value={formik.values.password}
							onChange={formik.handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
					</Grid>

					{isShowLoginErorMessage && (
						<Grid item xs={12}>
							<Alert severity="error">Erro ao realizar login</Alert>
						</Grid>
					)}

					<Grid item xs={12}>
						<Stack spacing={2} direction="row">
							<Button fullWidth size="large" variant="contained" type="submit">
								Login
							</Button>
						</Stack>
					</Grid>
					<Grid item xs={12} textAlign="center">
						<Typography>Ainda não é cadastrado?</Typography>
						<Typography>
							<a href={ROUTES.SIGNUP}>Cadastre-se agora</a>
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default FormLogin
