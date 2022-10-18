import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/header-component'
import SignupForm from 'components/SignupForm'
import { Box } from '@mui/material'

const Signup: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Box
				sx={{
					py: 4,
					px: 2,
					maxWidth: 768,
					width: '100%',
					margin: '0 auto'
				}}
			>
				<SignupForm />
			</Box>
		</div>
	)
}

export default Signup
