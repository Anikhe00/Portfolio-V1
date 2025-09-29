export default function LinkButton({ icon: Icon, label, onClick, className }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`font-[Manrope] text-gray-700 hover:text-purple-700 ${className} cursor-pointer gap-[0.25rem] hover:gap-[0.5rem] rounded-sm flex items-center justify-center`}
    >
      {label}
      <Icon className="w-[24px] h-[24px]" />
    </button>
  );
}
