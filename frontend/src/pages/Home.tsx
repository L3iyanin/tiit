import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import Learn from "../components/Pages/Home/Learn";
import Logs from "../components/Pages/Home/Logs";
import BodyLayout from "../components/UI/Layout/LayoutBody";

const Home = () => {
	

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
