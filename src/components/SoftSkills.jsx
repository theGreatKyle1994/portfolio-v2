import "./SoftSkills.css";
import Card from "../UI/Card";

const SoftSkills = () => {
  return (
    <Card title={"Soft Skills"}>
      <section className={"softSkillContainer"}>
        <div className={"titleContainer"}>
          <h3 className={"listTitle"}>Personal Skills</h3>
          <ul className={"listContainer"}>
            <li className={"listItem"}>Strong Communication</li>
            <li className={"listItem"}>Innovative Problem Solving</li>
            <li className={"listItem"}>Adaptable to New Technologies</li>
            <li className={"listItem"}>Dedicated Team Worker</li>
            <li className={"listItem"}>Task Prioritization</li>
            <li className={"listItem"}>Self-driven</li>
            <li className={"listItem"}>Feedback Receptive</li>
            <li className={"listItem"}>Collaborative Approach</li>
          </ul>
        </div>
        <div className={"skillDivider"} />
        <div className={"titleContainer"}>
          <h3 className={"listTitle"}>Technical Skills</h3>
          <ul className={"listContainer"}>
            <li className={"listItem"}>Program Debugging</li>
            <li className={"listItem"}>Code Optimization</li>
            <li className={"listItem"}>Algorithm Development</li>
            <li className={"listItem"}>Focused on Web Security</li>
            <li className={"listItem"}>Search Engine Optimization (SEO)</li>
            <li className={"listItem"}>Semantic HTML with Accessibility</li>
            <li className={"listItem"}>Responsive Web Design</li>
            <li className={"listItem"}>Asynchronous JavaScript and XML (AJAX)</li>
            <li className={"listItem"}>RESTful Web Services</li>
          </ul>
        </div>
      </section>
    </Card>
  );
};

export default SoftSkills;
