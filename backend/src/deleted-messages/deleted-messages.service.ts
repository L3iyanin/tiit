import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { IUserInRequest } from "../../../shared/interfaces/User";
import { throwServiceError } from "src/error-handling/logger";
import { IDeletedMessagesResponse } from "../../../shared/interfaces/DeletedMessage";
import { IMessageResponse } from "../../../shared/interfaces/General";
import { VerifyDeletedMessageDto } from "./deleted-messages.dto";

@Injectable()
export class DeletedMessagesService {
	prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient();
	}

	async findAllDeletedMessages(user: IUserInRequest): Promise<IDeletedMessagesResponse> {
		try {
			const deletedMessages = await this.prisma.deletedMessage.findMany({
				where: {
					userId: user.id,
					isVerified: false,
				},
			});

			return {
				message: "successfully found all deleted messages",
				deletedMessages,
			};
		} catch (error) {
			throwServiceError(error, "DeletedMessagesService.findAllDeletedMessages");
		}
	}

	async verifyDeletedMessage(
		deletedMessageId: string,
		user: IUserInRequest,
		body: VerifyDeletedMessageDto
	): Promise<IMessageResponse> {
		try {
			const deletedMessage = await this.prisma.deletedMessage.findUnique({
				where: {
					id: deletedMessageId,
				},
			});

			console.log("deletedMessage", deletedMessage);

			if (!deletedMessage) {
				throw new HttpException("Deleted message not found", HttpStatus.NOT_FOUND);
			}

			if (deletedMessage.userId !== user.id) {
				throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
			}

			const updatedDeletedMessage = await this.prisma.deletedMessage.update({
				where: {
					id: deletedMessageId,
				},
				data: {
					isVerified: true,
					isInsult: body.isInsult,
				},
			});

			return {
				message: "successfully verified deleted message",
			};
		} catch (error) {
			throwServiceError(error, "DeletedMessagesService.verifyDeletedMessage");
		}
	}

	async findAllVerifiedDeletedMessages(user: IUserInRequest): Promise<IDeletedMessagesResponse> {
		try {
			const deletedMessages = await this.prisma.deletedMessage.findMany({
				where: {
					userId: user.id,
					isVerified: true,
				},
			});

			return {
				message: "successfully found all verified deleted messages",
				deletedMessages,
			};
		} catch (error) {
			throwServiceError(error, "DeletedMessagesService.findAllVerifiedDeletedMessages");
		}
	}
}
