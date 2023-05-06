import { Module } from "@nestjs/common";
import { DeletedMessagesService } from "./deleted-messages.service";
import { DeletedMessagesController } from "./deleted-messages.controller";
import { AuthModule } from "src/auth/auth.module";

@Module({
	controllers: [DeletedMessagesController],
	providers: [DeletedMessagesService],
	imports: [AuthModule],
})
export class DeletedMessagesModule {}
