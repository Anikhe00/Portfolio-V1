function ToolBadge(props) {
  return (
    <div key={props.id} className="flex flex-row gap-1 w-fit h-fit content-center rounded-sm bg-gray-100 px-[10px] py-[4px]">
      <img src={props.logo} alt={props.toolName} />
      <p className="text-gray-800 font-regular text-[16px] font-[Manrope] text-center leading-[24px]">{props.toolName}</p>
    </div>
  )
}

export default ToolBadge;