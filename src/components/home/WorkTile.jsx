import "./WorkTile.css";

const WorkTile = ({ title, subTitle, date, summary }) => {
  return (
    <section className={"workContainer"}>
      <div className={"workTitlecontainer"}>
        <h2 className={"workTitle"}>{title}</h2>
        <h3 className={"workPosition"}>{subTitle}</h3>
        <h4 className={"workDate"}>{date}</h4>
      </div>
      <p className={"workSummary"}>{summary}</p>
    </section>
  );
};

export default WorkTile;
