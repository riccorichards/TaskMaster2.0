import "./navbar.css";
import profile_img from "../../../assets/profile.jpg";
import Greeting from './Greeting';
import { NavLink, useNavigate } from 'react-router-dom';
import { ImSwitch } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
const Navbar = () => {
	const navigate = useNavigate()
	const userLogOut = () => {
		localStorage.removeItem("existUser")
		navigate("/")
	}
	const scrollToComponents = (id) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}
	return (
		<div className="navbar">
			<div className="navbar_header">
				<img src={profile_img} alt="profile img" />
				<Greeting />
			</div>
			<div className="navbar_navigate">
				<NavLink className="overview_svg" to="#" onClick={() => scrollToComponents("overview")}>
					<AiFillPieChart />
					Overview
				</NavLink>
				<NavLink className="task_svg" to="#" onClick={() => scrollToComponents("task")}>
					<FaTasks />
					Task Generator
				</NavLink>
				<NavLink className="timer_svg" to="#" onClick={() => scrollToComponents("timer")}>
					<MdTimer />
					Timer
				</NavLink>
				<NavLink className="map_svg" to="#" onClick={() => scrollToComponents("map")}>
					<FaSitemap />
					Road Map
				</NavLink>
			</div>
			<div className="navbar_footer">
				<IoIosSettings />
				<ImSwitch onClick={() => userLogOut()} />
			</div>
		</div>
	)
}

export default Navbar;