import "./yourway.css";
import tree from "../../../assets/videos/tree.mp4";
import TextYourWay from '../TextYourWay/TextYourWay';
const YourWay = () => {
	return (
		<div className="choose_your_way" id="yourWay">
			<div className="text_yourWay_wrapper">
				<TextYourWay />
			</div>
			<div className="VideoYourWay_wrapper">
				<video src={tree} autoPlay loop muted />
			</div>
		</div>
	)
}

export default YourWay;