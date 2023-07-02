import { styled } from 'styled-components';
import Header from './headerComp/header/Header';
import Journey from './managingJourney/Journey/Journey';
import Visualization from './dataVisualization/visualization/Visualization';

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
			<Visualization />
		</LandingWrapper>
	)
}

export default LandigPage;