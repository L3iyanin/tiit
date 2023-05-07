interface IUserLogged {
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
	isLinked: boolean;
	isVerified: boolean;
}

interface IUserState {
	user: IUserLogged | null;
	accessToken: string | null;
	isLoggedIn: boolean;
	isLoading: boolean;
}

interface IUserWithToken {
	user: IUserLogged;
	accessToken: string;
}