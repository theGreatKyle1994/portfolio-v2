import svgIcons from "./ui/SvgIcons";
import Header from "./home/Header";
import Summary from "./home/Summary";
import AboutMe from "./home/AboutMe";
import Work from "./home/Work";
import HardSkills from "./home/HardSkills";
import SoftSkills from "./home/SoftSkills";
import Projects from "./home/Projects";
import Footer from "./home/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Summary />
      <AboutMe />
      <Work />
      <HardSkills icons={svgIcons} />
      <SoftSkills />
      <Projects />
      <Footer icons={svgIcons} />
    </>
  );
};

export default Home;
