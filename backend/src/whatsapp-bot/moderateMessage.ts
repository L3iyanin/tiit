import { PrismaClient } from "@prisma/client";
import { basePrompt } from "./prompt.data";
import { client } from "./initWhatsappBot";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
	apiKey: process.env.OPEN_AI_KEY,
});

const openAi = new OpenAIApi(configuration);

const prisma = new PrismaClient();

async function getResponseFromChatGpt(prompt): Promise<string> {
	try {
		const completion = await openAi.createChatCompletion({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "user",
					content: prompt,
				},
			],
		});

		console.log(completion.data.choices[0].message.content);
		return completion.data.choices[0].message.content.toLowerCase();
	} catch (err) {
		console.log("❌error in getResponseFromChatGpt: " + err.response.status);
		return "error";
	}
}

export async function moderateMessage(message) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				whatsappGroupId: message.from,
			},
		});
		console.log("📧 📧 📧 message: " + message.body);
		const reply = await getResponseFromChatGpt(basePrompt + message.body);
		console.log("reply: " + reply);
		const isBad = reply.includes("true");
		const isError = reply.includes("error");
		if (isError) {
			message.reply(
				"I cannot process this message right now, because of openAi's free account limitations, try again later"
			);
		}
		if (isBad) {
			message.delete(true);
			console.log(message);
			client.sendMessage(
				message.from,
				"Your message was deleted because it was flagged as offensive or against the community's policies.\nif you think this was a mistake, please contact the moderators."
			);
			await saveDeletedMessage(message, user);
		}
	} catch (err) {
		console.log("❌error in moderateMessage: " + err);
	}
}

export async function linkGroupWithUser(message) {
	try {
		message.reply("🔄linking group with user...");
		const userId = message.body.split(" ")[1];

		const user = await prisma.user.findUnique({
			where: {
				id: userId,
			},
		});

		if (!user) {
			message.reply("❌user not found");
			return;
		}

		const updatedUser = await prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				whatsappGroupId: message.from,
				isLinked: true,
			},
		});

		message.reply("✅user linked successfully");
	} catch (err) {
		console.log("❌error in linkGroupWithUser: " + err);
	}
}

async function saveDeletedMessage(message, user) {
	try {
		const deletedMessage = await prisma.deletedMessage.create({
			data: {
				userId: user.id,
				text: message.body,
			},
		});
		console.log("deletedMessage: " + deletedMessage);
	} catch (err) {
		console.log("❌error in saveDeletedMessage: " + err);
	}
}

export async function sendMessage(to, message) {
	try {
		client.sendMessage(to, message);
	} catch (err) {
		console.log("❌error in sendMessage: " + err);
	}
}
