interface IUserLogged {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
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