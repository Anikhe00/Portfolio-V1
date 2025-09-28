function ToolChip(props) {
  return (
    <div className="flex w-fit h-fit content-center rounded-full bg-purple-100 px-[10px] py-[2px]">
      <p className="text-purple-700 font-regular text-[14px] font-[Manrope] text-center leading-[20px]">
        {props.tool}
      </p>
    </div>
  );
}

export default ToolChip;
