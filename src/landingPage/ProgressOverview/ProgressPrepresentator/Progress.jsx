import tree from "../../../assets/videos/tree.mp4";
import "./progress.css";
import TextProgress from './../TextProgressComp/TextProgress';
const Progress = () => {
	return (
		<div className="progress_representator">
			<div className="VideoProgress_wrapper">
				<video src={tree} autoPlay loop muted />
			</div>
			<div className="text_progress_wrapper">
				<TextProgress />
			</div>
		</div>
	)
}

export default Progress;