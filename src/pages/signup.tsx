import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/header-component'
import CadastroForm from '../components/component-cadastro-form'

const Signup: NextPage = () => {
	return (
		<div className={styles.container}>
			<Header />
			<CadastroForm />
		</div>
	)
}

export default Signup
