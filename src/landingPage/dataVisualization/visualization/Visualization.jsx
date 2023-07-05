import "./visualization.css";
import data_visual from "../../../assets/videos/tree.mp4";
import TextVisualization from './../TextVisualization/TextVisualization';
const Visualization = () => {
	return (
		<div className="data_visualization" id="visualization">
			<div className="text_visualization">
				<TextVisualization />
			</div>
			<div className="video_visualization_wrapper">
				<video src={data_visual} loop autoPlay muted></video>
			</div>
		</div>
	)
}

export default Visualization;