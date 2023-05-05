import Router from "./routes/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { getUser } from "./reducers/UserSlice";

const App: React.FC = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser());
	}, []);

	return (
		<>
			<Router />
			<ToastContainer autoClose={2000} theme="colored" />
		</>
	);
};

export default App;
