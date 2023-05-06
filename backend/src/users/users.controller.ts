import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get("verification-token")
	getVerificationToken(@Req() req) {
		return this.usersService.getVerificationToken(req.user);
	}
}
