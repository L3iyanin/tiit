import axios from "axios";
import { IAuthResponse } from "../../../shared/interfaces/General";

export const authWithYouCanApi = (code: string): Promise<{data: IAuthResponse}> => {
	return axios.post(`/auth/login-with-youcan`, { code });
}
