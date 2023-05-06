import Navbar from "../components/NavBar/Navbar";

import { ReactComponent as Step1Illu } from "../assets/icons/Step1Illu.svg";
import { ReactComponent as Step2Illu } from "../assets/icons/Step2Illu.svg";
import { useState } from "react";

const Home = () => {
	const [insult, setInsult] = useState("");
	return (
		<>
			<Navbar />
			<main className="px-5 pt-6">
				<section className="flex flex-col items-center gap-3">
					<h1 className="text-base font-bold text-primary text-center">Did TiiT miss any insult?</h1>
					<input
						type="text"
						placeholder="add it here so it can learn"
						className="text-[#8181A2] text-xs font-medium border border-primary rounded w-full px-3 py-2"
					/>
					<button>Add insult</button>
				</section>
			</main>
		</>
	);
};

export default Home;
