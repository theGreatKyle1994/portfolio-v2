import "./Card.css";
import "./BottomBorder.css";
import { useRef, useEffect, useState } from "react";

const Card = ({ title, children, noBorder = false }) => {
  const thisCard = useRef(null);
  const [isAppeared, setIsAppeared] = useState(false);
  const [titleTypewriter, setTitleTypewriter] = useState({
    title: "",
    index: 0,
  });
  const [style, setStyle] = useState("");

  useEffect(() => {
    if (title && isAppeared) {
      if (titleTypewriter.index < title.length) {
        let range = Math.floor(Math.random() * (250 - 50) + 50);
        const typewriterInterval = setTimeout(() => {
          setTitleTypewriter((prevTypewriter) => ({
            title: prevTypewriter.title + title[prevTypewriter.index],
            index: prevTypewriter.index + 1,
          }));
        }, range);
        return () => clearTimeout(typewriterInterval);
      } else setStyle("card-appear");
    }
  }, [isAppeared, titleTypewriter.index]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAppeared(true);
          observer.unobserve(thisCard.current);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(thisCard.current);
    return () => {
      observer.unobserve(thisCard.current);
    };
  }, [thisCard.current]);

  return (
    <section
      className={`cardContainer ${noBorder ? "" : "bottomBorder"}`}
      ref={thisCard}
    >
      <h2 className={"cardTitle"}>
        <span className={"cardTitleBracket"}>{"{"}</span>
        {titleTypewriter.title}
        <span className={"cardTitleBracket"}>{"}"}</span>
      </h2>
      <div className={`card-body ${style}`}>{children}</div>
    </section>
  );
};

export default Card;
