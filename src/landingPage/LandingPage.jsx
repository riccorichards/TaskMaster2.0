import { styled } from 'styled-components';
import Header from './headerComp/header/Header';
import Journey from './managingJourney/Journey/Journey';
import Visualization from './dataVisualization/visualization/Visualization';
import Progress from './ProgressOverview/ProgressPrepresentator/Progress';
import TimeContent from './learningTime/TimeContent/TimeContent';
import YourWay from './chooseYourWay/YourWay/YourWay';

const LandingWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
`;
const LandigPage = () => {
	return (
		<LandingWrapper>
			<Header />
			<main>
				<Journey />
				<Progress />
				<Visualization />
				<TimeContent />
				<YourWay />
			</main>
		</LandingWrapper>
	)
}

export default LandigPage;