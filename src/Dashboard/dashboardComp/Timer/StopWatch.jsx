import PomodoraPieEchart from "echarts-for-react";
import { useCallback, useEffect, useState } from "react";
import { BsFillPauseCircleFill, BsFillSave2Fill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { GoStop } from "react-icons/go";
import moment from "moment/moment";
import DetectWorkSpace from "./DetectWorkSpace";
const StopWatch = () => {
	const maxWorkingTime = ((8 * 60 * 60 * 1000) - (4 * 60 * 60 * 1000));
	const [timeValue, setTimeValue] = useState(maxWorkingTime)
	const [runStopWatch, setRunStopWatch] = useState(false)
	const stopWatchMin = moment(timeValue).format("hh:mm:ss")
	const [validTime, setValidTime] = useState(false)
	const [saveStopWatchTime, setSaveStopWatchTime] = useState(0);
	const [showWorkSpaceInput, setShowWorkSpaceInput] = useState(false)
	const [disable, setDisable] = useState(false)
	const [detectedWorkSpace, setDetectedWorkSpace] = useState("")
	const [definedStatusOfTask, setDefinedStatusOfTask] = useState(null)
	const [recentlyArr, setRecentlyArr] = useState([])



	const getTaskStatusFromStorage = useCallback(() => {
		const getTaskStatusFromStorage = JSON.parse(localStorage.getItem("everydayTaskData"))
		const latestDailyTasksArr = getTaskStatusFromStorage[getTaskStatusFromStorage.length - 1]
		for (let i = 0; i < latestDailyTasksArr.length; i++) {
			if (latestDailyTasksArr[i].title === detectedWorkSpace) {
				const status = latestDailyTasksArr[i].complete
				setDefinedStatusOfTask(status)
			} else {
				console.log("no")
			}
		}
	}, [detectedWorkSpace])

	useEffect(() => {
		const getDataForRecently = JSON.parse(localStorage.getItem("dataForRecently"))
		if (getDataForRecently && getDataForRecently.length > 0) {
			setRecentlyArr(getDataForRecently)
		}
		getTaskStatusFromStorage()
	}, [getTaskStatusFromStorage])

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
			setShowWorkSpaceInput(false)
			timeOut = setTimeout(() => {
				setTimeValue(prev => prev - 1000)
			}, 1000)
			setDisable(true)
		} else {
			setDisable(false)
		}

		if (timeValue === 0) {
			setRunStopWatch(false)
			setTimeValue(maxWorkingTime)
		}

		return () => {
			clearTimeout(timeOut)
		}
	}, [timeValue, runStopWatch, maxWorkingTime])

	const timeSaver = () => {
		setRunStopWatch(false)
		const saveOrNot = window.confirm("Are you sure to save this time")
		if (saveOrNot) {
			setValidTime(saveOrNot)
			const usingTime = maxWorkingTime - timeValue
			setSaveStopWatchTime(prev => prev += usingTime)
			if (detectedWorkSpace !== "") {
				setRecentlyArr(prev => {
					const id = prev.length > 0 ? prev[0].id + 1 : 1
					const latestActivity = {
						id: id,
						workSpace: detectedWorkSpace,
						duration: usingTime,
						status: definedStatusOfTask,
						update: moment().format("MMMM Do, hh:mm"),
					}
					return [latestActivity, ...prev]
				})
			}
		}
	}
	useEffect(() => {
		if (validTime) {
			localStorage.setItem("saveStopWatchTime", JSON.stringify(saveStopWatchTime))
			localStorage.setItem("dataForRecently", JSON.stringify(recentlyArr))
			setTimeValue(maxWorkingTime)
		}
	}, [saveStopWatchTime, validTime, maxWorkingTime, detectedWorkSpace, recentlyArr, definedStatusOfTask])


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
		<div className="stopWatch_wrapper">
			<h2>StopWatch</h2>
			<PomodoraPieEchart option={option} style={{ width: "100%" }} />
			<span>{stopWatchMin}</span>
			<button disabled={disable} className="showWorkSpaceInput" onClick={() => setShowWorkSpaceInput(prev => !prev)}>Time For</button>
			{showWorkSpaceInput ? <DetectWorkSpace setDetectedWorkSpace={setDetectedWorkSpace} /> : null}
			<div className="stopWatch_controler">
				{!runStopWatch ? (<AiFillPlayCircle onClick={() => launchStopWatch()} />) : (<BsFillPauseCircleFill onClick={() => launchStopWatch()} />)}
				<GoStop onClick={() => resetTimer()} />
				<BsFillSave2Fill onClick={() => timeSaver()} />
			</div>
		</div>
	)
}

export default StopWatch;