import { useSession, signOut } from 'next-auth/react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/header-component'
import FormLogin from 'components/FormLogin'
import { getAboutMe } from 'services/users'

const Login: NextPage = () => {
	const { data: session } = useSession()

	if (session) {
		return (
			<>
				<Header />
				<div>You are logged!</div>
				<div>{session.user?.email}</div>
				<div>
					<button onClick={() => signOut()}>Sign out</button>
					<button onClick={() => getAboutMe()}>getAboutMe</button>
				</div>
			</>
		)
	}

	return (
		<div className={styles.container}>
			<Header />
			<FormLogin />
		</div>
	)
}

export default Login
