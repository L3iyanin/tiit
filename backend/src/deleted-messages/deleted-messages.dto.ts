import { IsArray, IsBoolean, IsEmail, IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class VerifyDeletedMessageDto {
	@IsNotEmpty()
	@IsBoolean()
	isInsult: boolean;
}
