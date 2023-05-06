import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import { CenteredLoadingSpinner } from "../components/UI/Loading/LoadingSpinner";
import GoogleAuthCallback from "../pages/GoogleAuthCallback";
const Home = lazy(() => import("../pages/Home"));
const NotRequireAuth = lazy(() => import("./NotRequireAuth"));
const RequireAuth = lazy(() => import("./RequireAuth"));

export const routes: {
	landing: string;
	home: string;
	login: string;
	googleCallback: string;
} = {
	landing: "/",
	home: "/home",
	login: "/login",
	googleCallback: "/auth/google/callback",
};

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Suspense
					fallback={
						<CenteredLoadingSpinner />
					}
				>
					<Routes>
						<Route element={<RequireAuth />}>
							<Route path={routes.home} element={<Home />} />
						</Route>

						<Route element={<NotRequireAuth />}>
							<Route
								path={routes.landing}
								element={<Login />}
							/>
							<Route
								path={routes.login}
								element={<Login />}
							/>
							<Route
								path={routes.googleCallback}
								element={<GoogleAuthCallback />}
							/>
						</Route>

						<Route
							path="*"
							element={<Navigate to={routes.home} replace />}
						/>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
};

export default Router;
