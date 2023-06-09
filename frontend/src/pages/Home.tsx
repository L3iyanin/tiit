import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import Learn from "../components/Pages/Home/Learn";
import Logs from "../components/Pages/Home/Logs";
import BodyLayout from "../components/UI/Layout/LayoutBody";
import { getCurrentUserApi } from "../services/user";
import { useEffect } from "react";
import { routes } from "../routes/Router";

const Home = () => {
	
	const navigate = useNavigate();;

	useEffect(() => {
		getCurrentUserApi()
			.then((res) => {
				if (!res.data.isVerified) {
					navigate(routes.unverified);
				}
				else if (!res.data.isLinked) {
					navigate(routes.setup);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [])

	return (
		<BodyLayout>
			<Navbar />
			<main className="">
				<Learn />
				<div className="h-[2px] w-full bg-primary my-6"></div>
				<Logs />
			</main>
			<Footer />
		</BodyLayout>
	);
};

export default Home;
