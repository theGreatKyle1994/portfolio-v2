import "./Projects.css";
import Card from "../UI/Card";
import ProjectTile from "./ProjectTile";
import projectAlphaPic from "../assets/images/projectAlpha.jpg";
import projectAlphaGif from "../assets/images/projectAlphaGif.gif";
import colorMasterPic from "../assets/images/colorMaster.jpg";
import colorMasterGif from "../assets/images/colorMasterGif.gif";
import cryptoniaPic from "../assets/images/cryptonia.jpg";
import cryptoniaGif from "../assets/images/cryptoniaGif.gif";
import atRecipesPic from "../assets/images/atRecipes.jpg";
import atRecipesGif from "../assets/images/atRecipesGif.gif";
import colorGeneratorPic from "../assets/images/colorGenerator.jpg";
import colorGeneratorGif from "../assets/images/colorGeneratorGif.gif";
import dadJokeGenPic from "../assets/images/dadJokeGen.jpg";
import dadJokeGenGif from "../assets/images/dadJokeGenGif.gif";

const Projects = () => {
  return (
    <Card title={"Projects"}>
      <div className={"projectContainer"}>
        <ProjectTile
          title={"Project-Alpha"}
          url={"https://github.com/theGreatKyle1994/project-alpha/tree/dev"}
          imgUrl={projectAlphaPic}
          gifUrl={projectAlphaGif}
        />
        <ProjectTile
          title={"Color Master"}
          url={"http://3.133.98.214/home"}
          imgUrl={colorMasterPic}
          gifUrl={colorMasterGif}
        />
        <ProjectTile
          title={"Cryptonia"}
          url={"http://3.22.187.148/home"}
          imgUrl={cryptoniaPic}
          gifUrl={cryptoniaGif}
        />
        <ProjectTile
          title={"@Recipes"}
          url={"https://thegreatkyle1994.github.io/react-recipe-app/"}
          imgUrl={atRecipesPic}
          gifUrl={atRecipesGif}
        />
        <ProjectTile
          title={"Color Scheme App"}
          url={"https://thegreatkyle1994.github.io/color-scheme-generator/"}
          imgUrl={colorGeneratorPic}
          gifUrl={colorGeneratorGif}
        />
        <ProjectTile
          title={"Dad Joke Generator"}
          url={"https://thegreatkyle1994.github.io/dad-joke-generator/"}
          imgUrl={dadJokeGenPic}
          gifUrl={dadJokeGenGif}
        />
      </div>
    </Card>
  );
};

export default Projects;
