import "./App.css";
import svgIcons from "./components/ui/SvgIcons";
import Home from "./components/Home";
import ProjectHome from "./components/ProjectHome";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className={"mainBody"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home svgIcons={svgIcons} />} />
        <Route
          path="/project/:projectName"
          element={<ProjectHome icons={svgIcons} />}
        />
      </Routes>
      <Footer icons={svgIcons} />
    </main>
  );
};

export default App;
