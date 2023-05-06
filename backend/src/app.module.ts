import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from './users/users.module';
import { DeletedMessagesModule } from "./deleted-messages/deleted-messages.module";

@Module({
	imports: [AuthModule, UsersModule, DeletedMessagesModule],
})
export class AppModule {}
