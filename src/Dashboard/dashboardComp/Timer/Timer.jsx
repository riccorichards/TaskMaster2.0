import "./timer.css";
import { RiTimerFill } from "react-icons/ri";
import { RxLapTimer } from "react-icons/rx";
import Pomodora from "./Pomodora";
import { useState } from "react";
import RestFive from "./RestFive";
import RestFifteen from "./RestFifteen";
import StopWatch from "./StopWatch";
const Timer = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};


	const renderSelectedComponent = () => {
		switch (selectedOption) {
			case "pomodora":
				return <Pomodora />;
			case "restFive":
				return <RestFive />;
			case "restFifteen":
				return <RestFifteen />;
			case "stopWatch":
				return <StopWatch />;
			default:
				return null;
		}
	};
	return (
		<div className="timer" id="timer">
			<div className="choose_time_method">
				<h2>Choose Time Method</h2>
				<div className="time_methodes">
					<div className="pomodora_method active_div" onClick={() => handleOptionSelect("pomodora")}>
						<RiTimerFill />
						Pomodora
					</div>
					<div className="timer_method" onClick={() => handleOptionSelect("stopWatch")}>
						<RxLapTimer />
						Timer
					</div>
					<div className="restFiveMin" onClick={() => handleOptionSelect("restFive")}>
						<span>5</span>
						Rest Time
					</div>
					<div className="restFifteenMin" onClick={() => handleOptionSelect("restFifteen")}>
						<span>15</span>
						Rest Time
					</div>
				</div>
			</div>
			<div className="chosen_time_wrapper">
				{renderSelectedComponent()}
			</div>
		</div>
	)
}

export default Timer