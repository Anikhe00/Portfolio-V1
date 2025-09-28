import projectData from "../../projectsData";
import ProjectCard from "../common/ProjectCard";

function Projects() {
  return (
    <section className="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-[1.5rem] scroll-mt-16 lg:scroll-mt-24 overflow-visible">
      <h2 className="text-gray-800 text-[1.25rem] md:text-[1.5rem] lg:text-[1.5rem] font-semibold leading-normal font-[Baskerville]">
        Projects
      </h2>
      <ul className="w-full h-fit flex flex-col content-start gap-[2rem] lg:gap-[3rem] self-stretch overflow-visible">
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;
