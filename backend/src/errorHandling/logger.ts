import { HttpException, HttpStatus } from "@nestjs/common";
import { format } from "date-fns";

const getTime = () => {
	return format(new Date(), "MMMM d, yyyy 'at' HH:mm:ss 'GMT'");
};

export const throwServiceError = (error, service) => {
	console.error(
		`\n^^^^^^^^^^^^^^ ${getTime()} ^^^^^^^^^^^^^^\n`,
		`❌❌❌Error in |${service}|: \n\n${error}\n`,
		`vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv\n`
	);

	throw new HttpException(
		{
			status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
			message: error.message || "Internal Server Error",
		},
		error.status || HttpStatus.INTERNAL_SERVER_ERROR
	);
};

export const notifyMe = (subject: string ,message: string) => {
	// TODO: Send me an email
	console.log(`📧📧📧📧📧 ${getTime()} 📧📧📧📧📧/n`,
	 ` ${message} `,
	 `/n📧📧📧📧📧📧📧📧📧📧📧📧📧📧📧📧End of message📧`);
};
