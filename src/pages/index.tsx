import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import HeadProject from "../components/Head";
import Header from '../components/header-component';
import LoginForm from '../components/component-login-form';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
			<HeadProject />
      <Header />
      <LoginForm />
    </div>
  )
}

export default Home
