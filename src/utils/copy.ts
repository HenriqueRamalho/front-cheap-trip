export const getCovidCopyByDestiny = (destiny: string) => {
	const defaultCopy =
		'Brasil, oficialmente República Federativa do Brasil, é o maior país da América do Sul e da região da América Latina, sendo o quinto maior do mundo em área territoria'
	const images = new Map()
	images.set(
		'gramado',
		'Gramado é um município do estado do Rio Grande do Sul, no Brasil. Localiza-se na Serra Gaúcha, mais precisamente na Região das Hortênsias, estando a uma altitude de 830 metros.'
	)
	images.set(
		'rio_de_janeiro',
		'Rio de Janeiro (informalmente referido como Rio) é um município brasileiro, capital do estado homônimo, situado no Sudeste do país. Maior destino turístico internacional no Brasil, da América Latina e de todo o Hemisfério Sul (em 2008),[8] a capital fluminense é a cidade brasileira mais conhecida no exterior,[9] funcionando como um "espelho", ou "retrato" nacional, seja positiva ou negativamente. É a segunda maior metrópole do Brasil (depois de São Paulo), a sexta maior da América e a trigésima quinta do mundo.'
	)
	images.set(
		'salvador',
		'Salvador é um município brasileiro e capital do estado da Bahia. Situada na Zona da Mata da Região Nordeste do Brasil, Salvador é notável em todo o país.'
	)
	return images.has(destiny) ? images.get(destiny) : defaultCopy
}
