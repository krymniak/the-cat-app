export interface CatObj {
	id: string,
	url: string,
	breeds: Breeds
}

export interface Breeds {
	id: string,
	name: string
}

export interface User {
	email: string
	password: string
	returnSecureToken?: boolean
}

export interface FbAuthResponse {
	idToken: string
	expiresIn: string
}