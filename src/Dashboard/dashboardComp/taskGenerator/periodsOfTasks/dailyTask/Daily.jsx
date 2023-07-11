import { useCallback, useEffect, useState } from "react";
import { LuDelete } from "react-icons/lu";
import { MdCloudDone } from "react-icons/md";
import "./dailyTask.css";

const Daily = () => {
	const [dailyTaskInput, setDailyTaskInput] = useState("")
	const [dailyTasks, setDailyTasks] = useState([])
	const [everydayTask, setEverydayTask] = useState([])


	const handlerDailyTask = e => {
		setDailyTaskInput(e.target.value.split(","))
	}

	const saveTasksToLocal = useCallback(() => {
		if (dailyTasks.length > 0) {
			localStorage.setItem("dailyTasks", JSON.stringify(dailyTasks))
		} else {
			localStorage.removeItem("dailyTasks")
		}
	}, [dailyTasks])

	useEffect(() => {
		const getSavedEveryDayTask = JSON.parse(localStorage.getItem("everydayTaskData"))
		if (getSavedEveryDayTask && getSavedEveryDayTask.length > 0) {
			setEverydayTask(getSavedEveryDayTask)
		}
	}, [])

	useEffect(() => {
		const saveTasksFromLocal = JSON.parse(localStorage.getItem("dailyTasks"))
		if (saveTasksFromLocal) {
			setDailyTasks(saveTasksFromLocal)
		}
	}, [])

	useEffect(() => {
		saveTasksToLocal()
	}, [dailyTasks, saveTasksToLocal])


	const storeForDashboard = () => {
		setEverydayTask(prev => [...prev, dailyTasks])
		setDailyTasks([])
	}

	useEffect(() => {
		localStorage.setItem("everydayTaskData", JSON.stringify(everydayTask))
	}, [everydayTask])

	const addDailyTask = () => {
		if (dailyTaskInput !== "") {
			const newTask = {
				id: Date.now(),
				title: dailyTaskInput[0],
				text: dailyTaskInput[1],
				complete: false
			}
			setDailyTasks(prev => [newTask, ...prev])
			setDailyTaskInput("")
		} else {
			alert("The task field cannot be empty")
		}
	}
	const removeDailyTask = (removeId) => {
		const withoutRemoveTask = dailyTasks.filter(task => task.id !== removeId)
		setDailyTasks(withoutRemoveTask)
	}

	const doneTask = (matchID) => {
		setDailyTasks(prev => prev.map(task => task.id === matchID.id ? { ...task, complete: !task.complete } : task)
		)
	}
	return (
		<div className="daily_tasks">
			<h2>Daily Tasks</h2>
			<input type="text"
				placeholder="Work Space, Add Task"
				value={dailyTaskInput}
				onChange={handlerDailyTask}
			/>
			<button onClick={() => addDailyTask()}>Add Tasks</button>
			<div className="task_area">
				{dailyTasks.map(task => (
					<div className={`each_Task ${task.complete ? "active" : ""}`} key={task.id} >
						<div className="each_tasks_header">
							<h4>{task.title}</h4>
							<p>{task.text}</p>
						</div>
						<div className="daily_svgBTNs">
							<MdCloudDone onClick={() => doneTask(task)} />
							<LuDelete onClick={() => removeDailyTask(task.id)} />
						</div>
					</div>
				))}
			</div>
			<button style={{ alignSelf: "flex-end" }} onClick={() => storeForDashboard()}>Complete</button>
			<div className="daily_decoration_line" />
		</div>
	)
}

export default Daily;