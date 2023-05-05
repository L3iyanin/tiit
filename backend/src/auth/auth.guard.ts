import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly authService: AuthService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest();
		const authorization = request.headers.authorization;
		if (!authorization) {
			return false;
		}
		const user = await this.authService.validateToken(authorization.split(" ")[1]);
		if (!user) {
			return false;
		}

		request.user = user;
		return true;
	}
}
