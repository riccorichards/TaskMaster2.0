import SkillsEchart from "echarts-for-react";
import { useEffect, useState } from "react";
import _ from "lodash";

const ProgressSkills = () => {
	const [workSpace, setWorkSpace] = useState([])

	useEffect(() => {
		const workTitle = JSON.parse(localStorage.getItem("dataForRecently"))
		if (workTitle && workTitle.length > 0) {
			setWorkSpace(workTitle)
		}
	}, [])

	const countByWorkSpace = _.countBy(workSpace, 'workSpace');
	const topLearnedTopics = _.map(countByWorkSpace, (count, name) => ({ value: count, name: name})).slice(0, 8);
	const option = {
		title: {
			text: 'Top Learned Topics',
			left: 'center',
			top: 20,
			textStyle: {
				color: '#ccc'
			}
		},
		tooltip: {
			trigger: 'item'
		},
		visualMap: {
			show: false,
			min: .8,
			max: 4.5,
			inRange: {
				colorLightness: [1, 0]
			}
		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: '55%',
				center: ['50%', '50%'],
				data: topLearnedTopics.sort(function (a, b) {
					return b.value - a.value;
				}),
				roseType: 'radius',
				label: {
					color: '#fff'
				},
				labelLine: {
					lineStyle: {
						color: '#01c380'
					},
					smooth: 0.1,
					length: 5,
					length2: 10
				},
				itemStyle: {
					color: '#01c380',
					shadowBlur: 400,
					shadowColor: 'rgba(0, 0, 0, 0.8)'
				},
				animationType: 'scale',
				animationEasing: 'elasticOut',
			}
		]
	};

	return (
		<SkillsEchart option={option} style={{ height: "100%", }} />
	)
}

export default ProgressSkills;