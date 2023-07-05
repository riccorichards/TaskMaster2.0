import TaskEchart from "echarts-for-react";
import "./OverviewDataTask.css";
const OverviewDataTask = () => {
	const option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			top: '5%',
			left: 'center'
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: ['65%', '70%'],
				avoidLabelOverlap: false,
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 50 },
					{ value: 50 },
				]
			}
		]
	};
	return (
		<div className="OverviewDataTask">
			<div className="task_data">
				<h2>Task</h2>
				<span>50%</span>
			</div>
			<TaskEchart option={option} style={{ height: "150px", width: "100%" }} />
		</div>
	)
}

export default OverviewDataTask;