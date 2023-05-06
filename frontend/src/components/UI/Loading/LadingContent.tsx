import Navbar from "../../NavBar/Navbar";
import { CenteredLoadingSpinner } from "./LoadingSpinner";

const LadingContent: React.FC = () => {
	return (
		<div className="flex flex-col gap-10">
				<Navbar />
				<CenteredLoadingSpinner />
			</div>
	);
};

export default LadingContent;