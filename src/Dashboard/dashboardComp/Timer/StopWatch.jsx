import PomodoraPieEchart from "echarts-for-react";
import { useEffect, useState } from "react";
import { BsFillPauseCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { GoStop } from "react-icons/go";
import moment from "moment/moment";
const StopWatch = () => {
	const maxWorkingTime = ((8 * 60 * 60 * 1000) - (4 * 60 * 60 * 1000));
	const [timeValue, setTimeValue] = useState(maxWorkingTime)
	const [runStopWatch, setRunStopWatch] = useState(false)
	const stopWatchMin = moment(timeValue).format("hh:mm:ss")

	const launchStopWatch = () => {
		setRunStopWatch(prev => !prev)
	}
	const resetTimer = () => {
		setRunStopWatch(false)
		setTimeValue(maxWorkingTime)
	}
	useEffect(() => {
		let timeOut;
		if (runStopWatch) {
			timeOut = setTimeout(() => {
				setTimeValue(prev => prev - 1000)
			}, 1000)
		}

		if (timeValue === 0) {
			setRunStopWatch(false)
			setTimeValue(maxWorkingTime)
		}

		return () => {
			clearTimeout(timeOut)
		}
	}, [timeValue, runStopWatch, maxWorkingTime])
	const option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			top: '5%',
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
					{ value: (maxWorkingTime - timeValue) },
					{ value: timeValue },
				],
				color: ['#01c380', '#696e793c']
			}
		]
	};
	return (
		<div className="pomodora">
			<h2>StopWatch</h2>
			<PomodoraPieEchart option={option} style={{ width: "100%" }} />
			<span>{stopWatchMin}</span>
			<div className="pomodora_controler">
				{!runStopWatch ? (<AiFillPlayCircle onClick={() => launchStopWatch()} />) : (<BsFillPauseCircleFill onClick={() => launchStopWatch()} />)}
				<GoStop onClick={() => resetTimer()} />
			</div>
		</div>
	)
}

export default StopWatch;