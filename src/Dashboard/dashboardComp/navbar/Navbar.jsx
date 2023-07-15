import "./navbar.css";
//import profile_img from "../../../assets/profile.jpg";
import Greeting from './Greeting';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { ImSwitch } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import { useEffect, useState } from "react";
import EditProfile from "./EditProfile";
const Navbar = ({ setIsInstuction }) => {
	const [isSettings, setIsSettings] = useState(false)
	const [isEditProfile, setIsEditProfile] = useState(false)
	const [profileIMG, setProfileIMG] = useState(null)
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

	useEffect(() => {
		const handlerProfileIMG = () => {
			const getProfileIMG = localStorage.getItem("profileIMG")
			if (getProfileIMG) {
				setProfileIMG(getProfileIMG)
			}
		}

		window.addEventListener("storage", handlerProfileIMG)

		return () => {
			window.removeEventListener("storage", handlerProfileIMG)
		}
	})

	const profile_img = profileIMG ? profileIMG : null;
	console.log(profile_img)
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
				<IoIosSettings onClick={() => setIsSettings(prev => !prev)} />
				<ImSwitch onClick={() => userLogOut()} />
				{isSettings ?
					<div className="settingPages">
						<Link to="#" onClick={() => setIsEditProfile(prev => !prev)}>Edit Profile</Link>
						<Link to="#" onClick={() => setIsInstuction(prev => !prev)}>Instruction</Link>
					</div>
					: null}
				{isEditProfile ?
					<div className="editProfile_wrapper">
						<EditProfile />
					</div>
					:
					null}
			</div>
		</div>
	)
}

export default Navbar;