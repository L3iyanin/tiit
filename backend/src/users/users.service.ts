import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { IUserInRequest } from "../../../shared/interfaces/User";
import { throwServiceError } from "src/error-handling/logger";

@Injectable()
export class UsersService {
	prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	async getVerificationToken(user: IUserInRequest) {
		try {
			return {
				message: "successfully found user",
				verificationToken: "link-my-group " + user.id,
			};
		} catch (error) {
			throwServiceError(error, "UsersService.getVerificationToken");
		}
	}
}
