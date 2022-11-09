import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'

const CovidRecommendation = () => {
	return (
		<Box
			sx={{
				py: 4,
				px: 2,
				maxWidth: 1200,
				width: '100%',
				margin: '0 auto'
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Typography variant="h5" color="primary" sx={{ mb: 2 }}>
						<strong>Recomendações COVID</strong>
					</Typography>
					<Typography>
						Salvador é um município brasileiro e capital do estado da Bahia.
						Situada na Zona da Mata da Região Nordeste do Brasil, Salvador é
						notável em todo o país.
					</Typography>
				</Grid>
				<Grid item xs={2}>
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

export default CovidRecommendation
