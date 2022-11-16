import * as React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Slider from '@mui/material/Slider'

const marks = [
	{
		value: 1,
		label: '1'
	},
	{
		value: 2,
		label: '2'
	},
	{
		value: 3,
		label: '3'
	},
	{
		value: 4,
		label: '4'
	},
	{
		value: 5,
		label: '5'
	},
	{
		value: 6,
		label: '6'
	},
	{
		value: 7,
		label: '7'
	},
	{
		value: 8,
		label: '8'
	},
	{
		value: 9,
		label: '9'
	},
	{
		value: 10,
		label: '10'
	}
]

interface FormProps {
	destiny: string
	price: number
	departureDate: string
	returnDate: string
}

const Form = ({ destiny, price, departureDate, returnDate }: FormProps) => {
	const [value, setValue] = React.useState<number>(2)
	const [totalPrice, setTotalPrice] = React.useState(0)

	const handleChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number)
		setTotalPrice(value * price)
	}
	return (
		<Box
			sx={{
				py: 1,
				px: 2,
				maxWidth: 768,
				width: '100%',
				margin: '0 auto'
			}}
		>
			<Box
				sx={{
					bottom: 0,
					pt: 2,
					display: 'flex',
					alignItems: 'center',
					maxWidth: 768,
					margin: '0 auto'
				}}
			>
				<LocationOnIcon fontSize="small" color="primary" />
				<Typography variant="subtitle1" color="primary">
					Destino: {destiny}
				</Typography>
			</Box>
			<Box
				sx={{
					bottom: 0,
					py: 2,
					display: 'flex',
					flexDirection: 'column',
					maxWidth: 768,
					margin: '0 auto'
				}}
			>
				<Typography variant="subtitle1" color="primary">
					Preço por pessoa
				</Typography>
				<Typography variant="h4" color="primary">
					<strong>R$ {price}</strong>
				</Typography>
			</Box>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography variant="subtitle1" color="primary">
						Data de ida
					</Typography>
					<Typography variant="h5" color="primary">
						<strong>
							{new Date(departureDate).toLocaleDateString('pt-BR').toString()}
						</strong>
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant="subtitle1" color="primary">
						Data de ida
					</Typography>
					<Typography variant="h5" color="primary">
						<strong>
							{new Date(returnDate).toLocaleDateString('pt-BR').toString()}
						</strong>
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h5" color="primary">
						Nº de pessoas
					</Typography>

					<Slider
						aria-label="Nº de pessoas"
						value={value}
						defaultValue={2}
						min={1}
						max={10}
						onChange={handleChange}
						valueLabelDisplay="auto"
						marks={marks}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="subtitle1" color="primary" align="right">
						Valor total: <strong>R$ {totalPrice}</strong>
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

export default Form
