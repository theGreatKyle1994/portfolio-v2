import "./ProjectTile.css";

const ProjectTile = ({ title, imgUrl, gifUrl, gitHubUrl, liveUrl }) => {
  return (
    <li className={"tileContainer"}>
      <h2 className={"tileTitle"}>
        <span className={"tileTitleTags"}>{`< `}</span>
        {title}
        <span className={"tileTitleTags"}>{` />`}</span>
      </h2>
      <div className="tile-info-overlay">
        <a className="tile-info-link" href={gitHubUrl} target="_blank">
          GitHub
        </a>
        {liveUrl && (
          <>
            |
            <a className="tile-info-link" href={liveUrl} target="_blank">
              Live
            </a>
          </>
        )}
      </div>
      <a href={liveUrl ? liveUrl : gitHubUrl} target="_blank">
        <div
          className={"tileImage"}
          style={{ backgroundImage: `url(${imgUrl})` }}
          onMouseOver={(e) =>
            (e.target.style.backgroundImage = `url(${gifUrl})`)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundImage = `url(${imgUrl})`)
          }
        />
      </a>
    </li>
  );
};

export default ProjectTile;
