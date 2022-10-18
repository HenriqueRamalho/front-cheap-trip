import axios from 'axios'

const PREFIX_CHEAP_TRIP_STORAGE = 'cheap-trip'
const KEY_SESSION_STORAGE_ID = `${PREFIX_CHEAP_TRIP_STORAGE}__id`
const KEY_SESSION_STORAGE_EMAIL = `${PREFIX_CHEAP_TRIP_STORAGE}__email`
const KEY_SESSION_STORAGE_NAME = `${PREFIX_CHEAP_TRIP_STORAGE}__name`
const KEY_SESSION_STORAGE_TOKEN = `${PREFIX_CHEAP_TRIP_STORAGE}__token`

import {
	LoginUser,
	SignupUser,
	SignupUserResponse,
	LoginUserResponse,
	SaveUserLogin
} from './types'

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

export const loginUser = async ({
	email,
	password
}: LoginUser): Promise<LoginUserResponse | undefined> => {
	const { data } = await axiosInstance.post('/login', {
		email,
		password
	})

	saveUserLoginOnSessionStorage({
		_id: data._id,
		email: data.email,
		name: data.name,
		token: data.token
	})
	return data
}

const saveUserLoginOnSessionStorage = ({
	_id,
	email,
	name,
	token
}: SaveUserLogin) => {
	sessionStorage.setItem(KEY_SESSION_STORAGE_ID, _id)
	sessionStorage.setItem(KEY_SESSION_STORAGE_EMAIL, email)
	sessionStorage.setItem(KEY_SESSION_STORAGE_NAME, name)
	sessionStorage.setItem(KEY_SESSION_STORAGE_TOKEN, token)
}

export const getUserLoginOnSessionStorage = (): SaveUserLogin => {
	return {
		_id: sessionStorage.getItem(KEY_SESSION_STORAGE_ID) || '',
		email: sessionStorage.getItem(KEY_SESSION_STORAGE_EMAIL) || '',
		name: sessionStorage.getItem(KEY_SESSION_STORAGE_NAME) || '',
		token: sessionStorage.getItem(KEY_SESSION_STORAGE_TOKEN) || ''
	}
}
