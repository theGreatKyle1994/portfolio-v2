import "./FooterContact.css";

const FooterContact = (props) => {
  return (
    <li className={"footerListItem"}>
      <a
        style={{ pointerEvents: props.isLink ? "auto" : "none" }}
        className={"linkContainer"}
        target={"_blank"}
        rel={"noreferrer"}
        href={props.url}
      >
        <span className={"linkText"}>{props.title}</span>
        <span className={"linkIcon"}>{props.icons}</span>
      </a>
    </li>
  );
};

export default FooterContact;
