import * as React from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import BottomNavbar from 'components/BottomNavbar'
import { Box, Grid, InputAdornment, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import DiscoveryDestinations from 'components/DiscoveryDestinations'
import DontYouFindYourDestiny from 'components/DontYouFindYourDestiny'
import { getPackages } from 'services/package'
import CardPack from 'components/CardPack'
import { ROUTES } from 'utils/routes'
import { getImageByDestination } from 'utils/images'

interface Package {
	_id: string
	title: string
	participants: number
	destination: string
	description: string
	imageAddress: string
	departureDate: string
	returnDate: string
	price: number
	idUser: string
	nights: number
}

interface PackageProps {
	packages: Package[]
}

const Index: NextPage<PackageProps> = ({ packages }) => {
	const [tripPackages, setTripPackages] = React.useState<Package[]>(packages)
	const [search, setSearch] = React.useState<string>('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	React.useEffect(() => {
		if (search.length >= 3) {
			setTripPackages(
				packages.filter((item) =>
					item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
				)
			)
			return
		}
		setTripPackages(packages)
	}, [search, packages])
	return (
		<div>
			<Box
				sx={{
					maxWidth: 768,
					margin: '0 auto',
					paddingTop: 4,
					paddingX: 2,
					paddingBottom: 4
				}}
			>
				<Typography variant="h2">Procure por pacotes</Typography>
				<TextField
					id="input-with-icon-textfield"
					variant="outlined"
					value={search}
					onChange={handleChange}
					fullWidth
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						)
					}}
					sx={{
						marginTop: 2
					}}
				/>
			</Box>
			<Box
				sx={{
					maxWidth: 768,
					margin: '0 auto',
					paddingX: 2
				}}
			>
				<Grid container>
					{tripPackages.length > 0 ? (
						tripPackages.map((item, key) => (
							<Grid
								item
								key={`${item}-${key}`}
								sx={{ marginBottom: 3 }}
								xs={12}
								md={4}
							>
								<CardPack
									imageUrl={getImageByDestination(item.destination)}
									link={ROUTES.GO_TO_PACKAGE(item._id)}
									tags={[
										`${item.nights} noites`,
										`${item.participants} pessoas`
									]}
									title={item.title}
									price={1200}
								/>
							</Grid>
						))
					) : (
						<Typography variant="body1">Nenhum resultado encontrado</Typography>
					)}
				</Grid>
			</Box>

			<Box>
				<DiscoveryDestinations />
			</Box>
			<DontYouFindYourDestiny />
			<BottomNavbar />
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const packages = await getPackages()
	return { props: { packages } }
}

export default Index
