export interface Group {
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

export type CreateGroupResponse = Group

export type CreateGroup = Omit<Group, '_id' | 'imageAddress' | 'idUser'>

export interface ResponseGetGroups extends Group {
	nights: number
	destination: string
}
