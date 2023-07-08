import "./taskGenerator.css";
import Daily from './periodsOfTasks/dailyTask/Daily';
import WeeklyTask from './periodsOfTasks/weeklyTask/WeeklyTask';

const TaskGenerator = () => {
	return (
		<div className="taskGenerator_wrapper" id="task">
			<div className="daily_tasks_wrapper">
				<Daily />
			</div>
			<div className="weekly_tasks_wrapper">
				<WeeklyTask />
			</div>
		</div>
	)
}

export default TaskGenerator;