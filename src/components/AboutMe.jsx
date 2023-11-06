import "./AboutMe.css";
import myImage from "../images/me.jpg";
import Card from "../UI/Card";

const AboutMe = () => {
  return (
    <Card title={"About Me"}>
      <section className={"aboutMeContainer"}>
        <p className={"aboutMe"}>
          Since 2020, I have been serving clients remotely as a freelance Junior
          Level Front-End Web Developer. My personal brand is founded on both a
          strong background in delivering products consistent with the latest
          industry trends and nearly a decade of experience in providing
          unparalleled customer service. In order to bring your web-based
          projects to life, I utilize several essential technologies in my
          production pipeline including JavaScript, TypeScript, and React. As I
          am actively continuing my education to establish a Full-Stack
          Developer skill set, I encourage you to check back on this page for
          regular updates. I look forward to assisting you in developing a
          unique web identity for your brand, special event, organization, or
          yourself.
        </p>
        <a
          target={"_blank"}
          rel="noreferrer"
          href={"https://www.linkedin.com/in/kyle-rohr-morey/"}
        >
          <img className={"myImage"} alt={"myself"} src={myImage} />
        </a>
      </section>
    </Card>
  );
};

export default AboutMe;
