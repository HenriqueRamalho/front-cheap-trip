import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/component-header'
import LoginForm from '../components/component-login-form'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<LoginForm />
		</div>
	)
}

export default Home
