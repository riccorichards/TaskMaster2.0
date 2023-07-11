import { useState } from "react";

const DetectWorkSpace = ({setDetectedWorkSpace}) => {
	const [workInputValue, setWorkInputValue] = useState("");
	const handlerWorkTitle = (e) => {
		setWorkInputValue(e.target.value)
	}
	const getDetectedWorkSpace = () => {
		if (workInputValue !== "") {
			setDetectedWorkSpace(workInputValue);
			setWorkInputValue("")
		}
	}

	return (
		<div className="workSpaceInput">
			<input type="text"
				placeholder="work space"
				value={workInputValue}
				onChange={handlerWorkTitle}
			/>
			<button onClick={() => getDetectedWorkSpace()}>Title</button>
		</div>
	)
}

export default DetectWorkSpace;