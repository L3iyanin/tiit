import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LadingContent from "../components/UI/Loading/LadingContent";
import { getUserAuthData } from "../services/auth";
import { login } from "../reducers/UserSlice";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/Router";

const GoogleAuthCallback: React.FC = () => {

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		const queryString = window.location.search;
		if (queryString && queryString.length > 0) {
			getUserAuthData(queryString)
				.then((res) => {
					dispatch(login(res.data));
					if (res.data.newUser) {
						navigate(routes.home);
					}
					else {
						navigate(routes.home);
					}
				})
				.catch((err) => {
					console.error("err", err);
					navigate(routes.login);
				})
		}
	}, []);

	return (<LadingContent />);
}

export default GoogleAuthCallback;