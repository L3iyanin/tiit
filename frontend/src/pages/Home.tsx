import Navbar from "../components/NavBar/Navbar";

import { ReactComponent as Step1Illu } from "../assets/icons/Step1Illu.svg";
import { ReactComponent as Step2Illu } from "../assets/icons/Step2Illu.svg";
import React, { useState } from "react";
import Learn from "../components/Pages/Home/Learn";
import Logs from "../components/Pages/Home/Logs";
import Footer from "../components/Footer/Footer";

const Home = () => {
	

	return (
		<>
			<Navbar />
			<main className="">
				<Learn />
				<div className="h-[2px] w-full bg-primary my-6"></div>
				<Logs />
			</main>
			<Footer />
		</>
	);
};

export default Home;
