import Navbar from "../components/NavBar/Navbar";

import { ReactComponent as Step1Illu } from "../assets/icons/Step1Illu.svg";
import { ReactComponent as Step2Illu } from "../assets/icons/Step2Illu.svg";
import Footer from "../components/Footer/Footer";

const Setup = () => {
	return (
		<>
			<Navbar />
			<main className="px-5 pt-6">
				<h1 className="text-base font-bold text-primary mb-4 text-center">Remove bad words in 2 steps:</h1>
				<div className="flex flex-col gap-8">
					<article className="flex flex-col items-center gap-4">
						<h2 className="text-xs font-bold text-white bg-primary rounded px-2 py-1 ">1</h2>
						<Step1Illu />
						<p className="text-xs text-primary font-medium text-center">
							Add TiiT to your whatsapp gourp here is the number:
							<span className="font-normal">0609213893</span>
						</p>
					</article>
					<article className="flex flex-col items-center gap-4">
						<h2 className="text-xs font-bold text-white bg-primary rounded px-2 py-1">2</h2>
						<Step2Illu />
						<p className="text-xs text-primary font-medium">make TiiT admin group</p>
					</article>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Setup;
