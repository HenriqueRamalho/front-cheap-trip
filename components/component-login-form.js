import Link from 'next/link';
import styles from '../styles/components/Login.module.css';
import forms from '../styles/components/Form.module.css';
import Image from 'next/image';


function LoginForm() {
	return(
		<>
			<h2 className={styles.login_title}> Entrar </h2>
			<form>
					<input type={'text'} className={forms.input_form} placeholder={'Usuário'} />
					<input type={'password'} className={forms.input_form} placeholder={'Senha'} />
					<button className={forms.button}> Entrar </button>
			</form>

			<div className={styles.login_box}>
				<Link href="/#">
					Esqueci minha senha
				</Link>
			</div>

			<div className={styles.login_box}>
				<p>ou entrar com</p>
				<button className={forms['button'] + " " + forms['button_social']}>
					<Image
						src={"/images/google.svg"}
						alt='Google'
						width={25}
						height={24}
						className={forms.google_img}
						/> <span className={forms.btn_label}>Google</span>
				</button>
			</div>

			<div className={styles.login_box}>
				Ainda não é cadastrado? <br />
				<Link href="/cadastro">
					Cadastre-se agora
				</Link>
			</div>
		</>
	);
}

export default LoginForm;
