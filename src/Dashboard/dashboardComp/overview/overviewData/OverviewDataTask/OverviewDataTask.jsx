import TaskEchart from "echarts-for-react";
import "./OverviewDataTask.css";
import { useEffect, useState } from "react";
import { BsQuestionLg } from "react-icons/bs";


const OverviewDataTask = () => {
	const [showDailyTaskData, setShowDailyTaskData] = useState([])
	const [showWeeklyTaskData, setShowWeeklyTaskData] = useState([])
	const [showMeTaskDetails, setShowMeTaskDetails] = useState(false)

	useEffect(() => {
		const dailyTask = JSON.parse(localStorage.getItem("everydayTaskData"))
		if (dailyTask && dailyTask.length > 0) {
			setShowDailyTaskData(dailyTask)
		}
	}, [])

	useEffect(() => {
		const handlerTaskStorage = () => {
			const dailyTask = JSON.parse(localStorage.getItem("everydayTaskData"))
			if (dailyTask && dailyTask.length > 0) {
				setShowDailyTaskData(dailyTask)
			}
		}

		window.addEventListener("storage", handlerTaskStorage)

		return () => {
			window.removeEventListener("storage", handlerTaskStorage)
		}
	})

	useEffect(() => {
		const weeklyTask = JSON.parse(localStorage.getItem("everyWeekTaskData"))
		if (weeklyTask && weeklyTask.length > 0) {
			setShowWeeklyTaskData(weeklyTask)
		}
	}, [])


	useEffect(() => {
		const handlerEveryWeeklyTasksStorege = () => {
			const weeklyTask = JSON.parse(localStorage.getItem("everyWeekTaskData"))
			if (weeklyTask && weeklyTask.length > 0) {
				setShowWeeklyTaskData(weeklyTask)
			}
		}
		window.addEventListener("storage", handlerEveryWeeklyTasksStorege)

		return () => {
			window.removeEventListener("storage", handlerEveryWeeklyTasksStorege)
		}
	})
	const allDailyTask = showDailyTaskData.flat().length
	const allWeeklyTask = showWeeklyTaskData.flat().length
	const wholeTasks = allDailyTask + allWeeklyTask;
	const completeDailyTasks = showDailyTaskData.flat().filter(task => task.complete === true).length
	const completeWeeklyTasks = showWeeklyTaskData.flat().filter(task => task.complete === true).length
	const wholeCompleteTask = completeDailyTasks + completeWeeklyTasks

	const option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			top: '0%',
			left: 'left'
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: ['65%', '70%'],
				avoidLabelOverlap: true,
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 25,
					}
				},
				labelLine: {
					show: true
				},
				data: [
					{ value: wholeCompleteTask, "name": "Complete Tasks" },
					{ value: (wholeTasks - wholeCompleteTask), "name": "Failed Tasks" },
				],
				color: ['#01c380', '#696e793c']
			}
		]
	};
	return (
		<div className="OverviewDataTask">
			<div className="task_data">
				<h2>Task</h2>
				<span>{parseInt(wholeCompleteTask / wholeTasks * 100) || 0} %</span>
			</div>
			<TaskEchart option={option} style={{ height: "150px", width: "100%" }} />
			<BsQuestionLg onClick={() => setShowMeTaskDetails(prev => !prev)} />
			{showMeTaskDetails ? <div className="taskDetails">
       <p>Here, we've implemented a calculation to determine progress by dividing the number of completed tasks by the total tasks, then multiplying it by 100 to obtain a percentage value. This allows you to easily track and visualize your achievements within the project.</p>
			</div>
				: null}
		</div>
	)
}

export default OverviewDataTask;