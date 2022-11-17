export interface Package {
	_id: string
	title: string
	participants: number
	destination: string
	description: string
	imageAddress: string
	departureDate: string
	returnDate: string
	price: number
	idUser: string
}

export type CreatePackageResponse = Package

export type CreatePackage = Omit<Package, '_id' | 'imageAddress' | 'idUser'>

export interface ResponseGetPackage extends Package {
	nights: number
	destination: string
}

export interface ResponseDeletePackage {
	message: string
}
