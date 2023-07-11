import { useCallback, useEffect, useState } from "react";
import { LuDelete } from "react-icons/lu";
import { MdCloudDone } from "react-icons/md";
import "./weeklyTask.css";
const WeeklyTask = () => {
	const [weeklyTasks, setWeeklyTasks] = useState([])
	const [everyWeekTask, setEveryWeekTask] = useState([])
	const [weeklyTaskInput, setWeeklyTaskInput] = useState("")

	const handlerWeeklyTask = e => {
		setWeeklyTaskInput(e.target.value.split(","))
	}

	const saveWeeklyTaskToLocal = useCallback(() => {
		localStorage.setItem("weeklyTask", JSON.stringify(weeklyTasks))
	}, [weeklyTasks])

	useEffect(() => {
		const getSavedEveryWeekTask = JSON.parse(localStorage.getItem("everyWeekTaskData"))
		if (getSavedEveryWeekTask && getSavedEveryWeekTask.length > 0) {
			setEveryWeekTask(getSavedEveryWeekTask)
		}
	}, [])

	useEffect(() => {
		const savedWeeklyTaskFromLocal = JSON.parse(localStorage.getItem("weeklyTask"))
		if (savedWeeklyTaskFromLocal && savedWeeklyTaskFromLocal.length > 0) {
			setWeeklyTasks(savedWeeklyTaskFromLocal)
		}
	}, [])


	useEffect(() => {
		saveWeeklyTaskToLocal()
	}, [weeklyTasks, saveWeeklyTaskToLocal])

	const addWeeklyTask = () => {
		if (weeklyTaskInput !== "") {
			const newTask = {
				id: Date.now(),
				title: weeklyTaskInput[0],
				text: weeklyTaskInput[1],
				complete: false
			}
			setWeeklyTasks(prev => [newTask, ...prev])
			setWeeklyTaskInput("")
		} else {
			alert("The task field cannot be empty")
		}
	}

	const removeWeeklyTask = (removeId) => {
		const withoutRemoveTask = weeklyTasks.filter(task => task.id !== removeId)
		setWeeklyTasks(withoutRemoveTask)
	}

	const doneTask = (matchID) => {
		setWeeklyTasks(prev => {
			return prev.map(task => {
				return task.id === matchID.id ? { ...task, complete: !task.complete } : task
			})
		})
	}

	const storeForDashboard = () => {
		setEveryWeekTask(prev => [...prev, weeklyTasks])
		setWeeklyTasks([])
	}

	useEffect(() => {
		localStorage.setItem("everyWeekTaskData", JSON.stringify(everyWeekTask))
	}, [everyWeekTask])
	return (
		<div className="weeklyTask">
			<h2>Weekly Tasks</h2>
			<input type="text"
				placeholder="Add Weekly Tasks"
				value={weeklyTaskInput}
				onChange={handlerWeeklyTask}
			/>
			<button onClick={() => addWeeklyTask()}>Add Tasks</button>
			<div className="task_area">
				{weeklyTasks.map(task => (
					<div className={`each_Task ${task.complete ? "active" : ""}`} key={task.id} >
						<div>
							<h4>{task.title}</h4>
							<p>{task.text}</p>
						</div>
						<div className="Weekly_svgBTNs">
							<MdCloudDone onClick={() => doneTask(task)} />
							<LuDelete onClick={() => removeWeeklyTask(task.id)} />
						</div>
					</div>
				))}
			</div>
			<button style={{ alignSelf: "flex-end" }} onClick={() => storeForDashboard()}>Complete</button>
			<div className="weekly_decoration_line" />
		</div>
	)
}

export default WeeklyTask