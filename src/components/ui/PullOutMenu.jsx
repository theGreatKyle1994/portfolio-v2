import "./PullOutMenu.css";

const PullOutMenu = () => {
  return (
    <ul id={"side-menu-container"}>
      <p className="side-menu-link">Quick Links</p>
      <li className="side-menu-link">
        <a href="#Summary">Summary</a>
      </li>
      <li className="side-menu-link">
        <a href="#About Me">About Me</a>
      </li>
      <li className="side-menu-link">
        <a href="#Experience">Experience</a>
      </li>
      <li className="side-menu-link">
        <a href="#Hard Skills">Hard Skills</a>
      </li>
      <li className="side-menu-link">
        <a href="#Soft Skills">Soft Skills</a>
      </li>
      <li className="side-menu-link">
        <a href="#Projects">Projects</a>
      </li>
    </ul>
  );
};

export default PullOutMenu;
