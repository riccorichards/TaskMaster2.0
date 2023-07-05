import ProgressEchart from "echarts-for-react";
import "./progressoverview.css";
import ProgressSkills from './ProgressSkills';
const ProgressOverview = () => {
	const option = {
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: [820, 932, 901, 934, 1290, 1330, 1320],
				type: 'line',
				smooth: true
			}
		]
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