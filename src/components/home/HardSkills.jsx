import "./HardSkills.css";
import Card from "../ui/Card";
import HardSkillTile from "./HardSkillTile";

const HardSkills = ({ icons }) => {
  return (
    <Card title={"Hard Skills"}>
      <h2 className={"tileTitle"}>
        <span className={"tileTitleTags"}>{`< `}</span>
        Languages
        <span className={"tileTitleTags"}>{` />`}</span>
      </h2>
      <ul className={"skillContainer"}>
        <HardSkillTile title={"HTML"} icon={icons.tagHtml} />
        <HardSkillTile title={"CSS"} icon={icons.tagCss} />
        <HardSkillTile title={"JavaScript"} icon={icons.tagJavaScript} />
        <HardSkillTile title={"TypeScript"} icon={icons.tagTypeScript} />
        <HardSkillTile title={"JSON"} icon={icons.tagJson} />
        {/* <HardSkillTile title={"C"} icon={icons.tagC} /> */}
        {/* <HardSkillTile title={"C++"} icon={icons.tagCPlusPlus} /> */}
        <HardSkillTile title={"Python"} icon={icons.tagPython} />
      </ul>
      <h2 className={"tileTitle"}>
        <span className={"tileTitleTags"}>{`< `}</span>
        Frameworks / Librarys
        <span className={"tileTitleTags"}>{` />`}</span>
      </h2>
      <ul className={"skillContainer"}>
        <HardSkillTile title={"JQuery"} icon={icons.tagJQuery} />
        <HardSkillTile title={"Node.js"} icon={icons.tagNode} />
        <HardSkillTile title={"Express.js"} icon={icons.tagExpress} />
        <HardSkillTile title={"React.js"} icon={icons.tagReact} />
        <HardSkillTile title={"Flask"} icon={icons.tagFlask} />
      </ul>
      <h2 className={"tileTitle"}>
        <span className={"tileTitleTags"}>{`< `}</span>
        Databases
        <span className={"tileTitleTags"}>{` />`}</span>
      </h2>
      <ul className={"skillContainer"}>
        <HardSkillTile title={"SQL"} icon={icons.tagSQL} />
        <HardSkillTile title={"MySQL"} icon={icons.tagMySQL} />
        <HardSkillTile title={"MongoDB"} icon={icons.tagMongoDB} />
      </ul>
      <h2 className={"tileTitle"}>
        <span className={"tileTitleTags"}>{`< `}</span>
        Utilities / Tools
        <span className={"tileTitleTags"}>{` />`}</span>
      </h2>
      <ul className={"skillContainer"}>
        <HardSkillTile title={"Terminal"} icon={icons.tagTerminal} />
        <HardSkillTile title={"Git"} icon={icons.tagGit} />
        <HardSkillTile title={"GitHub"} icon={icons.tagGitHub} />
        <HardSkillTile title={"VS Code"} icon={icons.tagVSCode} />
      </ul>
    </Card>
  );
};

export default HardSkills;
