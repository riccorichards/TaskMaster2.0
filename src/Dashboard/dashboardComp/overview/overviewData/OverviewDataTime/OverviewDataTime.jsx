import TimerEchart from "echarts-for-react";
import "./OverviewDataTime.css";
import { useEffect, useState } from "react";
import { BsQuestionLg } from "react-icons/bs";
import LearningTimeBreakDown from "./LearningTimeBreakDown";
const OverviewDataTime = () => {
	const [usingTime, setUsingTime] = useState([])
	const [showMeTimeDetail, setShowMeTimeDetail] = useState(false)
	const staticValue = 750
	useEffect(() => {
		const getStopWatch = JSON.parse(localStorage.getItem("dataForRecently"));
		if (getStopWatch) {
			setUsingTime(getStopWatch)
		}
	}, [])

	useEffect(() => {
		const handlerDataForRecently = () => {
			const getStopWatch = JSON.parse(localStorage.getItem("dataForRecently"));
			if (getStopWatch) {
				setUsingTime(getStopWatch)
			}
		}

		window.addEventListener("storage", handlerDataForRecently)

		return () => {
			window.removeEventListener("storage", handlerDataForRecently)
		}
	})

	const hoursInMilliseconds = usingTime.map(obj => obj.duration).reduce((acc, curr) => acc + curr, 0)
	const hours = hoursInMilliseconds / (60 * 60 * 1000)
	const option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			top: '0%',
			left: 'center'
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: ['65%', '70%'],
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: hours, "name": "Hours" },
					{ value: staticValue - hours, "name": "Finish" },
				],
				color: ['#01c380', '#696e793c']
			}
		]
	};

	return (
		<div className="OverviewDataTime">
			<div className="time_data">
				<h2>Time</h2>
				<span>{parseInt((hours / staticValue) * 100)}%</span>
			</div>
			<TimerEchart option={option} style={{ height: "150px", width: "100%" }} />
			<BsQuestionLg onClick={() => setShowMeTimeDetail(prev => !prev)} />
			{showMeTimeDetail ? (<LearningTimeBreakDown />)
				: null}
		</div>
	)
}

export default OverviewDataTime;