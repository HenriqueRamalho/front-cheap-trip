import { useSession } from 'next-auth/react'
import type { NextPage } from 'next'
import { Box } from '@mui/system'
import { Stack, Button } from '@mui/material'
import { ROUTES } from 'utils/routes'

const Saves: NextPage = () => {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			window.location.href = ROUTES.LOGIN
		}
	})

	if (session) {
		return (
			<>
				<Box
					sx={{
						maxWidth: 768,
						margin: '0 auto',
						paddingX: 2,
						pt: 10,
						pb: 30
					}}
				>
					<Stack spacing={2} direction="row">
						<Button variant="text" href={ROUTES.NEW_GROUP}>
							Novo grupo
						</Button>
						<Button variant="text" href={ROUTES.NEW_PACKAGE}>
							Novo pacote
						</Button>
						<Button variant="text" href={ROUTES.ALL_DESTINIES}>
							Todos os destinos
						</Button>
						<Button variant="text" href={ROUTES.ALL_GROUPS}>
							Todos os grupos
						</Button>
					</Stack>
				</Box>
			</>
		)
	}

	return <div></div>
}

export default Saves
