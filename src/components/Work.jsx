import Card from "../UI/Card";
import WorkTile from "./WorkTile";

const Work = () => {
  return (
    <Card title={"Experience"}>
      <WorkTile
        title={"Front-End Web Developer"}
        position={"Freelance"}
        date={"2020-Present"}
        summary={`Responsible for working alongside contracting client in maintaining and
        updating existing project code to comply with the client's specific
        needs, writing new JavaScript code to assist in implementing new product
        features with performance optimization in mind, editing, bugfixing, and
        addressing obstacles in production as needed in VS Code, and utilizing
        focus group data and user experience knowledge to ensure accessible and
        responsive design.`}
      />
    </Card>
  );
};

export default Work;
