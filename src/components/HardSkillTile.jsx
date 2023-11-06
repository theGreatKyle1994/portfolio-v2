import "./HardSkillTile.css";

const HardSkillTile = (props) => {
  return (
    <div className={"skillBox"}>
      <span className={"iconBox"}>{props.icon}</span>
      <li className={"skillList"}>{props.title}</li>
    </div>
  );
};

export default HardSkillTile;
