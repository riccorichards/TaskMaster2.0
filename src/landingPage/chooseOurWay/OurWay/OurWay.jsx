import "./ourway.css";
import tree from "../../../assets/videos/tree.mp4";
import TextOurWay from './../TextOurWay/TextOurWay';
const OurWay = () => {
	return (
		<div className="choose_our_way">
			<div className="text_ourWay_wrapper">
				<TextOurWay />
			</div>
			<div className="VideoOurWay_wrapper">
				<video src={tree} autoPlay loop muted />
			</div>
		</div>
	)
}

export default OurWay;