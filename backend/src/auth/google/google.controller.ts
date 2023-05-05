import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { GoogleService } from "./google.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("google")
export class GoogleController {
	constructor(private readonly googleService: GoogleService) {}

	@Get()
	@UseGuards(AuthGuard("google"))
	async googleAuth(@Req() req) {}

	@Get("redirect")
	@UseGuards(AuthGuard("google"))
	googleAuthRedirect(@Req() req) {
		return this.googleService.googleLogin(req);
	}
}
