import "./Header.css";
import "../UI/BottomBorder.css";
import Card from "../UI/Card";

const Header = () => {
  return (
    <Card noRender={true}>
      <header className={"headerContainer"}>
        <section className={"contentContainerCode"}>
          <p>
            <span className={"funcTitle"}>function </span>
            <span className={"funcNameBracket"}>{`Kyle() {`}</span>
          </p>
          <p>
            <span className={"return"}>return </span>
            <span className={"JSXTags"}>{`<`}</span>
            <span className={"JSXName"}>Front-End Web Developer </span>
            <span className={"JSXTags"}>{`/>`}</span>
            <span className={"semiColon"}>{` ;`}</span>
          </p>
          <p className={"funcNameBracket"}>{`}`}</p>
        </section>
        <section className={"contentContainerMain"}>
          <p className={"mainTitle"}>Kyle Rohr-Morey</p>
          <p className={"subTitle"}>Front-End Web Developer</p>
        </section>
      </header>
    </Card>
  );
};

export default Header;
