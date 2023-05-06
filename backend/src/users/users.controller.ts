import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("users")
@UseGuards(AuthGuard)
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get("verification-token")
	getVerificationToken(@Req() req) {
		return this.usersService.getVerificationToken(req.user);
	}
}
