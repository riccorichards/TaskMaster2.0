import TimerEchart from "echarts-for-react";
import "./OverviewDataTime.css";
import { useEffect, useState } from "react";
import { BsQuestionLg } from "react-icons/bs";
const OverviewDataTime = () => {
	const [usingTime, setUsingTime] = useState([])
	const [showMeTimeDetail, setShowMeTimeDetail] = useState(false)
	const staticValue = 300
	useEffect(() => {
		const getStopWatch = JSON.parse(localStorage.getItem("dataForRecently"));
		if (getStopWatch) {
			setUsingTime(getStopWatch)
		}
	}, [])

	useEffect(() => {
		const handlerDataForRecently = () => {
			const getStopWatch = JSON.parse(localStorage.getItem("dataForRecently"));
			if (getStopWatch) {
				setUsingTime(getStopWatch)
			}
		}

		window.addEventListener("storage", handlerDataForRecently)

		return () => {
			window.removeEventListener("storage", handlerDataForRecently)
		}
	})

	const hoursInMilliseconds = usingTime.map(obj => obj.duration).reduce((acc, curr) => acc + curr, 0)
	const hours = hoursInMilliseconds / (60 * 60 * 1000)
	const option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			top: '0%',
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
					{ value: hours, "name": "Hours" },
					{ value: staticValue - hours, "name": "Finish" },
				],
				color: ['#01c380', '#696e793c']
			}
		]
	};

	return (
		<div className="OverviewDataTime">
			<div className="time_data">
				<h2>Time</h2>
				<span>{parseInt((hours / staticValue) * 100)} %</span>
			</div>
			<TimerEchart option={option} style={{ height: "150px", width: "100%" }} />
			<BsQuestionLg onClick={() => setShowMeTimeDetail(prev => !prev)} />
			{showMeTimeDetail ? <div className="timeDetails">
				<h4>Learning Time Breakdown</h4>
				<ul>
					<li>Internet: ≈ 10-15 hours</li>
					<li>Version Control Systems: ≈ 5-10 hours</li>
					<li>Repo Hosting Services: ≈ 3-5 hours</li>
					<li>Node.js: ≈ 40-50 hours</li>
					<li>OS and General Knowledge: ≈ 15-20 hours</li>
					<li>Databases: ≈ 40-50 hours</li>
					<li>Scaling Databases: ≈ 10-15 hours</li>
					<li>APIs: ≈ 15-20 hours</li>
					<li>Caching: ≈ 10-15 hours</li>
					<li>Web Security Knowledge: ≈ 20-25 hours</li>
					<li>Testing: ≈ 20-25 hours</li>
					<li>CI/CD: ≈ 5-10 hours</li>
					<li>Software Design and Architecture: ≈ 30-40 hours</li>
				</ul>
				<pre>Full Hours 300</pre>
			</div>
				: null}
		</div>
	)
}

export default OverviewDataTime;