import ProgressEchart from "echarts-for-react";
import "./progressoverview.css";
import ProgressSkills from './ProgressSkills';
import { useEffect, useState } from "react";
const ProgressOverview = () => {
	const [everyDayTasksForLineChart, setEveryDayTasksForLineChart] = useState([])
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

	console.log(everyDayTasksForLineChart)
	const everyDayDate = everyDayTasksForLineChart.map(date => date.update)
	const everyDayValue = everyDayTasksForLineChart.map(array => {
		const dailytasks = array.tasksInDay
		const length = dailytasks.length
		const complete = dailytasks.filter(task => task.complete === true).length
		return (complete / length) * 100
	})
	console.log(everyDayValue)
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
			</div>
			<div className="progress_skills">
				<ProgressSkills />
			</div>
		</div>
	)
}

export default ProgressOverview;