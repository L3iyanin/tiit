import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_KEY } from "../utils/constants/settings";
import { IGoogleLogin } from "../../../shared/interfaces/Auth";

const initialState: IUserState = {
	user: null,
	accessToken: null,
	isLoggedIn: false,
	isLoading: true,
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		login: (state, action: PayloadAction<IGoogleLogin>) => {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
			const savedUser: IUserWithToken = {
				user: action.payload.user,
				accessToken: action.payload.accessToken,
			};
			state.isLoggedIn = true;
			localStorage.setItem(USER_KEY, JSON.stringify(savedUser));
		},

		setUserIsVerified: (state) => {
			if (state.user && !state.user.isVerified) {
				state.user.isVerified = true;
				const savedUser: IUserWithToken = {
					user: state.user,
					accessToken: state.accessToken!,
				};
				localStorage.setItem(USER_KEY, JSON.stringify(savedUser));
			}
		},

		setUserIsLinked: (state) => {
			if (state.user && !state.user.isLinked) {
				state.user.isLinked = true;
				const savedUser: IUserWithToken = {
					user: state.user,
					accessToken: state.accessToken!,
				};
				localStorage.setItem(USER_KEY, JSON.stringify(savedUser));
			}
		},

		logout: (state) => {
			state.user = null;
			state.accessToken = null;
			state.isLoggedIn = false;
			localStorage.removeItem(USER_KEY);
		},
		
		getUser: (state) => {
			const loadedUser = localStorage.getItem(USER_KEY);
			if (loadedUser) {
				const savedUser: IUserWithToken = JSON.parse(loadedUser);
				state.user = savedUser.user;
				state.accessToken = savedUser.accessToken;
				state.isLoggedIn = true;
				state.isLoading = false;
				return ;
			}
			state.isLoading = false;
		},
	},
});

export default userSlice.reducer;

export const { login, logout, getUser, setUserIsVerified, setUserIsLinked } = userSlice.actions;