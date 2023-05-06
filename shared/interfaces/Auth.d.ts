export interface IUserLogged {
	email: string;
	firstName: string;
	lastName: string;
	username: string;
	picture: string;
}

export interface IGoogleLogin {
	message: string;
	accessToken: string;
	user: IUserLogged;
	newUser: boolean;
}
