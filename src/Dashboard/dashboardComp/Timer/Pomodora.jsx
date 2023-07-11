import PomodoraPieEchart from "echarts-for-react";
import { useEffect, useState } from "react";
import { BsFillPauseCircleFill, BsFillSave2Fill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

import { GoStop } from "react-icons/go";
import moment from "moment/moment";
const Pomodora = () => {

	const pomodoraInMilliSeconds = 25 * 60 * 1000;
	const [timeValue, setTimeValue] = useState(pomodoraInMilliSeconds)
	const [validTime, setValidTime] = useState(false)
	const [runPomodora, setRunPomodora] = useState(false)
	const pomodoraMin = moment(timeValue).format("mm:ss")
	const [savePomodoraTime, setSavePomodoraTime] = useState(0);

	const launchPomodora = () => {
		setRunPomodora(prev => !prev)
	}
	const resetTimer = () => {
		setRunPomodora(false)
		setTimeValue(pomodoraInMilliSeconds)
	}
	useEffect(() => {
		let timeOut;
		if (runPomodora) {
			timeOut = setTimeout(() => {
				setTimeValue(prev => prev - 1000)
			}, 1000)
		}

		if (timeValue === 0) {
			setRunPomodora(false)
			setTimeValue(pomodoraInMilliSeconds)
		}

		return () => {
			clearTimeout(timeOut)
		}
	}, [timeValue, runPomodora, pomodoraInMilliSeconds])
	
	const timeSaver = () => {
		setRunPomodora(false)
		const saveOrNot = window.confirm("Are you sure to save this time")
		if (saveOrNot) {
			setValidTime(saveOrNot)
			const usingTime = pomodoraInMilliSeconds - timeValue
      setSavePomodoraTime(prev => prev += usingTime)
		}
	}

	useEffect(() => {
		if (validTime) {
			localStorage.setItem("savePomodoraTime", JSON.stringify(savePomodoraTime))
		}
		setTimeValue(pomodoraInMilliSeconds)
	}, [savePomodoraTime, validTime, pomodoraInMilliSeconds])
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
					{ value: (pomodoraInMilliSeconds - timeValue) },
					{ value: timeValue },
				],
				color: ['#01c380', '#696e793c']
			}
		]
	};
	return (
		<div className="pomodora">
			<h2>Pomodora</h2>
			<PomodoraPieEchart option={option} style={{ width: "100%" }} />
			<span>{pomodoraMin}</span>
			<div className="pomodora_controler">
				{!runPomodora ? (<AiFillPlayCircle onClick={() => launchPomodora()} />) : (<BsFillPauseCircleFill onClick={() => launchPomodora()} />)}
				<GoStop onClick={() => resetTimer()} />
				<BsFillSave2Fill onClick={() => timeSaver()} />
			</div>
		</div>
	)
}

export default Pomodora;