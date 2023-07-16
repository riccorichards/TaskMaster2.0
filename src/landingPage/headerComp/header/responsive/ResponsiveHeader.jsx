import { useState } from 'react';
import "./responsive.css";
import { HiMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai";
import Logo from './../../logo/Logo';
import { Link } from 'react-router-dom';

const ResponsiveHeader = () => {
	const [isContentOfTable, setIsContentOfTable] = useState(false)
	const scrollToComponents = (id) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
	}
	return (
		<div className="responvive">
			<div className='responvive_header'>
				<Logo />
				{isContentOfTable ?
					<AiOutlineClose className='toggle' onClick={() => setIsContentOfTable(prev => !prev)} />
					:
					<HiMenu className='toggle' onClick={() => setIsContentOfTable(prev => !prev)} />
				}
			</div>
			{isContentOfTable ? <div className='responsive_main'>
				<Link to="#" onClick={() => scrollToComponents("journey")}>Learning Journey</Link>
				<Link to="#" onClick={() => scrollToComponents("progress")}>Progress Overview</Link>
				<Link to="#" onClick={() => scrollToComponents("visualization")}>Data VisualiSation</Link>
				<Link to="#" onClick={() => scrollToComponents("learningTime")}>Mastering Your Time</Link>
			</div>
				: null}
		</div>
	)
}

export default ResponsiveHeader;