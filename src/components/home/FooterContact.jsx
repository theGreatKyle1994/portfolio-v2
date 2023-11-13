import "./FooterContact.css";

const FooterContact = ({ isLink, url, title, icons }) => {
  return (
    <li className={"footerListItem"}>
      <a
        style={{ pointerEvents: isLink ? "auto" : "none" }}
        className={"linkContainer"}
        target={"_blank"}
        rel={"noreferrer"}
        href={url}
      >
        <span className={"linkText"}>{title}</span>
        <span className={"linkIcon"}>{icons}</span>
      </a>
    </li>
  );
};

export default FooterContact;
