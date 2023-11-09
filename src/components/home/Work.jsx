import Card from "../ui/Card";
import WorkTile from "./WorkTile";

const Work = () => {
  return (
    <Card title={"Experience"}>
      <WorkTile
        title={"Project Lead"}
        subTitle={"Open-Source"}
        date={"2023-Present"}
        summary={`blah blah blah`}
      />
      <WorkTile
        title={"Full-Stack Engineer"}
        subTitle={"Freelance"}
        date={"2019-2023"}
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
