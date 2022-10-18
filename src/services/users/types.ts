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
