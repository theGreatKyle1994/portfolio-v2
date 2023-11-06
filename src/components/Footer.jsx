import "./Footer.css";
import FooterContact from "./FooterContact";

const Footer = (props) => {
  return (
    <footer className={"footerContainer"}>
      <ul className={"footerListContainerContact"}>
        <h3 className={"titleList"}>Contact Me</h3>
        <FooterContact isLink={false} title={"Mobile: (812)-304-9692"} />
        <FooterContact isLink={false} title={"kylemorey1994@gmail.com"} />
      </ul>
      <ul className={"footerListContainerLinks"}>
        <h3 className={"titleList"}>Find Me</h3>
        <FooterContact
          icons={props.icons.tagLinkedIn}
          isLink={true}
          title={"LinkedIn"}
          url={"https://www.linkedin.com/in/kyle-rohr-morey/"}
        />
        <FooterContact
          icons={props.icons.tagGitHub}
          isLink={true}
          title={"GitHub"}
          url={"https://github.com/theGreatKyle1994"}
        />
      </ul>
    </footer>
  );
};

export default Footer;
