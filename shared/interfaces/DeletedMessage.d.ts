import { IUser } from "./User";
import { IMessageResponse } from "./General";

export interface IDeletedMessage {
	id: string;
	text: string;
	isVerified: boolean;
	isInsult: boolean;
	createdAt: Date;
	updatedAt: Date;
	user?: IUser;
	userId: string;
}

export interface IDeletedMessageResponse extends IMessageResponse {
	deletedMessage: IDeletedMessage;
}

export interface IDeletedMessagesResponse extends IMessageResponse {
	deletedMessages: IDeletedMessage[];
}
