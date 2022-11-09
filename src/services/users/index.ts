import Client from 'services/client'

import {
	AboutMeResponse,
	SaveAboutMe,
	SignupUser,
	SignupUserResponse
} from './types'

export const signupUser = async ({
	name,
	email,
	password
}: SignupUser): Promise<SignupUserResponse | undefined> => {
	try {
		const { data } = await Client.post('/users', {
			name,
			email,
			password
		})
		return data
	} catch (e) {
		console.error(e)
	}
}

export const getAboutMe = async (): Promise<AboutMeResponse | undefined> => {
	try {
		const { data } = await Client.get('/me')
		return data
	} catch (e) {
		console.error(e)
	}
}

export const saveAboutMe = async ({
	name,
	email
}: SaveAboutMe): Promise<AboutMeResponse | undefined> => {
	try {
		const { data } = await Client.post('/me', {
			name,
			email
		})
		return data
	} catch (e) {
		console.error(e)
	}
}
