export const ROUTES = {
	HOME: '/',
	MY_ACCOUNT: '/myAccount',
	NEW_GROUP: '/newGroup',
	NEW_PACKAGE: '/newPackage',
	CONTACT_SALLES: '/contactSalles',
	CONTACT_GROUP: '/contactGroup',
	SIGNUP: '/signup',
	LOGIN: '/login',
	DESTINY: '/destiny',
	GO_TO_PACKAGE: (id: string) => `/package/${id}`,
	ALL_DESTINIES: '/destines',
	GO_TO_GROUP: (id: string) => `/group/${id}`,
	ALL_GROUPS: '/groups',
	SAVES: '/saves'
}
