import Card from "./ui/Card";
import { useParams } from "react-router-dom";

const ProjectHome = () => {
  const params = useParams();
  console.log(params);
  return <Card title={params.projectName}>Test</Card>;
};

export default ProjectHome;
