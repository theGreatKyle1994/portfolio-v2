import "./AboutMe.css";
import myPic from "../../assets/images/me.jpg";
import Card from "../ui/Card";

const AboutMe = () => {
  return (
    <Card title={"About Me"}>
      <section className={"aboutMeContainer"}>
        <p className={"aboutMe"}>
          As a Full-Stack Engineer with experience encompassing 4 years of
          freelance development and over 10 years of client services, I approach
          projects with the goal of utilizing and adapting innovative
          technologies to perform efficient and aesthetically pleasing functions
          consistent with my clients' vision. I view each project as an
          opportunity to not only improve my skill set by challenging myself to
          comply with the lastest industry trends, but also to foster strong
          connections with both clients and colleagues. Prior to Graduating from
          the Coding Dojo in 2023, I assumed the role of mentoring my peers to
          facilitate mutual development. As a current Open-Source Project Lead,
          I similarly engage my colleagues in one-on-one code review in addition
          to hosting Agile based meetings to ensure adherence to project
          deadlines and to discuss continuous growth. My personal skill set
          utilizes several essential technologies in the production pipeline,
          including: JavaScript, TypeScript, Python and a specialty in React. I
          look forward to assisting you in developing a unique web identity for
          your brand, special event, organization, or yourself!
        </p>
        <a
          target={"_blank"}
          rel="noreferrer"
          href={"https://www.linkedin.com/in/kyle-rohr-morey/"}
        >
          <img className={"myImage"} alt={"myself"} src={myPic} />
        </a>
      </section>
    </Card>
  );
};

export default AboutMe;
