import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className={"mainBody"}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
