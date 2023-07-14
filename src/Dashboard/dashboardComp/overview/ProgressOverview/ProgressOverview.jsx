import ProgressEchart from "echarts-for-react";
import "./progressoverview.css";
import ProgressSkills from './ProgressSkills';
import { useEffect, useState } from "react";
import { BsQuestionLg } from "react-icons/bs";

const ProgressOverview = () => {
	const [everyDayTasksForLineChart, setEveryDayTasksForLineChart] = useState([])
	const [showMeLineChartDetails, setShowMeLineChartDetails] = useState(false)
	const [showMeSkillsPieDetails, setShowMeSkillsPieDetails] = useState(false)

	useEffect(() => {
		const getSavedEveryDayTask = JSON.parse(localStorage.getItem("everydayTaskData"))
		if (getSavedEveryDayTask && getSavedEveryDayTask.length > 0) {
			setEveryDayTasksForLineChart(getSavedEveryDayTask)
		}
	}, [])

	useEffect(() => {
		const handlerUpdateEveryDayTask = () => {

			const updateSavedEveryDayTask = JSON.parse(localStorage.getItem("everydayTaskData"))
			if (updateSavedEveryDayTask && updateSavedEveryDayTask.length > 0) {
				setEveryDayTasksForLineChart(updateSavedEveryDayTask)
			}
		}
		window.addEventListener("storage", handlerUpdateEveryDayTask)

		return () => {
			window.removeEventListener("storage", handlerUpdateEveryDayTask)
		}
	})

	const everyDayDate = everyDayTasksForLineChart.map(date => date.update)
	const everyDayValue = everyDayTasksForLineChart.map(array => {
		const dailytasks = array.tasksInDay
		const length = dailytasks.length
		const complete = dailytasks.filter(task => task.complete === true).length
		return parseInt((complete / length) * 100)
	})

	const option = {
		xAxis: {
			type: 'category',
			data: everyDayDate
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				color: '#01c380',
				fontSize: 12,
			},
			axisTick: {
				show: false,
			},
		},
		series: [
			{
				data: everyDayValue,
				type: 'line',
				smooth: true,
				lineStyle: {
					color: '#01c380',
					width: 4,
				},
				symbol: 'circle',
				symbolSize: 10,
				itemStyle: {
					color: '#01c380',
				},
			}
		],
		tooltip: {
			backgroundColor: '#01c380',
			borderColor: 'white',
			textStyle: {
				color: 'black',
				fontSize: 14,
			},
		},
	};
	return (
		<div className="ProgressOverview">
			<div className="during_progress">
				<ProgressEchart option={option} style={{ height: "350px", width: "100%" }} />
				<BsQuestionLg onClick={() => setShowMeLineChartDetails(prev => !prev)} />
				{showMeLineChartDetails ? <div className="lineChartDetails">
					<p>Here, we calculate the daily task quality by taking the completed tasks for the day and dividing it by the total tasks assigned. We then multiply this result by 100 to obtain a percentage, giving you insights into the quality of your daily progress.</p>
				</div>
					: null}
			</div>
			<div className="progress_skills">
				<ProgressSkills />
				<BsQuestionLg onClick={() => setShowMeSkillsPieDetails(prev => !prev)} />
				{showMeSkillsPieDetails ? <div className="skillsPieDetails">
					<p>Discover the Top Seven Learning Topics Derived from Recent Activity</p>
				</div>
					: null}
			</div>
		</div>
	)
}

export default ProgressOverview;