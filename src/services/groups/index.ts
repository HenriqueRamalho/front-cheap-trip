import Client from 'services/client'

import { CreateGroup, CreateGroupResponse } from './types'

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
