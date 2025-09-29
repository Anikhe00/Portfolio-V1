export default function NavLink({ pageName }) {
  return (
    <a
      href={`#${pageName.toLowerCase()}`}
      className="flex items-center justify-center gap-[0.5rem] group"
    >
      <span className="w-[2rem] group-hover:w-[3rem] h-[0.063rem] bg-gray-500 group-hover:bg-purple-700 motion-reduce:transition-none"></span>
      <span className="text-[1rem] font-[Manrope] leading-normal text-gray-500 group-hover:text-purple-700">
        {pageName}
      </span>
    </a>
  );
}
