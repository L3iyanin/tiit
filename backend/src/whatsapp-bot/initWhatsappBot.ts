import { linkGroupWithUser, moderateMessage, verifyUser } from "./moderateMessage";

const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("kasimat-shira2");


console.log("Whatsapp Bot is starting...");

export const client = new Client({
	puppeteer: {
		args: ["--no-sandbox"],
	},
	authStrategy: new LocalAuth({
		clientId: "moderator",
		dataPath: "./src/whatsapp-bot/savedSession",
		// dataPath: "./savedSession,
		saveLogin: true,
	}),
});

client.initialize();

client.on("qr", (qr: any) => {
	qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
	console.log("Whatsapp Bot is ready!");
});

client.on("message", async (message) => {
	if (message.body.toLowerCase() === "tiit") {
		await message.reply("👋 Hello! I'm TiiT, your family friendly chatbot. I'm here to help you moderate your group.");
		return;
	}
	if (message.body.toLowerCase().startsWith("verify")) {
		await verifyUser(message);
		return;
	}
	if (message.body.startsWith("link-my-group")) {
		await linkGroupWithUser(message);
		return;
	}
	await moderateMessage(message);
});

client.on("disconnected", (reason) => {
	console.log("Whatsapp Bot was logged out", reason);
});
