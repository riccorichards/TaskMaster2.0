import { styled } from 'styled-components';
import Header from './headerComp/header/Header';
import Journey from './managingJourney/Journey/Journey';
import Visualization from './dataVisualization/visualization/Visualization';
import Progress from './ProgressOverview/ProgressPrepresentator/Progress';
import TimeContent from './learningTime/TimeContent/TimeContent';

const LandingWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 160px;
`;
const LandigPage = () => {
	return (
		<LandingWrapper>
			<Header />
			<Journey />
			<Progress />
			<Visualization />
			<TimeContent />
		</LandingWrapper>
	)
}

export default LandigPage;