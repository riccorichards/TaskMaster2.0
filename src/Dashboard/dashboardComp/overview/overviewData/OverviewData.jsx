import "./OverviewData.css"
import OverviewDataTime from './OverviewDataTime/OverviewDataTime';
import OverviewDataTask from './OverviewDataTask/OverviewDataTask';
import OverviewDataQuality from './OverviewDataQuality/OverviewDataQuality';

const OverviewData = () => {
	//const []
	return (
		<div className="OverviewData">
			<OverviewDataTime />
			<OverviewDataQuality />
			<OverviewDataTask />
		</div>
	)
}

export default OverviewData;