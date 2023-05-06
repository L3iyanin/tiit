import { client } from "./initWhatsappBot";

const GROUP_NAME = "120363133172946194@g.us";

export const sendWhatsappMessage = async (to: string, message: string) => {
	await client.sendMessage(to, message);
};

export const moderateMessage = async (message: any) => {
	if (message.from === GROUP_NAME) {
		if (message.body === "!ping") {
			await sendWhatsappMessage(GROUP_NAME, "pong");
		}
	}
};

const deleteMessage = async (message: any) => {
	// await message.delete(true);
};
