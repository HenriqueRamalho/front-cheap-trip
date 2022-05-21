import * as React from 'react'
import type { NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, Button, Grid, Typography } from '@mui/material'
import CarouselWithCards from 'components/CarouselWithCards'
import TextField from '@mui/material/TextField'
import SimilarDestinations from 'components/SimilarDestinations'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import HotelIcon from '@mui/icons-material/Hotel'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive'
import Image from 'next/image'
import { ROUTES } from 'utils/routes'

const CovidRecommendation = () => {
	return (
		<Box
			sx={{
				py: 4,
				px: 2,
				maxWidth: 768,
				width: '100%',
				margin: '0 auto'
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Typography>
						Salvador é um município brasileiro e capital do estado da Bahia.
						Situada na Zona da Mata da Região Nordeste do Brasil, Salvador é
						notável em todo o país.
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<Image
						src={'/images/covid_selo_protegido.png'}
						alt="Covid Selo Protegido"
						width={235}
						height={209}
					/>
				</Grid>
			</Grid>
		</Box>
	)
}

const Description = () => {
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
			<Typography variant="h5" color="primary" sx={{ mb: 2 }}>
				<strong>Descrição</strong>
			</Typography>
			<Typography variant="subtitle1">
				Salvador é um município brasileiro e capital do estado da Bahia. Situada
				na Zona da Mata da Região Nordeste do Brasil, Salvador é notável em todo
				o país.
			</Typography>
			<Typography variant="h5" color="primary" sx={{ mt: 2, mb: 1 }}>
				<strong>Inclusos</strong>
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					mb: 1
				}}
			>
				<Box sx={{ marginRight: 1 }}>
					<HotelIcon color="secondary" />{' '}
				</Box>
				<Box>
					<Typography variant="subtitle1" color="primary">
						Hospedagem
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					mb: 1
				}}
			>
				<Box sx={{ marginRight: 1 }}>
					<AirplanemodeActiveIcon color="secondary" />{' '}
				</Box>
				<Box>
					<Typography variant="subtitle1" color="primary">
						Hospedagem
					</Typography>
				</Box>
			</Box>
			<Grid container spacing={2} sx={{ py: 4 }}>
				<Grid item xs={12} md={6}>
					<Button
						variant="contained"
						color="primary"
						href={ROUTES.MY_ACCOUNT}
						size="medium"
						disableElevation
						disableRipple
						disableFocusRipple
						fullWidth
					>
						Comprar esse pacote
					</Button>
				</Grid>
				<Grid item xs={12} md={6}>
					<Button
						variant="outlined"
						color="primary"
						href={ROUTES.MY_ACCOUNT}
						size="medium"
						disableElevation
						disableRipple
						disableFocusRipple
						fullWidth
					>
						Criar um grupo a partir desse destino
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

const Form = () => {
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
					px: 1,
					pt: 2,
					display: 'flex',
					alignItems: 'center',
					maxWidth: 768,
					margin: '0 auto'
				}}
			>
				<LocationOnIcon fontSize="small" color="primary" />
				<Typography variant="subtitle1" color="primary">
					Destino: Bahia
				</Typography>
			</Box>
			<Box
				sx={{
					bottom: 0,
					px: 2,
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
					<strong>R$ 1.400</strong>
				</Typography>
			</Box>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<TextField
						id="outlined-basic"
						label="Data de ida"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						id="outlined-basic"
						label="Data de volta"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="outlined-basic"
						label="Nº de pessoas"
						variant="outlined"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="subtitle1" color="primary" align="right">
						Valor total: <strong>R$ 0,00</strong>
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}

const Destiny: NextPage = () => {
	return (
		<div>
			<Box
				component="div"
				sx={{
					margin: '0 auto',
					width: '100%',
					height: 222,
					backgroundImage: 'url("/images/salvador_pelourinho.jpeg")',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'top center',
					backgroundSize: 'cover',
					display: 'flex',
					flexDirection: 'column-reverse'
				}}
			>
				<Box
					component="div"
					sx={{
						py: 1,
						px: 2,
						maxWidth: 768,
						width: '100%',
						margin: '0 auto'
					}}
				>
					<Typography variant="h4" color="white">
						<strong>Pacote para o Pelourinho</strong>
					</Typography>
				</Box>
			</Box>
			<Form />
			<Description />
			<CovidRecommendation />
			<Box
				sx={{
					maxWidth: 768,
					margin: '0 auto',
					paddingX: 2
				}}
			>
				<Typography variant="h2">Promoções semelhantes</Typography>
			</Box>

			<Box sx={{ py: 1, paddingTop: 3 }}>
				<CarouselWithCards />
			</Box>
			<Box sx={{ py: 1 }}>
				<CarouselWithCards />
			</Box>
			<Box>
				<SimilarDestinations />
			</Box>
			<BottomNavbar />
		</div>
	)
}

export default Destiny
