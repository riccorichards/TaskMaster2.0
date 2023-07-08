import { useContext } from "react";
import "./roadmap.css";
import RoadMapEchart from "echarts-for-react";
import DataContext from "../../../dataContext";
const RoadMap = () => {
	const frondEndData = useContext(DataContext)

	const option = {
		tooltip: {
			trigger: 'item',
			triggerOn: 'mousemove'
		},
		series: [
			{
				type: 'tree',
				data: [frondEndData],
				left: '2%',
				right: '2%',
				top: '20.5%',
				bottom: '10%',
				symbol: 'emptyCircle',
				orient: 'BT',
				expandAndCollapse: true,
				label: {
					position: 'bottom',
					rotate: 0,
					verticalAlign: 'top',
					align: 'center'
				},
				leaves: {
					label: {
						position: 'top',
						rotate: 90,
						verticalAlign: 'middle',
						align: 'left'
					}
				},
				emphasis: {
					focus: 'descendant'
				},
				animationDurationUpdate: 750
			}
		]
	}
	return (
		<div className="road_map" id="map">
		<RoadMapEchart option={option} style={{width: "100%", height: "100%"}}/>
		</div>
	)
}

export default RoadMap