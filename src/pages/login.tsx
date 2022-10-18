import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/header-component'
import FormLogin from 'components/FormLogin'

const Login: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<FormLogin />
		</div>
	)
}

export default Login
