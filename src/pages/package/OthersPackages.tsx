import { Box, Grid, Typography } from '@mui/material'
import CardPack from 'components/CardPack'
import { useEffect, useState } from 'react'
import { getPackages } from 'services/package'
import { Package } from 'services/package/types'
import { getBackgroundImageByDestination } from 'utils/images'
import { ROUTES } from 'utils/routes'

const OthersPackages = () => {
	const [othersPackages, setOthersPackages] = useState<Package[]>()
	useEffect(() => {
		const fetchOthersPackages = async () => {
			const othersPackages = await getPackages()
			console.log(othersPackages)
			setOthersPackages(othersPackages)
		}
		fetchOthersPackages()
	}, [])

	return (
		<Box
			sx={{
				maxWidth: 768,
				margin: '0 auto',
				paddingX: 2
			}}
		>
			<Typography variant="h2">Outros Pacotes</Typography>

			<Box
				sx={{
					pt: 3
				}}
			>
				<Grid container>
					{othersPackages?.map((item, key) => (
						<Grid
							item
							key={`${item}-${key}`}
							sx={{ marginBottom: 3 }}
							xs={12}
							md={4}
						>
							<CardPack
								imageUrl={getBackgroundImageByDestination(item.destination)}
								link={ROUTES.GO_TO_PACKAGE(item._id)}
								tags={[`${item.participants} pessoas`]}
								title={item.title}
								price={1200}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	)
}
export default OthersPackages
