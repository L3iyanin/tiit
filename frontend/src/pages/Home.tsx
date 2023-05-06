import Navbar from "../components/NavBar/Navbar";
import Learn from "../components/Pages/Home/Learn";
import Logs from "../components/Pages/Home/Logs";

const Home = () => {
	

	return (
		<>
			<Navbar />
			<main className="">
				<Learn />
				<div className="h-[2px] w-full bg-primary my-6"></div>
				<Logs />
			</main>
		</>
	);
};

export default Home;
