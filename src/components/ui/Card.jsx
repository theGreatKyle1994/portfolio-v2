import "../UI/Card.css";
import "../UI/BottomBorder.css";

const Card = (props) => {
  return (
    <section className={"cardContainer bottomBorder"}>
      {!props.noRender && (
        <h2 className={"cardTitle"}>
          <span className={"cardTitleBracket"}>{"{"}</span>
          {props.title}
          <span className={"cardTitleBracket"}>{"}"}</span>
        </h2>
      )}
      {props.children}
    </section>
  );
};

export default Card;
