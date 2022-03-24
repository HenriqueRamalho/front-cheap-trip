import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import HeadProject from "../components/Head";
import Header from '../components/header-component';
import CadastroForm from '../components/component-cadastro-form';

import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Dashboard: NextPage = () => {
  return (
		<Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  )
}

export default Dashboard
