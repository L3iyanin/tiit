import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { CenteredLoadingSpinner } from "../components/UI/Loading/LoadingSpinner";
import { IUserState } from "../utils/types/user";
import { routes } from "./Router";

function NotRequireAuth({ children }: { children?: JSX.Element }) {
	const userData: IUserState = useSelector((state: any) => state.user);
	let location = useLocation();

	if (userData.isLoading) return <CenteredLoadingSpinner />;

	if (userData.isLoggedIn) {
		return <Navigate to={routes.home} state={{ from: location }} replace />;
	}

	if (children) {
		return children;
	}

	return <Outlet />;
}

export default NotRequireAuth;