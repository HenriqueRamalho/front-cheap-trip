import * as React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import { ROUTES } from 'utils/routes'

const DontYouFindYourDestiny = () => {
	return (
		<Box
			sx={{
				padding: 0,
				maxWidth: 768,
				margin: '0 auto',
				py: 4,
				px: 3,
				backgroundColor: '#F2F2F2',
				borderRadius: 5
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Typography variant="h2" align="center" sx={{ marginBottom: 2 }}>
						Não encontrou o destino que procurava?
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						sx={{ marginBottom: 2 }}
					>
						Crie ou ingresse em um grupo para encontrar viajantes parceiros
					</Typography>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							paddingBottom: 3,
							paddingTop: 3
						}}
					>
						<Button size={'large'} variant="contained" href={ROUTES.ALL_GROUPS}>
							Ir para os grupos
						</Button>
					</Box>
				</Grid>

				<Grid item xs={12} md={6}>
					<Grid container justifyContent="center">
						<Grid item>
							<Image
								src={'/images/mountains-in-africa.jpeg'}
								alt="Google"
								width={480}
								height={300}
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}

export default DontYouFindYourDestiny
