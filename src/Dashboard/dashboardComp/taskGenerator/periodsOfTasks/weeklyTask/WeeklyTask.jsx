import { useCallback, useEffect, useState } from "react";
import { LuDelete } from "react-icons/lu";
import { MdCloudDone } from "react-icons/md";
import "./weeklyTask.css";
const WeeklyTask = () => {
	const [weeklyTasks, setWeeklyTasks] = useState([])
	const [weeklyTaskInput, setWeeklyTaskInput] = useState("")

	const handlerWeeklyTask = e => {
		setWeeklyTaskInput(e.target.value)
	}

	const saveWeeklyTaskToLocal = useCallback(() => {
		localStorage.setItem("weeklyTask", JSON.stringify(weeklyTasks))
		
	}, [weeklyTasks]) 
	

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
		const newTask = {
			id: Date.now(),
			text: weeklyTaskInput,
			complete: false
		}
		setWeeklyTasks(prev => [newTask, ...prev])
		setWeeklyTaskInput("")
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
						<p>{task.text}</p>
						<div className="Weekly_svgBTNs">
							<MdCloudDone onClick={() => doneTask(task)} />
							<LuDelete onClick={() => removeWeeklyTask(task.id)} />
						</div>
					</div>
				))}
			</div>
			<div className="weekly_decoration_line" />
		</div>
	)
}

export default WeeklyTask