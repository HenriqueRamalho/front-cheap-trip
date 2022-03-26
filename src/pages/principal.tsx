import Header from 'components/component-header'
import CardTrip from 'components/component-card'
import type { NextPage } from 'next'
import stylesContainer from '../styles/Home.module.css'
import styles from '../styles/components/Login.module.css'

const principalPage: NextPage = () => {
	return (
		<>
			<div className={stylesContainer.container}>
				<Header />
				<div>
					<h1
						className={
							styles['login_title'] + ' ' + styles['login_title_medium']
						}
					>
						Pacotes de viagem em destaque
					</h1>
				</div>
				<CardTrip />
			</div>
		</>
	)
}

export default principalPage
