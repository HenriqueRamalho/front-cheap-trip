import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/component-header'
import CadastroForm from '../components/component-cadastro-form'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<CadastroForm />
		</div>
	)
}

export default Home
