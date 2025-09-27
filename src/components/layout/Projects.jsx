import projectData from "../../projectsData";
import ProjectCard from "../common/ProjectCard";

function Projects() {
  return (
    <section className="flex flex-col gap-6 content-start">
      <h2 className="text-gray-800 text-[24px] font-semibold leading-[28px] font-[Baskerville]">
        Projects
      </h2>
      <li className="w-full h-fit flex flex-col content-start gap-6 self-stretch">
        {projectData.map((project) => (
          <ProjectCard {...project} />
        ))}
      </li>
    </section>
  );
}

export default Projects;
