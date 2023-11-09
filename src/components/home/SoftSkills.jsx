import "./SoftSkills.css";
import Card from "../ui/Card";

const SoftSkills = () => {
  return (
    <Card title={"Soft Skills"}>
      <section className={"softSkillContainer"}>
        <div className={"titleContainer"}>
          <h3 className={"listTitle"}>
            <span className={"tileTitleTags"}>{`< `}</span>
            Personal Skills
            <span className={"tileTitleTags"}>{` />`}</span>
          </h3>
          <ul className={"listContainer"}>
            <li className={"listItem"}>Project Management</li>
            <li className={"listItem"}>Mentorship</li>
            <li className={"listItem"}>Client Engagement</li>
            <li className={"listItem"}>Code Review/ Pair Coding</li>
            <li className={"listItem"}>Strong Communication</li>
            <li className={"listItem"}>Innovative Problem Solving</li>
            <li className={"listItem"}>Adaptable to New Technologies</li>
            <li className={"listItem"}>Dedicated Team Worker</li>
            <li className={"listItem"}>Task Prioritization</li>
            <li className={"listItem"}>Self-driven</li>
            <li className={"listItem"}>Feedback Receptive</li>
            <li className={"listItem"}>Collaborative Approach</li>
            <li className={"listItem"}>Agile Methodologies</li>
          </ul>
        </div>
        <div className={"skillDivider"} />
        <div className={"titleContainer"}>
          <h3 className={"listTitle"}>
            <span className={"tileTitleTags"}>{`< `}</span>
            Technical Skills
            <span className={"tileTitleTags"}>{` />`}</span>
          </h3>
          <ul className={"listContainer"}>
            <li className={"listItem"}>Program Debugging</li>
            <li className={"listItem"}>Code Optimization</li>
            <li className={"listItem"}>Algorithm Development</li>
            <li className={"listItem"}>UI/UX Focus</li>
            <li className={"listItem"}>Wireframing/ Concept Design</li>
            <li className={"listItem"}>Program/ Practice Documentation</li>
            <li className={"listItem"}>Web Security Focus</li>
            <li className={"listItem"}>Search Engine Optimization (SEO)</li>
            <li className={"listItem"}>Semantic HTML with Accessibility</li>
            <li className={"listItem"}>Object Oriented Programming (OOP)</li>
            <li className={"listItem"}>Responsive Web Design</li>
            <li className={"listItem"}>
              Asynchronous JavaScript and XML (AJAX)
            </li>
            <li className={"listItem"}>RESTful Web Services</li>
            <li className={"listItem"}>API Development</li>
            <li className={"listItem"}>Model, View, Controller (MVC) Design</li>
          </ul>
        </div>
      </section>
    </Card>
  );
};

export default SoftSkills;
