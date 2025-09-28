export default function Button({ icon: Icon, label, onClick, className }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`size-[24px] text-gray-400 hover:text-purple-700 ${className} cursor-pointer rounded-sm flex items-center justify-center`}
    >
      <Icon />
    </button>
  );
}
