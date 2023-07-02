import "./journey.css";
import TextJourney from '../TextJourney/TextJourey';
import tree from "../../../assets/videos/tree.mp4";
const Journey = () => {
	return (
		<div className="journey">
			<div className="text_journey_wrapper">
				<TextJourney />
			</div>
			<div className="VideoJourney_wrapper">
			<video src={tree} autoPlay loop muted />
			</div>
		</div>
	)
}

export default Journey;