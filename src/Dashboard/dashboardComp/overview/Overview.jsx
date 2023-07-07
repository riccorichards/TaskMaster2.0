import "./overview.css";
import OverviewData from './overviewData/OverviewData';
import ProgressOverview from './ProgressOverview/ProgressOverview';
import RecentlyActivity from './RecentlyActivity/RecentlyActivity';
const Overview = () => {
	return (
		<div className="overview" id="overview">
			<OverviewData />
			<ProgressOverview />
			<RecentlyActivity />
		</div>
	)
}

export default Overview