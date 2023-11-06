import "./Projects.css";
import atRecipesImg from "../images/atRecipes.jpg";
import colorSchemeImg from "../images/colorGenerator.jpg";
import dadJokeGenImg from "../images/dadJokeGen.jpg";
import Card from "../UI/Card";
import ProjectTile from "./ProjectTile";

const Projects = () => {
  return (
    <Card title={"Projects"}>
      <ul className={"projectContainer"}>
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
      </ul>
    </Card>
  );
};

export default Projects;
