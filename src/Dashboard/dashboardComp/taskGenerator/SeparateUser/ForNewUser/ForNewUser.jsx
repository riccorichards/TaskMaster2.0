import "./ForNewUser.css";
import GraphEchart from "echarts-for-react";
import { useContext, useState } from "react";
import UserContext from "../../../../../userContext";
const ForNewUser = () => {
	const [goalName, setGoalname] = useState("")
	const [goalChildren, setGoalChildren] = useState([])
	const getData = useContext(UserContext);
	const graphData = getData.graphData;
	const setGoal = getData.setGoal;
	const setChildren = getData.setChildren;

	const goalNameHandler = e => {
		setGoalname(e.target.value)
	}
	const goalChildrenHandler = e => {
		setGoalChildren(e.target.value.split(","))
	}
	const option = {
		tooltip: {
			trigger: 'item',
			triggerOn: 'mousemove'
		},
		series: [
			{
				type: 'tree',
				data: [graphData],
				left: '2%',
				right: '2%',
				top: '20%',
				bottom: '8%',
				symbol: 'emptyCircle',
				orient: 'BT',
				expandAndCollapse: true,
				label: {
					position: 'bottom',
					rotate: 0,
					verticalAlign: 'middle',
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

	const definedGoal = () => {
		setGoal(goalName)
		setGoalname("")
	}
	const definedChildren = () => {
		setChildren(goalChildren)
		setGoalChildren("")
	}
	console.log(goalChildren)
	return (
		<div className="ForNewUser">
			<form id="form_for_new_user">
				<span>Provide Your Main Goal</span>
				<input type="text" placeholder="Main Goal" onChange={goalNameHandler} value={goalName} />
				<button onClick={() => definedGoal()}>Ready</button>
				<span>Please, Divide Your Goal Into Several Topics</span>
				<input type="text" placeholder="Sub Goals" value={goalChildren} onChange={goalChildrenHandler} />
				<button onClick={() => definedChildren()}>Ready</button>
			</form>
			<GraphEchart option={option} style={{ flex: "1.5", width: "100%", height: "100%" }} />
		</div>
	)
}

export default ForNewUser;