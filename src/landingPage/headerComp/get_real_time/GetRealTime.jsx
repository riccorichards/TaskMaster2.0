import "./getrealtime.css";
import moment from "moment";
import { useEffect, useState } from "react";
const GetRealTime = () => {
	const now_time = moment().format("hh:mm:ss")
	const now_data = moment().format("MMMM Do YYYY")
	const [realTime, setRealTime] = useState(now_time);
	const [realData, setRealData] = useState(now_data);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setRealTime(moment().format("hh:mm:ss"))
			setRealData(moment().format("MMMM Do YYYY"))
		}, 1000)
		return () => {
			clearTimeout(timeOut)
		}
	}, [realTime, realData])

	return (
		<div className="real_data">
			<span className="real_time">{realTime}</span>
			<div className="real_data_wrapper">
      <div className="real_data_decoration"/>
			<span className="real_data">{realData}</span>
			</div>
		</div>
	)
}

export default GetRealTime;