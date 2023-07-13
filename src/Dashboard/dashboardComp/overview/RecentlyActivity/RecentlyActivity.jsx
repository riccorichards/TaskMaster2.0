import { useEffect, useState } from "react";
import "./RecentlyActivity.css";
import moment from "moment/moment";

const RecentlyActivity = () => {
	const [recentlyData, setRecentlyData] = useState([]);
	useEffect(() => {
		const getDataForRecentlyFromStorage = JSON.parse(localStorage.getItem("dataForRecently"))
		if (getDataForRecentlyFromStorage && getDataForRecentlyFromStorage.length > 0) {
			setRecentlyData(getDataForRecentlyFromStorage)
		}
	}, [setRecentlyData])

	useEffect(() => {
		const handlerDataForRecently = () => {
			const updateDataForRecently = JSON.parse(localStorage.getItem("dataForRecently"))
			if (updateDataForRecently && updateDataForRecently.length > 0) {
				setRecentlyData(updateDataForRecently)
			}
		}

		window.addEventListener("storage", handlerDataForRecently)

		return () => {
			window.removeEventListener("storage", handlerDataForRecently)
		}
	}, [])
	const offset = -4 * 60 * 60 * 1000;
	const GMT = recentlyData.map(obj => moment(obj.duration + offset).format("HH:mm:ss"))
	return (
		<div className="RecentlyActivity">
			<h3>Recently Activity</h3>
			<table>
				<tbody>
					<tr>
						<th>Serial Num</th>
						<th>Work space</th>
						<th>Duration</th>
						<th>Status</th>
						<th>Update Time</th>
					</tr>
					{recentlyData &&
						recentlyData.map((obj, index) => (
							<tr key={obj.id}>
								<td>{obj.id}</td>
								<td>{obj.workSpace}</td>
								<td>{GMT[index]}</td>
								{obj.status ? <td>done</td> : <td>failed</td>}
								<td>{obj.update}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

export default RecentlyActivity 