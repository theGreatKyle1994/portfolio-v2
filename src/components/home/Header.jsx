import "./Header.css";

const Header = () => {
  return (
    <header className={"headerContainer"}>
      <section className={"contentContainerCode"}>
        <p>
          <span className={"funcTitle"}>function </span>
          <span className={"funcNameBracket"}>{`Kyle() {`}</span>
        </p>
        <p>
          <span className={"return"}>return </span>
          <span className={"JSXTags"}>{`<`}</span>
          <span className={"JSXName"}>Full-Stack Engineer </span>
          <span className={"JSXTags"}>{`/>`}</span>
          <span className={"semiColon"}>{` ;`}</span>
        </p>
        <p className={"funcNameBracket"}>{`}`}</p>
      </section>
      <section className={"contentContainerMain"}>
        <p className={"mainTitle"}>Kyle Rohr-Morey</p>
        <p className={"subTitle"}>Full-Stack Engineer</p>
      </section>
    </header>
  );
};

export default Header;
