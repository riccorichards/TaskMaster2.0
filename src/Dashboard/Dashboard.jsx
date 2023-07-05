import "./dashboard.css";
import Navbar from './dashboardComp/navbar/Navbar';
import Overview from './dashboardComp/overview/Overview';

const Dashboard = () => {

	return (
		<main className="dashboard_main">
			<div className="navBar_wrapper">
				<Navbar />
			</div>
			<div className="components_wrapper">
				<Overview />
			</div>
		</main>
	)
}

export default Dashboard;