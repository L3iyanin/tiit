import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import BodyLayout from "../components/UI/Layout/LayoutBody";

const UnVerified = () => {

	useEffect(() => {

	}, [])

	return (
		<BodyLayout>
			<Navbar />
			<div className="container px-5">
				<div className="mt-6 border-2 rounded-lg border-red p-5 ">
					<h1 className="text-xl font-bold mb-2">Problem: Account unverified!!</h1>
					<p className="text-lg">Please contact us to verify your account.</p>
				</div>
			</div>
			<Footer />
		</BodyLayout>
	);
};

export default UnVerified;
