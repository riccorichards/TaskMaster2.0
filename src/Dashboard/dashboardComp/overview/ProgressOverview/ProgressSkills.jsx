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

	useEffect(() => {
		const handlerWorkSpace = () => {
			const updateWorkTitle = JSON.parse(localStorage.getItem("dataForRecently"))
			if (updateWorkTitle && updateWorkTitle.length > 0) {
				setWorkSpace(updateWorkTitle)
			}
		}

		window.addEventListener("storage", handlerWorkSpace)

		return () => {
			window.removeEventListener("storage", handlerWorkSpace)
		}
	}, [])


	const countByWorkSpace = _.countBy(workSpace, 'workSpace');
	const groupByWorkSpace = _.groupBy(workSpace, 'workSpace')
	const sumByGroupsWorkSpace = _.mapValues(groupByWorkSpace, (group) => _.sumBy(group, "duration"))



	const calculate = (completeTask, timeDuration) => {

		const efficientTask = 0.7 * (completeTask / timeDuration)
		const efficientDuration = 0.3 * (timeDuration)
		return (efficientDuration + efficientTask) / 400000
	}

	const topLearnedTopics = _.map(countByWorkSpace, (value, key) => ({
		value: calculate(value, sumByGroupsWorkSpace[key]).toFixed(2), name: key
	})).sort((a, b) => b.value - a.value).slice(0, 7);


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
			min: 20,
			max: 950,
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
				data: topLearnedTopics,
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
		<SkillsEchart option={option} style={{ height: "100%" }} />
	)
}

export default ProgressSkills;