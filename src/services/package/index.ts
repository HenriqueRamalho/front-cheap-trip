import Client from 'services/client'

import {
	CreatePackage,
	CreatePackageResponse,
	ResponseDeletePackage,
	ResponseGetPackage
} from './types'

export const savePackage = async ({
	title,
	participants,
	destination,
	price,
	description,
	departureDate,
	returnDate
}: CreatePackage): Promise<CreatePackageResponse | undefined> => {
	try {
		const { data } = await Client.post('/packages', {
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

export const getPackages = async (): Promise<
	ResponseGetPackage[] | undefined
> => {
	try {
		const { data } = await Client.get('/packages')
		return data
	} catch (e) {
		console.error(e)
	}
}

export const getPackageById = async (
	id: string
): Promise<ResponseGetPackage[] | undefined> => {
	try {
		const { data } = await Client.get(`/packages/${id}`)
		return data
	} catch (e) {
		console.error(e)
	}
}

export const deletePackage = async (
	id: string
): Promise<ResponseDeletePackage[] | undefined> => {
	try {
		const { data } = await Client.delete(`/packages/${id}`)
		return data
	} catch (e) {
		console.error(e)
	}
}
