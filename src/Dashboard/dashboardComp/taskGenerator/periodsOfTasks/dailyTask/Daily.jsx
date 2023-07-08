import { useCallback, useEffect, useState } from "react";
import { LuDelete } from "react-icons/lu";
import { MdCloudDone } from "react-icons/md";
import "./dailyTask.css";

const Daily = () => {
	const [dailyTasks, setDailyTasks] = useState([])
	const [dailyTaskInput, setDailyTaskInput] = useState("")

	const handlerDailyTask = e => {
		setDailyTaskInput(e.target.value)
	}

	const saveTasksToLocal = useCallback(() => {
		localStorage.setItem("dailyTask", JSON.stringify(dailyTasks))
	}, [dailyTasks])

	useEffect(() => {
		const saveTasksFromLocal = JSON.parse(localStorage.getItem("dailyTask"))
		if (saveTasksFromLocal && saveTasksFromLocal.length > 0) {
			setDailyTasks(saveTasksFromLocal)
		}
	}, [])

	useEffect(() => {
		saveTasksToLocal()
	}, [dailyTasks, saveTasksToLocal])

	const addDailyTask = () => {
		if (dailyTaskInput !== "" && dailyTaskInput.trim()) {
			const newTask = {
				id: Date.now(),
				text: dailyTaskInput,
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
				placeholder="Add Daily Tasks"
				value={dailyTaskInput}
				onChange={handlerDailyTask}
			/>
			<button onClick={() => addDailyTask()}>Add Tasks</button>
			<div className="task_area">
				{dailyTasks.map(task => (
					<div className={`each_Task ${task.complete ? "active" : ""}`} key={task.id} >
						<p>{task.text}</p>
						<div className="daily_svgBTNs">
							<MdCloudDone onClick={() => doneTask(task)} />
							<LuDelete onClick={() => removeDailyTask(task.id)} />
						</div>
					</div>
				))}
			</div>
			<div className="daily_decoration_line" />
		</div>
	)
}

export default Daily;