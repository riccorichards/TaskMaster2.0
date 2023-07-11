import "./dashboard.css";
import Navbar from './dashboardComp/navbar/Navbar';
import Overview from './dashboardComp/overview/Overview';
import TaskGenerator from './dashboardComp/taskGenerator/TaskGenerator';
import Timer from './dashboardComp/Timer/Timer';
import RoadMap from './dashboardComp/RoadMap/RoadMap';

const Dashboard = () => {

	const user = JSON.parse(localStorage.getItem("user"))
	if (!user) {
		return null
	} else {
		return (
			<main className="dashboard_main">
				<div className="navBar_wrapper">
					<Navbar />
				</div>
				<div className="components_wrapper">
					<Overview />
					<TaskGenerator />
					<Timer />
					<RoadMap />
				</div>
			</main>
		)
	}
}

export default Dashboard;