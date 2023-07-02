import { styled } from 'styled-components';
import Header from './headerComp/header/Header';
import Journey from './managingJourney/Journey/Journey';

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
		</LandingWrapper>
	)
}

export default LandigPage;