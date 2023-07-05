import "./navbar.css";
import profile_img from "../../../assets/profile.jpg";
import Greeting from './Greeting';
import { NavLink } from 'react-router-dom';
import { ImSwitch } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import { ImHistory } from "react-icons/im";
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar_header">
				<img src={profile_img} alt="profile img" />
				<Greeting />
			</div>
			<div className="navbar_navigate">
				<NavLink className="overview_svg">
					<AiFillPieChart />
					Overview
				</NavLink>
				<NavLink className="task_svg">
					<FaTasks />
					Task Generator
				</NavLink>
				<NavLink className="timer_svg">
					<MdTimer />
					Timer
				</NavLink>
				<NavLink className="map_svg">
					<FaSitemap />
					Road Map
				</NavLink>
				<NavLink className="history_svg">
					<ImHistory />
					History
				</NavLink>
			</div>
			<div className="navbar_footer">
				<IoIosSettings />
				<ImSwitch />
			</div>
		</div>
	)
}

export default Navbar;