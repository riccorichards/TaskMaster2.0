import "./instruction.css";
import { Link } from 'react-router-dom';
import ScrollToTop from './../../../ScrollToTop';

const Instruction = () => {

	const scrollAfterClick = (id) => {
		const element = document.getElementById(id);
		if (element) {
			const paddingTop = 110;
			const elementTop = element.getBoundingClientRect().top;
			const offsetTop = elementTop + window.scrollY - paddingTop;
			window.scrollTo({ top: offsetTop, behavior: "smooth" });
		}
	};

	return (
		<div className="instruction_wrapper">
			<ScrollToTop />
			<div className="instruction">
				<h1>Table Of content</h1>
				<ul>
					<li><Link to="#" onClick={() => scrollAfterClick("Introduction")}>Introduction</Link></li>
					<li><Link to="#" onClick={() => scrollAfterClick("Task")}>About of Task Generator</Link></li>
					<li><Link to="#" onClick={() => scrollAfterClick("Timer")}>About of Timer</Link></li>
					<li><Link to="#" onClick={() => scrollAfterClick("Road")}>About of Road Map</Link></li>
					<li><Link to="#" onClick={() => scrollAfterClick("Overview")}>About of Overview</Link></li>
				</ul>
				<div className="instruction_line" />
				<div className="instruction_content">
					<div className="content_introduction" id="Introduction">
						<h2>Introduction</h2>
						<p>Welcome to our comprehensive goal management platform! Here, you can effortlessly create daily and weekly task lists using our Task Generator. Maximize your productivity with our intuitive Time Management feature, and follow the Backend Roadmap to become a proficient backend developer. Track and analyze your progress and productivity on our Overview Dashboard. Join us on this journey to success!</p>
					</div>
					<div className="content_taskGenetator" id="Task">
						<h2>Task Generator</h2>
						<p>The Task Generator is a powerful tool that enables you to effortlessly create and manage your daily tasks. These tasks are seamlessly integrated into the Overview Dashboard, providing you with a comprehensive overview of your progress and achievements. </p>

						<p>With the Task Generator, you can gain valuable insights into your daily and weekly learning process. You have the flexibility to select a topic from our comprehensive roadmap and add it as a weekly task. Once you've chosen your weekly task, you can break it down into manageable daily tasks. This structured approach empowers you to take gradual steps towards mastering the weekly topic.</p>

						<p>Start using the Task Generator now and experience the power of effective task management in boosting your productivity and achieving your objectives. Happy learning and best of luck on your journey to success!</p>
					</div>
					<div className="content_Timer" id="Timer">
						<h2>Timer</h2>
						<p>The Timer section is a valuable tool that empowers you to manage your time with precision. With its insightful features, you can optimize your learning process and stay productive.</p>
						<p>The Timer section in the Overview Dashboard allows you to gain valuable insights into your study habits. It tracks the time spent on each topic, helping you identify which areas may require more attention. By understanding the distribution of study hours, you can prioritize your efforts and achieve a more balanced learning experience.</p>
						<p>For a more focused approach, the Timer section enables you to set specific time intervals using the Pomodoro timer. You can work in 25-minute increments, with short rest breaks of 5 or 15 minutes in between. However, we recommend using this timer for non-backend tasks, as the backend requires a deeper level of concentration and continuity.</p>
						<p>To use the Stopwatch effectively, it is essential to define the topic you are currently studying. By doing so, you can accurately track the time spent on each subject, providing valuable data for optimizing your learning process.</p>
						<p>Embrace the Timer section as your time management ally and unlock the potential of efficient studying. Enjoy the benefits of improved productivity and enhanced learning outcomes. Let's make the most of your valuable time on the journey to becoming a proficient backend developer!</p>
					</div>
					<div className="content_RoadMap" id="Road">
						<h2>Road Map</h2>
						<p>The Road Map is your ultimate guide on your journey to becoming a proficient backend developer. It presents a comprehensive overview of all the essential topics, as well as valuable subtopics, that will lead you to mastery.</p>
						<p>This well-structured map allows you to easily navigate through various learning areas, ensuring you always know what's ahead. From fundamental concepts to advanced techniques, each topic is carefully outlined to provide a clear path for your progress.</p>
						<p>By following the Road Map, you can confidently set your learning priorities and track your advancement. It serves as a reliable compass, guiding you towards the next step in your development journey. Whether you are just starting or looking to refine your skills, the Road Map is here to support and empower you.</p>
						<p>Embrace the Road Map as your trusted companion, always ready to show you the way. Stay curious, stay determined, and let this roadmap be your tool to unlock the vast world of backend development possibilities. Together, let's shape your future as a proficient backend developer!</p>
					</div>
					<div className="content_overview" id="Overview">
						<h2>Overview</h2>
						<p>Welcome to the Overview, the heart of our website where you witness the power of data visualization in action, tracking your daily progress towards your goals.</p>
						<p>Here, you'll find insightful data showcasing your daily achievements, represented by your completed tasks and overall task quality. This quality is derived from the formula: (daily completed tasks / total daily tasks) * 100%. Additionally, our website offers a comprehensive view of your overall quality, which calculates the average of all your daily quality scores.</p>
						<p>The Overview section also evaluates your progress in the backend learning process, measuring your spent hours in relation to the approximate backend learning time (300 hours).</p>
						<p>Stay up-to-date with the Recently Activity section, where you'll find crucial information about your interactions on our platform. This includes your activity count, topics explored, duration spent, completion status of specific topics, and the time of your last update, enabling you to track your recent engagement effectively.</p>
						<p>Lastly, explore the Common Using Topics chart, displaying the seven most popular learning topics, giving you insights into what subjects are frequently studied by others.</p>
						<p>In the Overview section, the power of data comes to life, allowing you to visualize your growth and progress towards becoming a proficient backend developer. Your journey to success starts here, as you harness data-driven insights to steer your path towards excellence. Let the Overview be your companion, guiding you towards greater achievements and fulfilling your goals like never before.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Instruction;