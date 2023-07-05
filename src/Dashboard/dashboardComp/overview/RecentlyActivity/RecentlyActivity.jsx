import "./RecentlyActivity.css";

const RecentlyActivity = () => {
	return (
		<div className="RecentlyActivity">
			<h3>Recently Activity</h3>
			<table>
				<tr>
					<th>Serial Num</th>
					<th>Work space</th>
					<th>Duration</th>
					<th>Status</th>
					<th>Update Time</th>
				</tr>
				<tr>
					<td>1</td>
					<td>express</td>
					<td>1h:32m</td>
					<td>done</td>
					<td>07/05 20:46</td>
				</tr>
				<tr>
					<td>2</td>
					<td>node js</td>
					<td>1h:32m</td>
					<td>done</td>
					<td>07/05 20:46</td>
				</tr>
				<tr>
					<td>3</td>
					<td>mongoDB</td>
					<td>1h:32m</td>
					<td>done</td>
					<td>07/05 20:46</td>
				</tr>
			</table>
		</div>
	)
}

export default RecentlyActivity 