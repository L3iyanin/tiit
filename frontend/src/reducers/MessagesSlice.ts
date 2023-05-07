import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDeletedMessage } from "../../../shared/interfaces/DeletedMessage";

const initialState: IMessagesState = {
	messages: null,
};

export const messagesSlice = createSlice({
	name: "messages",
	initialState: initialState,
	reducers: {
		setMessages: (state, action: PayloadAction<IDeletedMessage[]>) => {
			state.messages = action.payload;
		},
		removeMessage: (state, action: PayloadAction<string>) => {
			if (state.messages) {
				state.messages = state.messages.filter((message) => message.id !== action.payload);
			}
		}
	},
});

export default messagesSlice.reducer;

export const { setMessages, removeMessage } = messagesSlice.actions;