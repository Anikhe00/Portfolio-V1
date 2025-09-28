import ToolList from "./ToolList";

function ProjectCard(props) {
  return (
    <li
      className="relative flex flex-col-reverse md:flex-row lg:flex-row gap-[1.25rem] w-full flex-start items-start group cursor-pointer overflow-visible"
      onClick={() => window.open(props.link, "_blank", "noopener,noreferrer")}
    >
      <div class="absolute -inset-4 z-0 hidden px-4 rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-purple-50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-xs"></div>

      <img
        src={props.image}
        alt={props.name}
        className="aspect-video relative z-10 w-full md:w-[12.5rem] lg:w-[12.5rem] h-[12.5rem] md:h-[7rem] lg:h-[7rem] object-cover rounded-lg border-2 border-gray-200 group-hover:border-purple-200"
      />
      <div className="relative z-10 flex flex-col content-start gap-[1rem] w-full">
        <div className="relative z-10 flex flex-col content-start gap-[0.5rem]">
          <h3 className="text-gray-800 group-hover:text-purple-700 text-[1.125rem] leading-[1.25rem] font-semibold font-[Baskerville]">
            {props.name}
          </h3>

          <p className="text-gray-600 text-[16px] leading-[24px] font-normal font-[Manrope] w-full">
            {props.description}
          </p>
        </div>

        <div>
          <ToolList tools={props.tools} />
        </div>
      </div>
    </li>
  );
}

export default ProjectCard;
