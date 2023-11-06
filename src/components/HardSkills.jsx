import "./HardSkills.css";
import "../UI/BottomBorder.css";
import Card from "../UI/Card";
import HardSkillTile from "./HardSkillTile";

const HardSkills = (props) => {
  return (
    <Card title={"Hard Skills"}>
      <ul className={"skillContainer"}>
        <HardSkillTile title={"HTML"} icon={props.icons.tagHtml} />
        <HardSkillTile title={"CSS"} icon={props.icons.tagCss} />
        <HardSkillTile title={"JavaScript"} icon={props.icons.tagJavaScript} />
        <HardSkillTile title={"TypeScript"} icon={props.icons.tagTypeScript} />
        <HardSkillTile title={"React.js"} icon={props.icons.tagReact} />
        <HardSkillTile title={"C++"} icon={props.icons.tagCPlusPlus} />
        <HardSkillTile title={"Terminal"} icon={props.icons.tagTerminal} />
        <HardSkillTile title={"Git"} icon={props.icons.tagGit} />
        <HardSkillTile title={"GitHub"} icon={props.icons.tagGitHub} />
        <HardSkillTile title={"VS Code"} icon={props.icons.tagVSCode} />
      </ul>
    </Card>
  );
};

export default HardSkills;
