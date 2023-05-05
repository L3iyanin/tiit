import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../reducers/UserSlice";

const store = configureStore({
	reducer: {
		user: userSliceReducer,
	},
});

export default store;
