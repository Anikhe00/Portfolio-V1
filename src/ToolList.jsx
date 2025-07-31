import ToolChip from "./ToolChip";

function ToolList({tools}) {
  return (
    <div className="flex gap-2 flex-wrap content-start">
      {tools.map(tool => (
        <ToolChip key={tool} tool={tool}/>
      ))}
    </div>
  )
}

export default ToolList;