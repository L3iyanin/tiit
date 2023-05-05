import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import axios from "axios";
import ErrorAlert from "./components/UI/Alerts/ErrorAlert";
import { logout } from "./reducers/UserSlice";
import { USER_KEY } from "./utils/constants/settings";
import { IUserWithToken } from "./utils/types/user";

import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "./styles/global.scss";

axios.defaults.baseURL = `${import.meta.env.VITE_APP_API_BASE_URL}`;

axios.interceptors.request.use(
	(config: any) => {
		const userData = localStorage.getItem(USER_KEY);

		
		if (userData) {
			const savedUser = JSON.parse(userData) as IUserWithToken;
			config.headers["Authorization"] = `Bearer ${savedUser.accessToken}`;
		}

		return config;
	},
	(error: any) => Promise.reject(error)
);

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error.response && error.response.status == 401) {
			store.dispatch(logout());
		}
		else {
			ErrorAlert(error);
		}
		
		return Promise.reject(error);
	}
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
