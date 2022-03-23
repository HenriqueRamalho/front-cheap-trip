import styles from '../styles/components/Header.module.css';
import Image from 'next/image'

function Header( ) {
	return (
		<>
			<header className={styles.header}>
					<Image
					src="/images/logo.svg"
					alt="CheapTrip"
					className="brand"
					width={144}
					height={115}
					/>
			</header>
		</>
	);
}

export default Header;
