
import { ReactComponent as GoogleLogo } from "../../../assets/icons/GoogleLogo.svg";

const GoogleBtn = () => {
	return (
		<a href={import.meta.env.VITE_APP_API_BACKEND_AUTH_URL} className="flex px-5 py-4 bg-white rounded-lg gap-3 items-center">
			<GoogleLogo />
			<p className="text-xl font-medium font-[roboto] text-black text-opacity-60">Connect with Google</p>
		</a>
	);
};

export default GoogleBtn;
