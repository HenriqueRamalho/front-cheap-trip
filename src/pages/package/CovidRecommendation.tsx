import * as React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { getCovidCopyByDestiny } from 'utils/copy'

interface CovidRecommendationProps {
	destiny: string
}

const CovidRecommendation = ({ destiny }: CovidRecommendationProps) => {
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
					<Typography>{getCovidCopyByDestiny(destiny)}</Typography>
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

export default CovidRecommendation
