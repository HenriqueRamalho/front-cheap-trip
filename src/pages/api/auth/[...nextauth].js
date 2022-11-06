import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Email',
					type: 'text',
					name: 'email'
				},
				password: {
					label: 'Password',
					type: 'password',
					name: 'password'
				}
			},
			async authorize(credentials) {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_API_CHEAP_TRIP}/login`,
					{
						method: 'POST',
						body: JSON.stringify(credentials),
						headers: {
							'Content-Type': 'application/json'
						}
					}
				)
				const user = await res.json()
				console.log(user)
				if (res.ok && user) {
					return user
				}
				return null
			}
		})
	]
}

export default NextAuth(authOptions)
