
interface IMessage {
	id: string;
	content: string;
}

interface IMessagesState {
	messages: IMessage[] | null;
}