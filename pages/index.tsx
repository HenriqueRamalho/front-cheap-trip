import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header-component';
import LoginForm from '../components/login-form-component';



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <LoginForm />
    </div>
  )   
}

export default Home
