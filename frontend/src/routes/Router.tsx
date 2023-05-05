import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
const Home = lazy(() => import("../pages/Home"));
const NotRequireAuth = lazy(() => import("./NotRequireAuth"));
const RequireAuth = lazy(() => import("./RequireAuth"));

export const routes: any = {
	landing: "/",
	home: "/home",
};

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Suspense
					fallback={
						<div style={{ textAlign: "center", marginTop: "1rem" }}>
							Loading...
						</div>
					}
				>
					<Routes>
						<Route element={<RequireAuth />}>
							<Route path={routes.home} element={<Home />} />
						</Route>

						<Route element={<NotRequireAuth />}>
							<Route
								path={routes.landing}
								element={<Landing />}
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
