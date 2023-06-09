import Navbar from "../components/NavBar/Navbar";

import { ReactComponent as Step1Illu } from "../assets/icons/Step1Illu.svg";
import { ReactComponent as Step2Illu } from "../assets/icons/Step2Illu.svg";
import { ReactComponent as Step3Illu } from "../assets/icons/Step3Illu.svg";
import Footer from "../components/Footer/Footer";
import Step from "../components/Pages/Setup/Step";
import ClipBoardField from "../components/Pages/Setup/ClipBoardField";
import { useEffect, useState } from "react";
import BodyLayout from "../components/UI/Layout/LayoutBody";
import { getVerifyCodeApi } from "../services/verify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentUserApi } from "../services/user";
import { setUserIsLinked } from "../reducers/UserSlice";
import { routes } from "../routes/Router";

const Setup = () => {
	const [token, setToken] = useState("");

	useEffect(() => {
		getVerifyCodeApi()
			.then(res => {
				setToken(res.data.verificationToken);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const navigate = useNavigate();;

	const dispatch = useDispatch();

	useEffect(() => {
		getCurrentUserApi()
			.then((res) => {
				if (res.data.isLinked) {
					dispatch(setUserIsLinked());
					navigate(routes.home);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, [])

	return (
		<BodyLayout>
			<Navbar />
			<main className="px-5 py-6">
				<h1 className="text-base font-bold text-primary mb-4 text-center">Remove bad words in 2 steps:</h1>
				<div className="flex flex-col gap-8 items-center">
					<Step {...steps[0]} attachement={import.meta.env.VITE_APP_API_PHONE_NUMBER} />
					<Step {...steps[1]} attachement="" />
					<Step {...steps[2]} attachement={token} />
				</div>
			</main>
			<Footer />
		</BodyLayout>
	);
};

const steps = [
	{
		index: 1,
		Illustartion: Step1Illu,
		text: "Add TiiT to your whatsapp gourp here is the number",
	},
	{
		index: 2,
		Illustartion: Step2Illu,
		text: "make TiiT admin group",
	},
	{
		index: 3,
		Illustartion: Step3Illu,
		text: "Send this message to group chat",
	},
];

export default Setup;
