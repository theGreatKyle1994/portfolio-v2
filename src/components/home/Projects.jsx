import "./Projects.css";
import Card from "../ui/Card";
import ProjectTile from "./ProjectTile";
import colorMasterPic from "../../assets/images/colorMaster.jpg";
import colorMasterGif from "../../assets/images/colorMasterGif.gif";
import cryptoniaPic from "../../assets/images/cryptonia.jpg";
import cryptoniaGif from "../../assets/images/cryptoniaGif.gif";
import atRecipesPic from "../../assets/images/atRecipes.jpg";
import atRecipesGif from "../../assets/images/atRecipesGif.gif";
import colorGeneratorPic from "../../assets/images/colorGenerator.jpg";
import colorGeneratorGif from "../../assets/images/colorGeneratorGif.gif";
import dadJokeGenPic from "../../assets/images/dadJokeGen.jpg";
import dadJokeGenGif from "../../assets/images/dadJokeGenGif.gif";

const Projects = () => {
  return (
    <Card title={"Projects"} noBorder>
      <div className={"projectContainer"}>
        <ProjectTile
          title={"Color Master"}
          imgUrl={colorMasterPic}
          gifUrl={colorMasterGif}
          gitHubUrl={"https://github.com/theGreatKyle1994/color-master"}
          liveUrl={"http://3.231.219.230/"}
        />
        <ProjectTile
          title={"Cryptonia"}
          imgUrl={cryptoniaPic}
          gifUrl={cryptoniaGif}
          gitHubUrl={"https://github.com/theGreatKyle1994/cryptonia"}
          liveUrl={"http://3.238.85.178/"}
        />
        <ProjectTile
          title={"@Recipes"}
          imgUrl={atRecipesPic}
          gifUrl={atRecipesGif}
          gitHubUrl={"https://github.com/theGreatKyle1994/react-recipe-app"}
          liveUrl={"https://thegreatkyle1994.github.io/react-recipe-app/"}
        />
        <ProjectTile
          title={"Color Scheme App"}
          imgUrl={colorGeneratorPic}
          gifUrl={colorGeneratorGif}
          gitHubUrl={
            "https://github.com/theGreatKyle1994/color-scheme-generator"
          }
          liveUrl={"https://thegreatkyle1994.github.io/color-scheme-generator/"}
        />
        <ProjectTile
          title={"Dad Joke Generator"}
          imgUrl={dadJokeGenPic}
          gifUrl={dadJokeGenGif}
          gitHubUrl={"https://github.com/theGreatKyle1994/dad-joke-generator"}
          liveUrl={"https://thegreatkyle1994.github.io/dad-joke-generator/"}
        />
      </div>
    </Card>
  );
};

export default Projects;
