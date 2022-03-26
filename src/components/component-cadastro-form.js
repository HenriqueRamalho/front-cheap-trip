import Link from 'next/link'
import styles from '../styles/components/Login.module.css'
import forms from '../styles/components/Form.module.css'
import Image from 'next/image'

function CadastroForm() {
	return (
		<>
			<div className={forms.header_form}>
				<h2 className={styles.login_title}> Cadastro </h2>
				<Link href="/">Voltar</Link>
			</div>

			<form>
				<input
					type={'text'}
					className={forms.input_form}
					placeholder={'E-mail'}
				/>
				<input
					type={'text'}
					className={forms.input_form}
					placeholder={'Repita seu E-mail'}
				/>
				<input
					type={'password'}
					className={forms.input_form}
					placeholder={'Senha'}
				/>
				<input
					type={'password'}
					className={forms.input_form}
					placeholder={'Confirme sua Senha'}
				/>

				<label htmlFor="aceite" className={forms.checkbox_label}>
					<input type={'checkbox'} id="aceite" /> Eu aceito os termos e
					condições.
				</label>

				<button className={forms.button}> Cadastrar </button>
			</form>

			<div className={styles.login_box}>
				<p>ou cadastrar com</p>
				<button className={forms['button'] + ' ' + forms['button_social']}>
					<Image
						src={'/images/google.svg'}
						alt="Google"
						width={25}
						height={24}
						className={forms.google_img}
					/>{' '}
					<span className={forms.btn_label}>Google</span>
				</button>
			</div>
		</>
	)
}

export default CadastroForm
