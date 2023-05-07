import axios from "axios";

interface IVerifyCode {
	message: string;
	verificationToken: string;
}

export const getVerifyCodeApi = (): Promise<{ data: IVerifyCode }> => {
	return axios.get(`/users/verification-token`);
};
