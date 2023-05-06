import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import StatsSection from "../components/Pages/Home/StatsSection";

import { ReactComponent as Step1Illu } from "../assets/icons/Step1Illu.svg";
import { ReactComponent as Step2Illu } from "../assets/icons/Step2Illu.svg";
import Step from "../components/Pages/Home/Step";


const Home = () => {
	return (
		<>
			<Navbar />
			<main className="px-5 pt-6">
				<h1 className="text-base font-bold text-primary mb-4">Remove bad words in 2 steps:</h1>
				<div className="flex flex-col gap-8">
					{steps.map(step => <Step {...step}/>)}
				</div>
			</main>
		</>
	);
};


const steps = [
	{
		index: 1,
		Illustartion: Step1Illu,
		text: "Add TiiT to your whatsapp gourp here is the number: 0609213893",
	},
	{
		index: 2,
		Illustartion: Step2Illu,
		text: "make TiiT admin group",
	}
];

export default Home;
