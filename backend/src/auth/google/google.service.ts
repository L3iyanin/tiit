import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { AuthService } from "../auth.service";
import { notifyMe } from "src/errorHandling/logger";

@Injectable()
export class GoogleService {
	prisma: PrismaClient;

	constructor(private readonly authService: AuthService) {
		this.prisma = new PrismaClient();
	}

	async googleLogin(req) {
		if (!req.user) {
			return "Error logging in with google";
		}

		let user = await this.prisma.user.findUnique({
			where: {
				email: req.user.email,
			},
		});

		let message = "successfully logged in with google";

		console.log("user", req.user);

		if (!user) {
			user = await this.prisma.user.create({
				data: {
					email: req.user.email,
					firstName: req.user.firstName,
					lastName: req.user.lastName,
					picture: req.user.picture,
					googleAuth: {
						create: {
							googleId: req.user.googleId,
							accessToken: req.user.accessToken,
							email: req.user.email,
						},
					},
				},
			});

			notifyMe("New user 🎉",`New user created with google: ${req.user.email}, ${req.user.firstName} ${req.user.lastName}`)

			message = "successfully created new user with google";
		}

		const { accessToken } = await this.authService.generateToken({ id: user.id });

		return {
			message,
			accessToken,
			user: {
				email: user.email,
				firstName: user.firstName,
				lastName: user.lastName,
				picture: user.picture,
			},
		};
	}
}
