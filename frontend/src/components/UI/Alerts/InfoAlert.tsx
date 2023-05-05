import { toast } from "react-toastify";

const InfoAlertWithMessage = (message: string) => {
	toast.info(message, {
		position: toast.POSITION.TOP_CENTER,
	});
}

export default InfoAlertWithMessage;