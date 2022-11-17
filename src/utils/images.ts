export const getBackgroundImageByDestination = (destination: string) => {
	const defaultImage = 'https://via.placeholder.com/500'
	const images = new Map()
	images.set(
		'gramado',
		'https://pureviagem.com.br/wp-content/uploads/2020/01/Gramadp.jpg'
	)
	images.set(
		'rio_de_janeiro',
		'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg'
	)
	images.set(
		'salvador',
		'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg'
	)
	return images.has(destination) ? images.get(destination) : defaultImage
}

export const getImageByDestination = (destination: string) => {
	const defaultImage = 'https://via.placeholder.com/500'
	const images = new Map()
	images.set(
		'gramado',
		'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg'
	)
	images.set(
		'rio_de_janeiro',
		'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg'
	)
	images.set(
		'salvador',
		'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/dd/dd/0b.jpg'
	)
	return images.has(destination) ? images.get(destination) : defaultImage
}
