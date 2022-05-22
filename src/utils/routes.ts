export const ROUTES = {
	HOME: '/',
	MY_ACCOUNT: '/myAccount',
	NEW_GROUP: '/newGroup',
	CONTACT_SALLES: '/contactSalles',
	CONTACT_GROUP: '/contactGroup',
	SIGNUP: '/signup',
	LOGIN: '/login',
	DESTINY: '/destiny',
	GO_TO_DESTINY: (id: number) => `/destiny/${id}`,
	ALL_DESTINIES: '/destines',
	GO_TO_GROUP: (id: number) => `/group/${id}`,
	ALL_GROUPS: '/groups'
}
