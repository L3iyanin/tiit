export interface IUserLogged {
	email: string;
	firstName: string;
	lastName: string;
	picture: string;
	isVerified: boolean;
	isLinked: boolean;

}

export interface IGoogleLogin {
	message: string;
	accessToken: string;
	user: IUserLogged;
}
