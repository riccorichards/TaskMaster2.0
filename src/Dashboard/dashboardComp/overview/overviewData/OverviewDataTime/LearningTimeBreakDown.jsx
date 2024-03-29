import moment from "moment";

const LearningTimeBreakDown = ({ hours, perHours }) => {
  const specificDate = moment("2024-03-10");
  const currentDate = moment();

  const duration = moment.duration(specificDate.diff(currentDate));
  const theEnd = parseFloat(duration.asDays()).toFixed(2);

  const inDay = perHours / (60 * 60 * 1000);
  return (
    <div className="timeDetails">
      <h2>Time stats</h2>
      <ul>
        <li>End will be: {theEnd > 0 ? theEnd : "Finished!!!"} days</li>
        <li>Per day: {hours / theEnd} hours</li>
        <li>Sum hours in day: {inDay}</li>
        <li>Expect/real: {hours / theEnd / inDay}</li>
      </ul>
    </div>
  );
};

export default LearningTimeBreakDown;
