import RestFifteenPieEchart from "echarts-for-react";
import { useEffect, useState } from "react";
import { BsFillPauseCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { GoStop } from "react-icons/go";
import moment from "moment/moment";
const RestFifteen = () => {

	const restFifteenInMilliSeconds = 15 * 60 * 1000;
	const [timeValue, setTimeValue] = useState(restFifteenInMilliSeconds)
	const [restFifteen, setRestFifteen] = useState(false)
	const restFifteenMin = moment(timeValue).format("mm:ss")

	const launchRestFifteen = () => {
		setRestFifteen(prev => !prev)
	}
	const resetTimer = () => {
		setRestFifteen(false)
		setTimeValue(restFifteenInMilliSeconds)
	}
	useEffect(() => {
		let timeOut;
		if (restFifteen) {
			timeOut = setTimeout(() => {
				setTimeValue(prev => prev - 1000)
			}, 1000)
		}

		if (timeValue === 0) {
			setRestFifteen(false)
			setTimeValue(restFifteenInMilliSeconds)
		}

		return () => {
			clearTimeout(timeOut)
		}
	}, [timeValue, restFifteen, restFifteenInMilliSeconds])
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
					{ value: (restFifteenInMilliSeconds - timeValue) },
					{ value: timeValue },
				],
				color: ['#01c380', '#696e793c']
			}
		]
	};
	return (
		<div className="rest_five">
			<h2>Rest Fifteen</h2>
			<RestFifteenPieEchart option={option} style={{ width: "100%" }} />
			<span>{restFifteenMin}</span>
			<div className="rest_five_controler">
				{!restFifteen ? (<AiFillPlayCircle onClick={() => launchRestFifteen()} />) : (<BsFillPauseCircleFill onClick={() => launchRestFifteen()} />)}
				<GoStop onClick={() => resetTimer()} />
			</div>
		</div>
	)
}

export default RestFifteen;