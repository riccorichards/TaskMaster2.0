import PomodoraPieEchart from "echarts-for-react";
import { useEffect, useRef, useState } from "react";
import { BsFillPauseCircleFill, BsFillSave2Fill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { GoStop } from "react-icons/go";
import moment from "moment/moment";

const readyForRecentlyInfo = new Event("storage")

const StopWatch = () => {
	const maxWorkingTime = (8 * 60 * 60 * 1000);
	const [timeValue, setTimeValue] = useState(maxWorkingTime)
	const [runStopWatch, setRunStopWatch] = useState(false)
	const [validTime, setValidTime] = useState(false)
	const [showWorkSpaceInput, setShowWorkSpaceInput] = useState(false)
	const [disable, setDisable] = useState(false)
	const [recentlyArr, setRecentlyArr] = useState([])
	const [getDailyTasks, setGetDailyTasks] = useState([])
	const animationFrameId = useRef(null)
	const fromTheSamePlace = useRef(null)
	useEffect(() => {
		const getTaskStatus = JSON.parse(localStorage.getItem("dailyTasks"))
		if (getTaskStatus && getTaskStatus.length > 0) {
			setGetDailyTasks(getTaskStatus)
		}
	}, [])

	useEffect(() => {
		const handlerStorageChanges = () => {
			const getDailyTasks = JSON.parse(localStorage.getItem("dailyTasks"))
			if (getDailyTasks && getDailyTasks.length > 0) {
				setGetDailyTasks(getDailyTasks)
			}
		}

		window.addEventListener("storage", handlerStorageChanges)

		return () => {
			window.removeEventListener("storage", handlerStorageChanges)
		}
	}, [getDailyTasks])

	useEffect(() => {
		const getDataForRecently = JSON.parse(localStorage.getItem("dataForRecently"))
		if (getDataForRecently && getDataForRecently.length > 0) {
			setRecentlyArr(getDataForRecently)
		}
	}, [])

	const resetTimer = () => {
		setRunStopWatch(false)
		setTimeValue(maxWorkingTime)
		fromTheSamePlace.current = null
	}

	useEffect(() => {
		const timeStart = Date.now()
		animationFrameId.current = requestAnimationFrame(updateTimer);
		function updateTimer() {
			const curretTime = Date.now()
			const elapsedTime = Math.floor((curretTime - timeStart) / 1000)

			if (runStopWatch && !fromTheSamePlace.current) {
				setShowWorkSpaceInput(false)
				if (maxWorkingTime <= elapsedTime) {
					setRunStopWatch(false)
					setTimeValue(maxWorkingTime)
				} else {
					setTimeValue(maxWorkingTime - elapsedTime)
					animationFrameId.current = requestAnimationFrame(updateTimer);
				}
				setDisable(true)
			} else {
				setDisable(false)
			}

			if (runStopWatch && fromTheSamePlace.current) {
				setShowWorkSpaceInput(false)
				if (fromTheSamePlace.current <= elapsedTime) {
					setRunStopWatch(false)
					setTimeValue(maxWorkingTime)
				} else {
					setTimeValue(fromTheSamePlace.current - elapsedTime)
					animationFrameId.current = requestAnimationFrame(updateTimer);
				}
				setDisable(true)
			} else {
				setDisable(false)
			}
		}

		return () => {
			cancelAnimationFrame(animationFrameId.current)
		}
	}, [runStopWatch, maxWorkingTime])
	const matchingTask = getDailyTasks.filter(task => task.readyToWork)
	const timeSaver = () => {
		setRunStopWatch(false)
		const saveOrNot = window.confirm("Are you sure to save this time")
		if (saveOrNot) {
			setValidTime(saveOrNot)
			const usingTime = maxWorkingTime - timeValue
			for (let i = 0; i < getDailyTasks.length; i++) {
				const task = getDailyTasks[i]
				if (task.readyToWork) {
					setRecentlyArr(prev => {
						const id = prev.length > 0 ? prev[0].id + 1 : 1
						const latestActivity = {
							id: id,
							workSpace: task.title,
							task: task.text,
							duration: usingTime * 1000,
							status: task.complete,
							update: moment().format("MMMM Do, hh:mm"),
						}
						return [latestActivity, ...prev]
					})
				}
			}
		}
	}
	useEffect(() => {
		if (validTime) {
			localStorage.setItem("dataForRecently", JSON.stringify(recentlyArr))
			setTimeValue(maxWorkingTime)
			window.dispatchEvent(readyForRecentlyInfo)
		}
	}, [validTime, maxWorkingTime, recentlyArr])

	const pauseStopWatch = () => {
		setRunStopWatch(false)
		fromTheSamePlace.current = timeValue
	}
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

	const stopWatchMin = moment.utc(timeValue * 1000).format("hh:mm:ss");
	return (
		<div className="stopWatch_wrapper">
			<h2>StopWatch</h2>
			<PomodoraPieEchart option={option} style={{ width: "100%" }} />
			<span>{stopWatchMin}</span>
			<button disabled={disable} className="showWorkSpaceInput" onClick={() => setShowWorkSpaceInput(prev => !prev)}>Time For</button>
			{showWorkSpaceInput ? <>
				{matchingTask && matchingTask.map(task => (
					<div className="taskDetailsForTimer" key={task.id}>
						<h3>{task.title}</h3>
						<p>{task.text}</p>
					</div>
				))}
			</> : null}
			<div className="stopWatch_controler">
				{!runStopWatch ? (<AiFillPlayCircle onClick={() => setRunStopWatch(true)} />) : (<BsFillPauseCircleFill onClick={() => pauseStopWatch()} />)}
				<GoStop onClick={() => resetTimer()} />
				<BsFillSave2Fill onClick={() => timeSaver()} />
			</div>
		</div>
	)
}

export default StopWatch;