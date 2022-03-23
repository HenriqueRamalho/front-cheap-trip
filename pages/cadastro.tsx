import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import HeadProject from "../components/Head";
import Header from '../components/header-component';
import CadastroForm from '../components/component-cadastro-form';



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
			<HeadProject />
      <Header />
      <CadastroForm />
    </div>
  )
}

export default Home
