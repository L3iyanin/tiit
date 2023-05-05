import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { GoogleController } from "./google/google.controller";
import { GoogleService } from "./google/google.service";
import { GoogleStrategy } from "./google/google.strategy";

@Module({
	controllers: [GoogleController],
	providers: [AuthService, GoogleService, GoogleStrategy],
	exports: [AuthService],
	imports: [],
})
export class AuthModule {}
