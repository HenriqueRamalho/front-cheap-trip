import React, { useState } from 'react'
import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Checkbox, MenuItem } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { saveGroup } from 'services/groups'

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
}

const destinations = [
	{
		value: 'rio_de_janeiro',
		label: 'Rio de Janeiro'
	},
	{
		value: 'gramado',
		label: 'Gramado'
	},
	{
		value: 'salvador',
		label: 'Salvador'
	}
]

const NewGroup: NextPage = () => {
	const [openModalSuccess, setOpenModalSuccess] = useState(false)
	const [groupNameCreated, setGroupNameCreated] = useState('')

	const handleClose = () => setOpenModalSuccess(false)

	const validationSchema = yup.object({
		title: yup.string().required('Nome do grupo é obrigatório'),
		participants: yup
			.number()
			.required('Quantidade de participante é obrigatória'),
		destination: yup.string().required('Destino é obrigatório'),
		departureDate: yup.string().required('Data de partida é obrigatória'),
		returnDate: yup.string().required('Data de retorno é obrigatória'),
		price: yup.number().required('Preço por pessoa é obrigatório'),
		description: yup.string()
	})

	const today = new Date()
	const todayMoreSeven = new Date()
	todayMoreSeven.setDate(today.getDate() + 7)
	const formik = useFormik({
		initialValues: {
			title: `Grupo para ${destinations[1].label}`,
			participants: 9,
			destination: 'gramado',
			departureDate: today.toLocaleDateString('pt-BR'),
			returnDate: todayMoreSeven.toLocaleDateString('pt-BR'),
			price: 199,
			description: 'Descrição do pacote'
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			try {
				const response = await saveGroup({
					title: values.title,
					participants: values.participants,
					destination: values.destination,
					price: values.price,
					description: values.description,
					departureDate: values.departureDate,
					returnDate: values.returnDate
				})
				setGroupNameCreated(response?.title ?? '')
				setOpenModalSuccess(true)
			} catch (e) {
				setOpenModalSuccess(false)
			}
		}
	})

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

				<Box component="form" noValidate onSubmit={formik.handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								id="title"
								label="Nome do Grupo"
								name="title"
								variant="outlined"
								fullWidth
								value={formik.values.title}
								onChange={formik.handleChange}
								error={formik.touched.title && Boolean(formik.errors.title)}
								helperText={formik.touched.title && formik.errors.title}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="participants"
								label="Nº de participantes"
								name="participants"
								variant="outlined"
								type="number"
								fullWidth
								value={formik.values.participants}
								onChange={formik.handleChange}
								error={
									formik.touched.participants &&
									Boolean(formik.errors.participants)
								}
								helperText={
									formik.touched.participants && formik.errors.participants
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="destination"
								label="Destino"
								name="destination"
								variant="outlined"
								fullWidth
								select
								value={formik.values.destination}
								onChange={formik.handleChange}
								error={
									formik.touched.destination &&
									Boolean(formik.errors.destination)
								}
								helperText={
									formik.touched.destination && formik.errors.destination
								}
							>
								{destinations.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="price"
								label="Valor por pessoa"
								name="price"
								variant="outlined"
								fullWidth
								value={formik.values.price}
								onChange={formik.handleChange}
								error={formik.touched.price && Boolean(formik.errors.price)}
								helperText={formik.touched.price && formik.errors.price}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="description"
								label="Descrição"
								name="description"
								variant="outlined"
								fullWidth
								multiline
								rows={3}
								value={formik.values.description}
								onChange={formik.handleChange}
								error={
									formik.touched.description &&
									Boolean(formik.errors.description)
								}
								helperText={
									formik.touched.description && formik.errors.description
								}
							/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<TextField
								id="departureDate"
								label="Data de partida"
								name="departureDate"
								variant="outlined"
								placeholder="dd/mm/aaaa"
								fullWidth
								value={formik.values.departureDate}
								onChange={formik.handleChange}
								error={
									formik.touched.departureDate &&
									Boolean(formik.errors.departureDate)
								}
								helperText={
									formik.touched.departureDate && formik.errors.departureDate
								}
							/>
						</Grid>
						<Grid item xs={12} lg={6}>
							<TextField
								id="returnDate"
								label="Data de partida"
								name="returnDate"
								variant="outlined"
								placeholder="dd/mm/aaaa"
								fullWidth
								value={formik.values.returnDate}
								onChange={formik.handleChange}
								error={
									formik.touched.returnDate && Boolean(formik.errors.returnDate)
								}
								helperText={
									formik.touched.returnDate && formik.errors.returnDate
								}
							/>
						</Grid>
					</Grid>

					<Box>
						<Grid container>
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
						<Grid container>
							<Grid item xs={6}>
								<Button
									fullWidth
									size={'large'}
									variant="contained"
									type="submit"
								>
									Criar grupo
								</Button>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</div>
			<Modal
				open={openModalSuccess}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Grupo
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Novo grupo "{groupNameCreated}" criado com sucesso.
					</Typography>
				</Box>
			</Modal>
		</>
	)
}

export default NewGroup
