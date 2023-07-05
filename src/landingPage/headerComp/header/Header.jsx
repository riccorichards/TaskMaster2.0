import "./header.css";
import Logo from '../logo/Logo';
import GetRealTime from './../get_real_time/GetRealTime';
import { GiStairsGoal } from "react-icons/gi";
import TableOfContent from './../table_of_content/TableOfContent';
import data_visualisation_bg from "../../../assets/data_visualisation_bg.png";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const Header = () => {
	const navigate = useNavigate()
	const goToAuth = () => {
		navigate("/auth");
	}
	return (
		<header>
			<div className="carrent_data">
				<div className="header_logo_wrapper">
					<Logo />
				</div>
				<div className="signUpSection">
					<div className="current_time">
						<GetRealTime />
					</div>
					<button
						className="joinwithus" onClick={() => goToAuth()}>Sign Up <GiStairsGoal /></button>
				</div>
				<div className="tableOfContent_wrapper">
					<TableOfContent />
				</div>
			</div>
			<div className="bg_style">
				<img src={data_visualisation_bg} alt="data visualisation background" />
				<div className="web_descriprion">
					<h1>TaskMaster2.0</h1>
					<span>Empower your productivity and learning journey with our task management platform, helping you set, achieve, and visualize your goals.</span>
				</div>
			</div>

			<Link className="startUp" to="/auth">
				<span>Start</span>
				<BsArrowRight /></Link>
		</header>
	)
}

export default Header;