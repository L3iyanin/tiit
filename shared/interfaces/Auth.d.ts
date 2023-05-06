export interface IUserLogged {
	email: string;
	firstName: string;
	lastName: string;
	picture: string;
}

export interface IGoogleLogin {
	message: string;
	accessToken: string;
	user: IUserLogged;
}
