import * as React from 'react'
import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

const ContactSalles: NextPage = () => {
	const [isMessengeSent, setIsMessengeSent] = React.useState(false)

	return (
		<div
			style={{
				maxWidth: 500,
				margin: '0 auto'
			}}
		>
			{isMessengeSent ? (
				<div>
					<Grid container>
						<Grid
							item
							xs={12}
							pb={4}
							direction={'column'}
							sx={{
								alignItems: 'center',
								display: 'flex'
							}}
						>
							<Image
								src={'/images/messengeSent.svg'}
								alt="Messenge Sent"
								width={114}
								height={114}
							/>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={12} pb={4}>
							<Typography variant="h2" align="center">
								Mensagem enviada com sucesso!
							</Typography>
						</Grid>
					</Grid>
				</div>
			) : (
				<>
					<Box>
						<Grid container>
							<Grid item xs={12} pb={4}>
								<Typography variant="h2" align="center">
									Solicitar contato do vendedor
								</Typography>
							</Grid>
						</Grid>
					</Box>

					<Box component="form" noValidate autoComplete="off">
						<Grid container direction="column" spacing={2}>
							<Grid item xs={12}>
								<TextField
									id="outlined-basic"
									label="Nome completo"
									variant="outlined"
									fullWidth
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									id="outlined-basic"
									label="E-mail"
									variant="outlined"
									fullWidth
									type="email"
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									id="outlined-basic"
									label="Celular"
									variant="outlined"
									fullWidth
									type="tel"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="outlined-basic"
									label="Mensagem"
									variant="outlined"
									fullWidth
									multiline
									rows={3}
								/>
							</Grid>

							<Grid item xs={12}>
								<Stack spacing={2} direction="row">
									<Button
										fullWidth
										size={'large'}
										variant="contained"
										onClick={() => {
											setIsMessengeSent(true)
										}}
									>
										Enviar
									</Button>
								</Stack>
							</Grid>
						</Grid>
					</Box>
				</>
			)}
		</div>
	)
}

export default ContactSalles
