import QualityEchart from "echarts-for-react";
import "./OverviewDataQuality.css";
import { useEffect, useState } from "react";
import { BsQuestionLg } from "react-icons/bs";

const OverviewDataQuality = () => {
	const [getDataForQuality, setGetDataForQuality] = useState([])
	const [showQualityDetails, setShowQualityDetails] = useState(false)
	useEffect(() => {
		const getSavedEveryDayTask = JSON.parse(localStorage.getItem("everydayTaskData"))
		if (getSavedEveryDayTask && getSavedEveryDayTask.length > 0) {
			setGetDataForQuality(getSavedEveryDayTask)
		}
	}, [])

	useEffect(() => {
		const handlerUpdateEveryDayTask = () => {

			const updateSavedEveryDayTask = JSON.parse(localStorage.getItem("everydayTaskData"))
			if (updateSavedEveryDayTask && updateSavedEveryDayTask.length > 0) {
				setGetDataForQuality(updateSavedEveryDayTask)
			}
		}
		window.addEventListener("storage", handlerUpdateEveryDayTask)

		return () => {
			window.removeEventListener("storage", handlerUpdateEveryDayTask)
		}
	})

	const everyDayValue = getDataForQuality.map(array => {
		const dailytasks = array.tasksInDay
		const length = dailytasks.length
		const complete = dailytasks.filter(task => task.complete === true).length
		return parseInt((complete / length) * 100)
	})
	const length = everyDayValue.length
	const quality = everyDayValue.reduce((acc, curr) => acc + curr, 0) / length

	
	const option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			top: '0%',
			left: "letf"
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
					{ value: quality, "name": "avg%" },
					{ value: 100 - quality, "name": "diff" },
				],
				color: ['#01c380', '#696e793c']
			}
		]
	};
	return (
		<div className="OverviewDataQuality">
			<div className="quality_data">
				<h2>Qual</h2>
				<span>{parseInt(quality) || 0}%</span>
			</div>
			<QualityEchart option={option} style={{ height: "150px", width: "100%" }} />
			<BsQuestionLg onClick={() => setShowQualityDetails(prev => !prev)} />
			{showQualityDetails ? <div className="qualityDetails">
       <p>Unlock the Overall Quality of Your Work: Calculated by Summing Daily Quality Values, Dividing by Length, and Multiplying by 100 for a Comprehensive Percentage Score</p>
			</div>
				: null}
		</div>
	)
}

export default OverviewDataQuality;