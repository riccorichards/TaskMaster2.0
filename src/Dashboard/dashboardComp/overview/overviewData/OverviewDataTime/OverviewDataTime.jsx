import TimerEchart from "echarts-for-react";
import "./OverviewDataTime.css";
import { useEffect, useState } from "react";
const OverviewDataTime = () => {
	const [usingTime, setUsingTime] = useState(0)
	const staticValue = 8 * 60 * 60 * 1000
	useEffect(() => {
		const getPomodora = JSON.parse(localStorage.getItem("savePomodoraTime"));
		const getStopWatch = JSON.parse(localStorage.getItem("saveStopWatchTime"));
		if (getPomodora && getStopWatch) {
			setUsingTime(getPomodora + getStopWatch)
		}
	}, [])


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
					{ value: usingTime, "name": "using time" },
					{ value: staticValue - usingTime, "name": "distance" },
				],
				color: ['#01c380', '#696e793c']
			}
		]
	};
	return (
		<div className="OverviewDataTime">
			<div className="time_data">
				<h2>Time</h2>
				<span>{parseInt((usingTime / staticValue) * 100)} %</span>
			</div>
			<TimerEchart option={option} style={{ height: "150px", width: "100%" }} />
		</div>
	)
}

export default OverviewDataTime;