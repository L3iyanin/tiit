import { IUser } from "../../../../shared/interfaces/General";

interface IUserState {
	user: IUser | null;
	accessToken: string | null;
	isLoggedIn: boolean;
	isLoading: boolean;
}


interface IUserWithToken {
	user: IUser;
	accessToken: string;
}