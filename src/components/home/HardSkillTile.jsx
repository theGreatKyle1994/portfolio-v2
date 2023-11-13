import "./HardSkillTile.css";

const HardSkillTile = ({ icon, title }) => {
  return (
    <div className={"skillBox"}>
      <span className={"iconBox"}>{icon}</span>
      <li className={"skillList"}>{title}</li>
    </div>
  );
};

export default HardSkillTile;
