
import axios from "axios";
import { IGoogleLogin } from "../../../shared/interfaces/Auth";

export const getUserAuthData = ( query: string ): Promise<{ data: IGoogleLogin }> => {
	return axios.get(`/google/callback${query}`);
};
