import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { IUserInRequest } from "../../../shared/interfaces/User";
import { throwServiceError } from "src/error-handling/logger";
import { IMessageResponse } from "../../../shared/interfaces/General";

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

	async verifyUser(userId: string, user: IUserInRequest): Promise<IMessageResponse> {
		try {
			if (!process.env.TIIT_ADMINS.split(",").includes(user.email)) {
				throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
			}

			const userToVerify = await this.prisma.user.findUnique({
				where: {
					id: userId,
				},
			});

			if (!userToVerify) {
				throw new HttpException("User not found", HttpStatus.NOT_FOUND);
			}

			const updatedUser = await this.prisma.user.update({
				where: {
					id: userId,
				},
				data: {
					isVerified: true,
				},
			});

			return {
				message: "successfully verified user",
			};
		} catch (error) {
			throwServiceError(error, "UsersService.verifyUser");
		}
	}

	async getCurrentUser(user: IUserInRequest): Promise<IUserInRequest> {
		try {
			return user;
		} catch (error) {
			throwServiceError(error, "UsersService.getCurrentUser");
		}
	}
}
