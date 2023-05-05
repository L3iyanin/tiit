import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../reducers/UserSlice";
import { routes } from "../../routes/Router";
import { IUserState } from "../../utils/types/user";

const Navbar: React.FC = () => {

	const userData: IUserState = useSelector((state: any) => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		navigate(routes.landing);
	};

	return (
		<div className="navbar">
		</div>
	);
};

export default Navbar;
