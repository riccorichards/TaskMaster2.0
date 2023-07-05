import "./OverviewData.css"
import OverviewDataTime from './OverviewDataTime/OverviewDataTime';
import OverviewDataTask from './OverviewDataTask/OverviewDataTask';
import OverviewDataQuality from './OverviewDataQuality/OverviewDataQuality';

const OverviewData = () => {
	return (
		<div className="OverviewData">
			<OverviewDataTime />
			<OverviewDataTask />
			<OverviewDataQuality />
		</div>
	)
}

export default OverviewData;