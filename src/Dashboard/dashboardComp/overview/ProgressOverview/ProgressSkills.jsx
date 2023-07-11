import SkillsEchart from "echarts-for-react";
import { useEffect, useState } from "react";

const ProgressSkills = () => {
	const [workSpace, setWorkSpace] = useState([])

	useEffect(() => {
		const workTitle = JSON.parse(localStorage.getItem("everydayTaskData"))
		if (workTitle && workTitle.length > 0) {
			setWorkSpace(workTitle)
		}
	}, [])
	console.log(workSpace)
	const option = {
		title: {
			text: 'Skills Pie',
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
			min: 80,
			max: 600,
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
				data: [
					{ value: 335, name: 'Direct' },
					{ value: 310, name: 'Email' },
					{ value: 274, name: 'Union Ads' },
					{ value: 235, name: 'Video Ads' },
					{ value: 450, name: 'Search Engine' },
					{ value: 453, name: 'Direct' },
					{ value: 320, name: 'Email' },
					{ value: 274, name: 'Union Ads' },
					{ value: 235, name: 'Video Ads' },
					{ value: 400, name: 'Search Engine' },
				].sort(function (a, b) {
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
					smooth: 0.5,
					length: 10,
					length2: 20
				},
				itemStyle: {
					color: '#01c380',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.9)'
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