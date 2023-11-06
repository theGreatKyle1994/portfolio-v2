import "./WorkTile.css";

const WorkTile = (props) => {
  return (
    <section className={"workContainer"}>
      <div className={"workTitlecontainer"}>
        <h2 className={"workTitle"}>{props.title}</h2>
        <h3 className={"workPosition"}>{props.position}</h3>
        <h4 className={"workDate"}>{props.date}</h4>
      </div>
      <p className={"workSummary"}>{props.summary}</p>
    </section>
  );
};

export default WorkTile;
