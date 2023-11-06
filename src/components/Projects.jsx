import "./Projects.css";
import projectAlphaGif from "../images/projectAlphaGif.gif";
import colorMasterImg from "../images/colorMaster.jpg";
import cryptoniaImg from "../images/cryptonia.jpg";
import atRecipesImg from "../images/atRecipes.jpg";
import colorSchemeImg from "../images/colorGenerator.jpg";
import dadJokeGenImg from "../images/dadJokeGen.jpg";
import Card from "../UI/Card";
import ProjectTile from "./ProjectTile";

const Projects = () => {
  return (
    <Card title={"Projects"}>
      <div className={"projectContainer"}>
        <ProjectTile
          title={"Project-Alpha | Open Source"}
          url={"https://github.com/theGreatKyle1994/project-alpha/tree/dev"}
          imgUrl={projectAlphaGif}
        />
        <ProjectTile
          title={"Color Master"}
          url={"http://3.133.98.214/home"}
          imgUrl={colorMasterImg}
        />
        <ProjectTile
          title={"Cryptonia"}
          url={"http://3.22.187.148/home"}
          imgUrl={cryptoniaImg}
        />
        <ProjectTile
          title={"@Recipes"}
          url={"https://thegreatkyle1994.github.io/react-recipe-app/"}
          imgUrl={atRecipesImg}
        />
        <ProjectTile
          title={"Color Scheme App"}
          url={"https://thegreatkyle1994.github.io/color-scheme-generator/"}
          imgUrl={colorSchemeImg}
        />
        <ProjectTile
          title={"Dad Joke Generator"}
          url={"https://thegreatkyle1994.github.io/dad-joke-generator/"}
          imgUrl={dadJokeGenImg}
        />
      </div>
    </Card>
  );
};

export default Projects;
