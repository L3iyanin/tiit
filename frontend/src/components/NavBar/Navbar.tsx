import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../reducers/UserSlice";
import { routes } from "../../routes/Router";
import { IUserState } from "../../utils/types/user";

import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";

const Navbar: React.FC = () => {
	const userData: IUserState = useSelector((state: any) => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		navigate(routes.landing);
	};

	return (
		<div className="navbar flex justify-between items-center px-5 py-3 border-b border-[#D9D9D9]">
			<Logo className="w-10 h-8 fill-primary"/>
			<button className="text-white text-xs font-medium bg-primary rounded px-4 py-1">Logout</button>
		</div>
	);
};

export default Navbar;
