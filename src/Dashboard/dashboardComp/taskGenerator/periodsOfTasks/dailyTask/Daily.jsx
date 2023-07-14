import { useEffect, useState, useCallback } from "react";
import { LuDelete } from "react-icons/lu";
import { MdCloudDone } from "react-icons/md";
import "./dailyTask.css";
import moment from "moment/moment";

const storageEventForDailyTasks = new Event("storage");
const lookingAtEveryDayTasksChanges = new Event("storage")
const Daily = () => {
	const [dailyTaskInput, setDailyTaskInput] = useState("")
	const [dailyTasks, setDailyTasks] = useState([])
	const [everydayTask, setEverydayTask] = useState([])

	const handlerDailyTask = e => {
		setDailyTaskInput(e.target.value.split(","))
	}

	const saveDailyTaskToStorage = useCallback(() => {
		localStorage.setItem("dailyTasks", JSON.stringify(dailyTasks))
		window.dispatchEvent(storageEventForDailyTasks);
	}, [dailyTasks])

	useEffect(() => {
		const savedDailyTaskFromLocal = JSON.parse(localStorage.getItem("dailyTasks"))
		if (savedDailyTaskFromLocal && savedDailyTaskFromLocal.length > 0) {
			setDailyTasks(savedDailyTaskFromLocal)
		}
	}, [])

	useEffect(() => {
		saveDailyTaskToStorage()
	}, [dailyTasks, saveDailyTaskToStorage])

	useEffect(() => {
		const getSavedEveryDayTask = JSON.parse(localStorage.getItem("everydayTaskData"))
		if (getSavedEveryDayTask && getSavedEveryDayTask.length > 0) {
			setEverydayTask(getSavedEveryDayTask)
		}
	}, [])

	const storeForDashboard = () => {
		const discussEachDayTasks = {
			id: Date.now(),
			tasksInDay: dailyTasks,
			update: moment().format("MMM Do")
		}
		setEverydayTask(prev => [...prev, discussEachDayTasks])
		setDailyTasks([])
	}

	//if (everydayTask.length > 0) {
	//	localStorage.setItem("everydayTaskData", JSON.stringify(everydayTask))
	//	window.dispatchEvent(lookingAtEveryDayTasksChanges)
	//}
	const saveEveryDayTasks = useCallback(() => {
		localStorage.setItem("everydayTaskData", JSON.stringify(everydayTask))
		window.dispatchEvent(lookingAtEveryDayTasksChanges)
	}, [everydayTask])

	useEffect(() => {
		saveEveryDayTasks();
	}, [everydayTask, saveEveryDayTasks])

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
		if (dailyTasks.length === 1) {
			localStorage.removeItem("dailyTasks")
		}
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