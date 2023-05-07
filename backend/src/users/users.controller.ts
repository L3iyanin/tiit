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

	@Post("verify/:userId")
	verifyUser(@Param("userId") userId: string, @Req() req) {
		return this.usersService.verifyUser(userId, req.user);
	}

	@Get("current")
	getCurrentUser(@Req() req) {
		return this.usersService.getCurrentUser(req.user);
	}

	@Get("all")
	getAllUsers(@Req() req) {
		return this.usersService.getAllUsers(req.user);
	}
}
