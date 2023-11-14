import "./App.css";
import svgIcons from "./components/ui/SvgIcons";
import PullOutMenu from "./components/ui/PullOutMenu";
import Header from "./components/home/Header";
import Summary from "./components/home/Summary";
import AboutMe from "./components/home/AboutMe";
import Work from "./components/home/Work";
import HardSkills from "./components/home/HardSkills";
import SoftSkills from "./components/home/SoftSkills";
import Projects from "./components/home/Projects";
import Footer from "./components/home/Footer";

const App = () => {
  return (
    <>
      <PullOutMenu />
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
    </>
  );
};

export default App;
