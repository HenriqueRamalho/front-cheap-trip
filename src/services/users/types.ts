export interface SignupUser {
	name: string
	email: string
	password: string
}

export interface SignupUserResponse {
	_id: string
	token: string
	name: string
	email: string
}

export interface LoginUserResponse {
	_id: string
	token: string
	name: string
	email: string
}

export interface SaveUserLogin {
	_id: string
	token: string
	name: string
	email: string
}
export interface AboutMeResponse {
	_id: string
	name: string
	email: string
}

export interface SaveAboutMe {
	name: string
	email: string
}
