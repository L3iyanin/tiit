import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Setup from "../pages/Setup";
const Home = lazy(() => import("../pages/Home"));
const NotRequireAuth = lazy(() => import("./NotRequireAuth"));
const RequireAuth = lazy(() => import("./RequireAuth"));

export const routes: any = {
	landing: "/",
	home: "/home",
	login: "login",
	setup: "setup",
};

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<div style={{ textAlign: "center", marginTop: "1rem" }}>Loading...</div>}>
					<Routes>
						<Route element={<RequireAuth />}></Route>

						<Route element={<NotRequireAuth />}>
							<Route path={routes.home} element={<Home />} />
							<Route path={routes.setup} element={<Setup />} />
							<Route path={routes.landing} element={<Landing />} />
							<Route path={routes.login} element={<Login />} />
						</Route>

						<Route path="*" element={<Navigate to={routes.home} replace />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
};

export default Router;
