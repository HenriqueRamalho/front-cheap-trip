import {
	Checkbox,
	Typography,
	Button,
	Stack,
	Grid,
	TextField,
	Box
} from '@mui/material'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { FormControlLabel, FormGroup } from '@mui/material'
import { signupUser } from 'services/users'

const validationSchema = yup.object({
	name: yup.string('Digite seu nome').required('Nome é obrigatório'),
	email: yup
		.string('Digite seu email')
		.email('Informe um email válido')
		.required('Email é obrigatório'),
	password: yup
		.string('Digite uma senha')
		.min(8, 'A senha deve ter no mínimo 8 caracteres')
		.required('Senha é obrigatório'),
	passwordRepeated: yup
		.string('Repita a senha')
		.required('Por favor, repita a senha')
		.oneOf([yup.ref('password')], 'As senhas não são iguais'),
	termsAndConditions: yup.bool().required('Must Accept Terms and Conditions')
})

function SignupForm() {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			passwordRepeated: '',
			termsAndConditions: true
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			console.log(JSON.stringify(values, null, 2))
			const response = signupUser({
				name: values.name,
				email: values.email,
				password: values.password
			})
			console.log(response)
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
							Cadastro
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
							id="name"
							label="Nome completo"
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

					<Grid item xs={12}>
						<TextField
							id="passwordRepeated"
							label="Repita a senha"
							variant="outlined"
							type="password"
							fullWidth
							value={formik.values.passwordRepeated}
							onChange={formik.handleChange}
							error={
								formik.touched.passwordRepeated &&
								Boolean(formik.errors.passwordRepeated)
							}
							helperText={
								formik.touched.passwordRepeated &&
								formik.errors.passwordRepeated
							}
						/>
					</Grid>

					<Grid item xs={12}>
						<FormGroup>
							<FormControlLabel
								control={
									<Checkbox
										id="termsAndConditions"
										value={formik.values.termsAndConditions}
										onChange={formik.handleChange}
									/>
								}
								label="Eu aceito os termos econdições."
							/>
						</FormGroup>
					</Grid>

					<Grid item xs={12}>
						<Stack spacing={2} direction="row">
							<Button fullWidth size="large" variant="contained" type="submit">
								Cadastrar
							</Button>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}

export default SignupForm
