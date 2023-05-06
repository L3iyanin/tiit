import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../reducers/UserSlice";
import messagesSliceReducer from "../reducers/MessagesSlice";

const store = configureStore({
	reducer: {
		user: userSliceReducer,
		messages: messagesSliceReducer,
	},
});

export default store;
