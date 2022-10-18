import axios from 'axios'

import { SignupUser, SignupUserResponse } from './types'

const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_CHEAP_TRIP,
	timeout: 1000
})

export const signupUser = async ({
	name,
	email,
	password
}: SignupUser): Promise<SignupUserResponse | undefined> => {
	try {
		const { data } = await axiosInstance.post('/users', {
			name,
			email,
			password
		})
		return data
	} catch (e) {
		console.error(e)
	}
}
