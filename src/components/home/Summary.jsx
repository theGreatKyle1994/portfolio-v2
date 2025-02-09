import Card from "../ui/Card";
import "./Summary.css";

const Summary = () => {
  return (
    <Card title={"Summary"}>
      <div className="summary-container">
        <p className="summary">Hello, My name is Kyle...</p>
        <p className="summary">
          I'm a Full-Stack Engineer with 6+ years of software development
          experience and 11 years of client services!
        </p>
      </div>
    </Card>
  );
};

export default Summary;
