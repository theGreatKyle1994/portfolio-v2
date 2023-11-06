import Card from "../UI/Card";
import "./Summary.css";

const Summary = () => {
  return (
    <Card title={"Summary"}>
      <div className="summary-container">
        <p className="summary">
          Hello! I'm a Full-Stack Engineer with 4 years of software development
          and 10 years of client services!
        </p>
      </div>
    </Card>
  );
};

export default Summary;
