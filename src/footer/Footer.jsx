import "./footer.css";
import footer_bg from "../assets/footer_bg.png";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { SiCodewars } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
	const scrollToComponents = (id) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}

	const navigate = useNavigate()
	const goToAuth = () => {
		navigate("/auth");
	}
	return (
		<div className="footer_wrapper">
			<img src={footer_bg} alt="footer background" />
			<div className="footer">
				<div className="main_footer_information">
					<div className="follow_me">
						<h2>Developer's Socials</h2>
						<div className="follow_socials">
							<a href="https://www.linkedin.com/in/richard-trofimovi-a07a64249/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
							<a href="https://github.com/riccorichards" target="_blank" rel="noreferrer"><AiFillGithub /></a>
							<a href="https://twitter.com/RTrofimovi" target="_blank" rel="noreferrer"><AiFillTwitterSquare /></a>
							<a href="https://www.codewars.com/users/riccorichards" target="_blank" rel="noreferrer"><SiCodewars /></a>
							<a href="https://www.facebook.com/profile.php?id=100075505403537" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
							<a href="https://www.instagram.com/richardtrofimovi/" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
						</div>
					</div>
					<div className="footer_data">
						<div className="footer_information_content">
							<h2>Information</h2>
							<div className="information_navigate">
								<Link>About</Link>
								<Link>Contact</Link>
								<Link>settings</Link>
							</div>
						</div>
						<div className="footer_projects_content">
							<h2>My Projects</h2>
							<div className="projects_navigate">
								<a href="https://riccorichards.github.io/TaskMaster/" target="_blank" rel="noreferrer">TaskMaster</a>
								<a href="https://riccorichards.github.io/SocialInfluencer/" target="_blank" rel="noreferrer">SocialInfluencer</a>
							</div>
						</div>
						<div className="footer_navigation">
							<h2>navigate</h2>
							<div className="footer_navigation_links">
								<Link to="#" onClick={() => scrollToComponents("journey")}>Journey</Link>
								<Link to="#" onClick={() => scrollToComponents("progress")}>Progress</Link>
								<Link to="#" onClick={() => scrollToComponents("visualization")}>Data Visualization</Link>
								<Link to="#" onClick={() => scrollToComponents("learningTime")}>Time</Link>
								<Link to="#" onClick={() => scrollToComponents("yourWay")}>your Way</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="footer_BTNs">
					<button className="downloadCV">Download CV</button>
					<button className="footer_sign_up" onClick={() => goToAuth()}>Sign Up</button>
				</div>
				<div className="footer_line" />
				<span className="copyright">© Copyright 2023. Made by RiccoRichards</span>

			</div>
		</div>
	)
}

export default Footer