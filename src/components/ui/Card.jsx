import "./Card.css";
import "./BottomBorder.css";
import { useRef, useEffect } from "react";

const Card = (props) => {
  const thisCard = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(entries[0].target);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(thisCard.current);
    return () => {
      observer.unobserve(thisCard.current);
    };
  }, [thisCard.current]);

  return (
    <section className={"cardContainer bottomBorder"} ref={thisCard}>
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
