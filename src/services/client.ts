/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios'
import { getSession, signOut } from 'next-auth/react'

const ApiClient = () => {
	const defaultOptions = {
		baseURL: process.env.NEXT_PUBLIC_API_CHEAP_TRIP,
		timeout: 1000
	}

	const instance = axios.create(defaultOptions)

	instance.interceptors.request.use(async (request) => {
		const data = await getSession()
		console.log('data on custom client: ', data)
		const token = data?.user?.token

		if (data?.user) {
			// @ts-ignore
			request.headers?.Authorization = token ? `Bearer ${token}` : ''
		}
		return request
	})

	instance.interceptors.response.use(
		(response) => {
			return response
		},
		(error) => {
			console.log(`error`, error)
			if (error.response.status === 401) {
				signOut()
				window.location.href = '/login'
			}
		}
	)

	return instance
}

export default ApiClient()
