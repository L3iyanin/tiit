import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { JwtService } from "@nestjs/jwt";
import { throwServiceError } from "src/errorHandling/logger";

@Injectable()
export class AuthService {
	prisma: PrismaClient;
	jwtTokenService: JwtService;

	constructor() {
		this.prisma = new PrismaClient();
		this.jwtTokenService = new JwtService();
	}

	// * Utils and helpers ********************************************************
	async generateToken(user: { id: string }) {
		try {
			const payload = {
				id: user.id,
			};
			const token = await this.jwtTokenService.signAsync(payload, {
				secret: process.env.JWT_SECRET,
				expiresIn: "14d",
			});
			return {
				accessToken: token,
			};
		} catch (error) {
			throwServiceError(error, "AuthService.generateToken");
		}
	}

	async validateToken(token: string) {
		try {
			const payload = await this.jwtTokenService.verifyAsync(token, {
				secret: process.env.JWT_SECRET,
			});

			const user = await this.prisma.user.findUnique({
				where: {
					id: payload.id,
				},
			});

			return user;
		} catch (error) {
			throwServiceError(error, "AuthService.validateToken");
		}
	}
}
