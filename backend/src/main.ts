import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe());
	app.enableCors({
		origin: true,
	});
	app.setGlobalPrefix("api");

	await app.listen(process.env.PORT || 8080, async () => {
		console.log(`Application is running on: http://127.0.0.1:${process.env.PORT || 8080}/api`);
	});
}
bootstrap();
