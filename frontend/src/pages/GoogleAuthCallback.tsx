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
					if (!res.data.user.isVerified) {
						navigate(routes.unverified);
					}
					else if (!res.data.user.isLinked) {
						navigate(routes.setup);
					}
					else {
						navigate(routes.home);
					}
				})
				.catch((err) => {
					console.error("err", err);
					navigate(routes.setup);
				})
		}
	}, []);

	return (<LadingContent />);
}

export default GoogleAuthCallback;