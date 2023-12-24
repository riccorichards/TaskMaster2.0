import { useEffect, useState, useCallback } from "react";
import { LuDelete } from "react-icons/lu";
import { MdCloudDone } from "react-icons/md";
import { RxLapTimer } from "react-icons/rx";
import "./dailyTask.css";
import moment from "moment/moment";

const storageEventForDailyTasks = new Event("storage");
const lookingAtEveryDayTasksChanges = new Event("storage")
const Daily = () => {
	const [dailyTaskInput, setDailyTaskInput] = useState("")
	const [dailyTasks, setDailyTasks] = useState([])
	const [everydayTask, setEverydayTask] = useState([])
	const [startDays, setStartDays] = useState(1)

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
		setStartDays(prev => prev + 1)
		const discussEachDayTasks = {
			id: Date.now(),
			tasksInDay: dailyTasks,
			update: moment().format("MMM Do"),
			days: startDays
		}
		setEverydayTask(prev => [...prev, discussEachDayTasks])
		setDailyTasks([])
	}

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
				complete: false,
				readyToWork: false
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
	const readyToWork = (workID) => {
		setDailyTasks(prev => prev.map(task => task.id === workID.id ? { ...task, readyToWork: !task.readyToWork } : task))
	}

	return (
		<div className="daily_tasks">
			<h2>Daily Tasks</h2>
			<div className="dailyInput">
				<input type="text"
					placeholder="Work Space, Add Task"
					value={dailyTaskInput}
					onChange={handlerDailyTask}
				/>
				<span>It is recommented to separate title of task by ","</span>
			</div>
			<button onClick={() => addDailyTask()}>Add Tasks</button>
			<div className="task_area">
				{dailyTasks.map(task => (
					<div className={`each_Task ${task.complete ? "active" : ""} ${task.readyToWork ? "readyToWork" : ""}`} key={task.id} >
						<div className="each_tasks_header">
							<h4>{task.title}</h4>
							<p>{task.text}</p>
						</div>
						<div className="daily_svgBTNs">
							<RxLapTimer onClick={() => readyToWork(task)} />
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