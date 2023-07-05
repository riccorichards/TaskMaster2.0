import "./timeContent.css";
import tree from "../../../assets/videos/tree.mp4";
import TextLearninTime from './../TextLearningTime/TextLearningTime';
const TimeContent = () => {
	return (
		<div className="timeContent" id="learningTime">
			<div className="Video_time_wrapper">
				<video src={tree} autoPlay loop muted />
			</div>
			<div className="text_time_wrapper">
				<TextLearninTime />
			</div>
		</div>
	)
}

export default TimeContent;