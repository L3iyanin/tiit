import React from "react";

import { ReactComponent as Logo } from "../assets/icons/Logo.svg";
import GoogleBtn from "../components/UI/Buttons/GoogleBtn";

const Login = () => {
	return (
		<main className="bg-main h-screen bg-cover py-24 px-11">
			<div className="flex flex-col gap-4 justify-center items-center">
				<Logo className="fill-white"/>
				<h1 className="text-5xl font-bold text-white text-center">TiiT</h1>
			</div>
			<div className="text-xl font-semibold text-white text-center mt-6 mb-4">
				<h2>Hola, my name is TiiT</h2>
				<h2>I don’t like bad words</h2>
				<h2>I delete them</h2>
			</div>
			<div className="flex justify-center">
				<GoogleBtn />
			</div>
		</main>
	);
};

export default Login;
