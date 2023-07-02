import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./logo.css";

const Logo = () => {
	return (
		<div className="logo_wrapper">
			<div className="logo">
				<AiOutlineLeft />
				<span>n + 1/</span>
				<AiOutlineRight />
			</div>
			<div className="logo_decoration">
				<span>Try <span className="again">again?</span></span>
				<span>-Why  <span className="not">not?</span></span>
			</div>
		</div>
	)
}

export default Logo