import Summary from "./home/Summary";
import AboutMe from "./home/AboutMe";
import Work from "./home/Work";
import HardSkills from "./home/HardSkills";
import SoftSkills from "./home/SoftSkills";
import Projects from "./home/Projects";

const Home = ({ svgIcons }) => {
  return (
    <>
      <Summary />
      <AboutMe />
      <Work />
      <HardSkills icons={svgIcons} />
      <SoftSkills />
      <Projects />
    </>
  );
};

export default Home;
