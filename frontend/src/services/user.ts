
import axios from "axios";
import { IUserInRequest } from "../../../shared/interfaces/User";

export const getCurrentUserApi = (): Promise<{ data: IUserInRequest }> => {
	return axios.get(`/users/current`);
};
