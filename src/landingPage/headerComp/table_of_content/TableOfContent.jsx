import "./tableofcontent.css";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from "react-icons/ai"
const TableOfContent = () => {
	const scrollToComponents = (id) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}
	return (
		<div className="table_of_content">
			<h1>Table Of Content</h1>
			<div className="content_router">
				<Link to="#" onClick={() => scrollToComponents("journey")}>Managing Your Learning Journey</Link>
				<Link to="#" onClick={() => scrollToComponents("progress")}>Progress Overview</Link>
				<Link to="#" onClick={() => scrollToComponents("visualization")}>Data VisualiSation</Link>
				<Link to="#" onClick={() => scrollToComponents("learningTime")}>Managing Your Learning Time</Link>
				<Link to="#" onClick={() => scrollToComponents("yourWay")}>Choose Your Way</Link>
			</div>
			<div className="follow_me">
				<a href="https://www.linkedin.com/in/richard-trofimovi-a07a64249/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
				<a href="https://github.com/riccorichards" target="_blank" rel="noreferrer"><AiFillGithub /></a>
				<a href="https://twitter.com/RTrofimovi" target="_blank" rel="noreferrer"><AiFillTwitterSquare /></a>
			</div>
		</div>
	)
}

export default TableOfContent;