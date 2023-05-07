import axios from "axios";
import { IDeletedMessagesResponse } from "../../../shared/interfaces/DeletedMessage";
import { IMessageResponse } from "../../../shared/interfaces/General";

export const getDeletedMessagesApi = (): Promise<{ data: IDeletedMessagesResponse }> => {
	return axios.get(`/deleted-messages/all`);
};

export const setMessagesIsInsultApi = (messageId: string): Promise<{ data: IMessageResponse }> => {
	return axios.post(`/deleted-messages/verify/${messageId}`, { isInsult: true });
};

export const setMessagesIsOkayApi = (messageId: string): Promise<{ data: IMessageResponse }> => {
	return axios.post(`/deleted-messages/verify/${messageId}`, { isInsult: false });
};
