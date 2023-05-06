import { IMessageResponse } from "./General";
import { IDeletedMessage } from "./DeletedMessage";

export interface IUser {
	id: string;
	firstName?: string;
	lastName?: string;
	email: string;
	picture: string;
	whatsappGroupId?: string;
	isVerified: boolean;
	isLinked: boolean;
	createdAt: Date;
	updatedAt: Date;
	deletedMessages: IDeletedMessage[];
}

export interface IUserResponse extends IMessageResponse {
	user: IUser;
}

export interface IUserInRequest extends IUser {}

export interface IUsersResponse extends IMessageResponse {
	users: IUser[];
}
