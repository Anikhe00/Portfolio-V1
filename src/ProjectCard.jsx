import ToolList from "./ToolList";

function ProjectCard(props) {
  const handleClick = () => {
    window.open(props.link, '_blank', 'noopener, noreferrer')
  }

  return (
    <article className="flex flex-row gap-5 w-full flex-start group cursor-pointer" onClick={handleClick}>
      <img src={props.image} alt={props.name} className="w-[200px] h-[160px] object-contain rounded-lg border-1 border-purple-100" />
      <div className="flex flex-col content-start gap-4">
        <div className="flex flex-col content-start gap-2">
          <h3 className="text-gray-800 group-hover:text-purple-700 text-[18px] leading-[20px] font-semibold font-[Baskerville]">{props.name}</h3>
          <p className="text-gray-600 text-[16px] leading-[24px] font-normal font-[Manrope]">{props.description}</p>
        </div>

        <div>
          <ToolList tools={props.tools} />
        </div>
      </div>
    </article>
  )
}

export default ProjectCard;