export default function LinkButton({ icon: Icon, label, onClick, className }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`size-[24px] text-[3rem] font-[Manrope] text-gray-700 hover:text-purple-700 ${className} cursor-pointer rounded-sm flex items-center justify-center`}
    >
      {label}
      <Icon />
    </button>
  );
}
