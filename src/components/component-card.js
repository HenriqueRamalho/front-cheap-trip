import { Card } from '@material-ui/core'
import Image from 'next/image'
import cardStyle from '../styles/components/Card.module.css'
import title from '../styles/components/Title.module.css'

function CardTrip() {
	return (
		<>
			<Card variant="outline">
				<div className={cardStyle.cardImage}>
					<Image
						src="/images/rio-janeiro.png"
						objectFit="cover"
						loading="lazy"
						layout="responsive"
						width={223}
						height={135}
					/>
				</div>
				<div className={cardStyle.description}>
					<div className={cardStyle.tags}>
						<div>7 Noites</div>
						<div>6 Pessoas</div>
					</div>
					<h4 className={cardStyle.cardtitle}>Pacotes para o Rio de Janeiro</h4>
					<div className={cardStyle.custo}>
						<Image src="/images/custo-1.png" width={25} height={24} />
						<Image src="/images/custo-1.png" width={25} height={24} />
						<Image src="/images/custo-1.png" width={25} height={24} />
						<Image src="/images/custo-2.png" width={25} height={24} />
						<Image src="/images/custo-2.png" width={25} height={24} />
					</div>
					<div>
						<h5 className={title.title_tags}>Inclusos</h5>
						<div className={cardStyle.item_incluso}>
							<div className={cardStyle.icon_incluso}>
								<Image src="/images/cama.svg" width={24} height={25} />
							</div>
							<div className={cardStyle.icon_incluso}>
								<Image src="/images/aviao.svg" width={24} height={25} />
							</div>
						</div>
					</div>
					<div>
						<h5 className={title.title_tags}>Preço por pessoa</h5>
						<div className={cardStyle.card_price}>R$ 800</div>
					</div>
				</div>
			</Card>
		</>
	)
}

export default CardTrip
