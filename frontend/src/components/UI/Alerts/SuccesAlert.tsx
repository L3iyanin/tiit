import { toast } from "react-toastify";

const SuccessAlert = (res: any) => {

	if (res.data && res.data.message) {
		if (typeof res.data.message === "string") {
			toast.success(res.data.message, {
				position: toast.POSITION.TOP_CENTER,
			});
		}
		else {
			toast.success(res.data.message[0], {
				position: toast.POSITION.TOP_CENTER,
			});
		}
	}
	else {
		toast.success(res.message, {
			position: toast.POSITION.TOP_CENTER,
		});
	}
}

export const SuccessAlertWithMessage = (message: string) => {
	toast.success(message, {
		position: toast.POSITION.TOP_CENTER,
	});
}

export default SuccessAlert;