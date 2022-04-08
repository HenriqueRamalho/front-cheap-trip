import { Grid } from '@mui/material'
import Image from 'next/image'
import { Box } from '@material-ui/core'
import Iconsbar from './iconsbar'
import { ROUTES } from 'utils/routes'

export default function Topbar() {
	return (
		<>
			<Box>
				<Grid
					container
					sx={{
						direction: 'row',
						alignItems: 'stretch',
						justifyContent: {
							xs: 'center',
							lg: 'space-between'
						}
					}}
				>
					<Grid item xs={4} sm={2} lg={1.5} paddingTop={1}>
						<a href={ROUTES.HOME}>
							<Image
								src="/images/logo.svg"
								alt="CheapTrip"
								className="brand"
								width={500}
								height={120}
							/>
						</a>
					</Grid>

					<Grid
						item
						lg={4}
						sx={{
							display: { xs: 'none', lg: 'block' },
							backgroundColor: '#006BA8',
							borderRadius: '0px 0px 0px 80px'
						}}
					>
						<Iconsbar></Iconsbar>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}
