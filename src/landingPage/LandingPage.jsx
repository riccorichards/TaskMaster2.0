import Header from './headerComp/header/Header';
import Journey from './managingJourney/Journey/Journey';
import Visualization from './dataVisualization/visualization/Visualization';
import Progress from './ProgressOverview/ProgressPrepresentator/Progress';
import TimeContent from './learningTime/TimeContent/TimeContent';
import Footer from './footer/Footer';
import "./landingPage.css";


const LandigPage = () => {
	return (
		<div className='landingPage'>
				<Header />
			<main className='landingMain'>
				<Journey />
				<Progress />
				<Visualization />
				<TimeContent />
			</main>
			<Footer />
		</div>
	)
}

export default LandigPage;