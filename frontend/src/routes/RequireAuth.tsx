import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { CenteredLoadingSpinner } from "../components/UI/Loading/LoadingSpinner";
import { routes } from "./Router";

function RequireAuth({ children }: { children?: JSX.Element }) {
	const userData: IUserState = useSelector((state: any) => state.user);

	let location = useLocation();

	if (userData.isLoading) return <CenteredLoadingSpinner />;

	if (!userData.isLoggedIn) {
		return <Navigate to={routes.landing} state={{ from: location }} replace />;
	}
	
	// if (!userData.user?.isVerified) {
	// 	return <Navigate to={routes.unverified} state={{ from: location }} replace />;
	// }

	// if (!userData.user?.isLinked) {
	// 	return <Navigate to={routes.setup} state={{ from: location }} replace />;
	// }

	if (children) {
		return children;
	}

	return <Outlet />;
}

export default RequireAuth;
