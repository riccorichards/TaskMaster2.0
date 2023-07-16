import "./navbar.css";
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
import { userProfileIMG } from "../../../DataSection/profileSwitcher";
const Navbar = ({ setIsInstuction }) => {
	const [isSettings, setIsSettings] = useState(false)
	const [isEditProfile, setIsEditProfile] = useState(false)
	const [profileId, setProfileId] = useState(() => {
		const getId = JSON.parse(localStorage.getItem("profileIMG"))
		return getId || 1
	})
	const navigate = useNavigate()
	const userLogOut = () => {
		navigate("/")
	}

	useEffect(() => {
		const getId = JSON.parse(localStorage.getItem("profileIMG"))
		if (getId) {
			setProfileId(getId)
		}
	}, [])
	const scrollToComponents = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const paddingTop = 100; // adjust this value as needed
			const elementTop = element.getBoundingClientRect().top;
			const offsetTop = elementTop + window.pageYOffset - paddingTop;
			window.scrollTo({ top: offsetTop, behavior: "smooth" });
		}
	};
	const chosenProfile = (id) => {
		for (let i = 0; i < userProfileIMG.length; i++) {
			let profile = userProfileIMG[i];
			if (profile.id === id) {
				return profile.profile
			}
		}
	}

	useEffect(() => {
		localStorage.setItem("profileIMG", JSON.stringify(profileId))
	}, [profileId])
	return (
		<div className="navbar">
			<div className="navbar_header">
				<img src={chosenProfile(profileId)} alt="profile img" />
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
						<EditProfile userProfileIMG={userProfileIMG} setProfileId={setProfileId} />
					</div>
					:
					null}
			</div>
		</div>
	)
}

export default Navbar;