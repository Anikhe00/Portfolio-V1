import ToolList from "./ToolList";
import Button from "./Button";
import { GitHubIcon, LinkIcon } from "./Icons";

function ProjectCard(props) {
  return (
    <ul className="flex flex-row gap-5 w-full flex-start items-center group cursor-pointer">
      <img
        src={props.image}
        alt={props.name}
        className="w-[200px] h-[160px] object-cover rounded-lg border-1 border-purple-100"
      />
      <div className="flex flex-col content-start gap-4 w-full">
        <div className="flex flex-col content-start gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-800 group-hover:text-purple-700 text-[18px] leading-[20px] font-semibold font-[Baskerville]">
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
    </ul>
  );
}

export default ProjectCard;
