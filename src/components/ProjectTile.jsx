import "./ProjectTile.css";

const ProjectTile = (props) => {
  return (
    <li className={"tileContainer"}>
      <h2 className={"tileTitle"}>
        <span className={"tileTitleTags"}>{`< `}</span>
        {props.title}
        <span className={"tileTitleTags"}>{` />`}</span>
      </h2>
      <a target={"_blank"} rel={"noreferrer"} href={props.url}>
        <div
          className={"tileImage"}
          style={{ backgroundImage: `url(${props.imgUrl})` }}
        />
      </a>
    </li>
  );
};

export default ProjectTile;
