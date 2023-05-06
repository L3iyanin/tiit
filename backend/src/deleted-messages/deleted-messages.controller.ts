import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from "@nestjs/common";
import { DeletedMessagesService } from "./deleted-messages.service";
import { AuthGuard } from "src/auth/auth.guard";
import { VerifyDeletedMessageDto } from "./deleted-messages.dto";

@Controller("deleted-messages")
@UseGuards(AuthGuard)
export class DeletedMessagesController {
	constructor(private readonly deletedMessagesService: DeletedMessagesService) {}

	@Get("all")
	findAllDeletedMessages(@Req() req) {
		return this.deletedMessagesService.findAllDeletedMessages(req.user);
	}

	@Post("verify/:deletedMessageId")
	verifyDeletedMessage(
		@Param("deletedMessageId") deletedMessageId: string,
		@Req() req,
		@Body() body: VerifyDeletedMessageDto
	) {
		return this.deletedMessagesService.verifyDeletedMessage(deletedMessageId, req.user, body);
	}

	@Get("all-verified")
	findAllVerifiedDeletedMessages(@Req() req) {
		return this.deletedMessagesService.findAllVerifiedDeletedMessages(req.user);
	}
}
