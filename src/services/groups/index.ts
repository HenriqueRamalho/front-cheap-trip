import Client from 'services/client'

import { CreateGroup, CreateGroupResponse, ResponseGetGroups } from './types'

export const saveGroup = async ({
	title,
	participants,
	destination,
	price,
	description,
	departureDate,
	returnDate
}: CreateGroup): Promise<CreateGroupResponse | undefined> => {
	try {
		const { data } = await Client.post('/grupos-viagem', {
			title,
			participants,
			destination,
			price,
			description,
			departureDate,
			returnDate
		})
		return data
	} catch (e) {
		console.error(e)
	}
}

export const getGroups = async (): Promise<ResponseGetGroups[] | undefined> => {
	try {
		const { data } = await Client.get('/grupos-viagem')
		return data
	} catch (e) {
		console.error(e)
	}
}

export const getGroupById = async (
	id: string
): Promise<ResponseGetGroups[] | undefined> => {
	try {
		const { data } = await Client.get(`/grupos-viagem/${id}`)
		return data
	} catch (e) {
		console.error(e)
	}
}
