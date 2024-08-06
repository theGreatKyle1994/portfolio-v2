import Card from "../ui/Card";
import WorkTile from "./WorkTile";

const Work = () => {
  return (
    <Card title={"Experience"}>
      <WorkTile
        title={"Project Lead"}
        subTitle={"Develop.This()"}
        date={"2024-Present"}
        summary={`Successfully managed and delivered high-quality, 
        scalable web solutions. In this role, I oversaw all 
        phases of the project lifecycle, from initial requirement gathering and 
        planning to execution, testing, and deployment. I led cross-functional 
        teams, coordinated with stakeholders, and ensured projects were completed 
        on time and within budget. My technical proficiency included a strong 
        understanding of web technologies, frameworks, and best practices, 
        coupled with excellent problem-solving and communication skills. 
        I was dedicated to driving innovation, improving processes, and delivering 
        exceptional user experiences.`}
      />
      <WorkTile
        title={"Frontend Department Lead"}
        subTitle={"Techbyte Learning"}
        date={"2024"}
        summary={`Responsible for coordinating complex project assignments for a growing
        group of developers, utilizing Agile methodologies to ensure project
        continuation and quality assurance, delegating tasks according to each
        contributor's unique strengths and skill sets, independently
        contributing Git commits weekly to facilitate back-end and front-end
        requirements, collaborating with contributors in one-on-one
        and group code reviews for mentoring, and publishing thorough
        documentation for ease of reference.`}
      />
      <WorkTile
        title={"Full-Stack Engineer"}
        subTitle={"Freelance"}
        date={"2020-2024"}
        summary={`Responsible for working alongside contracting client in maintaining and
        updating existing project code to comply with the client's specific
        needs, writing new JavaScript code to assist in implementing new product
        features with performance optimization in mind, editing, bugfixing, and
        addressing obstacles in production as needed in VS Code, and utilizing
        focus group data and user experience knowledge to ensure accessible and
        responsive design.`}
      />
    </Card>
  );
};

export default Work;
