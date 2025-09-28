import ToolList from "./ToolList";
import Button from "./Button";
import { GitHubIcon, LinkIcon } from "./Icons";

function ProjectCard(props) {
  return (
    <li className="flex flex-col-reverse md:flex-row lg:flex-row gap-[1.25rem] md: w-full flex-start items-center group cursor-pointer">
      <img
        src={props.image}
        alt={props.name}
        className="w-full md:w-[12.5rem] lg:w-[12.5rem] h-[12.5rem] md:h-[10rem] lg:h-[10rem] object-cover rounded-lg border-1 border-purple-100"
      />
      <div className="flex flex-col content-start gap-[1rem] w-full">
        <div className="flex flex-col content-start gap-[0.5rem]">
          <div className="flex gap-[1rem] items-center justify-between">
            <h3 className="text-gray-800 group-hover:text-purple-700 text-[1.125rem] leading-[1.25rem] font-semibold font-[Baskerville]">
              {props.name}
            </h3>

            <div className="flex flex-row gap-[0.5rem]">
              <Button
                icon={LinkIcon}
                label="Open project link"
                onClick={() =>
                  window.open(props.link, "_blank", "noopener,noreferrer")
                }
              />

              <Button
                icon={GitHubIcon}
                label="Open GitHub Repo"
                onClick={() =>
                  window.open(props.github, "_blank", "noopener,noreferrer")
                }
              />
            </div>
          </div>

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
