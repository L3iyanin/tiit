import { toast } from "react-toastify";

const ErrorAlert = (res: any) => {
	if (res.response && res.response.data && res.response.data.message) {
		if (typeof res.response.data.message === "string") {
			toast.error(res.response.data.message, {
				position: toast.POSITION.TOP_CENTER,
			});
		}
		else {
			toast.error(res.response.data.message[0], {
				position: toast.POSITION.TOP_CENTER,
			});
		}
	}
	else {
		toast.error(res.message, {
			position: toast.POSITION.TOP_CENTER,
		});
	}
}

export const ErrorAlertWithMessage = (message: string) => {
	toast.error(message, {
		position: toast.POSITION.TOP_CENTER,
	});
}

export default ErrorAlert;
