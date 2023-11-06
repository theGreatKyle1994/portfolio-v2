import "./Projects.css";
import projectAlpha from "../images/projectAlpha.jpg";
import colorMaster from "../images/colorMaster.jpg";
import cryptonia from "../images/cryptonia.jpg";
import atRecipes from "../images/atRecipes.jpg";
import colorScheme from "../images/colorGenerator.jpg";
import dadJokeGen from "../images/dadJokeGen.jpg";
import Card from "../UI/Card";
import ProjectTile from "./ProjectTile";

const Projects = () => {
  return (
    <Card title={"Projects"}>
      <div className={"projectContainer"}>
        <ProjectTile
          title={"Project-Alpha"}
          url={"https://github.com/theGreatKyle1994/project-alpha/tree/dev"}
          imgUrl={projectAlpha}
        />
        <ProjectTile
          title={"Color Master"}
          url={"http://3.133.98.214/home"}
          imgUrl={colorMaster}
        />
        <ProjectTile
          title={"Cryptonia"}
          url={"http://3.22.187.148/home"}
          imgUrl={cryptonia}
        />
        <ProjectTile
          title={"@Recipes"}
          url={"https://thegreatkyle1994.github.io/react-recipe-app/"}
          imgUrl={atRecipes}
        />
        <ProjectTile
          title={"Color Scheme App"}
          url={"https://thegreatkyle1994.github.io/color-scheme-generator/"}
          imgUrl={colorScheme}
        />
        <ProjectTile
          title={"Dad Joke Generator"}
          url={"https://thegreatkyle1994.github.io/dad-joke-generator/"}
          imgUrl={dadJokeGen}
        />
      </div>
    </Card>
  );
};

export default Projects;
