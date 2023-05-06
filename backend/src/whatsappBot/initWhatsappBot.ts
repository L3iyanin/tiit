// import { notifyMe } from "src/errorHandling/logger";
const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

export const client = new Client({
	authStrategy: new LocalAuth({
		clientId: "moderator",
		// dataPath: "./src/whatsappBot",
		dataPath: "./savedSession",
		saveLogin: true,
	}),
});

client.initialize();

client.on("qr", (qr: any) => {
	// Generate and scan this code with your phone
	qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
	console.log("Whatsapp Bot is ready!");
});

client.on("message", async (message) => {
	await message.delete(true);
});

client.on("disconnected", (reason) => {
	console.log("Whatsapp Bot was logged out", reason);
});
