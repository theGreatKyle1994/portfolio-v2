import "./App.css";
import svgIcons from "./UI/SvgIcons";
import Header from "./components/Header";
import Summary from "./components/Summary";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import HardSkills from "./components/HardSkills";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className={"mainBody"}>
      <Header />
      <Summary />
      <AboutMe />
      <Work />
      <HardSkills icons={svgIcons} />
      <SoftSkills />
      <Projects />
      <Footer icons={svgIcons} />
    </main>
  );
};

export default App;
