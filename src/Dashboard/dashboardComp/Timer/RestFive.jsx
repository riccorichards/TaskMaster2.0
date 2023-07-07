import RestFivePieEchart from "echarts-for-react";
import { useEffect, useState } from "react";
import { BsFillPauseCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { GoStop } from "react-icons/go";
import moment from "moment/moment";
const RestFive = () => {

	const restFiveInMilliSeconds = 5 * 60 * 1000;
	const [timeValue, setTimeValue] = useState(restFiveInMilliSeconds)
	const [restFive, setRestFive] = useState(false)
	const restFiveMin = moment(timeValue).format("mm:ss")

	const launchRestFive = () => {
		setRestFive(prev => !prev)
	}
	const resetTimer = () => {
		setRestFive(false)
		setTimeValue(restFiveInMilliSeconds)
	}
	useEffect(() => {
		let timeOut;
		if (restFive) {
			timeOut = setTimeout(() => {
				setTimeValue(prev => prev - 1000)
			}, 1000)
		}

		if (timeValue === 0) {
			setRestFive(false)
			setTimeValue(restFiveInMilliSeconds)
		}

		return () => {
			clearTimeout(timeOut)
		}
	}, [timeValue, restFive, restFiveInMilliSeconds])
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
					{ value: (restFiveInMilliSeconds - timeValue) },
					{ value: timeValue },
				],
				color: ['#01c380', '#696e793c']
			}
		]
	};
	return (
		<div className="rest_five">
			<h2>Rest Five</h2>
			<RestFivePieEchart option={option} style={{ width: "100%" }} />
			<span>{restFiveMin}</span>
			<div className="rest_five_controler">
				{!restFive ? (<AiFillPlayCircle onClick={() => launchRestFive()} />) : (<BsFillPauseCircleFill onClick={() => launchRestFive()} />)}
				<GoStop onClick={() => resetTimer()} />
			</div>
		</div>
	)
}

export default RestFive;