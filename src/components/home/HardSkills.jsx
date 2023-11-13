import "./HardSkills.css";
import Card from "../ui/Card";
import HardSkillTile from "./HardSkillTile";

const HardSkills = (props) => {
  return (
    <Card title={"Hard Skills"}>
      <h2 className={"tileTitle"}>
        <span className={"tileTitleTags"}>{`< `}</span>
        Languages
        <span className={"tileTitleTags"}>{` />`}</span>
      </h2>
      <ul className={"skillContainer"}>
        <HardSkillTile title={"HTML"} icon={props.icons.tagHtml} />
        <HardSkillTile title={"CSS"} icon={props.icons.tagCss} />
        <HardSkillTile title={"JavaScript"} icon={props.icons.tagJavaScript} />
        <HardSkillTile title={"TypeScript"} icon={props.icons.tagTypeScript} />
        <HardSkillTile title={"JSON"} icon={props.icons.tagJson} />
        {/* <HardSkillTile title={"C"} icon={props.icons.tagC} /> */}
        {/* <HardSkillTile title={"C++"} icon={props.icons.tagCPlusPlus} /> */}
        <HardSkillTile title={"Python"} icon={props.icons.tagPython} />
      </ul>
      <h2 className={"tileTitle"}>
        <span className={"tileTitleTags"}>{`< `}</span>
        Frameworks / Librarys
        <span className={"tileTitleTags"}>{` />`}</span>
      </h2>
      <ul className={"skillContainer"}>
        <HardSkillTile title={"JQuery"} icon={props.icons.tagJQuery} />
        <HardSkillTile title={"Node.js"} icon={props.icons.tagNode} />
        <HardSkillTile title={"Express.js"} icon={props.icons.tagExpress} />
        <HardSkillTile title={"React.js"} icon={props.icons.tagReact} />
        <HardSkillTile title={"Flask"} icon={props.icons.tagFlask} />
      </ul>
      <h2 className={"tileTitle"}>
        <span className={"tileTitleTags"}>{`< `}</span>
        Databases
        <span className={"tileTitleTags"}>{` />`}</span>
      </h2>
      <ul className={"skillContainer"}>
        <HardSkillTile title={"SQL"} icon={props.icons.tagSQL} />
        <HardSkillTile title={"MySQL"} icon={props.icons.tagMySQL} />
        <HardSkillTile title={"MongoDB"} icon={props.icons.tagMongoDB} />
      </ul>
      <h2 className={"tileTitle"}>
        <span className={"tileTitleTags"}>{`< `}</span>
        Utilities / Tools
        <span className={"tileTitleTags"}>{` />`}</span>
      </h2>
      <ul className={"skillContainer"}>
        <HardSkillTile title={"Terminal"} icon={props.icons.tagTerminal} />
        <HardSkillTile title={"Git"} icon={props.icons.tagGit} />
        <HardSkillTile title={"GitHub"} icon={props.icons.tagGitHub} />
        <HardSkillTile title={"VS Code"} icon={props.icons.tagVSCode} />
      </ul>
    </Card>
  );
};

export default HardSkills;
