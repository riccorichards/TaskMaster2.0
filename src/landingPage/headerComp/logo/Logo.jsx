import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./logo.css";
import { useNavigate } from "react-router-dom";

const Logo = () => {
	const navigate = useNavigate()
	const returnHomePage = () => {
		navigate("/")
	}
	return (
		<div className="logo_wrapper" onClick={() => returnHomePage()}>
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